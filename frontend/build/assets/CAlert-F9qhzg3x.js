import{r,_ as x,R as t,d as y,e as T,P as s,h as g}from"./index-DnRDX3w2.js";import{u as k,T as w,C as P}from"./CCloseButton-DW2grjsO.js";var u=r.forwardRef(function(e,f){var v=e.children,b=e.className,o=e.color,a=o===void 0?"primary":o,l=e.dismissible,p=e.variant,n=e.visible,i=n===void 0?!0:n,C=e.onClose,R=x(e,["children","className","color","dismissible","variant","visible","onClose"]),c=r.useRef(null),E=k(f,c),d=r.useState(i),h=d[0],m=d[1];return r.useEffect(function(){m(i)},[i]),t.createElement(w,{in:h,mountOnEnter:!0,nodeRef:c,onExit:C,timeout:150,unmountOnExit:!0},function(N){return t.createElement("div",y({className:T("alert",p==="solid"?"bg-".concat(a," text-white"):"alert-".concat(a),{"alert-dismissible fade":l,show:N==="entered"},b),role:"alert"},R,{ref:E}),v,l&&t.createElement(P,{onClick:function(){return m(!1)}}))})});u.propTypes={children:s.node,className:s.string,color:g.isRequired,dismissible:s.bool,onClose:s.func,variant:s.string,visible:s.bool};u.displayName="CAlert";export{u as C};