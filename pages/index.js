import React from 'react'
import { Heading, PageLayout } from '@components'
import { Rhythm } from '@modifiers'
import artists from '@lib/artists.json'
import albums from '@lib/albums.json'
import tracks from '@lib/tracks.json'

export default class IndexPage extends React.Component {
  static getInitialProps () {

  }

  constructor(props) {
    super(props);
    
    this.state = {
      display: 'tracks'
    }

    const setAndForget = (cb) => (ev) => {
      ev.preventDefault()
      cb()
    }

    this.switchToArtists = setAndForget(() => this.setState({ display: 'artists' }))
    this.switchToAlbums = setAndForget(() => this.setState({ display: 'albums' }))
    this.switchToTracks = setAndForget(() => this.setState({ display: 'tracks' }))
  }
  

  render () {
    return (
      <PageLayout>
        <ul>
          <li><a href="#" onClick={this.switchToArtists}>Arists</a></li>
          <li><a href="#" onClick={this.switchToAlbums}>Albums</a></li>
          <li><a href="#" onClick={this.switchToTracks}>Tracks</a></li>
        </ul>

        <br />
        <hr />
        <br />

        <ul>
          {
            this.state.display === 'artists' &&
            artists.map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }

          {
            this.state.display === 'albums' &&
            albums.map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }

          {
            this.state.display === 'tracks' &&
            tracks.map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }
        </ul>
      </PageLayout>
    )
  }
}
