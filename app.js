// SportActive - Premium Pilates Web & Reservation Engine

// ==========================================
// 1. DEFAULT DATABASE STATE (Czech / čeština)
// ==========================================
const DEFAULT_DATABASE = {
  version: 6,
  texts: {
    aboutTitle: "Kdo jsem a co spolu zažijeme",
    aboutSubtitle: "Jmenuji se Klára Veselá a provedu vás cvičením, které vaše tělo ocení a znovuzrodí.",
    aboutBio: `<p>Vítám vás ve <strong>SportActive</strong>! Jmenuji se Klára Veselá a moje lekce spojují preciznost Pilates se zdravým, funkčním pohybem. Zaměřuji se na <strong>odstranění bolestí zad</strong>, zpevnění středu těla (CORE) a celkovou regeneraci.</p>
    <p>Moje filozofie je jednoduchá: <strong>Cvičení vás musí bavit, dodávat energii a přinášet trvalé benefity do běžného života.</strong> Cvičíme bezpečně, plynule a s ohledem na vaše individuální potřeby.</p>`,
    instructorName: "Klára Veselá",
    aboutGear: "Doporučuji pohodlné sportovní oblečení, cvičíme v ponožkách (ideálně protiskluzových) nebo naboso. Podložky, válce, pilates kruhy, elastické gumy a další pomůcky jsou pro vás v sále vždy zdarma k zapůjčení."
  },
  venues: [
    {
      id: "v1",
      name: "Studio Balance",
      address: "Pražská 12, Praha 4 - Michle",
      parking: "Parkování je možné zdarma přímo ve dvoře studia (vjezd z ulice U Krčské vodárny).",
      entrance: "Studio se nachází ve 2. patře, vstup je označen logem SportActive u hlavního zvonku.",
      lat: 50.0528,
      lng: 14.4532
    },
    {
      id: "v2",
      name: "Fitness Energy",
      address: "Náměstí Republiky 5, Praha 1 - Staré Město",
      parking: "Parkování v OD Kotva nebo v nákupním centru Palladium (zpoplatněné).",
      entrance: "Vstup z pasáže Energy, sál se nachází v 1. suterénu hned vedle recepce fitness.",
      lat: 50.0894,
      lng: 14.4281
    }
  ],
  lessons: [
    {
      id: "l1",
      title: "Pilates pro začátečníky",
      type: "Pilates",
      dayTime: "Pondělí 18:00 - 19:00",
      duration: 60,
      price: 220,
      capacity: 12,
      venueId: "v1"
    },
    {
      id: "l2",
      title: "Zdravá záda & Hluboký stabilizační systém",
      type: "Zdravá záda",
      dayTime: "Úterý 17:30 - 18:30",
      duration: 60,
      price: 240,
      capacity: 10,
      venueId: "v2"
    },
    {
      id: "l3",
      title: "Pánevní dno & Pevný střed těla",
      type: "Pánevní dno & Střed",
      dayTime: "Středa 19:00 - 20:00",
      duration: 60,
      price: 230,
      capacity: 12,
      venueId: "v1"
    },
    {
      id: "l4",
      title: "Ranní restart - Pilates & Mobilita",
      type: "Mobilita & Strečink",
      dayTime: "Čtvrtek 08:30 - 09:30",
      duration: 60,
      price: 200,
      capacity: 8,
      venueId: "v1"
    },
    {
      id: "l5",
      title: "Kompenzační cvičení & Zdravá záda",
      type: "Zdravá záda",
      dayTime: "Pátek 16:30 - 17:30",
      duration: 60,
      price: 240,
      capacity: 12,
      venueId: "v2"
    }
  ],
  bookings: [
    { id: "b1", name: "Jana Nováková", email: "jana.novakova@seznam.cz", phone: "+420 721 111 222", lessonId: "l1", type: "confirmed" },
    { id: "b2", name: "Martin Kučera", email: "martin.kucera@gmail.com", phone: "+420 603 555 666", lessonId: "l1", type: "confirmed" },
    { id: "b3", name: "Lucie Černá", email: "lucie.cerna@post.cz", phone: "+420 777 999 888", lessonId: "l2", type: "confirmed" }
  ],
  articles: [
    {
      id: "a1",
      tag: "Zdravá záda",
      title: "3 rychlé cviky proti bolestem krční páteře do kanceláře",
      excerpt: "Trávíte hodiny sezením u počítače a cítíte ztuhlá ramena a krk? Vyzkoušejte tyto 3 jednoduché cviky, které zvládnete přímo na kancelářské židli za 5 minut.",
      date: "24. Května 2026",
      content: `<h3>Proč krční páteř u počítače tak trpí?</h3>
      <p>Při dlouhodobém sledování obrazovky máme tendenci předsouvat hlavu dopředu (tzv. syndrom textového krku). Svaly na zadní straně krku musí držet váhu hlavy (která váží až 5 kg), což vede k jejich přetížení, ztuhlosti a bolestem hlavy.</p>
      
      <h3>Cvik 1: Zásuvka (Retrakce hlavy)</h3>
      <p>Posaďte se rovně. Dívejte se přímo před sebe. Položte si prst na bradu a zatlačte hlavu dozadu, jako byste chtěli udělat dvojitou bradu. Nevzhlížejte ani nesklánějte hlavu, pohyb je ryze horizontální. Vydržte 3 sekundy a uvolněte. Opakujte 10x.</p>
      
      <h3>Cvik 2: Protažení boční strany krku</h3>
      <p>Posaďte se na židli a pravou rukou se chyťte podsedáku, aby se vám nezvedalo rameno. Levou ruku položte přes hlavu k pravému uchu a jemně odkloňte hlavu doleva. Vydržte 20-30 sekund, klidně dýchejte do pravé strany krku. Poté vyměňte strany.</p>
      
      <h3>Cvik 3: Uvolnění ramen a lopatek</h3>
      <p>Dejte si ruce v týl, otevřete lokty do široka. S nádechem vytáhněte hrudní kost nahoru, mírně se zakloňte v hrudní páteři a otevřete hrudník. S výdechem zabalte lokty k sobě a jemně zakulaťte hrudní páteř dolů. Opakujte 8x pomalu s dechem.</p>
      <p><em>Doporučuji tyto cviky dělat každé 2 hodiny práce na počítači. Uvidíte úlevu během několika dní!</em></p>`
    },
    {
      id: "a2",
      tag: "Pánevní dno",
      title: "Jak správně zapojit pánevní dno? Není to jen o stlačování",
      excerpt: "Mnoho lidí si myslí, že posilování pánevního dna znamená křečovité stahování svalů. Opak je pravdou. Klíčem je jemná koordinace a schopnost uvolnění.",
      date: "12. Května 2026",
      content: `<h3>Mýty o pánevním dnu</h3>
      <p>Svaly pánevního dna tvoří elastickou trampolínu na dně naší pánve. Neslouží pouze k zadržování moči, ale jsou základním pilířem našeho středu těla (CORE), podporují vnitřní orgány a ovlivňují dýchání a držení páteře. Častou chybou je snaha svaly silově svírat při každé příležitosti – to vede k jejich přetížení a bolestem.</p>
      
      <h3>Cesta k vědomé aktivaci</h3>
      <p>Správné zapojení je velmi jemné. Měli byste cítit lehký pocit nasátí směrem nahoru a dovnitř, jako byste chtěli zvednout borůvku nebo vytáhnout výtah ze suterénu do prvního patra.</p>
      <ul>
        <li><strong>Poloha:</strong> Lehněte si na záda, pokrčte kolena, chodidla na zemi. Pánev je v neutrální poloze (mezi křížovou kostí a matrací je drobná mezera na stéblo trávy).</li>
        <li><strong>Nádech:</strong> Nadechujte se do spodních žeber a do pánve. Svaly pánevního dna se přirozeně uvolňují a rozšiřují.</li>
        <li><strong>Výdech:</strong> S jemným výdechem ústy představte si zip od stydké kosti k pupíku. Jemně aktivujte (nasajte) svaly pánevního dna nahoru dovnitř pánve a nechte břišní stěnu klesnout.</li>
      </ul>
      <p>Při aktivaci nesmíte stahovat hýždě ani zatínat stehna! Cvičení by mělo být zvenčí zcela neviditelné. Na našich lekcích se tomuto věnujeme u každého cviku.</p>`
    },
    {
      id: "a3",
      tag: "Mobilita",
      title: "Uvolněné kyčle: Klíč ke zdravým bedrům a lehkému kroku",
      excerpt: "Trápí vás bolesti v bedrech nebo pocit zatuhlosti při chůzi? Důvodem bývá zkrácení kyčelních kloubů. Podívejme se, jak vrátit kyčlím ohebnost.",
      date: "02. Května 2026",
      content: `<h3>Spojení kyčlí a bederní páteře</h3>
      <p>Kyčelní kloub je stavěn pro obrovský rozsah pohybů. Pokud ale většinu dne prosedíme, svaly v okolí kyčlí (zejména flexory kyčlí) se zkrátí a ztuhnou. Naše tělo pak potřebný pohyb kompenzuje v bederní páteři, která na to není stavěná. Výsledkem jsou chronické bolesti beder a přetížení plotének.</p>
      
      <h3>Jak kyčle efektivně uvolňovat?</h3>
      <p>Uvolnění kyčlí nevyžaduje agresivní strečink, ale spíše jemný dynamický pohyb a rotace. Svaly potřebují dostat signál, že je bezpečné kloub uvolnit.</p>
      
      <h3>3 kroky k ohebnosti:</h3>
      <p>1. <strong>Protáhněte flexory kyčle:</strong> Přejděte do kleku na jednom koleni (výpad). Zpevněte břicho, podsaďte mírně pánev a jemně posuňte váhu dopředu, dokud neucítíte tah na přední straně stehna a kyčle zadní nohy. Vydržte 30 sekund s klidným dechem.</p>
      <p>2. <strong>Mobilizujte kyčel kroužením:</strong> V leže na zádech přitáhněte jedno koleno k hrudníku. Uchopte ho rukou a pomalu opisujte kolenem kruhy na obě strany. Cílem je uvolnit kloubní pouzdro bez pohybu pánve.</p>
      <p>3. <strong>Rotace kyčlí:</strong> Posaďte se na zem, pokrčte kolena a rozkročte chodidla na šířku podložky. Pomalu pokládejte obě kolena na jednu stranu k zemi (tzv. pozice 90/90) a poté na druhou stranu. Provádějte plynule 12x.</p>
      <p><em>Pravidelným cvičením těchto pohybů ulevíte svým bedrům a vaše chůze i běh získají nevídanou lehkost. Přijďte si je vyzkoušet na lekci Mobilita & Strečink!</em></p>`
    }
  ],
  videos: [
    { id: "vd1", title: "Ranní pilates protažení - 10 minut", desc: "Krátká, energická sestava na podložce pro nastartování těla, protažení páteře a aktivaci středu.", url: "https://www.youtube.com/embed/co3N2B88N_Y", thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" },
    { id: "vd2", title: "Zdravé dýchání pro zdravá záda", desc: "Instruktážní video o bráničním dýchání a správné aktivaci hlubokého stabilizačního systému.", url: "https://www.youtube.com/embed/ENz1O8ZNuKw", thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
    { id: "vd3", title: "Uvolnění kyčlí a bederní páteře", desc: "Krátké kompenzační cviky na uvolnění kyčelních kloubů po dlouhém sezení u pracovního stolu.", url: "https://www.youtube.com/embed/g_tea8ZNk5A", thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" }
  ]
};

// ==========================================
// 2. STATE MANAGER & INITIALIZATION
// ==========================================
class DatabaseState {
  constructor() {
    this.db = this.load();
  }

  load() {
    const raw = localStorage.getItem('sportactive_db');
    if (!raw) {
      this.save(DEFAULT_DATABASE);
      return DEFAULT_DATABASE;
    }
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.version || parsed.version < 6) {
        console.log("Database version mismatch, resetting database to version 6 defaults...");
        this.save(DEFAULT_DATABASE);
        return DEFAULT_DATABASE;
      }
      return parsed;
    } catch (e) {
      console.error("Database parse error, restoring default data", e);
      this.save(DEFAULT_DATABASE);
      return DEFAULT_DATABASE;
    }
  }

  save(data) {
    localStorage.setItem('sportactive_db', JSON.stringify(data || this.db));
  }

  update() {
    this.save(this.db);
  }
}

const state = new DatabaseState();

// ==========================================
// 3. CORE FRONTEND RENDERING
// ==========================================

// Preloader & Load Screen Transitions
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.visibility = 'hidden';
    }, 800);
  }
  
  // Trigger animations for elements in view on initial load
  revealElements();
});

