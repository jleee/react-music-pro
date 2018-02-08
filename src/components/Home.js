import React, { Component } from 'react';
import '../styles/App.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="heading-title ">Music artist search made easy</h1>
				<p className="heading-subtitle">Look up your favourite artist with Music Pro!</p>
				<ul>
				  <li>
				    <span className="checkmark"><i className="fa fa-check"></i></span> 
				    Search for music artist by full name, first name, or last name
				  </li>
				  <li>
				    <span className="checkmark"><i className="fa fa-check"></i></span> 
				    Find out total followers (based on artist Spotify profile)
				  </li>
				  <li>
				    <span className="checkmark"><i className="fa fa-check"></i></span> 
				    Music genre based on artist search
				  </li>
				  <li>
				    <span className="checkmark"><i className="fa fa-check"></i></span> 
				    Play music preview tracks
				  </li>
				</ul>
			</div>
		)
	}
}