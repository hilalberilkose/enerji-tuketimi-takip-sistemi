// SAAT

function saatGuncelle() {

    document.getElementById("saat")
        .innerText =
        new Date().toLocaleString("tr-TR");

}

setInterval(saatGuncelle, 1000);

saatGuncelle();

// DARK MODE

document.getElementById("temaBtn")
    .onclick = function () {

        document.body.classList.toggle("dark");

    };

// GRAFİK 1

new Chart(
    document.getElementById("chart1"),
    {
        type: "line",
        data: {
            labels: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran"
            ],
            datasets: [{
                label: "Enerji Tüketimi (kWh)",
                data: [
                    820,
                    760,
                    910,
                    700,
                    640,
                    780
                ],
                borderColor: "green",
                tension: 0.4
            }]
        }
    }
);

// GRAFİK 2

new Chart(
    document.getElementById("chart2"),
    {
        type: "bar",
        data: {
            labels: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran"
            ],
            datasets: [{
                label: "Enerji Maliyeti (TL)",
                data: [
                    2500,
                    2300,
                    2900,
                    2100,
                    1900,
                    2400
                ],
                backgroundColor: "green"
            }]
        }
    }
);

// RAPOR

function raporIndir() {

    const rapor = `
ENERJI TUKETIM RAPORU

Aylik Tuketim: 960 kWh

Gunluk Tuketim: 32 kWh

Tasarruf Orani: %18

Karbon Azaltimi: 240 kg

Durum:
Sistem normal calisiyor.
`;

    const blob =
        new Blob(
            [rapor],
            { type: "text/plain" }
        );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "enerji_raporu.txt";

    link.click();

}

// HESAPLAYICI

function hesapla() {

    let tuketim =
        parseFloat(
            document.getElementById("gunlukTuketim").value
        );

    let fiyat =
        parseFloat(
            document.getElementById("birimFiyat").value
        );

    if (isNaN(tuketim) || isNaN(fiyat)) {

        document.getElementById("sonuc")
            .innerHTML =
            "Lütfen tüm alanları doldurun";

        return;

    }

    let aylik =
        tuketim * fiyat * 30;

    document.getElementById("sonuc")
        .innerHTML =
        "Aylık Tahmini Maliyet: " +
        aylik.toFixed(2) +
        " TL";

}

// GİRİŞ

function girisYap() {

    let k =
        document.getElementById("kullanici").value;

    let s =
        document.getElementById("sifre").value;

    if (k === "admin" && s === "1234") {

        document.getElementById("girisSonuc")
            .innerHTML =
            "✅ Giriş Başarılı";

    } else {

        document.getElementById("girisSonuc")
            .innerHTML =
            "❌ Hatalı Bilgi";

    }

}

// CANLI VERİ

setInterval(function () {

    let gunluk =
        Math.floor(Math.random() * 10) + 30;

    let aylik =
        Math.floor(Math.random() * 100) + 900;

    document.getElementById("gunluk")
        .innerText =
        gunluk + " kWh";

    document.getElementById("aylik")
        .innerText =
        aylik + " kWh";

}, 5000);

// UYARI

setInterval(function () {

    let deger =
        Math.floor(Math.random() * 200);

    if (deger > 150) {

        document.getElementById("uyari")
            .innerHTML =
            "⚠ Yüksek enerji tüketimi tespit edildi!";

    } else {

        document.getElementById("uyari")
            .innerHTML =
            "✅ Sistem normal çalışıyor";

    }

}, 3000);
