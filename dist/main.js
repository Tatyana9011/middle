(()=>{"use strict";const e=e=>{const t=(e,t)=>{e.style.display="block",t&&(e.querySelector(".form-content").innerHTML=`<h4 style="color : red">${t}!</h4>\n      <p>Это учебный проект, потому запросы не работают!</p>`),document.addEventListener("keydown",o)},n=e=>{e.style.display="none",document.removeEventListener("keydown",o)};function o(e){"Escape"===e.code&&n()}const r=e=>{const t=e.querySelector(".close-form"),o=e.querySelector(".overlay"),r=e.querySelector(".close-btn");o.addEventListener("click",(()=>{n(e)})),t.addEventListener("click",(()=>{n(e)})),r.addEventListener("click",(()=>{n(e)}))},c=document.getElementById("thanks");"Заявка отправлена"===e&&(t(c,""),r(c)),"Ошибка запроса"===e&&(t(c,"Ошибка запроса"),r(c))},t=(e,t,n)=>{let o="",r="";r=document.createElement("style"),o=document.createElement("div"),r.innerHTML=`\n      .preloader{\n      width: 100%;\n      text-align: center;\n      color: ${n};\n      margin: 5px 0;\n      }\n    `,document.head.append(r),o.innerHTML=`<div class="preloader">${t}</div>`,document.querySelector(".preloader")||e.insertAdjacentHTML("beforeend",o.outerHTML);const c=document.querySelector(".preloader");c&&(e.addEventListener("change",(()=>{o.innerHTML="",r.innerHTML="",c.remove()})),setTimeout((()=>{o.innerHTML="",r.innerHTML="",c.remove()}),6e3))};(()=>{const e=document.getElementById("card_order"),t=document.querySelector("#price-total"),n={1:1990,6:9900,9:13900,12:19900},o={1:2999,6:14990,9:21990,12:24990};if(t){const r=e.querySelectorAll('input[name="club-name"]'),c=document.querySelector(".time").querySelectorAll("input"),l=document.querySelector('input[placeholder="Промокод"]'),s=(e,r)=>{let c="";"mozaika"===r&&(c=n[e]),"schelkovo"===r&&(c=o[e]),t.textContent=c,"ТЕЛО2020"===l.value&&(t.textContent=c-.3*c)},a=()=>{let e=1,t="mozaika";c.forEach((t=>{t.checked&&(e=t.value)})),r.forEach((e=>{e.checked&&(t=e.value)})),s(e,t)};e.addEventListener("change",(e=>{const t=e.target;(t.matches('input[name="card-type"]')||t.matches('input[name="club-name"]')||t.matches('input[placeholder="Промокод"]'))&&a()}))}})(),(()=>{const e=document.querySelector(".header-main"),t=document.querySelector("#totop"),n=document.querySelector(".top-menu").querySelectorAll("a[href]");t.style.display="none",window.addEventListener("scroll",(()=>{pageYOffset>=612?t.style.display="block":t.style.display="none"})),t.addEventListener("click",(t=>{t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"start"})})),n.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");if("#"!==n){const e=document.querySelector(n);null!==e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}))}))})(),(()=>{let e,t=0;const n=document.querySelector(".gallery-slider"),o=n.querySelectorAll(".slide"),r=document.querySelector(".dots");(()=>{const e=[];for(let t=0;t<o.length;t++)e[t]=document.createElement("li"),e[t].classList.add("dot"),r.append(e[t])})();const c=document.querySelectorAll(".dot");c[0].classList.add("dot-active"),o[0].classList.add("slide-active");const l=(e,t,n)=>{e[t].classList.remove(n)},s=(e,t,n)=>{e[t].classList.add(n)},a=()=>{l(o,t,"slide-active"),l(c,t,"dot-active"),t++,t>=o.length&&(t=0),s(o,t,"slide-active"),s(c,t,"dot-active")},d=(t=3e3)=>{e=setInterval(a,t)};n.addEventListener("click",(e=>{e.preventDefault();const n=e.target;n.matches(".portfolio-btn, .dot")&&(l(o,t,"slide-active"),l(c,t,"dot-active"),n.matches("#arrow-right")?t++:n.matches("#arrow-left")?t--:n.matches(".dot")&&c.forEach(((e,o)=>{e===n&&(t=o)})),t>=o.length&&(t=0),t<0&&(t=o.length-1),s(o,t,"slide-active"),s(c,t,"dot-active"))})),n.addEventListener("mouseover",(t=>{t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),n.addEventListener("mouseout",(e=>{e.target.matches(".portfolio-btn, .dot")&&d(3e3)})),d(3e3)})(),(()=>{const e=document.querySelector(".services-slider"),t=e.querySelector("#arrow-right"),n=e.querySelector("#arrow-left"),o=[...e.querySelectorAll(".slide")];e.style.cssText="\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  ",t.style.top="25% !important",n.style.top="25% !important";const r=()=>{let e=1;document.documentElement.offsetWidth>990?e=4:document.documentElement.offsetWidth>760?e=3:document.documentElement.offsetWidth>680&&(e=2),o.forEach(((t,n)=>{t.style.display=n<e?"block":"none"}))};r();const c=t=>{t.preventDefault();const n=t.target;n.matches("#arrow-left")?(e.prepend(o[o.length-1]),o.unshift(o[o.length-1]),o.pop(),r()):n.matches("#arrow-right")&&(e.append(o[0]),o.push(o[0]),o.shift(),r())};t.addEventListener("click",c),n.addEventListener("click",c),window.addEventListener("resize",r)})(),(()=>{const e=e=>{e.style.display="block",document.addEventListener("keydown",n)},t=e=>{e.style.display="none",document.removeEventListener("keydown",n)};function n(e){"Escape"===e.code&&t()}const o=e=>{const n=e.querySelector(".close-form"),o=e.querySelector(".overlay"),r=e.querySelector(".close-btn");o.addEventListener("click",(()=>{t(e)})),n.addEventListener("click",(()=>{t(e)})),r&&r.addEventListener("click",(()=>{t(e)}))};document.querySelector(".head").addEventListener("click",(t=>{(t=>{if(t.closest(".club-select")){const e=document.querySelector(".clubs-list-menu");"block"===e.style.display?e.style.display="none":e.style.display="block"}if(t.closest(".open-popup")){const t=document.getElementById("free_visit_form");e(t),o(t)}if(t.closest(".callback-btn")){const t=document.getElementById("callback_form");e(t),o(t)}})(t.target)}));const r=document.querySelector(".fixed-gift");r&&r.addEventListener("click",(()=>{const t=document.getElementById("gift");e(t),o(t),r.style.display="none"}))})(),(()=>{const e=document.querySelector(".popup-menu"),t=()=>{e.style.display="none",document.removeEventListener("keydown",n)},n=e=>{"Escape"===e.code&&t()};document.querySelector(".menu-button").addEventListener("click",(()=>{e.style.display="flex",document.addEventListener("keydown",n),(()=>{const n=document.querySelector(".close-menu-btn");e.addEventListener("click",(e=>{e.target.closest("ul")&&t()})),n.addEventListener("click",(()=>{t()}))})()}));const o=()=>{const e=document.querySelector(".top-menu");document.documentElement.clientWidth<=768?e.style.cssText="\n      position: fixed !important;\n      right: 20px !important;":e.style.cssText="\n      position: relative !important;\n      z-index: 1 !important;\n      "};o(),window.addEventListener("resize",o)})(),document.querySelectorAll('input[name="phone"]').forEach((e=>{e.setAttribute("placeholder","+7 (___) ___-__-__"),e.addEventListener("input",(t=>{const n=t.keyCode,o="+7 (___) ___-__-__",r=o.replace(/\D/g,""),c=e.value.replace(/\D/g,"");let l=0,s=o.replace(/[_\d]/g,(e=>l<c.length?c.charAt(l++)||r.charAt(l):e));l=s.indexOf("_"),-1!==l&&(s=s.slice(0,l));let a=o.substr(0,e.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(e.value)||e.value.length<5||n>47&&n<58)&&(e.value=s),"blur"===event.type&&e.value.length<5&&(e.value="")}))})),document.querySelectorAll("form").forEach((e=>{(e=>{const t=e.querySelectorAll('input[name="name"]'),n=e.querySelectorAll("input");n.forEach((e=>{e.removeAttribute("required")}));const o=(e,t)=>{"Промокод"!==e.getAttribute("placeholder")&&(e.value=t.target.value.replace(/[^а-яё ]/gi,""))};t.forEach((e=>e.addEventListener("input",o.bind(void 0,e)))),n.forEach((e=>{e.addEventListener("blur",(t=>{t.preventDefault();const n=t.target;n.matches('input[name="name"]')&&"Промокод"!==n.getAttribute("placeholder")&&((e,t)=>{const n=t.value.trim().replace(/\s{2,}/," ").replace(/^[ |-]/,"").replace(/[-]{2,}/,"-").split(" ");e.value=(e=>{const t=[];for(let n=0;n<e.length;n++)""!==e[n]&&(t[n]=e[n][0].toUpperCase()+e[n].slice(1).toLowerCase());return t})(n).join(" ")})(e,n)}))}))})(e)})),(()=>{const n=document.querySelectorAll("form"),o=n=>{n.preventDefault();const o=n.target;o.insertAdjacentHTML("afterend",'\n  <input type="hidden" name="project_name" value="Site Name">\n  <input type="hidden" name="admin_email" value="tanya.kamyshnikova@gmail.com">\n  <input type="hidden" name="form_subject" value="Form Subject"></input>\n  ');const r=new FormData(o),c={};r.forEach(((e,t)=>{c[t]=e}));var l;(e=>{const n=e.querySelector('input[placeholder="Ваше имя..."]');if(n&&""===n.value)return void t(e,"Введите свое имя","red");const o=e.querySelector('input[name="phone"]');if(o&&18!==o.value.length)return void t(e,"Не верно введен номер телефона","red");const r=e.querySelector("input[type='checkbox']");if(!r||r.checked)return!0;t(e,"Согласитесь на обработку своих персональных данных","red")})(o)&&(t(o,"<img width='40px' alt='preloder' src=./preloader.svg>","green"),(l=c,fetch("./mail.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).then((n=>{if(200!==n.status)throw"error !!! ";document.querySelector(".preloader").remove(),t(o,"Заявка отправлена","green"),e("Заявка отправлена"),o.reset()})).catch((()=>{document.querySelector(".preloader").remove(),t(o,"Ошибка запроса","red"),e("Ошибка запроса"),o.reset()})).then((()=>{o.reset(),setTimeout((()=>{document.querySelector(".preloader").remove();const e=o.closest(".popup");e&&(e.style.display="none")}),3e3)})))};n.forEach((e=>{e.addEventListener("submit",o)}))})(),(()=>{let e=0;const t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide");t.querySelectorAll(".offer-head").forEach((e=>{e.style.cssText="margin-top: 0px"})),t.style.cssText="padding-top: 80px";const o=()=>{n.forEach((e=>{e.style.display="none"})),n[e].style.display="block",e++,e>=n.length&&(e=0),n[e].style.display="none"};((e=3e3)=>{setInterval(o,e)})(3e3)})()})();