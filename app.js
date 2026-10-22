(function(){
'use strict';

/* ---------- Strings (Arabic + French only) ---------- */
var T={
 ar:{
  dir:'rtl', loc:'ar-u-nu-latn', name:'المرساة', tagline:'ثبت رزقك في البحر',
  tabs:['الرئيسية','الصلاة','السجل','الإعدادات'],
  restTitle:function(d){return 'راحة بيولوجية - ممنوع الصيد حتى '+d},
  restOpen:function(d){return 'توقيف بيولوجي قائم منذ '+d},
  scopeL:'يشمل:', penL:'العقوبة:', refer:'التطبيق للتذكير فقط. المرجع هو بلاغ وزارة الصيد (هاتف 45 25 99 70).', since:'يوم منذ البداية', noEnd:'تاريخ النهاية لم يُعلن بعد', expL:'المتوقع (تقدير غير رسمي):', exempt:'مصايد أخرى مستثناة بحسب بلاغ الوزارة (القشريات، النازلي الأسود، سرطان الأعماق، جراد البحر الوردي).',
  left:'يوم متبقٍ', prep:'جهز معداتك للموسم الجديد', unofficial:'تواريخ تجريبية للاختبار فقط',
  today:'نسبة الصيد اليوم', wind:'الرياح', wave:'الموج', moonL:'القمر',
  excellent:'ممتاز', good:'جيد', stay:'لا تخرج', none:'لا توجد بيانات',
  tExc:'ظروف البحر مناسبة للخروج.', tGood:'اخرج بحذر وراقب الرياح.', tBad:'ظروف البحر لا تسمح بالخروج اليوم.',
  tNone:'اضغط تحديث لجلب حالة البحر.', tOld:'البيانات المحفوظة قديمة. حدّثها قبل أن تقرر.',
  danger:'تنبيه خطر: ارتفاع الموج أكثر من 2 متر. لا تخرج إلى البحر.',
  sea:'حالة البحر', seaLearn:'للتعلم فقط خلال فترة الراحة البيولوجية',
  speed:'سرعة الرياح', dirL:'اتجاه الرياح', height:'ارتفاع الموج', from:'قادمة من', period:'فترة الموج',
  kmh:'كم/س', m:'م', s:'ث',
  refresh:'تحديث', loading:'جارٍ التحديث...', updated:function(t){return 'آخر تحديث '+t},
  cached:function(t){return 'بيانات محفوظة من '+t+' (لا اتصال)'}, fail:'تعذّر جلب البيانات. تحقق من الإنترنت.',
  nodata:'لا توجد بيانات بحرية لهذا الموقع. جرّب مدينة ساحلية.', fallbackNote:'الموقع بعيد عن البحر، والبيانات من أقرب نقطة بحرية.',
  card5:'القمر', lit:'إضاءة القمر', moonDark:'ممتاز للصيد الليلي', moonBright:'قمر ساطع، الصيد الليلي أضعف',
  disclaimer:'نسبة الصيد تقدير بسيط ولا تغني عن نشرات الأرصاد الرسمية. قرار الخروج للبحر مسؤوليتك.',
  attr:'بيانات الطقس والبحر: Open-Meteo.com',
  dirs:['شمال','شمال شرق','شرق','جنوب شرق','جنوب','جنوب غرب','غرب','شمال غرب'],
  where:'الموقع', change:'تغيير', gps:'موقعي (GPS)',
  prayer:'أوقات الصلاة', next:'القادمة',
  prayers:['الفجر','الشروق','الظهر','العصر','المغرب','العشاء'],
  qiblaT:'اتجاه القبلة', deg:'درجة من الشمال',
  qNote:'الأوقات بطريقة رابطة العالم الإسلامي، وقد تختلف دقائق عن الرسمية. تعمل بدون إنترنت.',
  compassOn:'تفعيل البوصلة الحية', compassOff:'إيقاف البوصلة الحية', compassWait:'حرّك الهاتف بشكل ثمانية لمعايرتها.',
  compassNo:'جهازك لا يدعم البوصلة الحية. السهم يُظهر الاتجاه من الشمال.', compassDenied:'لم يُسمح بالوصول للبوصلة.',
  log:'سجل الصيد', species:'نوع السمك', weight:'الوزن (كغ)', date:'التاريخ', noteL:'ملاحظة (اختياري)', placeL:'المكان (اختياري)', add:'إضافة للسجل',
  needSpecies:'اكتب نوع السمك.', added:'تمت الإضافة.', empty:'لا توجد رحلات مسجلة بعد. أضف أول صيدة.',
  del:'حذف', sure:'تأكيد؟', total:'هذا الشهر', trips:'صيدة', kg:'كغ', top:'الأكثر',
  logNote:'السجل محفوظ على هاتفك فقط. مسح بيانات المتصفح يحذفه.',
  speciesList:['أخطبوط','دنيس','سول','بوري','جمبري','سبيط','سردين','ثيوف'],
  settings:'الإعدادات', lang:'اللغة', locT:'الموقع', city:'المدينة', useGps:'استخدم موقعي', gpsBusy:'جارٍ تحديد الموقع...',
  gpsFail:'تعذّر تحديد الموقع. اسمح بالوصول للموقع واختر مدينة بدلاً منه.', gpsOk:'تم تحديد موقعك.',
  cities:['نواكشوط','نواذيبو','روصو','أطار','كيفه'],
  low:'وضع النت الضعيف', lowInfo:'يخفي الزخارف والخطوط الخارجية ويقلّل عدد التحديثات لتوفير البيانات على 2G.',
  lowHint:'اتصالك بطيء. فعّل وضع النت الضعيف لتوفير البيانات.', enable:'تفعيل', dismiss:'لاحقاً',
  install:'تثبيت التطبيق', installInfo:'ثبّت المرساة على شاشتك الرئيسية لتعمل كتطبيق.', installIos:'في آيفون: Safari ثم مشاركة ثم إضافة إلى الشاشة الرئيسية.',
  installed:'التطبيق مثبّت.', about:'عن التطبيق', aboutTxt:'المرساة تطبيق مجاني للصياد الموريتاني. نسخة الإطلاق الأولى.'
 },
 fr:{
  dir:'ltr', loc:'fr-FR', name:'Al Marsat', tagline:'Ancre ta richesse en mer',
  tabs:['Accueil','Prière','Journal','Réglages'],
  restTitle:function(d){return 'Repos biologique - pêche interdite jusqu’au '+d},
  restOpen:function(d){return 'Arrêt biologique en cours depuis le '+d},
  scopeL:'Concerne :', penL:'Sanctions :', refer:'L’application sert de rappel. La référence est le communiqué du ministère des Pêches (tél. 45 25 99 70).', since:'jours depuis le début', noEnd:'Date de fin pas encore annoncée', expL:'Prévision (estimation non officielle) :', exempt:'D’autres pêcheries sont exemptées selon le communiqué du ministère (crustacés, merlu noir, crabe profond, crevette rose).',
  left:'jours restants', prep:'Préparez votre matériel pour la nouvelle saison', unofficial:'Dates de test uniquement',
  today:'Chances de pêche aujourd’hui', wind:'Vent', wave:'Houle', moonL:'Lune',
  excellent:'Excellent', good:'Bon', stay:'Ne sortez pas', none:'Pas de données',
  tExc:'Les conditions en mer sont favorables.', tGood:'Sortez avec prudence et surveillez le vent.', tBad:'Les conditions ne permettent pas de sortir aujourd’hui.',
  tNone:'Appuyez sur Actualiser pour charger l’état de la mer.', tOld:'Les données enregistrées sont anciennes. Actualisez avant de décider.',
  danger:'Alerte danger : vagues de plus de 2 m. Ne prenez pas la mer.',
  sea:'État de la mer', seaLearn:'À titre d’information pendant le repos biologique',
  speed:'Vitesse du vent', dirL:'Direction du vent', height:'Hauteur des vagues', from:'Vent de', period:'Période de houle',
  kmh:'km/h', m:'m', s:'s',
  refresh:'Actualiser', loading:'Actualisation...', updated:function(t){return 'Mis à jour à '+t},
  cached:function(t){return 'Données enregistrées de '+t+' (hors ligne)'}, fail:'Impossible de charger les données. Vérifiez la connexion.',
  nodata:'Pas de données marines pour ce lieu. Essayez une ville côtière.', fallbackNote:'Lieu éloigné de la mer, données du point marin le plus proche.',
  card5:'Lune', lit:'Illumination de la lune', moonDark:'Excellent pour la pêche de nuit', moonBright:'Lune brillante, pêche de nuit moins bonne',
  disclaimer:'Le pourcentage est une estimation simple et ne remplace pas les bulletins météo officiels. La décision de sortir en mer vous appartient.',
  attr:'Données météo et marines : Open-Meteo.com',
  dirs:['Nord','Nord-Est','Est','Sud-Est','Sud','Sud-Ouest','Ouest','Nord-Ouest'],
  where:'Lieu', change:'Changer', gps:'Ma position (GPS)',
  prayer:'Horaires de prière', next:'Prochaine',
  prayers:['Fajr','Lever du soleil','Dhuhr','Asr','Maghrib','Isha'],
  qiblaT:'Direction de la Qibla', deg:'degrés depuis le Nord',
  qNote:'Horaires selon la Ligue islamique mondiale, ils peuvent différer de quelques minutes des horaires officiels. Fonctionne hors ligne.',
  compassOn:'Activer la boussole en direct', compassOff:'Arrêter la boussole', compassWait:'Faites un huit avec le téléphone pour la calibrer.',
  compassNo:'Votre appareil ne prend pas en charge la boussole. La flèche indique la direction depuis le Nord.', compassDenied:'Accès à la boussole refusé.',
  log:'Journal de pêche', species:'Espèce', weight:'Poids (kg)', date:'Date', noteL:'Note (facultatif)', placeL:'Lieu (facultatif)', add:'Ajouter au journal',
  needSpecies:'Saisissez l’espèce.', added:'Ajouté.', empty:'Aucune sortie enregistrée. Ajoutez votre première prise.',
  del:'Supprimer', sure:'Confirmer ?', total:'Ce mois-ci', trips:'prises', kg:'kg', top:'Principale',
  logNote:'Le journal est enregistré uniquement sur votre téléphone. Effacer les données du navigateur le supprime.',
  speciesList:['Poulpe','Dorade','Sole','Mulet','Crevette','Seiche','Sardine','Thiof'],
  settings:'Réglages', lang:'Langue', locT:'Lieu', city:'Ville', useGps:'Utiliser ma position', gpsBusy:'Localisation en cours...',
  gpsFail:'Position introuvable. Autorisez la localisation ou choisissez une ville.', gpsOk:'Position trouvée.',
  cities:['Nouakchott','Nouadhibou','Rosso','Atar','Kiffa'],
  low:'Mode réseau faible', lowInfo:'Masque les décorations et les polices externes et réduit les actualisations pour économiser des données en 2G.',
  lowHint:'Votre connexion est lente. Activez le mode réseau faible pour économiser des données.', enable:'Activer', dismiss:'Plus tard',
  install:'Installer l’application', installInfo:'Installez Al Marsat sur votre écran d’accueil pour l’utiliser comme une application.', installIos:'Sur iPhone : Safari, Partager, Sur l’écran d’accueil.',
  installed:'Application installée.', about:'À propos', aboutTxt:'Al Marsat est une application gratuite pour le pêcheur mauritanien. Première version.'
 }
};

/* Onshore coordinates (prayer) and an offshore point (sea data). Offshore points are approximate. */
var CITIES=[
 {lat:18.0735,lng:-15.9582,sea:[18.10,-16.40]},
 {lat:20.9310,lng:-17.0347,sea:[20.85,-17.30]},
 {lat:16.5139,lng:-15.8056,sea:null},
 {lat:20.5169,lng:-13.0499,sea:null},
 {lat:16.6167,lng:-11.4000,sea:null}
];
var SEA_POINTS=[CITIES[0],CITIES[1]];

/* ---------- State and storage ---------- */
var KEY='marsat.v1';
var S={lang:'ar',tab:0,city:0,mode:'city',gps:null,low:false,log:[],sea:null,lowHintOff:false,
       cfg:{showUnofficial:false,restPeriods:[],seaTtlMinutes:30},
       status:'',statusKind:'',busy:false,heading:null,compass:false,msg:{}};
try{
  var sv=JSON.parse(localStorage.getItem(KEY)||'{}');
  if(sv.lang==='fr'||sv.lang==='ar')S.lang=sv.lang;
  if(typeof sv.city==='number'&&CITIES[sv.city])S.city=sv.city;
  if(sv.mode==='gps'&&sv.gps)S.mode='gps';
  if(sv.gps&&typeof sv.gps.lat==='number')S.gps=sv.gps;
  S.low=!!sv.low; S.lowHintOff=!!sv.lowHintOff;
  if(Array.isArray(sv.log))S.log=sv.log;
  if(sv.sea&&typeof sv.sea.t==='number')S.sea=sv.sea;
}catch(e){}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify({lang:S.lang,city:S.city,mode:S.mode,gps:S.gps,low:S.low,lowHintOff:S.lowHintOff,log:S.log,sea:S.sea}))}catch(e){}
}
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function L(){return T[S.lang]}
function pad(n){return (n<10?'0':'')+n}
function fmtClock(ts){return new Date(ts).toLocaleTimeString(L().loc,{hour:'2-digit',minute:'2-digit'})}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}

