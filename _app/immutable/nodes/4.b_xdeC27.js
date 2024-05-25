import{s as G,f as X,n as w,r as pe,c as ae,o as me}from"../chunks/scheduler.eE1Yj1Aj.js";import{S as J,i as K,e as g,s as I,t as N,c as k,a as E,d as v,f as $,b as z,p,g as j,h as m,z as B,j as L,B as x,A as ve,n as ee,k as oe,m as A,o as ie,l as M,v as ce,w as ue,x as fe,y as de,r as _e}from"../chunks/index.DBdqi2oy.js";import{n as te,e as F,a as ge,u as ke,o as be}from"../chunks/tools.CM7bQ7RM.js";import{g as ye,w as he}from"../chunks/entry.CA2vjz0E.js";function Ee(a){let e,l,t,c,o,r,n,i,u=a[0].title+"",f,d,_,s=a[0].description+"",h,C,D,H,V,O=te(a[0].price)+"",S,T,U,Q;return{c(){e=g("div"),l=g("div"),t=g("img"),r=I(),n=g("div"),i=g("h2"),f=N(u),d=I(),_=g("p"),h=N(s),C=I(),D=g("p"),H=N("Prix: "),V=g("span"),S=N(O),this.h()},l(y){e=k(y,"DIV",{id:!0,role:!0,class:!0,tabindex:!0});var b=E(e);l=k(b,"DIV",{class:!0});var q=E(l);t=k(q,"IMG",{src:!0,alt:!0,referrerpolicy:!0,class:!0}),q.forEach(v),r=$(b),n=k(b,"DIV",{class:!0});var P=E(n);i=k(P,"H2",{class:!0});var R=E(i);f=z(R,u),R.forEach(v),d=$(P),_=k(P,"P",{class:!0});var Y=E(_);h=z(Y,s),Y.forEach(v),C=$(P),D=k(P,"P",{class:!0});var Z=E(D);H=z(Z,"Prix: "),V=k(Z,"SPAN",{class:!0});var W=E(V);S=z(W,O),W.forEach(v),Z.forEach(v),P.forEach(v),b.forEach(v),this.h()},h(){var y,b;X(t.src,c=(b=(y=a[0])==null?void 0:y.featuredImage)==null?void 0:b.url)||p(t,"src",c),p(t,"alt",o=a[0].title),p(t,"referrerpolicy","no-referrer"),p(t,"class","svelte-34rvyj"),p(l,"class","image-container svelte-34rvyj"),p(i,"class","svelte-34rvyj"),p(_,"class","svelte-34rvyj"),p(V,"class","price svelte-34rvyj"),p(D,"class","svelte-34rvyj"),p(n,"class","card-info svelte-34rvyj"),p(e,"id",T=a[0].id),p(e,"role","button"),p(e,"class","card svelte-34rvyj"),p(e,"tabindex","0")},m(y,b){j(y,e,b),m(e,l),m(l,t),m(e,r),m(e,n),m(n,i),m(i,f),m(n,d),m(n,_),m(_,h),m(n,C),m(n,D),m(D,H),m(D,V),m(V,S),U||(Q=[B(e,"click",a[1]),B(e,"keydown",a[2])],U=!0)},p(y,[b]){var q,P;b&1&&!X(t.src,c=(P=(q=y[0])==null?void 0:q.featuredImage)==null?void 0:P.url)&&p(t,"src",c),b&1&&o!==(o=y[0].title)&&p(t,"alt",o),b&1&&u!==(u=y[0].title+"")&&L(f,u),b&1&&s!==(s=y[0].description+"")&&L(h,s),b&1&&O!==(O=te(y[0].price)+"")&&L(S,O),b&1&&T!==(T=y[0].id)&&p(e,"id",T)},i:w,o:w,d(y){y&&v(e),U=!1,pe(Q)}}}function Ce(a,e,l){let{product:t}=e;t.featuredImage||(t.featuredImage={id:"unknown",fileId:"unknown",productReference:t.reference,url:"https://lh3.googleusercontent.com/d/1PP9J9ZVm6o6bcOQVjwarnmzYAZCpFqNp"});function c(){console.log("Card clicked:",t.reference),ye(`/payton-dressing-app/product-details?ref=${t.reference}`)}function o(r){(r.key==="Enter"||r.key===" ")&&c()}return a.$$set=r=>{"product"in r&&l(0,t=r.product)},[t,c,o]}class je extends J{constructor(e){super(),K(this,e,Ce,Ee,G,{product:0})}}function le(a,e,l){const t=a.slice();return t[7]=e[l],t}function re(a){let e,l,t,c,o,r=a[7]+"",n,i,u,f;function d(){return a[6](a[7])}return{c(){e=g("span"),l=g("label"),t=g("input"),o=I(),n=N(r),i=I(),this.h()},l(_){e=k(_,"SPAN",{class:!0});var s=E(e);l=k(s,"LABEL",{});var h=E(l);t=k(h,"INPUT",{type:!0}),o=$(h),n=z(h,r),h.forEach(v),i=$(s),s.forEach(v),this.h()},h(){p(t,"type","checkbox"),t.checked=c=a[0].includes(a[7]),p(e,"class","svelte-z4jx9b")},m(_,s){j(_,e,s),m(e,l),m(l,t),m(l,o),m(l,n),m(e,i),u||(f=B(t,"change",d),u=!0)},p(_,s){a=_,s&3&&c!==(c=a[0].includes(a[7]))&&(t.checked=c),s&2&&r!==(r=a[7]+"")&&L(n,r)},d(_){_&&v(e),u=!1,f()}}}function Pe(a){let e,l,t=a[2]?"✖":"☰ Filtres",c,o,r,n,i,u=F(a[1]),f=[];for(let d=0;d<u.length;d+=1)f[d]=re(le(a,u,d));return{c(){e=g("div"),l=g("button"),c=N(t),o=I(),r=g("nav");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=k(d,"DIV",{});var _=E(e);l=k(_,"BUTTON",{class:!0});var s=E(l);c=z(s,t),s.forEach(v),o=$(_),r=k(_,"NAV",{class:!0});var h=E(r);for(let C=0;C<f.length;C+=1)f[C].l(h);h.forEach(v),_.forEach(v),this.h()},h(){p(l,"class","menu-button svelte-z4jx9b"),p(r,"class","menu svelte-z4jx9b"),x(r,"open",a[2])},m(d,_){j(d,e,_),m(e,l),m(l,c),m(e,o),m(e,r);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(r,null);n||(i=B(l,"click",a[4]),n=!0)},p(d,[_]){if(_&4&&t!==(t=d[2]?"✖":"☰ Filtres")&&L(c,t),_&35){u=F(d[1]);let s;for(s=0;s<u.length;s+=1){const h=le(d,u,s);f[s]?f[s].p(h,_):(f[s]=re(h),f[s].c(),f[s].m(r,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=u.length}_&4&&x(r,"open",d[2])},i:w,o:w,d(d){d&&v(e),ve(f,d),n=!1,i()}}}function Ie(a,e,l){let t,{categories:c}=e,{selectedCategories:o=[]}=e;const r=he(!1);ae(a,r,f=>l(2,t=f));const n=()=>{r.update(f=>!f)};function i(f){const d=o.indexOf(f);d===-1?l(0,o=[...o,f]):(o.splice(d,1),l(0,o=[...o]))}const u=f=>i(f);return a.$$set=f=>{"categories"in f&&l(1,c=f.categories),"selectedCategories"in f&&l(0,o=f.selectedCategories)},[o,c,t,r,n,i,u]}class $e extends J{constructor(e){super(),K(this,e,Ie,Pe,G,{categories:1,selectedCategories:0})}}function se(a,e,l){const t=a.slice();return t[3]=e[l],t}function we(a){let e,l;return e=new $e({props:{categories:a[2]}}),{c(){ce(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,c){fe(e,t,c),l=!0},p:w,i(t){l||(M(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){de(e,t)}}}function De(a){let e,l="Loading...";return{c(){e=g("p"),e.textContent=l},l(t){e=k(t,"P",{"data-svelte-h":!0}),oe(e)!=="svelte-qdsr2u"&&(e.textContent=l)},m(t,c){j(t,e,c)},p:w,i:w,o:w,d(t){t&&v(e)}}}function Ve(a){let e,l=[],t=new Map,c,o=F(a[0]);const r=n=>n[3].reference;for(let n=0;n<o.length;n+=1){let i=se(a,o,n),u=r(i);t.set(u,l[n]=ne(u,i))}return{c(){e=g("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0});var i=E(e);for(let u=0;u<l.length;u+=1)l[u].l(i);i.forEach(v),this.h()},h(){p(e,"class","grid-container svelte-1x82aef")},m(n,i){j(n,e,i);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);c=!0},p(n,i){i&1&&(o=F(n[0]),_e(),l=ke(l,i,r,1,n,o,t,e,be,ne,null,se),ie())},i(n){if(!c){for(let i=0;i<o.length;i+=1)M(l[i]);c=!0}},o(n){for(let i=0;i<l.length;i+=1)A(l[i]);c=!1},d(n){n&&v(e);for(let i=0;i<l.length;i+=1)l[i].d()}}}function ne(a,e){let l,t,c,o;return t=new je({props:{product:e[3]}}),{key:a,first:null,c(){l=g("div"),ce(t.$$.fragment),c=I(),this.h()},l(r){l=k(r,"DIV",{class:!0});var n=E(l);ue(t.$$.fragment,n),c=$(n),n.forEach(v),this.h()},h(){p(l,"class","product svelte-1x82aef"),this.first=l},m(r,n){j(r,l,n),fe(t,l,null),m(l,c),o=!0},p(r,n){e=r;const i={};n&1&&(i.product=e[3]),t.$set(i)},i(r){o||(M(t.$$.fragment,r),o=!0)},o(r){A(t.$$.fragment,r),o=!1},d(r){r&&v(l),de(t)}}}function Ne(a){let e,l="Mon dressing",t,c,o,r,n,i,u=a[2]&&we(a);const f=[Ve,De],d=[];function _(s,h){return s[0]?0:1}return o=_(a),r=d[o]=f[o](a),{c(){e=g("h1"),e.textContent=l,t=I(),u&&u.c(),c=I(),r.c(),n=ee(),this.h()},l(s){e=k(s,"H1",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1j4dzpr"&&(e.textContent=l),t=$(s),u&&u.l(s),c=$(s),r.l(s),n=ee(),this.h()},h(){p(e,"class","product-list-title svelte-1x82aef")},m(s,h){j(s,e,h),j(s,t,h),u&&u.m(s,h),j(s,c,h),d[o].m(s,h),j(s,n,h),i=!0},p(s,[h]){s[2]&&u.p(s,h);let C=o;o=_(s),o===C?d[o].p(s,h):(_e(),A(d[C],1,1,()=>{d[C]=null}),ie(),r=d[o],r?r.p(s,h):(r=d[o]=f[o](s),r.c()),M(r,1),r.m(n.parentNode,n))},i(s){i||(M(u),M(r),i=!0)},o(s){A(u),A(r),i=!1},d(s){s&&(v(e),v(t),v(c),v(n)),u&&u.d(s),d[o].d(s)}}}function ze(a,e,l){let t,c=he([]);ae(a,c,r=>l(0,t=r));let o=["homme","femme"];return me(async()=>{try{const r=await ge();console.log(r),c.set(r)}catch(r){console.error("Error fetching data:",r)}}),[t,c,o]}class Le extends J{constructor(e){super(),K(this,e,ze,Ne,G,{})}}export{Le as component};
