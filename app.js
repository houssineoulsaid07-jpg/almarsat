(function(){
'use strict';

/* ---------- Strings (Arabic + French; others in lang-extra.js) ---------- */
var T={
 ar:{
  dir:'rtl', loc:'ar-u-nu-latn', name:'المرساة', tagline:'ثبت رزقك في البحر',
  tabs:['الرئيسية','الصلاة','السجل','الإعدادات'],
  restTitle:function(d){return 'راحة بيولوجية - ممنوع الصيد حتى '+d},
  restOpen:function(d){return 'توقيف بيولوجي قائم منذ '+d},
  scopeL:'يشمل:', penL:'العقوبة:', refer:'التطبيق للتذكير فقط. المرجع هو بلاغ وزارة الصيد (هاتف +222 45 25 24 76).', since:'يوم منذ البداية', noEnd:'تاريخ النهاية لم يُعلن بعد', expL:'المتوقع (تقدير غير رسمي):', exempt:'مصايد أخرى مستثناة بحسب بلاغ الوزارة (القشريات، النازلي الأسود، سرطان الأعماق، جراد البحر الوردي).',
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
  copy:'© 2026 المرساة. جميع الحقوق محفوظة', gpsLog:'📍 سجّل موقعي الآن', gpsLogOk:'تم حفظ الموقع (تقريبي ~100 م) وسيُرفق بالصيدة.', gpsLogFail:'تعذّر تحديد الموقع. فعّل الموقع وجرّب مرة أخرى.', hideLoc:'إخفاء الإحداثيات على الشاشة', autoNote:'عند الإضافة يسجّل التطبيق تلقائياً الرياح والموج والقمر إن كان تاريخ الصيدة اليوم.', tideN:{spring:'مد قوي (تقريبي)',neap:'مد ضعيف (تقريبي)',mid:'مد متوسط (تقريبي)'}, simT:'اليوم يشبه أيامك الناجحة', simTxt:function(n,sp){return 'ظروف اليوم قريبة من '+n+' من أفضل صيداتك السابقة'+(sp?' (أكثرها: '+sp+')':'')+'.'}, simNote:'مقارنة بسجلك الشخصي فقط، وليست توقعاً مضموناً. كلما سجّلت أكثر صارت أفضل.', setSearch:'ابحث في الإعدادات', noSet:'لا توجد نتائج', gBasic:'الأساسيات', gAlert:'التنبيهات', gApp:'التطبيق', gInfo:'المعلومات والخصوصية', langName:'العربية', privSub:'كيف نتعامل مع بياناتك، وإخلاء المسؤولية', alertT:'تنبيه الصلاة', alertInfo:'اهتزاز ونغمة قصيرة عند دخول وقت الصلاة. يعمل فقط والتطبيق مفتوح على الشاشة، ولا يعمل وهو مغلق.', alertNow:function(n){return 'حان وقت صلاة '+n}, priv:'سياسة الخصوصية وإخلاء المسؤولية',
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
  exemptL:"الاستثناءات (غير مشمولة):", moreL:"عرض العقوبات والاستثناءات", quickSp:["أخطبوط","كوربين","دنيس","سبيط","بوري"],
  speciesList:['اسقمري','أخطبوط','دنيس','سول','بوري','جمبري','سبيط','سردين','ثيوف'],
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
  scopeL:'Concerne :', penL:'Sanctions :', refer:'L’application sert de rappel. La référence est le communiqué du ministère des Pêches (tél. +222 45 25 24 76).', since:'jours depuis le début', noEnd:'Date de fin pas encore annoncée', expL:'Prévision (estimation non officielle) :', exempt:'D’autres pêcheries sont exemptées selon le communiqué du ministère (crustacés, merlu noir, crabe profond, crevette rose).',
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
  copy:'© 2026 Al Marsat. Tous droits réservés', gpsLog:'📍 Enregistrer ma position', gpsLogOk:'Position enregistrée (approx. ~100 m), elle sera jointe à la prise.', gpsLogFail:'Position indisponible. Activez la localisation et réessayez.', hideLoc:'Masquer les coordonnées à l’écran', autoNote:'À l’ajout, l’application enregistre automatiquement vent, houle et lune si la date est aujourd’hui.', tideN:{spring:'Marée forte (approx.)',neap:'Marée faible (approx.)',mid:'Marée moyenne (approx.)'}, simT:'Aujourd’hui ressemble à vos bons jours', simTxt:function(n,sp){return 'Les conditions du jour ressemblent à '+n+' de vos meilleures prises'+(sp?' (surtout : '+sp+')':'')+'.'}, simNote:'Comparaison avec votre journal personnel uniquement, pas une prévision garantie. Plus vous notez, plus c’est utile.', setSearch:'Rechercher dans les réglages', noSet:'Aucun résultat', gBasic:'Général', gAlert:'Alertes', gApp:'Application', gInfo:'Infos et confidentialité', langName:'Français', privSub:'Vos données et avertissement', alertT:'Alerte de prière', alertInfo:'Vibration et courte sonnerie à l’heure de la prière. Fonctionne uniquement quand l’application est ouverte à l’écran, pas lorsqu’elle est fermée.', alertNow:function(n){return 'C’est l’heure de '+n}, priv:'Confidentialité et avertissement',
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
  exemptL:"Exemptions (non concernées) :", moreL:"Voir les sanctions et exemptions", quickSp:["Poulpe","Courbine","Dorade","Calmar","Mulet"],
  speciesList:['Maquereau','Poulpe','Dorade','Sole','Mulet','Crevette','Seiche','Sardine','Thiof'],
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
var SPOTS=[{"ar": "نواذيبو - خليج الراحة (الصيد التقليدي)", "fr": "Nouadhibou - Baie du Repos", "en": "Nouadhibou - Baie du Repos", "lat": 20.9167, "lng": -17.0333}, {"ar": "نواذيبو - الكانصادو", "fr": "Nouadhibou - Cansado", "en": "Nouadhibou - Cansado", "lat": 20.8486, "lng": -17.0319}, {"ar": "رأس نواذيبو (كاب بلان)", "fr": "Cap Blanc (Ras Nouadhibou)", "en": "Cap Blanc", "lat": 20.7714, "lng": -17.0481}, {"ar": "حوض أركين - إيويك", "fr": "Banc d'Arguin - Iwik", "en": "Banc d'Arguin - Iwik", "lat": 19.8833, "lng": -16.3}, {"ar": "حوض أركين - مامغار", "fr": "Banc d'Arguin - Mamghar", "en": "Banc d'Arguin - Mamghar", "lat": 19.3667, "lng": -16.5167}, {"ar": "البلواخ", "fr": "Blawakh", "en": "Blawakh", "lat": 18.8833, "lng": -16.2167}, {"ar": "ميناء تانييت", "fr": "Port de Tanit", "en": "Port of Tanit", "lat": 18.6139, "lng": -16.1228}, {"ar": "نواكشوط - شاطئ الصيادين", "fr": "Nouakchott - Plage des Pêcheurs", "en": "Nouakchott - Fishermen's Beach", "lat": 18.0858, "lng": -16.0264}, {"ar": "نواكشوط - ميناء الصداقة", "fr": "Nouakchott - Port de l'Amitié", "en": "Nouakchott - Friendship Port", "lat": 17.9917, "lng": -16.025}, {"ar": "ميناء انجاغو (مصب النهر)", "fr": "Port de N'Diago", "en": "Port of N'Diago", "lat": 16.1667, "lng": -16.5083}];
SPOTS.forEach(function(p){CITIES.push({lat:p.lat,lng:p.lng,sea:[p.lat,p.lng],spot:p})});
var SPOTSL={ar:'مواقع الصيد',fr:'Sites de pêche',en:'Fishing spots',es:'Zonas de pesca',pt:'Locais de pesca',zh:'渔场'};
function cityName(i){var c=CITIES[i];return c.spot?(c.spot[S.lang]||c.spot.en):L().cities[i]}
var SEA_POINTS=[CITIES[0],CITIES[1]];

/* ---------- State and storage ---------- */
var KEY='marsat.v1';
if(window.T_EXTRA)for(var _k in window.T_EXTRA)T[_k]=window.T_EXTRA[_k];
var NAVI=["<path d=\"M3 11.5 12 4l9 7.5\"/><path d=\"M5.5 10v9.5h13V10\"/><path d=\"M10 19.5v-5h4v5\"/>", "<path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/>", "<path d=\"M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z\"/><path d=\"M9 9h6M9 13h6\"/>", "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8\"/>"];
var LANGS=[['ar','العربية'],['fr','Français'],['en','English'],['es','Español'],['pt','Português'],['zh','中文']];
var S={hideLoc:false,alert:false,lang:'ar',tab:0,city:0,mode:'city',gps:null,low:false,log:[],sea:null,lowHintOff:false,
       cfg:{showUnofficial:false,restPeriods:[],seaTtlMinutes:30},
       status:'',statusKind:'',busy:false,heading:null,compass:false,msg:{}};
try{
  var sv=JSON.parse(localStorage.getItem(KEY)||'{}');
  if(typeof sv.lang==='string'&&T[sv.lang])S.lang=sv.lang;
  if(typeof sv.city==='number'&&CITIES[sv.city])S.city=sv.city;
  if(sv.mode==='gps'&&sv.gps)S.mode='gps';
  if(sv.gps&&typeof sv.gps.lat==='number')S.gps=sv.gps;
  S.low=!!sv.low;S.alert=!!sv.alert;S.hideLoc=!!sv.hideLoc; S.lowHintOff=!!sv.lowHintOff;
  if(Array.isArray(sv.log))S.log=sv.log;
  if(sv.sea&&typeof sv.sea.t==='number')S.sea=sv.sea;
}catch(e){}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify({lang:S.lang,city:S.city,mode:S.mode,gps:S.gps,low:S.low,alert:S.alert,hideLoc:S.hideLoc,lowHintOff:S.lowHintOff,log:S.log,sea:S.sea}))}catch(e){}
}
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function L(){return T[S.lang]}
function cfgPick(p,k){var o={};['ar','fr','en','es','pt','zh'].forEach(function(l){o[l]=p[k+'_'+l]||''});return o}
function cfgList(p,k){var o={};['ar','fr','en','es','pt','zh'].forEach(function(l){o[l]=Array.isArray(p[k+'_'+l])?p[k+'_'+l]:null});return o}
function pickList(o){return o[S.lang]||o.en||o.fr||o.ar||null}
var MIN={phone:'+222 45 25 24 76',website:'https://peches.gov.mr'};
function ministryLinks(){return '<p class="note mlinks"><a href="tel:'+MIN.phone.replace(/\s/g,'')+'">'+esc(MIN.phone)+'</a> · <a href="'+esc(MIN.website)+'" target="_blank" rel="noopener">peches.gov.mr</a></p>'}
function pickTxt(o){return o[S.lang]||o.en||o.fr||o.ar||''}
function anyTxt(o){return !!(o.ar||o.fr||o.en)}
function pad(n){return (n<10?'0':'')+n}
function fmtClock(ts){return new Date(ts).toLocaleTimeString(L().loc,{hour:'2-digit',minute:'2-digit'})}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}

