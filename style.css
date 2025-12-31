body {
    margin: 0;
    padding: 0;
    background: #000 url(image/background.gif) no-repeat center center/cover;
    text-align: center;
    min-height: 100vh;
    font-family: 'Barlow Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: #333;
}

p {
    font-size: 120px;
    font-weight: bold;
    margin: 10px 0;
    color: #333;
}

span {
    display: inline-block;
    cursor: pointer;
    transition: all 0.8s ease; /* Плавное затухание */
    user-select: none;
    -webkit-user-select: none;
}

.animation {
    color: #fffb00 !important;
    text-shadow: 0 0 10px #fffb00, 0 0 25px #ffcc00;
    transform: scale(1.2);
    animation: glow 1.5s linear infinite;
    transition: all 0.1s ease; /* Быстрое загорание */
}

@keyframes glow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.heart {
    position: fixed;
    width: 80px;
    height: 70px;
    z-index: 10;
    pointer-events: none;
}

.heart::before, .heart::after {
    position: absolute;
    content: "";
    left: 40px;
    top: 0;
    width: 40px;
    height: 65px;
    background: #ff4d6d;
    border-radius: 40px 40px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}

.heart::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}

.top { top: 40px; left: 40px; }
.bottom { bottom: 40px; right: 40px; }

@keyframes beating {
    0%, 100% { transform: scale(1); }
    40% { transform: scale(1.2); }
}

@keyframes beating-mob {
    0%, 100% { transform: translateX(-50%) scale(1); }
    40% { transform: translateX(-50%) scale(1.2); }
}

.top, .bottom { animation: beating 1.2s infinite ease-in-out; }

@media (max-width: 780px) {
    body {
        padding-bottom: 100px;
        touch-action: none; /* Запрет скролла при рисовании */
    }

    p { font-size: 50px; }

    .top {
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        animation: beating-mob 1.2s infinite ease-in-out;
    }
    
    .bottom {
        bottom: 30px;
        right: auto;
        left: 50%;
        transform: translateX(-50%);
        animation: beating-mob 1.2s infinite ease-in-out;
    }
}
