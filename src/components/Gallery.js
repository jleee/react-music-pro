import React, { Component } from 'react';
import '../styles/Gallery.css';

export default class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playingUrl: '',
			audio: null,
			playing: false
		}
	}

	playAudio(previewUrl) {
		let audio = new Audio(previewUrl);

		if(!this.state.playing) {
			audio.play();
			this.setState({
				playing: true,
				playingUrl: previewUrl,
				audio
			})
		} else {
			if(this.state.playingUrl === previewUrl) {
				this.state.audio.pause();
				this.setState({
					playing: false
				})
			} else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					playing: true,
					playingUrl: previewUrl,
					audio
				})
			}
		}
	}

	render() {
		console.log('gallery props', this.props);
		const { tracks } = this.props;
		
		return (
			<div className="gallery row">
				{
					tracks.map((track, key) => {
						const trackImg = track.album.images[0].url;
						console.log(track);
						return (
							<div key={key} className="track col-md-6 col-lg-3" onClick={() => this.playAudio(track.preview_url)}>
								<img src={trackImg} className="track-img" alt="track"/>
								<div className="track-play">
									<div className="track-play-inner">
										{
											this.state.playingUrl === track.preview_url
											? <div><svg className="svg-inline--fa fa-pause fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg></div>
											: <div><svg className="svg-inline--fa fa-play fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></div>
										}
									</div>
								</div>
								<p className="track-text">{track.name}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}