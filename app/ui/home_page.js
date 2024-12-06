import list_of_items from "./item.json";


function Items({item_name, item_description, item_price, switchProductPage}) {

    return (
      <button onClick={() => switchProductPage(item_name, item_description, item_price)} className="border-2 border-teal-400 w-72 h-72">{item_name}</button>
    )
  }

export function HomePage({switchProductPage, switchHomePage}) {
  
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

      <div className="bg-white h-max mx-10 rounded-lg flex flex-col">
        <div className="grid grid-cols-7 gap-4 m-10">
          {list_of_items.map((item) => (
            <div key={item.id}>
              <Items item_name={item.name} item_description={item.description} item_price={item.price} switchProductPage={switchProductPage}/>
            </div>
          ))}    
        </div>
      </div>
    </main>
  ) 
}