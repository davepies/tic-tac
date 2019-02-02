import assert from 'assert';

export const winning = (board, player) => {
    assert(Array.isArray(board));
    assert(typeof player === 'string');

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winningCombinationsOnboard = winningCombinations.filter(([a, b, c]) => (
        board[a] === player &&
        board[b] === player &&
        board[c] === player
    ));

    return winningCombinationsOnboard.length !== 0;
};