/* ---------- Location ---------- */
function coords(){return S.mode==='gps'&&S.gps?{lat:S.gps.lat,lng:S.gps.lng}:{lat:CITIES[S.city].lat,lng:CITIES[S.city].lng}}
function placeName(){return S.mode==='gps'&&S.gps?L().gps:L().cities[S.city]}
function distKm(a,b,c,d){var R=6371,p=Math.PI/180,x=(c-a)*p,y=(d-b)*p*Math.cos((a+c)/2*p);return R*Math.sqrt(x*x+y*y)}
function seaCandidates(){
  var list=[], c=coords();
  if(S.mode==='gps'&&S.gps)list.push({p:[c.lat,c.lng],fallback:false});
  else if(CITIES[S.city].sea)list.push({p:CITIES[S.city].sea,fallback:false});
  var near=SEA_POINTS.slice().sort(function(a,b){return distKm(c.lat,c.lng,a.lat,a.lng)-distKm(c.lat,c.lng,b.lat,b.lng)})[0];
  var same=list.length&&list[0].p[0]===near.sea[0]&&list[0].p[1]===near.sea[1];
  if(!same)list.push({p:near.sea,fallback:true});
  return list;
}

/* ---------- Rest period ---------- */
function parseD(s){var p=(s||'').split('-');return p.length===3?new Date(+p[0],+p[1]-1,+p[2]):null}
function restInfo(){
  var now=new Date(), t=new Date(now.getFullYear(),now.getMonth(),now.getDate()), ps=S.cfg.restPeriods||[];
  for(var i=0;i<ps.length;i++){
    var a=parseD(ps[i].start), open=!ps[i].end, b=open?new Date(9999,0,1):parseD(ps[i].end);
    if(!a||!b||isNaN(a)||isNaN(b)||b<a)continue;
    if(t>=a&&t<=b&&(ps[i].official||S.cfg.showUnofficial))
      return {active:true,open:open,start:a,end:b,days:open?Math.round((t-a)/86400000)+1:Math.round((b-t)/86400000)+1,official:!!ps[i].official,scope:{ar:ps[i].scope_ar||'',fr:ps[i].scope_fr||''},penalty:{ar:ps[i].penalty_ar||'',fr:ps[i].penalty_fr||''},expected:{ar:ps[i].expected_ar||'',fr:ps[i].expected_fr||''}};
  }
  return {active:false};
}

