var app = angular.module('ticTacApp', []);


app.controller('ticTacCtrl', function($scope){

  $scope.board = [["", "", ""], ["", "", ""], ["", "", ""]];
  
// function to check if win conditions are met, will run after every turn.
function checkWin() {
  for(i = 0; i < 3; i++)
  // checks if horizontal rows are equal to each other and not equal to an empty string.
  if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== ""){
    console.log("win horizontal");
  }
  // checks if vertical columns are equal to each other and not equal to an empty string.
  else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "") {
    console.log("win vertical");
  }
  // checks diagonal. only true when i = 0
  else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "") {
    console.log("win diagonal right");
  }
  //checks left diagonal. only true when i = 2
  else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "") {
    console.log("win diagonal left");
  }
}
  // creates turnNumber property, will get incremented after every turn.
  $scope.turnNumber = 0;

  $scope.makeChoice = function(row, column) {
    if(($scope.board[row][column] == "") && ($scope.turnNumber >=0)) {
      var choice = ($scope.turnNum % 2) == 0 ? "X" : "O";
      $scope.board[row][column] = choice;
      $scope.turnNumber++;
      checkWin(choice);
    }
    console.log($scope.board);

  };

});//end of controller






  // $scope.game = {board: [1, 2, 3, 4, 5, 6, 7, 8, 9], p1: "X", p2: "O"};

  // $scope.squareClick = function(row, col){
  //  $scope.board[row][col] = "I got clicked!!!";
  // };

  // function winConditions(piece){
  //   for(var i = 0; i < 3; i++){
  //     if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][0] == $scope.board[i][2] && $scope.board[i][0] != ""){
  //       console.log(piece + " wins in the row " + i);
  //     }
  //     else if($scope.board[0][i] == $scope.board[1][i] && $scope.board[0][i] == $scope.board[2][i] && $scope.board[0][i] != ""){
  //       console.log(piece + " wins in the row " + i);
  //     }
  //   }
  //   if($scope.board[0][i] == $scope.board[1][i + 1] && $scope.board[0][i] == $scope.board[2][i + 2] && $scope.board[0][i] != ""){
  //       console.log(piece + " wins in the row " + i);
  //     }
  // }

  // $scope.turnNum = 0;
  // $scope.makeMove = function(row, col){
  //   if($scope.board[row][col] == ""){
  //     var piece = ($scope.turnNum % 2) == 0 ? "X" : "O";
  //     $scope.board[row][col] = piece;
  //     $scope.turnNum++;
  //     winConditions(piece);
  //   }
  // };

  // $scope.squareClick = function(index){
  //  $scope.board[Math.floor(index / 3)][index % 3] = "I got clicked!!!";
  // };

 