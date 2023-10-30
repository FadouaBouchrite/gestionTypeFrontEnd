
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddType from './components/AddType/AddType';
import ShowType from './components/ShowType/ShowType';
import Home from './Acceuil/HomePage';
import AddProduct from './ProductType/AddProduct';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>

<Routes>

<Route path="addType" element={<AddType/>}/>
<Route path="afficherProduit" element={<ShowType/>}/>
<Route path="/ajouter_un_produit"><AddProduct/></Route>


</Routes>

</BrowserRouter>




    </div>
 );
}

export default App;
