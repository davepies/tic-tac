const winning = (board = [], player = '') => {
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

    const hasWinningCombination = winningCombinations.filter((combination) => (
        board[combination[0]] === player &&
        board[combination[1]] === player &&
        board[combination[2]] === player
    ));

    return hasWinningCombination;
};