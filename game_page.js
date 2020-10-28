player1_name = localStorage.getItem("Player1Name");
player2_name = localStorage.getItem("Player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1_name + ": ";
document.getElementById("player2name").innerHTML = player2_name + ": ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;

function send(){

   get_word = document.getElementById("word").value;
   word = get_word.toLowerCase();
   console.log("Word In Lower Case = " + word);

   charAt1 = word.charAt(1);
   console.log(charAt1);

   char_length = Math.floor(word.length /2 );
   charAt2 = word.charAt(char_length);
   console.log(charAt2);

   char_end = word.length - 1;
   charAt3 = word.charAt(char_end);
   console.log(charAt3);

   remove_charAt1 = word.replace( charAt1 , "_");
   remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
   remove_charAt3 = remove_charAt2.replace(charAt3 , "_");
   console.log(remove_charAt3);

 question_word = "<h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
input_box = "<br> Answer: <input type='text' id = 'input_check_box'>";
check_button = "<br><br> <button class = 'btn btn-info' onclick='check_answer()'> check </button>";

row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check_answer(){

  get_answer = document.getElementById("input_check_box").value;
  answer = get_answer.toLowerCase();
   console.log("answer in lower case-" + answer);

   if(answer == word){

      if(answer_turn == "player1"){

        player1_score = player1_score +1;
        document.getElementById("player1score").innerHTML = player1_score;

      }

      else{
 
      player2_score = player2_score +1;
      document.getElementById("player2score").innerHTML = player2_score;

      }

   }

   if(question_turn == "player1"){

     question_turn = "player2";
     document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;

   }

   else{

     question_turn = "player1";
     document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;

   }

   if(answer_turn == "player1"){

     answer_turn = "player2";
     document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

   }

   else{

    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;

   }

   document.getElementById("output").innerHTML = "";
   

}