// Flip
function flipCard() {
    document.getElementById('card').classList.toggle('flip');
}

// Lottie
lottie.loadAnimation({
    container: document.getElementById('lottie1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json'
});

lottie.loadAnimation({
    container: document.getElementById('lottie2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json'
});