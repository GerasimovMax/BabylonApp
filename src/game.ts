export class Game {
  private static instance: Game;

  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _light: BABYLON.Light;

  private constructor(canvasElement: string) {
    // Create canvas and engine.
    this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);    
  }

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game('renderCanvas');
    }
    return Game.instance;
  }  

  createScene(): void {
    // Create a basic BJS Scene object.
    this._scene = new BABYLON.Scene(this._engine);

    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);

    // Create a built-in "ground" shape.
    //let ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 6, height: 6, subdivisions: 2}, this._scene);
  }

  doRender(): void {
    // Run the render loop.
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });

    // The canvas/window resize event handler.
    window.addEventListener('resize', () => {
      this._engine.resize();
    });
  }

  getScene(): BABYLON.Scene {
    return this._scene
  }

  getCanvas(): HTMLCanvasElement {
    return this._canvas
  }
}