/* ---------- Moon (computed offline) ---------- */
var SYN=29.530588853, REF=Date.UTC(2000,0,6,18,14);
function moonAge(d){var a=((d.getTime()-REF)/86400000)%SYN;return a<0?a+SYN:a}
function moonIllum(age){return (1-Math.cos(2*Math.PI*age/SYN))/2}
function moonPath(age){
  var p=age/SYN,r=40,c=50,k=Math.cos(2*Math.PI*p),rx=Math.abs(k)*r,sw=k>0?0:1;
  if(p<0.5)return 'M'+c+' '+(c-r)+' A'+r+' '+r+' 0 0 1 '+c+' '+(c+r)+' A'+rx.toFixed(2)+' '+r+' 0 0 '+sw+' '+c+' '+(c-r)+'Z';
  return 'M'+c+' '+(c-r)+' A'+r+' '+r+' 0 0 0 '+c+' '+(c+r)+' A'+rx.toFixed(2)+' '+r+' 0 0 '+sw+' '+c+' '+(c-r)+'Z';
}

/* ---------- Fishing score ---------- */
function score(wind,wave,illum){
  var w=wind<=15?0:(wind<=25?(wind-15)*2:20+(wind-25)*4);
  var h=wave<=0.8?0:(wave<=1.5?(wave-0.8)*30:21+(wave-1.5)*60);
  var m=illum<0.4?5:(illum>0.8?-5:0);
  var v=Math.max(0,Math.min(100,Math.round(100-w-h+m)));
  if(wave>2)v=Math.min(v,20);
  return {v:v,w:Math.round(w),h:Math.round(h),m:m};
}

