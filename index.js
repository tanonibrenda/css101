document.getElementById('campana').addEventListener('click', function() {
    document.getElementById('campana-audio').play();
    alert('¡Un ángel acaba de ganar sus alas!');
});

document.getElementById('campana').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('campana-audio').play();
        alert('¡Un ángel acaba de ganar sus alas!');
    }
});

document.getElementById('comentarios-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const listaComentarios = document.getElementById('lista-comentarios');

    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<strong>${nombre}:</strong> <p>${comentario}</p>`;

    listaComentarios.appendChild(nuevoComentario);

    document.getElementById('comentarios-form').reset();
});
