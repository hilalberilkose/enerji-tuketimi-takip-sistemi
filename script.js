const ctx = document.getElementById('enerjiGrafik');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [{
            label: 'Enerji Tüketimi (kWh)',
            data: [820, 760, 910, 700, 640, 780],
            tension: 0.4
        }]
    },
    options: {
        responsive: true
    }
});

const maliyetCtx = document.getElementById('maliyetGrafik');

new Chart(maliyetCtx, {
    type: 'bar',
    data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [{
            label: 'Enerji Maliyeti (TL)',
            data: [2500, 2300, 2900, 2100, 1900, 2400]
        }]
    },
    options: {
        responsive: true
    }
});

document.getElementById('temaButonu')
    .addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

function hesapla() {

    let tuketim = parseFloat(
        document.getElementById('gunlukTuketim').value
    );

    let fiyat = parseFloat(
        document.getElementById('birimFiyat').value
    );

    if (isNaN(tuketim) || isNaN(fiyat)) {
        document.getElementById('sonuc').innerHTML =
            'Lütfen tüm alanları doldurun';
        return;
    }

    let aylik = tuketimfiyat30;

    document.getElementById('sonuc').innerHTML =
        'Aylık Tahmini Maliyet: ' +
        aylik.toFixed(2) +
        ' TL';
}
