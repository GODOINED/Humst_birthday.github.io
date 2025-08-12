document.addEventListener('DOMContentLoaded', function() {
    // Параллакс-эффект
    const parallaxBg = document.getElementById('parallaxBg');
    const parallaxBg1 = document.getElementById('parallaxBg1');
    const parallaxBg2 = document.getElementById('parallaxBg2');
    const parallaxBg3 = document.getElementById('parallaxBg3');
    const parallaxBg4 = document.getElementById('parallaxBg4');
    const parallaxCloud = document.getElementById('parallaxCloud');
    const parallaxCloudBg = document.getElementById('parallaxCloudBg');
    const parallaxHumst = document.getElementById('parallaxHumst');
    const parallaxCloudBg2 = document.getElementById('parallaxCloudBg2');
    const fogContainer = document.getElementById('fogContainer');
    const container = document.getElementById('parallaxContainer');

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const ease = 0.05;

    function animate() {
        mouseX += (targetX - mouseX) * ease;
        mouseY += (targetY - mouseY) * ease;
        const parallaxX = mouseX * 0.3;
        const parallaxY = mouseY * 0.3;
        const time = Date.now() * 0.001;
        const gentleX = Math.sin(time * 0.5) * 10;
        const gentleY = Math.cos(time * 0.3) * 5;

        parallaxBg.style.transform = `translate(${parallaxX + gentleX}px, ${parallaxY + gentleY}px) scale(1.05)`;
        parallaxBg1.style.transform = `translate(${parallaxX * 3.5 + gentleX * 3.5}px, ${parallaxY * 3.5 + gentleY * 3.5}px) scale(1.05)`;
        parallaxBg2.style.transform = `translate(${parallaxX * 1.5 + gentleX * 1.5}px, ${parallaxY * 1.5 + gentleY * 1.5}px) scale(1.05)`;
        parallaxBg3.style.transform = `translate(${parallaxX * 0.5 + gentleX * 0.5}px, ${parallaxY * 0.5 + gentleY * 0.5}px) scale(1.05)`;
        parallaxBg4.style.transform = `translate(${parallaxX / 2 + gentleX / 2}px, ${parallaxY / 2 + gentleY / 2}px) scale(1.05)`;
        parallaxCloud.style.transform = `translate(${parallaxX * 4.5 + gentleX * 4.5}px, ${parallaxY * 4.5 + gentleY * 4.5}px) scale(1.025)`;
        parallaxCloudBg.style.transform = `translate(${parallaxX + gentleX}px, ${parallaxY + gentleY}px) scale(1.2)`;
        parallaxHumst.style.transform = `translate(${parallaxX + gentleX}px, ${parallaxY + gentleY}px) scale(1.0)`;
        parallaxCloudBg2.style.transform = `translate(${parallaxX * 0.5 + gentleX * 0.5}px, ${parallaxY * 0.5 + gentleY * 0.5}px) scale(1.2)`;
        fogContainer.style.transform = `translate(${parallaxX * 0.3 + gentleX * 0.3}px, ${parallaxY * 0.3 + gentleY * 0.3}px)`;

        requestAnimationFrame(animate);
    }

    animate();

    container.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 30;
        targetY = (e.clientY / window.innerHeight - 0.5) * 30;
    });

