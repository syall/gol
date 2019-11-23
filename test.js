const { Automata } = require('./dist/automata');

const emptyCell = { state: 0, display: '0' };
const aliveCell = { state: 1, display: '1' };
const initRules = {
	options: {
		random: true,
		range: [
			{ cell: emptyCell, weight: 7 },
			{ cell: aliveCell, weight: 3 },
		]
	},
};
const stateRules = [
	(nbInfo) => nbInfo.count < 2 || nbInfo.count > 3 ? emptyCell : false,
	(nbInfo) => nbInfo.count === 3 ? aliveCell : false,
];
const runningRules = {
	msPerStep: 100,
	maxIterations: 250,
};

const test = new Automata(
	initRules,
	stateRules,
	runningRules,
);

test.generateGrid();
test.run();
