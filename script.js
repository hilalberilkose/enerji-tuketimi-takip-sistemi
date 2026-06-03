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