// Scroll Events (Header background / Scroll reveals)
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  revealElements();
  updateNavSlider();
});

// Reveal elements on scroll
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

// Resize Events
window.addEventListener('resize', () => {
  updateNavSlider();
});

// Premium Liquid 3-Button Navigation Slider Engine
const SECTIONS = [
  { id: 'domu', name: 'Domů' },
  { id: 'o-mne', name: 'O mně' },
  { id: 'rozvrh', name: 'Rozvrh' },
  { id: 'mista', name: 'Místa' },
  { id: 'videa', name: 'Videa' },
  { id: 'blog', name: 'Blog' }
];

function getSectionPositions() {
  return SECTIONS.map(sec => {
    const el = document.getElementById(sec.id);
    if (!el) return { id: sec.id, top: 0, height: 0 };
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      id: sec.id,
      top: rect.top + scrollTop,
      height: rect.height
    };
  });
}

function updateNavSlider() {
  const track = document.getElementById('nav-slide-track');
  if (!track) return;

  const scrollY = window.scrollY;
  const positions = getSectionPositions();
  
  // Find current active section index
  let currentIdx = 0;
  const triggerOffset = window.innerHeight * 0.3;
  
  for (let i = 0; i < positions.length; i++) {
    const triggerPoint = (i === 0) ? 0 : positions[i].top - triggerOffset;
    if (scrollY >= triggerPoint) {
      currentIdx = i;
    }
  }

  // Width of one button (120px) + Gap (16px) = 136px
  const stepWidth = 136; 
  
  // Compute discrete horizontal translation (snapping to active index)
  const currentTranslation = - currentIdx * stepWidth;
  
  // Apply visual translate
  track.style.transform = `translateX(${currentTranslation}px)`;
  
  // Update active state style on the item instantly
  const items = track.querySelectorAll('.nav-slide-item');
  items.forEach((item, idx) => {
    item.classList.remove('active');
    if (idx === currentIdx) {
      item.classList.add('active');
    }
  });
}

