window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        // Добавляем класс не сразу, а на следующий кадр, чтобы сработал transition
        requestAnimationFrame(() => {
            preloader.classList.add("hidden");
        });

        // Удаляем из DOM чуть позже — после окончания transition
        setTimeout(() => {
            preloader.remove();
        }, 1000); // с запасом
    }
});
