/**
 * DisplayObject.pivot 与 Sprite.anchor 类似，只不过使用的是像素值
 */
import * as PIXI from "pixi.js";
import bgRotate from "../assests/bg_rotate.jpg";

const width = 800;
const height = 800;
const spriteWidth = 400;
const spriteHeight = 400;
const app = new PIXI.Application({width, height});
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);
console.log("containerHeight", container.getBounds().height);
console.log("containerWidth", container.getBounds().width);

const sprite = PIXI.Sprite.from(bgRotate);
sprite.width = spriteWidth;
sprite.height = spriteHeight;
// 下面两句代码等价，0.5 设置的是比例值，因为使用纹理时，你可能不清楚纹理的真实像素大小
// 而 375 正是纹理的像素大小的一半
sprite.anchor.set(0.5);
// sprite.pivot.set(375, 375);
container.addChild(sprite);
container.position.set(width * 0.5, height * 0.5);
// container.pivot.set(container.getBounds().width * 0.5, container.getBounds().height * 0.5);
console.log("ContainerBounds", container.getBounds());
console.log("ContainerPosition", container.position);
app.ticker.add((delta) => {
    sprite.rotation += delta * 0.05;
    // container.rotation += delta * 0.05;
});
