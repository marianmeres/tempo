import{S as b,i as M,s as p,e as s,D as O,h,I as j,Q as w,J as d,b as m,R as C,k as E,l as N,n as u}from"./index.e503be3a.js";import{c as S}from"./index.e15d00df.js";function g(r,e,i){const n=r.slice();return n[8]=e[i][0],n[9]=e[i][1],n}function y(r){let e,i,n;return{c(){e=E("meta"),this.h()},l(t){e=N(t,"META",{property:!0,content:!0}),this.h()},h(){u(e,"property",i="og:"+r[8]),u(e,"content",n=r[9])},m(t,a){m(t,e,a)},p(t,a){a&1&&i!==(i="og:"+t[8])&&u(e,"property",i),a&1&&n!==(n=t[9])&&u(e,"content",n)},d(t){t&&h(e)}}}function k(r,e){let i,n,t=e[9]&&y(e);return{key:r,first:null,c(){i=s(),t&&t.c(),n=s(),this.h()},l(a){i=s(),t&&t.l(a),n=s(),this.h()},h(){this.first=i},m(a,l){m(a,i,l),t&&t.m(a,l),m(a,n,l)},p(a,l){e=a,e[9]?t?t.p(e,l):(t=y(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(a){a&&h(i),t&&t.d(a),a&&h(n)}}}function q(r){let e=[],i=new Map,n,t=Object.entries(r[0]||{});const a=l=>l[8];for(let l=0;l<t.length;l+=1){let c=g(r,t,l),o=a(c);i.set(o,e[l]=k(o,c))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();n=s()},l(l){const c=O("svelte-sgyo6n",document.head);for(let o=0;o<e.length;o+=1)e[o].l(c);n=s(),c.forEach(h)},m(l,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(document.head,null);j(document.head,n)},p(l,[c]){c&1&&(t=Object.entries(l[0]||{}),e=w(e,c,a,1,l,t,i,n.parentNode,C,k,n,g))},i:d,o:d,d(l){for(let c=0;c<e.length;c+=1)e[c].d();h(n)}}}function A(r,e,i){let n;S("MetaOg");let{title:t=null}=e,{url:a=null}=e,{description:l=null}=e,{image:c=null}=e,{locale:o=null}=e,{type:_="website"}=e;return r.$$set=f=>{"title"in f&&i(1,t=f.title),"url"in f&&i(2,a=f.url),"description"in f&&i(3,l=f.description),"image"in f&&i(4,c=f.image),"locale"in f&&i(5,o=f.locale),"type"in f&&i(6,_=f.type)},r.$$.update=()=>{r.$$.dirty&126&&i(0,n={url:a,title:t,description:l,image:c,locale:o,type:_})},[n,t,a,l,c,o,_]}class J extends b{constructor(e){super(),M(this,e,A,q,p,{title:1,url:2,description:3,image:4,locale:5,type:6})}}export{J as M};