/* ---------- Qibla and prayer times (offline, astronomical) ---------- */
var RAD=Math.PI/180;
function fix24(h){h=h%24;return h<0?h+24:h}
function fix360(a){a=a%360;return a<0?a+360:a}
function qibla(lat,lng){
  var p1=lat*RAD,p2=21.4225*RAD,dl=(39.8262-lng)*RAD;
  return fix360(Math.atan2(Math.sin(dl)*Math.cos(p2),Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl))/RAD);
}
function prayerTimes(lat,lng,date,tz){
  var D=(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),12)-Date.UTC(2000,0,1,12))/86400000;
  var g=fix360(357.529+0.98560028*D), q=fix360(280.459+0.98564736*D);
  var Lm=fix360(q+1.915*Math.sin(g*RAD)+0.020*Math.sin(2*g*RAD));
  var e=23.439-0.00000036*D;
  var RA=fix24(Math.atan2(Math.cos(e*RAD)*Math.sin(Lm*RAD),Math.cos(Lm*RAD))/RAD/15);
  var dec=Math.asin(Math.sin(e*RAD)*Math.sin(Lm*RAD))/RAD;
  var eqt=q/15-RA; eqt=eqt>12?eqt-24:(eqt<-12?eqt+24:eqt);
  var noon=12-lng/15-eqt+tz;
  function ang(a){var c=(-Math.sin(a*RAD)-Math.sin(dec*RAD)*Math.sin(lat*RAD))/(Math.cos(dec*RAD)*Math.cos(lat*RAD));return Math.acos(Math.max(-1,Math.min(1,c)))/RAD/15}
  var asrA=-Math.atan(1/(1+Math.tan(Math.abs(lat-dec)*RAD)))/RAD;
  return [noon-ang(18),noon-ang(0.833),noon,noon+ang(asrA),noon+ang(0.833),noon+ang(17)];
}
function fmtT(h){h=fix24(h);var m=Math.round((h-Math.floor(h))*60),H=Math.floor(h);if(m===60){m=0;H=(H+1)%24}return pad(H)+':'+pad(m)}

/* ---------- Sea data (Open-Meteo) ---------- */
function getJSON(url,ms){
  var ctl=typeof AbortController==='function'?new AbortController():null, to=setTimeout(function(){if(ctl)ctl.abort()},ms||10000);
  return fetch(url,ctl?{signal:ctl.signal}:{}).then(function(r){clearTimeout(to);if(!r.ok)throw new Error('http '+r.status);return r.json()},function(e){clearTimeout(to);throw e});
}
function fetchAt(p){
  var la=p[0].toFixed(3), lo=p[1].toFixed(3);
  var marine='https://marine-api.open-meteo.com/v1/marine?latitude='+la+'&longitude='+lo+'&current=wave_height,wave_direction,wave_period&timezone=auto';
  var wind='https://api.open-meteo.com/v1/forecast?latitude='+la+'&longitude='+lo+'&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh&timezone=auto';
  return Promise.all([getJSON(marine),getJSON(wind)]).then(function(r){
    var m=r[0]&&r[0].current, w=r[1]&&r[1].current;
    if(!m||m.wave_height==null||!w||w.wind_speed_10m==null)return null;
    return {t:Date.now(),lat:p[0],lng:p[1],wind:Math.round(w.wind_speed_10m),windDir:Math.round(w.wind_direction_10m||0),
            wave:Math.round(m.wave_height*10)/10,waveDir:Math.round(m.wave_direction||0),period:m.wave_period==null?null:Math.round(m.wave_period)};
  });
}
function refreshSea(force){
  var ttl=(S.low?180:(S.cfg.seaTtlMinutes||30))*60000;
  if(S.busy)return;
  if(!force&&S.sea&&Date.now()-S.sea.t<ttl){setStatus();return}
  if(navigator.onLine===false){setStatus();return}
  S.busy=true; S.status=L().loading; S.statusKind='busy'; paintStatus();
  var cands=seaCandidates(), i=0, sawNet=false;
  function next(){
    if(i>=cands.length){
      S.busy=false; S.statusKind=sawNet?'fail':'nodata'; S.status=sawNet?L().fail:L().nodata; paintStatus(); updateHome(); return;
    }
    var c=cands[i++];
    fetchAt(c.p).then(function(d){
      if(!d){next();return}
      d.fallback=c.fallback;
      S.sea=d; S.busy=false; save(); setStatus(); updateHome();
    },function(){sawNet=true;next()});
  }
  next();
}
function setStatus(){
  var l=L();
  if(S.sea){
    var fresh=Date.now()-S.sea.t<2*3600000;
    S.statusKind=fresh?'ok':'cached';
    S.status=fresh?l.updated(fclock(S.sea.t)):l.cached(fclock(S.sea.t));
  }else{S.statusKind='none';S.status=''}
  paintStatus();
}
function fclock(ts){return fmtClock(ts)}
function paintStatus(){
  var el=$('seaStatus'); if(el)el.textContent=S.status;
  var b=$('bRefresh'); if(b)b.disabled=S.busy;
}

