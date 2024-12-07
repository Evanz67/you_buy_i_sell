"use client";
import { useState } from "react";

export function ListingPage({switchHomePage, addProduct}) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');

	function Name(event) {
		setName(event.target.value);
	}

	function Price(event) {
		setPrice(event.target.value);
	}

	function Description(event) {
		setDescription(event.target.value);
	}

	function SubmitChange(event) {
		event.preventDefault();
		if (/^\d*\.?\d*$/.test(price)) { 
			addProduct({name: name, description: description, price: price});
		} else {
			alert("Please only put numbers in the price");
		}
	};

	return (
		<main className="flex justify-center items-center h-screen">
			<div className="border-2 bg-white w-3/12 h-3/6 flex flex-col">
				<button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 m-3 bg-teal-400 rounded-lg w-2/12">Go back</button>
				<h1 className="mt-12 mb-4 self-center text-4xl font-bold">Add your product</h1>

				<form onSubmit={SubmitChange} className="p-8 bg-gray-50 rounded-lg border-2 border-gray-200 w-11/12 mx-auto">
  					<h1 className="mt-6 ml-12 font-bold">Name of Product</h1>
  					<input type="text" onChange={Name} className="border-2 mb- border-black bg-gray-100 text-neutral-950 ml-12 pl-1 w-9/12" required></input>

  					<h1 className="mt-8 ml-12 font-bold">Price of Product</h1>
  					<input type="text" onChange={Price} className="border-2 border-black bg-gray-100 text-neutral-950 ml-12 pl-1 w-9/12" required></input>

  					<h1 className="mt-8 ml-12 font-bold">Description of Product</h1>
  					<textarea onChange={Description} className="border-2 border-black bg-gray-100 text-neutral-950 ml-12 pl-1 w-9/12 h-32" required></textarea>

  					<div className="flex justify-center mt-8">
  					  <button type="submit" className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Submit</button>
  					</div>
				</form>	
			</div>
		</main>
	);
}