function createConfetti() {
    const container = document.querySelector('.confetti');
    const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#48dbfb', '#1dd1a1'];
    const shapes = [
        '',
        'border-radius: 50%',
        'clip-path: polygon(50% 0%, 0% 100%, 100% 100%)',
        'clip-path: polygon(0% 0%, 100% 0%, 50% 100%)'
    ];

    // Создаем 8 частиц с разными параметрами
    for (let i = 0; i < 8; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';

        // Уникальные параметры для каждой частицы
        const windStart = (Math.random() - 0.5) * 100;
        const windEnd = windStart + (Math.random() - 0.5) * 300;
        const size = 6 + Math.random() * 8;
        const rotation = Math.random() * 720 - 360;

        piece.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-delay: ${Math.random() * 5}s;
            animation-duration: ${5 + Math.random() * 3}s;
            --wind-start: ${windStart};
            --wind-end: ${windEnd};
            ${shapes[Math.floor(Math.random() * shapes.length)]};
        `;

        container.appendChild(piece);
    }
}

// Первый запуск
createConfetti();

// Автоматическое обновление (необязательно)
setInterval(() => {
    const container = document.querySelector('.confetti');
    if (container.children.length < 50) {
        createConfetti();
    }
}, 3000);

window.addEventListener('load', createConfetti);

// Автоматическое обновление (необязательно)
setInterval(() => {
    const container = document.querySelector('.confetti');
    if (container.children.length < 50) {
        createConfetti();
    }
}, 3000);
// Запускаем и очищаем старые частицы
function startConfetti() {
    createConfetti();

    // Очистка старых частиц каждые 10 секунд
    setInterval(() => {
        const container = document.querySelector('.confetti');
        if (container.children.length > 100) {
            container.innerHTML = '';
            createConfetti();
        }
    }, 10000);
}

// Старт после загрузки страницы
window.addEventListener('load', startConfetti);

    // Кнопка скачивания
    document.getElementById('downloadBtn').addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        const link = document.createElement('a');
        link.href = 'HumstCat.blend';
        link.download = 'HumstCat.blend';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Частицы для кнопки
    const linkBtn = document.getElementById('linkBtn');
    const particleTypes = [
        {
            image: 'url("smile.png")',
            colors: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'],
            sizes: [15, 25]
        },
        {
            image: 'url("mic.png")',
            colors: ['#A2D2FF', '#BDE0FE', '#CDB4DB', '#FFC8DD', '#FFAFCC'],
            sizes: [20, 30]
        }
    ];

    function createAudioParticles() {
        const particlesContainer = document.getElementById('audioParticles');
        const btnRect = linkBtn.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;

        for (let i = 0; i < 12; i++) {
            const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            const particle = document.createElement('div');
            particle.className = 'audio-particle';

            const size = Math.random() * (type.sizes[1] - type.sizes[0]) + type.sizes[0];
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 40 + 20;
            const color = type.colors[Math.floor(Math.random() * type.colors.length)];
            const rotationSpeed = (Math.random() * 5 + 5) * (Math.random() > 0.5 ? 1 : -1);
            const lifeTime = Math.random() * 1000 + 1000;

            const startX = centerX + Math.cos(angle) * distance;
            const startY = centerY + Math.sin(angle) * distance;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;
            particle.style.backgroundImage = type.image;
            particle.style.filter = `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 2px ${color})`;
            particle.style.setProperty('--rotation', `${rotationSpeed}deg`);
            particle.style.setProperty('--end-x', `${(Math.random() - 0.5) * 200}px`);
            particle.style.setProperty('--end-y', `${-Math.random() * 150 - 50}px`);

            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.style.opacity = '0';
                setTimeout(() => particle.remove(), 300);
            }, lifeTime);
        }
    }

    // Обработчики событий для второй кнопки
    linkBtn.addEventListener('mouseenter', createAudioParticles);
    linkBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);

        for (let i = 0; i < 8; i++) {
            setTimeout(createAudioParticles, i * 100);
        }

        window.open('https://drive.google.com/file/d/1iWJWbAwUpjmd918SyGlaqC6nlnBf2cLZ/view?usp=sharing');
    });

    // Светлячки
    function createFireflies() {
        const container = document.getElementById('firefliesContainer');
        const fireflyCount = 15;

        for (let i = 0; i < fireflyCount; i++) {
            const firefly = document.createElement('div');
            firefly.className = 'firefly';

            const centerX = 50 + (Math.random() - 0.5) * 40;
            const centerY = 50 + (Math.random() - 0.5) * 40;

            firefly.style.left = `${centerX}%`;
            firefly.style.top = `${centerY}%`;
            firefly.style.width = `${Math.random() * 4 + 4}px`;
            firefly.style.height = firefly.style.width;
            firefly.style.animationDelay = `${Math.random() * 5}s`;
            firefly.style.animationDuration = `${8 + Math.random() * 8}s`;

            const hue = 45 + Math.random() * 40;
            firefly.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
            firefly.style.boxShadow =
                `0 0 10px 2px hsl(${hue}, 100%, 80%),
                 0 0 20px 5px hsl(${hue}, 100%, 60%)`;

            container.appendChild(firefly);
        }
    }

    createFireflies();

    // Блестки на буквах
    document.querySelectorAll('.candy-letter').forEach(letter => {
        if (Math.random() > 0.7) {
            letter.style.setProperty('--sparkle-delay', `${Math.random() * 2}s`);
            letter.classList.add('has-sparkle');
        }
    });

});
