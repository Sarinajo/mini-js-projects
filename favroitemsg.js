const text = document.querySelector('.text');
const btn = document.querySelector('#btn');
const savebtn = document.querySelector('#save-btn');
const showbtn = document.querySelector('#show-btn');
const clearbtn = document.querySelector('#clear-btn');
const favoritelist = document.querySelector('#favorites-list');
const msg = ["You are amazing!",
  "You brighten the room!",
  "Your smile is contagious!",
  "Believe in yourself.",
  "Keep moving forward.",
  "Do what you love.",
  "Success comes from persistence."];

  let LastIndex= -1;
  let favorites =[];

  function showmsg(){
    let random;
    do{
        random = Math.floor(Math.random()*msg.length);

    }while(random === LastIndex);

    LastIndex = random;
    text.innerText = msg[random];


  };

  setInterval(showmsg,3000);

  btn.addEventListener('click', showmsg);

  savebtn.addEventListener('click',()=>{
    const currentmsg = text.innerText;
    if(currentmsg && !favorites.includes(currentmsg)){
        favorites.push(currentmsg);
        alert("saved to favorites");
    }else{
        alert("already saved or nothing to save");
    }
  });

  showbtn.addEventListener('click',()=>{
    favoritelist.innerHTML = "";
    favorites.forEach(message =>{
        const li = document.createElement('LI');
        li.textContent = message;
        favoritelist.appendChild(li);
    });

  });

  clearbtn.addEventListener('click',()=>{
    favorites =[];
    favoritelist.innerHTML = "";
    alert("favorites cleared");
  });