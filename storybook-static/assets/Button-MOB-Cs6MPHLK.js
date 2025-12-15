import{b as m}from"./button-data-DsYMFTGz.js";import{r as y}from"./style-CUJ3xHXS.js";const c=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),u=e=>e==="textButton"||e==="iconButton"?c(e):e,r=e=>e.trim().replace(/\n\s+/g,`
  `),_=e=>Object.keys(e).filter(t=>["primary","secondary","tertiary"].includes(t)),b=e=>e==="textButton"?"a":"button",f=(e,t)=>`.code{margin-top:20px;}.${e}{${r(t)}}`,B=(e,t,n,s,o)=>`.${e}__${t}--${n}{${r(s)}${r(o)}}`,C=(e,t,n,s,o)=>o?`.${e}__${t}--${n}.is-disabled{${r(s)}${r(o)}}`:"",p=(e,t)=>`.${e}{${r(t)}}`,g=(e,t,n)=>{const s=u(e),o=_(t);let $=f(s,t.common);if(o.length===0)t[n]&&($+=p(c(e)+"__"+n,t[n]));else for(let l of o)$+=B(e,n,l,t[n],t[l].able),$+=C(e,n,l,t[n],t[l].disabled);return`<style>${$}</style>`},a=(e,t,n,s)=>{let o=`<button class="${e} ${e}__${t}--${n}">Button</button>`;return s.disabled&&(o+=`<button class="${e} ${e}__${t}--${n} is-disabled">Button</button>`),o},h=(e,t,n)=>{const s=b(e),o=u(e),$=n?`${o} ${o}__${t}`:o;return e==="textButton"?`<${s} class="${$}">Button</${s}>`:e==="iconButton"?`<${s} class="${$}"><i class="ic_heart_fillded_18px"></i></${s}>`:`<${s} class="${$}"></${s}>`},S=(e,t,n,s,o)=>{const $=s[t],l=o.able;let i=`<style>
.${e}{
  ${r(s.common)}
}
.${e}__${t}--${n}{
  ${r($)}
  ${r(l)}
}`;o.disabled&&(i+=`
.${e}__${t}--${n}.is-disabled{
  ${r($)}
  ${r(o.disabled)}
}`),i+=`
</style>`;let d=`<button class="${e} ${e}__${t}--${n}">Button</button>`;return o.disabled&&(d+=`
<button class="${e} ${e}__${t}--${n} is-disabled">Button</button>`),`<pre class="code">${i}
${d}</pre>`},x=(e,t,n)=>{const s=u(e),o=n[t]?r(n[t]):"",$=b(e);let l=`<style>
.${s}{
  ${r(n.common)}
}`;o&&(l+=`
.${s}__${t}{
  ${o}
}`),l+=`
</style>`;const i=o?`${s} ${s}__${t}`:s,d=`<${$} class="${i}">Button</${$}>`;return`<pre class="code">${l}
${d}</pre>`},w=(e,t)=>{const n=m[t[0]][t[1]],s=t[1],o=g(s,n,e);let $="";const l=_(n);if(l.length===0)$+=`<h4>${e}</h4>`,$+=h(s,e,n[e]),$+=x(s,e,n);else for(let i of l)$+=`<h4>${i}</h4>`,$+=a(s,e,i,n[i]),$+=S(s,e,i,n,n[i]);return`${y}${o}${$}`};export{w as S};
