import './App.css';
import NewProductForm from './components/NewProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/boostrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path= '/'>
            <NewProductForm></NewProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>
          <Route exact path = '/products/:_id'>
            <OneProduct></OneProduct>
          </Route>
          <Route exact path = '/products/edit/:_id'>
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;