
/**
 * 在 010_animatedSprite 中的实现方式有一个问题，就是：资源的加载时间问题，每个图片的加载请求都是分开发送到
 * 服务器的，速度可能比较慢。
 * 
 * 这里使用 SpriteSheet 改进这个问题。
 * 
 * SpriteSheet 就是一个包含所有 sprites 的大的图片。使用 SpriteSheet，只需要加载一张图片和一个 json 数据文件
 * 即可。json 数据文件描述了 SpriteSheet 包含了哪些 sprite 图片和这些 sprite 在 sheet 中的坐标。
 * 
 */
import * as PIXI from "pixi.js";
import backgroundImg from "../assests/spritesheet/background.png";
import spritesheetJson from "../assests/spritesheet/spritesheet.json";
import spritesheetPng from "../assests/spritesheet/spritesheet.png";

const app = new PIXI.Application({
    width: 800,
    height: 450
});
document.body.appendChild(app.view);

let animatedCapguy: PIXI.AnimatedSprite;
let background: PIXI.Sprite;

const setup = (loader: PIXI.Loader, resources: any) => {
    // 动画背景
    background = new PIXI.Sprite(resources.background.texture);
    app.stage.addChild(background);

    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    const sheet = new PIXI.Spritesheet(resources.sheet.texture, spritesheetJson);

    // 在 parse 里面可以获得图片
    sheet.parse(() => {
        // 帧动画
        animatedCapguy = PIXI.AnimatedSprite.fromFrames(Object.keys(sheet.data.frames));
        animatedCapguy.animationSpeed = 1 / 6; // 动画播放速度
        animatedCapguy.position.set(0, background.height - 350);
        animatedCapguy.play();
        app.stage.addChild(animatedCapguy);
    });

    app.ticker.add(gameLoop)
};

const gameLoop = (delta: number) => {
    animatedCapguy.x = (animatedCapguy.x + 5 * delta) % (background.width + 200);
}

// 加载资源
app.loader
    .add("background", backgroundImg)
    .add("sheet", spritesheetPng)
    .load(setup);
