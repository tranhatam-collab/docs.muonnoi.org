(function(){
  "use strict";

  const $ = (s, el=document)=> el.querySelector(s);

  // Language switch: each language is a separate folder (file set)
  const langSel = $("#langSelect");
  if(langSel){
    langSel.addEventListener("change", ()=>{
      const v = langSel.value;
      if(!v) return;
      window.location.assign(v);
    });
  }

  // Mobile quick menu (simple)
  const menuBtn = $("#menuBtn");
  const menu = $("#menu");
  if(menuBtn && menu){
    menuBtn.addEventListener("click", ()=>{
      const open = menu.getAttribute("data-open")==="1";
      menu.setAttribute("data-open", open ? "0" : "1");
      menu.classList.toggle("open", !open);
      menuBtn.setAttribute("aria-expanded", String(!open));
    });
  }

  // Copy buttons
  document.addEventListener("click", async (e)=>{
    const c = e.target.closest("[data-copy]");
    if(!c) return;
    const id = c.getAttribute("data-copy");
    const el = document.getElementById(id);
    if(!el) return;
    const txt = el.textContent || "";
    try{
      await navigator.clipboard.writeText(txt);
      c.textContent = "Đã copy";
      setTimeout(()=>c.textContent="Copy", 1000);
    }catch(_){
      // fallback
      const ta = document.createElement("textarea");
      ta.value = txt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      c.textContent = "Đã copy";
      setTimeout(()=>c.textContent="Copy", 1000);
    }
  });

})();
