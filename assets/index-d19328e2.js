(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function _(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=_(l);fetch(l.href,o)}})();var O,a,G,k,B,V,H,T={},K=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W=Array.isArray;function b(t,e){for(var _ in e)t[_]=e[_];return t}function J(t){var e=t.parentNode;e&&e.removeChild(t)}function re(t,e,_){var r,l,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?O.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return N(t,s,r,l,null)}function N(t,e,_,r,l){var o={type:t,props:e,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++G};return l==null&&a.vnode!=null&&a.vnode(o),o}function w(t){return t.children}function D(t,e){this.props=t,this.context=e}function S(t,e){if(e==null)return t.__?S(t.__,t.__.__k.indexOf(t)+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?S(t):null}function Q(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return Q(t)}}function R(t){(!t.__d&&(t.__d=!0)&&k.push(t)&&!M.__r++||B!==a.debounceRendering)&&((B=a.debounceRendering)||V)(M)}function M(){var t,e,_,r,l,o,s,f;for(k.sort(H);t=k.shift();)t.__d&&(e=k.length,r=void 0,l=void 0,s=(o=(_=t).__v).__e,(f=_.__P)&&(r=[],(l=b({},o)).__v=o.__v+1,F(f,o,l,_.__n,f.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??S(o),o.__h),te(r,o),o.__e!=s&&Q(o)),k.length>e&&k.sort(H));M.__r=0}function X(t,e,_,r,l,o,s,f,p,d){var n,h,c,i,u,x,v,y=r&&r.__k||K,g=y.length;for(_.__k=[],n=0;n<e.length;n++)if((i=_.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?N(null,i,null,null,i):W(i)?N(w,{children:i},null,null,null):i.__b>0?N(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=_,i.__b=_.__b+1,(c=y[n])===null||c&&i.key==c.key&&i.type===c.type)y[n]=void 0;else for(h=0;h<g;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}F(t,i,c=c||T,l,o,s,f,p,d),u=i.__e,(h=i.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(h,i.__c||u,i)),u!=null?(x==null&&(x=u),typeof i.type=="function"&&i.__k===c.__k?i.__d=p=Y(i,p,t):p=Z(t,i,c,y,u,p),typeof _.type=="function"&&(_.__d=p)):p&&c.__e==p&&p.parentNode!=t&&(p=S(c))}for(_.__e=x,n=g;n--;)y[n]!=null&&(typeof _.type=="function"&&y[n].__e!=null&&y[n].__e==_.__d&&(_.__d=ee(r).nextSibling),ne(y[n],y[n]));if(v)for(n=0;n<v.length;n++)_e(v[n],v[++n],v[++n])}function Y(t,e,_){for(var r,l=t.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=t,e=typeof r.type=="function"?Y(r,e,_):Z(_,r,r,l,r.__e,e));return e}function Z(t,e,_,r,l,o){var s,f,p;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(_==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(l),s=null;else{for(f=o,p=0;(f=f.nextSibling)&&p<r.length;p+=1)if(f==l)break e;t.insertBefore(l,o),s=o}return s!==void 0?s:l.nextSibling}function ee(t){var e,_,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((_=t.__k[e])&&(r=ee(_)))return r}return null}function le(t,e,_,r,l){var o;for(o in _)o==="children"||o==="key"||o in e||U(t,o,null,_[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||_[o]===e[o]||U(t,o,e[o],_[o],r)}function j(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||oe.test(e)?_:_+"px"}function U(t,e,_,r,l){var o;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)_&&e in _||j(t.style,e,"");if(_)for(e in _)r&&_[e]===r[e]||j(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?r||t.addEventListener(e,o?z:q,o):t.removeEventListener(e,o?z:q,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,_))}}function q(t){return this.l[t.type+!1](a.event?a.event(t):t)}function z(t){return this.l[t.type+!0](a.event?a.event(t):t)}function F(t,e,_,r,l,o,s,f,p){var d,n,h,c,i,u,x,v,y,g,C,P,$,L,A,m=e.type;if(e.constructor!==void 0)return null;_.__h!=null&&(p=_.__h,f=e.__e=_.__e,e.__h=null,o=[f]),(d=a.__b)&&d(e);try{e:if(typeof m=="function"){if(v=e.props,y=(d=m.contextType)&&r[d.__c],g=d?y?y.props.value:d.__:r,_.__c?x=(n=e.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(v,g):(e.__c=n=new D(v,g),n.constructor=m,n.render=se),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=b({},n.__s)),b(n.__s,m.getDerivedStateFromProps(v,n.__s))),c=n.props,i=n.state,n.__v=e,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||e.__v===_.__v){for(e.__v!==_.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(E){E&&(E.__=e)}),C=0;C<n._sb.length;C++)n.__h.push(n._sb[C]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(c,i,u)})}if(n.context=g,n.props=v,n.__P=t,P=a.__r,$=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,P&&P(e),d=n.render(n.props,n.state,n.context),L=0;L<n._sb.length;L++)n.__h.push(n._sb[L]);n._sb=[]}else do n.__d=!1,P&&P(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++$<25);n.state=n.__s,n.getChildContext!=null&&(r=b(b({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(u=n.getSnapshotBeforeUpdate(c,i)),X(t,W(A=d!=null&&d.type===w&&d.key==null?d.props.children:d)?A:[A],e,_,r,l,o,s,f,p),n.base=e.__e,e.__h=null,n.__h.length&&s.push(n),x&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=ie(_.__e,e,_,r,l,o,s,p);(d=a.diffed)&&d(e)}catch(E){e.__v=null,(p||o!=null)&&(e.__e=f,e.__h=!!p,o[o.indexOf(f)]=null),a.__e(E,e,_)}}function te(t,e){a.__c&&a.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){a.__e(r,_.__v)}})}function ie(t,e,_,r,l,o,s,f){var p,d,n,h=_.props,c=e.props,i=e.type,u=0;if(i==="svg"&&(l=!0),o!=null){for(;u<o.length;u++)if((p=o[u])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){t=p,o[u]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),o=null,f=!1}if(i===null)h===c||f&&t.data===c||(t.data=c);else{if(o=o&&O.call(t.childNodes),d=(h=_.props||T).dangerouslySetInnerHTML,n=c.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},u=0;u<t.attributes.length;u++)h[t.attributes[u].name]=t.attributes[u].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===t.innerHTML)||(t.innerHTML=n&&n.__html||""))}if(le(t,c,h,l,f),n)e.__k=[];else if(X(t,W(u=e.props.children)?u:[u],e,_,r,l&&i!=="foreignObject",o,s,o?o[0]:_.__k&&S(_,0),f),o!=null)for(u=o.length;u--;)o[u]!=null&&J(o[u]);f||("value"in c&&(u=c.value)!==void 0&&(u!==t.value||i==="progress"&&!u||i==="option"&&u!==h.value)&&U(t,"value",u,h.value,!1),"checked"in c&&(u=c.checked)!==void 0&&u!==t.checked&&U(t,"checked",u,h.checked,!1))}return t}function _e(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(r){a.__e(r,_)}}function ne(t,e,_){var r,l;if(a.unmount&&a.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||_e(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){a.__e(o,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&ne(r[l],e,_||typeof t.type!="function");_||t.__e==null||J(t.__e),t.__=t.__e=t.__d=void 0}function se(t,e,_){return this.constructor(t,_)}function fe(t,e,_){var r,l,o;a.__&&a.__(t,e),l=(r=typeof _=="function")?null:_&&_.__k||e.__k,o=[],F(e,t=(!r&&_||e).__k=re(w,null,[t]),l||T,T,e.ownerSVGElement!==void 0,!r&&_?[_]:l?null:e.firstChild?O.call(e.childNodes):null,o,!r&&_?_:l?l.__e:e.firstChild,r),te(o,t)}O=K.slice,a={__e:function(t,e,_,r){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(t)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,r||{}),s=l.__d),s)return l.__E=l}catch(f){t=f}throw t}},G=0,D.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},_),this.props)),t&&b(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),R(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),R(this))},D.prototype.render=w,k=[],V=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(t,e){return t.__v.__b-e.__v.__b},M.__r=0;var ce=0;function I(t,e,_,r,l,o){var s,f,p={};for(f in e)f=="ref"?s=e[f]:p[f]=e[f];var d={type:t,props:p,key:_,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ce,__source:l,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(f in s)p[f]===void 0&&(p[f]=s[f]);return a.vnode&&a.vnode(d),d}function ue(){return I(w,{children:I("h1",{children:"Hello!"})})}fe(I(ue,{}),document.getElementById("app"));