document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc-btn');
    
    calcBtn.addEventListener('click', () => {
        // Verileri al
        const basePrice = parseInt(document.getElementById('project-type').value);
        const pages = parseInt(document.getElementById('page-count').value);
        const seoExtra = document.getElementById('opt-seo').checked ? 5000 : 0;
        const adminExtra = document.getElementById('opt-admin').checked ? 8000 : 0;
        
        // Hata kontrolü
        if(isNaN(pages) || pages < 1) {
            alert("Lütfen geçerli bir sayfa sayısı girin.");
            return;
        }

        // Algoritma: (Taban Fiyat + (Sayfa Sayısı * 1000)) + Ekstralar
        const total = basePrice + (pages * 1000) + seoExtra + adminExtra;

        // DOM Manipülasyonu
        const resultDisplay = document.getElementById('total-quote');
        resultDisplay.innerText = total.toLocaleString('tr-TR') + " TL";

        // Küçük bir görsel efekt
        resultDisplay.parentElement.style.transform = "scale(1.05)";
        setTimeout(() => { resultDisplay.parentElement.style.transform = "scale(1)"; }, 200);
    });

    // Bonus Etkileşim: Randevu Butonu
    const appointmentBtn = document.querySelector('.btn-disabled');
    appointmentBtn.addEventListener('click', () => {
        alert("Oryantasyon aşamasında olduğumuz için randevu sistemi şu an kapalıdır. Lütfen daha sonra tekrar deneyiniz!");
    });
});