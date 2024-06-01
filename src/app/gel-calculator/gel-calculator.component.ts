import { Component, Pipe } from '@angular/core';
import { MatrixTableComponent } from '../matrix-table/matrix-table.component';
import { CommonModule } from '@angular/common';
import { Matrix } from '../_types/matrix';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gel-calculator',
  standalone: true,
  imports: [MatrixTableComponent, CommonModule, FormsModule],
  templateUrl: './gel-calculator.component.html',
  styleUrl: './gel-calculator.component.scss'
})
export class GelCalculatorComponent {
  order = 3;
  matrix = new Matrix(this.order, this.order + 1);

  onMatrixChange(newMatrix: Matrix): void {
    this.matrix = newMatrix;
    console.log('Matrix changed:', this.matrix);
  }


}
