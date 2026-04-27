// ============================================
// MA'LUMOTLAR
// ============================================
const yillar = [2020, 2021, 2022, 2023, 2024, 2025];
const aholi = [34558.9, 35271.3, 35874.4, 36421.8, 37543.2, 38236.7];
const bandlar = [13200, 13450, 13780, 14100, 14500, 14850];
const mlya = [19500, 19800, 20100, 20450, 21200, 21700];
const kambagal = [5200, 4900, 4600, 4010, 3200, 2220];
const mehnatResurslari = [20200, 20500, 20850, 21100, 21800, 22300];
const iqtisodiyNofaol = [5500, 5600, 5650, 5700, 5800, 5900];

// Hisoblangan ko'rsatkichlar
let bandlikFoizi = [];
let kambagallikFoizi = [];
let ishsizlar = [];

// Grafik o'zgaruvchilari
let mainChart = null;
let prognozChart = null;

// ============================================
// HISOBLASH FUNKSIYALARI
// ============================================
function calculateAll() {
    bandlikFoizi = [];
    kambagallikFoizi = [];
    ishsizlar = [];
    
    for(let i = 0; i < yillar.length; i++) {
        bandlikFoizi.push(parseFloat((bandlar[i] / mlya[i] * 100).toFixed(2)));
        kambagallikFoizi.push(parseFloat((kambagal[i] / aholi[i] * 100).toFixed(2)));
        ishsizlar.push(mehnatResurslari[i] - bandlar[i] - iqtisodiyNofaol[i]);
    }
}

// ============================================
// STATISTIK KARTALARNI YANGILASH
// ============================================
function updateStatCards() {
    const lastIndex = yillar.length - 1;
    const prevIndex = lastIndex - 1;
    
    // Aholi
    document.getElementById('current_aholi').innerHTML = aholi[lastIndex].toLocaleString();
    let aholiChange = ((aholi[lastIndex] - aholi[prevIndex]) / aholi[prevIndex] * 100).toFixed(2);
    let aholiElem = document.getElementById('aholi_change');
    aholiElem.innerHTML = (aholiChange > 0 ? '📈 +' : '📉 ') + aholiChange + '%';
    aholiElem.className = 'stat-change ' + (aholiChange > 0 ? 'positive' : 'negative');
    
    // Bandlik
    document.getElementById('current_bandlik').innerHTML = bandlikFoizi[lastIndex];
    let bandlikChange = (bandlikFoizi[lastIndex] - bandlikFoizi[prevIndex]).toFixed(2);
    let bandlikElem = document.getElementById('bandlik_change');
    bandlikElem.innerHTML = (bandlikChange > 0 ? '📈 +' : '📉 ') + bandlikChange + '%';
    bandlikElem.className = 'stat-change ' + (bandlikChange > 0 ? 'positive' : 'negative');
    
    // Kambag'allik
    document.getElementById('current_kambagal').innerHTML = kambagallikFoizi[lastIndex];
    let kambagalChange = (kambagallikFoizi[lastIndex] - kambagallikFoizi[prevIndex]).toFixed(2);
    let kambagalElem = document.getElementById('kambagal_change');
    kambagalElem.innerHTML = (kambagalChange > 0 ? '📈 +' : '📉 ') + Math.abs(kambagalChange) + '%';
    kambagalElem.className = 'stat-change ' + (kambagalChange < 0 ? 'positive' : 'negative');
    
    // Ishsizlar
    document.getElementById('current_ishsiz').innerHTML = (ishsizlar[lastIndex] / 1000).toFixed(1);
    let ishsizChange = ((ishsizlar[lastIndex] - ishsizlar[prevIndex]) / ishsizlar[prevIndex] * 100).toFixed(2);
    let ishsizElem = document.getElementById('ishsiz_change');
    ishsizElem.innerHTML = (ishsizChange > 0 ? '📈 +' : '📉 ') + Math.abs(ishsizChange) + '%';
    ishsizElem.className = 'stat-change ' + (ishsizChange < 0 ? 'positive' : 'negative');
}

