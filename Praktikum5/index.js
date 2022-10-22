const Player = require('./jasmine_demo/lib/jasmine_examples/Player.js')
const Song = require('./jasmine_demo/lib/jasmine_examples/Song.js')

Object.create(Player)
Object.create(Song("Sugar Water"))

Player.play()