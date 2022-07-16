/**
 * Use Graphics to draw shape
 * 
 * Graphics.drawXXX 函数，本质上是添加图形至 Geometry List，Graphics.geometry 就是由这个 list 构成的几何体
 */
import * as PIXI from "pixi.js";

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

/**
 * with Grahpics we can draw shape
 */
let obj = new PIXI.Graphics();
obj.beginFill(0xff0000);
obj.drawRect(0, 0, 200, 100);
// obj.drawCircle
// obj.drawEllipse
// obj.drawPolygon
// obj.drawRect
// obj.drawRoundedRect
// obj.drawShape
obj.position.set(300, 300);
obj.rotation = Math.PI * 0.25;
obj.pivot.set(100, 50);

app.ticker.add((delta) => {
    obj.rotation += delta * 0.1;
});

app.stage.addChild(obj);