/* ---------- Location ---------- */
function coords(){return S.mode==='gps'&&S.gps?{lat:S.gps.lat,lng:S.gps.lng}:{lat:CITIES[S.city].lat,lng:CITIES[S.city].lng}}
function placeName(){return S.mode==='gps'&&S.gps?L().gps:cityName(S.city)}
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
      return {active:true,open:open,start:a,end:b,days:open?Math.round((t-a)/86400000)+1:Math.round((b-t)/86400000)+1,official:!!ps[i].official,scope:cfgPick(ps[i],'scope'),penalty:cfgPick(ps[i],'penalty'),expected:cfgPick(ps[i],'expected'),exc:cfgList(ps[i],'exceptions')};
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
  var cityOpts=CITIES.map(function(c,i){return (i===5?'<optgroup label="'+SPOTSL[S.lang]+'">':'')+'<option value="'+i+'"'+(S.mode==='city'&&i===S.city?' selected':'')+'>'+esc(cityName(i))+'</option>'}).join('')+'</optgroup>';
  $('app').innerHTML=
  '<header><div class="brand">'+logoSvg()+'<div><h1>'+t.name+'</h1><small>'+t.tagline+'</small></div></div>'+'</header>'+

  '<div class="tab" id="tab0">'+
   '<div id="hint"></div><div id="restBox"></div>'+
   '<div class="bar"><span id="seaStatus" aria-live="polite"></span><button class="btn ghost" id="bRefresh" type="button">'+t.refresh+'</button></div>'+
   '<section class="card" id="scoreCard"><div class="row"><h2>'+t.today+'</h2><span class="tag" id="placeTag"></span></div>'+
    '<div class="gauge"><svg viewBox="0 0 120 120" role="img" aria-label="'+t.today+'"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--tint)" stroke-width="12"/><circle id="arc" cx="60" cy="60" r="52" fill="none" stroke="var(--good)" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="0 327"/><text id="pct" x="60" y="68" text-anchor="middle" font-size="28" font-weight="700" fill="var(--ink)" font-family="Tajawal,sans-serif">--</text></svg>'+
    '<div class="txt"><p class="verdict" id="verdict"></p><p class="sub" id="vtext"></p></div></div>'+
    '<ul class="factors"><li><span>'+t.wind+'</span><span id="fw">-</span></li><li><span>'+t.wave+'</span><span id="fh">-</span></li><li><span>'+t.moonL+'</span><span id="fm">-</span></li></ul></section>'+
   '<section class="card" id="simCard" hidden><h2 id="simH"></h2><p class="verdict good" id="simP" style="font-size:1.05rem"></p><p class="note" id="simN"></p></section>'+
   '<div class="danger" id="danger" role="alert" hidden>'+t.danger+'</div>'+
   '<section class="card"><h2>'+t.sea+'</h2><p class="sub" id="seaSub"></p>'+
    '<div class="viz" id="seaViz" hidden></div><div class="grid3"><div class="stat"><b id="sWind">-</b><small>'+t.speed+'</small></div><div class="stat"><b id="sWave">-</b><small>'+t.height+'</small></div><div class="stat"><b id="sPer">-</b><small>'+t.period+'</small></div></div>'+
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
    '<label class="field" for="fSpecies">'+t.species+'<input id="fSpecies" type="text" list="spList" autocomplete="off" maxlength="40"></label><datalist id="spList">'+spOpts+'</datalist>'+'<div class="chips" role="group">'+t.quickSp.map(function(n){return '<button type="button" class="chip" data-sp="'+esc(n)+'">'+esc(n)+'</button>'}).join('')+'</div>'+
    '<div class="two"><label class="field" for="fKg">'+t.weight+'<input id="fKg" type="number" inputmode="decimal" min="0" step="0.1"></label>'+
    '<label class="field" for="fDate">'+t.date+'<input id="fDate" type="date" value="'+todayStr()+'"></label></div>'+
    '<label class="field" for="fPlace">'+t.placeL+'<input id="fPlace" type="text" maxlength="60"></label>'+
    '<label class="field" for="fNote">'+t.noteL+'<input id="fNote" type="text" maxlength="120"></label>'+
    '<div class="btns"><button class="btn ghost" id="bLogGps" type="button">'+t.gpsLog+'</button></div><div id="logGpsMsg" aria-live="polite"></div>'+
    '<label class="switch" for="hideSw" style="margin-top:10px"><input id="hideSw" type="checkbox"'+(S.hideLoc?' checked':'')+'><span>'+t.hideLoc+'</span></label>'+
    '<p class="note" style="margin-top:8px">'+t.autoNote+'</p>'+
    '<div class="btns"><button class="btn" id="bAdd" type="button">'+t.add+'</button></div><div id="logMsg" aria-live="polite"></div></section>'+
   '<section class="card" id="logSummary"></section>'+
   '<section class="card"><ul class="entries" id="entries" style="margin-top:0"></ul><p class="note" style="margin-top:12px">'+t.logNote+'</p></section>'+
  '</div>'+

  '<div class="tab" id="tab3" hidden>'+
   '<input class="spill" id="setSearch" type="search" placeholder="'+t.setSearch+'" aria-label="'+t.setSearch+'" autocomplete="off">'+
   '<div class="sgroup"><h3 class="sh">'+t.gBasic+'</h3><div class="slist">'+
    sRow({title:t.lang,sub:t.langName,tap:1,body:'<div class="btns">'+LANGS.map(function(l){return '<button class="btn'+(S.lang===l[0]?'':' ghost')+'" data-lang="'+l[0]+'" type="button" lang="'+l[0]+'">'+l[1]+'</button>'}).join('')+'</div>'})+
    sRow({title:t.locT,sub:(S.mode==='gps'?t.gps:cityName(S.city)),k:t.city+' gps',tap:1,body:'<label class="field" for="citySel">'+t.city+'<select id="citySel">'+(S.mode==='gps'?'<option value="gps" selected>'+t.gps+'</option>':'')+cityOpts+'</select></label><div class="btns"><button class="btn ghost" id="bGps" type="button">'+t.useGps+'</button></div><div id="gpsMsg" aria-live="polite"></div>'})+
    sRow({title:t.low,sub:t.lowInfo,sw:'lowSw',on:S.low})+
   '</div></div>'+
   '<div class="sgroup"><h3 class="sh">'+t.gAlert+'</h3><div class="slist">'+
    sRow({title:t.alertT,sub:t.alertInfo,sw:'alSw',on:S.alert})+
   '</div></div>'+
   '<div class="sgroup"><h3 class="sh">'+t.gApp+'</h3><div class="slist">'+
    sRow({id:'installCard',title:t.install,sub:t.installInfo,open:1,body:'<div class="btns"><button class="btn" id="bInstall" type="button" hidden>'+t.install+'</button></div><p class="note" id="iosNote" style="margin-top:8px" hidden>'+t.installIos+'</p>'})+
   '</div></div>'+
   '<div class="sgroup"><h3 class="sh">'+t.gInfo+'</h3><div class="slist">'+
    sRow({title:t.priv,sub:t.privSub,href:'privacy.html#'+S.lang})+
    sRow({title:t.about,sub:t.aboutTxt,tap:1,body:'<p class="note">'+t.attr+'</p>'})+
    sRow({title:t.copy,sub:''})+
   '</div></div>'+
   '<p class="sub" id="noSet" hidden style="text-align:center;margin-top:20px">'+t.noSet+'</p>'+
  '</div>'+

  '<nav class="tabs" aria-label="Navigation"><div class="in">'+t.tabs.map(function(n,i){return '<button type="button" data-go="'+i+'"><svg class="ni" viewBox="0 0 24 24" aria-hidden="true">'+NAVI[i]+'</svg><span>'+n+'</span></button>'}).join('')+'</div></nav>';

      $('bRefresh').onclick=function(){refreshSea(true)};
  $('citySel').onchange=function(){
    if(this.value==='gps')return;
    S.mode='city';S.city=+this.value;S.sea=null;save();rebuild();refreshSea(true);
  };
  $('bGps').onclick=useGps;
  bindSettings();
  $('lowSw').onchange=function(){S.low=this.checked;save();document.body.classList.toggle('low',S.low);updateHint()};
  $('alSw').onchange=function(){S.alert=this.checked;save();if(S.alert)beep(true)};
  $('bAdd').onclick=addEntry;
  $('bLogGps').onclick=logGps;
  $('hideSw').onchange=function(){S.hideLoc=this.checked;save();renderLog()};
  $('bCompass').onclick=toggleCompass;
  $('bInstall').onclick=doInstall;
  Array.prototype.forEach.call(document.querySelectorAll('[data-go]'),function(b){b.onclick=function(){S.tab=+b.getAttribute('data-go');showTab();window.scrollTo(0,0)}});
  if(deferredPrompt)$('bInstall').hidden=false;
  if(isIos()&&!isStandalone())$('iosNote').hidden=false;
  if(isStandalone()){$('installCard').querySelector('small').textContent=t.installed}
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
    var sc=pickTxt(r.scope);
    var head=r.open?t.restOpen(r.start.toLocaleDateString(t.loc,fm)):t.restTitle(r.end.toLocaleDateString(t.loc,fm));
    var cnt=r.open?'<div class="count"><b>'+r.days+'</b><span>'+t.since+'</span></div>':'<div class="count"><b>'+r.days+'</b><span>'+t.left+'</span></div>';
    $('restBox').innerHTML='<div class="rest"><h2>'+esc(head)+'</h2>'+cnt+
      (sc?'<p><b>'+t.scopeL+'</b> '+esc(sc)+'</p>':'<p>'+t.prep+'</p>')+
      ((sc||pickTxt(r.penalty)||(r.open&&pickTxt(r.expected)))?'<details class="more"><summary>'+t.moreL+'</summary>'+(sc?'<p class="note"><b>'+t.exemptL+'</b></p>'+(pickList(r.exc)?'<ul class="exl">'+pickList(r.exc).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'<p class="note">'+t.exempt+'</p>'):'')+
      (pickTxt(r.penalty)?'<p class="note"><b>'+t.penL+'</b> '+esc(pickTxt(r.penalty))+'</p>':'')+(sc?'<p class="note">'+t.refer+'</p>'+ministryLinks():'')+
      (r.open&&pickTxt(r.expected)?'<p class="note"><b>'+t.expL+'</b> '+esc(pickTxt(r.expected))+'</p>':'')+'</details>':'')+(r.open?'<p><span class="tag warn">'+t.noEnd+'</span></p>':'')+
      (r.official?'':'<p><span class="tag warn">'+t.unofficial+'</span></p>')+'</div>';
  }else $('restBox').innerHTML='';
  $('scoreCard').hidden=r.active&&!anyTxt(r.scope);
  $('seaSub').textContent=(r.active&&!anyTxt(r.scope))?t.seaLearn:'';

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
    paintViz(d);
  }else{
    $('sWind').textContent='-';$('sWave').textContent='-';$('sPer').textContent='-';
    $('dirName').textContent='-';$('dirSub').textContent='';$('seaNote').textContent='';
    if($('seaViz'))$('seaViz').hidden=true;
  }
  $('moonP').setAttribute('d',moonPath(age));
  updateSim();
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
    var sn=e.snap?('<small class="sn">'+t.wind+' '+e.snap.w+' '+t.kmh+' • '+t.wave+' '+e.snap.h+' '+t.m+' • '+t.tideN[e.snap.td]+'</small>'):'';
    var loc=(e.lat!=null&&!S.hideLoc)?('<small class="sn">📍 '+e.lat+', '+e.lng+'</small>'):(e.lat!=null?'<small class="sn">📍 …</small>':'');
    return '<li><div class="l"><b>'+esc(e.species)+'</b><small>'+esc(e.date)+(e.place?' - '+esc(e.place):'')+(e.note?' - '+esc(e.note):'')+'</small>'+sn+loc+'</div>'+
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


