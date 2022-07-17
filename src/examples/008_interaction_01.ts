/**
 * PIXIJS 提供了图元的交互的支持，可以通过 mouse 和 touch 与图元进行交互
 * 1. 首先需要开启允许交互，DisplayObject.interactive = true
 * 2. EventEmitter.on 监听 mouse 和 touch 事件 
 */
import * as PIXI from "pixi.js";
import bunny from "../assests/bunny.png";

const app = new PIXI.Application({
    width: 600,
    height: 600
});
document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from(bunny);
app.stage.addChild(sprite);

sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

sprite.interactive = true;
sprite.buttonMode = true;

const onClick = () => {
    sprite.scale.x *= 1.1;
    sprite.scale.y *= 1.1;
};
sprite.on("pointerdown", onClick);
