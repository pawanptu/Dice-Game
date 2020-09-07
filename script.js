// alert("Welcome to luck Dice Game created by Pawan");


dicefun = () =>{
    const play1 =Math.floor(Math.random() * 19) +1;
    const player1dice = `image/dice${play1}.jpeg`;
    document.getElementById('player1').setAttribute('src', player1dice);
    
    const play2 =Math.floor(Math.random() * 19) +1;
    const player2dice = `image/dice${play2}.jpeg`;
    document.getElementById('player2').setAttribute('src', player2dice);
    
    if(play1>play2){
      document.querySelector('h2').innerHTML="Player 1 Won";
    
    }
    else if(play1<play2){
      document.querySelector('h2').innerHTML="Player 2 Won";
    
    }
    else{
      document.querySelector('h2').innerHTML="Draw"
    }
    
    }
    alert("Welcome to luck Dice Game created by Pawan");
