

export function ProfilePage({switchHomePage, user}) {
  return (
    <main className="flex justify-center items-center h-screen">
			<div className="border-2 bg-white w-3/12 h-3/6 flex flex-col">
				<button onClick={switchHomePage} className="border-2 border-teal-400 text-white p-2 m-3 bg-teal-400 rounded-lg w-2/12">Go back</button>
				<h1 className="mt-12 mb-4 self-center text-4xl font-bold">Welcome!</h1>
				<h1 className="mt-4 mb-4 self-center text-4xl font-bold">{user.displayName}</h1>
				<div className="flex justify-center mt-12">
					<h1 className="mr-2 font-bold">Unique ID: </h1>
					<p>{user.uid}</p>
				</div>
				<div className="flex justify-center mt-4">
					<h1 className="mr-2 font-bold">Email: </h1>
					<p>{user.email}</p>
				</div>

			</div>
		</main>
  );
}