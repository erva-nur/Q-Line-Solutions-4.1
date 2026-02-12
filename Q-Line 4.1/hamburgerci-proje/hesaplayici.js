document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('calc-trigger-btn');
    
    btn.addEventListener('click', function() {
        // Elementleri çekiyoruz
        const count = parseInt(document.getElementById('burger-count').value);
        const menuPrice = parseInt(document.getElementById('menu-type').value);
        const sauceAdded = document.getElementById('extra-sauce').checked;
        const drinkAdded = document.getElementById('extra-drink').checked;
        const resultSpan = document.getElementById('total-price');

        // Geçerlilik Kontrolü
        if (isNaN(count) || count <= 0) {
            alert("Lütfen geçerli bir sayı giriniz!");
            return;
        }

        // Hesaplama Algoritması
        let extraTotal = 0;
        if (sauceAdded) extraTotal += 20;
        if (drinkAdded) extraTotal += 50;

        const total = (menuPrice + extraTotal) * count;

        // Ekrana Yazdırma (DOM Manipülasyonu)
        resultSpan.innerText = total.toLocaleString('tr-TR');
        
        // Efekt (Basit bir animasyon hissi)
        resultSpan.style.color = "#ffeb3b";
        setTimeout(() => { resultSpan.style.color = "white"; }, 300);
    });
});