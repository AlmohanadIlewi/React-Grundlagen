import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, List } from '@mui/material';
// import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = () => {

    if(inputValue === "") return
    const task = {
      text: inputValue,
      checked: false    
    }
    setTodos([...todos, task]);
    setInputValue('');
  }

  const toogleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  return (
    <>
    <Container maxWidth="sm" align="center">
      
    <Typography variant="h1" >
      My ToDo List
    </Typography>
    <hr/>
    <Stack direction="row" spacing={4}>
      <TextField id="outlined-basic" label="Neue Aufgabe" variant="outlined" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button variant="contained" onClick={handleClick}>ToDo hinzufügen</Button>
      <Button variant="contained" onClick={() => setTodos([])}>Alle löschen</Button>

    </Stack>
      <br />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '3px solid black' }}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <ul >
        {todos.map((task, index) => {
          return (
            <li>
              <label className={task.checked ? "done" : ""}><input type="checkbox" onClick={() => toogleCheck(index)}/> {task.text}</label>
            </li>
          );})}
      </ul>
    </Container>
    
    </>
  );
}

export default App;