import{R as e,b as C,c as P,a as F,r as _}from"./chunks/emotion-react.browser.esm.CO4dPl-9.js";import{C as O}from"./chunks/SquareTool.CeFHPrTA.js";import{c as x}from"./chunks/index.cn9pJb3l.js";import{p as S,v as j,c as w,o as q,ae as B,j as T}from"./chunks/framework.U1Gow_7P.js";var k=function(){return k=Object.assign||function(t){for(var a,n=1,s=arguments.length;n<s;n++)for(var l in a=arguments[n])Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l]);return t},k.apply(this,arguments)};var g,y,E,m={400:"#09c49733",600:"#09c497"},A=P(E||(g=[`
  display: flex;
  height: 2.5rem;
  width: 100%;
  max-width: 10.25rem;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  gap: 0.44rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.875rem;
`],y=[`
  display: flex;
  height: 2.5rem;
  width: 100%;
  max-width: 10.25rem;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  gap: 0.44rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.875rem;
`],Object.defineProperty?Object.defineProperty(g,"raw",{value:y}):g.raw=y,E=g)),b=e.forwardRef(function(t,a){var n=t.text,s=t.icon,l=t.count,c=t.background,p=c===void 0?m[400]:c,h=t.color,i=h===void 0?m[600]:h,v=function(o,f){var u={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&f.indexOf(r)<0&&(u[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(r=Object.getOwnPropertySymbols(o);d<r.length;d++)f.indexOf(r[d])<0&&Object.prototype.propertyIsEnumerable.call(o,r[d])&&(u[r[d]]=o[r[d]])}return u}(t,["text","icon","count","background","color"]);return C("span",k({ref:a,style:{backgroundColor:p,color:i,"--color-green-400":m[400],"--color-green-600":m[600]},css:A},v,{children:[s," ",l," task",l>1?"s":""," ",n]}))});b.displayName="Pill";function D(){const[t,a]=e.useState("Complete"),[n,s]=e.useState(3),[l,c]=e.useState(x.green[400]),[p,h]=e.useState(x.green[600]);return e.createElement("div",null,e.createElement("div",{style:{height:"30vh",display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(b,{background:l,color:p,icon:e.createElement(O,null),text:t,count:n})),e.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem"}},e.createElement("label",{htmlFor:"text"},"Text"),e.createElement("input",{type:"text",defaultValue:t,placeholder:"string",onChange:i=>a(i.target.value)})),e.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem"}},e.createElement("label",{htmlFor:"count"},"Count"),e.createElement("input",{type:"number",defaultValue:n,placeholder:"number",onChange:i=>s(i.target.value)})),e.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},e.createElement("input",{type:"color",defaultValue:l,style:{width:"2rem",height:"2rem"},onChange:i=>c(i.target.value)}),e.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"Background")),e.createElement("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"}},e.createElement("input",{style:{width:"2rem",height:"2rem"},defaultValue:p,type:"color",onChange:i=>h(i.target.value)}),e.createElement("label",{htmlFor:"",style:{fontSize:"0.875rem"}},"color")))}const U=JSON.parse('{"title":"Pill","description":"","frontmatter":{},"headers":[],"relativePath":"components/pill.md","filePath":"components/pill.md"}'),I={name:"components/pill.md"},J=Object.assign(I,{setup(t){const a=S();return j(()=>{F.createRoot(a.value).render(_.createElement(D))}),(n,s)=>(q(),w("div",null,[s[0]||(s[0]=B("",7)),T("div",{ref_key:"el",ref:a},null,512)]))}});export{U as __pageData,J as default};
