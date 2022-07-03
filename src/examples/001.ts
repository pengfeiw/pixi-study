import * as PIXI from "pixi.js";
import reactjpg from "../assests/react.jpg";

const animate = () => {
    // create pixi application，and add canvas to <body>
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);

    // create sprite and add it to stage
    // stage is simply a container, the root of scene graph
    let sprite = PIXI.Sprite.from(reactjpg);
    app.stage.addChild(sprite);

    // create animation with Application.ticker
    // ticker is a PixiJs object that runs one or more callbacks each frame
    let elapsed = 0.0;
    app.ticker.add((delta) => {
        elapsed += delta;
        sprite.x = 100 + Math.cos(elapsed / 50) * 100;
    });
}

export default animate;
