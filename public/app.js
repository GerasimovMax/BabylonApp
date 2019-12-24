define("game", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(canvasElement) {
            this._canvas = document.getElementById(canvasElement);
            this._engine = new BABYLON.Engine(this._canvas, true);
            console.log('ff');
        }
        Game.getInstance = function () {
            if (!Game.instance) {
                Game.instance = new Game('renderCanvas');
            }
            return Game.instance;
        };
        Game.prototype.createScene = function () {
            this._scene = new BABYLON.Scene(this._engine);
            this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
            this._camera.setTarget(BABYLON.Vector3.Zero());
            this._camera.attachControl(this._canvas, false);
            this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        };
        Game.prototype.doRender = function () {
            var _this = this;
            this._engine.runRenderLoop(function () {
                _this._scene.render();
            });
            window.addEventListener('resize', function () {
                _this._engine.resize();
            });
        };
        Game.prototype.getScene = function () {
            return this._scene;
        };
        return Game;
    }());
    exports.Game = Game;
    var game = Game.getInstance();
    game.createScene();
    console.log('ffff');
    game.doRender();
});
define("player", ["require", "exports", "game"], function (require, exports, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function () {
        function Player() {
            this._scene = game_1.Game.getInstance().getScene();
            this.init();
        }
        Player.prototype.init = function () {
            this._object = BABYLON.MeshBuilder.CreateBox('player', { size: 1 }, this._scene);
        };
        return Player;
    }());
    exports.Player = Player;
});
