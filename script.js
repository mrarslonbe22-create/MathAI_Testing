// ============================================
// VILOYATLAR MA'LUMOTLARI (14 TA)
// ============================================
let regionsData = {
    "Toshkent shahri": { aholi: {2020: 2718,2021: 2780,2022: 2845,2023: 2912,2024: 2980,2025: 3050}, bandlik: {2020: 72.5,2021: 73.2,2022: 73.8,2023: 74.2,2024: 74.8,2025: 75.5}, kambagallik: {2020: 8.5,2021: 8.0,2022: 7.5,2023: 7.0,2024: 6.5,2025: 5.8} },
    "Toshkent viloyati": { aholi: {2020: 2950,2021: 3010,2022: 3075,2023: 3140,2024: 3210,2025: 3280}, bandlik: {2020: 68.2,2021: 68.8,2022: 69.3,2023: 69.8,2024: 70.2,2025: 70.8}, kambagallik: {2020: 10.2,2021: 9.8,2022: 9.3,2023: 8.8,2024: 8.2,2025: 7.6} },
    "Samarqand viloyati": { aholi: {2020: 3850,2021: 3920,2022: 3995,2023: 4070,2024: 4150,2025: 4230}, bandlik: {2020: 65.5,2021: 66.0,2022: 66.5,2023: 67.0,2024: 67.5,2025: 68.0}, kambagallik: {2020: 14.5,2021: 14.0,2022: 13.5,2023: 13.0,2024: 12.5,2025: 11.8} },
    "Namangan viloyati": { aholi: {2020: 2950,2021: 3010,2022: 3075,2023: 3140,2024: 3210,2025: 3280}, bandlik: {2020: 63.5,2021: 64.2,2022: 64.8,2023: 65.5,2024: 66.0,2025: 66.5}, kambagallik: {2020: 16.5,2021: 16.0,2022: 15.3,2023: 14.8,2024: 14.0,2025: 13.2} },
    "Farg'ona viloyati": { aholi: {2020: 3750,2021: 3820,2022: 3895,2023: 3970,2024: 4050,2025: 4130}, bandlik: {2020: 66.0,2021: 66.5,2022: 67.0,2023: 67.5,2024: 68.0,2025: 68.5}, kambagallik: {2020: 15.0,2021: 14.5,2022: 14.0,2023: 13.5,2024: 13.0,2025: 12.4} },
    "Andijon viloyati": { aholi: {2020: 3250,2021: 3310,2022: 3375,2023: 3440,2024: 3510,2025: 3580}, bandlik: {2020: 64.5,2021: 65.0,2022: 65.5,2023: 66.0,2024: 66.5,2025: 67.0}, kambagallik: {2020: 17.0,2021: 16.5,2022: 16.0,2023: 15.5,2024: 15.0,2025: 14.5} },
    "Qashqadaryo viloyati": { aholi: {2020: 3350,2021: 3420,2022: 3495,2023: 3570,2024: 3650,2025: 3730}, bandlik: {2020: 62.5,2021: 63.2,2022: 63.8,2023: 64.5,2024: 65.0,2025: 65.5}, kambagallik: {2020: 18.5,2021: 18.0,2022: 17.5,2023: 17.0,2024: 16.5,2025: 15.8} },
    "Surxondaryo viloyati": { aholi: {2020: 2750,2021: 2810,2022: 2875,2023: 2940,2024: 3010,2025: 3080}, bandlik: {2020: 60.5,2021: 61.2,2022: 61.8,2023: 62.5,2024: 63.0,2025: 63.5}, kambagallik: {2020: 20.5,2021: 20.0,2022: 19.5,2023: 19.0,2024: 18.5,2025: 17.8} },
    "Buxoro viloyati": { aholi: {2020: 1950,2021: 1990,2022: 2035,2023: 2080,2024: 2130,2025: 2180}, bandlik: {2020: 69.5,2021: 70.0,2022: 70.5,2023: 71.0,2024: 71.5,2025: 72.0}, kambagallik: {2020: 11.5,2021: 11.0,2022: 10.5,2023: 10.0,2024: 9.5,2025: 8.8} },
    "Xorazm viloyati": { aholi: {2020: 1950,2021: 1990,2022: 2035,2023: 2080,2024: 2130,2025: 2180}, bandlik: {2020: 67.5,2021: 68.0,2022: 68.5,2023: 69.0,2024: 69.5,2025: 70.0}, kambagallik: {2020: 13.5,2021: 13.0,2022: 12.5,2023: 12.0,2024: 11.5,2025: 10.8} },
    "Jizzax viloyati": { aholi: {2020: 1450,2021: 1480,2022: 1515,2023: 1550,2024: 1590,2025: 1630}, bandlik: {2020: 66.5,2021: 67.0,2022: 67.5,2023: 68.0,2024: 68.5,2025: 69.0}, kambagallik: {2020: 14.0,2021: 13.5,2022: 13.0,2023: 12.5,2024: 12.0,2025: 11.5} },
    "Navoiy viloyati": { aholi: {2020: 1050,2021: 1070,2022: 1095,2023: 1120,2024: 1150,2025: 1180}, bandlik: {2020: 73.5,2021: 74.0,2022: 74.5,2023: 75.0,2024: 75.5,2025: 76.0}, kambagallik: {2020: 9.5,2021: 9.0,2022: 8.5,2023: 8.0,2024: 7.5,2025: 6.8} },
    "Sirdaryo viloyati": { aholi: {2020: 850,2021: 870,2022: 895,2023: 920,2024: 950,2025: 980}, bandlik: {2020: 65.0,2021: 65.5,2022: 66.0,2023: 66.5,2024: 67.0,2025: 67.5}, kambagallik: {2020: 15.5,2021: 15.0,2022: 14.5,2023: 14.0,2024: 13.5,2025: 12.8} },
    "Qoraqalpog'iston": { aholi: {2020: 1950,2021: 1990,2022: 2035,2023: 2080,2024: 2130,2025: 2180}, bandlik: {2020: 61.5,2021: 62.0,2022: 62.5,2023: 63.0,2024: 63.5,2025: 64.0}, kambagallik: {2020: 22.5,2021: 22.0,2022: 21.5,2023: 21.0,2024: 20.5,2025: 19.8} }
};

