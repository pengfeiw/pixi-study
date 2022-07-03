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
// 每个 container 都有自己内部的一个局部坐标，这个坐标系是和一般 canvas 的坐标系是相同的，即原点在左上角，y 轴朝下，x 轴朝右
for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
}

// Center bunny sprite in local container coordinates
// 1.可以将 pivot 理解为[定位点]，container 在其所处的场景中用来定位的点，这里将它的定位点设置为 container 的中心点
// 2.pivot 并不是设置它内部的坐标系的原点
// 下面的代码将它的 pivot 设置为中心点，并且它的坐标（container.x 和 container.y）设置为 (0, 0)，也就是将它的中心点
// 置于它所在场景（父元素）的中心，即画布中心
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Move container to the center
// app.screen.width: app 画布的宽度
// app.screen.height: app 画布的高度
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta;
});
