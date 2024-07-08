var msg1=document.getElementById("msg1");
var msg2=document.getElementById('msg2');
var msg3=document.getElementById('msg3');
var again=document.getElementById('again');
var ans=Math.floor(Math.random()*10)+1;
var already_guessed=[];
var no_of_guesses=0;                    //count

function play(){
    var user_guess=document.getElementById("input").value;
    if (user_guess<1 || user_guess>10){
        alert("Enter number between ( 1-10 )");
    }
    else{
        no_of_guesses++
        already_guessed.push(user_guess);
        if(user_guess==ans){
            msg1.textContent="Number of guesses: "+no_of_guesses;
            msg2.textContent="The number was: "+ans;
            msg3.textContent="Congratulations you have guessed the number right!!";
            document.getElementById('my_btn').disabled=true;        //GUESS BUTTON gets disabled
        }
        else{
            msg1.textContent="Number of guesses: "+no_of_guesses;
            msg2.textContent="Guessed Numbers are: "+already_guessed; 
            msg3.textContent="Sorry wrong number!!"; 
            }
        }
    }
    function playagain(){
        location.reload();
    }
    
    
    