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
const detailContent={
 welcome:{title:"WELCOME BACK 100%",items:["Minimum Topup: RM30","Min Cuci: ×3","Max Cuci: ×50","Max Bonus: RM388","Slot Game sahaja","Tertakluk kepada kelayakan promosi"]},
 midnight:{title:"MIDNIGHT BONUS 20%",items:["Minimum Deposit: RM10","Slot Game sahaja","Masa dan syarat turnover: sila sahkan dengan Customer Service sebelum tuntutan"]},
 telco:{title:"TELCO TOPUP",items:["Digi Share Credit","Pilihan Pin Reload untuk telco terpilih","Kaedah dan ketersediaan topup: semak dengan Customer Service"]},
 birthday:{title:"BIRTHDAY BONUS 100%",items:["Minimum Deposit: RM10","Full Pay: 100%","Turnover: ×2","Slot Game sahaja"]},
 weekend:{title:"WEEKEND BONUS 20%",items:["Minimum Deposit: RM10","Minimum Cashout: RM50","Turnover minimum: ×2","Turnover maksimum: ×30","1 kali tuntutan sahaja","Slot Game sahaja","Setiap hujung minggu"]},
 daily:{title:"DAILY BONUS 10%",items:["Minimum Deposit: RM10","Full Pay: 100%","Turnover: ×2","Slot Game Only"]},
 tng:{title:"TNG BONUS 15%",items:["Deposit menggunakan TNG eWallet","Bonus: 15%","Full Pay: 100%","Turnover: ×2","Slot Game sahaja"]},
 rebate:{title:"REBATE 5%",items:["Rebate: 5%","Slot Game sahaja","Kekerapan rebate dan syarat tuntutan: semak dengan Customer Service"]},
 recommend:{title:"RECOMMEND 10%",items:["Bonus Recommend: 10%","Kelayakan referral dan syarat tuntutan: semak dengan Customer Service"]},
 deposit:{title:"DEPOSIT CENTRE",items:["Minimum Deposit: RM10","Maximum Deposit: RM1,000","Pilih bank dan platform","Muat naik resit","Satu bonus untuk setiap deposit"]},
 withdraw:{title:"WITHDRAW CENTRE",items:["Minimum Withdraw: RM50","Maximum Withdraw: RM5,000","Satu permohonan Pending pada satu masa","Status: Pending, Approved atau Rejected"]}
};
const detailModal=document.querySelector("#detailModal");
const detailTitle=document.querySelector("#detailTitle");
const detailBody=document.querySelector("#detailBody");
document.querySelectorAll("[data-info]").forEach(button=>button.addEventListener("click",()=>{
 const info=detailContent[button.dataset.info];if(!info)return;
 detailTitle.textContent=info.title;
 detailBody.replaceChildren();
 const list=document.createElement("ul");list.className="detail-list";
 info.items.forEach(item=>{const li=document.createElement("li");li.textContent=item;list.appendChild(li)});
 detailBody.appendChild(list);
 detailModal.classList.add("open");
 detailModal.querySelector(".close").focus();
}));
function closeDetail(){detailModal.classList.remove("open")}
detailModal.querySelector(".close").addEventListener("click",closeDetail);
document.querySelector("#detailClose").addEventListener("click",closeDetail);
detailModal.addEventListener("click",event=>{if(event.target===detailModal)closeDetail()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&detailModal.classList.contains("open"))closeDetail()});

/* Promotion slider: auto advance, arrows, touch scroll and pause on interaction */
const promoSlider=document.querySelector("#promoSlider");
if(promoSlider){
 const promoCards=Array.from(promoSlider.querySelectorAll(".promo-card"));
 const counter=document.querySelector("#promoCounter");
 const pauseButton=document.querySelector("#promoPause");
 let current=0,paused=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 function visibleCount(){return Math.max(1,Math.round(promoSlider.clientWidth/(promoCards[0]?.getBoundingClientRect().width||1)))}
 function updateCounter(){counter.textContent=(current+1)+" / "+promoCards.length}
 function goTo(index){current=(index+promoCards.length)%promoCards.length;promoCards[current].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"});updateCounter()}
 document.querySelector(".promo-prev").addEventListener("click",()=>goTo(current-1));
 document.querySelector(".promo-next").addEventListener("click",()=>goTo(current+1));
 pauseButton.addEventListener("click",()=>{paused=!paused;pauseButton.textContent=paused?"Sambung Auto Slide":"Jeda Auto Slide";pauseButton.setAttribute("aria-pressed",String(paused))});
 promoSlider.addEventListener("scroll",()=>{let best=0,dist=Infinity;promoCards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft-promoSlider.scrollLeft-promoSlider.offsetLeft);if(d<dist){dist=d;best=i}});current=best;updateCounter()},{passive:true});
 promoSlider.addEventListener("pointerenter",()=>promoSlider.dataset.hovered="true");
 promoSlider.addEventListener("pointerleave",()=>delete promoSlider.dataset.hovered);
 promoSlider.addEventListener("focusin",()=>promoSlider.dataset.focused="true");
 promoSlider.addEventListener("focusout",()=>delete promoSlider.dataset.focused);
 document.addEventListener("visibilitychange",()=>{if(document.hidden)promoSlider.dataset.hidden="true";else delete promoSlider.dataset.hidden});
 if(paused){pauseButton.textContent="Sambung Auto Slide";pauseButton.setAttribute("aria-pressed","true")}
 window.setInterval(()=>{if(!paused&&!promoSlider.dataset.hovered&&!promoSlider.dataset.focused&&!promoSlider.dataset.hidden&&!detailModal.classList.contains("open"))goTo(current+1)},4500);
 updateCounter();
}
