/**
 * Sprite.anchor: 锚点
 * 1.DisplayObject.position 设置了 DisplayObject 内部的局部坐标系的原点，决定了其 rotate、scale、skew 的中心点
 * 2.anchor 是 Sprite 特有的属性，用于设置 texture（即图片）在 sprite 上的位置。默认 anchor.x = 0， anchor.y = 0，
 * 表示纹理的左上角在 Sprite.position 位置，anchor 为 1（x 和 y 都是 1）表示纹理的右下角在 Sprite.position 位置
 */
import * as PIXI from "pixi.js";
import reactjpg from "../assests/react.jpg";
import bgRotate from "../assests/bg_rotate.jpg";

const app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from(reactjpg);
sprite.width = 200;
sprite.height = 200;
sprite.position.set(200, 200); // position 决定了内部的坐标系原点
sprite.anchor.set(1);

let childSprite = PIXI.Sprite.from(bgRotate);
// 这里设置的是相对于父元素 sprite 的大小
// srite 的原尺寸为 304，这里设置为 childSprite 的尺寸为 152（0.5 * 304）
// 因为设置 了 sprite 尺寸为 200，所以最终 childSprite 的尺寸为 100
childSprite.width = 152;
childSprite.height = 152;
sprite.addChild(childSprite);

app.stage.addChild(sprite);

app.ticker.add((delta) => {
    // childSprite.rotation += delta * 0.05;
    sprite.rotation += delta * 0.05;
});
