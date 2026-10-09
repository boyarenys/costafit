

const scheduleData = [
  {
    dayKey: "mon",
    classes: [
      { type: "cardio", start: "09:30", end: "10:15", duration: "45 min", yt: "https://youtube.com" },
      { type: "muaythai", start: "10:30", end: "11:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "boxing", start: "11:30", end: "12:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "educativo", start: "17:15", end: "18:00", duration: "45 min", yt: "https://youtube.com" },
      { type: "boxing", start: "18:00", end: "19:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "jiujitsu", start: "19:00", end: "20:30", duration: "90 min", yt: "https://youtube.com" }
    ]
  },
  {
    dayKey: "tue",
    classes: [
      { type: "slow", start: "09:30", end: "10:00", duration: "30 min", yt: "https://youtube.com" },
      { type: "jiujitsu", start: "10:00", end: "11:15", duration: "75 min", yt: "https://youtube.com" },
      { type: "rutina", start: "11:30", end: "12:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "kids", start: "17:00", end: "18:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "juniors", start: "18:00", end: "19:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "muaythai", start: "19:00", end: "20:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "defensa", start: "20:00", end: "21:00", duration: "60 min", yt: "https://youtube.com" }
    ]
  },
  {
    dayKey: "wed",
    classes: [
      { type: "cardio", start: "09:30", end: "10:15", duration: "45 min", yt: "https://youtube.com" },
      { type: "muaythai", start: "10:30", end: "11:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "boxing", start: "11:30", end: "12:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "educativo", start: "17:15", end: "18:00", duration: "45 min", yt: "https://youtube.com" },
      { type: "boxing", start: "18:00", end: "19:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "jiujitsu", start: "19:00", end: "20:30", duration: "90 min", yt: "https://youtube.com" }
    ]
  },
  {
    dayKey: "thu",
    classes: [
      { type: "slow", start: "09:30", end: "10:00", duration: "30 min", yt: "https://youtube.com" },
      { type: "jiujitsu", start: "10:00", end: "11:15", duration: "75 min", yt: "https://youtube.com" },
      { type: "rutina", start: "11:30", end: "12:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "kids", start: "17:00", end: "18:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "juniors", start: "18:00", end: "19:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "muaythai", start: "19:00", end: "20:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "defensa", start: "20:00", end: "21:00", duration: "60 min", yt: "https://youtube.com" }
    ]
  },
  {
    dayKey: "fri",
    classes: [
      { type: "cardio", start: "09:30", end: "10:15", duration: "45 min", yt: "https://youtube.com" },
      { type: "muaythai", start: "10:30", end: "11:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "boxing", start: "11:30", end: "12:30", duration: "60 min", yt: "https://youtube.com" },
      { type: "boxing", start: "18:00", end: "19:00", duration: "60 min", yt: "https://youtube.com" },
      { type: "jiujitsu", start: "19:00", end: "20:30", duration: "90 min", yt: "https://youtube.com" }
    ]
  }
];

let currentSelectedDay = 0;
let currentViewMode = 'day';
let activeModalData = null;

// Obtener las traducciones activas del idioma global de main.js
function getLangDictionary() {
  if (window.currentTranslations && window.currentTranslations.schedule) {
    return window.currentTranslations.schedule;
  }
  return {};
}

function initSchedule() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  currentSelectedDay = (dayOfWeek >= 1 && dayOfWeek <= 5) ? dayOfWeek - 1 : 0;

  const monday = new Date(now);
  monday.setDate(now.getDate() + (dayOfWeek === 0 ? -6 : 1 - dayOfWeek));

  for (let i = 0; i < 5; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dayNum = String(d.getDate()).padStart(2, '0');
    const monthNum = String(d.getMonth() + 1).padStart(2, '0');
    
    const dateElem = document.getElementById(`tab-date-${i}`);
    if (dateElem) dateElem.innerText = `${dayNum}/${monthNum}`;
    
    const tabElem = document.getElementById(`tab-${i}`);
    if (tabElem && dayOfWeek >= 1 && dayOfWeek <= 5 && i === (dayOfWeek - 1)) {
      tabElem.classList.add('is-today');
    }
  }

  renderSchedule();
}

function selectDay(index) {
  currentSelectedDay = index;
  renderSchedule();
}

function setViewMode(mode) {
  currentViewMode = mode;
  const btnDay = document.getElementById('btn-view-day');
  const btnWeek = document.getElementById('btn-view-week');
  const tabsBar = document.getElementById('day-tabs-bar');
  const dayContainer = document.getElementById('day-view-container');
  const weekContainer = document.getElementById('week-view-container');

  if (btnDay) btnDay.classList.toggle('active', mode === 'day');
  if (btnWeek) btnWeek.classList.toggle('active', mode === 'week');
  if (tabsBar) tabsBar.style.display = (mode === 'day') ? 'flex' : 'none';
  if (dayContainer) dayContainer.style.display = (mode === 'day') ? 'flex' : 'none';
  if (weekContainer) weekContainer.style.display = (mode === 'week') ? 'block' : 'none';
  
  renderSchedule();
}

function renderSchedule() {
  for (let i = 0; i < 5; i++) {
    const tabElem = document.getElementById(`tab-${i}`);
    if (tabElem) {
      tabElem.classList.toggle('active', i === currentSelectedDay);
    }
  }

  if (currentViewMode === 'day') {
    renderDayView();
  } else {
    renderWeekViewTable();
  }
}

function renderDayView() {
  const container = document.getElementById('day-view-container');
  if (!container) return;
  
  container.innerHTML = '';
  const dayData = scheduleData[currentSelectedDay];
  const lang = getLangDictionary(); // Lee del JSON activo

  dayData.classes.forEach(c => {
    // Si no encuentra la traducción aún, hace un fallback al tipo de clase
    const classTitle = (lang.titles && lang.titles[c.type]) ? lang.titles[c.type] : c.type;
    const dayName = lang[dayData.dayKey] || dayData.dayKey;
    const btnText = lang.btnReserve || 'Reservar';

    const card = document.createElement('div');
    card.className = `day-card card-${c.type}`;

    card.innerHTML = `
      <div class="day-card-left">
        <div class="day-card-time">
          <span class="time-range"><i class="far fa-clock"></i> ${c.start} - ${c.end}</span>
          <span class="duration-tag">${c.duration}</span>
        </div>
        <div class="day-card-main">
          <span class="day-card-title">${classTitle}</span>
        </div>
      </div>

      <div class="card-actions">
        <a href="${c.yt}" target="_blank" class="action-icon" title="YouTube">
          <i class="fab fa-youtube"></i>
        </a>
        <span class="action-icon" title="Info" onclick="openOnlyInfoModal('${c.type}')">
          <i class="fas fa-info-circle"></i>
        </span>
        <button class="btn-reserve-day" onclick="openBookingModal('${classTitle}', '${c.start}', '${c.end}', '${dayName}')">
          ${lang.btnReserve || 'Reservar'}
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderWeekViewTable() {
  const tbody = document.getElementById('week-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  const lang = getLangDictionary();

  const timeSlots = [];
  scheduleData.forEach(d => {
    d.classes.forEach(c => {
      if (!timeSlots.includes(c.start)) {
        timeSlots.push(c.start);
      }
    });
  });
  timeSlots.sort();

  timeSlots.forEach(time => {
    const tr = document.createElement('tr');
    
    const tdTime = document.createElement('td');
    tdTime.className = 'time-col';
    tdTime.innerText = time;
    tr.appendChild(tdTime);

    for (let dayIdx = 0; dayIdx < 5; dayIdx++) {
      const td = document.createElement('td');
      const dayData = scheduleData[dayIdx];
      const foundClass = dayData.classes.find(c => c.start === time);

      if (foundClass) {
        const classTitle = (lang.titles && lang.titles[foundClass.type]) ? lang.titles[foundClass.type] : foundClass.type;
const dayName = lang[dayData.dayKey] || dayData.dayKey;
const btnText = lang.btnReserve || 'Reservar';

        td.innerHTML = `
          <div class="week-card card-${foundClass.type}">
            <div class="week-card-header">
              <div class="week-card-title">${classTitle}</div>
              <div class="week-card-time">${foundClass.start} - ${foundClass.end}</div>
            </div>

            <div class="week-card-actions">
              <div class="week-card-icons">
                <a href="${foundClass.yt}" target="_blank" class="week-icon-btn" title="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
                <span class="week-icon-btn" title="Info" onclick="openOnlyInfoModal('${foundClass.type}')">
                  <i class="fas fa-info-circle"></i>
                </span>
              </div>
              <button class="btn-reserve-week" onclick="openBookingModal('${classTitle}', '${foundClass.start}', '${foundClass.end}', '${dayName}')">
                ${lang.btnReserve}
              </button>
            </div>
          </div>
        `;
      }
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  });
}

function openOnlyInfoModal(type) {
 const lang = getLangDictionary();
  const infoTitle = document.getElementById('info-class-title');
  const infoDesc = document.getElementById('info-class-desc');
  const infoModal = document.getElementById('info-modal');

  if (infoTitle) infoTitle.innerText = (lang.titles && lang.titles[type]) ? lang.titles[type] : type;
  if (infoDesc) infoDesc.innerText = (lang.descriptions && lang.descriptions[type]) ? lang.descriptions[type] : "";
  if (infoModal) infoModal.classList.add('active');
}

function closeInfoModal() {
  const infoModal = document.getElementById('info-modal');
  if (infoModal) infoModal.classList.remove('active');
}

function openBookingModal(title, start, end, dayName) {
  activeModalData = { title, start, end, dayName };
  
  const modalTitle = document.getElementById('modal-class-title');
  const modalTime = document.getElementById('modal-class-time');
  const bookingModal = document.getElementById('booking-modal');

  if (modalTitle) modalTitle.innerText = title;
  if (modalTime) {
    modalTime.innerHTML = `<i class="far fa-calendar-alt"></i> ${dayName} &nbsp;|&nbsp; <i class="far fa-clock"></i> ${start} - ${end}`;
  }
  
  if (bookingModal) bookingModal.classList.add('active');
}

function closeBookingModal() {
  const bookingModal = document.getElementById('booking-modal');
  if (bookingModal) bookingModal.classList.remove('active');
}

function submitBookingWhatsApp() {
  const name = document.getElementById('book-name').value.trim();
  const phone = document.getElementById('book-phone').value.trim();
  const email = document.getElementById('book-email').value.trim();

  if (!name || !phone || !email) {
    alert("Por favor rellena todos los campos para continuar.");
    return;
  }

  const whatsappNum = "34600000000";
  const text = `¡Hola! Quiero reservar una clase de prueba (10€):\n\n` +
               `🥊 *Clase:* ${activeModalData.title}\n` +
               `📅 *Día:* ${activeModalData.dayName}\n` +
               `⏰ *Hora:* ${activeModalData.start} - ${activeModalData.end}\n\n` +
               `*Datos del alumno:*\n` +
               `👤 *Nombre:* ${name}\n` +
               `📞 *Teléfono:* ${phone}\n` +
               `📧 *Email:* ${email}`;

  window.open(`https://api.whatsapp.com/send?phone=${whatsappNum}&text=${encodeURIComponent(text)}`, '_blank');
  closeBookingModal();
}

// Exportar funciones globalmente para que puedan ejecutarse desde HTML y main.js
window.initSchedule = initSchedule;
window.selectDay = selectDay;
window.setViewMode = setViewMode;
window.renderSchedule = renderSchedule;
window.openOnlyInfoModal = openOnlyInfoModal;
window.closeInfoModal = closeInfoModal;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.submitBookingWhatsApp = submitBookingWhatsApp;