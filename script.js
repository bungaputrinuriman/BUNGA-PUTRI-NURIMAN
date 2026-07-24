// ============================================================
// SPLASH SCREEN
// ============================================================
const greetings = [
  ['Hello', 'English'],
  ['Halo', 'Bahasa Indonesia'],
  ['Bonjour', 'Français'],
  ['Hola', 'Español'],
  ['こんにちは', '日本語'],
  ['안녕하세요', '한국어'],
  ['Ciao', 'Italiano'],
  ['Hallo', 'Deutsch'],
  ['Olá', 'Português'],
  ['你好', '中文'],
];

const wordEl = document.getElementById('splashWord');
const langEl = document.getElementById('splashLang');
const fillEl = document.getElementById('splashFill');
const splashEl = document.getElementById('splash');

let currentIndex = 0;
const STEP_MS = 420;

function showSplashWord() {
  wordEl.classList.remove('show');
  langEl.classList.remove('show');

  setTimeout(() => {
    wordEl.textContent = greetings[currentIndex][0];
    langEl.textContent = greetings[currentIndex][1];
    wordEl.classList.add('show');
    langEl.classList.add('show');
    fillEl.style.width = ((currentIndex + 1) / greetings.length * 100) + '%';
  }, 60);
}

function startSplash() {
  showSplashWord();

  const interval = setInterval(() => {
    currentIndex++;

    if (currentIndex >= greetings.length) {
      clearInterval(interval);
      setTimeout(() => splashEl.classList.add('hide'), 350);
      return;
    }

    showSplashWord();
  }, STEP_MS);
}

startSplash();

// ============================================================
// MOBILE NAVIGATION
// ============================================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('open');
  navToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  navToggle.textContent = '☰';
}

navToggle.addEventListener('click', toggleMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ============================================================
// SCROLL SPY
// ============================================================
const navLinks = document.querySelectorAll('#topnav a.nav-link');
const sections = [...navLinks].map(link =>
  document.querySelector(link.getAttribute('href'))
);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = sections.indexOf(entry.target);
      navLinks.forEach(link => link.classList.remove('active'));
      if (idx > -1) navLinks[idx].classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(section => {
  if (section) scrollObserver.observe(section);
});

// ============================================================
// ABOUT TABS
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById('tab-' + btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ============================================================
// CLOSE MOBILE MENU ON NAV LINK CLICK
// ============================================================
document.querySelectorAll('#topnav a.nav-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});