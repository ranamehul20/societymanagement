import{b as B,r as a,j as e}from"./index-DnRDX3w2.js";import{v as E,g as H,u as k}from"./BlockService-D_VSwCyK.js";import{C as l,a as i}from"./CRow-1tTMpDHO.js";import{C as q,a as D}from"./CCardBody-DCdMFWZv.js";import{C as w}from"./CCardHeader-D4DRa4G8.js";import{C as R}from"./CForm-DUZMZWxx.js";import{a as d,C as j}from"./CFormInput-DldqsSPp.js";import{C as _}from"./CFormSelect-WBlYwP5F.js";import{b as T}from"./index.esm-DBaUAKo-.js";import{C}from"./CAlert-F9qhzg3x.js";import"./CCloseButton-DW2grjsO.js";const W=()=>{const{id:n}=B(),[t,u]=a.useState({name:"",totalHouse:"",societyId:""}),[h,m]=a.useState(null),[S,f]=a.useState(!1),[y,b]=a.useState([]),[A,x]=a.useState(""),[g,c]=a.useState(!1),N=async()=>{try{const s=await E(n);if(s.code===200&&!s.error){const r=s.results;Object.keys(t).forEach(o=>{t[o]=r[o],o==="societyId"&&(t[o]=r[o]._id)}),x(r.societyId._id)}}catch(s){console.error("Failed to fetch block details:",s)}},v=async()=>{try{const s=await H();s.code===200&&!s.error?b(s.results):console.error("Error fetching societies:",s.error)}catch(s){console.error("Error fetching societies:",s)}};a.useEffect(()=>{v(),N()},[n]);const p=s=>{u({...t,[s.target.name]:s.target.value})},F=s=>{x(s.target.value),u({...t,[s.target.name]:s.target.value})},I=async s=>{s.preventDefault(),m(null),f(!1),c(!0);try{const r=await k(n,t);r.code===200&&!r.error?(f(!0),c(!1)):(m(r.message),c(!1))}catch(r){m(r.response.data.errors),c(!1)}};return e.jsx(l,{children:e.jsx(i,{xs:12,children:e.jsxs(q,{className:"mb-4",children:[e.jsx(w,{children:e.jsx("strong",{children:"Edit Block"})}),e.jsxs(D,{children:[e.jsxs(R,{onSubmit:I,children:[e.jsxs(l,{className:"mb-3",children:[e.jsxs(d,{htmlFor:"name",className:"col-sm-2 col-form-label",children:["Block Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(i,{sm:10,children:e.jsx(j,{type:"text",id:"name",name:"name",placeholder:"Block Name",value:t.name,onChange:p,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(d,{htmlFor:"totalHouse",className:"col-sm-2 col-form-label",children:"Total House"}),e.jsx(i,{sm:10,children:e.jsx(j,{type:"text",id:"totalHouse",name:"totalHouse",value:t.totalHouse,placeholder:"Total House",onChange:p})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(d,{htmlFor:"societyId",className:"col-sm-2 col-form-label",children:["Society ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(i,{sm:10,children:e.jsxs(_,{id:"societyId",name:"societyId",value:t.societyId,onChange:F,children:[e.jsx("option",{value:"",children:"Select Society"}),y.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsx(T,{type:"submit",color:"primary",disabled:g,children:"Submit"})]}),h&&e.jsx(C,{color:"danger",className:"mt-3",children:h}),S&&e.jsx(C,{color:"success",className:"mt-3",children:"Block created successfully!"})]})]})})})};export{W as default};
