"use client";
import { HomePage } from "./home_page";
import { ProductPage } from "./product_page";
import { ListingPage } from "./listing_page";
import { useState, useEffect } from "react";
import { getDataUser, addData, getData } from "../utility/database";

export function Main({signIn, user, logout}) {
  const [product, setProduct] = useState([]);
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

  function switchListingPage() {
    setPage('listing');
  }

  function addProduct(productAdded) {
    const addedData = addData(productAdded);
    const addedDataId = {...productAdded, id: addedData};
    setProduct((oldProduct) => [...oldProduct, addedDataId]);
  }

  async function generateMerchandise() {
    
    try {
      const data = await getData();  
      setProduct(data);
    } catch (e) {
      //throw new Error(`Failed: ${e.message}`);  
    }
  } 

  function ShowPage() {
    if (page === 'home') {
      return (
        <HomePage switchProductPage={switchProductPage} switchHomePage={switchHomePage} switchListingPage={switchListingPage} signIn={signIn} user={user} logout={logout} list_of_products={product} />
      );
    };

    if (page === 'product') {
      return (
        <ProductPage name={name} description={description} price={price} switchHomePage={switchHomePage} user={user} signIn={signIn} logout={logout} switchListingPage={switchListingPage} />
      );
    };

    if (page === 'listing') {
      return (
        <ListingPage switchHomePage={switchHomePage} addProduct={addProduct} />
      );
    };
  }
  
  useEffect(() => {
    generateMerchandise();
  }, [user]);

  return (
    <div>
      <ShowPage />
    </div>
  );
}

