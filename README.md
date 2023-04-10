# Play ticTacToe with minimal css and javascript

<b>Steps</b>  
We have structure of board using HTML and CSS. But the board is not
clickable.

- We need to declare constants first. One is winning conditions as winning Array.

## State of the app

- App has states like what board looks like in beginning variable board.
- What actions can be taken on board ie. click to play so, turn can be other state. variable turn.
- and if someone wins, win variable tracks that as true. so win variable is other state.

## Construction of the Game:

We have two players who make click move on the board. so we initialize empty board as board. ['','','','','','','','',''].
Next, we have bindings as reference to each cell on browser as squares, and h2 as way to display message.

### Functions:

init() - constructs the board.
render() - puts text mark on empty board array, that gets reflected on UI using render function.

### Event Handler:

Each squares on Ui make up the board, any event on a square means a click that has to populate board with a string symbol either 'X' or 'O'. That change on internal array of board,gets painted with render to Ui since we loops through board inside render function and find the target element of
that index to change its textContent property.

### Handle Turn and init

Initialize board using init and call render. Handle turn as flip between two letters, and render again. Important thing is in addition, we check message in render and result also.  
**Note:**  
 Understanding ForEach loop takes a callback function, which on each iteration, takes an element of its array, returns match of conditions.

### Winning:

While looping through winning Array, out of 8 winning conditions,
one of them is variable combo. each combo is an array, with three numbers
each number in that represents the index of a cell/square.
We need to evaluate array[index] to find out if it is 'X' or 'O'.
if combo[0] = combo[0] = combo[0] = 'X' -> X wins.  
 else if combo[0] = combo[0] = combo[0] = 'O' -> O wins.
We render board using render() and check win with winResult().

### Some language familiarity required:

- Array.from()
- arr.forEach(callback)
- element.textContent = mark
- ternary operator var x = x == ? 0: 1
- array.findIndex(callback condition)
- board.includes("") ? null : 'T'
- init() -> Invoke a function.
