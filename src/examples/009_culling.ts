/**
 * culling: 
 * pixijs 会默认绘制所有添加到 stage 上的 displayObject（包括 child），即使 displayObject 在
 * 视窗外，用户根本看不到。为了减少不必要的绘制，所以需要判断 displayObject 是否在视窗内部，如果在视口外部，则
 * 不需要绘制它，这个操作就叫做 culling。
 * 
 * DisplayObject.renderable:
 * pixijs 并没有提供一个内部的算法实现 culling 操作，可以借助第三方包或者自己去实现。但是 pixijs 提供了
 * DisplayObject.renderable 属性可以控制 DisplayObject 是否会绘制。所以如果自己实现 culling 的功能，
 * 最简单的方式是，判断 DisplayObject 的包围框是否与视口包围框相交，如果有相交则设置为 true，否则设置为 false
 */
import * as PIXI from "pixi.js";
import bunny from "../assests/bunny.png";

const app = new PIXI.Application({
    width: 600,
    height: 600
});
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from(bunny);
sprite.position.set(100, 100);

// 设置 DisplayObject.renderable 值为 false，PIXI engine 将不会渲染它
sprite.renderable = false;

app.stage.addChild(sprite);