/* ---------- Build UI ---------- */
function logoSvg(){
  return '<img src="icon-192.png" width="42" height="42" alt="" style="border-radius:10px">';
}
function build(){
  var t=L();
  document.documentElement.lang=S.lang; document.documentElement.dir=t.dir;
  document.title=t.name+' Al Marsat';
  document.body.classList.toggle('low',S.low);
  var spOpts=t.speciesList.map(function(s){return '<option value="'+esc(s)+'"></option>'}).join('');
  var cityOpts=t.cities.map(function(c,i){return '<option value="'+i+'"'+(S.mode==='city'&&i===S.city?' selected':'')+'>'+c+'</option>'}).join('');
  $('app').innerHTML=
  '<header><div class="brand">'+logoSvg()+'<div><h1>'+t.name+'</h1><small>'+t.tagline+'</small></div></div>'+
   '<div class="lang" role="group" aria-label="Langue"><button id="bAr" type="button" aria-pressed="'+(S.lang==='ar')+'">العربية</button><button id="bFr" type="button" aria-pressed="'+(S.lang==='fr')+'">Français</button></div></header>'+

  '<div class="tab" id="tab0">'+
   '<div id="hint"></div><div id="restBox"></div>'+
   '<div class="bar"><span id="seaStatus" aria-live="polite"></span><button class="btn ghost" id="bRefresh" type="button">'+t.refresh+'</button></div>'+
   '<section class="card" id="scoreCard"><div class="row"><h2>'+t.today+'</h2><span class="tag" id="placeTag"></span></div>'+
    '<div class="gauge"><svg viewBox="0 0 120 120" role="img" aria-label="'+t.today+'"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--tint)" stroke-width="12"/><circle id="arc" cx="60" cy="60" r="52" fill="none" stroke="var(--good)" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="0 327"/><text id="pct" x="60" y="68" text-anchor="middle" font-size="28" font-weight="700" fill="var(--ink)" font-family="Tajawal,sans-serif">--</text></svg>'+
    '<div class="txt"><p class="verdict" id="verdict"></p><p class="sub" id="vtext"></p></div></div>'+
    '<ul class="factors"><li><span>'+t.wind+'</span><span id="fw">-</span></li><li><span>'+t.wave+'</span><span id="fh">-</span></li><li><span>'+t.moonL+'</span><span id="fm">-</span></li></ul></section>'+
   '<div class="danger" id="danger" role="alert" hidden>'+t.danger+'</div>'+
   '<section class="card"><h2>'+t.sea+'</h2><p class="sub" id="seaSub"></p>'+
    '<div class="grid3"><div class="stat"><b id="sWind">-</b><small>'+t.speed+'</small></div><div class="stat"><b id="sWave">-</b><small>'+t.height+'</small></div><div class="stat"><b id="sPer">-</b><small>'+t.period+'</small></div></div>'+
    '<div class="compass"><svg class="deco" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" fill="var(--tint)" stroke="var(--line)" stroke-width="2"/><g font-size="11" fill="var(--muted)" text-anchor="middle" font-family="Tajawal,sans-serif"><text x="50" y="17">N</text><text x="50" y="92">S</text><text x="88" y="54">E</text><text x="12" y="54">W</text></g><g id="arrow"><path d="M50 22v50M50 72l-9-12M50 72l9-12" fill="none" stroke="var(--primary)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'+
    '<div><b id="dirName" style="font-size:1.05rem">-</b><p class="sub" id="dirSub"></p></div></div>'+
    '<p class="note" id="seaNote" style="margin-top:10px"></p></section>'+
   '<section class="card"><h2>'+t.card5+'</h2><div class="moon" style="margin-top:10px"><svg class="deco" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="var(--tint)" stroke="var(--line)" stroke-width="2"/><path id="moonP" fill="var(--primary)"/></svg>'+
    '<div><b id="mPct"></b><p class="sub">'+t.lit+'</p><p style="margin:4px 0 0;font-weight:700" id="mTxt"></p></div></div></section>'+
   '<p class="note">'+t.disclaimer+'</p><p class="note">'+t.attr+'</p>'+
  '</div>'+

  '<div class="tab" id="tab1" hidden>'+
   '<section class="card"><div class="row"><h2>'+t.prayer+'</h2><span class="tag" id="placeTag2"></span></div><ul class="times" id="times"></ul></section>'+
   '<section class="card"><h2>'+t.qiblaT+'</h2><div class="qibla"><svg class="deco" viewBox="0 0 120 120" aria-hidden="true"><g id="dial"><circle cx="60" cy="60" r="54" fill="var(--tint)" stroke="var(--line)" stroke-width="2"/><g font-size="12" fill="var(--muted)" text-anchor="middle" font-family="Tajawal,sans-serif"><text x="60" y="19">N</text><text x="60" y="110">S</text><text x="105" y="64">E</text><text x="15" y="64">W</text></g><g id="qArrow"><path d="M60 26v62" stroke="var(--primary)" stroke-width="5" stroke-linecap="round"/><path d="M60 18l-10 16h20z" fill="var(--primary)"/></g></g><circle cx="60" cy="60" r="5" fill="var(--primary)"/></svg>'+
    '<div><b id="qDeg"></b><p class="sub">'+t.deg+'</p></div></div>'+
    '<div class="btns"><button class="btn ghost" id="bCompass" type="button">'+t.compassOn+'</button></div>'+
    '<p class="note" id="cNote" style="margin-top:10px"></p><p class="note" style="margin-top:10px">'+t.qNote+'</p></section>'+
  '</div>'+

  '<div class="tab" id="tab2" hidden>'+
   '<section class="card"><h2>'+t.log+'</h2>'+
    '<label class="field" for="fSpecies">'+t.species+'<input id="fSpecies" type="text" list="spList" autocomplete="off" maxlength="40"></label><datalist id="spList">'+spOpts+'</datalist>'+
    '<div class="two"><label class="field" for="fKg">'+t.weight+'<input id="fKg" type="number" inputmode="decimal" min="0" step="0.1"></label>'+
    '<label class="field" for="fDate">'+t.date+'<input id="fDate" type="date" value="'+todayStr()+'"></label></div>'+
    '<label class="field" for="fPlace">'+t.placeL+'<input id="fPlace" type="text" maxlength="60"></label>'+
    '<label class="field" for="fNote">'+t.noteL+'<input id="fNote" type="text" maxlength="120"></label>'+
    '<div class="btns"><button class="btn" id="bAdd" type="button">'+t.add+'</button></div><div id="logMsg" aria-live="polite"></div></section>'+
   '<section class="card" id="logSummary"></section>'+
   '<section class="card"><ul class="entries" id="entries" style="margin-top:0"></ul><p class="note" style="margin-top:12px">'+t.logNote+'</p></section>'+
  '</div>'+

  '<div class="tab" id="tab3" hidden>'+
   '<section class="card"><h2>'+t.locT+'</h2>'+
    '<label class="field" for="citySel">'+t.city+'<select id="citySel">'+(S.mode==='gps'?'<option value="gps" selected>'+t.gps+'</option>':'')+cityOpts+'</select></label>'+
    '<div class="btns"><button class="btn ghost" id="bGps" type="button">'+t.useGps+'</button></div><div id="gpsMsg" aria-live="polite"></div></section>'+
   '<section class="card"><h2>'+t.low+'</h2><label class="switch" for="lowSw"><input id="lowSw" type="checkbox"'+(S.low?' checked':'')+'><span>'+t.low+'</span></label><p class="note" style="margin-top:8px">'+t.lowInfo+'</p></section>'+
   '<section class="card" id="installCard"><h2>'+t.install+'</h2><p class="sub">'+t.installInfo+'</p><div class="btns"><button class="btn" id="bInstall" type="button" hidden>'+t.install+'</button></div><p class="note" id="iosNote" style="margin-top:8px" hidden>'+t.installIos+'</p></section>'+
   '<section class="card"><h2>'+t.about+'</h2><p class="sub">'+t.aboutTxt+'</p><p class="note" style="margin-top:8px">'+t.attr+'</p></section>'+
  '</div>'+

  '<nav class="tabs" aria-label="Navigation"><div class="in">'+t.tabs.map(function(n,i){return '<button type="button" data-go="'+i+'">'+n+'</button>'}).join('')+'</div></nav>';

  $('bAr').onclick=function(){S.lang='ar';save();rebuild()};
  $('bFr').onclick=function(){S.lang='fr';save();rebuild()};
  $('bRefresh').onclick=function(){refreshSea(true)};
  $('citySel').onchange=function(){
    if(this.value==='gps')return;
    S.mode='city';S.city=+this.value;S.sea=null;save();rebuild();refreshSea(true);
  };
  $('bGps').onclick=useGps;
  $('lowSw').onchange=function(){S.low=this.checked;save();document.body.classList.toggle('low',S.low);updateHint()};
  $('bAdd').onclick=addEntry;
  $('bCompass').onclick=toggleCompass;
  $('bInstall').onclick=doInstall;
  Array.prototype.forEach.call(document.querySelectorAll('[data-go]'),function(b){b.onclick=function(){S.tab=+b.getAttribute('data-go');showTab();window.scrollTo(0,0)}});
  if(deferredPrompt)$('bInstall').hidden=false;
  if(isIos()&&!isStandalone())$('iosNote').hidden=false;
  if(isStandalone()){$('installCard').querySelector('.sub').textContent=t.installed}
}
function rebuild(){stopCompass();build();showTab();updateAll();setStatus();}

