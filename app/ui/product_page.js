

export function ProductPage({name, description, price, switchHomePage}) {

  return (
    <main className="space-y-16">
      <div className="bg-white flex flex-row h-16 items-center justify-between">
        <div className="border-0 w-5/12 flex space-x-12 ml-10 items-center">
          <div>
            <button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Home</button>
          </div>
          <div className="border-2 border-teal-400 h-10 w-10/12 rounded-3xl flex">
            <img src="/search_icon.png" alt="search_icon" className="w-6 h-6 mt-1.5 ml-3" />
            <input type="text" placeholder="Search" className="text-neutral-950 ml-3 pl-1 w-10/12 focus:outline-none"></input> 
          </div>
        </div>
        
        <div className="pr-12 space-x-4">
          <button className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Sign In</button>
          <button className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Register</button>
        </div>
      </div>

      <div className="bg-white h-max mx-10 rounded-lg flex gap-12 p-24">
        <div className="border-2 border-teal-400 w-4/12 h-96">
 
        </div>
        <div className="border-0 w-5/12 h-96 overflow-hidden break-words">
          <h1 className="text-4xl pb-5">{name}</h1>
          <h1 className="text-xl font-bold pb-5">Price: ${price}</h1>
          <h1 className="text-xl font-bold">Description</h1>
          <p>{description}</p>
          
        </div>
        <div className="border-0 w-3/12 h-72 flex flex-col items-center space-y-3 py-8"> 
            <button className="border-2 border-teal-400 w-8/12 text-white p-2 bg-teal-400 rounded-lg">Purchase Item</button>
            <button className="border-2 border-teal-400 w-8/12 text-white p-2 bg-teal-400 rounded-lg">Favorite</button>
            <button className="border-2 border-teal-400 w-8/12 text-white p-2 bg-teal-400 rounded-lg">Contact User</button>
        </div>
        
      </div>
    </main>
  );

}