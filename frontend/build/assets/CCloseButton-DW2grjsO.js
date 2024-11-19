import{r as O,R as E,i as v,_ as R,d as D,e as M,P as b}from"./index-DnRDX3w2.js";function j(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return O.useMemo(function(){return n.every(function(a){return a==null})?null:function(a){n.forEach(function(r){P(r,a)})}},n)}function P(n,o){if(n!=null)if(_(n))n(o);else try{n.current=o}catch{throw new Error('Cannot assign value "'.concat(o,'" to ref "').concat(n,'"'))}}function _(n){return!!(n&&{}.toString.call(n)=="[object Function]")}function w(n,o){if(n==null)return{};var a={},r=Object.keys(n),e,t;for(t=0;t<r.length;t++)e=r[t],!(o.indexOf(e)>=0)&&(a[e]=n[e]);return a}function N(n,o){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r},N(n,o)}function I(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,N(n,o)}var g={disabled:!1},k=E.createContext(null),L=function(o){return o.scrollTop},m="unmounted",p="exited",f="entering",h="entered",T="exiting",l=function(n){I(o,n);function o(r,e){var t;t=n.call(this,r,e)||this;var i=e,s=i&&!i.isMounting?r.enter:r.appear,u;return t.appearStatus=null,r.in?s?(u=p,t.appearStatus=f):u=h:r.unmountOnExit||r.mountOnEnter?u=m:u=p,t.state={status:u},t.nextCallback=null,t}o.getDerivedStateFromProps=function(e,t){var i=e.in;return i&&t.status===m?{status:p}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var i=this.state.status;this.props.in?i!==f&&i!==h&&(t=f):(i===f||i===h)&&(t=T)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e=this.props.timeout,t,i,s;return t=i=s=e,e!=null&&typeof e!="number"&&(t=e.exit,i=e.enter,s=e.appear!==void 0?e.appear:i),{exit:t,enter:i,appear:s}},a.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);i&&L(i)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:m})},a.performEnter=function(e){var t=this,i=this.props.enter,s=this.context?this.context.isMounting:e,u=this.props.nodeRef?[s]:[v.findDOMNode(this),s],c=u[0],x=u[1],S=this.getTimeouts(),y=s?S.appear:S.enter;if(!e&&!i||g.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,x),this.safeSetState({status:f},function(){t.props.onEntering(c,x),t.onTransitionEnd(y,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,x)})})})},a.performExit=function(){var e=this,t=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||g.disabled){this.safeSetState({status:p},function(){e.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:T},function(){e.props.onExiting(s),e.onTransitionEnd(i.exit,function(){e.safeSetState({status:p},function(){e.props.onExited(s)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),s=e==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=u[0],x=u[1];this.props.addEndListener(c,x)}e!=null&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=w(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(k.Provider,{value:null},typeof i=="function"?i(e,s):E.cloneElement(E.Children.only(i),s))},o}(E.Component);l.contextType=k;l.propTypes={};function d(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};l.UNMOUNTED=m;l.EXITED=p;l.ENTERING=f;l.ENTERED=h;l.EXITING=T;var C=O.forwardRef(function(n,o){var a=n.className,r=n.dark,e=n.disabled,t=n.white,i=R(n,["className","dark","disabled","white"]);return E.createElement("button",D({type:"button",className:M("btn","btn-close",{"btn-close-white":t},e,a),"aria-label":"Close",disabled:e},r&&{"data-coreui-theme":"dark"},i,{ref:o}))});C.propTypes={className:b.string,dark:b.bool,disabled:b.bool,white:b.bool};C.displayName="CCloseButton";export{C,l as T,j as u};
