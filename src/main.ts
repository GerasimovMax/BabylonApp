import { Game } from './game';
import { Player } from './player';
import { Camera } from './camera';

// Create the game
const game = Game.getInstance();
game.createScene();

let player = new Player();
let camera = new Camera();

game.doRender();