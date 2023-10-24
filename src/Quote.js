import React from 'react'

function Quote({ quote }) {
	return (
		<div className='quote'>
			<div className='anime' classTitle= {quote.anime} > {quote.anime} </div>

			<blockquote>
				{quote.quote}
			</blockquote>

			<div className='character' title={quote.character} > {quote.character}  </div>
		</div>
	)
}

export default Quote