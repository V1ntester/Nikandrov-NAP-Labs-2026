export class FirstTask {
    solve(targetArr, sourceArr) {
        const counter = new Map();

        for (const item of targetArr) {
            counter.set(item, (counter.get(item) || 0) + 1);
        }

        for (const item of sourceArr) {
            if (!counter.has(item)) {
                continue;
            }

            const count = counter.get(item) - 1;

            if (count === 0) {
                counter.delete(item);
            } else {
                counter.set(item, count);
            }
        }

        return counter.size === 0;
    }
}