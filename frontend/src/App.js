import './App.css';
// import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
    <div className="darker">
    <Routes>
    <Route path='/' Component={HomePage}/>
    <Route path='/Chats' element={<ChatPage/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