// Render dynamic elements
function initUI() {
  initTheme();
  renderTexts();
  renderSchedule('all');
  renderLocations();
  renderVideos();
  renderBlog();
  initMap();
}

// Load customized static texts from database
function renderTexts() {
  const t = state.db.texts;
  
  const aboutTitle = document.getElementById('text-about-title');
  const aboutSubtitle = document.getElementById('text-about-subtitle');
  const aboutBio = document.getElementById('text-about-bio');
  const instructorName = document.getElementById('text-instructor-name');
  const aboutGear = document.getElementById('text-about-gear');
  
  // Dynamic markdown bold parser (**text** -> <strong>text</strong>)
  const parseBold = (str) => str ? str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : '';
  
  if (aboutTitle) aboutTitle.innerHTML = parseBold(t.aboutTitle);
  if (aboutSubtitle) aboutSubtitle.innerHTML = parseBold(t.aboutSubtitle);
  if (aboutBio) {
    aboutBio.innerHTML = parseBold(t.aboutBio);
  }
  if (aboutGear) aboutGear.innerHTML = parseBold(t.aboutGear);
}

// Render lessons list in schedule grid
function renderSchedule(filterType = 'all') {
  const grid = document.getElementById('schedule-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filtered = filterType === 'all' 
    ? state.db.lessons 
    : state.db.lessons.filter(l => l.type === filterType);
    
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="glass-panel" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
      <i class="fa-solid fa-calendar-xmark" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 1rem;"></i>
      <h3 style="font-family: var(--font-title); margin-bottom: 0.5rem;">Žádné vypsané lekce v této kategorii</h3>
      <p style="color: var(--text-sub);">Aktuálně nejsou vypsány žádné pravidelné termíny. Zkuste jinou kategorii nebo nás kontaktujte.</p>
    </div>`;
    return;
  }
  
  filtered.forEach(lesson => {
    const venue = state.db.venues.find(v => v.id === lesson.venueId) || { name: "Neznámé místo" };
    
    // Calculate bookings for this lesson
    const classBookings = state.db.bookings.filter(b => b.lessonId === lesson.id && b.type === 'confirmed');
    const spotsLeft = Math.max(0, lesson.capacity - classBookings.length);
    
    let capacityClass = "many";
    let capacityText = `Volná místa: ${spotsLeft} / ${lesson.capacity}`;
    let btnText = "Rezervovat lekci";
    let btnClass = "available";
    
    if (spotsLeft === 0) {
      capacityClass = "full";
      capacityText = "Kapacita naplněna (Čekací listina)";
      btnText = "Zapsat se jako náhradník";
      btnClass = "waiting-list";
    } else if (spotsLeft <= 3) {
      capacityClass = "few";
      capacityText = `Poslední místa: ${spotsLeft} / ${lesson.capacity}`;
    }
    
    const card = document.createElement('div');
    card.className = "class-card glass-panel reveal active";
    card.innerHTML = `
      <div>
        <div class="class-header">
          <span class="class-badge">${lesson.type}</span>
          <span class="class-price">${lesson.price} Kč</span>
        </div>
        <h3 class="class-title">${lesson.title}</h3>
        <ul class="class-details">
          <li><i class="fa-solid fa-clock"></i> <span>${lesson.dayTime} (${lesson.duration} min)</span></li>
          <li><i class="fa-solid fa-location-dot"></i> <span>${venue.name} - ${venue.address.split(',')[0]}</span></li>
        </ul>
      </div>
      <div class="class-capacity">
        <div class="spots-left ${capacityClass}">
          <span><i class="fa-solid fa-users"></i> ${capacityText}</span>
        </div>
        <button class="btn-book ${btnClass}" onclick="openBookingModal('${lesson.id}')">${btnText}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Handle Category Filter Clicks
const filterBtns = document.querySelectorAll('#schedule-filters .filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSchedule(btn.dataset.filter);
  });
});

// Render Locations addresses list
function renderLocations() {
  const container = document.getElementById('location-list');
  if (!container) return;
  container.innerHTML = '';
  
  state.db.venues.forEach((v, index) => {
    const card = document.createElement('div');
    card.className = "location-card glass-panel reveal active";
    card.innerHTML = `
      <h3 class="location-title"><i class="fa-solid fa-location-dot"></i> ${v.name}</h3>
      <ul class="location-details">
        <li><i class="fa-solid fa-map-pin"></i> <span><strong>Adresa:</strong> ${v.address}</span></li>
        <li><i class="fa-solid fa-square-parking"></i> <span><strong>Parkování:</strong> ${v.parking}</span></li>
        <li><i class="fa-solid fa-door-open"></i> <span><strong>Vstup a sál:</strong> ${v.entrance}</span></li>
      </ul>
      <button class="btn-secondary" style="margin-top: 1.5rem; padding: 0.5rem 1rem; font-size: 0.9rem; width: 100%;" onclick="focusMap(${v.lat}, ${v.lng}, '${v.name}')">
        <i class="fa-solid fa-location-arrow"></i> Ukázat na mapě
      </button>
    `;
    container.appendChild(card);
  });
}