// ============================================
// UMUMIY MA'LUMOTLAR
// ============================================
let yillar = [2020, 2021, 2022, 2023, 2024, 2025];
let aholi = [34558.9, 35271.3, 35874.4, 36421.8, 37543.2, 38236.7];
let bandlar = [13200, 13450, 13780, 14100, 14500, 14850];
let mlya = [19500, 19800, 20100, 20450, 21200, 21700];
let kambagal = [5200, 4900, 4600, 4010, 3200, 2220];
let mehnatResurslari = [20200, 20500, 20850, 21100, 21800, 22300];
let iqtisodiyNofaol = [5500, 5600, 5650, 5700, 5800, 5900];

let bandlikFoizi = [];
let kambagallikFoizi = [];
let ishsizlar = [];
let mainChart = null;
let prognozChart = null;
let regionChartObj = null;
let compareChartObj = null;

// ============================================
// FIKR-MULOHAZALAR UCHUN O'ZGARUVCHILAR
// ============================================
let feedbacks = [];

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

function updateStatCards() {
    let last = yillar.length - 1;
    let prev = last - 1;
    document.getElementById('current_aholi').innerHTML = aholi[last].toLocaleString();
    let aChange = ((aholi[last] - aholi[prev]) / aholi[prev] * 100).toFixed(2);
    let aElem = document.getElementById('aholi_change');
    aElem.innerHTML = (aChange > 0 ? '📈 +' : '📉 ') + aChange + '%';
    aElem.className = 'stat-change ' + (aChange > 0 ? 'positive' : 'negative');
    
    document.getElementById('current_bandlik').innerHTML = bandlikFoizi[last];
    let bChange = (bandlikFoizi[last] - bandlikFoizi[prev]).toFixed(2);
    let bElem = document.getElementById('bandlik_change');
    bElem.innerHTML = (bChange > 0 ? '📈 +' : '📉 ') + bChange + '%';
    bElem.className = 'stat-change ' + (bChange > 0 ? 'positive' : 'negative');
    
    document.getElementById('current_kambagal').innerHTML = kambagallikFoizi[last];
    let kChange = (kambagallikFoizi[last] - kambagallikFoizi[prev]).toFixed(2);
    let kElem = document.getElementById('kambagal_change');
    kElem.innerHTML = (kChange > 0 ? '📈 +' : '📉 ') + Math.abs(kChange) + '%';
    kElem.className = 'stat-change ' + (kChange < 0 ? 'positive' : 'negative');
    
    document.getElementById('current_ishsiz').innerHTML = (ishsizlar[last] / 1000).toFixed(1);
    let iChange = ((ishsizlar[last] - ishsizlar[prev]) / ishsizlar[prev] * 100).toFixed(2);
    let iElem = document.getElementById('ishsiz_change');
    iElem.innerHTML = (iChange > 0 ? '📈 +' : '📉 ') + Math.abs(iChange) + '%';
    iElem.className = 'stat-change ' + (iChange < 0 ? 'positive' : 'negative');
}

