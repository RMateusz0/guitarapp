window.onload = () => { 

    const backingTrack = new Audio('./samples/backing.mp3');
         
    const soundNumber1 = new Audio('./samples/1.mp3');
    const soundNumber2 = new Audio('./samples/2.mp3');
    const soundNumber3 = new Audio('./samples/3.mp3');
    const soundNumber4 = new Audio('./samples/4.mp3');
    const soundNumber5 = new Audio('./samples/5.mp3');
    const soundNumber6 = new Audio('./samples/6.mp3');
    const soundNumber7 = new Audio('./samples/7.mp3');
    const soundNumber8 = new Audio('./samples/8.mp3');
    const soundNumber9 = new Audio('./samples/9.mp3');
    const soundNumber10 = new Audio('./samples/10.mp3');
    const soundNumber11 = new Audio('./samples/11.mp3');
    const soundNumber12 = new Audio('./samples/12.mp3');
    const soundNumber13 = new Audio('./samples/13.mp3');
    const soundNumber14 = new Audio('./samples/14.mp3');
    const soundNumber15 = new Audio('./samples/15.mp3');
    const soundNumber16 = new Audio('./samples/16.mp3');
        
    document.querySelector(".sound-number-1").addEventListener("mouseover", () => {soundNumber1.load();soundNumber1.play()})
    document.querySelector(".sound-number-2").addEventListener("mouseover", () => {soundNumber2.load();soundNumber2.play()})
    document.querySelector(".sound-number-3").addEventListener("mouseover", () => {soundNumber3.load();soundNumber3.play()})
    document.querySelector(".sound-number-4").addEventListener("mouseover", () => {soundNumber4.load();soundNumber4.play()})
    document.querySelector(".sound-number-5").addEventListener("mouseover", () => {soundNumber5.load();soundNumber5.play()})
    document.querySelector(".sound-number-6").addEventListener("mouseover", () => {soundNumber6.load();soundNumber6.play()})
    document.querySelector(".sound-number-7").addEventListener("mouseover", () => {soundNumber7.load();soundNumber7.play()})
    document.querySelector(".sound-number-8").addEventListener("mouseover", () => {soundNumber8.load();soundNumber8.play()})
    document.querySelector(".sound-number-9").addEventListener("mouseover", () => {soundNumber9.load();soundNumber9.play()})
    document.querySelector(".sound-number-10").addEventListener("mouseover", () => {soundNumber10.load();soundNumber10.play()})
    document.querySelector(".sound-number-11").addEventListener("mouseover", () => {soundNumber11.load();soundNumber11.play()})
    document.querySelector(".sound-number-12").addEventListener("mouseover", () => {soundNumber12.load();soundNumber12.play()})
    document.querySelector(".sound-number-13").addEventListener("mouseover", () => {soundNumber13.load();soundNumber13.play()})
    document.querySelector(".sound-number-14").addEventListener("mouseover", () => {soundNumber14.load();soundNumber14.play()})
    document.querySelector(".sound-number-15").addEventListener("mouseover", () => {soundNumber15.load();soundNumber15.play()})
    document.querySelector(".sound-number-16").addEventListener("mouseover", () => {soundNumber16.load();soundNumber16.play()})

    // document.querySelector(".sound-number-1").addEventListener("click", () => {soundNumber1.load();soundNumber1.play()})
    // document.querySelector(".sound-number-2").addEventListener("click", () => {soundNumber2.load();soundNumber2.play()})
    // document.querySelector(".sound-number-3").addEventListener("click", () => {soundNumber3.load();soundNumber3.play()})
    // document.querySelector(".sound-number-4").addEventListener("click", () => {soundNumber4.load();soundNumber4.play()})
    // document.querySelector(".sound-number-5").addEventListener("click", () => {soundNumber5.load();soundNumber5.play()})
    // document.querySelector(".sound-number-6").addEventListener("click", () => {soundNumber6.load();soundNumber6.play()})
    // document.querySelector(".sound-number-7").addEventListener("click", () => {soundNumber7.load();soundNumber7.play()})
    // document.querySelector(".sound-number-8").addEventListener("click", () => {soundNumber8.load();soundNumber8.play()})
    // document.querySelector(".sound-number-9").addEventListener("click", () => {soundNumber9.load();soundNumber9.play()})
    // document.querySelector(".sound-number-10").addEventListener("click", () => {soundNumber10.load();soundNumber10.play()})
    // document.querySelector(".sound-number-11").addEventListener("click", () => {soundNumber11.load();soundNumber11.play()})
    // document.querySelector(".sound-number-12").addEventListener("click", () => {soundNumber12.load();soundNumber12.play()})
    // document.querySelector(".sound-number-13").addEventListener("click", () => {soundNumber13.load();soundNumber13.play()})
    // document.querySelector(".sound-number-14").addEventListener("click", () => {soundNumber14.load();soundNumber14.play()})
    // document.querySelector(".sound-number-15").addEventListener("click", () => {soundNumber15.load();soundNumber15.play()})
    // document.querySelector(".sound-number-16").addEventListener("click", () => {soundNumber16.load();soundNumber16.play()})

    document.querySelector(".play-backing-track-button").addEventListener("click", () => { backingTrack.play()} )
    document.querySelector(".pause-backing-track-button").addEventListener("click", () => { backingTrack.pause()} )
    document.querySelector(".reload-backing-track-button").addEventListener("click", () => { 
        backingTrack.load()
        backingTrack.play()
    } )

}






    
