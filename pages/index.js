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
      display: 'artists'
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

        <ol>
          {
            this.state.display === 'artists' &&
            artists.slice(0, 96).map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }

          {
            this.state.display === 'albums' &&
            albums.slice(0, 96).map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }

          {
            this.state.display === 'tracks' &&
            tracks.slice(0, 96).map(({ key, count }) => (
              <li key={key}><strong>{key}</strong> - {count}</li>
            ))
          }
        </ol>
      </PageLayout>
    )
  }
}
