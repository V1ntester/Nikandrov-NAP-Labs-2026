export class ThirdTask {
    firstSolution(arr) {

        arr.sort();

        let previous = null;
        let count = 0;

        for (const item of arr) {
            if (item != previous) {
                count++;
            }

            previous = item;
        }

        return count;

    }

    secondSolution(arr) {
        let sum = 0;

        for (const item of arr) {
            sum += item;
        }

        return sum / arr.length;
    }
}
