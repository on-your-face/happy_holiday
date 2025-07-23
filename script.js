window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        preloader.classList.add("hidden");

        // Полное удаление из DOM после анимации (опционально)
        setTimeout(() => preloader.remove(), 700);
    }
});