// ============================================
// JADVALNI TO'LDIRISH
// ============================================
function updateTable() {
    let html = '';
    for(let i = 0; i < yillar.length; i++) {
        html += `<tr>
            <td>${yillar[i]}</td>
            <td>${aholi[i].toLocaleString()}</td>
            <td>${bandlar[i]}</td>
            <td>${mlya[i]}</td>
            <td>${kambagal[i]}</td>
            <td>${bandlikFoizi[i]}%</td>
            <td>${kambagallikFoizi[i]}%</td>
            <td>${ishsizlar[i]}</td>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = html;
}

// ============================================
// 10 TA IJTIMOIY MASALA KARTALARI
// ============================================
const problems = [
    { name: "Kambag'allik", formula: "P = (N_poor / N_total) × 100%", solution: "Ijtimoiy yordam, ish o'rinlari yaratish", get: () => kambagallikFoizi, unit: "%", trend: "down" },
    { name: "Ishsizlik", formula: "U = (Unemployed / Labor_force) × 100%", solution: "Kasb-hunar o'rgatish, ish yarmarkalari", get: () => ishsizlar.map((u,i) => (u / mehnatResurslari[i] * 100).toFixed(2)), unit: "%", trend: "down" },
    { name: "Demografik yuk", formula: "DR = (0-14 yosh + 65+ yosh) / 15-64 yosh × 100%", solution: "Pensiya islohoti, bola nafaqalari", get: () => [49.2,49.5,49.6,49.7,49.6,49.7], unit: "%", trend: "up" },
    { name: "Bandlik", formula: "ER = (Employed / Labor_force) × 100%", solution: "Tadbirkorlikni qo'llab-quvvatlash", get: () => bandlikFoizi, unit: "%", trend: "up" },
    { name: "Pensiya yuki", formula: "PR = (Elderly / Working_age) × 100%", solution: "Pensiya jamg'armasini kuchaytirish", get: () => [9.3,9.3,9.3,9.3,9.2,9.2], unit: "%", trend: "up" },
    { name: "Daromad tengsizligi", formula: "Gini = 1 - Σ(p_i)(2Q_i-1)", solution: "Progressiv soliq, ijtimoiy transfertlar", get: () => [32.5,32.1,31.8,31.2,30.5,29.8], unit: "ball", trend: "down" },
    { name: "Migratsiya saldosi", formula: "NM = Immigration - Emigration", solution: "Mahalliy ish o'rinlari, mintaqaviy rivojlanish", get: () => [25,17,6,-3,-15,-25], unit: "ming", trend: "down" },
    { name: "Uy-joy ta'minoti", formula: "HR = Housing_units / Households × 100%", solution: "Ijtimoiy uy-joy, ipoteka dasturlari", get: () => [93.5,93.7,93.8,94.0,94.1,94.2], unit: "%", trend: "up" },
    { name: "Inson taraqqiyoti indeksi", formula: "HDI = (Life+Edu+Income)/3", solution: "Ta'lim va sog'liqni saqlashni rivojlantirish", get: () => [71.2,72.1,73.0,73.8,74.5,75.2], unit: "ball", trend: "up" },
    { name: "Aholi zichligi", formula: "D = Population / Area", solution: "Shaharlashtirish, infratuzilmani rivojlantirish", get: () => [77.8,79.4,80.8,82.0,84.5,86.1], unit: "kishi/km²", trend: "up" }
];

function renderProblems() {
    const grid = document.getElementById('problemsGrid');
    grid.innerHTML = '';
    for(let i = 0; i < problems.length; i++) {
        const p = problems[i];
        const val = p.get();
        const last = val[val.length-1];
        const first = val[0];
        const change = (last - first).toFixed(1);
        grid.innerHTML += `
            <div class="problem-card">
                <h3>${i+1}. ${p.name} muammosi</h3>
                <div class="formula">📐 ${p.formula}</div>
                <div class="result">${last}${p.unit}</div>
                <div class="${p.trend === 'up' ? 'trend-up' : 'trend-down'}">
                    ${p.trend === 'up' ? '📈 +' : '📉 '}${Math.abs(change)}${p.unit}
                </div>
                <div class="solution">💡 Yechim: ${p.solution}</div>
            </div>
        `;
    }
}

// ============================================
// GRAFIKLAR
// ============================================
const graphs = [
    { name: "Aholi soni", get: () => aholi, color: "#1a73e8", label: "Aholi soni (ming kishi)" },
    { name: "Kambag'allik", get: () => kambagallikFoizi, color: "#dc3545", label: "Kambag'allik (%)" },
    { name: "Bandlik", get: () => bandlikFoizi, color: "#28a745", label: "Bandlik (%)" },
    { name: "Ishsizlar", get: () => ishsizlar, color: "#fd7e14", label: "Ishsizlar (ming kishi)" },
    { name: "HDI indeksi", get: () => problems[8].get(), color: "#6f42c1", label: "Inson taraqqiyoti indeksi (ball)" }
];

function renderGraphButtons() {
    const container = document.getElementById('graphButtons');
    container.innerHTML = '';
    graphs.forEach((g, idx) => {
        const btn = document.createElement('button');
        btn.className = 'graph-btn' + (idx === 0 ? ' active' : '');
        btn.textContent = g.name;
        btn.onclick = () => {
            document.querySelectorAll('.graph-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateGraph(g);
        };
        container.appendChild(btn);
    });
}

function updateGraph(g) {
    if(mainChart) mainChart.destroy();
    const ctx = document.getElementById('mainChart').getContext('2d');
    mainChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yillar,
            datasets: [{
                label: g.label,
                data: g.get(),
                borderColor: g.color,
                backgroundColor: g.color + '20',
                borderWidth: 3,
                pointRadius: 6,
                pointBackgroundColor: g.color,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.raw} ${g.label.includes('%') ? '%' : ''}`
                    }
                }
            }
        }
    });
}

