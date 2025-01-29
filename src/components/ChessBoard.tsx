import React from 'react';
import { useMemo, useState } from 'react';

function ChessBoard() {
    const [gridSize, setGridSize] = useState(8);

    // Memoize the board generation to prevent unnecessary recalculations
    const board = useMemo(() => {
        return Array(gridSize).fill(null).map((_, rowIndex) =>
            Array(gridSize).fill(null).map((_, colIndex) => ({
                isBlack: (rowIndex + colIndex) % 2 === 1,
                position: `${rowIndex}-${colIndex}`
            }))
        );
    }, [gridSize]);

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(event.target.value);
        if (size > 0 && size <= 12) { // Limiting max size for practical purposes
            setGridSize(size);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 bg-gray-100 p-4">
            <div className="mb-4">
                <label htmlFor="gridSize" className="mr-2">
                    <strong>Grid Size:</strong>
                </label>
                <input
                    id="gridSize"
                    type="number"
                    min="1"
                    max="12"
                    value={gridSize}
                    onChange={handleSizeChange}
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowUp') {
                            setGridSize(prev => Math.min(prev + 1, 12));
                        } else if (e.key === 'ArrowDown') {
                            setGridSize(prev => Math.max(prev - 1, 1));
                        }
                    }}
                    className="border p-1 rounded"
                />
            </div>
            <div className="mt-2 text-sm text-gray-500 italic">
                Note: Use ↑/↓ arrow keys or type to adjust grid size (Min: 1, Max: 12)
            </div>

            <div
                className="grid gap-0"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, minmax(40px, 1fr))`,
                }}
            >
                {board.map((row, rowIndex) =>
                    row.map(({ isBlack, position }) => (
                        <div
                            key={position}
                            className={`aspect-square ${isBlack ? 'bg-gray-800' : 'bg-gray-200'
                                }`}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default ChessBoard; 