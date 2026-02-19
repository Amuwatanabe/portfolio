
const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay');

btn.addEventListener('click', () => {
	btn.classList.toggle('active');
	nav.classList.toggle('active');
	overlay.classList.toggle('active');
});

// 背景クリックで閉じる
overlay.addEventListener('click', () => {
	btn.classList.remove('active');
	nav.classList.remove('active');
	overlay.classList.remove('active');
});

