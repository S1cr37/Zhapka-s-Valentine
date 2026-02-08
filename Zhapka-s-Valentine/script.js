const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");

const mainScreen = document.getElementById("main-screen");
const yesScreen = document.getElementById("yes-screen");
const noScreen = document.getElementById("no-screen");

// Кнопка "ДА"
yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    yesScreen.classList.remove("hidden");
});

// Кнопка "НЕТ" — убегает
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Если нажали "НЕТ"
noBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    noScreen.classList.remove("hidden");
});

// Кнопка "Вернуться"
backBtn.addEventListener("click", () => {
    noScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
});
