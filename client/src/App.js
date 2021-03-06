import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AnimatePresence } from "framer-motion";


import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const ProductDetailsPage = lazy(() => import('./pages/product-details/productDetails.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  
    return (
      <div className="App">

        <GlobalStyle />
        <Header />
        {/* <AnimatePresence initial={false} exitBeforeEnter> */}
        <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              {/* <Switch> */}
                <ErrorBoundary>
                  <Suspense fallback={<Spinner />}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/product/:productId" component={ProductDetailsPage} />
                    <Route 
                    exact 
                    path='/signin' 
                    render={() => 
                    currentUser ? 
                      ( <Redirect to='/' /> ) :
                      ( <SignInAndSignUpPage />)
                    }
                    />
                  </Suspense>
                </ErrorBoundary>
              </Switch>
              </AnimatePresence>
        )}
      />
        {/* </AnimatePresence> */}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
