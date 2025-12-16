import{b as m}from"./button-data-DsYMFTGz.js";import{r as _}from"./style-CUJ3xHXS.js";const f=(e,d)=>{const n=m[d[0]][d[1]],t=d[1],i=t.replace(/([A-Z])/g,"-$1").toLowerCase();let r=`<style>
.${t==="textButton"||t==="iconButton"?i:t} {
  ${n.common.trim().replace(/\n\s+/g,`
  `)}
}
`;const a=[];for(let s in n)["primary","secondary","tertiary"].includes(s)&&a.push(s);if(a.length===0&&n[e]){const s=n[e].trim().replace(/\n\s+/g,`
  `);r+=`.${i}__${e} {
  ${s}
}
`}for(let s of a){const l=n[e].trim().replace(/\n\s+/g,`
  `),c=n[s].able.trim().replace(/\n\s+/g,`
  `);if(r+=`.${t}__${e}--${s} {
  ${l}
  ${c}
}
`,n[s].disabled){const u=n[s].disabled.trim().replace(/\n\s+/g,`
  `);r+=`.${t}__${e}--${s}.is-disabled {
  ${l}
  ${u}
}
`}}r+="</style>";let $="";const o=t==="textButton"?"a":"button";if(a.length===0){t==="textButton"?$+=`<${o} class="${i} ${i}__${e}">Button</${o}>`:t==="iconButton"?$+=`<${o} class="${i} ${i}__${e}">Button</${o}>`:$+=`<${o} class="${t} ${t}__${e}"></${o}>`;const s=n[e].trim().replace(/\n\s+/g,`
  `),l=t==="textButton"||t==="iconButton"?i:t;let c=`<style>
.${l} {
  ${n.common.trim().replace(/\n\s+/g,`
  `)}
}
.${l}__${e} {
  ${s}
}
</style>`;return $+=`<pre class="code">${c}
<${o} class="${l} ${l}__${e}">Button</${o}></pre>`,`${_}${r}${$}`}for(let s of a){$+=`<h4>${s}</h4>`,$+=`<button class="${t} ${t}__${e}--${s}">Button</button>`,n[s].disabled&&($+=`<button class="${t} ${t}__${e}--${s} is-disabled">Button</button>`);const l=n[e].trim().replace(/\n\s+/g,`
  `),c=n[s].able.trim().replace(/\n\s+/g,`
  `);let u=`<style>
.${t} {
  ${n.common.trim().replace(/\n\s+/g,`
  `)}
}
.${t}__${e}--${s} {
  ${l}
  ${c}
}`;if(n[s].disabled){const b=n[s].disabled.trim().replace(/\n\s+/g,`
  `);u+=`
.${t}__${e}--${s}.is-disabled {
  ${l}
  ${b}
}`}u+=`
</style>`,$+=`<pre class="code">${u}
<button class="${t} ${t}__${e}--${s}">Button</button>`,n[s].disabled&&($+=`
<button class="${t} ${t}__${e}--${s} is-disabled">Button</button>`),$+="</pre>"}return`${_}${r}${$}`};export{f as S};
