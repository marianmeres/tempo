import{S as P,i as q,s as K,k as $,a as L,K as S,l as w,m as v,h,c as M,L as z,n as s,M as N,b as R,I as n,J as B,H as Z,q as V,r as j,C as se,y as U,D as re,z as Q,A as W,E as le,F as ne,G as oe,g as F,d as O,B as X}from"../chunks/index.e503be3a.js";import{b as Y}from"../chunks/paths.6b218dfd.js";import{p as x}from"../chunks/stores.6dfec3fe.js";import{c as ie}from"../chunks/index.e15d00df.js";import{c as fe}from"../chunks/i18n.63757b31.js";import{R as T}from"../chunks/config.30a5bf93.js";function he(r){let a,t,l,o=r[2](r[1],"home")+"",u,i,f,H,m,p,E=r[2](r[1],`/${r[0].route.id}.header.title`,r[2].raw(r[1],"title"))+"",c,e,d,b=r[2](r[1],"settings")+"",k,A,y,C;return{c(){a=$("header"),t=$("a"),l=$("span"),u=L(),i=S("svg"),f=S("path"),m=L(),p=$("h1"),c=L(),e=$("a"),d=$("span"),k=L(),A=S("svg"),y=S("path"),this.h()},l(_){a=w(_,"HEADER",{class:!0});var g=v(a);t=w(g,"A",{href:!0,class:!0});var D=v(t);l=w(D,"SPAN",{class:!0});var ee=v(l);ee.forEach(h),u=M(D),i=z(D,"svg",{width:!0,height:!0,fill:!0,viewBox:!0});var G=v(i);f=z(G,"path",{d:!0}),v(f).forEach(h),G.forEach(h),D.forEach(h),m=M(g),p=w(g,"H1",{class:!0});var ae=v(p);ae.forEach(h),c=M(g),e=w(g,"A",{href:!0,class:!0});var I=v(e);d=w(I,"SPAN",{class:!0});var te=v(d);te.forEach(h),k=M(I),A=z(I,"svg",{width:!0,height:!0,fill:!0,viewBox:!0});var J=v(A);y=z(J,"path",{d:!0}),v(y).forEach(h),J.forEach(h),I.forEach(h),g.forEach(h),this.h()},h(){s(l,"class","sr-only"),s(f,"d","m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"),s(i,"width","20"),s(i,"height","20"),s(i,"fill","currentColor"),s(i,"viewBox","0 0 16 16"),s(t,"href",H=T.main.url(r[0].params.locale)),s(t,"class","inline-block p-4 leading-none hover:bg-white hover:bg-opacity-25"),N(t,"invisible",r[0].route.id===T.main.id),s(p,"class","flex-1 text-center font-semibold text-xl leading-none"),s(d,"class","sr-only"),s(y,"d","M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"),s(A,"width","20"),s(A,"height","20"),s(A,"fill","currentColor"),s(A,"viewBox","0 0 16 16"),s(e,"href",C=T.settings.url(r[0].params.locale)),s(e,"class","inline-block p-4 leading-none hover:bg-white hover:bg-opacity-25"),N(e,"invisible",r[0].route.id===T.settings.id),s(a,"class","bg-blue-500 text-white flex items-center")},m(_,g){R(_,a,g),n(a,t),n(t,l),l.innerHTML=o,n(t,u),n(t,i),n(i,f),n(a,m),n(a,p),p.innerHTML=E,n(a,c),n(a,e),n(e,d),d.innerHTML=b,n(e,k),n(e,A),n(A,y)},p(_,[g]){g&2&&o!==(o=_[2](_[1],"home")+"")&&(l.innerHTML=o),g&1&&H!==(H=T.main.url(_[0].params.locale))&&s(t,"href",H),g&1&&N(t,"invisible",_[0].route.id===T.main.id),g&3&&E!==(E=_[2](_[1],`/${_[0].route.id}.header.title`,_[2].raw(_[1],"title"))+"")&&(p.innerHTML=E),g&2&&b!==(b=_[2](_[1],"settings")+"")&&(d.innerHTML=b),g&1&&C!==(C=T.settings.url(_[0].params.locale))&&s(e,"href",C),g&1&&N(e,"invisible",_[0].route.id===T.settings.id)},i:B,o:B,d(_){_&&h(a)}}}function ce(r,a,t){let l;Z(r,x,i=>t(0,l=i)),ie("Header");const o=fe("header");let u={};return r.$$.update=()=>{r.$$.dirty&1&&t(1,u=l.data.i18n)},[l,u,o]}class ue extends P{constructor(a){super(),q(this,a,ce,he,K,{})}}function de(r){let a,t,l,o,u,i,f,H,m,p;return{c(){a=$("footer"),t=$("div"),l=$("a"),o=V("marian@meres.sk"),u=L(),i=$("span"),f=V("|"),H=L(),m=$("a"),p=V("source"),this.h()},l(E){a=w(E,"FOOTER",{class:!0});var c=v(a);t=w(c,"DIV",{class:!0});var e=v(t);l=w(e,"A",{href:!0});var d=v(l);o=j(d,"marian@meres.sk"),d.forEach(h),u=M(e),i=w(e,"SPAN",{});var b=v(i);f=j(b,"|"),b.forEach(h),H=M(e),m=w(e,"A",{href:!0,target:!0});var k=v(m);p=j(k,"source"),k.forEach(h),e.forEach(h),c.forEach(h),this.h()},h(){s(l,"href","mailto:marian@meres.sk"),s(m,"href","https://github.com/marianmeres/tempo"),s(m,"target","_blank"),s(t,"class","font-light opacity-75 space-x-1"),s(a,"class","p-2 text-xs text-center bg-gray-200")},m(E,c){R(E,a,c),n(a,t),n(t,l),n(l,o),n(t,u),n(t,i),n(i,f),n(t,H),n(t,m),n(m,p)},p:B,i:B,o:B,d(E){E&&h(a)}}}class me extends P{constructor(a){super(),q(this,a,null,de,K,{})}}function pe(r){let a,t,l,o,u,i,f,H,m,p;u=new ue({});const E=r[3].default,c=se(E,r,r[2],null);return m=new me({}),{c(){a=$("link"),l=L(),o=$("div"),U(u.$$.fragment),i=L(),f=$("div"),c&&c.c(),H=L(),U(m.$$.fragment),this.h()},l(e){const d=re("svelte-tje834",document.head);a=w(d,"LINK",{rel:!0,href:!0}),d.forEach(h),l=M(e),o=w(e,"DIV",{class:!0});var b=v(o);Q(u.$$.fragment,b),i=M(b),f=w(b,"DIV",{class:!0});var k=v(f);c&&c.l(k),k.forEach(h),H=M(b),Q(m.$$.fragment,b),b.forEach(h),this.h()},h(){s(a,"rel","manifest"),s(a,"href",t=Y+"/"+r[0].params.locale+"/manifest.json"),s(f,"class","flex-1 flex flex-col divide-y"),s(o,"class","vh100 flex flex-col")},m(e,d){n(document.head,a),R(e,l,d),R(e,o,d),W(u,o,null),n(o,i),n(o,f),c&&c.m(f,null),n(o,H),W(m,o,null),p=!0},p(e,[d]){(!p||d&1&&t!==(t=Y+"/"+e[0].params.locale+"/manifest.json"))&&s(a,"href",t),c&&c.p&&(!p||d&4)&&le(c,E,e,e[2],p?oe(E,e[2],d,null):ne(e[2]),null)},i(e){p||(F(u.$$.fragment,e),F(c,e),F(m.$$.fragment,e),p=!0)},o(e){O(u.$$.fragment,e),O(c,e),O(m.$$.fragment,e),p=!1},d(e){h(a),e&&h(l),e&&h(o),X(u),c&&c.d(e),X(m)}}}function _e(r,a,t){let l;Z(r,x,f=>t(0,l=f));let{$$slots:o={},$$scope:u}=a,{data:i}=a;return r.$$set=f=>{"data"in f&&t(1,i=f.data),"$$scope"in f&&t(2,u=f.$$scope)},[l,i,u,o]}class He extends P{constructor(a){super(),q(this,a,_e,pe,K,{data:1})}}export{He as default};