(function(){
'use strict';

/* Local error log: the last 20 errors stay in this phone only; nothing is sent anywhere */
var ERRK='marsat.err';
function errRead(){try{var a=JSON.parse(localStorage.getItem(ERRK)||'[]');return Array.isArray(a)?a:[]}catch(e){return []}}
function errAdd(m,src){
  try{
    var a=errRead();a.push({t:new Date().toISOString(),m:String(m||'').slice(0,200),s:String(src||'').replace(/^https?:\/\/[^/]+/,'').slice(0,80)});
    localStorage.setItem(ERRK,JSON.stringify(a.slice(-20)));
  }catch(e){}
}
window.addEventListener('error',function(e){errAdd(e.message,(e.filename||'')+':'+(e.lineno||0)+':'+(e.colno||0))});
window.addEventListener('unhandledrejection',function(e){var r=e.reason;errAdd('promise: '+(r&&r.message?r.message:r),'')});

/* ---------- Strings (Arabic + French; others in lang-extra.js) ---------- */
var T={
 ar:{
  dir:'rtl', loc:'ar-u-nu-latn', name:'المرساة', tagline:'ثبت رزقك في البحر',
  tabs:['الرئيسية','الصلاة','السجل','الإعدادات','المصائد'],
  restTitle:function(d){return 'راحة بيولوجية - ممنوع الصيد حتى '+d},
  restOpen:function(d){return 'توقيف بيولوجي قائم منذ '+d},
  scopeL:'يشمل:', penL:'العقوبة:', refer:'التطبيق للتذكير فقط. المرجع هو بلاغ وزارة الصيد (هاتف <bdi dir="ltr">+222 45 25 99 70</bdi>).', since:'يوم منذ البداية', noEnd:'تاريخ النهاية لم يُعلن بعد', expL:'المتوقع (تقدير غير رسمي):', exempt:'مصايد أخرى مستثناة بحسب بلاغ الوزارة (القشريات، النازلي الأسود، سرطان الأعماق، جراد البحر الوردي).',
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
  soonT:"اقترب موعد استئناف الصيد", soonD:"استعدوا للانطلاق: راجعوا تراخيص القوارب ومعدات السلامة البحرية. التوقيف ما زال ساريًا حتى صدور القرار الرسمي.", openT:"موسم الصيد مفتوح حاليًا", openD:"يُسمح بالصيد وفق القوانين المعمول بها، مع احترام الأحجام القانونية للأسماك.", 
  updT:"يتوفر تحديث جديد", updB:"إعادة التحميل", updX:"لاحقًا", 
  sndOn:"الصوت مفعّل، اضغط للكتم", sndOff:"الصوت مكتوم، اضغط للتفعيل", 
 sfT:"السلامة والاستغاثة", sfSos:"استغاثة SOS", sfInfo:"يجهّز التطبيق رسالة فيها موقعك، وتضغط أنت «إرسال» في تطبيق الرسائل. يلزم وجود تغطية شبكة هاتف. هذه ليست خدمة إنقاذ رسمية: في الخطر الشديد اتصل بالجهات المختصة أيضًا.", sfNums:"أرقام الطوارئ (حتى 3)", sfNumPh:"رقم الهاتف", sfAdd:"إضافة", sfBad:"رقم غير صحيح.", sfDel:"حذف", sfNoNum:"أضف رقم طوارئ واحدًا على الأقل لإرسال الرسالة مباشرة.", sfConfT:"إرسال استغاثة؟", sfConfD:"سيُحدَّد موقعك ثم تُجهَّز رسالة لأرقام الطوارئ.", sfGo:"حدّد موقعي وجهّز الرسالة", sfCancel:"إلغاء", sfWait:"جارٍ تحديد موقعك...", sfSend:"فتح الرسائل وإرسال", sfCopy:"نسخ الرسالة", sfShare:"مشاركة", sfCopied:"تم النسخ.", sfLast:"تعذّر تحديد موقعك الآن. استُخدم آخر موقع معروف.", sfNoFix:"تعذّر تحديد الموقع. أرسل الرسالة بدونه.", sfBody:"استغاثة المرساة: أحتاج مساعدة في البحر.", sfPos:"موقعي", sfAcc:"الدقة", sfTime:"الساعة", sfRetT:"موعد العودة", sfRetD:"حدّد وقت رجوعك. إن تأخرت يذكّرك التطبيق (وهو مفتوح) ويجهّز لك رسالة لأهلك. اضبط منبّه الهاتف أيضًا.", sfH:"س", sfDue:"موعد العودة", sfNoRet:"لا يوجد موعد", sfClear:"إلغاء الموعد", sfOverT:"انتهى موعد العودة", sfOverD:"هل وصلت بسلام؟", sfOk:"وصلت بسلام", sfExt:"تمديد ساعة", sfTell:"أرسل موقعي لأهلي", sfLateBody:"تأخرت عن موعد عودتي. أنا بخير وسأعود، هذا موقعي:", sfDenied:"الموقع مرفوض: فعّل إذن الموقع للتطبيق من إعدادات المتصفح ثم أعد المحاولة.", sfRetry:"إعادة المحاولة", sfWarn:"تنبيه: تأكد أن شريحتك فيها رصيد رسائل SMS قبل الخروج إلى البحر، وجرّب زر SOS مرة على الشاطئ. إن لم تتوفر الرسائل فاستعمل «مشاركة» أو «نسخ» مع واتساب إن وُجد إنترنت.", banNote:"الصيد ممنوع حاليًا. هذه النسبة تخص حالة البحر للسلامة فقط.", sfMsgLang:"لغة رسالة الاستغاثة (لمن يستلمها)",
 rpMail:"إرسال بالبريد", rpSup:"رقم الدعم (واتساب):",
 rpT:"الإبلاغ عن مشكلة", rpInfo:"إن حدث خطأ في التطبيق، انسخ التقرير وأرسله للمطوّر. فيه معلومات تقنية فقط (رقم النسخة ونص الخطأ)، ولا يحتوي موقعك ولا أرقامك ولا بيانات الصيد. لا يُرسل شيء إلا إذا ضغطتَ أنت.", rpCopy:"نسخ التقرير", rpWa:"إرسال بالواتساب", rpClr:"مسح السجل", rpNone:"لا أخطاء مسجلة. (التطبيق سليم)", rpCopied:"تم نسخ التقرير.", rpN:"أخطاء مسجلة:",
 rdT:"الإبلاغ بالراديو والإشارات (بلا رصيد ولا إنترنت)", rdBtn:"شاشة الإبلاغ بالراديو", rdFl:"إشارة SOS ضوئية وصوتية", rdClose:"إغلاق", rdHow:"على جهاز VHF بحري: اضغط زر الإرسال، وقل ببطء: «MAYDAY، MAYDAY، MAYDAY. هنا [اسم القارب] ثلاث مرات. MAYDAY [اسم القارب]. موقعي كما أدناه. أحتاج مساعدة. عدد الأشخاص: ...». ثم اترك زر الإرسال وانتظر الرد. القناة الدولية للاستغاثة: 16.", rdPos:"موقعك الآن (درجات ودقائق)", rdN:"شمالًا", rdS:"جنوبًا", rdE:"شرقًا", rdW:"غربًا", rdOld:"آخر موقع معروف قبل", rdMin:"دقيقة", rdNoPos:"لا يوجد موقع بعد. اخرج إلى مكان مكشوف وانتظر.", rdFlInfo:"يراها ويسمعها من هو قريب منك فقط. لا ترسل شيئًا عبر الشبكة، ولا تغني عن VHF ولا المشاعل ولا منارة الاستغاثة.", rdFlStop:"المس الشاشة للإيقاف", rdCallT:"اتصال مباشر", rdCallN:"قد تعمل المكالمة بلا رصيد وقد لا تعمل. الأرقام من مصدر إخباري ولم يؤكدها أحد رسميًا: اتصل بها مرة على الشاطئ للتأكد.", rdMar:"الدرك البحري", rdGen:"الدرك الوطني", rdPol:"الشرطة",
  nvT:"بوصلة المصائد والانجراف", nvWarn:"مساعد فقط ولا يغني عن جهاز ملاحة بحرية ولا عن خبرتك. دقة GPS الهاتف تتفاوت، وبوصلته تتأثر بالمعادن. لا تعتمد عليه وحده في العودة. نقاطك تُحفظ في هاتفك فقط.", nvCatch:"حفظ نقطة المصيدة الحالية", nvHome:"حفظ نقطة المرسى / الشاطئ", nvWait:"جارٍ تحديد موقعك… قد يستغرق دقيقة في عرض البحر", nvSaved:"تم حفظ", nvErr:"تعذّر تحديد الموقع. فعّل GPS وتأكد أن الهاتف في مكان مكشوف للسماء.", nvNone:"لا توجد نقاط محفوظة بعد", nvPick:"اختر نقطة للتوجيه نحوها", nvStart:"بدء التوجيه", nvStop:"إيقاف التوجيه", nvDist:"المسافة المتبقية", nvM:"م", nvKm:"كم", nvBear:"الاتجاه", nvAcc:"الدقة ±", nvSrcG:"الاتجاه من GPS (أثناء الحركة)", nvSrcM:"الاتجاه من بوصلة الهاتف", nvNoHd:"حرّك الهاتف بشكل ثمانية لمعايرة البوصلة", nvArr:"وصلت إلى النقطة", nvRen:"تسمية", nvDel:"حذف", nvSure:"حذف هذه النقطة؟", nvName:"اسم النقطة", nvDrift:"إنذار الانجراف", nvDriftInfo:"ينبّه إذا ابتعد القارب عن النقطة المختارة أكثر من:", nvDriftAl:"انجراف! ابتعدت عن النقطة بمقدار", nvSun:"وضع الشمس (تباين عالٍ)", nvKindC:"مصيدة", nvKindH:"مرسى", nvFull:"اكتملت النقاط المسموحة (60). احذف نقطة قديمة.", nvSel:"النقطة المختارة", nvKeep:"أبقِ الشاشة مضاءة أثناء التوجيه", nvNoTarget:"لم تُختر نقطة", nvOff:"لا يعمل التوجيه", 
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
  tabs:['Accueil','Prière','Journal','Réglages','Spots'],
  restTitle:function(d){return 'Repos biologique - pêche interdite jusqu’au '+d},
  restOpen:function(d){return 'Arrêt biologique en cours depuis le '+d},
  scopeL:'Concerne :', penL:'Sanctions :', refer:'L’application sert de rappel. La référence est le communiqué du ministère des Pêches (tél. <bdi dir="ltr">+222 45 25 99 70</bdi>).', since:'jours depuis le début', noEnd:'Date de fin pas encore annoncée', expL:'Prévision (estimation non officielle) :', exempt:'D’autres pêcheries sont exemptées selon le communiqué du ministère (crustacés, merlu noir, crabe profond, crevette rose).',
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
  soonT:"Reprise de la pêche imminente", soonD:"Préparez vos embarcations ; vérifiez vos licences et équipements de sécurité. L’arrêt reste en vigueur jusqu’à la décision officielle.", openT:"Saison de pêche ouverte", openD:"La pêche est autorisée conformément à la réglementation et aux tailles légales.", 
  updT:"Une mise à jour est disponible", updB:"Recharger", updX:"Plus tard", 
  sndOn:"Son activé, appuyez pour couper", sndOff:"Son coupé, appuyez pour activer", 
 sfT:"Sécurité et SOS", sfSos:"SOS", sfInfo:"L'appli prépare un message avec votre position ; c'est vous qui appuyez sur « Envoyer » dans l'appli Messages. Il faut du réseau mobile. Ce n'est pas un service de secours officiel : en cas de danger grave, appelez aussi les secours.", sfNums:"Numéros d'urgence (3 max)", sfNumPh:"Numéro de téléphone", sfAdd:"Ajouter", sfBad:"Numéro invalide.", sfDel:"Supprimer", sfNoNum:"Ajoutez au moins un numéro d'urgence pour envoyer directement le message.", sfConfT:"Envoyer un SOS ?", sfConfD:"Votre position sera relevée puis un message sera préparé pour vos numéros d'urgence.", sfGo:"Localiser et préparer le message", sfCancel:"Annuler", sfWait:"Localisation en cours...", sfSend:"Ouvrir Messages et envoyer", sfCopy:"Copier le message", sfShare:"Partager", sfCopied:"Copié.", sfLast:"Position actuelle introuvable. Dernière position connue utilisée.", sfNoFix:"Position introuvable. Envoyez le message sans.", sfBody:"Appli Al Marsat : j'ai besoin d'aide en mer.", sfPos:"Ma position", sfAcc:"Précision", sfTime:"Heure", sfRetT:"Heure de retour", sfRetD:"Fixez votre heure de retour. Si vous êtes en retard, l'appli (ouverte) vous le rappelle et prépare un message pour vos proches. Réglez aussi une alarme sur le téléphone.", sfH:"h", sfDue:"Retour prévu", sfNoRet:"Aucune heure fixée", sfClear:"Annuler l'heure", sfOverT:"Heure de retour dépassée", sfOverD:"Êtes-vous bien rentré ?", sfOk:"Je suis arrivé", sfExt:"Prolonger d'1 h", sfTell:"Envoyer ma position à ma famille", sfLateBody:"Je suis en retard sur mon heure de retour. Je vais bien et je rentre, voici ma position :", sfDenied:"Localisation refusée : autorisez la position pour l'appli dans les réglages du navigateur, puis réessayez.", sfRetry:"Réessayer", sfWarn:"Attention : vérifiez que votre SIM a du crédit SMS avant de partir en mer et testez SOS une fois à terre. Sans SMS, utilisez « Partager » ou « Copier » avec WhatsApp si vous avez internet.", banNote:"La pêche est actuellement interdite. Ce pourcentage ne concerne que l'état de la mer, pour la sécurité.", sfMsgLang:"Langue du message SOS (pour le destinataire)",
 rpMail:"Envoyer par e-mail", rpSup:"Numéro d'assistance (WhatsApp) :",
 rpT:"Signaler un problème", rpInfo:"En cas d'erreur, copiez le rapport et envoyez-le au développeur. Il ne contient que des informations techniques (version et texte de l'erreur), ni votre position, ni vos numéros, ni vos données de pêche. Rien n'est envoyé sans votre action.", rpCopy:"Copier le rapport", rpWa:"Envoyer par WhatsApp", rpClr:"Effacer le journal", rpNone:"Aucune erreur enregistrée. (L'appli va bien)", rpCopied:"Rapport copié.", rpN:"Erreurs enregistrées :",
 rdT:"Message radio et signaux (sans crédit ni internet)", rdBtn:"Écran message radio", rdFl:"Signal SOS lumineux et sonore", rdClose:"Fermer", rdHow:"Sur une VHF marine : appuyez sur l'émission et dites lentement : « MAYDAY, MAYDAY, MAYDAY. Ici [nom du bateau] trois fois. MAYDAY [nom du bateau]. Ma position est ci-dessous. J'ai besoin d'aide. Nombre de personnes : ... ». Relâchez et attendez la réponse. Canal international de détresse : 16.", rdPos:"Votre position (degrés et minutes)", rdN:"nord", rdS:"sud", rdE:"est", rdW:"ouest", rdOld:"Dernière position connue il y a", rdMin:"min", rdNoPos:"Pas encore de position. Placez-vous à découvert et attendez.", rdFlInfo:"Seuls ceux qui sont près de vous la voient et l'entendent. Rien n'est envoyé par le réseau ; ne remplace ni la VHF, ni les fusées, ni une balise de détresse.", rdFlStop:"Touchez l'écran pour arrêter", rdCallT:"Appel direct", rdCallN:"L'appel peut ou non fonctionner sans crédit. Numéros issus d'un site d'information, non confirmés officiellement : appelez-les une fois à terre pour vérifier.", rdMar:"Gendarmerie maritime", rdGen:"Gendarmerie nationale", rdPol:"Police",
  nvT:"Boussole des spots et dérive", nvWarn:"Aide seulement : ne remplace ni un appareil de navigation marine ni votre expérience. La précision du GPS du téléphone varie et sa boussole est sensible aux métaux. Ne vous y fiez pas seul pour rentrer. Vos points restent sur votre téléphone.", nvCatch:"Enregistrer le spot de pêche actuel", nvHome:"Enregistrer le mouillage / la plage", nvWait:"Localisation en cours… peut prendre une minute en mer", nvSaved:"Enregistré", nvErr:"Position introuvable. Activez le GPS et placez le téléphone à ciel dégagé.", nvNone:"Aucun point enregistré", nvPick:"Choisissez un point à rejoindre", nvStart:"Démarrer le guidage", nvStop:"Arrêter le guidage", nvDist:"Distance restante", nvM:"m", nvKm:"km", nvBear:"Cap", nvAcc:"Précision ±", nvSrcG:"Cap du GPS (en mouvement)", nvSrcM:"Cap de la boussole du téléphone", nvNoHd:"Faites un huit avec le téléphone pour calibrer la boussole", nvArr:"Vous êtes arrivé au point", nvRen:"Renommer", nvDel:"Supprimer", nvSure:"Supprimer ce point ?", nvName:"Nom du point", nvDrift:"Alarme de dérive", nvDriftInfo:"Alerte si le bateau s’éloigne du point choisi de plus de :", nvDriftAl:"Dérive ! Vous êtes à", nvSun:"Mode soleil (fort contraste)", nvKindC:"Spot", nvKindH:"Mouillage", nvFull:"Nombre maximum de points atteint (60). Supprimez un ancien point.", nvSel:"Point choisi", nvKeep:"Garder l’écran allumé pendant le guidage", nvNoTarget:"Aucun point choisi", nvOff:"Guidage arrêté", 
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
var _ac=null,_dng=false;
var SUP_DEF={whatsapp:'+22232302889',email:'almarsat.app@gmail.com'};
var EMG=[{k:'rdMar',n:'45253990'},{k:'rdGen',n:'116'},{k:'rdPol',n:'117'}]; /* audio context and danger-chime state (declared early: the first render runs before the end of the file) */
if(window.T_EXTRA)for(var _k in window.T_EXTRA)T[_k]=window.T_EXTRA[_k];
var NAVI=["<path d=\"M3 11.5 12 4l9 7.5\"/><path d=\"M5.5 10v9.5h13V10\"/><path d=\"M10 19.5v-5h4v5\"/>", "<path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/>", "<path d=\"M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z\"/><path d=\"M9 9h6M9 13h6\"/>", "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8\"/>"];
NAVI.push('<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="1.6"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/>');
var LANGS=[['ar','العربية'],['fr','Français'],['en','English'],['es','Español'],['pt','Português'],['zh','中文']];
var S={pts:[],navId:null,driftOn:false,driftR:100,sun:false,sound:true,hideLoc:false,alert:false,lang:'ar',tab:0,city:0,mode:'city',gps:null,low:false,log:[],sea:null,lowHintOff:false,
       cfg:{showUnofficial:false,restPeriods:[],seaTtlMinutes:30,soonDays:7,openDays:3},
       safe:{nums:[],due:0},smsLang:'ar',status:'',statusKind:'',busy:false,heading:null,compass:false,msg:{}};
try{
  var sv=JSON.parse(localStorage.getItem(KEY)||'{}');
  if(typeof sv.lang==='string'&&T[sv.lang])S.lang=sv.lang;
  if(typeof sv.smsLang==='string'&&T[sv.smsLang])S.smsLang=sv.smsLang;
  if(typeof sv.city==='number'&&CITIES[sv.city])S.city=sv.city;
  if(sv.mode==='gps'&&sv.gps)S.mode='gps';
  if(sv.gps&&typeof sv.gps.lat==='number')S.gps=sv.gps;
  if(typeof sv.sound==='boolean')S.sound=sv.sound;S.low=!!sv.low;S.alert=!!sv.alert;S.hideLoc=!!sv.hideLoc; S.lowHintOff=!!sv.lowHintOff;
  if(Array.isArray(sv.log))S.log=sv.log.filter(function(e){return e&&typeof e==='object'&&typeof e.species==='string'&&typeof e.date==='string'});
  if(sv.sea&&typeof sv.sea.t==='number')S.sea=sv.sea;
  if(Array.isArray(sv.pts))S.pts=sv.pts.filter(function(p){return p&&typeof p.lat==='number'&&typeof p.lng==='number'&&isFinite(p.lat)&&isFinite(p.lng)&&Math.abs(p.lat)<=90&&Math.abs(p.lng)<=180&&typeof p.name==='string'}).slice(0,60);
  if(typeof sv.navId==='number'&&S.pts.some(function(p){return p.id===sv.navId}))S.navId=sv.navId;
  if(sv.safe&&typeof sv.safe==='object'){if(Array.isArray(sv.safe.nums))S.safe.nums=sv.safe.nums.filter(function(n){return typeof n==='string'&&/^\+?\d{7,15}$/.test(n)}).slice(0,3);if(typeof sv.safe.due==='number'&&isFinite(sv.safe.due))S.safe.due=sv.safe.due}
  S.driftOn=!!sv.driftOn;if([50,100,200,500].indexOf(sv.driftR)>-1)S.driftR=sv.driftR;S.sun=!!sv.sun;
}catch(e){}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify({pts:S.pts,navId:S.navId,driftOn:S.driftOn,driftR:S.driftR,sun:S.sun,sound:S.sound,lang:S.lang,city:S.city,mode:S.mode,gps:S.gps,low:S.low,alert:S.alert,hideLoc:S.hideLoc,lowHintOff:S.lowHintOff,log:S.log,sea:S.sea,safe:S.safe,smsLang:S.smsLang}))}catch(e){}
}
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function L(){return T[S.lang]}
function cfgPick(p,k){var o={};['ar','fr','en','es','pt','zh'].forEach(function(l){o[l]=p[k+'_'+l]||''});return o}
function cfgList(p,k){var o={};['ar','fr','en','es','pt','zh'].forEach(function(l){o[l]=Array.isArray(p[k+'_'+l])?p[k+'_'+l]:null});return o}
function pickList(o){return o[S.lang]||o.en||o.fr||o.ar||null}
var MIN={phone:'+222 45 25 99 70',website:'https://peches.gov.mr'};
function ministryLinks(){return '<p class="note mlinks"><a href="tel:'+MIN.phone.replace(/\s/g,'')+'">'+esc(MIN.phone)+'</a> · <a href="'+esc(MIN.website)+'" target="_blank" rel="noopener">peches.gov.mr</a></p>'}
function pickTxt(o){return o[S.lang]||o.en||o.fr||o.ar||''}
function anyTxt(o){return !!(o.ar||o.fr||o.en)}
function pad(n){return (n<10?'0':'')+n}
function fmtClock(ts){return new Date(ts).toLocaleTimeString(L().loc,{hour:'2-digit',minute:'2-digit'})}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}

