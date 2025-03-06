const regex = /row=(\d+)\s+column=(\d+):\s+(\w)/;

function calculateRowsAndCols(data: string): [number, number] {
    let rows: number = 0;
    let cols: number = 0;

    data.split('\n').forEach((line: string) => {
        const match = line.match(regex);

        if (match) {
            const row = parseInt(match[1], 10);
            const col = parseInt(match[2], 10);

            rows = Math.max(rows, row);
            cols = Math.max(cols, col);
        }
    });

    return [rows, cols];
}

function populateMatrix(data: string): (string | null)[][] {
    const [rows, cols] = calculateRowsAndCols(data);
    const matrix: (string | null)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

    data.split('\n').forEach((line: string) => {
        const match = line.match(regex);

        if (match) {
            const row = parseInt(match[1], 10);
            const col = parseInt(match[2], 10);
            const char = match[3];

            matrix[row - 1][col - 1] = char;
        }
    });

    return matrix;
}

export function extractSecretCode(data: string): string {
    const matrix: (string | null)[][] = populateMatrix(data);

    let table: string = '';

    matrix.forEach((row: (string | null)[]) => {
        const rowString: string = row.map((cell: string | null) => cell === null ? ' ' : cell).join('');
        table += rowString + '\n';
    });

    return table;
}
