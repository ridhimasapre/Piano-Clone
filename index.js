const pianokeys=document.querySelectorAll(".piano-keys .key"),
volumeSlider=document.querySelector(".volume-slider input"),
keyscheckbox=document.querySelector(".key-checkbox input");
let allKeys=[],
audio = new Audio("tunes/a.wav");// fetch the url 
const playTune=(key)=>{
    audio.src=`tunes/${key}.wav`  //it sets sourc URL of the audio elem to specific wav file based on value of key 
    audio.play(); //it starts playing audio file

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");//adding active class to clicked key ele 
    console.log(`Pressed key: ${key}`);
    setTimeout(()=>{
        clickedKey.classList.remove("active"); //click hione ke baad clicked reove krna
        console.log(`removed key: ${key}`);
    },150); //0.15
}


pianokeys.forEach(key=>{
    allKeys.push(key.dataset .key);
    //calling playTune fun with passing data-key value as an argument
    key.addEventListener("click",()=> playTune(key.dataset .key)); //passing the data key as an argument

// The event listener attached to that key triggers. Inside the event listener, playTune(key.dataset.key) is called.
// The argument passed to playTune() is the value of key.dataset.key, which is “a”.
// The playTune() function likely maps this note (“a”) to the corresponding audio file (e.g., “tunes/a.wav”).
// Finally, the audio associated with the “A” note is played.
});

const handleVolume=(e)=>{
    audio.volume=e.target.value;//passing range slider value as audio volume
   // The e.target.value represents the current value of the volume slider (usually between 0 and 1).
}

const showhideKey=()=>{
   pianokeys.forEach(key=>key.classList.toggle("hide"));
}

const pressKey=(e)=>{
    if(allKeys.includes(e.key))  playTune(e.key);
}
volumeSlider.addEventListener("input", handleVolume);
keyscheckbox.addEventListener("click", showhideKey); 
document.addEventListener("keydown", pressKey);