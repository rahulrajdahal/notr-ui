import{R as n,b as O,j as m,c as p,a as F,r as I}from"./chunks/emotion-react.browser.esm.CO4dPl-9.js";import{p as j,v as C,c as q,o as S,ae as w,j as N}from"./chunks/framework.U1Gow_7P.js";var c=function(){return c=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var l in t=arguments[o])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},c.apply(this,arguments)};function d(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var f,b,k,x,v,E,R={600:"#3563de"},P={400:"#2a292e",600:"#121212"},A={600:"#c51d1db6"},B=p(f||(f=d([`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  border: none;
  outline: none;
`],[`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  border: none;
  outline: none;
`]))),D=p(b||(b=d([`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-300);
`],[`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-300);
`]))),T=p(k||(k=d([`
  height: 3.75rem;
  border-radius: 0.8125rem;
  border: 1px solid var(--color-gray-600);
  padding: 0 0.5rem;
  outline: none;

  &:focus {
    border-color: var(--color-primary-600);
  }
`],[`
  height: 3.75rem;
  border-radius: 0.8125rem;
  border: 1px solid var(--color-gray-600);
  padding: 0 0.5rem;
  outline: none;

  &:focus {
    border-color: var(--color-primary-600);
  }
`]))),z=p(x||(x=d([`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`],[`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`]))),V=p(v||(v=d([`
  border-color: var(--color-red-600);
`],[`
  border-color: var(--color-red-600);
`]))),_=n.forwardRef(function(e,t){var o=e.label,r=e.errors,l=e.labelProps,h=e.inputProps,u=function(a,y){var g={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&y.indexOf(s)<0&&(g[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(s=Object.getOwnPropertySymbols(a);i<s.length;i++)y.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(a,s[i])&&(g[s[i]]=a[s[i]])}return g}(e,["label","errors","labelProps","inputProps"]);return O("fieldset",c({ref:t,style:{"--color-primary-600":R[600],"--color-gray-400":P[400],"--color-gray-600":P[600],"--color-red-600":A[600]},css:B},u,{children:[m("label",c({css:D,htmlFor:h==null?void 0:h.name},l,{children:o})),m("input",c({css:p(E||(E=d([`
            `," ",`
          `],[`
            `," ",`
          `])),T,r&&r.length>0?V:"")},h)),r&&r.length>0&&r.map(function(a){return m("span",{css:z,children:a},a)})]}))});_.displayName="Input";function U(){n.useRef();const[e,t]=n.useState(),[o,r]=n.useState(),[l,h]=n.useState();return n.createElement("div",null,n.createElement("div",{style:{height:"30vh",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minWidth:"50rem"}},n.createElement(_,{label:"Notr Input",inputProps:l,labelProps:o,errors:e})),n.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem"}},n.createElement("label",{htmlFor:"errors"},"Errors"),n.createElement("input",{type:"text",placeholder:"string[]",onChange:u=>t(u.target.value.split(","))})))}const W=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),J={name:"components/input.md"},G=Object.assign(J,{setup(e){const t=j();return C(()=>{F.createRoot(t.value).render(I.createElement(U))}),(o,r)=>(S(),q("div",null,[r[0]||(r[0]=w("",7)),N("div",{ref_key:"el",ref:t},null,512)]))}});export{W as __pageData,G as default};
