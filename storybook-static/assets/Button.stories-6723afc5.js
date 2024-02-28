import{j as C}from"./jsx-runtime-8a427673.js";import{u as S}from"./styled-components.browser.esm-655d9553.js";import"./index-0fcd1de1.js";import"./_commonjsHelpers-725317a4.js";const _={borderRadius:"9999px",borderStyle:"none",fontWeight:"700"},R={primary:{"--tw-bg-opacity":"1",backgroundColor:"rgb(43 132 250 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","&:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(94 152 255 / var(--tw-bg-opacity))"},"&:active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(0 112 229 / var(--tw-bg-opacity))"}},danger:{"--tw-bg-opacity":"1",backgroundColor:"rgb(239 68 68 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","&:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(248 113 113 / var(--tw-bg-opacity))"},"&:active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(220 38 38 / var(--tw-bg-opacity))"}},warning:{"--tw-bg-opacity":"1",backgroundColor:"rgb(245 158 11 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","&:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(251 191 36 / var(--tw-bg-opacity))"},"&:active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(217 119 6 / var(--tw-bg-opacity))"}},success:{"--tw-bg-opacity":"1",backgroundColor:"rgb(34 197 94 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","&:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(74 222 128 / var(--tw-bg-opacity))"},"&:active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(22 163 74 / var(--tw-bg-opacity))"}},default:{"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))","&:hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(156 163 175 / var(--tw-bg-opacity))"},"&:active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}}},D={sm:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"0.75rem",lineHeight:"1rem"},md:{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",fontSize:"1rem",lineHeight:"1.5rem"},lg:{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"1rem",paddingBottom:"1rem",fontSize:"1.5rem",lineHeight:"2rem"}},T=S.button.withConfig({displayName:"styled__StyledButton",componentId:"sc-18kr0mq-0"})(({variant:t,size:r})=>[_,r&&D[r],t&&R[t]]),c=({children:t,variant:r="default",size:k="md",...z})=>C.jsx(T,{variant:r,size:k,...z,children:t});try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"default"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const N={title:"Atoms/Button",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},children:{control:"text"}},parameters:{layout:"centered"}},a={args:{variant:"default",size:"md",children:"Button"}},e={args:{variant:"primary",size:"md",children:"Button"}},o={args:{variant:"success",size:"md",children:"Button"}},n={args:{variant:"warning",size:"md",children:"Button"}},i={args:{variant:"danger",size:"md",children:"Button"}};var s,g,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "md",
    children: "Button"
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Button"
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,b,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "success",
    size: "md",
    children: "Button"
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,w,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    size: "md",
    children: "Button"
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var h,B,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    size: "md",
    children: "Button"
  }
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const V=["Default","Primary","Success","Warning","Danger"];export{i as Danger,a as Default,e as Primary,o as Success,n as Warning,V as __namedExportsOrder,N as default};
