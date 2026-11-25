const categories = [
  { name: "Personales", color: "#FACC15", icon: "user-round", short: "P" },
  { name: "Interpersonales", color: "#F472B6", icon: "users", short: "I" },
  { name: "Grupo", color: "#7C3AED", icon: "network", short: "G" },
  { name: "Comunicación", color: "#4ADE80", icon: "messages-square", short: "C" }
];

const skills = [
  { category:"Personales", name:"Autoconocimiento", initial:3, current:4, initialText:"(Sin respuesta registrada al inicio del curso).", currentText:"Hoy tengo mucho más claros mis puntos fuertes y habilidades actuales, pero sigo descubriendo cómo reacciono bajo presión extrema, o incluso manejar el estres cuando se juntan entregas de mi carrera responsabilidades y laborales; aún estoy calibrando mis límites reales antes de saturarme en general" },
  { category:"Personales", name:"Orden", initial:4, current:4, initialText:"Tengo un buen orden y organización de las cosas.", currentText:"Mi orden pasó de ser solo personal a ser en equipo inclusive, no solo basta con organizarme yo, si no también a los demás para poder estar haciendo y completar un proyecto para escolar o laboral" },
  { category:"Personales", name:"Toma de decisiones", initial:4, current:4, initialText:"Soy bueno decidiendo lo que considero mejor.", currentText:"Ahora tomo decisiones basadas en evidencia y viabilidad técnica, aunque sigo trabajando en decidir con mayor rapidez cuando hay incertidumbre interpersonal o falta información." },
  { category:"Personales", name:"Gestión del tiempo", initial:5, current:5, initialText:"Manejo correctamente mi tiempo.", currentText:"Mantengo el 5 porque logro equilibrar la carrera en UMAD, el trabajo en Audita Social, el estudio de alemán, mi preparación para Camp Leaders y mi rutina diaria de natación y gimnasio. He aprendido a proteger bloques de enfoque profundo y cumplir entregas puntuales." },
  { category:"Interpersonales", name:"Comunicación efectiva", initial:3, current:3, initialText:"Luego la gente no me llega a entender correctamente.", currentText:"Sigo en 3 porque, al tener un perfil muy técnico y estructurado, a veces explico soluciones con demasiados tecnicismos o demasiado rápido; he mejorado traduciendo ideas a personas no técnicas, pero aún debo verificar que el mensaje quedó claro." },
  { category:"Interpersonales", name:"Comunicación asertiva", initial:3, current:3, initialText:"A veces tomo por sentado muchas cosas.", currentText:"Conservé el 3 porque he notado que en equipos de trabajo suelo asumir que los demás tienen el mismo contexto o ritmo de avance que yo. Estoy aprendiendo a expresar expectativas, límites y desacuerdos de forma directa y oportuna sin esperar a que el problema crezca." },
  { category:"Interpersonales", name:"Establecer relaciones", initial:4, current:4, initialText:"Soy bueno conociendo gente y haciendo amistades.", currentText:"Se me facilita conectar con la gente facilmente pero mantengo el 4 porque me falta mantenerlo de manera más constante y a largo plazo." },
  { category:"Interpersonales", name:"Manejo de conflictos", initial:4, current:4, initialText:"Me mantengo tranquilo y busco tomar la mejor decisión.", currentText:"Mi temple tranquilo me ayuda a no escalar discusiones y a buscar soluciones prácticas cuando falla algo en el equipo; sin embargo, a veces prefiero absorber trabajo extra o buscar la solucion más facil en vez de la correcta" },
  { category:"Grupo", name:"Delegar", initial:4, current:4, initialText:"Considero que delego en base a las capacidades de los demás.", currentText:"Identifico bien las fortalezas técnicas y creativas de mi equipo (como en proyectos colaborativos de desarrollo web y sistemas), asignando tareas acordes a cada perfil; el reto pendiente es soltar el control de revisión detallada una vez que asigno la tarea." },
  { category:"Grupo", name:"Empoderar", initial:3, current:4, initialText:"Pienso que la persona conoce su valor, sin que alguien más se lo diga a veces.", currentText:"Antes creía que cada quien sabía lo que valía sin necesidad de decírselo; hoy entiendo que un líder debe reconocer explícitamente los logros y dar autonomía real. He tenido ciertas situaciones en donde me pude dar cuenta q mejoré en ese aspecto con trabajos en equipo q he tenido" },
  { category:"Comunicación", name:"Presentaciones", initial:3, current:4, initialText:"(Sin respuesta registrada al inicio del curso).", currentText:"busco mejorar mi lenguaje corporal y ritmo vocal para depender menos de las diapositivas." },
  { category:"Comunicación", name:"Entrevistas", initial:2, current:3, initialText:"(Sin respuesta registrada al inicio del curso).", currentText:"Sé estructurar mis logros, pero sigo puliendo la naturalidad y la escucha activa sin adelantarme a responder." },
  { category:"Comunicación", name:"Reuniones de trabajo", initial:2, current:3, initialText:"(Sin respuesta registrada al inicio del curso).", currentText:"Me enfoco en que las juntas tengan acuerdos mutuos y fechas claras, evitando perder tiempo" }
];

