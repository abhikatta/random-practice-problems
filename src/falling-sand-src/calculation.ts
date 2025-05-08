interface eventDataProps {
    rows: number;
    cols: number;
    grid: number[][];
    newGrid: number[][];
    hue: number;
}

self.onmessage = function (event: MessageEvent<eventDataProps>) {
    let { rows, cols, grid, newGrid, hue } = event.data;
    for (let i = 0; i < rows; i++) {
        hue += 1;
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                if (i < rows - 1 && j < cols) {
                    if (grid[i + 1][j] === 0) {
                        newGrid[i + 1][j] = hue;
                        newGrid[i][j] = 0;
                    } else if (
                        i + 1 < rows &&
                        j + 1 < cols &&
                        grid[i + 1][j + 1] === 0
                    ) {
                        newGrid[i + 1][j + 1] = hue;
                        newGrid[i][j] = 0;
                    } else if (
                        i + 1 < rows &&
                        j - 1 >= 0 &&
                        grid[i + 1][j - 1] === 0
                    ) {
                        newGrid[i + 1][j - 1] = hue;
                        newGrid[i][j] = 0;
                    } else {
                        newGrid[i][j] = hue;
                    }
                } else {
                    newGrid[i][j] = hue;
                }
            }
        }
    }
    self.postMessage(newGrid);
};
