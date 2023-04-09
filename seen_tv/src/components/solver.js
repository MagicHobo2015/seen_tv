
// made this a class so that it can be used in other places
class Solver{
    // we can work with the board as is no need for a copy
    constructor(boardArray){
        this.boardArray = boardArray;

        // ********************************************debugging only REMOVE **********
        console.log("The Solver has been created");
    }
    solve(boardArray) {
        this.boardArray = boardArray;
        // 2d array so start outter loop
        for (let col = 0; col < 9; col++) {

            // now for the inner loop
            for (let row = 0; row < 9; row++){

                // this will go through the array one by one and the address is array[i][col]
               if (this.boardArray[col][row] == null) {

                // this generates the number to be placed so it starts at one
                    for (let num = 1; num < 10; num++) {

                        // check to see if the number can go there
                        if(this.valid(row, col, num)) {

                            // insert the number into the Array
                            this.boardArray[col][row] = num
                            
                            // now call solve again
                            this.solve(this.boardArray);
                        }
                        this.boardArray[col][row] = null;
                    }
               }
            }
    return;
        };
    }
    
    // this checks to see if num can safely reside in ( row, col )
    valid(row, col, num){

        // each square needs three checks, row / col / square
        for (let i = 0; i < 9; i++){

            // this checks the row
            if ( this.boardArray[i][row] === num ) {
                // no need to continue
                return false
            }

            // this checks col
            if ( this.boardArray[col][i] === num){
                // then we are done here
                return false
            }
        }

        // offsets for the square
        let rowOffset = (row % 3) * 3;
        let colOffset = (col % 3) * 3;

        // this needs two loops
        for (let i = 0; i < 3; i++){

            for (let j = 0; j < 3; j++){
                if (this.boardArray[i + colOffset][j + rowOffset] === num){
                    // then it doesnt work
                    return false
                }
            }
        }
        // if you made it here that means it fits!
        return true
    }
};
export default Solver;
