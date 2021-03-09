// resources used:
// https://algorithmist.com/wiki/UVa_108_-_Maximum_Sum
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
// https://en.wikipedia.org/wiki/Prefix_sum

function makeMatrix(array, length) {
	var matrix = [],
		i = 0,
		n = array.length;

	while (i < n) {
		matrix.push(array.slice(i, (i += length)));
	}

	return matrix;
}

function findMaxSumSubMatrix(matrix) {
	var dim = matrix[0].length;

	// initialize prefix sum matrix
	var ps = new Array();
	for (var _ = 0; _ < dim; _++) {
		ps[_] = new Array();
	}

	// calculate vertical prefix sum matrix
	for (var i = 0; i < dim; i++) {
		for (var j = 0; j < dim; j++) {
			if (j == 0) {
				ps[j][i] = matrix[j][i];
			} else {
				ps[j][i] = matrix[j][i] + ps[j - 1][i];
			}
		}
	}

	// console.log(ps); // log prefix sum matrix

	var maxSum = 0;
	var min, temp;

	// using the prefix sum matrix, iterate over all combinations and keep track of the max (Kadane's algorithm)
	for (var i = 0; i < dim; i++) {
		for (var j = i; j < dim; j++) {
			min = 0;
			temp = 0;
			for (var k = 0; k < dim; k++) {
				if (i == 0) {
					temp += ps[j][k];
				} else {
					temp += ps[j][k] - ps[i - 1][k];
				}

				if (temp < min) {
					min = temp;
				}

				if (temp - min > maxSum) {
					maxSum = temp - min;
				}
			}
		}
	}

	return maxSum;
}

var theMatrix = makeMatrix([0, -2, -7, 0, 9, 2, -6, 2, -4, 1, -4, 1, -1, 8, 0, -2], 4);

var example1 = [
	[1, -61, 5126, 612, 6],
	[41, 6, 7, 2, -7],
	[1, 73, -62, 678, 1],
	[7, -616136, 61, -83, 724],
	[-151, 6247, 872, 2517, 8135],
];

console.log(findMaxSumSubMatrix(theMatrix)); // expected output: 15
console.log(findMaxSumSubMatrix(example1)); // expected output: 18589
