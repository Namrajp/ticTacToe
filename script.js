	/*	constants	*/
	winningArr = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		]
/*----- app's state (variables) -----*/
let board;
let turn = 'X'
let win;


/*----- cached element references -----*/
	const squares = Array.from(document.querySelectorAll('#board div'));
	const message = document.querySelector('h2');

/*----- event listeners -----*/
	document.getElementById('board').addEventListener('click', handleTurn);
	document.getElementById('resetBtn').addEventListener('click',init);

/*----- functions -----*/


	function init() {
		board = [
		'','','',
		'','','',
		'','',''
		];

		render();
	};	

	function render() {
		board.forEach(function(mark,index){
			squares[index].textContent = mark;
		message.textContent = win && win !=="T" ? `${win} wins the game` : win==='T' ?
		 `Its a Tie`: `Its ${turn}'s turn.`

		})
	}
	

	function handleTurn(e) {
		let idx = squares.findIndex(function(square) {
			return square === e.target
		});

		board[idx] = turn;

		turn = turn === 'X' ? 'O' : 'X';
		win = winResult();
		render();
	}

	function winResult() {
		let winner = null;
		winningArr.forEach(function(combo,index) {
			if (board[combo[0]] && 
				board[combo[0]] === board[combo[1]] && 
				board[combo[0]]=== board[combo[2]]
			)
			winner = board[combo[0]];
			
		});
		return winner ? winner : board.includes("") ? null : 'T';
	};

	init();

	
	