function showTab(){
  for(var i=0;i<4;i++)$('tab'+i).hidden=(S.tab!==i);
  Array.prototype.forEach.call(document.querySelectorAll('[data-go]'),function(b){
    if(+b.getAttribute('data-go')===S.tab)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
  });
}

/* ---------- Updates ---------- */
function updateHint(){
  var el=$('hint'); if(!el)return; var t=L(), h='';
  var c=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
  var slow=c&&(c.saveData||c.effectiveType==='2g'||c.effectiveType==='slow-2g');
  if(slow&&!S.low&&!S.lowHintOff){
    h='<div class="msg row" style="margin:0"><span>'+t.lowHint+'</span><span class="btns" style="margin:0"><button class="btn" id="hEnable" type="button">'+t.enable+'</button><button class="btn ghost" id="hOff" type="button">'+t.dismiss+'</button></span></div>';
  }
  el.innerHTML=h;
  if($('hEnable'))$('hEnable').onclick=function(){S.low=true;save();rebuild();refreshSea(false)};
  if($('hOff'))$('hOff').onclick=function(){S.lowHintOff=true;save();updateHint()};
}
function updateHome(){
  if(!$('arc'))return;
  var t=L(), r=restInfo(), d=S.sea, now=new Date(), age=moonAge(now), il=moonIllum(age);
  var fresh=d&&(Date.now()-d.t<6*3600000);
  var idx=d?Math.round(d.windDir/45)%8:0;
  $('placeTag').textContent=placeName();

  if(r.active){
    var fm={day:'numeric',month:'long',year:'numeric'};
    var sc=(S.lang==='fr'?r.scope.fr:r.scope.ar);
    var head=r.open?t.restOpen(r.start.toLocaleDateString(t.loc,fm)):t.restTitle(r.end.toLocaleDateString(t.loc,fm));
    var cnt=r.open?'<div class="count"><b>'+r.days+'</b><span>'+t.since+'</span></div>':'<div class="count"><b>'+r.days+'</b><span>'+t.left+'</span></div>';
    $('restBox').innerHTML='<div class="rest"><h2>'+esc(head)+'</h2>'+cnt+
      (sc?'<p><b>'+t.scopeL+'</b> '+esc(sc)+'</p><p class="note">'+t.exempt+'</p>':'<p>'+t.prep+'</p>')+
      (r.penalty[S.lang==='fr'?'fr':'ar']?'<p class="note"><b>'+t.penL+'</b> '+esc(r.penalty[S.lang==='fr'?'fr':'ar'])+'</p>':'')+(sc?'<p class="note">'+t.refer+'</p>':'')+
      (r.open&&r.expected[S.lang==='fr'?'fr':'ar']?'<p class="note"><b>'+t.expL+'</b> '+esc(r.expected[S.lang==='fr'?'fr':'ar'])+'</p>':'')+(r.open?'<p><span class="tag warn">'+t.noEnd+'</span></p>':'')+
      (r.official?'':'<p><span class="tag warn">'+t.unofficial+'</span></p>')+'</div>';
  }else $('restBox').innerHTML='';
  $('scoreCard').hidden=r.active&&!(r.scope.ar||r.scope.fr);
  $('seaSub').textContent=(r.active&&!(r.scope.ar||r.scope.fr))?t.seaLearn:'';

  var vd=$('verdict'), arc=$('arc');
  if(d&&fresh){
    var sc=score(d.wind,d.wave,il), cls=sc.v>=70?'good':(sc.v>=45?'mid':'bad');
    arc.setAttribute('stroke-dasharray',(327*sc.v/100).toFixed(1)+' 327');
    arc.setAttribute('stroke',cls==='good'?'var(--good)':(cls==='mid'?'var(--warn)':'var(--bad)'));
    $('pct').textContent=sc.v+'%'; vd.className='verdict '+cls;
    vd.textContent=cls==='good'?t.excellent:(cls==='mid'?t.good:t.stay);
    $('vtext').textContent=cls==='good'?t.tExc:(cls==='mid'?t.tGood:t.tBad);
    var sg=function(n){return n>0?'+'+n:(n<0?'−'+Math.abs(n):'0')};
    $('fw').textContent=sg(-sc.w);$('fh').textContent=sg(-sc.h);$('fm').textContent=sg(sc.m);
  }else{
    arc.setAttribute('stroke-dasharray','0 327'); $('pct').textContent='--';
    vd.className='verdict none'; vd.textContent=t.none; $('vtext').textContent=d?t.tOld:t.tNone;
    $('fw').textContent='-';$('fh').textContent='-';$('fm').textContent='-';
  }
  $('danger').hidden=!(d&&fresh&&d.wave>2);

  if(d){
    $('sWind').textContent=d.wind+' '+t.kmh; $('sWave').textContent=d.wave.toFixed(1)+' '+t.m;
    $('sPer').textContent=d.period==null?'-':d.period+' '+t.s;
    $('dirName').textContent=t.dirs[idx]; $('dirSub').textContent=t.from+' '+t.dirs[idx]+' ('+d.windDir+'°)';
    $('arrow').setAttribute('transform','rotate('+((d.windDir+180)%360)+' 50 50)');
    $('seaNote').textContent=d.fallback?t.fallbackNote:'';
  }else{
    $('sWind').textContent='-';$('sWave').textContent='-';$('sPer').textContent='-';
    $('dirName').textContent='-';$('dirSub').textContent='';$('seaNote').textContent='';
  }
  $('moonP').setAttribute('d',moonPath(age));
  $('mPct').textContent=Math.round(il*100)+'%';
  $('mTxt').textContent=il<0.4?t.moonDark:t.moonBright;
}
function updatePrayer(){
  if(!$('times'))return;
  var t=L(), c=coords(), now=new Date(), tz=-now.getTimezoneOffset()/60;
  var pt=prayerTimes(c.lat,c.lng,now,tz), nowH=now.getHours()+now.getMinutes()/60, nx=-1;
  for(var i=0;i<6;i++){if(i!==1&&fix24(pt[i])>nowH){nx=i;break}}
  if(nx<0)nx=0;
  $('placeTag2').textContent=placeName();
  $('times').innerHTML=t.prayers.map(function(n,i){return '<li'+(i===nx?' class="next"':'')+'><span>'+n+(i===nx?' • '+t.next:'')+'</span><span>'+fmtT(pt[i])+'</span></li>'}).join('');
  var qd=qibla(c.lat,c.lng); S.qd=qd;
  $('qDeg').textContent=Math.round(qd)+'°';
  paintQibla();
}
function paintQibla(){
  var qa=$('qArrow'), dial=$('dial'); if(!qa)return;
  var qd=S.qd||0;
  if(S.compass&&S.heading!=null){
    dial.setAttribute('transform','rotate('+(-S.heading).toFixed(1)+' 60 60)');
    qa.setAttribute('transform','rotate('+qd.toFixed(1)+' 60 60)');
  }else{
    dial.removeAttribute('transform'); qa.setAttribute('transform','rotate('+qd.toFixed(1)+' 60 60)');
  }
}
function updateAll(){updateHint();updateHome();updatePrayer();renderLog()}

