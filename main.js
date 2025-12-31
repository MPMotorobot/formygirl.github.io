const textElements = document.querySelectorAll('.split-text');

// Разбивка на буквы
textElements.forEach(el => {
    const content = el.innerText;
    el.innerHTML = '';
    
    [...content].forEach(char => {
        const span = document.createElement('span');
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        el.appendChild(span);
    });
});

// Единая функция зажигания
function lightUp(element) {
    if (element && element.tagName === 'SPAN') {
        element.classList.add('animation');
        
        // Удаляем через 2 секунды для эффекта шлейфа
        setTimeout(() => {
            element.classList.remove('animation');
        }, 2000);
    }
}

// Слушатель для мышки
document.addEventListener('mouseover', (e) => {
    lightUp(e.target);
});

// Слушатель для касаний (движение пальцем)
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    lightUp(element);
}, { passive: true });