/* ---------- Location ---------- */
function coords(){return S.mode==='gps'&&S.gps?{lat:S.gps.lat,lng:S.gps.lng}:{lat:CITIES[S.city].lat,lng:CITIES[S.city].lng}}
function placeName(){return S.mode==='gps'&&S.gps?L().gps:cityName(S.city)}
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
function parseD(s){if(typeof s!=='string')return null;var p=s.split('-');if(p.length!==3)return null;var d=new Date(+p[0],+p[1]-1,+p[2]);return isNaN(d.getTime())?null:d}
function restInfo(){
  var now=new Date(), t=new Date(now.getFullYear(),now.getMonth(),now.getDate()), ps=S.cfg.restPeriods||[];
  var soonN=+S.cfg.soonDays>0?+S.cfg.soonDays:7, openN=+S.cfg.openDays>0?+S.cfg.openDays:3;
  for(var i=0;i<ps.length;i++){
    if(!ps[i]||typeof ps[i]!=='object')continue;
    var a=parseD(ps[i].start), open=!ps[i].end, b=open?new Date(9999,0,1):parseD(ps[i].end);
    /* a mistyped end date must never hide the ban: treat it as "end not announced" */
    if(!open&&(!b||isNaN(b)||(a&&b<a))){open=true;b=new Date(9999,0,1)}
    if(!a||isNaN(a))continue;
    if(!(ps[i].official||S.cfg.showUnofficial))continue;
    if(t>=a&&t<=b){
      var left=open?0:Math.round((b-t)/86400000)+1;
      return {active:true,open:open,start:a,end:b,days:open?Math.round((t-a)/86400000)+1:left,soon:!open&&left<=soonN,official:!!ps[i].official,scope:cfgPick(ps[i],'scope'),penalty:cfgPick(ps[i],'penalty'),expected:cfgPick(ps[i],'expected'),chip:cfgPick(ps[i],'chip'),exc:cfgList(ps[i],'exceptions')};
    }
    if(!open&&t>b&&Math.round((t-b)/86400000)<=openN)return {active:false,justOpened:true};
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
  document.title=t.name==='Al Marsat'?'Al Marsat':t.name+' Al Marsat';
  document.body.classList.toggle('low',S.low);
  var spOpts=t.speciesList.map(function(s){return '<option value="'+esc(s)+'"></option>'}).join('');
  var cityOpts=CITIES.map(function(c,i){return (i===5?'<optgroup label="'+SPOTSL[S.lang]+'">':'')+'<option value="'+i+'"'+(S.mode==='city'&&i===S.city?' selected':'')+'>'+esc(cityName(i))+'</option>'}).join('')+'</optgroup>';
  $('app').innerHTML=
  '<header><div class="brand">'+logoSvg()+'<div><h1>'+t.name+'</h1><small>'+t.tagline+'</small></div></div>'+'<div class="hbtns"><button type="button" class="hsos" id="hSos" aria-label="'+esc(t.sfSos)+'">SOS</button><button type="button" class="snd" id="bSnd"></button></div></header>'+

  '<div class="tab" id="tab0">'+
   '<div id="hint"></div><div id="restBox"></div>'+
   '<div class="bar"><span id="seaStatus" aria-live="polite"></span><button class="btn ghost" id="bRefresh" type="button">'+t.refresh+'</button></div>'+
   '<section class="card" id="scoreCard"><div class="row"><h2>'+t.today+'</h2><span class="tag" id="placeTag"></span></div>'+
    '<div class="gauge"><svg viewBox="0 0 120 120" role="img" aria-label="'+t.today+'"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--tint)" stroke-width="12"/><circle id="arc" cx="60" cy="60" r="52" fill="none" stroke="var(--good)" stroke-width="12" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="0 327"/><text id="pct" x="60" y="68" text-anchor="middle" font-size="28" font-weight="700" fill="var(--ink)" font-family="Tajawal,sans-serif">--</text></svg>'+
    '<div class="txt"><p class="verdict" id="verdict"></p><p class="sub" id="vtext"></p></div></div>'+
    '<p class="bannote" id="banNote" hidden>'+esc(t.banNote)+'</p>'+
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
    sRow({id:'reportCard',title:t.rpT,tap:1,body:'<p class="note">'+t.rpInfo+'</p><p class="note" id="rpCount"></p><div class="btns"><button class="btn" id="rpCopy" type="button">'+t.rpCopy+'</button><button class="btn ghost" id="rpWa" type="button">'+t.rpWa+'</button><button class="btn ghost" id="rpMail" type="button">'+t.rpMail+'</button><button class="btn ghost" id="rpClr" type="button">'+t.rpClr+'</button></div><p class="note" id="rpSup"></p><p class="nvmsg" id="rpMsg" role="status"></p>'})+
    sRow({id:'installCard',title:t.install,sub:t.installInfo,open:1,body:'<div class="btns"><button class="btn" id="bInstall" type="button" hidden>'+t.install+'</button></div><p class="note" id="iosNote" style="margin-top:8px" hidden>'+t.installIos+'</p>'})+
   '</div></div>'+
   '<div class="sgroup"><h3 class="sh">'+t.gInfo+'</h3><div class="slist">'+
    sRow({title:t.priv,sub:t.privSub,href:'privacy.html#'+S.lang})+
    sRow({title:t.about,sub:t.aboutTxt,tap:1,body:'<p class="note">'+t.attr+'</p>'})+
    sRow({title:t.copy,sub:''})+
   '</div></div>'+
   '<p class="sub" id="noSet" hidden style="text-align:center;margin-top:20px">'+t.noSet+'</p>'+
  '</div>'+

  '<div class="tab" id="tab4" hidden>'+sfHtml(t)+rdHtml(t)+navHtml(t)+'</div>'+

  '<nav class="tabs" aria-label="Navigation"><div class="in">'+t.tabs.map(function(n,i){return '<button type="button" data-go="'+i+'"><svg class="ni" viewBox="0 0 24 24" aria-hidden="true">'+NAVI[i]+'</svg><span>'+n+'</span></button>'}).join('')+'</div></nav>';

      paintSnd();$('bSnd').onclick=function(){S.sound=!S.sound;save();paintSnd();if(S.sound)tick()};
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
  bindNav();bindSafe();bindRad();bindReport();
  if(deferredPrompt)$('bInstall').hidden=false;
  if(isIos()&&!isStandalone())$('iosNote').hidden=false;
  if(isStandalone()){$('installCard').querySelector('small').textContent=t.installed}
}
function rebuild(){stopCompass();build();showTab();updateAll();setStatus();}

function showTab(){
  for(var i=0;i<5;i++)$('tab'+i).hidden=(S.tab!==i);
  if(S.tab===4)renderNavList();
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
/* re-render the rest card only when its content changed, so an open details panel is not collapsed by the 60 s refresh */
function setRest(h){var el=$('restBox');if(el&&el._h!==h){el.innerHTML=h;el._h=h}}
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
    if(r.soon)head=t.soonT;
    var soonNote=r.soon?'<p>'+t.soonD+'</p>':'';
    setRest('<div class="rest'+(r.soon?' soon':'')+'"><h2>'+esc(head)+'</h2>'+cnt+soonNote+
      (sc?'<p><b>'+t.scopeL+'</b> '+esc(sc)+'</p>':'<p>'+t.prep+'</p>')+
      ((sc||pickTxt(r.penalty)||(r.open&&pickTxt(r.expected)))?'<details class="more"><summary>'+t.moreL+'</summary>'+(sc?'<p class="note"><b>'+t.exemptL+'</b></p>'+(pickList(r.exc)?'<ul class="exl">'+pickList(r.exc).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'<p class="note">'+t.exempt+'</p>'):'')+
      (pickTxt(r.penalty)?'<p class="note"><b>'+t.penL+'</b> '+esc(pickTxt(r.penalty))+'</p>':'')+(sc?'<p class="note">'+t.refer+'</p>'+ministryLinks():'')+
      (r.open&&pickTxt(r.expected)?'<p class="note"><b>'+t.expL+'</b> '+esc(pickTxt(r.expected))+'</p>':'')+'</details>':'')+(r.open?'<p><span class="tag warn">'+esc(pickTxt(r.chip)||t.noEnd)+'</span></p>':'')+
      (r.official?'':'<p><span class="tag warn">'+t.unofficial+'</span></p>')+'</div>');
  }else if(r.justOpened)setRest('<div class="rest opened"><h2>'+t.openT+'</h2><p>'+t.openD+'</p></div>');
  else setRest('');
  $('scoreCard').hidden=r.active&&!anyTxt(r.scope);
  $('banNote').hidden=!(r.active&&anyTxt(r.scope));
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
    var fv=function(v,p){return '<span class="fv">'+esc(v)+'</span><span class="fp">'+p+'</span>'};
    $('fw').innerHTML=fv(Math.round(d.wind)+' '+t.kmh,sg(-sc.w));$('fh').innerHTML=fv((Math.round(d.wave*10)/10)+' '+t.m,sg(-sc.h));$('fm').innerHTML=fv(Math.round(il*100)+'%',sg(sc.m));
  }else{
    arc.setAttribute('stroke-dasharray','0 327'); $('pct').textContent='--';
    vd.className='verdict none'; vd.textContent=t.none; $('vtext').textContent=d?t.tOld:t.tNone;
    $('fw').textContent='-';$('fh').textContent='-';$('fm').textContent='-';
  }
  var dng=!!(d&&fresh&&d.wave>2);
  $('danger').hidden=!dng;
  if(dng&&!_dng)chime(2);_dng=dng;

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