const foda = [
  { title:"Fortalezas", icon:"zap", items:[
    { skill:"Gestión del tiempo", score:"5/5", reason:"Equilibro mis actividades, protejo bloques de enfoque y cumplo entregas puntuales." },
    { skill:"Orden", score:"4/5", reason:"He pasado de organizarme personalmente a organizar también al equipo para completar proyectos." },
    { skill:"Toma de decisiones", score:"4/5", reason:"Tomo decisiones con base en evidencia y viabilidad técnica." },
    { skill:"Establecer relaciones", score:"4/5", reason:"Se me facilita conectar con la gente." },
    { skill:"Manejo de conflictos", score:"4/5", reason:"Mantengo la calma y busco soluciones prácticas sin escalar discusiones." },
    { skill:"Delegar", score:"4/5", reason:"Identifico las fortalezas de los demás y asigno tareas acordes a cada perfil." }
  ]},
  { title:"Oportunidades", icon:"trending-up", items:[
    { skill:"Autoconocimiento", score:"3/5 → 4/5", reason:"Reconozco mejor mis puntos fuertes; sigo identificando mis límites ante el estrés." },
    { skill:"Empoderar", score:"3/5 → 4/5", reason:"He notado mejora en esta habilidad a partir de trabajos en equipo." },
    { skill:"Presentaciones", score:"3/5 → 4/5", reason:"Subió mi calificación; quiero mejorar lenguaje corporal y ritmo vocal." },
    { skill:"Entrevistas", score:"2/5 → 3/5", reason:"Ya estructuro mis logros; sigo trabajando en naturalidad y escucha activa." },
    { skill:"Reuniones de trabajo", score:"2/5 → 3/5", reason:"Ahora procuro acuerdos mutuos y fechas claras." }
  ]},
  { title:"Debilidades", icon:"triangle-alert", items:[
    { skill:"Comunicación efectiva", score:"3/5", reason:"A veces explico con demasiados tecnicismos o demasiado rápido; debo comprobar que se entendió el mensaje." },
    { skill:"Comunicación asertiva", score:"3/5", reason:"A veces asumo que los demás tienen mi mismo contexto o ritmo; debo expresar expectativas y desacuerdos a tiempo." },
    { skill:"Entrevistas", score:"3/5", reason:"Sigo puliendo la naturalidad y la escucha activa." },
    { skill:"Reuniones de trabajo", score:"3/5", reason:"Busco fomentar más participación además de llegar a acuerdos y fechas claras." }
  ]},
  { title:"Amenazas", icon:"shield-alert", items:[
    { skill:"Autoconocimiento", score:"4/5", reason:"La presión y el estrés cuando coinciden responsabilidades pueden hacer que rebase mis límites." },
    { skill:"Toma de decisiones", score:"4/5", reason:"La incertidumbre interpersonal o la falta de información dificultan decidir con rapidez." },
    { skill:"Manejo de conflictos", score:"4/5", reason:"A veces absorbo trabajo extra o elijo la solución fácil en vez de la correcta." },
    { skill:"Delegar", score:"4/5", reason:"Me cuesta soltar el control de la revisión detallada después de asignar una tarea." }
  ]}
];

