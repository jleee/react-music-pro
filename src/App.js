import React, { Component } from 'react';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Home from './components/Home';
import './styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    const BASE_URL       = 'https://api.spotify.com/v1/search?';
    let   FETCH_URL      = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    const ALBUM_URL      = 'https://api.spotify.com/v1/artists';
    const accessToken    = 'BQBgjc-6XyYsXueF4nTqn77Im3Ps_WsRnYKaL_LKQQbUfg1YMtH-gVjhoOY6DBGwR8NkW3mWKzpJRKoLz6y03OPrAUPMnO4HMskAXzZU1KH0oc0w3mTZGh6RkHC8k0lxeeoEhRVD0n1wXgCmBxhLbVB2JQ&refresh_token=AQBWgq7ujapr3lnwRLeJlPTyM0S-Gy_Z8TN0EkP4LwEdokSHzkTGAfJiNceIOSmc2xCYA3diDU5jnCmE3gikryNXHVzEeFLUPdFykaKq0RBfiCJU8bKh20DtdG4pbmVLBME';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };

    console.log('this.state', this.state);  

    fetch(FETCH_URL, requestOptions) 
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      console.log('artist', artist);
      this.setState({artist});

      FETCH_URL = ALBUM_URL + '/' + artist.id + '/top-tracks?country=US&';
      fetch(FETCH_URL, requestOptions)
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        this.setState({tracks});
      })
    })
    .catch(function(error) {
      console.log('error', error);
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="container">
            <div className="header-title"><a onClick={() => window.location.reload()}>MUSIC PRO</a> <span>Artist Search Platform</span></div>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search an artist..."
                value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                  if(event.key === 'Enter') {
                    this.search()
                  }
                }}
              />
              <span className="input-group-btn">
                <button className="btn" type="button" onClick={() => this.search()}>Search</button>
              </span>
            </div>
          </div>
        </header>
        {
          this.state.artist !== null
          ?
            <div className="search-results container">
              <Profile artist={this.state.artist}/>
              <Gallery tracks={this.state.tracks}/>
            </div>
          :
            <div className="content container">
              <Home/>
            </div>
        }
      </div>
    );
  }
}