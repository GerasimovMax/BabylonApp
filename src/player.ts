import { Game } from './game';

export class Player {
  private _scene: BABYLON.Scene;
  private _object: BABYLON.Mesh;

  constructor() {
    this._scene = Game.getInstance().getScene();
    this.init();
  }

  init() {
    this._object = BABYLON.MeshBuilder.CreateBox('player', { size: 1 }, this._scene);
  }
}