const actions = [
  { quadrant:"Fortaleza", color:"#38bdf8", title:"Implementar una revisión semanal cada domingo de 20 minutos para sincronizar mis bloques de estudio en UMAD, entregas de Audita Social y entrenamientos, asegurando cero empalmes críticos.", habit:"Revisión semanal", metric:"Cero empalmes críticos" },
  { quadrant:"Fortaleza", color:"#38bdf8", title:"Documentar soluciones y flujos técnicos en guías breves y visuales cada vez que automatice un proceso o resuelva un bloqueo en equipo, multiplicando mi impacto sin depender de mi presencia constante.", habit:"Guías breves y visuales", metric:"Una guía por solución" },
  { quadrant:"Oportunidad", color:"#34d399", title:"Diseñar y proponer una solución interna de seguimiento de tareas y alertas de vencimiento para mi equipo de trabajo, asumiendo el liderazgo de su adopción paso a paso.", habit:"Tablero de seguimiento", metric:"Adopción por el equipo" },
  { quadrant:"Oportunidad", color:"#34d399", title:"Practicar diariamente comunicación conversacional y resolución de situaciones cotidianas en inglés y alemán, preparándome para liderar y colaborar con equipos multiculturales en Estados Unidos.", habit:"Práctica diaria", metric:"Consistencia diaria" },
  { quadrant:"Debilidad", color:"#fb923c", title:"Aplicar la regla de “cero supuestos” al inicio de cada proyecto o tarea delegada: confirmar por escrito qué se espera, para cuándo y bajo qué criterios de calidad antes de comenzar.", habit:"Confirmación escrita", metric:"100% de tareas claras" },
  { quadrant:"Debilidad", color:"#fb923c", title:"Reconocer explícitamente al menos una aportación concreta de un compañero por semana y permitir que otros integrantes presenten o defiendan sus propios módulos sin intervenir innecesariamente.", habit:"Reconocimiento semanal", metric:"Una aportación por semana" },
  { quadrant:"Amenaza", color:"#f87171", title:"Mantener innegociable mi rutina de natación/gimnasio al menos 5 días a la semana como válvula de regulación física y mental, evitando aceptar compromisos extra sin evaluar primero mi capacidad real.", habit:"Natación o gimnasio", metric:"Mínimo 5 días/semana" },
  { quadrant:"Amenaza", color:"#f87171", title:"Introducir mejoras tecnológicas o metodológicas mediante prototipos rápidos y acompañamiento cercano en lugar de imposiciones bruscas, facilitando que el equipo vea el beneficio inmediato.", habit:"Prototipo + acompañamiento", metric:"Adopción progresiva" }
];

const slideTitles = ["Portada","Comparativo","FODA","Plan de acción","Carta al futuro"];
const slideIcons = ["home","chart-pie","layout-grid","list-checks","book-open"];
let current = 0;
let radarChart;

function renderNav() {
  document.getElementById("sectionNav").innerHTML = slideTitles.map((title,i) =>
    `<button class="nav-item ${i===0?"active":""}" type="button" data-slide="${i}" aria-label="${title}">
      <i data-lucide="${slideIcons[i]}"></i><span>${i+1}. ${title}</span>
    </button>`).join("");
  document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => goToSlide(+button.dataset.slide)));
}

function renderFilters() {
  const filters = ["Todas",...categories.map(c=>c.name)];
  document.getElementById("skillFilters").innerHTML = filters.map((name,i) =>
    `<button class="filter-button ${i===0?"active":""}" type="button" data-category="${name}">${name}</button>`).join("");
  document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    renderSkillCards(button.dataset.category);
  }));
}

function renderSkillCards(category="Todas") {
  const filtered = category==="Todas" ? skills : skills.filter(s=>s.category===category);
  document.getElementById("skillCards").innerHTML = filtered.map(skill => {
    const cat = categories.find(c=>c.name===skill.category);
    return `<article class="skill-card" style="--accent:${cat.color}" tabindex="0">
      <div class="skill-card-head"><div class="skill-name"><span class="category-icon">${cat.short}</span><h3>${skill.name}</h3></div><span class="score">${skill.current}/5</span></div>
      <p class="skill-reflection">${skill.currentText}</p>
      <p class="initial-note"><strong>Inicio · ${skill.initial}/5:</strong> ${skill.initialText}</p>
    </article>`;
  }).join("");
  document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click",()=>card.classList.toggle("expanded"));
    card.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" ") card.classList.toggle("expanded"); });
  });
  updateRadar(category);
  updateSummary(category,filtered);
}

function updateSummary(category,filtered) {
  const average = filtered.reduce((sum,s)=>sum+s.current,0)/filtered.length;
  document.getElementById("summaryAverage").textContent=average.toFixed(1);
  document.getElementById("summaryTitle").textContent=category==="Todas"?"Todas las categorías":category;
  document.getElementById("summaryText").textContent=category==="Todas"
    ? "La estabilidad numérica refleja consistencia en el autodiagnóstico; las reflexiones muestran mayor profundidad y criterio adquirido."
    : `Promedio actual en ${category.toLower} con una reflexión distinta a la calificación inicial, evidenciando madurez en el criterio.`;
}

