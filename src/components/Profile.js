import React, { Component } from 'react';
import '../styles/Profile.css';

export default class Profile extends Component {
	render() {
		let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
		artist = this.props.artist !== null ? this.props.artist : artist;

		return (
			<div className="profile">
				<img src=
					{
						artist.images.length > 0 ? artist.images[0].url : 'http://via.placeholder.com/150x150'
					} 
					alt="Profile" 
					className="profile-img"
				/>
				<div className="profile-info">
					<h1 className="profile-name">
						{artist.name}
						<span className="profile-followers">
							{
								artist.followers.total.toLocaleString(navigator.language, { 
									minimumFractionDigits: 0 
								})
							} 
							&nbsp;followers
						</span>
					</h1>
					<div className="profile-genres">						
						{
							artist.genres.map((genre, key) => {
								genre = genre !== artist.genres[artist.genres.length - 1] ? ` ${genre}, ` : `& ${genre}`;
								return (
									<span key={key}>{genre}</span>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}