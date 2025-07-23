function initPreloader() {
    // создаём скрытый iframe
    const iframe = document.createElement("iframe");
    iframe.src = "main.html";
    iframe.style.display = "none";

    // переход на main.html после полной загрузки
    iframe.onload = () => {
        window.location.href = "main.html";
    };

    // fallback — если не загрузилось за 10 сек, всё равно переходим
    setTimeout(() => {
        window.location.href = "main.html";
    }, 10000);

    document.body.appendChild(iframe);
}

window.addEventListener("DOMContentLoaded", initPreloader);