/* ---------- Fishing spots, guidance and drift (GPS only: works with no internet) ---------- */
var NV={watch:null,pos:null,head:null,wake:null,on:false,arrived:false,lastAlarm:0,orient:false};
function sep(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
function bearingTo(a,b,c,d){var r=Math.PI/180,y=Math.sin((d-b)*r)*Math.cos(c*r),x=Math.cos(a*r)*Math.sin(c*r)-Math.sin(a*r)*Math.cos(c*r)*Math.cos((d-b)*r);return fix360(Math.atan2(y,x)/r)}
function navPt(){for(var i=0;i<S.pts.length;i++)if(S.pts[i].id===S.navId)return S.pts[i];return null}
function dirWord(b){return L().dirs[Math.round(b/45)%8]}
function navHtml(t){
  return '<section class="card nv'+(S.sun?' sun':'')+'" id="nvBox">'+
   '<h2>'+t.nvT+'</h2>'+
   '<p class="note nvwarn">'+t.nvWarn+'</p>'+
   '<button type="button" class="nvbtn catch" id="nvSaveC">'+t.nvCatch+'</button>'+
   '<button type="button" class="nvbtn home" id="nvSaveH">'+t.nvHome+'</button>'+
   '<p class="nvmsg" id="nvMsg" role="status" aria-live="polite"></p>'+
   '<div class="nvlive" id="nvLive"></div>'+
   '<div class="nvdrift"><label class="nvchk"><input type="checkbox" id="nvDriftOn"><span>'+t.nvDrift+'</span></label>'+
   '<p class="note">'+t.nvDriftInfo+'</p><div class="chips" id="nvR">'+[50,100,200,500].map(function(r){return '<button type="button" class="chip" data-r="'+r+'">'+r+' '+t.nvM+'</button>'}).join('')+'</div></div>'+
   '<ul class="nvlist" id="nvList"></ul>'+
   '<button type="button" class="chip nvsunbtn" id="nvSun">'+t.nvSun+'</button>'+
  '</section>';
}
function navFix(done){
  var t=L(),m=$('nvMsg');
  if(!navigator.geolocation){m.textContent=t.nvErr;return}
  m.textContent=t.nvWait;
  navigator.geolocation.getCurrentPosition(function(p){done(p.coords)},function(){m.textContent=t.nvErr},{enableHighAccuracy:true,timeout:30000,maximumAge:0});
}
function savePoint(kind){
  var t=L(),m=$('nvMsg');
  if(S.pts.length>=60){m.textContent=t.nvFull;return}
  navFix(function(c){
    var n=S.pts.filter(function(p){return p.kind===kind}).length+1;
    var p={id:Date.now(),kind:kind,name:(kind==='home'?t.nvKindH:t.nvKindC)+' '+n,lat:+c.latitude.toFixed(6),lng:+c.longitude.toFixed(6),acc:Math.round(c.accuracy||0),t:Date.now()};
    S.pts.push(p);S.navId=p.id;save();
    m.textContent=t.nvSaved+': '+p.name+(p.acc?' ('+t.nvAcc+p.acc+' '+t.nvM+')':'');
    chime(1);try{if(navigator.vibrate)navigator.vibrate(120)}catch(e){}
    renderNavList();
  });
}
function renderNavList(){
  var t=L(),ul=$('nvList');if(!ul)return;
  if(!S.pts.length){ul.innerHTML='<li class="nvempty">'+t.nvNone+'</li>'}
  else ul.innerHTML=S.pts.slice().reverse().map(function(p){
    var sel=p.id===S.navId,d=NV.pos?distKm(NV.pos.lat,NV.pos.lng,p.lat,p.lng)*1000:null;
    return '<li class="nvrow'+(sel?' sel':'')+'" data-id="'+(+p.id)+'"><button type="button" class="nvpick" data-pick="'+(+p.id)+'" aria-pressed="'+(sel?'true':'false')+'">'+
      '<b>'+esc(p.name)+'</b><small>'+(p.kind==='home'?'⚓ '+t.nvKindH:'🎣 '+t.nvKindC)+(S.hideLoc?'':' · <bdi dir="ltr">'+p.lat.toFixed(4)+', '+p.lng.toFixed(4)+'</bdi>')+(d!=null?' · '+sep(d)+' '+t.nvM:'')+'</small></button>'+
      '<button type="button" class="nvmini" data-ren="'+(+p.id)+'" aria-label="'+esc(t.nvRen)+'">✎</button>'+
      '<button type="button" class="nvmini" data-del="'+(+p.id)+'" aria-label="'+esc(t.nvDel)+'">🗑</button></li>';
  }).join('');
  Array.prototype.forEach.call(ul.querySelectorAll('[data-pick]'),function(b){b.onclick=function(){S.navId=+b.getAttribute('data-pick');NV.arrived=false;save();renderNavList();paintNav()}});
  Array.prototype.forEach.call(ul.querySelectorAll('[data-ren]'),function(b){b.onclick=function(){
    var p=S.pts.filter(function(q){return q.id===+b.getAttribute('data-ren')})[0];if(!p)return;
    var n=window.prompt(t.nvName,p.name);if(n&&n.trim()){p.name=n.trim().slice(0,40);save();renderNavList();paintNav()}}});
  Array.prototype.forEach.call(ul.querySelectorAll('[data-del]'),function(b){b.onclick=function(){
    if(!window.confirm(t.nvSure))return;var id=+b.getAttribute('data-del');
    S.pts=S.pts.filter(function(q){return q.id!==id});if(S.navId===id){S.navId=null;stopNav()}save();renderNavList();paintNav()}});
  paintNav();
}
function paintNav(){
  var t=L(),box=$('nvLive');if(!box)return;
  var p=navPt();
  if(!p){box.innerHTML='<p class="nvempty">'+(S.pts.length?t.nvPick:t.nvNone)+'</p>';return}
  var pos=NV.pos,d=null,b=null,h=null,src='';
  if(pos){d=distKm(pos.lat,pos.lng,p.lat,p.lng)*1000;b=bearingTo(pos.lat,pos.lng,p.lat,p.lng)}
  if(pos&&pos.speed>1.2&&typeof pos.course==='number'&&isFinite(pos.course)){h=pos.course;src=t.nvSrcG}
  else if(NV.head!=null){h=NV.head;src=t.nvSrcM}
  var rot=b==null?0:fix360(b-(h==null?0:h)), dial=h==null?0:-h;
  var svg='<svg class="nvdial" viewBox="0 0 200 200" role="img" aria-label="'+esc(t.nvT)+'"><g transform="rotate('+dial.toFixed(1)+' 100 100)"><circle cx="100" cy="100" r="92" class="rg"/>'+
    '<g class="lb"><text x="100" y="26" text-anchor="middle">N</text><text x="178" y="108" text-anchor="middle">E</text><text x="100" y="188" text-anchor="middle">S</text><text x="22" y="108" text-anchor="middle">W</text></g></g>'+
    '<g transform="rotate('+rot.toFixed(1)+' 100 100)" class="ar'+(b==null?' off':'')+'"><path d="M100 28 L138 112 L112 104 L112 164 L88 164 L88 104 L62 112 Z"/></g></svg>';
  var big=d==null?'--':sep(d);
  box.innerHTML='<div class="nvtgt">'+t.nvSel+': <b>'+esc(p.name)+'</b></div>'+svg+
    '<div class="nvdist"><span class="n" id="nvN">'+big+'</span><span class="u">'+t.nvM+'</span></div>'+
    (d!=null&&d>=1000?'<div class="nvkm">≈ '+(d/1000).toFixed(2)+' '+t.nvKm+'</div>':'')+
    '<div class="nvinfo">'+(b!=null?t.nvBear+': <b>'+Math.round(b)+'°</b> '+dirWord(b):'')+(pos&&pos.acc?' · '+t.nvAcc+Math.round(pos.acc)+' '+t.nvM:'')+'</div>'+
    '<div class="nvinfo sm">'+(NV.on?(h==null?t.compassWait:src):t.nvOff)+'</div>'+
    ((d!=null&&NV.on&&d<=Math.max(25,(pos&&pos.acc)||0))?'<div class="nvarr">✓ '+t.nvArr+'</div>':'')+
    '<button type="button" class="nvbtn go'+(NV.on?' stop':'')+'" id="nvGo">'+(NV.on?t.nvStop:t.nvStart)+'</button>';
  $('nvGo').onclick=function(){NV.on?stopNav():startNav()};
}
function onNavOrient(e){
  var h=null;
  if(typeof e.webkitCompassHeading==='number')h=e.webkitCompassHeading;
  else if((e.absolute===true||e.type==='deviceorientationabsolute')&&typeof e.alpha==='number')h=360-e.alpha;
  if(h==null)return;
  NV.head=fix360(h);
  var now=Date.now();if(!NV._pt||now-NV._pt>150){NV._pt=now;paintNav()}
}
function onNavPos(p){
  var c=p.coords;
  NV.pos={lat:c.latitude,lng:c.longitude,acc:c.accuracy,speed:c.speed,course:c.heading,ts:Date.now()};
  var pt=navPt();
  if(pt){
    var d=distKm(c.latitude,c.longitude,pt.lat,pt.lng)*1000;
    if(d<=Math.max(25,c.accuracy||0)){if(!NV.arrived){NV.arrived=true;chime(3);try{if(navigator.vibrate)navigator.vibrate([300,150,300])}catch(e){}}}
    else if(d>Math.max(60,(c.accuracy||0)*2))NV.arrived=false;
    if(S.driftOn&&d>S.driftR&&Date.now()-NV.lastAlarm>20000){
      NV.lastAlarm=Date.now();chime(3);try{if(navigator.vibrate)navigator.vibrate([600,200,600,200,600])}catch(e){}
      var m=$('nvMsg');if(m)m.textContent='⚠ '+L().nvDriftAl+' '+sep(d)+' '+L().nvM;
    }
  }
  paintNav();
  var ul=$('nvList');if(ul&&(!NV._lt||Date.now()-NV._lt>5000)){NV._lt=Date.now();if(S.tab===4)renderNavList()}
}
function startNav(){
  var t=L();
  if(!navigator.geolocation){$('nvMsg').textContent=t.nvErr;return}
  if(NV.watch!=null)navigator.geolocation.clearWatch(NV.watch);
  NV.watch=navigator.geolocation.watchPosition(onNavPos,function(){var m=$('nvMsg');if(m)m.textContent=L().nvErr},{enableHighAccuracy:true,maximumAge:1000,timeout:30000});
  NV.on=true;NV.arrived=false;
  var go=function(){if(NV.orient)return;NV.orient=true;window.addEventListener('deviceorientationabsolute',onNavOrient,true);window.addEventListener('deviceorientation',onNavOrient,true)};
  if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
    DeviceOrientationEvent.requestPermission().then(function(r){if(r==='granted')go()},function(){});
  }else go();
  try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(w){NV.wake=w}).catch(function(){})}catch(e){}
  paintNav();
}
function stopNav(){
  if(NV.watch!=null){try{navigator.geolocation.clearWatch(NV.watch)}catch(e){}}
  NV.watch=null;NV.on=false;NV.head=null;NV.orient=false;
  window.removeEventListener('deviceorientationabsolute',onNavOrient,true);
  window.removeEventListener('deviceorientation',onNavOrient,true);
  try{if(NV.wake){NV.wake.release();NV.wake=null}}catch(e){}
  paintNav();
}
document.addEventListener('visibilitychange',function(){
  if(!document.hidden&&NV.on&&navigator.wakeLock&&!NV.wake){try{navigator.wakeLock.request('screen').then(function(w){NV.wake=w}).catch(function(){})}catch(e){}}
});
function bindNav(){
  if(!$('nvSaveC'))return;
  $('nvSaveC').onclick=function(){savePoint('catch')};
  $('nvSaveH').onclick=function(){savePoint('home')};
  var dc=$('nvDriftOn');dc.checked=S.driftOn;dc.onchange=function(){S.driftOn=dc.checked;NV.lastAlarm=0;save();if(S.driftOn&&!NV.on&&navPt())startNav()};
  Array.prototype.forEach.call(document.querySelectorAll('#nvR [data-r]'),function(b){
    var on=+b.getAttribute('data-r')===S.driftR;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false');
    b.onclick=function(){S.driftR=+b.getAttribute('data-r');save();Array.prototype.forEach.call(document.querySelectorAll('#nvR [data-r]'),function(x){var o=+x.getAttribute('data-r')===S.driftR;x.classList.toggle('on',o);x.setAttribute('aria-pressed',o?'true':'false')})}});
  $('nvSun').onclick=function(){S.sun=!S.sun;save();$('nvBox').classList.toggle('sun',S.sun)};
  renderNavList();
}

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
    var sn=e.snap?('<small class="sn">'+t.wind+' '+esc(+e.snap.w||0)+' '+t.kmh+' • '+t.wave+' '+esc(+e.snap.h||0)+' '+t.m+' • '+esc(t.tideN[e.snap.td]||'')+'</small>'):'';
    var loc=(e.lat!=null&&!S.hideLoc)?('<small class="sn">📍 '+esc(+e.lat||0)+', '+esc(+e.lng||0)+'</small>'):(e.lat!=null?'<small class="sn">📍 …</small>':'');
    return '<li><div class="l"><b>'+esc(e.species)+'</b><small>'+esc(e.date)+(e.place?' - '+esc(e.place):'')+(e.note?' - '+esc(e.note):'')+'</small>'+sn+loc+'</div>'+
      '<span class="kg">'+(e.kg!=null?esc(+e.kg||0)+' '+t.kg:'')+'</span><button class="del" type="button" data-del="'+esc(+e.id||0)+'">'+t.del+'</button></li>';
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
    if(c&&c.soonDays)S.cfg.soonDays=c.soonDays;
    if(c&&c.openDays)S.cfg.openDays=c.openDays;
    if(c&&c.support&&typeof c.support==='object')S.cfg.support=c.support;
    try{localStorage.setItem(KEY+'.cfg',JSON.stringify(S.cfg))}catch(e){}
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
  l.href='https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Reem+Kufi:wght@500;700&display=swap';
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
function ac(){try{var A=window.AudioContext||window.webkitAudioContext;if(!A)return null;_ac=_ac||new A();if(_ac.state==='suspended')_ac.resume();return _ac}catch(e){return null}}
/* one soft synthesized note: no audio files are used */
function note(freq,t0,dur,vol,type){
  var c=ac();if(!c)return;
  var o=c.createOscillator(),g=c.createGain(),t=c.currentTime+t0;
  o.type=type||'sine';o.frequency.setValueAtTime(freq,t);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+dur+.03);
}
function tick(){if(!S.sound)return;try{note(620,0,.07,.05,'sine');note(930,.012,.05,.025,'sine')}catch(e){}}
function chime(n){if(!S.sound)return;try{var f=[784,988,1175],i;n=n||3;for(i=0;i<n;i++)note(f[i],i*.28,.9,.14,'sine')}catch(e){}}
function paintSnd(){
  var b=$('bSnd'),t=L();if(!b)return;
  var on='<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M17.8 6.8a7.2 7.2 0 0 1 0 10.4"/>';
  var off='<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>';
  b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(S.sound?on:off)+'</svg>';
  b.setAttribute('aria-pressed',S.sound?'true':'false');
  b.setAttribute('aria-label',S.sound?t.sndOn:t.sndOff);b.title=S.sound?t.sndOn:t.sndOff;
}
/* soft click on the main controls (tabs, buttons, chips, setting rows) */
document.addEventListener('click',function(e){
  var el=e.target&&e.target.closest&&e.target.closest('button,.btn,.chip,[data-go],.shead,.tgl');
  if(!el||el.id==='bSnd'||el.id==='updNo')return;
  tick();
},true);
['pointerdown','touchstart','keydown'].forEach(function(ev){document.addEventListener(ev,function(){if(S.sound||S.alert)ac()},{passive:true})});
function beep(test){
  try{if(navigator.vibrate)navigator.vibrate(test?[150]:[500,200,500,200,500])}catch(e){}
  chime(test?1:3);
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


/* ---------- Safety: SOS by SMS + return-time check-in ---------- */
var SF={pos:null,busy:false,_t:0};
function sfNorm(s){
  var d=String(s||'').replace(/[٠-٩]/g,function(c){return c.charCodeAt(0)-1632}).replace(/[^\d+]/g,'');
  if(d.indexOf('00')===0)d='+'+d.slice(2);
  if(/^\d{8}$/.test(d))d='+222'+d;
  var n=d.replace(/\D/g,'');
  return(n.length>=7&&n.length<=15&&/^\+?\d+$/.test(d))?(d.charAt(0)==='+'?d:'+'+d):null;
}
function sfHtml(t){
  return '<section class="card sf" id="sfBox"><h2>'+t.sfT+'</h2>'+
   '<button type="button" class="sfsos" id="sfSos">'+t.sfSos+'</button>'+
   '<p class="note">'+t.sfInfo+'</p><p class="note sfwarn">'+t.sfWarn+'</p>'+
   '<h3>'+t.sfMsgLang+'</h3><div class="chips" id="sfLangs">'+LANGS.map(function(l){return '<button type="button" class="chip'+(S.smsLang===l[0]?' on':'')+'" data-sl="'+l[0]+'" aria-pressed="'+(S.smsLang===l[0])+'">'+l[1]+'</button>'}).join('')+'</div>'+
   '<h3>'+t.sfNums+'</h3><ul class="sfnums" id="sfNums"></ul>'+
   '<div class="sfadd"><input type="tel" inputmode="tel" dir="ltr" id="sfNum" maxlength="20" placeholder="'+esc(t.sfNumPh)+'" aria-label="'+esc(t.sfNumPh)+'"><button type="button" class="btn ghost" id="sfAdd">'+t.sfAdd+'</button></div>'+
   '<p class="nvmsg" id="sfMsg" role="status" aria-live="polite"></p>'+
   '<h3>'+t.sfRetT+'</h3><p class="note">'+t.sfRetD+'</p>'+
   '<div class="chips" id="sfH">'+[2,4,6,8,12].map(function(h){return '<button type="button" class="chip" data-h="'+h+'">+'+h+' '+t.sfH+'</button>'}).join('')+'</div>'+
   '<p class="sfdue" id="sfDue"></p></section>';
}
function sfPaint(){
  var t=L(),ul=$('sfNums');if(!ul)return;
  ul.innerHTML=S.safe.nums.map(function(n,i){return '<li><bdi dir="ltr">'+esc(n)+'</bdi><button type="button" class="chip" data-d="'+i+'">'+esc(t.sfDel)+'</button></li>'}).join('');
  var d=$('sfDue'),due=S.safe.due;
  d.innerHTML=due?t.sfDue+': <b><bdi dir="ltr">'+new Date(due).toLocaleTimeString(t.loc||undefined,{hour:'2-digit',minute:'2-digit'})+'</bdi></b> <button type="button" class="chip" id="sfClr">'+esc(t.sfClear)+'</button>':t.sfNoRet;
  var c=$('sfClr');if(c)c.onclick=function(){S.safe.due=0;save();sfPaint();sfCheck()};
  Array.prototype.forEach.call(ul.querySelectorAll('[data-d]'),function(b){b.onclick=function(){S.safe.nums.splice(+b.getAttribute('data-d'),1);save();sfPaint()}});
}
function SM(){return T[S.smsLang]||T.ar}
function sfBodyText(extra,pos){
  return extra+(pos?' '+SM().sfPos+': \u2066'+pos.lat.toFixed(5)+', '+pos.lng.toFixed(5)+'\u2069 https://maps.google.com/?q='+pos.lat.toFixed(5)+','+pos.lng.toFixed(5):'');
}
function sfGetPos(cb){
  var fb=function(den){var p=NV.pos&&NV.pos.lat!=null?NV.pos:SF.pos;cb(p||null,!!p,den)};
  if(!navigator.geolocation){fb(false);return}
  var ok=function(p){var c=p.coords;SF.pos={lat:c.latitude,lng:c.longitude,acc:c.accuracy,ts:Date.now()};cb(SF.pos,false,false)};
  navigator.geolocation.getCurrentPosition(ok,function(e){
    if(e&&e.code===1){fb(true);return}
    navigator.geolocation.getCurrentPosition(ok,function(e2){fb(!!(e2&&e2.code===1))},{enableHighAccuracy:false,timeout:12000,maximumAge:300000});
  },{enableHighAccuracy:true,timeout:15000,maximumAge:0});
}
function sfModal(html){
  var o=document.createElement('div');o.className='sfmod';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');
  o.innerHTML='<div class="sfbox">'+html+'</div>';document.body.appendChild(o);
  o.close=function(){if(o.parentNode)o.parentNode.removeChild(o)};return o;
}
function sfSmsUrl(body){
  var ios=isIos(),nums=S.safe.nums.join(',');
  return 'sms:'+nums+(ios?'&':'?')+'body='+encodeURIComponent(body);
}
function sfDeliver(o,body,note){
  var t=L(),has=S.safe.nums.length;
  o.querySelector('.sfbox').innerHTML='<h2>'+esc(t.sfConfT)+'</h2>'+(note?'<p class="note">'+esc(note)+'</p>':'')+
   '<textarea class="sftxt" readonly>'+esc(body)+'</textarea>'+(has?'':'<p class="note">'+esc(t.sfNoNum)+'</p>')+
   '<div class="sfbtns">'+(has?'<a class="btn bad" id="sfLink" href="'+esc(sfSmsUrl(body))+'">'+esc(t.sfSend)+'</a>':'')+
   '<button type="button" class="btn ghost" id="sfCp">'+esc(t.sfCopy)+'</button>'+
   (navigator.share?'<button type="button" class="btn ghost" id="sfSh">'+esc(t.sfShare)+'</button>':'')+
   '<button type="button" class="btn ghost" id="sfX">'+esc(t.sfCancel)+'</button></div><p class="nvmsg" id="sfM2" role="status"></p>';
  $('sfX').onclick=o.close;
  $('sfCp').onclick=function(){
    var ok=function(){$('sfM2').textContent=t.sfCopied};
    try{navigator.clipboard.writeText(body).then(ok,function(){var a=o.querySelector('textarea');a.select();document.execCommand('copy');ok()})}catch(e){var a=o.querySelector('textarea');a.select();try{document.execCommand('copy')}catch(_){}ok()}
  };
  if($('sfSh'))$('sfSh').onclick=function(){try{navigator.share({text:body}).catch(function(){})}catch(e){}};
}
function sfPrepare(o,intro){
  var t=L();
  o.querySelector('.sfbox').innerHTML='<h2>'+esc(t.sfWait)+'</h2><p class="note">'+esc(t.sfConfD)+'</p>';
  sfGetPos(function(p,old,den){
    var note=p?(old?t.sfLast:''):(den?t.sfDenied:t.sfNoFix);
    sfDeliver(o,sfBodyText(intro,p),note);
    if(!p){var r=document.createElement('button');r.type='button';r.className='btn';r.id='sfRt';r.textContent=t.sfRetry;
      o.querySelector('.sfbtns').insertBefore(r,o.querySelector('.sfbtns').firstChild);r.onclick=function(){sfPrepare(o,intro)}}
  });
}
function sfSos(){
  var t=L(),o=sfModal('<h2>'+esc(t.sfConfT)+'</h2><p>'+esc(t.sfConfD)+'</p><div class="sfbtns"><button type="button" class="btn bad" id="sfGo">'+esc(t.sfGo)+'</button><button type="button" class="btn ghost" id="sfNo">'+esc(t.sfCancel)+'</button></div>');
  $('sfNo').onclick=o.close;$('sfGo').onclick=function(){sfPrepare(o,(/^SOS/i.test(SM().sfBody)?'':'SOS ')+SM().sfBody)};
  try{if(navigator.vibrate)navigator.vibrate(200)}catch(e){}
}
function sfAddNum(){
  var t=L(),i=$('sfNum'),m=$('sfMsg'),n=sfNorm(i.value);
  if(!n){m.textContent=t.sfBad;return}
  if(S.safe.nums.length>=3){m.textContent=t.sfBad;return}
  if(S.safe.nums.indexOf(n)<0)S.safe.nums.push(n);
  i.value='';m.textContent='';save();sfPaint();
}
var _sfRing=0;
function sfCheck(){
  var b=$('sfOver'),due=S.safe.due,t=L();
  if(!due||Date.now()<due){if(b&&b.parentNode)b.parentNode.removeChild(b);return}
  if(!b){
    b=document.createElement('div');b.id='sfOver';b.className='sfover';b.setAttribute('role','alertdialog');
    b.innerHTML='<b>'+esc(t.sfOverT)+'</b><span>'+esc(t.sfOverD)+'</span><div class="sfbtns"><button type="button" class="btn" id="sfOk">'+esc(t.sfOk)+'</button><button type="button" class="btn ghost" id="sfEx">'+esc(t.sfExt)+'</button><button type="button" class="btn bad" id="sfTl">'+esc(t.sfTell)+'</button></div>';
    document.body.appendChild(b);
    $('sfOk').onclick=function(){S.safe.due=0;save();sfPaint();sfCheck()};
    $('sfEx').onclick=function(){S.safe.due=Date.now()+3600000;save();sfPaint();sfCheck()};
    $('sfTl').onclick=function(){sfPrepare(sfModal(''),SM().sfLateBody)};
  }
  if(Date.now()-_sfRing>45000){_sfRing=Date.now();chime(3);try{if(navigator.vibrate)navigator.vibrate([400,200,400])}catch(e){}}
}
function bindSafe(){
  if(!$('sfBox'))return;
  $('sfSos').onclick=sfSos;$('hSos').onclick=sfSos;
  Array.prototype.forEach.call(document.querySelectorAll('#sfLangs [data-sl]'),function(b){b.onclick=function(){S.smsLang=b.getAttribute('data-sl');save();Array.prototype.forEach.call(document.querySelectorAll('#sfLangs [data-sl]'),function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)})}});
  $('sfAdd').onclick=sfAddNum;
  $('sfNum').onkeydown=function(e){if(e.key==='Enter'){e.preventDefault();sfAddNum()}};
  Array.prototype.forEach.call(document.querySelectorAll('#sfH [data-h]'),function(b){b.onclick=function(){S.safe.due=Date.now()+(+b.getAttribute('data-h'))*3600000;_sfRing=0;save();sfPaint();sfCheck()}});
  var ob=$('sfOver');if(ob&&ob.parentNode)ob.parentNode.removeChild(ob);
  sfPaint();sfCheck();
}
setInterval(sfCheck,20000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)sfCheck()});


