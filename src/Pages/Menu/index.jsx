import React from "react";
import Popular from "../Popular";
import Delivery from "../Delivery";
import Footer from "../Footer";
import MenuHeader from "../MenuHeader";
import ProductsMenu from "../ProductsMenu";
export default function Menu() {
  return (
    <>
      <MenuHeader />
      <ProductsMenu />
      <Popular />
      <Delivery />
      <Footer />
    </>
  );
}
