import { winning } from './helpers';

describe('helpers#winning', () => {
    test('is a function', () => {
        expect(typeof winning).toEqual('function');
    });

    test('throws if first parameter is incorrect', () => {
        expect(() => winning()).toThrow();
        expect(() => winning(1)).toThrow();
    });

    test('throws if second parameter is incorrect', () => {
        expect(() => winning([])).toThrow();
        expect(() => winning([], 1)).toThrow();
    });

    test('returns false with a board that has less than three moves on it', () => {
        const player = 'Y';
        const emptyBoard = Array(9).fill(null);

        // create an array of boards that have one move set
        const oneMoveBoards = [...emptyBoard].reduce((oneMoveBoards, _, i, originalEmptyBoard) => {
            // create a new epmty board
            const nextBoard = Array(originalEmptyBoard.length).fill(null);
            nextBoard[i] = player;
            return [
                ...oneMoveBoards,
                nextBoard
            ]
        }, []);

        expect(winning(emptyBoard, player)).toEqual(false);

        oneMoveBoards.forEach(board =>
            expect(winning(board, player)).toEqual(false)
        );
    });

    test('returns true when winning combinations exist for a given player', () => {
        const player = 'X';
        const winningBoards = [
            [
                player, player, player,
                null, null, null,
                null, null, null
            ],
            [
                null, null, null,
                player, player, player,
                null, null, null
            ],
            [
                null, null, null,
                null, null, null,
                player, player, player
            ],
            [
                player, null, null,
                player, null, null,
                player, null, null,
            ],
            [
                null, player, null,
                null, player, null,
                null, player, null
            ],
            [
                null, null, player, 
                null, null, player, 
                null, null, player 
            ],
            [
                player, null, null,
                null, player, null,
                null, null, player
            ],
            [
                null, null, player, 
                null, player, null,
                player, null, null
            ]
        ];

        winningBoards.forEach((board, i) => {
            expect(winning(board, player)).toEqual(true, `board ${i} must return true`);
        });
    });
});