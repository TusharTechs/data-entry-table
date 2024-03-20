import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataEntry from "./DataEntry";
import CreateEntry from './CreateEntry';
import EditEntry from './EditEntry';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Data Entry Table</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DataEntry />}></Route>
            <Route path='/data/create' element={<CreateEntry />}></Route>
            <Route path='/update/:id' element={<EditEntry />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
