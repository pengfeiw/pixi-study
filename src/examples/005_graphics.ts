/**
 * Use Graphics draw shape
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

app.stage.addChild(obj);
