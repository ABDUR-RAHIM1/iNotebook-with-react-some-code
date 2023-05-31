
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import NoteState from './Context/Notes/notesState';
import Container from 'react-bootstrap/esm/Container';
import Alert from './Components/Alert/Alert';


function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
            <Header />
            <Alert massege="this Journoy is Awesome"/>
          <Container>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
