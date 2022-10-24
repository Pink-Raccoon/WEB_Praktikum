import { Player } from './Player.js'

import { Song as songName } from './Song.js'

let playerObject = new Player()
let songObject = new songName('some title')

playerObject.play(songObject)

module.exports ={playerObject,songObject}