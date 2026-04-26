import { FirstTask } from "./tasks/first-task.js";
import { SecondTask } from "./tasks/second-task.js";

const firstTestArr = [1, 2, 3, 8, -2];
const secondTestArr = [2, 3, 8, 1, -2];

const firstTask = new FirstTask();
console.log(firstTask.solve(firstTestArr, secondTestArr));

const thirdTestArr = ["кот", "ток", "пес"];

const secondTask = new SecondTask();
console.log(secondTask.solve(thirdTestArr));