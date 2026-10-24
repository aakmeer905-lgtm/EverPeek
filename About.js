const peaks=[
 ['1','Mount Everest','Nepal / China (Tibet)','8,848.86 m'],
 ['2','K2','Pakistan / China','8,611 m'],
 ['3','Kangchenjunga','Nepal / India','8,586 m'],
 ['4','Lhotse','Nepal / China (Tibet)','8,516 m'],
 ['5','Makalu','Nepal / China (Tibet)','8,485 m'],
 ['6','Cho Oyu','Nepal / China (Tibet)','8,188 m'],
 ['7','Dhaulagiri I','Nepal','8,167 m'],
 ['8','Manaslu','Nepal','8,163 m'],
 ['9','Nanga Parbat','Pakistan','8,126 m'],
 ['10','Annapurna I','Nepal','8,091 m'],
 ['11','Gasherbrum I','Pakistan / China','8,080 m'],
 ['12','Broad Peak','Pakistan / China','8,051 m'],
 ['13','Gasherbrum II','Pakistan / China','8,035 m'],
 ['14','Shishapangma','China (Tibet)','8,027 m']
];
const grid=document.getElementById('peaksGrid');
peaks.forEach(p=>{
  const el=document.createElement('article');
  el.className='peak';
  el.innerHTML=`<div class="peak-no">${p[0]}</div><div><h4>${p[1]}</h4><p>${p[2]}</p></div><div class="height">${p[3]}</div>`;
  grid.appendChild(el);
});

const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll',()=>{
  let current='about';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-130) current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
},{passive:true});


/* =====================================================
   VISITOR COUNTER
===================================================== */

// Visitor count starts at zero. A real multi-user visitor counter
// requires a server/database; this page does not fake visitor numbers.
document.getElementById("visitorCount").innerText = "0";


