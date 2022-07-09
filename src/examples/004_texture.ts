/**
 * 重点理解三个对象：
 * 1. Texture: 存储纹理图片的原信息，可以认为它就是原图片或者部分原图片，每个 Texture 都引用了一个 BaseTexture（Texture.baseTexture）
 * 2. BaseTexture: 用于管理 Texture，控制纹理是如何渲染的例如 wrapMode 和 uv 坐标
 * 3. RenderTexture: 一个特殊的 Texture，继承自 Texture，允许在其上渲染 displayObj，可以使用 Render 在其上渲染东西
 * 4. PIXI.Renderer
 */
import * as PIXI from "pixi.js";
import bunnypng from "../assests/bunny.png";

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.from(bunnypng);

for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.x = (i % 5) * 30;
    bunny.y = Math.floor(i / 5) * 30;
    bunny.rotation = Math.random() * (Math.PI * 2);
    container.addChild(bunny);
}

const brt = new PIXI.BaseRenderTexture({
    scaleMode: PIXI.SCALE_MODES.LINEAR,
    width: 300,
    height: 300,
    resolution: 1
});
const rt = new PIXI.RenderTexture(brt);

const sprite = new PIXI.Sprite(rt);

sprite.x = 450;
sprite.y = 60;
app.stage.addChild(sprite);

/*
 * All the bunnies are added to the container with the addChild method
 * when you do this, all the bunnies become children of the container, and when a container moves,
 * so do all its children.
 * This gives you a lot of flexibility and makes it easier to position elements on the screen
 */
container.x = 100;
container.y = 60;

app.renderer.render(container, {
    renderTexture: rt
});
// app.ticker.add(() => {
//     app.renderer.render(container, {
//         renderTexture: rt
//     });
// });
