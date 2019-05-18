const path = require('path')
const jsonfile = require('jsonfile')
const _ = require('lodash')
const library = require('./lastfm-library.json')


const getTop = (key, library) => {
  return (
    _.chain(library)
      .countBy(row => row[key])
      .map((count, key) => ({ key, count }))
      .sortBy('count')
      .value()
      .reverse()
  )
}

// program
jsonfile.writeFile(
  path.resolve(__dirname, 'artists.json'),
  getTop('artist', library)
)

jsonfile.writeFile(
  path.resolve(__dirname, 'albums.json'),
  getTop('album', library)
)

jsonfile.writeFile(
  path.resolve(__dirname, 'tracks.json'),
  getTop('track', library)
)