/* ---------- Live compass ---------- */
function onOrient(e){
  var h=null;
  if(typeof e.webkitCompassHeading==='number')h=e.webkitCompassHeading;
  else if(e.absolute===true&&typeof e.alpha==='number')h=360-e.alpha;
  else if(e.type==='deviceorientationabsolute'&&typeof e.alpha==='number')h=360-e.alpha;
  if(h==null)return;
  S.heading=fix360(h); paintQibla();
}
function stopCompass(){
  S.compass=false; S.heading=null;
  window.removeEventListener('deviceorientationabsolute',onOrient,true);
  window.removeEventListener('deviceorientation',onOrient,true);
}
function toggleCompass(){
  var t=L(), note=$('cNote'), btn=$('bCompass');
  if(S.compass){stopCompass();btn.textContent=t.compassOn;note.textContent='';paintQibla();return}
  function start(){
    S.compass=true; btn.textContent=t.compassOff; note.textContent=t.compassWait;
    window.addEventListener('deviceorientationabsolute',onOrient,true);
    window.addEventListener('deviceorientation',onOrient,true);
    setTimeout(function(){if(S.compass&&S.heading==null){stopCompass();btn.textContent=t.compassOn;note.textContent=t.compassNo}},2500);
  }
  if(typeof DeviceOrientationEvent==='undefined'){note.textContent=t.compassNo;return}
  if(typeof DeviceOrientationEvent.requestPermission==='function'){
    DeviceOrientationEvent.requestPermission().then(function(r){if(r==='granted')start();else note.textContent=t.compassDenied},function(){note.textContent=t.compassDenied});
  }else start();
}

