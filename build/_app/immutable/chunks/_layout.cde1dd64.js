import"./index.e15d00df.js";import{R as d}from"./config.30a5bf93.js";function s(n,e,t){if(typeof n=="object"&&typeof e=="object"){if(Array.isArray(n)&&Array.isArray(e))for(t=0;t<e.length;t++)n[t]=s(n[t],e[t]);else for(t in e){if(t==="__proto__"||t==="constructor"||t==="prototype")break;n[t]=s(n[t],e[t])}return n}return e}function u(n,e,t){e.split&&(e=e.split("."));for(var i=0,l=e.length,a=n,o,r;i<l&&(r=e[i++],!(r==="__proto__"||r==="constructor"||r==="prototype"));)a=a[r]=i===l?s(a[r],t):typeof(o=a[r])==typeof e?o:e[i]*0!==0||~(""+e[i]).indexOf(".")?{}:[]}const c=n=>{const e=(i,l,a)=>{a||(a=[]),Object.keys(i||{}).forEach(o=>{a.push(o),typeof i[o]=="string"?(a.pop(),u(l,[o,...a].join(".").toLowerCase(),i[o])):(e(i[o],l,a),a.pop())})};let t={};return e(n,t,null),t},p=c({header:{title:{en:"Running calculator",sk:"Bežecká kalkulačka",de:"Laufender Rechner"},settings:{en:"Settings",sk:"Nastavenie",de:"Einstellungen"},home:{en:"Back to home",sk:"Späť na úvod",de:"Zurück zur Einleitung"}},out_of_display_range:{en:"The result is outside the displayable range. Please edit the inputs.",sk:"Výsledok je mimo zobraziteľný rozsah. Prosím upravte vstupy.",de:"Das Ergebnis liegt außerhalb des darstellbaren Bereichs. Bitte bearbeiten Sie die Eingaben."},distance:{title:{sk:"Vzdialenosť",en:"Distance",de:"Distanz"},menu:{marathon:{sk:"Maratón",en:"Marathon",de:"Marathon"},halfmarathon:{sk:"Polmaratón",en:"Half marathon",de:"Halbmarathon"},mile:{sk:"Míľa",en:"A mile",de:"Eine Meile"}}},time:{title:{sk:"Čas",en:"Time",de:"Zeit"}},tempo:{title:{sk:"Tempo",en:"Pace",de:"Tempo"}},[d.main.id]:{html_title:{en:"Running pace calculator",sk:"Kalkulačka bežeckého tempa",de:"Lauftempo-Rechner"},og:{title:{sk:"Kalkulačka bežeckej vzdialenosti, času a tempa.",en:"Tiny calculator of runner's distance, time and pace.",de:"Winziger Rechner für Distanz, Zeit und Tempo des Läufers."},description:{sk:"Upravte ľubovoľné dve, tretí sa dopočíta.",en:"Edit any two, the third will be calculated.",de:"Bearbeiten Sie zwei beliebige, der dritte wird berechnet."}}},[d.settings.id]:{html_title:{en:"Settings",sk:"Nastavenia",de:"Einstellungen"},language:{en:"Language",sk:"Jazyk",de:"Lokalisierung"},header:{title:{en:"Settings",sk:"Nastavenia",de:"Einstellungen"}}}});function m({params:n}){return{i18n:p[n.locale]||{}}}const h=Object.freeze(Object.defineProperty({__proto__:null,load:m},Symbol.toStringTag,{value:"Module"}));export{h as _,m as l};