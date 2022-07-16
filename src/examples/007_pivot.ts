/**
 * DisplayObject.pivot 设置的是物体的定位点，也是该物体旋转围绕的中心点，默认为左上角点。但是它不改变物体内部的坐标系，
 * 即物体内部的坐标系原点始终为左上角点。
 * 
 * 例如有一个 DisplayObject 类型的 obj：
 * obj.height = 400;
 * obj.width = 400;
 * obj.position.set(100, 100);
 * obj.pivot.set(200)
 * 最终的结果是物体的中心点位于其 parent 局部坐标系的 (100, 100)，并且 obj 的旋转中心为它的中心点
 * 但是设置 pivot 并未改变它自己的局部坐标系，即 obj 的局部坐标系的原点依然在 obj 的左上角点。
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

const sprite = PIXI.Sprite.from(bgRotate);
sprite.width = spriteWidth;
sprite.height = spriteHeight;
sprite.position.set(200, 200);
container.addChild(sprite);
container.position.set(width * 0.5, height * 0.5);
container.pivot.set(400, 400);
app.ticker.add((delta) => {
    // sprite.rotation += delta * 0.05;
    // container.rotation += delta * 0.05;
});
