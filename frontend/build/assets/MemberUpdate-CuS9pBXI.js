import{b as se,r as a,j as e}from"./index-DnRDX3w2.js";import{d as te,g as re,a as ae,b as le}from"./SocietyService-DYrJTKhh.js";import{v as oe,g as ce,a as ne,b as ie,u as me}from"./MemberService-6s-AHVmR.js";import{C as l,a as o}from"./CRow-1tTMpDHO.js";import{C as de,a as he}from"./CCardBody-DCdMFWZv.js";import{C as ue}from"./CCardHeader-D4DRa4G8.js";import{C as xe}from"./CForm-DUZMZWxx.js";import{a as c,C as m}from"./CFormInput-DldqsSPp.js";import{C as d}from"./CFormSelect-WBlYwP5F.js";import{b as je}from"./index.esm-DBaUAKo-.js";import{C as B}from"./CAlert-F9qhzg3x.js";import"./CCloseButton-DW2grjsO.js";const Re=()=>{const{id:p}=se(),[r,n]=a.useState({email:"",password:"",role:"",isDefaultPassword:!0,firstname:"",lastname:"",phoneNumber:"",dateOfBirth:"",blockNumber:"",houseNumber:"",societyId:"",totalMembers:"",street:"",locality:"",state:"",country:"",zipCode:""}),[b,y]=a.useState(null),[w,g]=a.useState(!1),[R,H]=a.useState([]),[h,S]=a.useState(""),[M,D]=a.useState([]),[u,N]=a.useState(""),[I,O]=a.useState([]),[fe,C]=a.useState(""),[x,L]=a.useState([]),[j,v]=a.useState(""),[f,E]=a.useState(""),[pe,F]=a.useState(""),[_,z]=a.useState([]),[P,k]=a.useState([]),[T,q]=a.useState([]),[be,V]=a.useState(""),A=async()=>{try{const s=await oe(p);if(s.code===200&&!s.error){const t=s.results,ee={...t.settings,...t};n(ee),v(t.country),E(t.state),F(t.city),S(t.societyId),N(t.blockNumber),C(t.houseNumber)}}catch(s){console.error("Failed to fetch society details:",s)}},U=async()=>{try{const s=await te();s.code===200&&!s.error?L(s.results):console.error("Error fetching static values:",s.error)}catch(s){console.error("Error fetching static values:",s)}},Z=async()=>{try{const s=await re();s.code===200&&!s.error?z(s.results):console.error("Error fetching countries:",s.message)}catch(s){console.error("Error fetching countries:",s)}};a.useEffect(()=>{(async()=>{if(j)try{const t=await ae(j);t.code===200&&!t.error?k(t.results):console.error("Error fetching states:",t.message)}catch(t){console.error("Error fetching states:",t)}else k([])})()},[j]),a.useEffect(()=>{(async()=>{if(f)try{const t=await le(f);t.code===200&&!t.error?q(t.results):console.error("Error fetching city:",t.message)}catch(t){console.error("Error fetching city:",t)}else q([])})()},[f]),a.useEffect(()=>{(async()=>{try{const t=await ce();t.code===200&&!t.error?H(t.results):console.error("Error fetching societies:",t.error)}catch(t){console.error("Error fetching societies:",t)}})(),U(),Z(),A()},[]),a.useEffect(()=>{(async()=>{if(h)try{const t=await ne(h);t.code===200&&!t.error?D(t.results):console.error("Error fetching blocks:",t.error)}catch(t){console.error("Error fetching blocks:",t)}})()},[h]),a.useEffect(()=>{(async()=>{if(u)try{const t=await ie(u);t.code===200&&!t.error?O(t.results):console.error("Error fetching house:",t.error)}catch(t){console.error("Error fetching house:",t)}})()},[u]);const G=s=>{v(s.target.value),n({...r,[s.target.name]:s.target.value})},J=s=>{E(s.target.value),n({...r,[s.target.name]:s.target.value})},K=s=>{F(s.target.value),n({...r,[s.target.name]:s.target.value})},Q=s=>{V(s.target.value),n({...r,[s.target.name]:s.target.value})},i=s=>{n({...r,[s.target.name]:s.target.value})},W=s=>{S(s.target.value),n({...r,[s.target.name]:s.target.value})},X=s=>{N(s.target.value),n({...r,[s.target.name]:s.target.value})},Y=s=>{C(s.target.value),n({...r,[s.target.name]:s.target.value})},$=async s=>{s.preventDefault(),y(null),g(!1);try{console.log("update user");const t=await me(p,r);t.code===200&&!t.error&&g(!0)}catch{y("Failed to update details. Please try again.")}};return e.jsx(l,{children:e.jsx(o,{xs:12,children:e.jsxs(de,{className:"mb-4",children:[e.jsx(ue,{children:e.jsx("strong",{children:"Update Members"})}),e.jsxs(he,{children:[e.jsxs(xe,{onSubmit:$,children:[e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"firstname",className:"col-sm-2 col-form-label",children:["First Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"firstname",name:"firstname",value:r.firstname,placeholder:"Enter first name",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"lastname",className:"col-sm-2 col-form-label",children:["Last Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"lastname",name:"lastname",value:r.lastname,placeholder:"Enter last name",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"email",className:"col-sm-2 col-form-label",children:["Email ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"email",name:"email",value:r.email,placeholder:"Enter Email Id",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"phoneNumber",className:"col-sm-2 col-form-label",children:"Phone Number"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"phoneNumber",name:"phoneNumber",value:r.phoneNumber,placeholder:"Enter phone number",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"role",className:"col-sm-2 col-form-label",children:["Role ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"role",name:"role",value:r.role,onChange:Q,children:[e.jsx("option",{value:"",children:"Select Role"}),x&&x.userTypes&&Object.keys(x.userTypes).map(s=>e.jsx("option",{value:s,children:x.userTypes[s]},s))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"dateOfBirth",className:"col-sm-2 col-form-label",children:"Date Of Birth"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"Date",id:"dateOfBirth",name:"dateOfBirth",value:r.dateOfBirth,placeholder:"Select Date of birth",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"societyId",className:"col-sm-2 col-form-label",children:["Society ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"societyId",name:"societyId",value:r.societyId,onChange:W,children:[e.jsx("option",{value:"",children:"Select Society"}),R.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"blockNumber",className:"col-sm-2 col-form-label",children:["Block ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"blockNumber",name:"blockNumber",value:r.blockNumber,onChange:X,disabled:!h,children:[e.jsx("option",{value:"",children:"Select Block"}),M.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"houseNumber",className:"col-sm-2 col-form-label",children:["House Number ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"houseNumber",name:"houseNumber",value:r.houseNumber,onChange:Y,disabled:!u,children:[e.jsx("option",{value:"",children:"Select House"}),I.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"totalMembers",className:"col-sm-2 col-form-label",children:["Total Members ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"totalMembers",name:"totalMembers",value:r.totalMembers,placeholder:"Enter total members",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"street",className:"col-sm-2 col-form-label",children:"Address Line 1"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"street",name:"street",value:r.street,placeholder:"Address Line 1",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"locality",className:"col-sm-2 col-form-label",children:"Locality"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"locality",name:"locality",value:r.locality,placeholder:"Locality",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"country",className:"col-sm-2 col-form-label",children:"Country"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"country",name:"country",value:r.country,onChange:G,children:[e.jsx("option",{value:"",children:"Select Country"}),_.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"state",className:"col-sm-2 col-form-label",children:"State"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"state",name:"state",value:r.state,onChange:J,disabled:!j,children:[e.jsx("option",{value:"",children:"Select State"}),P.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"city",className:"col-sm-2 col-form-label",children:"City"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"city",name:"city",value:r.city,onChange:K,disabled:!f,children:[e.jsx("option",{value:"",children:"Select City"}),T.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"zipCode",className:"col-sm-2 col-form-label",children:"Zip code"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"tel",id:"zipCode",name:"zipCode",placeholder:"Zip Code",value:r.zipCode,onChange:i})})]}),e.jsx(je,{type:"submit",color:"primary",children:"Submit"})]}),b&&e.jsx(B,{color:"danger",className:"mt-3",children:b}),w&&e.jsx(B,{color:"success",className:"mt-3",children:"Member details updated successfully!"})]})]})})})};export{Re as default};