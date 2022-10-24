import { Player } from './Player.js'

import { Song as songName } from './Song.js'

const playerObject = new Player()
const songObject = new songName('some title')

playerObject.play(songObject)