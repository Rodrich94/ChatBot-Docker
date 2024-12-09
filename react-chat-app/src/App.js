import React, { useState, useRef } from 'react';
import { ThemeProvider, CssBaseline, Box, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton, Button, Breadcrumbs, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme/theme';
import ChatApp from './components/ChatApp';
import ChatIcon from './assets/pngwing.com.png';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const chatAppRef = useRef(null); // Crea el ref para el componente ChatApp

  // Función para abrir y cerrar el Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Función para manejar la limpieza del chat
  const handleNewChat = () => {
    if (chatAppRef.current) {
      chatAppRef.current.resetChat(); // Llama al método resetChat en ChatApp
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center" flexGrow={1}>
            <Typography variant="h6">
              Chat Optic
            </Typography>
            <img src={ChatIcon} alt="Chat Icon" style={{ width: 35, height: 35, marginRight: 8, marginLeft: 8 }} />
          </Box>

          <Button 
            color="inherit" 
            onClick={handleNewChat} 
            variant="outlined"
          >
            Nuevo Chat
          </Button>
        </Toolbar>
      </AppBar>

      <Box pt={10} pl={2} width="70%" mx="auto">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Inicio
          </Link>
          <Typography color="textPrimary">ChatApp</Typography>
        </Breadcrumbs>
      </Box>

      <Box display="flex">
        <Drawer
          open={drawerOpen}
          onClose={toggleDrawer}
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box width={250} role="presentation" onClick={toggleDrawer}>
            <List>
              <ListItem button>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Configuración" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Acerca de" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box bgcolor="background.default" width="100%" height="88vh" display={"flex"} justifyContent={"center"} border="1px solid #ccc">
          {/* Pasar el ref al componente ChatApp */}
          <ChatApp ref={chatAppRef} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
