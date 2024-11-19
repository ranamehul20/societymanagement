import{b as $,r as n,j as e}from"./index-DnRDX3w2.js";import{v as G,g as J,a as K,b as V,u as W}from"./SocietyService-DYrJTKhh.js";import{C as l,a as r}from"./CRow-1tTMpDHO.js";import{C as X}from"./CForm-DUZMZWxx.js";import{C as q,a as D}from"./CCardBody-DCdMFWZv.js";import{C as E}from"./CCardHeader-D4DRa4G8.js";import{a as c,C as o}from"./CFormInput-DldqsSPp.js";import{C as d}from"./CFormSelect-WBlYwP5F.js";import{C as Y}from"./CImage-DSmKCcJX.js";import{b as _}from"./index.esm-DBaUAKo-.js";import{C as P}from"./CAlert-F9qhzg3x.js";import"./CCloseButton-DW2grjsO.js";const ue=()=>{const{id:y}=$(),[a,i]=n.useState({name:"",street:"",locality:"",city:"",state:"",country:"",zipCode:"",establishment:"",type:"",logo:null,registrationNumber:"",maintenanceAmount:"",maintenanceFrequency:"",dueDay:"",latePaymentPenalty:""}),[g,p]=n.useState(null),[L,h]=n.useState(!1),[f,k]=n.useState(null),[w,A]=n.useState([]),[R,C]=n.useState([]),[z,b]=n.useState([]),[u,N]=n.useState(""),[x,S]=n.useState(""),[ee,v]=n.useState("");n.useState(null);const[M,j]=n.useState(!1),I=async()=>{try{const s=await G(y);if(s.code===200&&!s.error){const t=s.results,Q={...t.settings,...t};i(Q),N(t.country),S(t.state),v(t.city),setLogoPreview(t.settings.logo)}}catch(s){console.error("Failed to fetch society details:",s)}};n.useEffect(()=>{I()},[y]),n.useEffect(()=>{(async()=>{try{const t=await J();t.code===200&&!t.error?A(t.results):console.error("Error fetching countries:",t.message)}catch(t){console.error("Error fetching countries:",t)}})()},[]),n.useEffect(()=>{(async()=>{if(u)try{const t=await K(u);t.code===200&&!t.error?C(t.results):console.error("Error fetching states:",t.message)}catch(t){console.error("Error fetching states:",t)}else C([])})()},[u]),n.useEffect(()=>{(async()=>{if(x)try{const t=await V(x);t.code===200&&!t.error?b(t.results):console.error("Error fetching city:",t.message)}catch(t){console.error("Error fetching city:",t)}else b([])})()},[x]);const m=s=>{i({...a,[s.target.name]:s.target.value})},T=s=>{N(s.target.value),i({...a,[s.target.name]:s.target.value})},U=s=>{S(s.target.value),i({...a,[s.target.name]:s.target.value})},B=s=>{v(s.target.value),i({...a,[s.target.name]:s.target.value})},Z=s=>{const t=s.target.files[0];i({...a,logo:t}),k(URL.createObjectURL(t))},F=s=>{const t=s.target.value;/^\d*$/.test(t)&&i({...a,[s.target.name]:t})},H=s=>{i({...a,[s.target.name]:s.target.value})},O=async s=>{s.preventDefault(),j(!0),p(null),h(!1);try{const t=await W(y,a);t.code===200&&!t.error?(h(!0),j(!1)):(p(t.message),h(!1),j(!1))}catch(t){p(t.response.data.errors),h(!1),j(!1)}};return e.jsx(l,{children:e.jsxs(r,{xs:12,children:[e.jsxs(X,{onSubmit:O,children:[e.jsxs(q,{className:"mb-4",children:[e.jsx(E,{children:e.jsx("strong",{children:"Edit Society"})}),e.jsxs(D,{children:[e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"name",className:"col-sm-2 col-form-label",children:["Society Name ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"name",name:"name",placeholder:"Society Name",value:a.name,onChange:m,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"street",className:"col-sm-2 col-form-label",children:["Address Line 1 ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"street",name:"street",value:a.street,placeholder:"Address Line 1",onChange:m,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"locality",className:"col-sm-2 col-form-label",children:["Locality ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"locality",name:"locality",value:a.locality,placeholder:"Locality",onChange:m,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"country",className:"col-sm-2 col-form-label",children:["Country ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsxs(d,{id:"country",name:"country",value:a.country,onChange:T,children:[e.jsx("option",{value:"",children:"Select Country"}),w.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"state",className:"col-sm-2 col-form-label",children:["State ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsxs(d,{id:"state",name:"state",value:a.state,onChange:U,disabled:!u,children:[e.jsx("option",{value:"",children:"Select State"}),R.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"city",className:"col-sm-2 col-form-label",children:["City ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsxs(d,{id:"city",name:"city",value:a.city,onChange:B,disabled:!x,children:[e.jsx("option",{value:"",children:"Select City"}),z.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"zipCode",className:"col-sm-2 col-form-label",children:["Zip code ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"tel",id:"zipCode",name:"zipCode",placeholder:"Zip Code",value:a.zipCode,onChange:m,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"establishment",className:"col-sm-2 col-form-label",children:"Establishment Date"}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"Date",id:"establishment",name:"establishment",placeholder:"Establishment Date",value:a.establishment,onChange:m})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"type",className:"col-sm-2 col-form-label",children:["Society Type ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsxs(d,{id:"type",name:"type",value:a.type,onChange:m,children:[e.jsx("option",{value:"",children:"Select Society Type"}),e.jsx("option",{value:"1",children:"Tenament"},"1"),e.jsx("option",{value:"2",children:"Flat"},"2")]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"registrationNumber",className:"col-sm-2 col-form-label",children:"Registration Number"}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"registrationNumber",name:"registrationNumber",placeholder:"Registration Number",value:a.registrationNumber,onChange:m})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"logo",className:"col-sm-2 col-form-label",children:"Logo"}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"file",id:"logo",name:"logo",onChange:Z,accept:"image/*"})})]}),f&&e.jsxs(l,{className:"mb-3",children:[e.jsx(r,{sm:2}),e.jsx(r,{sm:10,children:e.jsx(Y,{src:f,alt:"Logo Preview",width:200,className:"mb-2"})})]})]})]}),e.jsxs(q,{className:"mt-4",children:[e.jsx(E,{children:"Maintenance Settings"}),e.jsxs(D,{children:[e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"maintenanceAmount",className:"col-sm-2 col-form-label",children:["Maintenance Amount",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"maintenanceAmount",name:"maintenanceAmount",placeholder:"Enter maintenance amount",value:a.maintenanceAmount,onChange:F,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"maintenanceFrequency",className:"col-sm-2 col-form-label",children:["Maintenance Frequency"," ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsxs(d,{id:"maintenanceFrequency",name:"maintenanceFrequency",value:a.maintenanceFrequency,onChange:H,required:!0,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"monthly",children:"Monthly"}),e.jsx("option",{value:"quarterly",children:"Quarterly"}),e.jsx("option",{value:"annually",children:"Annually"})]})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsxs(c,{htmlFor:"dueDay",className:"col-sm-2 col-form-label",children:["Due Date ",e.jsx("span",{className:"required-asterisk",children:"*"})]}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"text",id:"dueDay",name:"dueDay",placeholder:"Due Days of the month like 1,2,3",value:a.dueDay,onChange:F,required:!0})})]}),e.jsxs(l,{className:"mb-3",children:[e.jsx(c,{htmlFor:"latePaymentPenalty",className:"col-sm-2 col-form-label",children:"Late Payment Penalty"}),e.jsx(r,{sm:10,children:e.jsx(o,{type:"number",id:"latePaymentPenalty",name:"latePaymentPenalty",placeholder:"Enter late payment penalty",value:a.latePaymentPenalty,onChange:m})})]}),e.jsx(_,{type:"submit",color:"primary",disabled:M,children:"Submit"})]})]})]}),g&&e.jsx(P,{color:"danger",className:"mt-3",children:g}),L&&e.jsx(P,{color:"success",className:"mt-3",children:"Society updated successfully!"})]})})};export{ue as default};
