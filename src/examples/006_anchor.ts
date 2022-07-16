/**
 * Sprite.anchor: 锚点
 * anchor 的值为 sprite 的高度和宽度的比例值，0.5 表示 0.5w 和 0.5h
 * 表示设置 Sprite 的原点（Sprite 内部的局部坐标系的原点），默认原点为左上角
 * Sprite 旋转、缩放、定位等都是以 anchor 为基准的
 */
import * as PIXI from "pixi.js";
import reactjpg from "../assests/react.jpg";
import bgRotate from "../assests/bg_rotate.jpg";

const app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from(reactjpg);
sprite.width = 200;
sprite.height = 200;
sprite.position.set(200, 200);
sprite.anchor.set(0.5);

let childSprite = PIXI.Sprite.from(bgRotate);
// 这里设置的是相对于父元素 sprite 的大小
// srite 的原尺寸为 304，这里设置为 childSprite 的尺寸为 152（0.5 * 304）
// 因为设置 了 sprite 尺寸为 200，所以最终 childSprite 的尺寸为 100
childSprite.width = 152;
childSprite.height = 152;
// childSprite.position.set()
sprite.addChild(childSprite);

app.stage.addChild(sprite);


app.ticker.add((delta) => {
    childSprite.rotation += delta * 0.05;
});
