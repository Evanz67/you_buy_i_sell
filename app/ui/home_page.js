"use client";
import { useState } from 'react';

function Product({product_name, product_description, product_price, switchProductPage}) {

    return (
      <button onClick={() => switchProductPage(product_name, product_description, product_price)} className="border-8 bg-teal-400 border-teal-400 w-72 h-72 text-4xl font-bold">{product_name}</button>
    )
  }

export function HomePage({switchProductPage, switchHomePage, switchListingPage, switchProfilePage, signIn, user, logout, list_of_products}) {

  const [search, setSearch] = useState('');
  const searchedProducts = list_of_products.filter((product) => product.name.toLowerCase() === search.toLowerCase());
  const productResult = searchedProducts.length > 0 ? searchedProducts : list_of_products;

  function searchProduct(event) {
    setSearch(event.target.value);
  }

  if (user === null) {
    return (
      <main className="space-y-16 flex flex-col">
      <div className="bg-white flex flex-row h-16 items-center justify-between">
        <div className="border-0 w-5/12 flex space-x-12 ml-10 items-center">
          <div>
            <button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Home</button>
          </div>
          <div className="border-2 border-teal-400 h-10 min-w-96 w-8/12 rounded-3xl flex flex-none">
            <img src="/search_icon.png" alt="search_icon" className="w-6 h-6 mt-1.5 ml-3" />
            <form className="w-10/12">
              <input type="text" placeholder="Search" onChange={searchProduct} className="text-neutral-950 ml-3 pl-1 mt-1.5 w-10/12 focus:outline-none"></input> 
            </form>  
          </div>
        </div>
        
        <div className="pr-12 space-x-4">
          <button onClick={signIn} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Sign In</button>
        </div>
      </div>

      <div className="bg-white h-max mx-10 rounded-lg flex flex-none flex-col">
        <div className="flex flex-none flex-wrap gap-24 m-10">
          {productResult.map((product) => (
            <div key={product.id}>
              <Product product_name={product.name} product_description={product.description} product_price={product.price} switchProductPage={switchProductPage}/>
            </div>
          ))}    
        </div>
      </div>
    </main>
    );
  }
  
  return (
    <main className="space-y-16 flex flex-col">
    <div className="bg-white flex flex-row h-16 items-center justify-between">
      <div className="border-0 w-5/12 flex space-x-12 ml-10 items-center">
        <div>
          <button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Home</button>
        </div>
        <div className="border-2 border-teal-400 h-10 min-w-96 w-8/12 rounded-3xl flex flex-none">
          <img src="/search_icon.png" alt="search_icon" className="w-6 h-6 mt-1.5 ml-3" />
          <form className="w-10/12">
            <input type="text" placeholder="Search" onChange={searchProduct} className="text-neutral-950 ml-3 pl-1 mt-1.5 w-10/12 focus:outline-none"></input> 
          </form> 
        </div>
        <div>
          <button onClick={switchListingPage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Add Listing</button>
        </div>
      </div>
        
        <div className="pr-12 space-x-4">
          <button onClick={switchProfilePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Profile</button>
          <button onClick={logout} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Logout</button>
        </div>
      </div>

      <div className="bg-white h-max mx-10 rounded-lg flex flex-none flex-col">
        <div className="flex flex-none flex-wrap gap-24 m-10">
          {productResult.map((product) => (
            <div key={product.id}>
              <Product product_name={product.name} product_description={product.description} product_price={product.price} switchProductPage={switchProductPage} />
            </div>
          ))}    
        </div>
      </div>
    </main>
  );
}