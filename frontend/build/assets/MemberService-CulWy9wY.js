import{d as s}from"./index-BDq0fJeC.js";const r="https://octaerpservice.com/api",o=async()=>{try{const e=await s.get(`${r}/members`,{withCredentials:!0});return console.log("Success",e),e.data}catch(e){throw e}},a=async e=>{try{const t=await await s.post(`${r}/auth/register`,e,{withCredentials:!0});return console.log("Success",t),t.data}catch(t){throw t}},n=async e=>{try{const t=await s.get(`${r}/blocks?societyId=${e}`,{withCredentials:!0});return console.log("Success",t),t.data}catch(t){throw t}},i=async e=>{try{const t=await s.get(`${r}/config/societies`,{withCredentials:!0});return console.log("Success",t),t.data}catch(t){throw t}},u=async e=>{try{const t=await s.get(`${r}/houses?blockId=${e}`,{withCredentials:!0});return console.log("Success",t),t.data}catch(t){throw t}};export{n as a,u as b,a as c,i as g,o as l};