function sRow(o){
  var k=((o.title||'')+' '+(o.sub||'')+' '+(o.k||'')).replace(/<[^>]+>/g,' ').toLowerCase();
  var tx='<div class="stx"><b>'+o.title+'</b>'+(o.sub?'<small>'+o.sub+'</small>':'')+'</div>';
  var head;
  if(o.sw)head='<label class="shead" for="'+o.sw+'">'+tx+'<input id="'+o.sw+'" type="checkbox"'+(o.on?' checked':'')+'><span class="tgl"></span></label>';
  else if(o.href)head='<a class="shead" href="'+o.href+'">'+tx+'<span class="chev"></span></a>';
  else if(o.tap)head='<div class="shead" role="button" tabindex="0" data-tap="1">'+tx+'<span class="chev"></span></div>';
  else head='<div class="shead nohit">'+tx+'</div>';
  return '<div class="srow"'+(o.id?' id="'+o.id+'"':'')+' data-k="'+esc(k)+'">'+head+(o.body?'<div class="sbody"'+(o.open?'':' hidden')+'>'+o.body+'</div>':'')+'</div>';
}
function bindSettings(){
  var tab=$('tab3'); if(!tab)return;
  Array.prototype.forEach.call(tab.querySelectorAll('[data-tap]'),function(h){
    function tog(){var r=h.parentNode,b=r.querySelector('.sbody');if(!b)return;b.hidden=!b.hidden;r.classList.toggle('open',!b.hidden)}
    h.onclick=tog;h.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog()}};
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-sp]'),function(b){b.onclick=function(){var f=$('fSpecies');f.value=b.getAttribute('data-sp');f.focus()}});
  Array.prototype.forEach.call(tab.querySelectorAll('[data-lang]'),function(b){b.onclick=function(){S.lang=b.getAttribute('data-lang');save();rebuild()}});
  $('setSearch').oninput=function(){
    var q=this.value.trim().toLowerCase(),any=false;
    Array.prototype.forEach.call(tab.querySelectorAll('.sgroup'),function(g){
      var n=0;Array.prototype.forEach.call(g.querySelectorAll('.srow'),function(r){var m=!q||r.getAttribute('data-k').indexOf(q)>-1;r.hidden=!m;if(m)n++});
      g.hidden=!n;if(n)any=true});
    $('noSet').hidden=any;
  };
}

