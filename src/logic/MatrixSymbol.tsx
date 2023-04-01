const availableSymbols = '☺❁❀✿♡⚛️';

export class MatrixSymbol {
    x: number;
    y: number;
    fontSize: number;
    canvasHeight: number;
    text: string;

    constructor(
        x: number,
        y: number,
        fontSize: number,
        canvasHeight: number,
    ) {
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = '';
    }

    draw(context: any) {
        const symbolPos = Math.random() * availableSymbols.length;
        this.text = availableSymbols.charAt(symbolPos)
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

        const fallingStopRandomIndex = Math.random();
        if (this.y * this.fontSize > this.canvasHeight && fallingStopRandomIndex > 0.90) {
            this.y = 0;
        } else {
            this.y += 1;
        }

    }
}

export default {};