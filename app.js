// ═══════════════ THEME TOGGLE ═══════════════
const themeBtn = document.querySelector("#theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "Тёмная тема" : "Светлая тема";
});

// ═══════════════ BIO «ПОДРОБНЕЕ» ═══════════════
const bioToggle = document.querySelector("#bio-toggle");
const bioExtra = document.querySelector("#bio-extra");

bioToggle.addEventListener("click", () => {
  const isHidden = bioExtra.classList.contains("hidden");
  bioExtra.classList.toggle("hidden");
  bioToggle.textContent = isHidden ? "Свернуть −" : "Читать полностью +";
});

// ═══════════════ DISCOGRAPHY CARDS ═══════════════
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const info = card.querySelector(".card__info");
    const hint = card.querySelector(".card__hint");
    const isHidden = info.classList.contains("hidden");

    info.classList.toggle("hidden");
    if (hint) {
      hint.textContent = isHidden ? "Скрыть −" : "Подробнее +";
    }
  });
});

// ═══════════════ RANDOM FACTS ═══════════════
const facts = [
  "Настоящее имя Travis Scott — Жак Бермон Вебстер II.",
  "Он родился 30 апреля 1991 года в Хьюстоне, штат Техас.",
  "Псевдоним «Travis Scott» — дань уважения его дяде Трэвису и рэперу Kid Cudi (Скотт Мескади).",
  "ASTROWORLD назван в честь парка аттракционов Six Flags AstroWorld в Хьюстоне, закрытого в 2005 году.",
  "Трэвис бросил учёбу в Техасском университете в Сан-Антонио, чтобы полностью посвятить себя студийной работе.",
  "Его лейбл и креативное агентство Cactus Jack Records были основаны в 2017 году.",
  "Коллаборация Travis Scott × Nike Air Jordan 1 с перевёрнутым свушем стала одной из самых культовых в сникер-культуре.",
  "В апреле 2020 года его виртуальное шоу Astronomical в Fortnite посмотрели более 12 миллионов игроков одновременно.",
  "Как саунд-продюсер он начинал в команде Канье Уэста и участвовал в работе над альбомом Yeezus (2013).",
  "Альбом UTOPIA (2023) дебютировал на 1-м месте Billboard 200 с результатом 496 000 единиц за первую неделю.",
  "У Трэвиса двое детей — дочь Сторми и сын Эйр.",
  "Трек «SICKO MODE» стал его первым синглом, возглавившим чарт Billboard Hot 100.",
  "В 2020 году он запустил именное меню в McDonald's — первая подобная коллаборация бренда со времён Майкла Джордана в 1992 году.",
];

let currentFact = -1;
const factText = document.querySelector(".fact__text");
const factNumber = document.querySelector(".fact__number");
const nextFactBtn = document.querySelector("#next-fact");

nextFactBtn.addEventListener("click", () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * facts.length);
  } while (newIndex === currentFact && facts.length > 1);

  currentFact = newIndex;
  const formattedNum = String(currentFact + 1).padStart(2, "0");
  const formattedTotal = String(facts.length).padStart(2, "0");

  factText.textContent = facts[currentFact];
  factNumber.textContent = `${formattedNum} / ${formattedTotal}`;
});

// ═══════════════ GALLERY SCROLL ═══════════════
const gallery = document.querySelector(".gallery");
const scrollBtn = document.querySelector("#gallery-scroll");

scrollBtn.addEventListener("click", () => {
  const scrollAmount = 360;
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;

  if (gallery.scrollLeft >= maxScroll - 10) {
    gallery.scrollTo({ left: 0, behavior: "smooth" });
    scrollBtn.textContent = "Листать далее →";
  } else {
    gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});

gallery.addEventListener("scroll", () => {
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;
  if (gallery.scrollLeft >= maxScroll - 10) {
    scrollBtn.textContent = "← В начало";
  } else {
    scrollBtn.textContent = "Листать далее →";
  }
});