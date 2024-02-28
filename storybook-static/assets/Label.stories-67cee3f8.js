import{j as x}from"./jsx-runtime-8a427673.js";import{u as _,a as u}from"./styled-components.browser.esm-655d9553.js";import"./index-0fcd1de1.js";import"./_commonjsHelpers-725317a4.js";const b=e=>u`
  ${e==="sm"&&{fontSize:"0.875rem",lineHeight:"1.25rem"}}
  ${e==="md"&&{fontSize:"1rem",lineHeight:"1.5rem"}}
  ${e==="lg"&&{fontSize:"1.125rem",lineHeight:"1.75rem"}}
  ${typeof e=="string"&&`font-size: ${e};`}
`,h=e=>u`
  ${e&&{fontWeight:"700"}}
`,z=_.span.withConfig({displayName:"styled__StyledLabel",componentId:"sc-ubj1ys-0"})([""," ",""],({fontSize:e})=>b(e),({fontBold:e})=>e&&h(e)),r=({fontSize:e,fontBold:g=!1,children:y,tagType:S="span"})=>x.jsx(z,{as:S,fontSize:e,fontBold:g,children:y});try{r.displayName="Label",r.__docgenInfo={description:"",displayName:"Label",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"FontSize"}},fontBold:{defaultValue:{value:"false"},description:"",name:"fontBold",required:!1,type:{name:"boolean"}},tagType:{defaultValue:{value:"span"},description:"",name:"tagType",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const $={title:"Atoms/Label",component:r,tags:["autodocs"],argTypes:{fontSize:{control:"select",options:["sm","md","lg","32px","8rem","16em"]},fontBold:{control:"boolean"},tagType:{control:"text"},children:{control:"text"}},parameters:{layout:"centered"}},t={args:{fontSize:"md",children:"Example Text",fontBold:!1}},a={args:{...t.args,fontBold:!0}},o={args:{...t.args,fontSize:"sm"}};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    fontSize: "md",
    children: "Example Text",
    fontBold: false
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fontBold: true
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fontSize: "sm"
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const j=["Default","Bold","Small"];export{a as Bold,t as Default,o as Small,j as __namedExportsOrder,$ as default};
