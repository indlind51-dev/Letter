// ===============================
// MUSIK
// ===============================

function startMusic() {

    const music = document.getElementById("bgMusic");

    if (!music) {
        console.log("Audio bgMusic tidak ditemukan!");
        return;
    }

    music.volume = 0.7;

    music.play()
        .then(() => {
            console.log("Musik berhasil dimainkan 🎵");
        })
        .catch((error) => {
            console.log("Musik gagal dimainkan:", error);
        });
}


// ===============================
// PINDAH SLIDE
// ===============================

function goToSlide(number) {

    const currentSlide =
        document.querySelector(".slide.active");

    if (currentSlide) {
        currentSlide.classList.remove("active");
    }

    const nextSlide =
        document.getElementById("slide" + number);

    if (nextSlide) {
        nextSlide.classList.add("active");
    }

    // Mulai musik setelah tombol diklik
    startMusic();
}


// ===============================
// CEK JAWABAN
// ===============================

function checkAnswer(slideNumber, correct) {

    if (correct === true) {

        // Langsung ke slide berikutnya
        goToSlide(slideNumber + 1);

        return;
    }

    // Jika jawaban salah
    const feedback =
        document.getElementById("feedback" + slideNumber);

    if (feedback) {

        feedback.textContent =
            "Heh nono 😭 ya pasti kamu sengaja mau usil.";

        feedback.style.color = "#e05275";
    }
}


// ===============================
// BUKA HADIAH
// ===============================

function openGift() {

    goToSlide(6);

}

// ===============================
// MUSIC PLAYER
// ===============================

const music = document.getElementById("bgMusic");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");


function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play()
            .then(() => {
                playButton.textContent = "Ⅱ";
            })
            .catch(error => {
                console.log("Musik gagal dimainkan:", error);
            });

    } else {

        music.pause();

        playButton.textContent = "▶";
    }
}


// ===============================
// UPDATE PROGRESS
// ===============================

if (music) {

    music.addEventListener("loadedmetadata", function() {

        progressBar.max = music.duration;

        duration.textContent =
            formatTime(music.duration);

    });


    music.addEventListener("timeupdate", function() {

        progressBar.value = music.currentTime;

        currentTime.textContent =
            formatTime(music.currentTime);

    });


    music.addEventListener("ended", function() {

        playButton.textContent = "▶";

    });

}


// ===============================
// GESER PROGRESS BAR
// ===============================

if (progressBar) {

    progressBar.addEventListener("input", function() {

        music.currentTime = progressBar.value;

    });

}


// ===============================
// FORMAT WAKTU
// ===============================

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return minutes + ":" +
        (secs < 10 ? "0" : "") +
        secs;
}


// ===============================
// TOMBOL TAMBAHAN
// ===============================

function likeSong() {

    alert("❤️ Lagu ini cocok buat kamu.");

}

function shuffleSong() {

    console.log("Shuffle");

}

function previousSong() {

    music.currentTime = 0;

}

function nextSong() {

    music.currentTime = 0;

}

function repeatSong() {

    music.loop = !music.loop;

}