
export function ProductPage({name, description, price, switchHomePage, user, signIn, logout, switchListingPage, switchProfilePage}) {

  if (user === null) {
    return (
      <main className="space-y-16">
        <div className="bg-white flex flex-row h-16 items-center justify-between">
          <div className="border-0 w-5/12 flex space-x-12 ml-10 items-center">
            <div>
              <button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Home</button>
            </div>
          </div>
          
          <div className="pr-12 space-x-4">
            <button onClick={signIn} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Sign In</button>
          </div>
        </div>
  
        <div className="bg-white h-max mx-10 rounded-lg flex gap-12 p-24">
          <div className="flex justify-center items-center border-2 border-teal-400 w-4/12 h-96">
            <h1 className="text-3xl">No image found</h1>
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

  return (
    <main className="space-y-16 flex flex-col">
    <div className="bg-white flex flex-row h-16 items-center justify-between">
      <div className="border-0 w-5/12 flex space-x-12 ml-10 items-center">
        <div>
          <button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 bg-teal-400 rounded-lg">Home</button>
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

      <div className="bg-white h-max mx-10 rounded-lg flex gap-12 p-24">
        <div className="flex justify-center items-center border-2 border-teal-400 w-4/12 h-96">
          <h1 className="text-3xl">No image found</h1>
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