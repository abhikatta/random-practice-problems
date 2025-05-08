export interface SortAlgoParams {
    array: number[];
    drawBars: (arr: number[]) => void;
    delayRangeVal: number;
    rangeElem: HTMLInputElement;
    delayRangeElem: HTMLInputElement;
}

export async function bubbleSort(
    array: number[],
    drawBars: (arr: number[]) => void,
    delayRangeVal: number,
    rangeElem: HTMLInputElement,
    delayRangeElem: HTMLInputElement
) {
    let newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            {
                if (newArray[i] < newArray[j]) {
                    let temp = newArray[i];
                    newArray[i] = newArray[j];
                    newArray[j] = temp;
                }
                drawBars(newArray);

                await new Promise((resolve) =>
                    setInterval(resolve, delayRangeVal || 0)
                );
            }
        }
    }
    rangeElem.disabled = false;
    delayRangeElem.disabled = false;
}

// TODO:
export const MergeSort = async (params: SortAlgoParams) => {
    const Merge = () => {};
};
