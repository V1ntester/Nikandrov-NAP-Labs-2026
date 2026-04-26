export class SecondTask {
    solve(arr) {
        const groups = new Map();

        for (const item of arr) {
            const key = item.split('').sort().join('');

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(item);
        }

        const result = [...groups.values()].filter(item => item.length > 1);

        return result;
    }
}