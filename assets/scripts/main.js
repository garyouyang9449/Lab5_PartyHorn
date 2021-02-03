let playButton = document.querySelector('#honk-btn')
let volume = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider")
let volumeIcon = document.getElementById("volume-image")
let audio = document.getElementById("horn-sound");
let airHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");
let soundImage = document.getElementById("sound-image");
let hornType = "air-horn";

playButton.setAttribute("type", "button")
audio.setAttribute("muted", false)

const playSound = (hornType) => {
    audio.setAttribute("src", `./assets/media/audio/${hornType}.mp3`)
    if(audio.getAttribute("muted") == "false") {
        audio.play()
    }
}

playButton.addEventListener("click", function () {playSound(hornType)})

volume.addEventListener("change", (event) => {
    let vol = event.target.value
    if(event.target.value > 100 || event.target.value < 0) {
        
    }
    else if(event.target.value == 0) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-0.svg")
        volumeSlider.value = event.target.value
        audio.setAttribute("muted", true)
        playButton.setAttribute("disabled", true)
    }
    else {
        if(vol > 0 && vol < 34) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg")
        }
        else if (vol >= 34 && vol < 67) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-2.svg")
        }
        else if(vol >= 67 && vol <= 100) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-3.svg")
        }
        volumeSlider.value = event.target.value
        audio.setAttribute("muted", false)
        audio.volume = event.target.value / 100
        playButton.removeAttribute("disabled")
    }
})

volumeSlider.addEventListener("change", (event) => {
    let vol = event.target.value
    if(event.target.value > 100 || event.target.value < 0) {
        
    }
    else if(event.target.value == 0) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-0.svg")
        volume.value = event.target.value
        audio.setAttribute("muted", true)
        playButton.setAttribute("disabled", true)
    }
    else {
        if(vol > 0 && vol < 34) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg")
        }
        else if (vol >= 34 && vol < 67) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-2.svg")
        }
        else if(vol >= 67 && vol <= 100) {
            volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-3.svg")
        }
        volume.value = vol
        audio.setAttribute("muted", false)
        audio.volume = event.target.value / 100
        playButton.removeAttribute("disabled")
    }
})

airHorn.addEventListener("click", () => {
    hornType = "air-horn"
    soundImage.setAttribute("src", "./assets/media/images/air-horn.svg")
})

carHorn.addEventListener("click", () => {
    hornType = "car-horn"
    soundImage.setAttribute("src", "./assets/media/images/car.svg")
})

partyHorn.addEventListener("click", () => {
    hornType = "party-horn"
    soundImage.setAttribute("src", "./assets/media/images/party-horn.svg")
})