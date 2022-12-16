/*! For license information please see 1295.27693a8e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1295],{70917:(e,t,n)=>{var r;n.d(t,{F4:()=>p,xB:()=>c});var o=n(67294),i=(n(68357),n(54880)),a=(n(8679),n(70444)),s=n(48137),l=(r||(r=n.t(o,2))).useInsertionEffect?(r||(r=n.t(o,2))).useInsertionEffect:o.useLayoutEffect,c=(0,i.w)((function(e,t){var n=e.styles,r=(0,s.O)([n],void 0,(0,o.useContext)(i.T)),c=(0,o.useRef)();return l((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,i=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(o=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),c.current=[n,o],function(){n.flush()}}),[t]),l((function(){var e=c.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&(0,a.My)(t,r.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}t.insert("",r,n,!1)}}),[t,r.name]),null}));function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.O)(t)}var p=function(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},70444:(e,t,n)=>{n.d(t,{My:()=>i,fp:()=>r,hC:()=>o});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var o=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},i=function(e,t,n){o(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0);i=i.next}while(void 0!==i)}}},47739:(e,t,n)=>{n.d(t,{Z:()=>K});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),s=n(94780),l=n(68127),c=n(27623),u=n(51705),p=n(2068),d=n(18791);var f=n(75068),m=n(220);function h(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function g(e,t,n){var r=h(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];s[o[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(o).forEach((function(a){var s=o[a];if((0,i.isValidElement)(s)){var l=a in t,c=a in r,u=t[a],p=(0,i.isValidElement)(u)&&!u.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,i.isValidElement)(u)&&(o[a]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:u.props.in,exit:y(s,"exit",e),enter:y(s,"enter",e)})):o[a]=(0,i.cloneElement)(s,{in:!1}):o[a]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:y(s,"exit",e),enter:y(s,"enter",e)})}})),o}var v=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},b=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,f.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,h(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):g(e,o,a),firstRender:!1}},n.handleExited=function(e,t){var n=h(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),a=this.state.contextValue,s=v(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(m.Z.Provider,{value:a},s):i.createElement(m.Z.Provider,{value:a},i.createElement(t,r,s))},t}(i.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(e){return e}};const Z=b;var x=n(70917),k=n(85893);const w=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:l,in:c,onExited:u,timeout:p}=e,[d,f]=i.useState(!1),m=(0,a.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),h={width:l,height:l,top:-l/2+s,left:-l/2+o},y=(0,a.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return c||d||f(!0),i.useEffect((()=>{if(!c&&null!=u){const e=setTimeout(u,p);return()=>{clearTimeout(e)}}}),[u,c,p]),(0,k.jsx)("span",{className:m,style:h,children:(0,k.jsx)("span",{className:y})})};var S=n(1588);const R=(0,S.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),P=["center","classes","className"];let E,T,C,M,_=e=>e;const A=(0,x.F4)(E||(E=_`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),O=(0,x.F4)(T||(T=_`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),z=(0,x.F4)(C||(C=_`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),I=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,l.ZP)(w,{name:"MuiTouchRipple",slot:"Ripple"})(M||(M=_`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),R.rippleVisible,A,550,(({theme:e})=>e.transitions.easing.easeInOut),R.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),R.child,R.childLeaving,O,550,(({theme:e})=>e.transitions.easing.easeInOut),R.childPulsate,z,(({theme:e})=>e.transitions.easing.easeInOut)),L=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:u}=n,p=(0,o.Z)(n,P),[d,f]=i.useState([]),m=i.useRef(0),h=i.useRef(null);i.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[d]);const y=i.useRef(!1),g=i.useRef(null),v=i.useRef(null),b=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(g.current)}),[]);const x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;f((e=>[...e,(0,k.jsx)(j,{classes:{ripple:(0,a.Z)(l.ripple,R.ripple),rippleVisible:(0,a.Z)(l.rippleVisible,R.rippleVisible),ripplePulsate:(0,a.Z)(l.ripplePulsate,R.ripplePulsate),child:(0,a.Z)(l.child,R.child),childLeaving:(0,a.Z)(l.childLeaving,R.childLeaving),childPulsate:(0,a.Z)(l.childPulsate,R.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},m.current)])),m.current+=1,h.current=i}),[l]),w=i.useCallback(((e={},t={},n)=>{const{pulsate:r=!1,center:o=s||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&y.current)return void(y.current=!1);"touchstart"===(null==e?void 0:e.type)&&(y.current=!0);const a=i?null:b.current,l=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(l.width/2),u=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(t-l.left),u=Math.round(n-l.top)}if(o)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-u),u)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===v.current&&(v.current=()=>{x({pulsate:r,rippleX:c,rippleY:u,rippleSize:p,cb:n})},g.current=setTimeout((()=>{v.current&&(v.current(),v.current=null)}),80)):x({pulsate:r,rippleX:c,rippleY:u,rippleSize:p,cb:n})}),[s,x]),S=i.useCallback((()=>{w({},{pulsate:!0})}),[w]),E=i.useCallback(((e,t)=>{if(clearTimeout(g.current),"touchend"===(null==e?void 0:e.type)&&v.current)return v.current(),v.current=null,void(g.current=setTimeout((()=>{E(e,t)})));v.current=null,f((e=>e.length>0?e.slice(1):e)),h.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:S,start:w,stop:E})),[S,w,E]),(0,k.jsx)(I,(0,r.Z)({className:(0,a.Z)(R.root,l.root,u),ref:b},p,{children:(0,k.jsx)(Z,{component:null,exit:!0,children:d})}))}));var V=n(34867);function F(e){return(0,V.Z)("MuiButtonBase",e)}const N=(0,S.Z)("MuiButtonBase",["root","disabled","focusVisible"]),B=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${N.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),K=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:f=!1,children:m,className:h,component:y="button",disabled:g=!1,disableRipple:v=!1,disableTouchRipple:b=!1,focusRipple:Z=!1,LinkComponent:x="a",onBlur:w,onClick:S,onContextMenu:R,onDragLeave:P,onFocus:E,onFocusVisible:T,onKeyDown:C,onKeyUp:M,onMouseDown:_,onMouseLeave:A,onMouseUp:O,onTouchEnd:z,onTouchMove:I,onTouchStart:j,tabIndex:V=0,TouchRippleProps:N,touchRippleRef:K,type:D}=n,G=(0,o.Z)(n,B),H=i.useRef(null),U=i.useRef(null),W=(0,u.Z)(U,K),{isFocusVisibleRef:X,onFocus:q,onBlur:Y,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);g&&Q&&ee(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),H.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!v&&!g;function oe(e,t,n=b){return(0,p.Z)((r=>{t&&t(r);return!n&&U.current&&U.current[e](r),!0}))}i.useEffect((()=>{Q&&Z&&!v&&te&&U.current.pulsate()}),[v,Z,Q,te]);const ie=oe("start",_),ae=oe("stop",R),se=oe("stop",P),le=oe("stop",O),ce=oe("stop",(e=>{Q&&e.preventDefault(),A&&A(e)})),ue=oe("start",j),pe=oe("stop",z),de=oe("stop",I),fe=oe("stop",(e=>{Y(e),!1===X.current&&ee(!1),w&&w(e)}),!1),me=(0,p.Z)((e=>{H.current||(H.current=e.currentTarget),q(e),!0===X.current&&(ee(!0),T&&T(e)),E&&E(e)})),he=()=>{const e=H.current;return y&&"button"!==y&&!("A"===e.tagName&&e.href)},ye=i.useRef(!1),ge=(0,p.Z)((e=>{Z&&!ye.current&&Q&&U.current&&" "===e.key&&(ye.current=!0,U.current.stop(e,(()=>{U.current.start(e)}))),e.target===e.currentTarget&&he()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&he()&&"Enter"===e.key&&!g&&(e.preventDefault(),S&&S(e))})),ve=(0,p.Z)((e=>{Z&&" "===e.key&&U.current&&Q&&!e.defaultPrevented&&(ye.current=!1,U.current.stop(e,(()=>{U.current.pulsate(e)}))),M&&M(e),S&&e.target===e.currentTarget&&he()&&" "===e.key&&!e.defaultPrevented&&S(e)}));let be=y;"button"===be&&(G.href||G.to)&&(be=x);const Ze={};"button"===be?(Ze.type=void 0===D?"button":D,Ze.disabled=g):(G.href||G.to||(Ze.role="button"),g&&(Ze["aria-disabled"]=g));const xe=(0,u.Z)(J,H),ke=(0,u.Z)(t,xe);const we=(0,r.Z)({},n,{centerRipple:f,component:y,disabled:g,disableRipple:v,disableTouchRipple:b,focusRipple:Z,tabIndex:V,focusVisible:Q}),Se=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,s.Z)(i,F,o);return n&&r&&(a.root+=` ${r}`),a})(we);return(0,k.jsxs)($,(0,r.Z)({as:be,className:(0,a.Z)(Se.root,h),ownerState:we,onBlur:fe,onClick:S,onContextMenu:ae,onFocus:me,onKeyDown:ge,onKeyUp:ve,onMouseDown:ie,onMouseLeave:ce,onMouseUp:le,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ue,ref:ke,tabIndex:g?-1:V,type:D},Ze,G,{children:[m,re?(0,k.jsx)(L,(0,r.Z)({ref:W,center:f},N)):null]}))}))},90247:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(21265).Z)()},68127:(e,t,n)=>{n.d(t,{ZP:()=>$,FO:()=>F,Dz:()=>N});var r=n(63366),o=n(87462),i=n(67294),a=n.t(i,2),s=n(45042),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const c=(0,s.Z)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var u=n(54880),p=n(70444),d=n(48137),f=c,m=function(e){return"theme"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:m},y=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},g=a.useInsertionEffect?a.useInsertionEffect:function(e){e()};var v=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;(0,p.hC)(t,n,r);g((function(){return(0,p.My)(t,n,r)}));return null};const b=function e(t,n){var r,a,s=t.__emotion_real===t,l=s&&t.__emotion_base||t;void 0!==n&&(r=n.label,a=n.target);var c=y(t,n,s),f=c||h(l),m=!f("as");return function(){var g=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&b.push("label:"+r+";"),null==g[0]||void 0===g[0].raw)b.push.apply(b,g);else{0,b.push(g[0][0]);for(var Z=g.length,x=1;x<Z;x++)b.push(g[x],g[0][x])}var k=(0,u.w)((function(e,t,n){var r=m&&e.as||l,o="",s=[],y=e;if(null==e.theme){for(var g in y={},e)y[g]=e[g];y.theme=(0,i.useContext)(u.T)}"string"==typeof e.className?o=(0,p.fp)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var Z=(0,d.O)(b.concat(s),t.registered,y);o+=t.key+"-"+Z.name,void 0!==a&&(o+=" "+a);var x=m&&void 0===c?h(r):f,k={};for(var w in e)m&&"as"===w||x(w)&&(k[w]=e[w]);return k.className=o,k.ref=n,(0,i.createElement)(i.Fragment,null,(0,i.createElement)(v,{cache:t,serialized:Z,isStringTag:"string"==typeof r}),(0,i.createElement)(r,k))}));return k.displayName=void 0!==r?r:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=l,k.__emotion_styles=b,k.__emotion_forwardProp=c,Object.defineProperty(k,"toString",{value:function(){return"."+a}}),k.withComponent=function(t,r){return e(t,(0,o.Z)({},n,r,{shouldForwardProp:y(k,r,!0)})).apply(void 0,b)},k}};var Z=b.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Z[e]=Z(e)}));const x=Z;var k=n(66500),w=n(28320);const S=["variant"];function R(e){return 0===e.length}function P(e){const{variant:t}=e,n=(0,r.Z)(e,S);let o=t||"";return Object.keys(n).sort().forEach((t=>{o+="color"===t?R(o)?e[t]:(0,w.Z)(e[t]):`${R(o)?t:(0,w.Z)(t)}${(0,w.Z)(e[t].toString())}`})),o}var E=n(47730),T=n(85578),C=n(95408);const M=function(e=T.G$){const t=Object.keys(e).reduce(((t,n)=>(e[n].filterProps.forEach((r=>{t[r]=e[n]})),t)),{});function n(e,n,r){const o={[e]:n,theme:r},i=t[e];return i?i(o):{[e]:n}}return function e(r){const{sx:o,theme:i={}}=r||{};if(!o)return null;function a(r){let o=r;if("function"==typeof r)o=r(i);else if("object"!=typeof r)return r;if(!o)return null;const a=(0,C.W8)(i.breakpoints),s=Object.keys(a);let l=a;return Object.keys(o).forEach((r=>{const a=(s=o[r],c=i,"function"==typeof s?s(c):s);var s,c;if(null!=a)if("object"==typeof a)if(t[r])l=(0,E.Z)(l,n(r,a,i));else{const t=(0,C.k9)({theme:i},a,(e=>({[r]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),n=new Set(t);return e.every((e=>n.size===Object.keys(e).length))}(t,a)?l=(0,E.Z)(l,t):l[r]=e({sx:a,theme:i})}else l=(0,E.Z)(l,n(r,a,i))})),(0,C.L7)(s,l)}return Array.isArray(o)?o.map(a):a(o)}}();M.filterProps=["sx"];const _=M,A=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],O=["theme"],z=["theme"];function I(e){return 0===Object.keys(e).length}function j(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const L=(0,k.Z)();var V=n(90247);const F=e=>j(e)&&"classes"!==e,N=j,B=function(e={}){const{defaultTheme:t=L,rootShouldForwardProp:n=j,slotShouldForwardProp:i=j,styleFunctionSx:a=_}=e,s=e=>{const n=I(e.theme)?t:e.theme;return a((0,o.Z)({},e,{theme:n}))};return s.__mui_systemSx=!0,(e,a={})=>{((e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))})(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:l,slot:c,skipVariantsResolver:u,skipSx:p,overridesResolver:d}=a,f=(0,r.Z)(a,A),m=void 0!==u?u:c&&"Root"!==c||!1,h=p||!1;let y=j;"Root"===c?y=n:c?y=i:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(y=void 0);const g=function(e,t){return x(e,t)}(e,(0,o.Z)({shouldForwardProp:y,label:undefined},f)),v=(e,...n)=>{const i=n?n.map((e=>"function"==typeof e&&e.__emotion_real!==e?n=>{let{theme:i}=n,a=(0,r.Z)(n,O);return e((0,o.Z)({theme:I(i)?t:i},a))}:e)):[];let a=e;l&&d&&i.push((e=>{const n=I(e.theme)?t:e.theme,r=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(l,n);if(r){const t={};return Object.entries(r).forEach((([r,i])=>{t[r]="function"==typeof i?i((0,o.Z)({},e,{theme:n})):i})),d(e,t)}return null})),l&&!m&&i.push((e=>{const n=I(e.theme)?t:e.theme;return((e,t,n,r)=>{var o,i;const{ownerState:a={}}=e,s=[],l=null==n||null==(o=n.components)||null==(i=o[r])?void 0:i.variants;return l&&l.forEach((n=>{let r=!0;Object.keys(n.props).forEach((t=>{a[t]!==n.props[t]&&e[t]!==n.props[t]&&(r=!1)})),r&&s.push(t[P(n.props)])})),s})(e,((e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach((e=>{const t=P(e.props);r[t]=e.style})),r})(l,n),n,l)})),h||i.push(s);const c=i.length-n.length;if(Array.isArray(e)&&c>0){const t=new Array(c).fill("");a=[...e,...t],a.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(a=n=>{let{theme:i}=n,a=(0,r.Z)(n,z);return e((0,o.Z)({theme:I(i)?t:i},a))});return g(a,...i)};return g.withConfig&&(v.withConfig=g.withConfig),v}}({defaultTheme:V.Z,rootShouldForwardProp:F}),$=B},27623:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(47925);var o=n(79718);function i({props:e,name:t,defaultTheme:n}){const i=function(e){const{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,o):o}({theme:(0,o.Z)(n),name:t,props:e});return i}var a=n(90247);function s({props:e,name:t}){return i({props:e,name:t,defaultTheme:a.Z})}},98216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(28320).Z},88169:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),o=n(67294),i=n(63366),a=n(86010),s=n(94780),l=n(98216),c=n(27623),u=n(68127),p=n(34867);function d(e){return(0,p.Z)("MuiSvgIcon",e)}(0,n(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=n(85893);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,l.Z)(n.color)}`],t[`fontSize${(0,l.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,r,o,i,a,s,l,c,u,p,d,f,m,h,y,g,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(o=e.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(l=e.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(u=e.typography)||null==(p=u.pxToRem)?void 0:p.call(u,35))||"2.1875"}[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(m=f[t.color])?void 0:m.main)?d:{action:null==(h=(e.vars||e).palette)||null==(y=h.action)?void 0:y.active,disabled:null==(g=(e.vars||e).palette)||null==(v=g.action)?void 0:v.disabled,inherit:void 0}[t.color]}})),y=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:u,color:p="inherit",component:y="svg",fontSize:g="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:Z,viewBox:x="0 0 24 24"}=n,k=(0,i.Z)(n,m),w=(0,r.Z)({},n,{color:p,component:y,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:x}),S={};b||(S.viewBox=x);const R=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,l.Z)(t)}`,`fontSize${(0,l.Z)(n)}`]};return(0,s.Z)(o,d,r)})(w);return(0,f.jsxs)(h,(0,r.Z)({as:y,className:(0,a.Z)(R.root,u),ownerState:w,focusable:"false",color:v,"aria-hidden":!Z||void 0,role:Z?"img":void 0,ref:t},S,k,{children:[o,Z?(0,f.jsx)("title",{children:Z}):null]}))}));y.muiName="SvgIcon";const g=y;function v(e,t){const n=(n,o)=>(0,f.jsx)(g,(0,r.Z)({"data-testid":`${t}Icon`,ref:o},n,{children:e}));return n.muiName=g.muiName,o.memo(o.forwardRef(n))}},57144:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(87596).Z},71579:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8038:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(57094).Z},5340:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(58290).Z},22627:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function({controlled:e,default:t,name:n,state:o="value"}){const{current:i}=r.useRef(void 0!==e),[a,s]=r.useState(t);return[i?e:a,r.useCallback((e=>{i||s(e)}),[])]}},58974:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(16600).Z},2068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(73633).Z},51705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(30067).Z},18791:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);let o,i=!0,a=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function c(){i=!1}function u(){"hidden"===this.visibilityState&&a&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const d=function(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",u,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(o),o=window.setTimeout((()=>{a=!1}),100),t.current=!1,!0)},ref:e}}},85578:(e,t,n)=>{n.d(t,{Gc:()=>X,G$:()=>W});var r=n(54844),o=n(47730);const i=function(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),n=e=>Object.keys(e).reduce(((n,r)=>t[r]?(0,o.Z)(n,t[r](e)):n),{});return n.propTypes={},n.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),n};var a=n(98700),s=n(95408);function l(e){return"number"!=typeof e?e:`${e}px solid`}const c=(0,r.Z)({prop:"border",themeKey:"borders",transform:l}),u=(0,r.Z)({prop:"borderTop",themeKey:"borders",transform:l}),p=(0,r.Z)({prop:"borderRight",themeKey:"borders",transform:l}),d=(0,r.Z)({prop:"borderBottom",themeKey:"borders",transform:l}),f=(0,r.Z)({prop:"borderLeft",themeKey:"borders",transform:l}),m=(0,r.Z)({prop:"borderColor",themeKey:"palette"}),h=(0,r.Z)({prop:"borderTopColor",themeKey:"palette"}),y=(0,r.Z)({prop:"borderRightColor",themeKey:"palette"}),g=(0,r.Z)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,r.Z)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,a.eI)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,a.NA)(t,e)});return(0,s.k9)(e,e.borderRadius,n)}return null};b.propTypes={},b.filterProps=["borderRadius"];const Z=i(c,u,p,d,f,m,h,y,g,v,b),x=i((0,r.Z)({prop:"displayPrint",cssProperty:!1,transform:e=>({"@media print":{display:e}})}),(0,r.Z)({prop:"display"}),(0,r.Z)({prop:"overflow"}),(0,r.Z)({prop:"textOverflow"}),(0,r.Z)({prop:"visibility"}),(0,r.Z)({prop:"whiteSpace"})),k=i((0,r.Z)({prop:"flexBasis"}),(0,r.Z)({prop:"flexDirection"}),(0,r.Z)({prop:"flexWrap"}),(0,r.Z)({prop:"justifyContent"}),(0,r.Z)({prop:"alignItems"}),(0,r.Z)({prop:"alignContent"}),(0,r.Z)({prop:"order"}),(0,r.Z)({prop:"flex"}),(0,r.Z)({prop:"flexGrow"}),(0,r.Z)({prop:"flexShrink"}),(0,r.Z)({prop:"alignSelf"}),(0,r.Z)({prop:"justifyItems"}),(0,r.Z)({prop:"justifySelf"})),w=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,a.eI)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,a.NA)(t,e)});return(0,s.k9)(e,e.gap,n)}return null};w.propTypes={},w.filterProps=["gap"];const S=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,a.eI)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,a.NA)(t,e)});return(0,s.k9)(e,e.columnGap,n)}return null};S.propTypes={},S.filterProps=["columnGap"];const R=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,a.eI)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,a.NA)(t,e)});return(0,s.k9)(e,e.rowGap,n)}return null};R.propTypes={},R.filterProps=["rowGap"];const P=i(w,S,R,(0,r.Z)({prop:"gridColumn"}),(0,r.Z)({prop:"gridRow"}),(0,r.Z)({prop:"gridAutoFlow"}),(0,r.Z)({prop:"gridAutoColumns"}),(0,r.Z)({prop:"gridAutoRows"}),(0,r.Z)({prop:"gridTemplateColumns"}),(0,r.Z)({prop:"gridTemplateRows"}),(0,r.Z)({prop:"gridTemplateAreas"}),(0,r.Z)({prop:"gridArea"})),E=i((0,r.Z)({prop:"position"}),(0,r.Z)({prop:"zIndex",themeKey:"zIndex"}),(0,r.Z)({prop:"top"}),(0,r.Z)({prop:"right"}),(0,r.Z)({prop:"bottom"}),(0,r.Z)({prop:"left"})),T=i((0,r.Z)({prop:"color",themeKey:"palette"}),(0,r.Z)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),(0,r.Z)({prop:"backgroundColor",themeKey:"palette"})),C=(0,r.Z)({prop:"boxShadow",themeKey:"shadows"});function M(e){return e<=1&&0!==e?100*e+"%":e}const _=(0,r.Z)({prop:"width",transform:M}),A=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r,o;return{maxWidth:(null==(n=e.theme)||null==(r=n.breakpoints)||null==(o=r.values)?void 0:o[t])||s.VO[t]||M(t)}};return(0,s.k9)(e,e.maxWidth,t)}return null};A.filterProps=["maxWidth"];const O=(0,r.Z)({prop:"minWidth",transform:M}),z=(0,r.Z)({prop:"height",transform:M}),I=(0,r.Z)({prop:"maxHeight",transform:M}),j=(0,r.Z)({prop:"minHeight",transform:M}),L=((0,r.Z)({prop:"size",cssProperty:"width",transform:M}),(0,r.Z)({prop:"size",cssProperty:"height",transform:M}),i(_,A,O,z,I,j,(0,r.Z)({prop:"boxSizing"}))),V=(0,r.Z)({prop:"fontFamily",themeKey:"typography"}),F=(0,r.Z)({prop:"fontSize",themeKey:"typography"}),N=(0,r.Z)({prop:"fontStyle",themeKey:"typography"}),B=(0,r.Z)({prop:"fontWeight",themeKey:"typography"}),$=(0,r.Z)({prop:"letterSpacing"}),K=(0,r.Z)({prop:"textTransform"}),D=(0,r.Z)({prop:"lineHeight"}),G=(0,r.Z)({prop:"textAlign"}),H=i((0,r.Z)({prop:"typography",cssProperty:!1,themeKey:"typography"}),V,F,N,B,$,D,G,K),U={borders:Z.filterProps,display:x.filterProps,flexbox:k.filterProps,grid:P.filterProps,positions:E.filterProps,palette:T.filterProps,shadows:C.filterProps,sizing:L.filterProps,spacing:a.ZP.filterProps,typography:H.filterProps},W={borders:Z,display:x,flexbox:k,grid:P,positions:E,palette:T,shadows:C,sizing:L,spacing:a.ZP,typography:H},X=Object.keys(U).reduce(((e,t)=>(U[t].forEach((n=>{e[n]=W[t]})),e)),{})},37078:(e,t,n)=>{n.d(t,{Z:()=>o});const r=e=>e,o=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})()},94780:(e,t,n)=>{function r(e,t,n){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(e.push(t(r)),n&&n[r]&&e.push(n[r])),e)),[]).join(" ")})),r}n.d(t,{Z:()=>r})},49064:(e,t,n)=>{function r(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}n.d(t,{Z:()=>r})},87596:(e,t,n)=>{function r(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(n)},r}n.d(t,{Z:()=>r})},34867:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(37078);const o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function i(e,t,n="Mui"){const i=o[t];return i?`${n}-${i}`:`${r.Z.generate(e)}-${t}`}},1588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(34867);function o(e,t,n="Mui"){const o={};return t.forEach((t=>{o[t]=(0,r.Z)(e,t,n)})),o}},57094:(e,t,n)=>{function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:()=>r})},58290:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(57094);function o(e){return(0,r.Z)(e).defaultView||window}},47925:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462);function o(e,t){const n=(0,r.Z)({},t);return Object.keys(e).forEach((t=>{void 0===n[t]&&(n[t]=e[t])})),n}},7960:(e,t,n)=>{function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},16600:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},73633:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(16600);function i(e){const t=r.useRef(e);return(0,o.Z)((()=>{t.current=e})),r.useCallback(((...e)=>(0,t.current)(...e)),[])}},30067:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(7960);function i(e,t){return r.useMemo((()=>null==e&&null==t?null:n=>{(0,o.Z)(e,n),(0,o.Z)(t,n)}),[e,t])}},57579:(e,t,n)=>{var r;n.d(t,{Z:()=>s});var o=n(67294);let i=0;const a=(r||(r=n.t(o,2))).useId;function s(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,n]=o.useState(e),r=e||t;return o.useEffect((()=>{null==t&&(i+=1,n(`mui-${i}`))}),[t]),r}(e)}},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)}}]);