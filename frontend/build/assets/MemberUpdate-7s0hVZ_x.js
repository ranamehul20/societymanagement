import{r as a,j as e}from"./index-BDq0fJeC.js";import{d as Y,g as $,a as ee,b as se}from"./SocietyService-isI-FQWX.js";import{g as te,a as re,b as ae,c as le}from"./MemberService-CulWy9wY.js";import{C as l,a as o}from"./CRow-BptM8iaF.js";import{C as oe,a as ce}from"./CCardBody-DX8udb6o.js";import{C as ne}from"./CCardHeader-CErCK7DV.js";import{C as ie}from"./CForm-aEcGfKVU.js";import{a as c,C as m}from"./CFormInput-vW0qYZpN.js";import{C as d}from"./CFormSelect-CfWV5T9u.js";import{b as me}from"./MemberDetailsView-BIJ5TZkK.js";import{C as S}from"./CAlert-B2xPzP-d.js";import"./cil-user-CgMK_sKB.js";const ke=()=>{const[r,n]=a.useState({email:"",password:"",role:"",isDefaultPassword:!0,firstname:"",lastname:"",phoneNumber:"",dateOfBirth:"",blockNumber:"",houseNumber:"",societyId:"",totalMembers:"",street:"",locality:"",state:"",country:"",zipCode:""}),[p,b]=a.useState(null),[C,y]=a.useState(!1),[v,E]=a.useState([]),[h,k]=a.useState(""),[F,B]=a.useState([]),[u,q]=a.useState(""),[w,R]=a.useState([]),[de,H]=a.useState(""),[x,M]=a.useState([]),[j,D]=a.useState(""),[f,I]=a.useState(""),[he,O]=a.useState(""),[z,L]=a.useState([]),[_,g]=a.useState([]),[P,N]=a.useState([]),[ue,T]=a.useState(""),V=async()=>{try{const s=await Y();s.code===200&&!s.error?M(s.results):console.error("Error fetching static values:",s.error)}catch(s){console.error("Error fetching static values:",s)}},A=async()=>{try{const s=await $();s.code===200&&!s.error?L(s.results):console.error("Error fetching countries:",s.message)}catch(s){console.error("Error fetching countries:",s)}};a.useEffect(()=>{(async()=>{if(j)try{const t=await ee(j);t.code===200&&!t.error?g(t.results):console.error("Error fetching states:",t.message)}catch(t){console.error("Error fetching states:",t)}else g([])})()},[j]),a.useEffect(()=>{(async()=>{if(f)try{const t=await se(f);t.code===200&&!t.error?N(t.results):console.error("Error fetching city:",t.message)}catch(t){console.error("Error fetching city:",t)}else N([])})()},[f]),a.useEffect(()=>{(async()=>{try{const t=await te();t.code===200&&!t.error?E(t.results):console.error("Error fetching societies:",t.error)}catch(t){console.error("Error fetching societies:",t)}})(),V(),A()},[]),a.useEffect(()=>{(async()=>{if(h)try{const t=await re(h);t.code===200&&!t.error?B(t.results):console.error("Error fetching blocks:",t.error)}catch(t){console.error("Error fetching blocks:",t)}})()},[h]),a.useEffect(()=>{(async()=>{if(u)try{const t=await ae(u);t.code===200&&!t.error?R(t.results):console.error("Error fetching house:",t.error)}catch(t){console.error("Error fetching house:",t)}})()},[u]);const Z=s=>{D(s.target.value),n({...r,[s.target.name]:s.target.value})},U=s=>{I(s.target.value),n({...r,[s.target.name]:s.target.value})},G=s=>{O(s.target.value),n({...r,[s.target.name]:s.target.value})},J=s=>{T(s.target.value),n({...r,[s.target.name]:s.target.value})},i=s=>{n({...r,[s.target.name]:s.target.value})},K=s=>{k(s.target.value),n({...r,[s.target.name]:s.target.value})},Q=s=>{q(s.target.value),n({...r,[s.target.name]:s.target.value})},W=s=>{H(s.target.value),n({...r,[s.target.name]:s.target.value})},X=async s=>{s.preventDefault(),b(null),y(!1);try{await le(r),y(!0),n({email:"",password:"",role:"",isDefaultPassword:"",firstname:"",lastname:"",phoneNumber:"",dateOfBirth:"",blockNumber:"",houseNumber:"",societyId:"",totalMembers:"",street:"",locality:"",city:"",state:"",country:"",zipCode:""})}catch{b("Failed to create house. Please try again.")}};return e.jsx(l,{children:e.jsx(o,{xs:12,children:e.jsxs(oe,{className:"mb-4",children:[e.jsx(ne,{children:e.jsx("strong",{children:"Create Members"})}),e.jsxs(ce,{children:[e.jsxs(ie,{onSubmit:X,children:[e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"firstname",className:"col-sm-2 col-form-label",children:["First Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"firstname",name:"firstname",value:r.firstname,placeholder:"Enter first name",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"lastname",className:"col-sm-2 col-form-label",children:["Last Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"lastname",name:"lastname",value:r.lastname,placeholder:"Enter last name",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"email",className:"col-sm-2 col-form-label",children:["Email ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"email",name:"email",value:r.email,placeholder:"Enter Email Id",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"phoneNumber",className:"col-sm-2 col-form-label",children:"Phone Number"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"phoneNumber",name:"phoneNumber",value:r.phoneNumber,placeholder:"Enter phone number",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"role",className:"col-sm-2 col-form-label",children:["Role ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"role",name:"role",value:r.role,onChange:J,children:[e.jsx("option",{value:"",children:"Select Role"}),x&&x.userTypes&&Object.keys(x.userTypes).map(s=>e.jsx("option",{value:s,children:x.userTypes[s]},s))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"dateOfBirth",className:"col-sm-2 col-form-label",children:"Date Of Birth"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"Date",id:"dateOfBirth",name:"dateOfBirth",value:r.dateOfBirth,placeholder:"Select Date of birth",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"societyId",className:"col-sm-2 col-form-label",children:["Society ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"societyId",name:"societyId",value:r.societyId,onChange:K,children:[e.jsx("option",{value:"",children:"Select Society"}),v.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"blockNumber",className:"col-sm-2 col-form-label",children:["Block ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"blockNumber",name:"blockNumber",value:r.blockNumber,onChange:Q,disabled:!h,children:[e.jsx("option",{value:"",children:"Select Block"}),F.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"houseNumber",className:"col-sm-2 col-form-label",children:["House Number ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"houseNumber",name:"houseNumber",value:r.houseNumber,onChange:W,disabled:!u,children:[e.jsx("option",{value:"",children:"Select House"}),w.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"totalMembers",className:"col-sm-2 col-form-label",children:["Total Members ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"totalMembers",name:"totalMembers",value:r.totalMembers,placeholder:"Enter total members",onChange:i,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"street",className:"col-sm-2 col-form-label",children:"Address Line 1"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"street",name:"street",value:r.street,placeholder:"Address Line 1",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"locality",className:"col-sm-2 col-form-label",children:"Locality"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"text",id:"locality",name:"locality",value:r.locality,placeholder:"Locality",onChange:i})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"country",className:"col-sm-2 col-form-label",children:"Country"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"country",name:"country",value:r.country,onChange:Z,children:[e.jsx("option",{value:"",children:"Select Country"}),z.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"state",className:"col-sm-2 col-form-label",children:"State"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"state",name:"state",value:r.state,onChange:U,disabled:!j,children:[e.jsx("option",{value:"",children:"Select State"}),_.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"city",className:"col-sm-2 col-form-label",children:"City"}),e.jsx(o,{sm:10,children:e.jsxs(d,{id:"city",name:"city",value:r.city,onChange:G,disabled:!f,children:[e.jsx("option",{value:"",children:"Select City"}),P.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"zipCode",className:"col-sm-2 col-form-label",children:"Zip code"}),e.jsx(o,{sm:10,children:e.jsx(m,{type:"tel",id:"zipCode",name:"zipCode",placeholder:"Zip Code",value:r.zipCode,onChange:i})})]}),e.jsx(me,{type:"submit",color:"primary",children:"Submit"})]}),p&&e.jsx(S,{color:"danger",className:"mt-3",children:p}),C&&e.jsx(S,{color:"success",className:"mt-3",children:"Member details updated successfully!"})]})]})})})};export{ke as default};
