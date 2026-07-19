// ============================================================
// SPLASH SCREEN
// ============================================================
const greetings = [
  ["Hello", "English"],
  ["Halo", "Bahasa Indonesia"],
  ["Bonjour", "Français"],
  ["Hola", "Español"],
  ["こんにちは", "日本語"],
  ["안녕하세요", "한국어"],
  ["Ciao", "Italiano"],
  ["Hallo", "Deutsch"],
  ["Olá", "Português"],
  ["你好", "中文"],
];

const wordEl = document.getElementById('splashWord');
const langEl = document.getElementById('splashLang');
const fillEl = document.getElementById('splashFill');
const splashEl = document.getElementById('splash');
let i = 0;
const stepMs = 420;

function showWord() {
  wordEl.classList.remove('show');
  langEl.classList.remove('show');

  setTimeout(() => {
    wordEl.textContent = greetings[i][0];
    langEl.textContent = greetings[i][1];
    wordEl.classList.add('show');
    langEl.classList.add('show');
    fillEl.style.width = (((i + 1) / greetings.length) * 100) + '%';
  }, 60);
}

showWord();

const interval = setInterval(() => {
  i++;
  if (i >= greetings.length) {
    clearInterval(interval);
    setTimeout(() => {
      splashEl.classList.add('hide');
    }, 350);
    return;
  }
  showWord();
}, stepMs);

// ============================================================
// MOBILE NAVIGATION TOGGLE
// ============================================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

// ============================================================
// TOP NAV — scroll spy
// ============================================================
const navLinks = document.querySelectorAll('#topnav a.nav-link');
const navSections = [...navLinks].map(a => document.querySelector(a.getAttribute('href')));

const navSpy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = navSections.indexOf(entry.target);
      navLinks.forEach(a => a.classList.remove('active'));
      if (idx > -1) navLinks[idx].classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

navSections.forEach(s => s && navSpy.observe(s));

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
// MOBILE CLOSE ON NAV LINK CLICK (additional)
// ============================================================
document.querySelectorAll('#topnav a.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.textContent = '☰';
  });
});