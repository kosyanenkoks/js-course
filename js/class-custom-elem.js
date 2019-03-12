const Canvas = class {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild ( this.canvas );
        this.canvas.height = '400';
        this.area = this.canvas.getContext('2d')
    }

    drawLine(points) {
        this.area.beginPath();
        this.area.moveTo( points[0].x, points[0].y );
        this.area.lineTo( points[1].x, points[1].y );
        this.area.stroke();
    }

    drawRect(x, y, w, h) {
       this.area.beginPath(); // для возможности менять цвет
       this.area.strokeRect(x, y, w, h);
    }
};

class ColoredCanvas extends Canvas {
    constructor() {
        super();
        this.lineColor = '#ff00ff';
        this.fillColor = '#ffff0090';
        this.lineWidth = '5'
    }

    drawLine(x1, y1, x2, y2) {
        this.area.strokeStyle = this.lineColor;
        this.area.lineWidth = this.lineWidth;
        // метод drawLine класса Canvas
        super.drawLine([{x: x1, y: y1}, {x: x2, y: y2}])
    }

    drawRect(x, y, w, h) {
        this.area.strokeStyle = this.lineColor;
        this.area.lineWidth = this.lineWidth;
        this.area.fillStyle = this.fillColor;
        super.drawRect(x, y, w, h);
        this.area.fill();
    }
}

const sample = new ColoredCanvas();

sample.drawLine(0, 0, 100, 100);
sample.drawRect(0, 0, 200, 100);
