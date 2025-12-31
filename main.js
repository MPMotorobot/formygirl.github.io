const textElements = document.querySelectorAll('.split-text');

textElements.forEach(el => {
    const content = el.innerText;
    el.innerHTML = '';
    
    [...content].forEach(char => {
        const span = document.createElement('span');
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        
        // Функция включения анимации с последующим выключением
        const lightUp = () => {
            span.classList.add('animation');
            
            // Убираем класс через 3 секунды (можно поменять время)
            setTimeout(() => {
                span.classList.remove('animation');
            }, 3000); 
        };

        // Для компьютера (наведение мышки)
        span.addEventListener('mouseenter', lightUp);

        el.appendChild(span);
    });
});

// Логика для телефона: вождение пальцем по буквам
document.addEventListener('touchmove', (e) => {
    // Находим элемент, над которым сейчас находится палец
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    // Если это буква (span) внутри нашего текста, зажигаем её
    if (element && element.tagName === 'SPAN' && element.parentElement.classList.contains('split-text')) {
        element.classList.add('animation');
        
        // Таймер для гаснет (через 3 секунды)
        setTimeout(() => {
            element.classList.remove('animation');
        }, 3000);
    }
}, { passive: true });