// Render dynamic Video Grid
function renderVideos() {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  state.db.videos.forEach(v => {
    const card = document.createElement('div');
    card.className = "video-card glass-panel reveal active";
    card.innerHTML = `
      <div class="video-thumbnail-wrapper" onclick="openVideoModal('${v.title}', '${v.url}')">
        <img class="video-thumbnail" src="${v.thumb}" alt="${v.title}">
        <div class="video-play-btn"><i class="fa-solid fa-play"></i></div>
      </div>
      <div class="video-meta">
        <div>
          <h3 class="video-title">${v.title}</h3>
          <p class="video-desc">${v.desc}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render dynamic Blog posts grid
function renderBlog() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  state.db.articles.forEach(art => {
    const card = document.createElement('div');
    card.className = "blog-card glass-panel reveal active";
    card.innerHTML = `
      <div>
        <span class="blog-tag">${art.tag}</span>
        <h3 class="blog-title">${art.title}</h3>
        <p class="blog-excerpt">${art.excerpt}</p>
      </div>
      <div class="blog-footer">
        <span class="blog-date">${art.date}</span>
        <button class="btn-read-more" onclick="openBlogReader('${art.id}')">
          Přečíst článek <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// 4. MAPS SYSTEM (Prague Centered Dark Leaflet)
// ==========================================
let mainMap;
let mapMarkers = [];

function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;
  
  // Set coordinates to center between our default Prague venues
  mainMap = L.map('map', {
    scrollWheelZoom: false
  }).setView([50.071, 14.44], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mainMap);
  
  // Add markers
  state.db.venues.forEach(v => {
    const pulseIcon = L.divIcon({
      className: 'custom-pulse-marker',
      html: '<div class="map-pulse-marker"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
    
    const marker = L.marker([v.lat, v.lng], { icon: pulseIcon }).addTo(mainMap);
    marker.bindPopup(`<strong>${v.name}</strong><br>${v.address.split(',')[0]}<br><a href="#rozvrh" style="color: var(--color-primary); font-family: var(--font-title); font-size: 0.85rem; text-decoration: none; display: inline-block; margin-top: 0.3rem;">Zobrazit Lekce</a>`);
    
    mapMarkers.push({ id: v.id, marker: marker });
  });
}

function focusMap(lat, lng, name) {
  if (!mainMap) return;
  mainMap.setView([lat, lng], 15, { animate: true, duration: 1.5 });
  
  // Trigger popup for marker
  const markerObj = mapMarkers.find(m => m.marker.getLatLng().lat === lat && m.marker.getLatLng().lng === lng);
  if (markerObj) {
    setTimeout(() => {
      markerObj.marker.openPopup();
    }, 1200);
  }
  
  // Scroll map into view
  document.querySelector('.map-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// 5. MODAL SYSTEM OPERATIONAL ENGINE
// ==========================================

// Global modal triggers and helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Setup close listeners for all overlays
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal(overlay.id);
      
      // Clear video players if closing video modal
      if (overlay.id === 'video-modal') {
        const frameCont = document.getElementById('video-iframe-container');
        if (frameCont) frameCont.innerHTML = '';
      }
    }
  });
});

// ==========================================
// 6. BOOKING RESERVATION WORKFLOW
// ==========================================
function openBookingModal(lessonId) {
  const lesson = state.db.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  
  const venue = state.db.venues.find(v => v.id === lesson.venueId) || { name: "Neznámé místo" };
  const classBookings = state.db.bookings.filter(b => b.lessonId === lessonId && b.type === 'confirmed');
  const spotsLeft = Math.max(0, lesson.capacity - classBookings.length);
  
  document.getElementById('book-class-id').value = lessonId;
  document.getElementById('book-summary-title').innerText = lesson.title;
  document.getElementById('book-summary-time').innerText = lesson.dayTime;
  document.getElementById('book-summary-venue').innerText = venue.name;
  document.getElementById('book-summary-price').innerText = `${lesson.price} Kč`;
  
  const capacitySpan = document.getElementById('book-summary-capacity');
  const submitBtn = document.getElementById('btn-submit-booking');
  
  if (spotsLeft === 0) {
    capacitySpan.innerHTML = `<span style="color: var(--color-red); font-weight: bold;">Plno (Čekací listina)</span>`;
    submitBtn.innerText = "Zapsat se jako náhradník";
    submitBtn.style.background = 'linear-gradient(135deg, var(--color-accent) 0%, #d97706 100%)';
  } else {
    capacitySpan.innerHTML = `<span style="color: var(--color-mint); font-weight: bold;">Volno (Zbývá ${spotsLeft} míst)</span>`;
    submitBtn.innerText = "Potvrdit a odeslat rezervaci";
    submitBtn.style.background = 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)';
  }
  
  // Clear any existing feedbacks/inputs
  document.getElementById('booking-feedback').style.display = 'none';
  document.getElementById('booking-form').style.display = 'block';
  document.getElementById('booking-form').reset();
  
  openModal('booking-modal');
}

