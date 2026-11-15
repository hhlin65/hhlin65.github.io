(function(){
var a=document.querySelector('.nmb'),m=document.querySelector('.nmm');
if(!a||!m)return;
function close(){m.hidden=true;a.setAttribute('aria-expanded','false')}
a.addEventListener('click',function(e){e.preventDefault();if(!m.hidden){close();return}
 var r=a.getBoundingClientRect();m.hidden=false;m.style.top=(r.bottom+6)+'px';
 var w=m.offsetWidth;m.style.left=Math.max(8,Math.min(r.left,window.innerWidth-w-8))+'px';a.setAttribute('aria-expanded','true')});
document.addEventListener('click',function(e){if(!m.hidden&&!m.contains(e.target)&&e.target!==a)close()});
window.addEventListener('resize',close);window.addEventListener('scroll',close,{passive:true});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();
