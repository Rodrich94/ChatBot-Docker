import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ChatApp = forwardRef(({}, ref) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const theme = useTheme();

  // Exponer una función para resetear el chat al padre
  useImperativeHandle(ref, () => ({
    resetChat: () => {
      setMessages([]);
      setInput('');
    }
  }));

  const handleSend = async () => {
    setInput('');
    if (input.trim() === '' || isSending) return;

    setIsSending(true);

    const newMessage = {
      content: input,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const chatHistory = messages
        .map((msg) => `${msg.sender === 'user' ? 'Usuario' : 'Bot'}: ${msg.content}`)
        .join('\n');
      
      const prompt = `${chatHistory}\nUsuario: ${input}\nBot:`;

      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/Llama-3.2-1B-Instruct',
          prompt: prompt,
          max_tokens: 300,
          temperature: 0.2,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener la respuesta del servidor.');
      }

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { content: data.choices[0]?.text || 'Sin respuesta', sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: 'Error al obtener la respuesta del bot.', sender: 'bot' },
      ]);
    }

    setIsSending(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height="80vh"
      bgcolor="background.default"
      width="60%"
      p={2}
    >
      <Typography variant="h5" gutterBottom align="center">
        ¡Bienvenido al Chat!
      </Typography>

      <Box
        flex="1"
        mb={2}
        p={2}
        borderRadius={2}
        sx={{ border: 1, borderColor: 'rgba(135, 184, 103, 0.2)' }}
        overflow="auto"
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                textAlign: msg.sender === 'user' ? 'right' : 'left',
              }}
            >
              <ListItemText
                primary={
                    <Typography
                    variant="body1"
                    bgcolor={msg.sender === 'user' ? theme.palette.custom.userMessage.background : theme.palette.custom.botMessage.background}
                    color={msg.sender === 'user' ? theme.palette.custom.userMessage.color : theme.palette.custom.botMessage.color}
                    p={1}
                    borderRadius={2}
                    display="inline-block"
                    sx={{
                        maxWidth: msg.sender === 'bot' ? '85%' : '100%', // 50% para el bot, 70% para el usuario
                        animation: msg.sender === 'bot' ? 'moveUp 0.5s ease-out' : 'none', // Animación para el bot
                        wordWrap: 'break-word', // Asegura que el texto largo se ajuste dentro del ancho
                    }}
                    >
                    {msg.content}
                    </Typography>
                }
                />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          sx={{ mr: 2, backgroundColor: '#ffffff' }}
        />
        <Button variant="contained" onClick={handleSend} disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar'}
        </Button>
      </Box>
      {/* Estilo global para animaciones */}
      <style>
        {`
          @keyframes moveUp {
            0% {
              transform: translateY(20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
});

export default ChatApp;
