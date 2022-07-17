/**
 * 使用 AnimatedSprite 制作简单的小动画
 */
import * as PIXI from "pixi.js";
import backgroundImg from "../assests/spritesheet/background.png";
import walkImg01 from "../assests/spritesheet/walk_01.png";
import walkImg02 from "../assests/spritesheet/walk_02.png";
import walkImg03 from "../assests/spritesheet/walk_03.png";
import walkImg04 from "../assests/spritesheet/walk_04.png";
import walkImg05 from "../assests/spritesheet/walk_05.png";
import walkImg06 from "../assests/spritesheet/walk_06.png";
import walkImg07 from "../assests/spritesheet/walk_07.png";
import walkImg08 from "../assests/spritesheet/walk_08.png";

const app = new PIXI.Application({
    width: 800,
    height: 450
});
document.body.appendChild(app.view);

const capguyFrames = [
    {name: "walkImg01", url: walkImg01},
    {name: "walkImg02", url: walkImg02},
    {name: "walkImg03", url: walkImg03},
    {name: "walkImg04", url: walkImg04},
    {name: "walkImg05", url: walkImg05},
    {name: "walkImg06", url: walkImg06},
    {name: "walkImg07", url: walkImg07},
    {name: "walkImg08", url: walkImg08},
];

let animatedCapguy: PIXI.AnimatedSprite;
let background: PIXI.Sprite;

const setup = (loader: PIXI.Loader, resources: any) => {
    // 动画背景
    background = new PIXI.Sprite(resources.background.texture);
    app.stage.addChild(background);

    app.stage.scale.x = app.view.width / background.width;
    app.stage.scale.y = app.view.height / background.height;

    // 帧动画
    animatedCapguy = PIXI.AnimatedSprite.fromFrames(capguyFrames.map(frame => frame.name));
    animatedCapguy.animationSpeed = 1/6; // 动画播放速度
    animatedCapguy.position.set(0, background.height - 350);
    animatedCapguy.play();
    app.stage.addChild(animatedCapguy);

    app.ticker.add(gameLoop)
};

const gameLoop = (delta: number) => {
    animatedCapguy.x = (animatedCapguy.x + 5 * delta) % (background.width + 200);
}

// 加载资源
app.loader
    .add("background", backgroundImg)
    .add(capguyFrames)
    .load(setup);
