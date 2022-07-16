/**
 * The Container class provides a simple display object that does what its name implies - collect a
 * set of child objects together. But beyond grouping objects, containers have a few uses that you 
 * should be aware of.
 */

import * as PIXI from "pixi.js";
import bunnypng from "../assests/bunny.png";

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb
});
document.body.appendChild(app.view);

// create container
const container = new PIXI.Container();

app.stage.addChild(container);

const texture = PIXI.Texture.from(bunnypng);

// Create a 5x5 grid of bunnies
// anchor 即锚点，bunny.anchor.set(0.5) 表示将锚点设置为 bunny 的中心点，默认的锚点为左上角
// 锚点是 sprite 的定位点，如果 sprite 的坐标为 (100, 100)，即它的锚点所在位置的坐标为 (100, 100)
for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
}

// Center bunny sprite in local container coordinates
// 1. pivot 设置 container 的局部坐标系中的 obj 的 rotate、scale、skew 的中心
// 2.pivot 并不是设置它内部的坐标系的原点
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// container.width = 400;
// container.height = 400;
container.scale.set(2);

// Move container to the center
// app.screen.width: app 画布的宽度
// app.screen.height: app 画布的高度
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta;
});
