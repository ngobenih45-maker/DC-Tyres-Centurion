
const waNumber = "27698054980";
function wa(message){ window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`,"_blank"); }
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu"), links=document.querySelector(".nav-links");
  if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
  document.querySelectorAll("[data-wa]").forEach(btn=>btn.addEventListener("click",()=>wa(btn.dataset.wa)));
  document.querySelectorAll(".wa-form").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const service=data.get("service")||"tyre services";
    const name=data.get("name")||"";
    const size=data.get("size")||"";
    wa(`Hello DC Tyres Centurion, I would like to enquire about ${service}.${name?` My name is ${name}.`:""}${size?` Tyre size: ${size}.`:""} Please assist me with availability and pricing.`);
  }));
});
