"use client";
import { Provider } from "react-redux";
import Nav from "./Nav";
import store from "../store/store";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <Provider store={store}>
      <Nav />
      <NavMenu />
    </Provider>
  );
}

export default Header;
