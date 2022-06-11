import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const them = createTheme();
function App() {
  return (
    
    <ThemeProvider theme={them}>
    <AppBar title="Enter Gradution " />
    <Login />
    
    </ThemeProvider>
    
    
    
  );
}

export default App;
