"use client";
import { Provider } from "react-redux";
import Nav from "./Nav";
import store from "../store/store";

function Header() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

export default Header;
