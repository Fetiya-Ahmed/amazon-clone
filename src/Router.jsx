import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './Pages/Payment/Payment';
import Auth from './Pages/Auth/Auth';
import Orders from './Pages/Order/Order';
import Landing from './Pages/Landing/Landing';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
const stripePromise = loadStripe("pk_test_51OkhkNG6txw78sgYAWv1NbmpNhN4uojDo1KsTJMfZpE1aQMwRRn59mGaNpAoYS2cCmp2uxc0XBYahu3MuTICO3TJ00X1HzhWpw");

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/auth' element={<Auth />}/>
                       <Route path='/payments' element={
                    <ProtectedRoute 
                    msg={"You must log-in to pay first"} redirect={"/payments"}>
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </ProtectedRoute>
                } />
                    <Route path='/orders' element={
                    <ProtectedRoute 
                    msg={"You must log-in first to access your orders "} redirect={"/orders"}>
                            <Orders />
                    </ProtectedRoute>
               } />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default Routing;