/* ---------- Fishing log ---------- */
function monthKey(s){return (s||'').slice(0,7)}
function renderLog(){
  var t=L(), el=$('entries'); if(!el)return;
  var items=S.log.slice().sort(function(a,b){return a.date<b.date?1:(a.date>b.date?-1:b.id-a.id)});
  if(!items.length){el.innerHTML='<li><span class="sub">'+t.empty+'</span></li>'}
  else el.innerHTML=items.map(function(e){
    return '<li><div class="l"><b>'+esc(e.species)+'</b><small>'+esc(e.date)+(e.place?' - '+esc(e.place):'')+(e.note?' - '+esc(e.note):'')+'</small></div>'+
      '<span class="kg">'+(e.kg!=null?e.kg+' '+t.kg:'')+'</span><button class="del" type="button" data-del="'+e.id+'">'+t.del+'</button></li>';
  }).join('');
  Array.prototype.forEach.call(el.querySelectorAll('[data-del]'),function(b){
    b.onclick=function(){
      if(!b.classList.contains('sure')){b.classList.add('sure');b.textContent=t.sure;return}
      var id=+b.getAttribute('data-del'); S.log=S.log.filter(function(x){return x.id!==id}); save(); renderLog();
    };
  });
  var mk=todayStr().slice(0,7), month=S.log.filter(function(e){return monthKey(e.date)===mk});
  var tot=month.reduce(function(a,e){return a+(e.kg||0)},0), by={};
  month.forEach(function(e){by[e.species]=(by[e.species]||0)+(e.kg||1)});
  var top=Object.keys(by).sort(function(a,b){return by[b]-by[a]})[0];
  $('logSummary').innerHTML='<h2>'+t.total+'</h2><div class="grid3"><div class="stat"><b>'+(Math.round(tot*10)/10)+'</b><small>'+t.kg+'</small></div><div class="stat"><b>'+month.length+'</b><small>'+t.trips+'</small></div><div class="stat"><b style="font-size:1rem;direction:inherit">'+(top?esc(top):'-')+'</b><small>'+t.top+'</small></div></div>';
}
function addEntry(){
  var t=L(), sp=$('fSpecies').value.trim(), kgv=$('fKg').value.trim(), dt=$('fDate').value||todayStr(), note=$('fNote').value.trim(), place=$('fPlace').value.trim();
  var box=$('logMsg');
  if(!sp){box.innerHTML='<div class="msg">'+t.needSpecies+'</div>';$('fSpecies').focus();return}
  var kg=kgv===''?null:Math.max(0,Math.round(parseFloat(kgv)*10)/10);
  if(kg!=null&&isNaN(kg))kg=null;
  S.log.push({id:Date.now(),species:sp.slice(0,40),kg:kg,date:dt,place:place.slice(0,60),note:note.slice(0,120)});
  save();
  $('fSpecies').value='';$('fKg').value='';$('fNote').value='';$('fPlace').value='';
  box.innerHTML='<div class="msg">'+t.added+'</div>';
  renderLog();
}

/* ---------- GPS ---------- */
function useGps(){
  var t=L(), box=$('gpsMsg');
  if(!navigator.geolocation){box.innerHTML='<div class="msg">'+t.gpsFail+'</div>';return}
  box.innerHTML='<div class="msg">'+t.gpsBusy+'</div>';
  navigator.geolocation.getCurrentPosition(function(p){
    S.mode='gps';S.gps={lat:Math.round(p.coords.latitude*1000)/1000,lng:Math.round(p.coords.longitude*1000)/1000};S.sea=null;save();
    rebuild();$('gpsMsg').innerHTML='<div class="msg">'+L().gpsOk+'</div>';refreshSea(true);
  },function(){box.innerHTML='<div class="msg">'+t.gpsFail+'</div>'},{enableHighAccuracy:false,timeout:15000,maximumAge:600000});
}

/* ---------- Install ---------- */
var deferredPrompt=null;
function isStandalone(){return (window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true}
function isIos(){return /iphone|ipad|ipod/i.test(navigator.userAgent)}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;var b=$('bInstall');if(b)b.hidden=false});
window.addEventListener('appinstalled',function(){deferredPrompt=null;var b=$('bInstall');if(b)b.hidden=true});
function doInstall(){
  if(!deferredPrompt)return;
  deferredPrompt.prompt(); deferredPrompt.userChoice.then(function(){deferredPrompt=null;var b=$('bInstall');if(b)b.hidden=true});
}

/* ---------- Config ---------- */
function loadConfig(){
  return getJSON('config.json?v=1',6000).then(function(c){
    if(c&&Array.isArray(c.restPeriods))S.cfg.restPeriods=c.restPeriods;
    S.cfg.showUnofficial=!!(c&&c.showUnofficial);
    if(c&&c.seaTtlMinutes)S.cfg.seaTtlMinutes=c.seaTtlMinutes;
    try{localStorage.setItem(KEY+'.cfg',JSON.stringify(S.cfg))}catch(e){}
    if(c&&c.remoteConfigUrl)return getJSON(c.remoteConfigUrl,6000).then(function(r){
      if(r&&Array.isArray(r.restPeriods)){S.cfg.restPeriods=r.restPeriods;S.cfg.showUnofficial=!!r.showUnofficial;try{localStorage.setItem(KEY+'.cfg',JSON.stringify(S.cfg))}catch(e){}}
    },function(){});
  }).catch(function(){
    try{var s=JSON.parse(localStorage.getItem(KEY+'.cfg')||'null');if(s&&Array.isArray(s.restPeriods))S.cfg=s}catch(e){}
  });
}

/* ---------- Splash (first open of a session, skipped in low-data mode) ---------- */
function splash(){
  if(S.low)return;
  try{if(sessionStorage.getItem('marsat.splash'))return;sessionStorage.setItem('marsat.splash','1')}catch(e){}
  var t=L(), d=document.createElement('div'); d.id='splash'; d.setAttribute('aria-hidden','true');
  d.innerHTML='<div class="sea"></div><div class="stage"><div class="chain"></div><svg class="anchor" viewBox="0 0 48 56" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="9" r="5"/><path d="M24 14v34M15 22h18M7 34c1 9 8 14 17 14s16-5 17-14"/></svg></div><div class="word"><b>'+t.name+'</b><span>'+t.tagline+'</span></div>';
  document.body.appendChild(d);
  function end(){d.classList.add('out');setTimeout(function(){if(d.parentNode)d.parentNode.removeChild(d)},700)}
  d.onclick=end; setTimeout(end,2800);
}

/* ---------- Fonts: loaded only on a normal connection; system fonts are the fallback ---------- */
function loadFonts(){
  if(S.low||navigator.onLine===false)return;
  var l=document.createElement('link'); l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@500;700&family=Tajawal:wght@400;500;700&display=swap';
  document.head.appendChild(l);
}

/* ---------- Start ---------- */
build(); showTab(); updateAll(); setStatus(); splash(); loadFonts();
loadConfig().then(function(){updateHome()});
refreshSea(false);
document.addEventListener('visibilitychange',function(){if(!document.hidden){refreshSea(false);updatePrayer();updateHome()}});
window.addEventListener('online',function(){refreshSea(false)});
setInterval(function(){updatePrayer();updateHome()},60000);

if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}
})();
