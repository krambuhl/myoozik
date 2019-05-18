import React from 'react'
import { Heading, PageLayout } from '@components'
import { Rhythm } from '@modifiers'
import artists from '@lib/artists.json'
import albums from '@lib/albums.json'
import tracks from '@lib/tracks.json'


const color = name => {
  return `#${new Buffer(name).toString('hex').substr(-3)}`
}

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
    const displaySet = (
      (this.state.display === 'artists' && artists) ||
      (this.state.display === 'albums' && albums) ||
      (this.state.display === 'tracks' && tracks)
    )
    
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
            displaySet.slice(0, 6 * 12 * 4 - 1).map(({ key, count }) => (
              <li key={key} style={{ backgroundColor: color(key) }}>{count}<br/><strong>{key}</strong></li>
            ))
          }
        </ol>
      </PageLayout>
    )
  }
}
