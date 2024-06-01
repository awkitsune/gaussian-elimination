import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Matrix } from '../_types/matrix';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matrix-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matrix-table.component.html',
  styleUrl: './matrix-table.component.scss'
})
export class MatrixTableComponent {
  @Input() matrix: Matrix = new Matrix(1, 1)
  @Input() order: number = 0;
  @Output() matrixChange: EventEmitter<Matrix> = new EventEmitter<Matrix>();

  onMatrixChange(): void {
    this.matrixChange.emit(this.matrix);
  }

  resizeMatrix(rows: number, cols: number): void {
    this.matrix.resize(rows, cols);
    this.onMatrixChange();
  }
}