// ============================================
// PROGNOZ
// ============================================
function calculatePrognoz() {
    // Chiziqli trend
    let t = [...Array(aholi.length).keys()];
    let n = aholi.length;
    let sumT = t.reduce((a,b) => a+b, 0);
    let sumY = aholi.reduce((a,b) => a+b, 0);
    let sumTY = t.reduce((a,b,i) => a + b*aholi[i], 0);
    let sumT2 = t.reduce((a,b) => a + b*b, 0);
    
    let slope = (n*sumTY - sumT*sumY) / (n*sumT2 - sumT*sumT);
    let intercept = (sumY - slope*sumT) / n;
    
    let prog2026 = intercept + slope * n;
    let prog2030 = intercept + slope * (n + 4);
    
    document.getElementById('linear_prognoz').innerHTML = prog2026.toFixed(1);
    document.getElementById('linear_formula').innerHTML = `y = ${intercept.toFixed(2)} + ${slope.toFixed(2)}·t`;
    document.getElementById('prognoz_2030').innerHTML = prog2030.toFixed(1);
    
    // CAGR
    let cagr = Math.pow(aholi[n-1] / aholi[0], 1/(n-1)) - 1;
    let cagrProg = aholi[n-1] * Math.pow(1 + cagr, 1);
    document.getElementById('cagr_prognoz').innerHTML = cagrProg.toFixed(1);
    document.getElementById('cagr_formula').innerHTML = `CAGR = ${(cagr*100).toFixed(2)}%`;
    
    // Prognoz grafigi
    let progYillar = [...yillar, 2026, 2027, 2028, 2029, 2030];
    let linearValues = [...aholi];
    for(let i = n; i < n+5; i++) {
        linearValues.push(intercept + slope * i);
    }
    
    if(prognozChart) prognozChart.destroy();
    const ctx = document.getElementById('prognozChart').getContext('2d');
    prognozChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: progYillar,
            datasets: [
                { label: 'Haqiqiy ma\'lumotlar', data: [...aholi, ...Array(5).fill(null)], borderColor: '#1a73e8', borderWidth: 3, pointRadius: 5, tension: 0.3 },
                { label: 'Chiziqli trend prognozi', data: linearValues, borderColor: '#ff6d00', borderWidth: 2, borderDash: [5, 5], fill: false }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.raw?.toFixed(1)} ming kishi`
                    }
                }
            }
        }
    });
}

// ============================================
// BOSHLASH
// ============================================
function init() {
    calculateAll();
    updateStatCards();
    updateTable();
    renderProblems();
    renderGraphButtons();
    updateGraph(graphs[0]);
    calculatePrognoz();
}

init();
