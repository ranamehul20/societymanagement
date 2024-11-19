import{r,j as e}from"./index-DnRDX3w2.js";import{g as N,c as v}from"./BlockService-D_VSwCyK.js";import{C as c,a as l}from"./CRow-1tTMpDHO.js";import{C as H,a as F}from"./CCardBody-DCdMFWZv.js";import{C as I}from"./CCardHeader-D4DRa4G8.js";import{C as k}from"./CForm-DUZMZWxx.js";import{a as m,C as x}from"./CFormInput-DldqsSPp.js";import{C as B}from"./CFormSelect-WBlYwP5F.js";import{b as E}from"./index.esm-DBaUAKo-.js";import{C as f}from"./CAlert-F9qhzg3x.js";import"./CCloseButton-DW2grjsO.js";const M=()=>{const[a,i]=r.useState({name:"",totalHouse:"",societyId:""}),[d,n]=r.useState(null),[p,u]=r.useState(!1),[j,C]=r.useState([]),[q,S]=r.useState(""),[y,o]=r.useState(!1);r.useEffect(()=>{(async()=>{try{const t=await N();t.code===200&&!t.error?C(t.results):console.error("Error fetching societies:",t.error)}catch(t){console.error("Error fetching societies:",t)}})()},[]);const h=s=>{i({...a,[s.target.name]:s.target.value})},b=s=>{S(s.target.value),i({...a,[s.target.name]:s.target.value})},g=async s=>{s.preventDefault(),o(!0),n(null),u(!1);try{const t=await v(a);t.code===200&&!t.error?(u(!0),i({name:"",totalHouse:"",societyId:""}),o(!1)):(n(t.message),o(!1))}catch(t){n(t.response.data.errors),o(!1)}};return e.jsx(c,{children:e.jsx(l,{xs:12,children:e.jsxs(H,{className:"mb-4",children:[e.jsx(I,{children:e.jsx("strong",{children:"Create Block"})}),e.jsxs(F,{children:[e.jsxs(k,{onSubmit:g,children:[e.jsxs(c,{className:"mb-3",children:[e.jsxs(m,{htmlFor:"name",className:"col-sm-2 col-form-label",children:["Block Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(l,{sm:10,children:e.jsx(x,{type:"text",id:"name",name:"name",placeholder:"Block Name",value:a.name,onChange:h,required:!0})})]}),e.jsxs(c,{className:"mb-3",children:[e.jsx(m,{htmlFor:"totalHouse",className:"col-sm-2 col-form-label",children:"Total House"}),e.jsx(l,{sm:10,children:e.jsx(x,{type:"text",id:"totalHouse",name:"totalHouse",value:a.totalHouse,placeholder:"Total House",onChange:h})})]}),e.jsxs(c,{className:"mb-3",children:[e.jsxs(m,{htmlFor:"societyId",className:"col-sm-2 col-form-label",children:["Society ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(l,{sm:10,children:e.jsxs(B,{id:"societyId",name:"societyId",value:a.societyId,onChange:b,children:[e.jsx("option",{value:"",children:"Select Society"}),j.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsx(E,{type:"submit",color:"primary",disabled:y,children:"Submit"})]}),d&&e.jsx(f,{color:"danger",className:"mt-3",children:d}),p&&e.jsx(f,{color:"success",className:"mt-3",children:"Block created successfully!"})]})]})})})};export{M as default};
