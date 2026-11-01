const platforms=[
  ["918KISS","assets/01_918KISS.png"],
  ["MEGA888","assets/02_MEGA888.png"],
  ["PUSSY888","assets/03_PUSSY888.png"],
  ["JOKER GAMING","assets/04_JOKER_GAMING.png"],
  ["Club SunCity","assets/05_Club_SunCity.png"],
  ["Lucky Palace","assets/06_Lucky_Palace.png"],
  ["Newtown Live Casino","assets/07_Newtown_Live_Casino.png"],
  ["Rollex Casino","assets/08_Rollex_Casino.png"],
  ["LIVE22 Metaverse","assets/09_LIVE22_Metaverse.png"]
];
const grid=document.querySelector("#gameGrid");
if(grid){platforms.forEach(([name,src])=>{
 const el=document.createElement("article");
 el.className="game game-art-card";
 const img=document.createElement("img");
 img.src=src; img.alt=name+" — 3D Fantasy Game Card"; img.loading="lazy"; img.decoding="async";
 el.appendChild(img);grid.appendChild(el);
});}
document.querySelectorAll("[data-modal]").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.modal).classList.add("open"));
document.querySelectorAll(".modal").forEach(m=>{m.querySelector(".close").onclick=()=>m.classList.remove("open");m.onclick=e=>{if(e.target===m)m.classList.remove("open")}});
const toast=document.querySelector("#toast");function notify(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)}
document.querySelectorAll("[data-demo]").forEach(b=>b.onclick=()=>notify("UI siap — backend transaksi akan disambungkan pada fasa seterusnya."));
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".topbar nav");toggle.onclick=()=>nav.classList.toggle("open");nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));