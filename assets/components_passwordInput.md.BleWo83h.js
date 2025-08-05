import{R as o,b,j as h,c as s,a as R,r as z}from"./chunks/emotion-react.browser.esm.CO4dPl-9.js";import{c as A}from"./chunks/index.cn9pJb3l.js";import{L as B,a as D}from"./chunks/SquareTool.CeFHPrTA.js";import{p as T,v as L,c as V,o as H,ae as U,j as J}from"./chunks/framework.U1Gow_7P.js";var g=function(){return g=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var d in t=arguments[a])Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d]);return e},g.apply(this,arguments)};function l(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x,v,w,P,E,_,j,I,F,O,C,M={600:"#3563de"},S={400:"#2a292e",600:"#121212"},$={600:"#c51d1db6"},G=s(x||(x=l([`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  align-items: start;
  border: none;
  outline: none;
`],[`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  align-items: start;
  border: none;
  outline: none;
`]))),K=s(v||(v=l([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`],[`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`]))),Q=s(w||(w=l([`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-400);
`],[`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-400);
`]))),W=s(P||(P=l([`
  color: var(--color-primary-600);
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`],[`
  color: var(--color-primary-600);
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`]))),X=s(E||(E=l([`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-600);
  padding: 0rem 0.5rem;
  outline: none;
  border-radius: 0.8125rem;
  height: 3.75rem;
  width: 100%;

  &:focus-within {
    border-color: var(--color-primary-600);
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-600);
  padding: 0rem 0.5rem;
  outline: none;
  border-radius: 0.8125rem;
  height: 3.75rem;
  width: 100%;

  &:focus-within {
    border-color: var(--color-primary-600);
  }
`]))),Y=s(_||(_=l([`
  width: 100%;
  border: none;
  outline: none;
`],[`
  width: 100%;
  border: none;
  outline: none;
`]))),Z=s(j||(j=l([`
  border-color: var(--color-red-600);
`],[`
  border-color: var(--color-red-600);
`]))),ee=s(I||(I=l([`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-gray-600);
`],[`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-gray-600);
`]))),te=s(F||(F=l([`
  width: 1rem;
  height: 1rem;
`],[`
  width: 1rem;
  height: 1rem;
`]))),ne=s(O||(O=l([`
  color: var(--color-red-600);
`],[`
  color: var(--color-red-600);
`]))),re=s(C||(C=l([`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`],[`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`]))),q=o.forwardRef(function(e,t){var a=e.label,n=e.errors,d=e.labelProps,u=e.inputProps,c=function(r,k){var f={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&k.indexOf(i)<0&&(f[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(i=Object.getOwnPropertySymbols(r);p<i.length;p++)k.indexOf(i[p])<0&&Object.prototype.propertyIsEnumerable.call(r,i[p])&&(f[i[p]]=r[i[p]])}return f}(e,["label","errors","labelProps","inputProps"]),m=o.useState(!1),y=m[0],N=m[1];return b("fieldset",g({ref:t,style:{"--color-primary-600":M[600],"--color-gray-400":S[400],"--color-gray-600":S[600],"--color-red-600":$[600]},css:G},c,{children:[b("div",{css:K,children:[h("label",g({htmlFor:u==null?void 0:u.name,css:Q},d,{children:a})),c!=null&&c.forgotPassword?h("a",{href:c==null?void 0:c.forgotPassword.href,css:W,children:"Forgot Password?"}):null]}),b("div",{css:[X,n&&n.length>0?Z:null],children:[h("input",g({"aria-labelledby":a,"aria-label":a,type:y?"text":"password",css:Y},u)),h("button",{type:"button",title:y?"Hide":"Show",css:[ee,n?ne:null],onClick:function(){return N(function(r){return!r})},children:h(y?B:D,{css:te})})]}),n&&n.length>0&&n.map(function(r){return h("span",{css:re,children:r},r)})]}))});q.displayName="Input";function oe(){const e=o.useRef(),[t,a]=o.useState(),[n,d]=o.useState(),[u,c]=o.useState();return o.createElement("div",null,o.createElement("div",{style:{height:"30vh",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",background:A.white}},o.createElement(q,{ref:e,label:"Notr Password Input",forgotPassword:{href:""},inputProps:u,labelProps:n,errors:t})),o.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem"}},o.createElement("label",{htmlFor:"errors"},"Errors"),o.createElement("input",{type:"text",placeholder:"string[]",onChange:m=>a(m.target.value.split(","))})))}const ce=JSON.parse('{"title":"Password Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/passwordInput.md","filePath":"components/passwordInput.md"}'),ae={name:"components/passwordInput.md"},pe=Object.assign(ae,{setup(e){const t=T();return L(()=>{R.createRoot(t.value).render(z.createElement(oe))}),(a,n)=>(H(),V("div",null,[n[0]||(n[0]=U(`<h1 id="password-input" tabindex="-1">Password Input <a class="header-anchor" href="#password-input" aria-label="Permalink to &quot;Password Input&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Notr Password Input</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { PasswordInput } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@rahulrajdahal/notr-password-input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PasswordInput</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Notr Password Input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:right;">Default</th></tr></thead><tbody><tr><td>label</td><td style="text-align:center;"><code>string</code></td><td style="text-align:right;">-</td></tr><tr><td>forgotPassword</td><td style="text-align:center;"><code>object</code></td><td style="text-align:right;">-</td></tr><tr><td>errors</td><td style="text-align:center;"><code>string[]</code></td><td style="text-align:right;">-</td></tr><tr><td>labelProps</td><td style="text-align:center;"><code>ReactComponentProps</code></td><td style="text-align:right;">-</td></tr><tr><td>inputProps</td><td style="text-align:center;"><code>ReactComponentProps</code></td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>`,7)),J("div",{ref_key:"el",ref:t},null,512)]))}});export{ce as __pageData,pe as default};
