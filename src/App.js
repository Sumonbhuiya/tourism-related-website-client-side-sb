import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      {/* call all pages and take them specific route */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/place_order/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/add_service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manage_service">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