// Submitting bookings
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const lessonId = document.getElementById('book-class-id').value;
    const name = document.getElementById('book-name').value.trim();
    const email = document.getElementById('book-email').value.trim();
    const phone = document.getElementById('book-phone').value.trim();
    
    const lesson = state.db.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const classBookings = state.db.bookings.filter(b => b.lessonId === lessonId && b.type === 'confirmed');
    const spotsLeft = Math.max(0, lesson.capacity - classBookings.length);
    
    const bookingType = spotsLeft === 0 ? 'waiting_list' : 'confirmed';
    
    const newBooking = {
      id: "b_" + Date.now(),
      name,
      email,
      phone,
      lessonId,
      type: bookingType
    };
    
    state.db.bookings.push(newBooking);
    state.update();
    
    // Simulate SMTP Console Log email confirmation
    console.log(`[EMAIL SEND SIMULATOR] Sent to: ${email}`);
    console.log(`Předmět: Potvrzení rezervace - SportActive`);
    console.log(`Zpráva: Vážený kliente ${name}, vaše registrace na lekci "${lesson.title}" (${lesson.dayTime}) byla úspěšně přijata. Typ: ${bookingType === 'confirmed' ? 'POTVRZENO' : 'ČEKACÍ LISTINA (NÁHRADNÍK)'}. Těšíme se na vás!`);
    
    // Render dynamic updates immediately
    renderSchedule(document.querySelector('#schedule-filters .filter-btn.active').dataset.filter);
    
    // Display feedback screen
    const feedback = document.getElementById('booking-feedback');
    feedback.className = "feedback-msg success";
    if (bookingType === 'confirmed') {
      feedback.innerHTML = `<h4><i class="fa-solid fa-circle-check"></i> Rezervace úspěšně odeslána!</h4>
      <p style="margin-top: 0.5rem;">Vaše místo na lekci <strong>${lesson.title}</strong> je potvrzeno. Potvrzení bylo odesláno na e-mail: <strong>${email}</strong>.</p>`;
    } else {
      feedback.innerHTML = `<h4><i class="fa-solid fa-circle-exclamation" style="color: var(--color-accent);"></i> Zapsáno do čekací listiny!</h4>
      <p style="margin-top: 0.5rem;">Kapacita byla plná, byli jste úspěšně zapsáni jako <strong>náhradník</strong> na lekci <strong>${lesson.title}</strong>. V případě uvolnění místa vás budeme okamžitě kontaktovat e-mailem na: <strong>${email}</strong>.</p>`;
    }
    feedback.style.display = 'block';
    bookingForm.style.display = 'none';
  });
}

// Setup basic manual close triggers
const bookingClose = document.getElementById('booking-modal-close');
if (bookingClose) bookingClose.addEventListener('click', () => closeModal('booking-modal'));

// ==========================================
// 7. ARTICLE AND VIDEO MODALS READER
// ==========================================
function openBlogReader(articleId) {
  const art = state.db.articles.find(a => a.id === articleId);
  if (!art) return;
  
  document.getElementById('blog-reader-tag').innerText = art.tag;
  document.getElementById('blog-reader-title').innerText = art.title;
  document.getElementById('blog-reader-date').innerText = art.date;
  document.getElementById('blog-reader-content').innerHTML = art.content;
  
  openModal('blog-modal');
}

const blogClose = document.getElementById('blog-modal-close');
if (blogClose) blogClose.addEventListener('click', () => closeModal('blog-modal'));

