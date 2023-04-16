function solveSudoku(grid) {
    const size = 9; // the size of the sudoku grid
    const emptyCell = findEmptyCell(grid); // find an empty cell
    
    // base case: if there are no empty cells, the sudoku is solved
    if (!emptyCell) {
        console.log(grid)
      return true;
    }
    
    const row = emptyCell[0];
    const col = emptyCell[1];
    
    // try every possible number in the empty cell
    for (let num = 1; num <= size; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;
        
        // recursively solve the sudoku with the new number added
        if (solveSudoku(grid)) {
          return true;
        }
        
        // if the new number doesn't work, backtrack and try the next number
        grid[row][col] = null;
      }
    }
    
    // if no numbers work in this cell, backtrack to the previous cell
    return false;
  }
  
  // helper function to find an empty cell in the sudoku grid
  function findEmptyCell(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === null) {
          return [row, col];
        }
      }
    }
    return null; // if no empty cell is found, return null
  }
  
  // helper function to check if a number can be added to a cell without violating the rules of sudoku
  function isValidMove(grid, row, col, num) {
    // check the row
    for (let i = 0; i < grid.length; i++) {
      if (grid[row][i] === num) {
        return false;
      }
    }
    
    // check the column
    for (let i = 0; i < grid[row].length; i++) {
      if (grid[i][col] === num) {
        return false;
      }
    }
    
    // check the 3x3 sub-grid
    const subGridRow = Math.floor(row / 3) * 3;
    const subGridCol = Math.floor(col / 3) * 3;
    for (let i = subGridRow; i < subGridRow + 3; i++) {
      for (let j = subGridCol; j < subGridCol + 3; j++) {
        if (grid[i][j] === num) {
          return false;
        }
      }
    }
    
    return true; // if the number can be added, return true
  }

  export default solveSudoku;