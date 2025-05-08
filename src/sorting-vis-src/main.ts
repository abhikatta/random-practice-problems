// draw the initial array bar graph
// bubble sort
// in every swap make updates to the bar graph

import { bubbleSort } from "./sortingAlgos";
import "./style.css";
let array: number[] = [];
let delayRangeVal: number;
const div = document.getElementById("app") as HTMLDivElement;
const canvas: HTMLCanvasElement = document.createElement("canvas");

const rangeElem = document.getElementById("array-range") as HTMLInputElement;
const rangeTextElem = document.getElementById(
    "display-range"
) as HTMLParagraphElement;

const delayRangeElem = document.getElementById(
    "delay-range"
) as HTMLInputElement;
const delayRangeTextElem = document.getElementById(
    "display-delay-range"
) as HTMLParagraphElement;

const startButton = document.getElementById("start") as HTMLButtonElement;

rangeElem.addEventListener("input", function (e) {
    const val = e.target as HTMLInputElement;
    const rangeVal = parseInt(val.value);
    rangeTextElem.textContent = "Value: " + rangeVal;
    let newArray: number[] = [];
    for (let i = 0; i < rangeVal; i++) {
        let randomNum = Math.floor(Math.random() * rangeVal);
        newArray.push(randomNum);
    }
    array = [...newArray];
    drawBars(array);
});

delayRangeElem.addEventListener("input", function (e) {
    const val = e.target as HTMLInputElement;
    delayRangeVal = parseInt(val.value);
    delayRangeTextElem.textContent = "Delay: " + delayRangeVal;
    console.log(delayRangeVal);
});

div?.append(canvas);

function drawBars(array: number[]) {
    const cxt = canvas.getContext("2d")!;
    canvas.width = screen.availWidth * 0.7;
    canvas.height = screen.availHeight * 0.5;
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const barHeight = (array[i] * canvas.height) / 104;
        const barX = i * barWidth;
        const barY = canvas.height - barHeight;
        cxt.fillStyle = "rgba(100,200,300)";

        cxt?.fillRect(barX, barY, barWidth, barHeight);
        cxt.textAlign = "center";
        cxt.textBaseline = "ideographic";
        cxt.textRendering = "auto";
        cxt.fillText(
            array[i].toString(),
            i * barWidth + barWidth / 2,
            canvas.height - barHeight
        );
    }
}

drawBars(array);

startButton.addEventListener("click", async () => {
    rangeElem.disabled = true;
    delayRangeElem.disabled = true;
    bubbleSort(array, drawBars, delayRangeVal, rangeElem, delayRangeElem);
});
