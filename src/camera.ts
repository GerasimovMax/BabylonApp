import { Game } from './game';

export class Camera {
  private _scene: BABYLON.Scene;
  private _canvas: HTMLCanvasElement;
  private _camera: BABYLON.FreeCamera;
  
  constructor() {
    this._scene = Game.getInstance().getScene();
    this._canvas = Game.getInstance().getCanvas();

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    this._camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), this._scene);

    // Target the camera to scene origin.
    this._camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    this._camera.attachControl(this._canvas, false);
  }
}