const stage=document.getElementById('cardStage');
const openBtn=document.getElementById('openCard');
const closeBtn=document.getElementById('closeCard');
const hint=document.getElementById('hint');
openBtn.addEventListener('click',()=>{
  stage.classList.add('open');
  openBtn.setAttribute('aria-expanded','true');
  closeBtn.hidden=false;
  hint.textContent='Un detallito para ti, con mucho cariño. 🌷';
});
closeBtn.addEventListener('click',()=>{
  stage.classList.remove('open');
  openBtn.setAttribute('aria-expanded','false');
  closeBtn.hidden=true;
  hint.textContent='Toca el botón para abrir las solapas de la tarjeta.';
});
