let loader = document.querySelector('.loading')
window.addEventListener( "load" , () => {
  loader.classList.add("fader")
  setTimeout(()=>{
  
    loader.remove()
  },3000)
})

let vePayer = () => {
  let ved = document.getElementById("ved");
  let playPause = document.getElementById("playPause");
  let flag = false;
  let ico = document.querySelector("#playPause .fa-play");
  playPause.addEventListener("click", () => {
    ico.classList.toggle("fa-play");
    ico.classList.toggle("fa-pause");
    flag ? ved.pause() : ved.play();
    flag = !flag;
  });
};
vePayer();