function updateTable() {
    let html = '';
    for(let i = 0; i < yillar.length; i++) {
        html += `<tr>
            <td>${yillar[i]}</td>
            <td>${aholi[i].toLocaleString()}</td>
            <td>${bandlikFoizi[i]}%</td>
            <td>${kambagallikFoizi[i]}%</td>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = html;
}

// ============================================
// 10 TA IJTIMOIY MASALA
// ============================================
const problems = [
    { name: "Kambag'allik", formula: "P = (N_poor / N_total) × 100%", solution: "Ijtimoiy yordam, ish o'rinlari", get: () => kambagallikFoizi, unit: "%", trend: "down" },
    { name: "Ishsizlik", formula: "U = (Unemployed / Labor_force) × 100%", solution: "Kasb-hunar o'rgatish", get: () => ishsizlar.map((u,i) => (u / mehnatResurslari[i] * 100).toFixed(2)), unit: "%", trend: "down" },
    { name: "Demografik yuk", formula: "DR = (0-14+65+)/15-64 × 100%", solution: "Pensiya islohoti", get: () => [49.2,49.5,49.6,49.7,49.6,49.7], unit: "%", trend: "up" },
    { name: "Bandlik", formula: "ER = (Employed / Labor_force) × 100%", solution: "Tadbirkorlik", get: () => bandlikFoizi, unit: "%", trend: "up" },
    { name: "Pensiya yuki", formula: "PR = (Elderly / Working_age) × 100%", solution: "Pensiya jamg'armasi", get: () => [9.3,9.3,9.3,9.3,9.2,9.2], unit: "%", trend: "up" },
    { name: "Daromad tengsizligi", formula: "Gini = 1 - Σ(p_i)(2Q_i-1)", solution: "Progressiv soliq", get: () => [32.5,32.1,31.8,31.2,30.5,29.8], unit: "ball", trend: "down" },
    { name: "Migratsiya", formula: "NM = Immigration - Emigration", solution: "Mahalliy ish o'rinlari", get: () => [25,17,6,-3,-15,-25], unit: "ming", trend: "down" },
    { name: "Uy-joy ta'minoti", formula: "HR = Housing/Households × 100%", solution: "Ijtimoiy uy-joy", get: () => [93.5,93.7,93.8,94.0,94.1,94.2], unit: "%", trend: "up" },
    { name: "Inson taraqqiyoti", formula: "HDI = (Life+Edu+Income)/3", solution: "Ta'lim va sog'liq", get: () => [71.2,72.1,73.0,73.8,74.5,75.2], unit: "ball", trend: "up" },
    { name: "Aholi zichligi", formula: "D = Population / Area", solution: "Shaharlashtirish", get: () => [77.8,79.4,80.8,82.0,84.5,86.1], unit: "kishi/km²", trend: "up" }
];

function renderProblems() {
    let grid = document.getElementById('problemsGrid');
    if(!grid) return;
    grid.innerHTML = '';
    for(let i = 0; i < problems.length; i++) {
        let p = problems[i];
        let val = p.get();
        let last = val[val.length-1];
        let first = val[0];
        let change = (last - first).toFixed(1);
        grid.innerHTML += `<div class="problem-card"><h3>${i+1}. ${p.name}</h3><div class="formula">📐 ${p.formula}</div><div class="result">${last}${p.unit}</div><div class="${p.trend === 'up' ? 'trend-up' : 'trend-down'}">${p.trend === 'up' ? '📈 +' : '📉 '}${Math.abs(change)}${p.unit}</div><div class="solution">💡 Yechim: ${p.solution}</div></div>`;
    }
}

// ============================================
// GRAFIKLAR (UMUMIY)
// ============================================
const graphs = [
    { name: "Aholi soni", get: () => aholi, color: "#1a73e8", label: "Aholi (ming)" },
    { name: "Kambag'allik", get: () => kambagallikFoizi, color: "#dc3545", label: "Kambag'allik (%)" },
    { name: "Bandlik", get: () => bandlikFoizi, color: "#28a745", label: "Bandlik (%)" },
    { name: "Ishsizlar", get: () => ishsizlar, color: "#fd7e14", label: "Ishsizlar (ming)" }
];

function renderGraphButtons() {
    let container = document.getElementById('graphButtons');
    if(!container) return;
    container.innerHTML = '';
    for(let i = 0; i < graphs.length; i++) {
        let g = graphs[i];
        let btn = document.createElement('button');
        btn.className = 'graph-btn' + (i === 0 ? ' active' : '');
        btn.textContent = g.name;
        btn.onclick = function() {
            document.querySelectorAll('.graph-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateGraph(i);
        };
        container.appendChild(btn);
    }
}

function updateGraph(idx) {
    let g = graphs[idx];
    if(mainChart) mainChart.destroy();
    let ctx = document.getElementById('mainChart').getContext('2d');
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
                fill: true
            }]
        },
        options: { responsive: true }
    });
}

// ============================================
// PROGNOZ
// ============================================
function calculatePrognoz() {
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
    document.getElementById('prognoz_2030').innerHTML = prog2030.toFixed(1);
    
    let cagr = Math.pow(aholi[n-1] / aholi[0], 1/(n-1)) - 1;
    document.getElementById('cagr_prognoz').innerHTML = (aholi[n-1] * (1 + cagr)).toFixed(1);
    
    if(prognozChart) prognozChart.destroy();
    let progYillar = [...yillar, 2026, 2027, 2028, 2029, 2030];
    let linearValues = [...aholi];
    for(let i = n; i < n+5; i++) linearValues.push(intercept + slope * i);
    
    prognozChart = new Chart(document.getElementById('prognozChart'), {
        type: 'line',
        data: {
            labels: progYillar,
            datasets: [
                { label: 'Haqiqiy', data: [...aholi, ...Array(5).fill(null)], borderColor: '#1a73e8', borderWidth: 3 },
                { label: 'Trend', data: linearValues, borderColor: '#ff6d00', borderDash: [5,5], fill: false }
            ]
        },
        options: { responsive: true }
    });
}

// ============================================
// VILOYATLAR FUNKSIYALARI
// ============================================
function renderRegions() {
    let search = document.getElementById('regionSearch')?.value.toLowerCase() || '';
    let year = document.getElementById('regionYearSelect')?.value || 2025;
    let grid = document.getElementById('regionsGrid');
    if(!grid) return;
    
    let filtered = Object.keys(regionsData).filter(r => r.toLowerCase().includes(search));
    grid.innerHTML = '';
    for(let i = 0; i < filtered.length; i++) {
        let region = filtered[i];
        let d = regionsData[region];
        let a = d.aholi[year] || '-';
        let b = d.bandlik[year] || '-';
        let k = d.kambagallik[year] || '-';
        let prev = parseInt(year)-1;
        let change = d.aholi[prev] ? (((a - d.aholi[prev]) / d.aholi[prev]) * 100).toFixed(1) : 0;
        grid.innerHTML += `<div class="region-card" onclick="alert('${region}\n👥 Aholi: ${a} ming\n💼 Bandlik: ${b}%\n📉 Kambag\'allik: ${k}%')">
            <h3>${region}</h3>
            <div class="region-stat"><span>👥 Aholi:</span><span>${a} ming</span></div>
            <div class="region-stat"><span>💼 Bandlik:</span><span>${b}%</span></div>
            <div class="region-stat"><span>📉 Kambag'allik:</span><span>${k}%</span></div>
            <div class="region-trend ${change >= 0 ? 'trend-up' : 'trend-down'}">${change >= 0 ? '📈 +' + change : '📉 ' + Math.abs(change)}%</div>
        </div>`;
    }
    drawRegionChart(year);
}

function drawRegionChart(year) {
    let ctx = document.getElementById('regionChart')?.getContext('2d');
    if(!ctx) return;
    if(regionChartObj) regionChartObj.destroy();
    let regions = Object.keys(regionsData);
    let data = [];
    for(let i = 0; i < regions.length; i++) data.push(regionsData[regions[i]].aholi[year] || 0);
    regionChartObj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [{ label: `Aholi (${year})`, data: data, backgroundColor: '#1a73e8', borderRadius: 8 }]
        },
        options: { responsive: true, indexAxis: 'y', plugins: { legend: { position: 'top' } } }
    });
}

function updateRegionSelects() {
    let regions = Object.keys(regionsData);
    let s1 = document.getElementById('compareRegion1');
    let s2 = document.getElementById('compareRegion2');
    if(s1) {
        s1.innerHTML = '';
        for(let i = 0; i < regions.length; i++) s1.innerHTML += `<option value="${regions[i]}">${regions[i]}</option>`;
    }
    if(s2) {
        s2.innerHTML = '';
        for(let i = 0; i < regions.length; i++) s2.innerHTML += `<option value="${regions[i]}">${regions[i]}</option>`;
    }
    let ys1 = document.getElementById('compareYear1');
    let ys2 = document.getElementById('compareYear2');
    if(ys1) {
        ys1.innerHTML = '';
        for(let i = 0; i < yillar.length; i++) ys1.innerHTML += `<option value="${yillar[i]}">${yillar[i]}</option>`;
    }
    if(ys2) {
        ys2.innerHTML = '';
        for(let i = 0; i < yillar.length; i++) ys2.innerHTML += `<option value="${yillar[i]}">${yillar[i]}</option>`;
    }
    renderCompare();
}

function renderCompare() {
    let r1 = document.getElementById('compareRegion1')?.value;
    let r2 = document.getElementById('compareRegion2')?.value;
    let y1 = document.getElementById('compareYear1')?.value;
    let y2 = document.getElementById('compareYear2')?.value;
    
    if(r1 && regionsData[r1] && y1) {
        let d = regionsData[r1];
        document.getElementById('compareData1').innerHTML = `<strong>${r1}</strong><br>👥 Aholi: ${d.aholi[y1] || '-'} ming<br>💼 Bandlik: ${d.bandlik[y1] || '-'}%<br>📉 Kambag'allik: ${d.kambagallik[y1] || '-'}%<br>📍 Yil: ${y1}`;
    }
    if(r2 && regionsData[r2] && y2) {
        let d = regionsData[r2];
        document.getElementById('compareData2').innerHTML = `<strong>${r2}</strong><br>👥 Aholi: ${d.aholi[y2] || '-'} ming<br>💼 Bandlik: ${d.bandlik[y2] || '-'}%<br>📉 Kambag'allik: ${d.kambagallik[y2] || '-'}%<br>📍 Yil: ${y2}`;
    }
    drawCompareChart(r1, r2, y1, y2);
}