function openVideoModal(title, embedUrl) {
  document.getElementById('video-modal-title').innerText = title;
  const frameContainer = document.getElementById('video-iframe-container');
  
  // Create video element or iframe
  frameContainer.innerHTML = `<iframe src="${embedUrl}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  
  openModal('video-modal');
}

const videoClose = document.getElementById('video-modal-close');
if (videoClose) {
  videoClose.addEventListener('click', () => {
    closeModal('video-modal');
    document.getElementById('video-iframe-container').innerHTML = '';
  });
}

// ==========================================
// 8. ADMINISTRATOR ACCESS CONTROL
// ==========================================

// Global trigger to unlock admin modal
const adminGear = document.getElementById('admin-gear');
const footerAdminTrigger = document.getElementById('footer-admin-trigger');
const adminLoginModal = document.getElementById('admin-login-modal');

function triggerAdminLogin() {
  // Check if already authenticated session-wide
  if (sessionStorage.getItem('sportactive_admin_auth') === 'true') {
    openAdminDashboard();
  } else {
    document.getElementById('admin-login-feedback').style.display = 'none';
    document.getElementById('admin-login-form').reset();
    openModal('admin-login-modal');
  }
}

if (adminGear) adminGear.addEventListener('click', triggerAdminLogin);
if (footerAdminTrigger) {
  footerAdminTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    triggerAdminLogin();
  });
}

const loginClose = document.getElementById('admin-login-close');
if (loginClose) loginClose.addEventListener('click', () => closeModal('admin-login-modal'));

// Password Validation
const loginForm = document.getElementById('admin-login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('admin-pass').value;
    const feedback = document.getElementById('admin-login-feedback');
    
    if (pass === 'sportactive2026') {
      sessionStorage.setItem('sportactive_admin_auth', 'true');
      closeModal('admin-login-modal');
      openAdminDashboard();
    } else {
      feedback.className = "feedback-msg error";
      feedback.innerText = "Nesprávné administrátorské heslo! Zkuste to znovu.";
      feedback.style.display = 'block';
    }
  });
}

// Logout Operator
const logoutBtn = document.getElementById('admin-logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('sportactive_admin_auth');
    closeModal('admin-dashboard-modal');
  });
}

const dashboardClose = document.getElementById('admin-dashboard-close');
if (dashboardClose) {
  dashboardClose.addEventListener('click', () => {
    closeModal('admin-dashboard-modal');
  });
}

// Sidebar Navigation inside dashboard
const adminTabBtns = document.querySelectorAll('.admin-sidebar .admin-tab-btn');
const adminSections = document.querySelectorAll('.admin-content-pane .admin-section');

adminTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    adminTabBtns.forEach(b => b.classList.remove('active'));
    adminSections.forEach(s => s.classList.remove('active'));
    
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});

// ==========================================
// 9. ADMIN OPERATIONS BACKEND CHANNELS
// ==========================================
function openAdminDashboard() {
  // Load tables/forms data
  loadAdminLessonsTable();
  loadAdminBookingsTable();
  loadAdminTextsForm();
  loadAdminArticlesTab();
  loadAdminVideosTab();
  
  openModal('admin-dashboard-modal');
}

// 9A. Lessons Management Channels
function loadAdminLessonsTable() {
  const tbody = document.getElementById('admin-lessons-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  state.db.lessons.forEach(l => {
    const venue = state.db.venues.find(v => v.id === l.venueId) || { name: "Neznámé" };
    const classBookings = state.db.bookings.filter(b => b.lessonId === l.id && b.type === 'confirmed');
    const waitingList = state.db.bookings.filter(b => b.lessonId === l.id && b.type === 'waiting_list');
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <strong>${l.title}</strong><br>
        <span class="action-badge success" style="font-size: 0.75rem; margin-top: 0.2rem;">${l.type}</span>
      </td>
      <td>${l.dayTime}</td>
      <td>${venue.name}</td>
      <td>
        Kapacita: ${classBookings.length}/${l.capacity}<br>
        Náhradníci: ${waitingList.length}<br>
        <strong>Cena: ${l.price} Kč</strong>
      </td>
      <td>
        <div style="display: flex; gap: 0.25rem;">
          <button class="btn-icon" onclick="editLesson('${l.id}')" title="Upravit"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-icon delete" onclick="deleteLesson('${l.id}')" title="Smazat"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  // Populate the select options in lesson editor
  const select = document.getElementById('lesson-venue');
  if (select) {
    select.innerHTML = '';
    state.db.venues.forEach(v => {
      select.innerHTML += `<option value="${v.id}">${v.name} (${v.address.split(',')[0]})</option>`;
    });
  }
}

// Form visibility and creation triggers
const btnAddClass = document.getElementById('btn-add-class');
const formContainer = document.getElementById('admin-lesson-form-container');
const btnLessonCancel = document.getElementById('btn-lesson-cancel');

if (btnAddClass && formContainer) {
  btnAddClass.addEventListener('click', () => {
    document.getElementById('lesson-form-title').innerText = "Přidat novou lekci";
    document.getElementById('lesson-editor-form').reset();
    document.getElementById('edit-lesson-id').value = '';
    formContainer.style.display = 'block';
    btnAddClass.style.display = 'none';
  });
}

if (btnLessonCancel && formContainer && btnAddClass) {
  btnLessonCancel.addEventListener('click', () => {
    formContainer.style.display = 'none';
    btnAddClass.style.display = 'block';
  });
}

// Save or Update Lesson Form Submission
const lessonEditorForm = document.getElementById('lesson-editor-form');
if (lessonEditorForm) {
  lessonEditorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('edit-lesson-id').value;
    const title = document.getElementById('lesson-title').value.trim();
    const type = document.getElementById('lesson-type').value;
    const venueId = document.getElementById('lesson-venue').value;
    const dayTime = document.getElementById('lesson-day').value.trim();
    const duration = parseInt(document.getElementById('lesson-duration').value);
    const capacity = parseInt(document.getElementById('lesson-capacity').value);
    const price = parseInt(document.getElementById('lesson-price').value);
    
    if (id) {
      // Modify existing
      const idx = state.db.lessons.findIndex(l => l.id === id);
      if (idx !== -1) {
        state.db.lessons[idx] = { ...state.db.lessons[idx], title, type, venueId, dayTime, duration, capacity, price };
      }
    } else {
      // Add new
      const newLesson = {
        id: "l_" + Date.now(),
        title,
        type,
        venueId,
        dayTime,
        duration,
        capacity,
        price
      };
      state.db.lessons.push(newLesson);
    }
    
    state.update();
    loadAdminLessonsTable();
    renderSchedule(document.querySelector('#schedule-filters .filter-btn.active').dataset.filter);
    
    // Hide form
    formContainer.style.display = 'none';
    btnAddClass.style.display = 'block';
  });
}

// Edit lesson action triggers
window.editLesson = function(lessonId) {
  const l = state.db.lessons.find(x => x.id === lessonId);
  if (!l) return;
  
  document.getElementById('edit-lesson-id').value = l.id;
  document.getElementById('lesson-title').value = l.title;
  document.getElementById('lesson-type').value = l.type;
  document.getElementById('lesson-venue').value = l.venueId;
  document.getElementById('lesson-day').value = l.dayTime;
  document.getElementById('lesson-duration').value = l.duration;
  document.getElementById('lesson-capacity').value = l.capacity;
  document.getElementById('lesson-price').value = l.price;
  
  document.getElementById('lesson-form-title').innerText = "Upravit vypsanou lekci";
  
  formContainer.style.display = 'block';
  btnAddClass.style.display = 'none';
};

// Delete lesson trigger
window.deleteLesson = function(lessonId) {
  if (confirm("Opravdu chcete tuto lekci smazat? Budou odstraněny i všechny rezervace této lekce.")) {
    state.db.lessons = state.db.lessons.filter(l => l.id !== lessonId);
    state.db.bookings = state.db.bookings.filter(b => b.lessonId !== lessonId);
    state.update();
    loadAdminLessonsTable();
    renderSchedule(document.querySelector('#schedule-filters .filter-btn.active').dataset.filter);
  }
};

// 9B. Bookings and Waiting List Promotion Engine
function loadAdminBookingsTable() {
  const tbody = document.getElementById('admin-bookings-tbody');
  const filter = document.getElementById('admin-booking-filter');
  if (!tbody || !filter) return;
  
  tbody.innerHTML = '';
  
  // Populate filter selects
  const originalVal = filter.value;
  filter.innerHTML = '<option value="all">Všechny lekce</option>';
  state.db.lessons.forEach(l => {
    filter.innerHTML += `<option value="${l.id}">${l.title} (${l.dayTime.split(' ')[0]})</option>`;
  });
  filter.value = originalVal;
  
  const selectedLessonId = filter.value;
  const filteredBookings = selectedLessonId === 'all'
    ? state.db.bookings
    : state.db.bookings.filter(b => b.lessonId === selectedLessonId);
    
  if (filteredBookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 2rem;">Žádné rezervace k zobrazení.</td></tr>`;
    return;
  }
  
  filteredBookings.forEach(b => {
    const lesson = state.db.lessons.find(l => l.id === b.lessonId) || { title: "Smazaná lekce", dayTime: "-", venueId: "" };
    const venue = state.db.venues.find(v => v.id === lesson.venueId) || { name: "-" };
    
    let typeText = "Potvrzeno";
    let typeClass = "success";
    if (b.type === 'waiting_list') {
      typeText = "Náhradník";
      typeClass = "warning";
    }
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${b.name}</strong></td>
      <td>
        <i class="fa-solid fa-envelope" style="font-size:0.85rem;"></i> ${b.email}<br>
        <i class="fa-solid fa-phone" style="font-size:0.85rem;"></i> ${b.phone}
      </td>
      <td>
        ${lesson.title}<br>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${lesson.dayTime} | ${venue.name}</span>
      </td>
      <td><span class="action-badge ${typeClass}">${typeText}</span></td>
      <td>
        <button class="btn-icon delete" onclick="deleteBooking('${b.id}')" title="Zrušit rezervaci"><i class="fa-solid fa-user-minus"></i></button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Register Filter Change event in Bookings Tab
const bookingFilterSelect = document.getElementById('admin-booking-filter');
if (bookingFilterSelect) {
  bookingFilterSelect.addEventListener('change', loadAdminBookingsTable);
}

// Delete Booking + Promote Waiting List Client
window.deleteBooking = function(bookingId) {
  const booking = state.db.bookings.find(b => b.id === bookingId);
  if (!booking) return;
  
  if (confirm(`Opravdu chcete zrušit rezervaci pro klienta ${booking.name}?`)) {
    const lessonId = booking.lessonId;
    const wasConfirmed = booking.type === 'confirmed';
    
    // Remove booking
    state.db.bookings = state.db.bookings.filter(b => b.id !== bookingId);
    
    // SMART ENGINE: If a confirmed booking is deleted, promote the first waiting list person to confirmed!
    if (wasConfirmed) {
      const waitingList = state.db.bookings.filter(b => b.lessonId === lessonId && b.type === 'waiting_list');
      if (waitingList.length > 0) {
        const nextInLine = waitingList[0];
        nextInLine.type = 'confirmed';
        
        // Console Log Simulated SMTP for notification
        const lesson = state.db.lessons.find(l => l.id === lessonId) || { title: "Lekce" };
        console.log(`[EMAIL SEND SIMULATOR] Sent to: ${nextInLine.email}`);
        console.log(`Předmět: Postup z čekací listiny - SportActive`);
        console.log(`Zpráva: Vážený kliente ${nextInLine.name}, uvolnilo se místo na lekci "${lesson.title}". Vaše rezervace byla povýšena na POTVRZENO! Těšíme se na vás.`);
      }
    }
    
    state.update();
    loadAdminBookingsTable();
    renderSchedule(document.querySelector('#schedule-filters .filter-btn.active').dataset.filter);
  }
};

// 9C. Text Editor Content Management
function loadAdminTextsForm() {
  const t = state.db.texts;
  document.getElementById('inp-about-title').value = t.aboutTitle;
  document.getElementById('inp-about-subtitle').value = t.aboutSubtitle;
  document.getElementById('inp-about-bio').value = t.aboutBio;
  document.getElementById('inp-instructor-name').value = t.instructorName;
  document.getElementById('inp-about-gear').value = t.aboutGear;
}

const adminTextForm = document.getElementById('admin-text-form');
if (adminTextForm) {
  adminTextForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    state.db.texts.aboutTitle = document.getElementById('inp-about-title').value.trim();
    state.db.texts.aboutSubtitle = document.getElementById('inp-about-subtitle').value.trim();
    state.db.texts.aboutBio = document.getElementById('inp-about-bio').value.trim();
    state.db.texts.instructorName = document.getElementById('inp-instructor-name').value.trim();
    state.db.texts.aboutGear = document.getElementById('inp-about-gear').value.trim();
    
    state.update();
    renderTexts();
    alert("Texty na webu byly úspěšně aktualizovány!");
  });
}