var _pos=null;
function tideClass(il){return (il<0.12||il>0.88)?'spring':((il>0.38&&il<0.62)?'neap':'mid')}
function logGps(){
  var t=L(),box=$('logGpsMsg');
  if(!navigator.geolocation){box.innerHTML='<div class="msg">'+t.gpsLogFail+'</div>';return}
  box.innerHTML='<div class="msg">'+t.gpsBusy+'</div>';
  navigator.geolocation.getCurrentPosition(function(p){
    _pos={lat:Math.round(p.coords.latitude*1000)/1000,lng:Math.round(p.coords.longitude*1000)/1000};
    box.innerHTML='<div class="msg">'+L().gpsLogOk+'</div>';
  },function(){box.innerHTML='<div class="msg">'+t.gpsLogFail+'</div>'},{enableHighAccuracy:true,timeout:20000,maximumAge:60000});
}
function distKm(a,b,c,d){var R=6371,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 2*R*Math.asin(Math.sqrt(h))}
function isCeph(n){return /أخطبوط|سبيط|حبار|سيبيا|poulpe|seiche|calmar|octopus|cuttlefish|squid|pulpo|sepia|choco|calamar|polvo|章鱼|乌贼|鱿鱼/i.test(n||'')}
function updateSim(){
  var card=$('simCard'); if(!card)return;
  card.hidden=true;
  var d=S.sea; if(!d||Date.now()-d.t>6*3600000)return;
  var r=restInfo(), blockCeph=r.active&&anyTxt(r.scope);
  var list=S.log.filter(function(e){return e.snap&&e.kg!=null&&!(blockCeph&&isCeph(e.species))});
  if(list.length<5)return;
  var kgs=list.map(function(e){return e.kg}).sort(function(a,b){return a-b}), med=kgs[Math.floor(kgs.length/2)];
  var good=list.filter(function(e){return e.kg>=med&&e.kg>0});
  var c=coords(), il=moonIllum(moonAge(new Date())), td=tideClass(il);
  var match=good.filter(function(e){
    if(Math.abs(e.snap.w-d.wind)>8||Math.abs(e.snap.h-d.wave)>0.5)return false;
    if(e.snap.td!==td&&Math.abs(e.snap.il-il)>0.25)return false;
    if(e.lat!=null&&distKm(e.lat,e.lng,c.lat,c.lng)>40)return false;
    return true});
  if(match.length<2)return;
  var by={};match.forEach(function(e){by[e.species]=(by[e.species]||0)+1});
  var top=Object.keys(by).sort(function(a,b){return by[b]-by[a]})[0], t=L();
  $('simH').textContent=t.simT; $('simP').textContent=t.simTxt(match.length,top); $('simN').textContent=t.simNote;
  card.hidden=false;
}
function addEntry(){
  var t=L(), sp=$('fSpecies').value.trim(), kgv=$('fKg').value.trim(), dt=$('fDate').value||todayStr(), note=$('fNote').value.trim(), place=$('fPlace').value.trim();
  var box=$('logMsg');
  if(!sp){box.innerHTML='<div class="msg">'+t.needSpecies+'</div>';$('fSpecies').focus();return}
  var kg=kgv===''?null:Math.max(0,Math.round(parseFloat(kgv)*10)/10);
  if(kg!=null&&isNaN(kg))kg=null;
  var en={id:Date.now(),species:sp.slice(0,40),kg:kg,date:dt,place:place.slice(0,60),note:note.slice(0,120)};
  if(_pos){en.lat=_pos.lat;en.lng=_pos.lng}
  var d=S.sea;
  if(d&&dt===todayStr()&&(Date.now()-d.t<6*3600000)){var il=moonIllum(moonAge(new Date()));
    en.snap={w:d.wind,wd:d.windDir,h:d.wave,p:d.period,il:Math.round(il*100)/100,td:tideClass(il)}}
  S.log.push(en);
  save();
  $('fSpecies').value='';$('fKg').value='';$('fNote').value='';$('fPlace').value='';_pos=null;$('logGpsMsg').innerHTML='';
  box.innerHTML='<div class="msg">'+t.added+'</div>';
  renderLog();
  updateSim();
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
function paintViz(d){
  var el=$('seaViz'); if(!el)return;
  var amp=Math.max(3,Math.min(26,d.wave*9)), dur=Math.max(3,Math.min(10,(d.period||7)*0.7));
  var wd=Math.max(1.1,9-d.wind*0.22), to=(d.windDir+180)%360, dirx=Math.sin(to*Math.PI/180)>=0?1:-1;
  var col=d.wave>2?'var(--bad)':(d.wave>1.5?'var(--warn)':'var(--primary)');
  function wave(a,y,ph){var p='M0 '+y,i,x;for(x=0;x<=800;x+=10){p+=' L'+x+' '+(y+a*Math.sin((x/200)*Math.PI*2+ph)).toFixed(1)}return p+' L800 150 L0 150Z'}
  var streaks='',n=Math.max(3,Math.min(9,Math.round(2+d.wind/6))),i;
  for(i=0;i<n;i++){var y=14+(i*53%52),len=40+(i*29%50);streaks+='<line class="wk" x1="0" y1="'+y+'" x2="'+len+'" y2="'+y+'" style="animation-duration:'+wd.toFixed(2)+'s;animation-delay:-'+(i*wd/n).toFixed(2)+'s"/>'}
  el.innerHTML='<svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true"><rect width="400" height="150" fill="var(--tint)"/>'+
    '<g class="wg'+(dirx<0?' rev':'')+'" stroke="var(--muted)" stroke-width="2" stroke-linecap="round" opacity=".7">'+streaks+'</g>'+
    '<g class="wv" style="animation-duration:'+(dur*1.5).toFixed(1)+'s" fill="'+col+'" opacity=".35"><path d="'+wave(amp*0.7,88,1.2)+'"/></g>'+
    '<g class="wv" style="animation-duration:'+dur.toFixed(1)+'s" fill="'+col+'" opacity=".75"><path d="'+wave(amp,104,0)+'"/></g></svg>';
  el.hidden=false;
}
var _ac=null;
function beep(test){
  try{if(navigator.vibrate)navigator.vibrate(test?[150]:[500,200,500,200,500]);
    var A=window.AudioContext||window.webkitAudioContext;if(!A)return;_ac=_ac||new A();
    [0,.35,.7].slice(0,test?1:3).forEach(function(t0){var o=_ac.createOscillator(),g=_ac.createGain();o.frequency.value=660;o.connect(g);g.connect(_ac.destination);
      var t=_ac.currentTime+t0;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.25,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+.3);o.start(t);o.stop(t+.32)});
  }catch(e){}
}
var _fired='';
function checkAlert(){
  if(!S.alert||document.hidden)return;
  var c=coords(),now=new Date(),tz=-now.getTimezoneOffset()/60,pt=prayerTimes(c.lat,c.lng,now,tz),h=now.getHours()+now.getMinutes()/60,i;
  for(i=0;i<6;i++){if(i===1)continue;var diff=h-fix24(pt[i]);
    if(diff>=0&&diff<0.03){var k=now.toDateString()+i;if(_fired===k)return;_fired=k;beep(false);
      var b=document.createElement('div');b.className='danger';b.style.cssText='position:fixed;top:10px;left:10px;right:10px;z-index:50;text-align:center';b.textContent=L().alertNow(L().prayers[i]);b.onclick=function(){b.remove()};document.body.appendChild(b);setTimeout(function(){b.remove()},60000);return}}
}
setInterval(checkAlert,15000);


if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}
})();
