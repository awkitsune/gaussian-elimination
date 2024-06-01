export class Matrix {
    private _matrix: number[][];

    constructor(rows: number, cols: number, fillValue: number = 0) {
        this._matrix = Array.from({ length: rows }, () => Array(cols).fill(fillValue));
    }

    get value(): number[][] {
        return this._matrix;
    }

    set value(value: number[][]) {
        this._matrix = value;
    }

    resize(rows: number, cols: number, fillValue: number = 0): void {
        const newData = Array.from({ length: rows }, (_, rowIndex) =>
            Array.from({ length: cols }, (_, colIndex) => this._matrix[rowIndex]?.[colIndex] ?? fillValue)
        );
        this._matrix = newData;
    }

    get rows(): number {
        return this._matrix.length;
    }

    get cols(): number {
        return this._matrix[0]?.length ?? 0;
    }

    setValue(row: number, col: number, value: number): void {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this._matrix[row][col] = value;
        }
    }

    getValue(row: number, col: number): number {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            return this._matrix[row][col];
        }
        return Number.NaN;
    }
}
