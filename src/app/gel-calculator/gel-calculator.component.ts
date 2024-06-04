import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Matrix } from '../_types/matrix';
import { FormsModule } from '@angular/forms';
import { GaussianCalculator } from '../_core/gaussian-calc';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gel-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbAccordionModule],
  templateUrl: './gel-calculator.component.html',
  styleUrl: './gel-calculator.component.scss'
})
export class GelCalculatorComponent {
  order = 3
  matrix = new Matrix(this.order, this.order + 1)
  result: number[] = []
  readonly nan = Number.NaN

  calculator = new GaussianCalculator()

  regenMatrix() {
    this.matrix = new Matrix(this.order, this.order + 1)
  }

  resizeMatrix(rows: number, cols: number): void {
    this.matrix.resize(rows, cols);
  }

  calculateRoots() {
    let workMatrix = new Matrix(this.matrix.rows, this.matrix.cols)
    workMatrix.value = [...this.matrix.value]

    this.result = this.calculator.resolveMatrixResults(this.calculator.calculateMatrix(workMatrix))
  }

  trackByFn(index: any, item: any) {
    return index
  }
}