// 9D. Manage Blog Articles Tab
function loadAdminArticlesTab() {
  const container = document.getElementById('admin-articles-list');
  if (!container) return;
  container.innerHTML = '';
  
  state.db.articles.forEach(art => {
    const card = document.createElement('div');
    card.className = "admin-card-item";
    card.innerHTML = `
      <span class="action-badge success" style="font-size: 0.7rem; margin-bottom: 0.5rem;">${art.tag}</span>
      <h5 style="font-family: var(--font-title); font-size: 1.1rem; margin-bottom: 0.5rem; padding-right: 4rem;">${art.title}</h5>
      <p style="font-size: 0.85rem; color: var(--text-sub); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${art.excerpt}</p>
      
      <div class="admin-card-actions">
        <button class="btn-icon" onclick="editArticle('${art.id}')" title="Upravit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon delete" onclick="deleteArticle('${art.id}')" title="Smazat"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(card);
  });
}

const btnAddArticle = document.getElementById('btn-add-article');
const articleFormCont = document.getElementById('admin-article-form-container');
const btnArticleCancel = document.getElementById('btn-article-cancel');

if (btnAddArticle && articleFormCont) {
  btnAddArticle.addEventListener('click', () => {
    document.getElementById('article-form-title').innerText = "Přidat nový článek";
    document.getElementById('article-editor-form').reset();
    document.getElementById('edit-article-id').value = '';
    articleFormCont.style.display = 'block';
    btnAddArticle.style.display = 'none';
  });
}

if (btnArticleCancel && articleFormCont && btnAddArticle) {
  btnArticleCancel.addEventListener('click', () => {
    articleFormCont.style.display = 'none';
    btnAddArticle.style.display = 'block';
  });
}

const articleEditorForm = document.getElementById('article-editor-form');
if (articleEditorForm) {
  articleEditorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('edit-article-id').value;
    const title = document.getElementById('article-title').value.trim();
    const tag = document.getElementById('article-tag').value.trim();
    const excerpt = document.getElementById('article-excerpt').value.trim();
    const content = document.getElementById('article-content').value.trim();
    
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const CzechDate = new Date().toLocaleDateString('cs-CZ', options);
    
    if (id) {
      const idx = state.db.articles.findIndex(a => a.id === id);
      if (idx !== -1) {
        state.db.articles[idx] = { ...state.db.articles[idx], title, tag, excerpt, content };
      }
    } else {
      const newArt = {
        id: "a_" + Date.now(),
        title,
        tag,
        excerpt,
        content,
        date: CzechDate
      };
      state.db.articles.push(newArt);
    }
    
    state.update();
    loadAdminArticlesTab();
    renderBlog();
    
    articleFormCont.style.display = 'none';
    btnAddArticle.style.display = 'block';
  });
}

window.editArticle = function(id) {
  const art = state.db.articles.find(a => a.id === id);
  if (!art) return;
  
  document.getElementById('edit-article-id').value = art.id;
  document.getElementById('article-title').value = art.title;
  document.getElementById('article-tag').value = art.tag;
  document.getElementById('article-excerpt').value = art.excerpt;
  document.getElementById('article-content').value = art.content;
  
  document.getElementById('article-form-title').innerText = "Upravit článek";
  articleFormCont.style.display = 'block';
  btnAddArticle.style.display = 'none';
};

window.deleteArticle = function(id) {
  if (confirm("Opravdu chcete tento článek smazat?")) {
    state.db.articles = state.db.articles.filter(a => a.id !== id);
    state.update();
    loadAdminArticlesTab();
    renderBlog();
  }
};

// 9E. Manage Videos Tab
function loadAdminVideosTab() {
  const container = document.getElementById('admin-videos-list');
  if (!container) return;
  container.innerHTML = '';
  
  state.db.videos.forEach(v => {
    const card = document.createElement('div');
    card.className = "admin-card-item";
    card.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <img src="${v.thumb}" style="width: 80px; aspect-ratio: 16/9; object-fit: cover; border-radius: 6px;">
        <div>
          <h5 style="font-family: var(--font-title); font-size: 1.05rem; margin-bottom: 0.25rem; padding-right: 4rem;">${v.title}</h5>
          <p style="font-size: 0.8rem; color: var(--text-sub); line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">${v.desc}</p>
        </div>
      </div>
      
      <div class="admin-card-actions">
        <button class="btn-icon" onclick="editVideo('${v.id}')" title="Upravit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon delete" onclick="deleteVideo('${v.id}')" title="Smazat"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(card);
  });
}

const btnAddVideo = document.getElementById('btn-add-video');
const videoFormCont = document.getElementById('admin-video-form-container');
const btnVideoCancel = document.getElementById('btn-video-cancel');

if (btnAddVideo && videoFormCont) {
  btnAddVideo.addEventListener('click', () => {
    document.getElementById('video-form-title').innerText = "Přidat nové video";
    document.getElementById('video-editor-form').reset();
    document.getElementById('edit-video-id').value = '';
    videoFormCont.style.display = 'block';
    btnAddVideo.style.display = 'none';
  });
}

if (btnVideoCancel && videoFormCont && btnAddVideo) {
  btnVideoCancel.addEventListener('click', () => {
    videoFormCont.style.display = 'none';
    btnAddVideo.style.display = 'block';
  });
}

const videoEditorForm = document.getElementById('video-editor-form');
if (videoEditorForm) {
  videoEditorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('edit-video-id').value;
    const title = document.getElementById('video-title-input').value.trim();
    const desc = document.getElementById('video-desc-input').value.trim();
    let url = document.getElementById('video-url-input').value.trim();
    let thumb = document.getElementById('video-thumb-input').value.trim();
    
    // Parse YouTube URLs to standard embeds
    if (url.includes('youtube.com/watch?v=')) {
      const vidId = url.split('v=')[1].split('&')[0];
      url = `https://www.youtube.com/embed/${vidId}`;
    } else if (url.includes('youtu.be/')) {
      const vidId = url.split('youtu.be/')[1].split('?')[0];
      url = `https://www.youtube.com/embed/${vidId}`;
    }
    
    if (!thumb) {
      thumb = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80";
    }
    
    if (id) {
      const idx = state.db.videos.findIndex(v => v.id === id);
      if (idx !== -1) {
        state.db.videos[idx] = { ...state.db.videos[idx], title, desc, url, thumb };
      }
    } else {
      const newVideo = {
        id: "vd_" + Date.now(),
        title,
        desc,
        url,
        thumb
      };
      state.db.videos.push(newVideo);
    }
    
    state.update();
    loadAdminVideosTab();
    renderVideos();
    
    videoFormCont.style.display = 'none';
    btnAddVideo.style.display = 'block';
  });
}