function drawCompareChart(r1, r2, y1, y2) {
    let ctx = document.getElementById('compareChart')?.getContext('2d');
    if(!ctx) return;
    if(compareChartObj) compareChartObj.destroy();
    let labels = ['Aholi (ming)', 'Bandlik (%)', "Kambag'allik (%)"];
    let val1 = [0,0,0];
    let val2 = [0,0,0];
    if(r1 && regionsData[r1] && y1) {
        val1 = [regionsData[r1].aholi[y1] || 0, regionsData[r1].bandlik[y1] || 0, regionsData[r1].kambagallik[y1] || 0];
    }
    if(r2 && regionsData[r2] && y2) {
        val2 = [regionsData[r2].aholi[y2] || 0, regionsData[r2].bandlik[y2] || 0, regionsData[r2].kambagallik[y2] || 0];
    }
    compareChartObj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: r1 || 'Viloyat 1', data: val1, backgroundColor: '#1a73e8' },
                { label: r2 || 'Viloyat 2', data: val2, backgroundColor: '#dc3545' }
            ]
        },
        options: { responsive: true }
    });
}

function renderAllRegionsTable() {
    let tbody = document.getElementById('allRegionsTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    let regions = Object.keys(regionsData);
    for(let i = 0; i < regions.length; i++) {
        let region = regions[i];
        let d = regionsData[region];
        let cells = '';
        for(let y of [2020,2021,2022,2023,2024,2025]) {
            cells += `<td>${d.aholi[y] || '-'} ming<br>${d.bandlik[y] || '-'}%<br>${d.kambagallik[y] || '-'}%</td>`;
        }
        tbody.innerHTML += `<td><td><strong>${region}</strong></td>${cells}</tr>`;
    }
}

function updateRegionSelectForYear() {
    let select = document.getElementById('selectRegionForYear');
    if(select) {
        select.innerHTML = '';
        let regions = Object.keys(regionsData);
        for(let i = 0; i < regions.length; i++) select.innerHTML += `<option value="${regions[i]}">${regions[i]}</option>`;
    }
}

// ============================================
// MA'LUMOTLARNI BOSHQARISH
// ============================================
function saveToLocalStorage() {
    localStorage.setItem('regionsData', JSON.stringify(regionsData));
    alert('✅ Ma\'lumotlar saqlandi!');
}

function loadFromLocalStorage() {
    let saved = localStorage.getItem('regionsData');
    if(saved) {
        regionsData = JSON.parse(saved);
        alert('✅ Ma\'lumotlar yuklandi!');
        refreshAll();
    } else {
        alert('❌ Saqlangan ma\'lumot topilmadi');
    }
}

function resetToDefault() {
    if(confirm('Standart holatga qaytarilsinmi? Barcha o\'zgartirishlar yo\'qoladi!')) {
        location.reload();
    }
}

function refreshAll() {
    renderRegions();
    updateRegionSelects();
    renderAllRegionsTable();
    renderCompare();
}

// ============================================
// FIKR-MULOHAZALAR FUNKSIYALARI
// ============================================

function loadFeedback() {
    let saved = localStorage.getItem('diplom_feedbacks');
    if(saved) {
        feedbacks = JSON.parse(saved);
    } else {
        feedbacks = [
            { name: "Dasturchi", rating: 5, text: "Statistik ma'lumotlar juda foydali va aniq!", date: new Date().toLocaleString() },
            { name: "Foydalanuvchi", rating: 4, text: "Viloyatlar bo'yicha ma'lumotlar ajoyib!", date: new Date().toLocaleString() }
        ];
    }
    renderFeedback();
}

function renderFeedback() {
    let container = document.getElementById('feedbackList');
    let countSpan = document.getElementById('feedbackCount');
    
    if(!container) return;
    
    if(countSpan) countSpan.innerHTML = feedbacks.length;
    
    if(feedbacks.length === 0) {
        container.innerHTML = '<div class="empty-feedback">💬 Hozircha hech qanday fikr qoldirilmagan. Birinchi bo\'lib fikr bildiring!</div>';
        return;
    }
    
    let html = '';
    for(let i = 0; i < feedbacks.length; i++) {
        let f = feedbacks[i];
        let stars = '';
        for(let s = 0; s < 5; s++) {
            stars += s < f.rating ? '⭐' : '☆';
        }
        html += `
            <div class="feedback-item">
                <div class="feedback-item-header">
                    <span class="feedback-name">${escapeHtml(f.name)}</span>
                    <div>
                        <span class="feedback-rating">${stars}</span>
                        <span class="feedback-date">${f.date || 'Hozir'}</span>
                    </div>
                </div>
                <div class="feedback-text">${escapeHtml(f.text)}</div>
                <button class="feedback-delete" onclick="deleteFeedback(${i})">🗑 O'chirish</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

function escapeHtml(text) {
    if(!text) return '';
    return text.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

function addFeedback() {
    let nameInput = document.getElementById('feedbackName');
    let ratingSelect = document.getElementById('feedback
