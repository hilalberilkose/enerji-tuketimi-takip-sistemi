// SAAT
function saat() {
    document.getElementById("saat").innerText =
        new Date().toLocaleString("tr-TR");
}
setInterval(saat, 1000);
saat();

// GRAFİK 1
new Chart(document.getElementById("chart1"), {
    type: "line",
    data: {
        labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
        datasets: [{
            label: "kWh",
            data: [820, 760, 910, 700, 640, 780],
            borderColor: "green"
        }]
    }
});

// GRAFİK 2
new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: {
        labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
        datasets: [{
            label: "TL",
            data: [2500, 2300, 2900, 2100, 1900, 2400],
            backgroundColor: "green"
        }]
    }
});

// DARK MODE
document.getElementById("temaBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// RAPOR İNDİR
function raporIndir() {

    const text = `
ENERJI RAPORU

Aylik Tuketim: 960 kWh
Günlük: 32 kWh
Tasarruf: %18

Durum: Sistem normal çalışıyor
`;

    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "enerji_raporu.txt";
    a.click();
}
