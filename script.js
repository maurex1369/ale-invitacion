document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainQuestion = document.getElementById('mainQuestion');
    const mainGif = document.getElementById('mainGif');
    const buttonsDiv = document.querySelector('.buttons');
    const creditsP = document.querySelector('.credits');

    let yesButtonSizeMultiplier = 1; // Para el tamaño base de SÍ
    let noButtonClickCount = 0;

    const noButtonPhrases = [
        "NO",
        "¿Estás segura?",
        "¿De verdad de verdad?",
        "Piénsalo un poquito más...",
        "¿Segurísima?",
        "¡No seas así!",
        "Anda, di que sí :)",
        "Por favoooor",
        "Me romperás el corazón :(",
        "Voy a llorar...",
        "Ya, en serio, ¡di que sí!",
        "No me queda más opción :("
    ];

    noBtn.addEventListener('click', () => {
        noButtonClickCount++;
        yesButtonSizeMultiplier += 0.4; // Incremento para el botón SÍ

        // Hacer crecer el botón SÍ
        yesBtn.style.transform = `scale(${yesButtonSizeMultiplier})`;
        // También puedes aumentar el padding y font-size directamente si prefieres un control más granular
        // yesBtn.style.fontSize = `${1 + (yesButtonSizeMultiplier - 1) * 0.2}em`;
        // yesBtn.style.padding = `${10 + (yesButtonSizeMultiplier - 1) * 2}px ${20 + (yesButtonSizeMultiplier - 1) * 4}px`;


        // Cambiar el texto del botón NO
        noBtn.textContent = noButtonPhrases[noButtonClickCount % noButtonPhrases.length];

        // Opcional: hacer el botón NO más pequeño o menos prominente
        if (noButtonClickCount > 5) { // Después de varios clics
            noBtn.style.transform = `scale(${1 - (noButtonClickCount - 5) * 0.1})`;
        }
        if (noButtonClickCount > noButtonPhrases.length -2 ) { // Casi al final de las frases
             noBtn.style.opacity = '0.5';
        }
        if (noButtonClickCount >= noButtonPhrases.length) {
            noBtn.style.display = 'none'; // Ocultar el botón NO eventualmente
        }
    });

    yesBtn.addEventListener('click', () => {
        // Cambiar el contenido de la página actual
        mainQuestion.textContent = "¡Sabía que dirías que sí! 🥳 ";
        mainGif.src = "https://media.tenor.com/8LjPMRe8kEsAAAAj/flork-gif.gif"; // GIF de celebración
        
        buttonsDiv.style.display = 'none'; // Ocultar los botones
        creditsP.style.display = 'none'; // Ocultar créditos si quieres

        // Crear la animación de corazones (como en el video)
        startHeartAnimation();
    });

    function startHeartAnimation() {
        const body = document.querySelector('body');
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '🎉️'; // Puedes usar '💖', '💕', etc.
            heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración aleatoria (3-5s)
            
            body.appendChild(heart);

            // Remover el corazón después de que termine su animación para no saturar el DOM
            setTimeout(() => {
                heart.remove();
            }, 5000); // Un poco más que la duración máxima de la animación
        }, 300); // Crear un nuevo corazón cada 300ms
    }
});
