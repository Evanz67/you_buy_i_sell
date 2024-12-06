"use client";
import { HomePage } from "./home_page";
import { ProductPage } from "./product_page";
import { useState } from "react";

export function Main() {
  const [page, setPage] = useState('home');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  function switchProductPage(name, description, price) {
    setName(name);
    setDescription(description);
    setPrice(price);
    setPage('product');
  }

  function switchHomePage() {
    setPage('home');
  }

  function ShowPage() {
    if (page === 'home') {
      return (
        <HomePage switchProductPage={switchProductPage} switchHomePage={switchHomePage}/>
      );
    };

    if (page === 'product') {
      return (
        <ProductPage name={name} description={description} price={price} switchHomePage={switchHomePage}/>
      );
    };
  }

  return (
    <div>
      <ShowPage />
    </div>
  );
}

