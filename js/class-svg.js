class BaseSVG {
    constructor() {
        this.drawCircle = (cx, cy, r, stroke, strokeWidth, fill) => {
            this.canvas.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            ).style = `
                cx: ${cx};
                cy: ${cy};
                r: ${r};
                stroke: ${stroke};
                stroke-width: ${strokeWidth};
                fill: ${fill};
            `
        }

    }

    resizeCanvas() {
        this.canvas.style.width = window.innerWidth - 20 + 'px';
        this.canvas.style.height = window.innerHeight - 20 + 'px';
    }

}

// унаследованое св-во
BaseSVG.prototype.canvas = document.body.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

const sample = new BaseSVG();

// window.onresize = sample.resizeCanvas // this window

window.onresize = sample.resizeCanvas.bind(sample); // контекст экземпляр

