document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll("h3");

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.color = "white";
        }, index * 300);
    });
});
