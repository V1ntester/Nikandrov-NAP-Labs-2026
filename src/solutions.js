import { FirstTask } from "./tasks/first-task.js";
import { SecondTask } from "./tasks/second-task.js";
import { ThirdTask } from "./tasks/third-task.js"

const firstTestArr = [1, 2, 3, 8, -2];
const secondTestArr = [2, 3, 8, 1, -2];

const firstTask = new FirstTask();
console.log(firstTask.solve(firstTestArr, secondTestArr));

const thirdTestArr = ["кот", "ток", "пес"];

const secondTask = new SecondTask();
console.log(secondTask.solve(thirdTestArr));

const fourthTestArr = [1, 1, 2, 2, 3];
const fifthTestArr = [1, 2, 3, 4, 6];

const thirdTask = new ThirdTask();
console.log(thirdTask.firstSolution(fourthTestArr))
console.log(thirdTask.secondSolution(fifthTestArr))
