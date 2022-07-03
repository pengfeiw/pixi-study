/**
 * 可以设置 Container.mask 属性，用来指定一个 mask 区域，只有在 container 的 mask 区域内的 children 才会显示
 */
import * as PIXI from "pixi.js";

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// Create window frame
// Graphics 继承自 Continer，可以用来创建一些图形 
let frame = new PIXI.Graphics();
frame.beginFill(0x666666);
frame.lineStyle({ color: 0x232366, width: 4, alignment: 0 });
frame.drawRect(0, 0, 208, 208);
frame.position.set(320 - 104, 180 - 104);
app.stage.addChild(frame);

// Create a graphics object to define our mask
// 这里定义的 mask 也是一个 Graphics
let mask = new PIXI.Graphics();
// Add the rectangular area to show
mask.beginFill(0xff9800);
mask.drawRect(0, 0, 200, 200);
mask.endFill();

// Add container that will hold our masked content
let maskContainer = new PIXI.Container();
// Set the mask to use our graphics object from above
// 通过 Container.mask 属性设置 mask
maskContainer.mask = mask;
maskContainer.addChild(mask);
maskContainer.position.set(4, 4);
frame.addChild(maskContainer);

// Create contents for the masked container
let text = new PIXI.Text(
    'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
    'You can put anything in the container and it will be masked!',
    {
        fontSize: 24,
        fill: 0x1010ff,
        wordWrap: true,
        wordWrapWidth: 180
    }
);
text.x = 10;
maskContainer.addChild(text);

// Add a ticker callback to scroll the text up and down
let elapsed = 0.0;
app.ticker.add((delta) => {
    // Update the text's y coordinate to scroll it
    elapsed += delta;
    text.y = 10 + -100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
