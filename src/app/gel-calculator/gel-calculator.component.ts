import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Matrix } from '../_types/matrix';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gel-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gel-calculator.component.html',
  styleUrl: './gel-calculator.component.scss'
})
export class GelCalculatorComponent {
  order = 3;
  matrix = new Matrix(this.order, this.order + 1);

  resizeMatrix(rows: number, cols: number): void {
    this.matrix.resize(rows, cols);
  }

  trackByFn(index: any, item: any) {
    return index
  }
}
