import React, {useState, useEffect} from 'react';
import Quote from './Quote';

function App() {

	const[quote, setQuote] = useState({
		anime: null,
		character: null,
		quote: null
	});

	const fetchQuote = async() => {
		return await fetch('https://animechan.xyz/api/random')
		.then(response => response.json())
	}

	const generate = async() => {
		setQuote(await fetchQuote());
	}
	
	useEffect(() => {
		const fetchData = async () => {
		  	try {
				const data = await fetchQuote();
				setQuote(data);
		  } catch (error) {
			// Handle any errors that occurred during the fetch
			console.error(error);
		  }
		};
	  
		fetchData(); // Call the async function
	  
	}, []);

	return (
   		<div className="App">
			< Quote quote={quote}/>

			<button onClick={generate}>Get New Quote</button>
		</div>
  	);
}

export default App;
