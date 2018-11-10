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
	   	<center>
		Come see us play!
		<br></br><br></br>
		<a href="https://www.facebook.com/events/731327233894541/" target="new"><img src ='static/funsgiving2018.jpg' width="45%"></img></a>
		</center>
	   	</div>
	</div>
	
  </div>
)

export default IndexPage
