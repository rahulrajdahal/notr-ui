import{R as n,j as V,c,a as q,r as _}from"./chunks/emotion-react.browser.esm.CO4dPl-9.js";import{c as E}from"./chunks/index.cn9pJb3l.js";import{p as z,v as A,C as D,c as R,o as U,ae as G,j as t,a as g,G as J,w as x}from"./chunks/framework.U1Gow_7P.js";var y=function(){return y=Object.assign||function(r){for(var a,o=1,e=arguments.length;o<e;o++)for(var i in a=arguments[o])Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i]);return r},y.apply(this,arguments)};function m(r,a){return Object.defineProperty?Object.defineProperty(r,"raw",{value:a}):r.raw=a,r}var C,w,B,O,P,h={600:"#3563de"},M={400:"#2a292e"},$=c(C||(C=m([`
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    font-weight: 500;
    cursor: not-allowed;
  }
`],[`
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    font-weight: 500;
    cursor: not-allowed;
  }
`]))),H={fill:c(w||(w=m([`
    border-radius: 0.8125rem;
    padding: 1.31rem;

    &:disabled {
      background-color: var(--color-gray-400);
      color: #ffffff;
    }
  `],[`
    border-radius: 0.8125rem;
    padding: 1.31rem;

    &:disabled {
      background-color: var(--color-gray-400);
      color: #ffffff;
    }
  `]))),outline:c(B||(B=m([`
    border: 1px solid var(--color-primary-600);
    border-radius: 0.8125rem;
    padding: 1.31rem;
    background-color: transparent;

    &:disabled {
      border-color: var(--color-gray-400);
      color: var(--color-gray-400) !important;
    }
  `],[`
    border: 1px solid var(--color-primary-600);
    border-radius: 0.8125rem;
    padding: 1.31rem;
    background-color: transparent;

    &:disabled {
      border-color: var(--color-gray-400);
      color: var(--color-gray-400) !important;
    }
  `]))),text:c(O||(O=m([`
    &:hover {
      text-decoration: underline;
    }
    &:disabled {
      color: var(--color-gray-400) !important;
    }
  `],[`
    &:hover {
      text-decoration: underline;
    }
    &:disabled {
      color: var(--color-gray-400) !important;
    }
  `])))},S=n.forwardRef(function(r,a){var o=r.variant,e=o===void 0?"fill":o,i=r.disabled,u=i!==void 0&&i,l=r.background,F=l===void 0?e!=="fill"||u?void 0:h[600]:l,b=r.color,j=b===void 0?e!=="fill"||u?e==="outline"||e==="text"?h[600]:void 0:"#ffffff":b,v=r.className,N=v===void 0?"":v,T=r.children,I=function(d,k){var f={};for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&k.indexOf(s)<0&&(f[s]=d[s]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(s=Object.getOwnPropertySymbols(d);p<s.length;p++)k.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(d,s[p])&&(f[s[p]]=d[s[p]])}return f}(r,["variant","disabled","background","color","className","children"]);return V("button",y({ref:a,style:{backgroundColor:F,color:j,"--color-primary-600":h[600],"--color-gray-400":M[400]},css:c(P||(P=m([`
          `," ",`
        `],[`
          `," ",`
        `])),$,H[e]),className:N,disabled:u,"aria-disabled":u},I,{children:T}))});S.displayName="Button";function K(){const[r,a]=n.useState("fill"),[o,e]=n.useState(),[i,u]=n.useState();return n.createElement("div",null,n.createElement("div",{style:{height:"30vh",display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement(S,{color:i,background:o,variant:r},"Notr Button")),n.createElement("div",{style:{display:"flex",gap:"1rem",alignItems:"center"}},n.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},n.createElement("input",{name:"variant",type:"radio",value:"fill",onChange:l=>a(l.target.value)}),n.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"Fill")),n.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},n.createElement("input",{name:"variant",type:"radio",value:"outline",onChange:l=>a(l.target.value)}),n.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"Outline")),n.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},n.createElement("input",{name:"variant",type:"radio",value:"text",onChange:l=>a(l.target.value)}),n.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"Text"))),n.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},n.createElement("input",{type:"color",defaultValue:E.primary[600],style:{width:"2rem",height:"2rem"},onChange:l=>e(l.target.value)}),n.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"Background")),n.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},n.createElement("input",{style:{width:"2rem",height:"2rem"},defaultValue:E.white,type:"color",onChange:l=>u(l.target.value)}),n.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"color")))}const Y=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}'),L={name:"components/button.md"},Z=Object.assign(L,{setup(r){const a=z();return A(()=>{q.createRoot(a.value).render(_.createElement(K))}),(o,e)=>{const i=D("Tooltip");return U(),R("div",null,[e[8]||(e[8]=G(`<h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-label="Permalink to &quot;Button&quot;">​</a></h1><p>Notr Button</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Button } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@rahulrajdahal/notr-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Notr Button&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2>`,5)),t("table",null,[e[7]||(e[7]=t("thead",null,[t("tr",null,[t("td",null,"Props"),t("td",null,"Type"),t("td",null,"Default")])],-1)),t("tbody",null,[t("tr",null,[e[3]||(e[3]=t("td",null,"variant",-1)),t("td",null,[t("code",null,[e[2]||(e[2]=g("enum ",-1)),J(i,{position:"top",backgroundColor:"#6366f1"},{trigger:x(()=>e[0]||(e[0]=[g(" ℹ️ ",-1)])),content:x(()=>e[1]||(e[1]=[g(" fill | outline | text ",-1)])),_:1})])]),e[4]||(e[4]=t("td",null,"fill",-1))]),e[5]||(e[5]=t("tr",null,[t("td",null,"background"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),e[6]||(e[6]=t("tr",null,[t("td",null,"color"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1))])]),e[9]||(e[9]=t("h2",{id:"example",tabindex:"-1"},[g("Example "),t("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1)),t("div",{ref_key:"el",ref:a},null,512)])}}});export{Y as __pageData,Z as default};
