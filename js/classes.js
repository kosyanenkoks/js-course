class Canvas {
    constructor() {
        this.canvas = document.body.appendChild(document.createElement('canvas'));
        this.context = this.canvas.getContext('2d');
        this.showThis = () => console.log(this); // Canvas, контекст НЕ теряется
        this.showThis2 = function () { // контекст может меняться
            console.log(this); // Canvas
        };
        // перечислимый унаследованный метод
        Canvas.prototype.test = function (x, y, r) {
            console.log(this)
        };
    }
    // НЕперечислимый унаследованный метод
    drawLine(x1, y1, x2, y2) {
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }
    drawCircle(x, y, r) {
        this.context.beginPath();
        this.context.arc(x, y, r, 0, 2 * Math.PI);
        this.context.stroke();
    }
    drawRect(x, y, w, h) {
        this.context.beginPath();
        this.context.rect(x, y, w, h);
        this.context.stroke();
    }
}

// перечислимые унаследованные
// методы за пределами конструктора

// this - Canvas (Юзать обычную ф-цию)
Canvas.prototype.drawCircle2 = function (x, y, r) {
    console.log(this)
};

// this - Window
Canvas.prototype.drawRect2 = (x, y, w, h) => console.log(this);

const figure = new Canvas;
figure.drawLine(10, 10, 50, 50);
figure.drawCircle(50, 50, 50);

//-----------------------------------------------------------------

// Extends

// class CanvasElem extends HTMLElement {
//     constructor() {
//         super(); // унаследует все от HTMLElement
//     }
// }
//
// const elem = new CanvasElem();