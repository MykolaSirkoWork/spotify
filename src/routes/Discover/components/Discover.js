import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getReleases, getFeaturedPlaylists, getAllCategories } from '../../../api/api';


export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }
  componentDidMount() { 
   getReleases().then(res => {
    if(res?.albums?.items.length) {
      this.setState({
        newReleases: res?.albums?.items
      })
    }
   })

   getFeaturedPlaylists().then(res => {
    if(res?.playlists?.items?.length) {
      this.setState({
        playlists: res?.playlists?.items
      })
    }
   })

   getAllCategories().then(res => {
    if(res?.categories?.items?.length){
    this.setState({
      categories: res?.categories?.items
    })
  }
})
  }

  render() {
    const { newReleases, playlists, categories } = this.state
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        {/* <button onClick={login}>Login</button> */}
      </div>
    );
  }
}
