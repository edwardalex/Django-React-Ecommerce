import { Container } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import OrderList from './pages/OrderList';
import UserList from './pages/UserList';
import UserEdit from './pages/UserEdit';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <main className='py-5 '>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
          <Route path='/order/:id' component={Order} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />

          <Route path='/admin/userlist' component={UserList} />
          <Route path='/admin/user/:id/edit' component={UserEdit} />

          <Route path='/admin/productlist' component={ProductList} />
          <Route path='/admin/product/:id/edit' component={ProductEdit} />

          <Route path='/admin/orderlist' component={OrderList} />
        </Container>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