function updateRadar(category) {
  const labels = category==="Todas" ? categories.map(c=>c.name) : [category];
  let initial, currentValues;
  if(category==="Todas") {
    initial=categories.map(c=>skills.filter(s=>s.category===c.name).reduce((a,s)=>a+s.initial,0)/skills.filter(s=>s.category===c.name).length);
    currentValues=categories.map(c=>skills.filter(s=>s.category===c.name).reduce((a,s)=>a+s.current,0)/skills.filter(s=>s.category===c.name).length);
  } else {
    const subset=skills.filter(s=>s.category===category);
    initial=[subset.reduce((a,s)=>a+s.initial,0)/subset.length];
    currentValues=[subset.reduce((a,s)=>a+s.current,0)/subset.length];
  }
  if(radarChart) radarChart.destroy();
  const ctx=document.getElementById("skillsRadar");
  radarChart=new Chart(ctx,{
    type:"radar",
    data:{labels,datasets:[
      {label:"Evaluación Inicial",data:initial,borderColor:"#94a3b8",backgroundColor:"rgba(148,163,184,.12)",pointBackgroundColor:"#94a3b8",borderWidth:2},
      {label:"Evaluación Actual",data:currentValues,borderColor:"#C59B27",backgroundColor:"rgba(197,155,39,.14)",pointBackgroundColor:"#C59B27",borderWidth:2}
    ]},
    options:{responsive:true,maintainAspectRatio:false,scales:{r:{min:0,max:5,ticks:{stepSize:1,display:false},grid:{color:"#e8edf4"},angleLines:{color:"#e8edf4"},pointLabels:{color:"#68758a",font:{size:10,weight:"700"}}}},plugins:{legend:{display:false}},animation:{duration:550}}
  });
}

function renderFoda() {
  document.getElementById("fodaGrid").innerHTML=foda.map(item=>`
    <article class="foda-card">
      <div class="foda-head"><div><span class="foda-symbol">${item.title.charAt(0)}</span><h3>${item.title}</h3></div></div>
      <div class="foda-content">${item.items.map(entry=>`
        <div class="foda-skill">
          <div class="foda-skill-head"><strong>${entry.skill}</strong><span>${entry.score}</span></div>
          <p>${entry.reason}</p>
        </div>`).join("")}
      </div>
    </article>`).join("");
}

function renderActions() {
  document.getElementById("actionGrid").innerHTML=actions.map((action,i)=>`
    <article class="action-card" style="--quadrant:${action.color}">
      <div class="action-top"><span class="action-number">${String(i+1).padStart(2,"0")}</span><span class="quadrant-chip">${action.quadrant}</span></div>
      <h3>${action.title}</h3>
      <div class="action-detail">
        <div><i data-lucide="repeat-2"></i><p><strong>Hábito / herramienta</strong>${action.habit}</p></div>
        <div><i data-lucide="circle-check-big"></i><p><strong>Métrica de verificación</strong>${action.metric}</p></div>
      </div>
    </article>`).join("");
}

function goToSlide(index) {
  current=Math.max(0,Math.min(slideTitles.length-1,index));
  document.querySelectorAll(".slide").forEach((slide,i)=>slide.classList.toggle("active",i===current));
  document.querySelectorAll(".nav-item").forEach((button,i)=>button.classList.toggle("active",i===current));
  document.getElementById("currentSlide").textContent=String(current+1).padStart(2,"0");
  document.getElementById("prevButton").disabled=current===0;
  document.getElementById("nextButton").disabled=current===slideTitles.length-1;
  document.querySelector(".slide.active").scrollTop=0;
  if(current===1 && radarChart) setTimeout(()=>radarChart.resize(),50);
}

renderNav();
renderFilters();
renderSkillCards();
renderFoda();
renderActions();
lucide.createIcons();
goToSlide(0);

document.getElementById("prevButton").addEventListener("click",()=>goToSlide(current-1));
document.getElementById("nextButton").addEventListener("click",()=>goToSlide(current+1));
document.getElementById("printButton").addEventListener("click",()=>window.print());
window.addEventListener("keydown",e=>{
  if(e.key==="ArrowLeft") goToSlide(current-1);
  if(e.key==="ArrowRight") goToSlide(current+1);
});