window.editVideo = function(id) {
  const v = state.db.videos.find(x => x.id === id);
  if (!v) return;
  
  document.getElementById('edit-video-id').value = v.id;
  document.getElementById('video-title-input').value = v.title;
  document.getElementById('video-desc-input').value = v.desc;
  document.getElementById('video-url-input').value = v.url;
  document.getElementById('video-thumb-input').value = v.thumb;
  
  document.getElementById('video-form-title').innerText = "Upravit video";
  videoFormCont.style.display = 'block';
  btnAddVideo.style.display = 'none';
};

window.deleteVideo = function(id) {
  if (confirm("Opravdu chcete toto video smazat?")) {
    state.db.videos = state.db.videos.filter(v => v.id !== id);
    state.update();
    loadAdminVideosTab();
    renderVideos();
  }
};

// 9F. JSON Database Backup & Restore Operations
const btnExport = document.getElementById('btn-db-export');
if (btnExport) {
  btnExport.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.db, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `sportactive_zaloha_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
  });
}

const importFile = document.getElementById('db-import-file');
const btnImportTrigger = document.getElementById('btn-db-import-trigger');
const importFileName = document.getElementById('import-file-name');
const btnImportSubmit = document.getElementById('btn-db-import-submit');
const dbFeedback = document.getElementById('db-feedback');

if (btnImportTrigger && importFile) {
  btnImportTrigger.addEventListener('click', () => importFile.click());
  
  importFile.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      importFileName.querySelector('span').innerText = file.name;
      importFileName.style.display = 'block';
      btnImportSubmit.style.display = 'block';
      dbFeedback.style.display = 'none';
    }
  });
}

if (btnImportSubmit) {
  btnImportSubmit.addEventListener('click', () => {
    const file = importFile.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
      try {
        const importedData = JSON.parse(event.target.result);
        
        // Basic schema verification
        if (importedData.texts && importedData.venues && importedData.lessons && importedData.bookings && importedData.articles && importedData.videos) {
          state.db = importedData;
          state.update();
          
          // Re-render whole site
          initUI();
          
          dbFeedback.className = "feedback-msg success";
          dbFeedback.innerText = "Záloha byla úspěšně nahrána! Web byl kompletně zaktualizován.";
          dbFeedback.style.display = 'block';
          
          // Reset UI
          importFile.value = '';
          importFileName.style.display = 'none';
          btnImportSubmit.style.display = 'none';
        } else {
          throw new Error("Neplatná struktura dat zálohy.");
        }
      } catch (err) {
        dbFeedback.className = "feedback-msg error";
        dbFeedback.innerText = "Chyba při nahrávání zálohy: Soubor má neplatný formát JSON nebo špatné schéma.";
        dbFeedback.style.display = 'block';
      }
    };
    reader.readAsText(file);
  });
}

// ==========================================
// 9G. THEME ENGINE (Dark / Light Mode)
// ==========================================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('sportactive_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sportactive_theme', newTheme);
    updateThemeUI(newTheme);
  });
}

function updateThemeUI(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const icon = btn.querySelector('i');
  if (icon) {
    if (theme === 'light') {
      icon.className = 'fa-solid fa-moon';
      btn.setAttribute('title', 'Přepnout do tmavého režimu');
    } else {
      icon.className = 'fa-solid fa-sun';
      btn.setAttribute('title', 'Přepnout do světlého režimu');
    }
  }
}

// ==========================================
// 10. SYSTEM APPLICATION INIT
// ==========================================
initUI();