/* ---------- Radio-call screen, SOS light/sound signal, direct-call list (all work with no credit and no internet) ---------- */
function rdHtml(t){
  return '<section class="card sf" id="rdBox"><h2>'+t.rdT+'</h2>'+
   '<div class="sfbtns"><button type="button" class="btn" id="rdRadio">'+t.rdBtn+'</button><button type="button" class="btn bad" id="rdFlash">'+t.rdFl+'</button></div>'+
   '<h3>'+t.rdCallT+'</h3><div class="sfbtns">'+EMG.map(function(e){return '<a class="btn ghost" href="tel:'+(e.n.length>3?'+222':'')+e.n+'">'+esc(t[e.k])+' <bdi dir="ltr">'+e.n+'</bdi></a>'}).join('')+'</div>'+
   '<p class="note">'+t.rdCallN+'</p></section>';
}
function rdDM(v,pos,neg){
  var a=Math.abs(v),d=Math.floor(a),m=(a-d)*60,L2=L();
  if(m>=59.9995){d++;m=0}
  return '<bdi dir="ltr">'+d+'° '+m.toFixed(3)+'′</bdi> '+(v>=0?L2[pos]:L2[neg]);
}
function rdRadio(){
  var t=L(),o=sfModal('<h2>'+esc(t.rdBtn)+'</h2><p class="note">'+esc(t.rdHow)+'</p><div class="rdpos" id="rdPos"></div><p class="nvmsg" id="rdSub"></p><div class="sfbtns"><button type="button" class="btn ghost" id="rdX">'+esc(t.rdClose)+'</button></div>'),w=null;
  function paint(p,stale){
    var b=$('rdPos'),s=$('rdSub');if(!b)return;
    if(!p){b.textContent=t.sfWait;s.textContent=t.rdNoPos;return}
    b.innerHTML='<div>'+rdDM(p.lat,'rdN','rdS')+'</div><div>'+rdDM(p.lng,'rdE','rdW')+'</div>';
    var age=p.ts?Math.round((Date.now()-p.ts)/60000):0;
    s.textContent=(stale&&age>0?t.rdOld+' '+age+' '+t.rdMin+' · ':'')+(p.acc?t.sfAcc+' ±'+Math.round(p.acc)+' m':'');
  }
  var last=NV.pos&&NV.pos.lat!=null?NV.pos:SF.pos;paint(last,true);
  if(navigator.geolocation){try{w=navigator.geolocation.watchPosition(function(p){var c=p.coords;SF.pos={lat:c.latitude,lng:c.longitude,acc:c.accuracy,ts:Date.now()};paint(SF.pos,false)},function(){},{enableHighAccuracy:true,maximumAge:0,timeout:30000})}catch(e){}}
  var wl=null;try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(x){wl=x}).catch(function(){})}catch(e){}
  $('rdX').onclick=function(){try{if(w!=null)navigator.geolocation.clearWatch(w)}catch(e){}try{if(wl)wl.release()}catch(e){}o.close()};
}
/* SOS in Morse: ... --- ... ; unit 250 ms; flashes the screen, beeps and vibrates until touched */
function rdFlash(){
  var t=L(),u=250,seq=[1,1,1,1,1,1,0,3,1,3,1,3,0,3,1,1,1,1,1,1],pat=[],i;
  /* seq alternates on/off durations: build explicit on/off list */
  var sym='...---...',on=[];for(i=0;i<sym.length;i++)on.push(sym[i]==='.'?1:3);
  var o=document.createElement('div');o.className='rdfl';o.setAttribute('role','alertdialog');
  o.innerHTML='<div class="rdflt">SOS</div><p>'+esc(t.rdFlInfo)+'</p><p><b>'+esc(t.rdFlStop)+'</b></p>';
  document.body.appendChild(o);
  var stop=false,wl=null;try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(x){wl=x}).catch(function(){})}catch(e){}
  ac();
  function cycle(){
    if(stop)return;
    var tm=0,vib=[];
    on.forEach(function(n,k){
      var d=n*u;
      (function(at,dd){setTimeout(function(){if(stop)return;o.classList.add('lit');try{note(880,0,dd/1000,.5,'square')}catch(e){}},at);setTimeout(function(){o.classList.remove('lit')},at+dd)})(tm,d);
      vib.push(d);tm+=d;
      var gap=(k===on.length-1)?7*u:(k%3===2?3*u:u);vib.push(gap);tm+=gap;
    });
    try{if(navigator.vibrate)navigator.vibrate(vib.slice(0,-1))}catch(e){}
    setTimeout(cycle,tm);
  }
  cycle();
  o.onclick=function(){stop=true;try{if(navigator.vibrate)navigator.vibrate(0)}catch(e){}try{if(wl)wl.release()}catch(e){}o.parentNode&&o.parentNode.removeChild(o)};
}
function bindRad(){if(!$('rdBox'))return;$('rdRadio').onclick=rdRadio;$('rdFlash').onclick=rdFlash}


