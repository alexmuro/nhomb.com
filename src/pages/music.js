import React from 'react'
import Link from 'gatsby-link'
import './main.css'

const IndexPage = () => (
  <div className=''>
  	<div style={{width: '100%'}}>
	    <div style={{
	    	width: '50%',
	    	margin: '10px auto'
	    }}>
	    	<img src='/static/nohm_text.svg' style={{width: '100%'}} />
	    </div>
		
		
	   	<div className='contentBox'>
		
			<p>
			<center>
			Find us on all on all the things
			<br></br>
			<a href="https://neighborhoodofmakebelieve.bandcamp.com/album/two-nighttimes" target="new"><img src='static/bandcamp.png' width="20%"></img></a>
			<br></br>
			<a href="https://www.youtube.com/watch?v=PxdQdUh_Lys" target="new"><img src='static/youtube.png' width="20%"></img></a>
			<br></br>
			<a href="https://open.spotify.com/artist/5NiuK62h02lFd1aWBqEFmP" target="new"><img src='static/spotify.png' width="20%"></img></a>
			<br></br>
			<a href="https://www.amazon.com/Two-Nighttimes-Neighborhood-Make-Believe/dp/B07H3DYYD3/ref=sr_1_2?ie=UTF8&qid=1541876946&sr=8-2&keywords=the+neighborhood+of+make+believe+two+nighttimes" target="new"><img src='static/amazon.png' width="20%"></img></a>
			</center>
			</p>
	   	</div>
	</div>
	
  </div>
)

export default IndexPage
