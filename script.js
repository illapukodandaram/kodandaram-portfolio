(function(){
var d=document,r=d.documentElement;
var menu=d.getElementById('menu'),nav=d.getElementById('nav');
menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
d.getElementById('theme').addEventListener('click',function(){
var t=r.getAttribute('data-theme');var dark=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
r.setAttribute('data-theme',dark?'light':'dark')});
var h=d.querySelector('.hero');
h.addEventListener('mousemove',function(e){var b=h.getBoundingClientRect();h.style.setProperty('--mx',(e.clientX-b.left)+'px');h.style.setProperty('--my',(e.clientY-b.top)+'px')});
var els=d.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(x){io.observe(x)})}
else{els.forEach(function(x){x.classList.add('on')})}
var hp=d.querySelector('.photo img');if(hp)d.getElementById('ab').src=hp.src;
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var bar=d.getElementById('bar'),secs=[].slice.call(d.querySelectorAll('main section[id]')),lk=[].slice.call(nav.querySelectorAll('a'));
function sc(){var H=r.scrollHeight-innerHeight;bar.style.width=(H>0?scrollY/H*100:0)+'%';var cur='';secs.forEach(function(s){if(s.getBoundingClientRect().top<innerHeight*.35)cur=s.id});lk.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+cur)})}
addEventListener('scroll',sc,{passive:true});sc();
d.querySelectorAll('.card,.proj').forEach(function(c){c.classList.add('spot');c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect();c.style.setProperty('--px',(e.clientX-b.left)+'px');c.style.setProperty('--py',(e.clientY-b.top)+'px')})});
var ph=d.querySelector('.photo.has');
if(ph&&!rm){ph.addEventListener('mousemove',function(e){var b=ph.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;ph.style.transform='perspective(700px) rotateY('+x*10+'deg) rotateX('+(-y*10)+'deg)'});ph.addEventListener('mouseleave',function(){ph.style.transform=''})}
var ty=d.getElementById('ty'),ws=['Aspiring Software Developer','Full-Stack Learner','Data Science Enthusiast','Problem Solver'];
if(ty&&!rm){var wi=0,ci=0,dl=false;(function tick(){var w=ws[wi];ty.textContent=w.slice(0,ci);if(!dl&&ci<w.length){ci++;setTimeout(tick,70)}else if(!dl){dl=true;setTimeout(tick,1400)}else if(ci>0){ci--;setTimeout(tick,35)}else{dl=false;wi=(wi+1)%ws.length;setTimeout(tick,250)}})()}
var f=d.getElementById('cf');
function v(id,msg,ok){d.getElementById('e'+id).textContent=ok?'':msg;return ok}
f.addEventListener('submit',function(ev){
ev.preventDefault();
var n=f.n.value.trim(),e=f.e.value.trim(),s=f.s.value.trim(),m=f.m.value.trim();
var a=v('n','Enter your name.',n.length>0);
var b=v('e','Enter a valid email address.',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
var c=v('s','Enter a subject.',s.length>0);
var k=v('m','Write a message of at least 10 characters.',m.length>=10);
if(a&&b&&c&&k){
var body='From: '+n+' ('+e+')\n\n'+m;
d.getElementById('ok').textContent='Opening your email app to send the message.';
location.href='mailto:illapukodandaram@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(body);
}});
})();