function sup(){
  var c=(S.cfg&&S.cfg.support)||{},w=String(c.whatsapp||'').replace(/[^\d]/g,''),m=String(c.email||'');
  return {wa:(w.length>=8&&w.length<=15)?w:SUP_DEF.whatsapp.replace(/\D/g,''),mail:/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(m)?m:SUP_DEF.email};
}

/* ---------- Problem report (copy / WhatsApp), technical info only ---------- */
function rpBuild(cb){
  function done(ver){
    var a=errRead(),t=L();
    var txt='Al Marsat report\nversion: '+ver+'\nlang: '+S.lang+'\nscreen: '+screen.width+'x'+screen.height+'\nua: '+(navigator.userAgent||'').slice(0,160)+'\nerrors: '+a.length+'\n'+
      a.map(function(x,i){return (i+1)+') '+x.t+' | '+x.m+' | '+x.s}).join('\n');
    cb(txt);
  }
  try{caches.keys().then(function(k){var v=(k.filter(function(x){return /^marsat-v/.test(x)})[0]||'unknown');done(v)},function(){done('unknown')})}catch(e){done('unknown')}
}
function bindReport(){
  if(!$('reportCard'))return;
  var n=function(){$('rpCount').textContent=errRead().length?L().rpN+' '+errRead().length:L().rpNone};n();
  var hd=document.querySelector('#reportCard .shead');if(hd)hd.addEventListener('click',n);
  $('rpCopy').onclick=function(){rpBuild(function(txt){
    var ok=function(){$('rpMsg').textContent=L().rpCopied};
    try{navigator.clipboard.writeText(txt).then(ok,function(){ok()})}catch(e){ok()}
  })};
  $('rpSup').innerHTML=esc(L().rpSup)+' <bdi dir="ltr">+'+sup().wa+'</bdi>';
  $('rpWa').onclick=function(){rpBuild(function(txt){
    window.open('https://wa.me/'+sup().wa+'?text='+encodeURIComponent(txt),'_blank','noopener');
  })};
  $('rpMail').onclick=function(){rpBuild(function(txt){
    window.location.href='mailto:'+sup().mail+'?subject='+encodeURIComponent('Al Marsat report')+'&body='+encodeURIComponent(txt);
  })};
  $('rpClr').onclick=function(){try{localStorage.removeItem(ERRK)}catch(e){}n()};
}

/* ---------- Update notice: shown when a new service worker takes over an already-installed app ---------- */
function showUpdate(){
  if($('updBar'))return;
  var t=L(), d=document.createElement('div'); d.id='updBar'; d.className='upd'; d.setAttribute('role','status');
  d.innerHTML='<span>'+esc(t.updT)+'</span><button type="button" class="btn" id="updGo">'+esc(t.updB)+'</button><button type="button" class="updx" id="updNo" aria-label="'+esc(t.updX)+'">&times;</button>';
  document.body.appendChild(d);
  $('updGo').onclick=function(){location.reload()};
  $('updNo').onclick=function(){d.remove()};
}
if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
  var _hadCtl=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange',function(){if(!_hadCtl){_hadCtl=true;return}showUpdate()});
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').then(function(r){
    document.addEventListener('visibilitychange',function(){if(!document.hidden)r.update().catch(function(){})});
  }).catch(function(){})});
}
})();
