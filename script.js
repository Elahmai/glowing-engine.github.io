const startDate = new Date("2025-06-20"); //start date june 20th 2025
const notes =[
    "June 20:Lowkey mad but still doing a happy dance when your text pops up.Don't tell my other apps though💌💃💃.",
    "June 21: You + me =🐒+🍌(Don't ask just go with it).",
    "June 22: You are the only  person I'd share my ice cream with (maybe)..... but it's the thought that counts😁.",
    "June 23: If loving you was a job...I'd work overtime  with no lunch break🥲and that's saying a lot.",
    "June 24: You r the goal I never want to miss, the match I never want to end and the only red card I'd gladly accept if it ment loving you too much⚽❤️.",
    "June 25: 🤫🤫You've got to be my ultimate bias 😤💫even BTS would write a whole album about how soft I am for you🎤💜.",
    "June 26: Can't wait to get you alone and show you how much I have missed you😏😏",
    "June 27: When we have kids, I'd be the fun parent...until homework shows up.Then its all you👶📚.",
    "June 29: If we were in a drama, I'd be the character that steals your hearts and blankets🛏️But somehow you'd still love me😇.",
    "June 30: They say love is patient but waiting for your reply when your online and ignoring me🧐💬🩷",
    "July 1: You make me forget myself  and every other rule I had.Who knew trouble could be so Irresistable🔥😉",
    "July 2: If we were to relive this year again ...i;d still chose you😉 just earlier...",
    "July 3: If love was a league we'd be top of the table...undefeated in cuddles, kisses and the one which shall not be mentioned🏆😂",
    "July 4: 🎶🎶Baby do you ever, think of when we're togethr? on the fourth of July underneath the firework sky🎇🎆...Point of View-Zero Venture",
    "July 5:  Let's make a deal...Ill handle the cuddles if you handle the rest. Spoiler: the rest is 'very interesting' 😇😇",
    "July 6: only four days to celebrate ayear of us but honestly....every moment with you feels like a win already🥹🥹💖",
    "July 7: Best plot twist of mylife is you🫵🫵 And baby we're still in season one🎬💞",
    "July 8: You don't have to be perfect....Just be mine and I'll love you right💖💖💖 Ps: you should have a screenshot of everyday",
    "365 DAYS: 🥳🥳🥳 Babe we made it to one year....You've seen the softest and wildest side of me and still you stayed🤧🤧Thank you for being mine(I'll forever be possesive) AND hey....when will you come to unwrap your present😉😘😘"
];
const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg",
    "img11.jpeg",
    "img12.jpeg",
    "img13.jpeg",
    "img14.jpeg",
    "img15.jpeg",
    "img16.jpeg",
    "img17.jpeg",
    "img18.jpeg",
    "img19.jpeg"
]
const btn = document.getElementById("openBtn");
const noteDiv = document.getElementById("note");
function getDayIndex(){
    const today = new Date();
    const diffTime = today-startDate;
    const diffDays = Math.floor(diffTime/(1000*60*60*24));
    return diffDays;
}
function canOpenNote(){
    const lastOpen = localStorage.getItem("lastOpenTIME");
    const now = Date.now();
    if(!lastOpen){
        localStorage.setItem("lastOpenTIME", now);
        return true;
    }

// check if 24hrs have passed
if(now-lastOpen >- 864000){
    localStorage.setItem("lastOpenTIME", now);
    return true;
}else{
    return false;
}
}
document.getElementById("openNoteBtn").addEventListener("click", openNote);
function openNote(){
    const dayIndex = getDayIndex();
    if (dayIndex < 0){
        noteDiv.textContent ="The countdown hasn't started yet";
        return;
    }
    if (dayIndex >= notes.length){
        noteDiv.textContent ="Our anniversary is here!❤️";
        return;
    } 
    if(canOpenNote()){
        noteDiv.textContent =notes[dayIndex];
        const noteImg = document.getElementById("noteImage");
        noteImg.src = images[dayIndex];
        noteImg.style.display= "block"
    }else{
        noteDiv.textContent = "Too early come back Tommorrow!";
    }
}