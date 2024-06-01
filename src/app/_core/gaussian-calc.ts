import { Matrix } from "../_types/matrix";

export class GaussianCalculator {

    validateMatrix(matrix: Matrix): boolean {
        return matrix.value.length + 1 == matrix.value[0].length
    }

    calculateRows(row1: number[], row2: number[], id: number): number[] {
        let result: number[] = []

        for (let i = 0; i < row1.length; i++) {
            let row1Res = row1[id] * row2[i]
            let row2Res = row2[id] * row1[i]
            result.push(row1Res - row2Res)
        }

        return result
    }

    resolveMatrixResults(matrix: Matrix): number[] {
        let resultsMatrix: number[] =
            new Array<number>(matrix.value.length)

        for (let i = 1; i < matrix.value.length + 1; i++) {
            console.log('Iteration ' + i)

            let row = matrix.value[matrix.value.length - i]
            console.log(row)
            let rowRes = row[row.length - 1]
            console.log(rowRes)
            let secondValue = row[row.length - i - 1]
            console.log(secondValue)
            let addValue = 0

            for (let j = resultsMatrix.length - 1; j >= 0; j--) {
                console.log('Inner iteration: ' + j)
                if (resultsMatrix[j]) {
                    addValue += resultsMatrix[j] * row[j]
                    console.log(addValue)
                }
            }

            resultsMatrix[resultsMatrix.length - i] = (rowRes - addValue) / secondValue
            console.log(resultsMatrix[resultsMatrix.length - i])
        }

        return resultsMatrix
    }

    calculateMatrix(matrix: Matrix): Matrix {
        let iteration = 0

        while (iteration + 1 < matrix.value.length) {
            for (let i = iteration + 1; i < matrix.value.length; i++) {
                matrix.value[i] =
                    this.calculateRows(
                        matrix.value[iteration],
                        matrix.value[i],
                        iteration)

            }
            iteration++
        }

        return matrix
    }
}