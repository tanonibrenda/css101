document.getElementById('campana').addEventListener('click', function() {
    document.getElementById('campana-audio').play();
    document.getElementById('alerta').style.display = 'block';
    setTimeout(function() {
        document.getElementById('alerta').style.display = 'none';
    }, 3000);
});

document.getElementById('campana').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('campana-audio').play();
        document.getElementById('alerta').style.display = 'block';
        setTimeout(function() {
            document.getElementById('alerta').style.display = 'none';
        }, 3000);
    }
});
