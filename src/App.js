import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddType from './components/AddType/AddType';
import ShowType from './components/ShowType/ShowType';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>

<Routes>

<Route path="addType" element={<AddType/>}/>
<Route path="afficherProduit" element={<ShowType/>}/>



</Routes>

</BrowserRouter>




    </div>
  );
}

export default App;
