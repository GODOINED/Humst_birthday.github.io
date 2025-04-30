document.addEventListener('DOMContentLoaded', function() {
    // Параллакс
    const parallaxBg = document.getElementById('parallaxBg');
    const parallaxCloud = document.getElementById('parallaxCloud');
    const parallaxCloudBg = document.getElementById('parallaxCloudBg');
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
   	const time = Date.now() * 0.001; // Текущее время в секундах
    	gentleX = Math.sin(time * 0.5) * 10; // -10px до 10px
    	gentleY = Math.cos(time * 0.3) * 5;  // -5px до 5px
        
        parallaxBg.style.transform = `translate(${parallaxX + gentleX}px, ${parallaxY + gentleY}px)scale(1.05)`;
	parallaxCloud.style.transform = `translate(${parallaxX * 4.5 + gentleX * 4.5}px, ${parallaxY * 4.5 + gentleY * 4.5}px)scale(1.05)`;
	parallaxCloudBg.style.transform = `translate(${parallaxX + gentleX }px, ${parallaxY + gentleY }px)scale(1.2)`;
	parallaxCloudBg2.style.transform = `translate(${parallaxX * 0.5 + gentleX * 0.5}px, ${parallaxY * 0.5+ gentleY * 0.5}px)scale(1.2)`;
        fogContainer.style.transform = `translate(${parallaxX * 0.3 + gentleX * 0.3}px, ${parallaxY * 0.3+ gentleY * 0.3}px)`;
        
        requestAnimationFrame(animate);
	const gentleSettings = {
    		speed: 0.5,    // Скорость покачивания (меньше = медленнее)
    		intensityX: 10, // Макс. смещение по X (px)
   		intensityY: 5   // Макс. смещение по Y (px)
	};
    }
    
    animate();
    
    container.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 30;
        targetY = (e.clientY / window.innerHeight - 0.5) * 30;
    });
    
    // Конфетти
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#48dbfb', '#1dd1a1'];
        
        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 8 + 5}px`;
            confetti.style.height = confetti.style.width;
            confettiContainer.appendChild(confetti);
        }
    }
    
    createConfetti();
    
    // Кнопка
    document.getElementById('downloadBtn').addEventListener('click', () => {
 	 // 1. Создаем ссылку
  	const link = document.createElement('a');
  
  	// 2. Указываем путь к файлу (относительно HTML!)
 	 link.href = 'Humst.blend'; 
  
 	 // 3. Важно: задаем имя файла
 	 link.download = 'Humst.blend'; 
  
 	 // 4. Симулируем клик
  	document.body.appendChild(link);
  	link.click();
  	document.body.removeChild(link);
    });
});