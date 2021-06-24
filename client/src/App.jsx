import React, { Suspense, lazy } from "react";
import { CartContextProvider } from "context/CartContext";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { REGISTER, SIGNIN } from "constants/constants";

//Pages
const LoginAndSignup = lazy(() =>
  import("pages/LoginAndSignup/LoginAndSignup")
);
const Home = lazy(() => import("pages/Home/Home"));
const Products = lazy(() => import("pages/Products/Products"));

function App() {
  return (
    <React.Fragment>
      <CartContextProvider>
        <header>
          <Header></Header>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path="/signIn"
                render={() => <LoginAndSignup page={SIGNIN} />}
              />
              <Route
                exact
                path="/register"
                render={() => <LoginAndSignup page={REGISTER} />}
              />
              <Route exact path="/products" render={() => <Products />} />
              <Route exact path="/" render={() => <Home />} />
            </Switch>
          </Suspense>
        </main>
      </CartContextProvider>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
