document.addEventListener("DOMContentLoaded", function () {
    let flowers = document.querySelectorAll(".flower");
    let reverse = false;

    function startAnimation() {
        flowers.forEach((flower) => {
            flower.style.animation = reverse
                ? "flower-fall-reverse 5s linear forwards"
                : "flower-fall 5s linear forwards";
        });

        // Tunggu sampai animasi selesai
        setTimeout(() => {
            reverse = !reverse;
            startAnimation(); // Ulangi dengan arah berlawanan
        }, 5000); // Waktu animasi harus sesuai durasi
    }

    startAnimation();
});
