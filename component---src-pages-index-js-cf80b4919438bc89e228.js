(self.webpackChunkq_shipping_solutions=self.webpackChunkq_shipping_solutions||[]).push([[678],{5660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Le}});var a=n(7294),r=n(1253),o=n(2122),i=n(5505),l=n(4621),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,h=void 0!==f&&f,g=e.direction,v=void 0===g?"row":g,b=e.item,y=void 0!==b&&b,x=e.justify,E=void 0===x?"flex-start":x,w=e.lg,Z=void 0!==w&&w,S=e.md,k=void 0!==S&&S,N=e.sm,R=void 0!==N&&N,C=e.spacing,M=void 0===C?0:C,T=e.wrap,z=void 0===T?"wrap":T,j=e.xl,D=void 0!==j&&j,P=e.xs,I=void 0!==P&&P,L=e.zeroMinWidth,B=void 0!==L&&L,O=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=(0,i.Z)(u.root,d,h&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],y&&u.item,B&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==E&&u["justify-xs-".concat(String(E))],!1!==I&&u["grid-xs-".concat(String(I))],!1!==R&&u["grid-sm-".concat(String(R))],!1!==k&&u["grid-md-".concat(String(k))],!1!==Z&&u["grid-lg-".concat(String(Z))],!1!==D&&u["grid-xl-".concat(String(D))]);return a.createElement(m,(0,o.Z)({className:A,ref:t},O))})),p=(0,l.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d),m=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,u=e.square,d=void 0!==u&&u,p=e.elevation,m=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,g=(0,r.Z)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(s,(0,o.Z)({className:(0,i.Z)(n.root,l,"outlined"===h?n.outlined:n["elevation".concat(m)],!d&&n.rounded),ref:t},g))})),f=(0,l.Z)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(m),h=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.raised,s=void 0!==c&&c,u=(0,r.Z)(e,["classes","className","raised"]);return a.createElement(f,(0,o.Z)({className:(0,i.Z)(n.root,l),elevation:s?8:1,ref:t},u))})),g=(0,l.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),v=n(453),b=a.forwardRef((function(e,t){var n=e.action,l=e.avatar,c=e.classes,s=e.className,u=e.component,d=void 0===u?"div":u,p=e.disableTypography,m=void 0!==p&&p,f=e.subheader,h=e.subheaderTypographyProps,g=e.title,b=e.titleTypographyProps,y=(0,r.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=g;null==x||x.type===v.Z||m||(x=a.createElement(v.Z,(0,o.Z)({variant:l?"body2":"h5",className:c.title,component:"span",display:"block"},b),x));var E=f;return null==E||E.type===v.Z||m||(E=a.createElement(v.Z,(0,o.Z)({variant:l?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},h),E)),a.createElement(d,(0,o.Z)({className:(0,i.Z)(c.root,s),ref:t},y),l&&a.createElement("div",{className:c.avatar},l),a.createElement("div",{className:c.content},x,E),n&&a.createElement("div",{className:c.action},n))})),y=(0,l.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(b),x=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,u=(0,r.Z)(e,["classes","className","component"]);return a.createElement(s,(0,o.Z)({className:(0,i.Z)(n.root,l),ref:t},u))})),E=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(x);var w=a.createContext(),Z="table",S=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?Z:c,u=e.padding,d=void 0===u?"default":u,p=e.size,m=void 0===p?"medium":p,f=e.stickyHeader,h=void 0!==f&&f,g=(0,r.Z)(e,["classes","className","component","padding","size","stickyHeader"]),v=a.useMemo((function(){return{padding:d,size:m,stickyHeader:h}}),[d,m,h]);return a.createElement(w.Provider,{value:v},a.createElement(s,(0,o.Z)({role:s===Z?null:"table",ref:t,className:(0,i.Z)(n.root,l,h&&n.stickyHeader)},g)))})),k=(0,l.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(S);var N=a.createContext(),R={variant:"head"},C="thead",M=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?C:c,u=(0,r.Z)(e,["classes","className","component"]);return a.createElement(N.Provider,{value:R},a.createElement(s,(0,o.Z)({className:(0,i.Z)(n.root,l),ref:t,role:s===C?null:"rowgroup"},u)))})),T=(0,l.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(M),z=n(7595),j=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?"tr":c,u=e.hover,d=void 0!==u&&u,p=e.selected,m=void 0!==p&&p,f=(0,r.Z)(e,["classes","className","component","hover","selected"]),h=a.useContext(N);return a.createElement(s,(0,o.Z)({ref:t,className:(0,i.Z)(n.root,l,h&&{head:n.head,footer:n.footer}[h.variant],d&&n.hover,m&&n.selected),role:"tr"===s?null:"row"},f))})),D=(0,l.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,z.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(j),P=n(1664),I=a.forwardRef((function(e,t){var n,l,c=e.align,s=void 0===c?"inherit":c,u=e.classes,d=e.className,p=e.component,m=e.padding,f=e.scope,h=e.size,g=e.sortDirection,v=e.variant,b=(0,r.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=a.useContext(w),x=a.useContext(N),E=x&&"head"===x.variant;p?(l=p,n=E?"columnheader":"cell"):l=E?"th":"td";var Z=f;!Z&&E&&(Z="col");var S=m||(y&&y.padding?y.padding:"default"),k=h||(y&&y.size?y.size:"medium"),R=v||x&&x.variant,C=null;return g&&(C="asc"===g?"ascending":"descending"),a.createElement(l,(0,o.Z)({ref:t,className:(0,i.Z)(u.root,u[R],d,"inherit"!==s&&u["align".concat((0,P.Z)(s))],"default"!==S&&u["padding".concat((0,P.Z)(S))],"medium"!==k&&u["size".concat((0,P.Z)(k))],"head"===R&&y&&y.stickyHeader&&u.stickyHeader),"aria-sort":C,role:n,scope:Z},b))})),L=(0,l.Z)((function(e){return{root:(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,z.$n)((0,z.U1)(e.palette.divider,1),.88):(0,z._j)((0,z.U1)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(I),B={variant:"body"},O="tbody",A=a.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?O:c,u=(0,r.Z)(e,["classes","className","component"]);return a.createElement(N.Provider,{value:B},a.createElement(s,(0,o.Z)({className:(0,i.Z)(n.root,l),ref:t,role:s===O?null:"rowgroup"},u)))})),H=(0,l.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(A),V=a.forwardRef((function(e,t){var n=e.children,l=e.classes,c=e.className,s=e.color,u=void 0===s?"inherit":s,d=e.component,p=void 0===d?"svg":d,m=e.fontSize,f=void 0===m?"default":m,h=e.htmlColor,g=e.titleAccess,v=e.viewBox,b=void 0===v?"0 0 24 24":v,y=(0,r.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(p,(0,o.Z)({className:(0,i.Z)(l.root,c,"inherit"!==u&&l["color".concat((0,P.Z)(u))],"default"!==f&&l["fontSize".concat((0,P.Z)(f))]),focusable:"false",viewBox:b,color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},y),n,g?a.createElement("title",null,g):null)}));V.muiName="SvgIcon";var W=(0,l.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(V);function F(e,t){var n=function(t,n){return a.createElement(W,(0,o.Z)({ref:n},t),e)};return n.muiName=W.muiName,a.memo(a.forwardRef(n))}var U=F(a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var $=a.forwardRef((function(e,t){var n=e.alt,l=e.children,c=e.classes,s=e.className,u=e.component,d=void 0===u?"div":u,p=e.imgProps,m=e.sizes,f=e.src,h=e.srcSet,g=e.variant,v=void 0===g?"circle":g,b=(0,r.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,x=function(e){var t=e.src,n=e.srcSet,r=a.useState(!1),o=r[0],i=r[1];return a.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),o}({src:f,srcSet:h}),E=f||h,w=E&&"error"!==x;return y=w?a.createElement("img",(0,o.Z)({alt:n,src:f,srcSet:h,sizes:m,className:c.img},p)):null!=l?l:E&&n?n[0]:a.createElement(U,{className:c.fallback}),a.createElement(d,(0,o.Z)({className:(0,i.Z)(c.root,c.system,c[v],s,!w&&c.colorDefault),ref:t},b),y)})),Y=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})($),q=n(3935);function K(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function X(e,t){return a.useMemo((function(){return null==e&&null==t?null:function(n){K(e,n),K(t,n)}}),[e,t])}var _="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;function G(e){var t=a.useRef(e);return _((function(){t.current=e})),a.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var J=!0,Q=!1,ee=null,te={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ne(e){e.metaKey||e.altKey||e.ctrlKey||(J=!0)}function ae(){J=!1}function re(){"hidden"===this.visibilityState&&Q&&(J=!0)}function oe(e){var t,n,a,r=e.target;try{return r.matches(":focus-visible")}catch(o){}return J||(n=(t=r).type,!("INPUT"!==(a=t.tagName)||!te[n]||t.readOnly)||"TEXTAREA"===a&&!t.readOnly||!!t.isContentEditable)}function ie(){Q=!0,window.clearTimeout(ee),ee=window.setTimeout((function(){Q=!1}),100)}function le(){return{isFocusVisible:oe,onBlurVisible:ie,ref:a.useCallback((function(e){var t,n=q.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",ne,!0),t.addEventListener("mousedown",ae,!0),t.addEventListener("pointerdown",ae,!0),t.addEventListener("touchstart",ae,!0),t.addEventListener("visibilitychange",re,!0))}),[])}}var ce=n(7329),se=n(9756),ue=n(3349),de=n(3552),pe=a.createContext(null);function me(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)})),n}function fe(e,t,n){return null!=n[t]?n[t]:e.props[t]}function he(e,t,n){var r=me(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var l={};for(var c in t){if(r[c])for(a=0;a<r[c].length;a++){var s=r[c][a];l[r[c][a]]=n(s)}l[c]=n(c)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}(t,r);return Object.keys(o).forEach((function(i){var l=o[i];if((0,a.isValidElement)(l)){var c=i in t,s=i in r,u=t[i],d=(0,a.isValidElement)(u)&&!u.props.in;!s||c&&!d?s||!c||d?s&&c&&(0,a.isValidElement)(u)&&(o[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:u.props.in,exit:fe(l,"exit",e),enter:fe(l,"enter",e)})):o[i]=(0,a.cloneElement)(l,{in:!1}):o[i]=(0,a.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:fe(l,"exit",e),enter:fe(l,"enter",e)})}})),o}var ge=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},ve=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind((0,ue.Z)(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}(0,de.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,me(n.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:fe(e,"appear",n),enter:fe(e,"enter",n),exit:fe(e,"exit",n)})}))):he(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=me(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,se.Z)(e,["component","childFactory"]),o=this.state.contextValue,i=ge(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a.createElement(pe.Provider,{value:o},i):a.createElement(pe.Provider,{value:o},a.createElement(t,r,i))},t}(a.Component);ve.defaultProps={component:"div",childFactory:function(e){return e}};var be=ve,ye="undefined"==typeof window?a.useEffect:a.useLayoutEffect;var xe=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,o=e.rippleX,l=e.rippleY,c=e.rippleSize,s=e.in,u=e.onExited,d=void 0===u?function(){}:u,p=e.timeout,m=a.useState(!1),f=m[0],h=m[1],g=(0,i.Z)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),v={width:c,height:c,top:-c/2+l,left:-c/2+o},b=(0,i.Z)(t.child,f&&t.childLeaving,r&&t.childPulsate),y=G(d);return ye((function(){if(!s){h(!0);var e=setTimeout(y,p);return function(){clearTimeout(e)}}}),[y,s,p]),a.createElement("span",{className:g,style:v},a.createElement("span",{className:b}))},Ee=a.forwardRef((function(e,t){var n=e.center,l=void 0!==n&&n,c=e.classes,s=e.className,u=(0,r.Z)(e,["center","classes","className"]),d=a.useState([]),p=d[0],m=d[1],f=a.useRef(0),h=a.useRef(null);a.useEffect((function(){h.current&&(h.current(),h.current=null)}),[p]);var g=a.useRef(!1),v=a.useRef(null),b=a.useRef(null),y=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var x=a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;m((function(e){return[].concat((0,ce.Z)(e),[a.createElement(xe,{key:f.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o})])})),f.current+=1,h.current=i}),[c]),E=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.pulsate,r=void 0!==a&&a,o=t.center,i=void 0===o?l||t.pulsate:o,c=t.fakeElement,s=void 0!==c&&c;if("mousedown"===e.type&&g.current)g.current=!1;else{"touchstart"===e.type&&(g.current=!0);var u,d,p,m=s?null:y.current,f=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(i||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var h=e.touches?e.touches[0]:e,E=h.clientX,w=h.clientY;u=Math.round(E-f.left),d=Math.round(w-f.top)}if(i)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var Z=2*Math.max(Math.abs((m?m.clientWidth:0)-u),u)+2,S=2*Math.max(Math.abs((m?m.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(Z,2)+Math.pow(S,2))}e.touches?null===b.current&&(b.current=function(){x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},v.current=setTimeout((function(){b.current&&(b.current(),b.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[l,x]),w=a.useCallback((function(){E({},{pulsate:!0})}),[E]),Z=a.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&b.current)return e.persist(),b.current(),b.current=null,void(v.current=setTimeout((function(){Z(e,t)})));b.current=null,m((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return a.useImperativeHandle(t,(function(){return{pulsate:w,start:E,stop:Z}}),[w,E,Z]),a.createElement("span",(0,o.Z)({className:(0,i.Z)(c.root,s),ref:y},u),a.createElement(be,{component:null,exit:!0},p))})),we=(0,l.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(a.memo(Ee)),Ze=a.forwardRef((function(e,t){var n=e.action,l=e.buttonRef,c=e.centerRipple,s=void 0!==c&&c,u=e.children,d=e.classes,p=e.className,m=e.component,f=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,v=e.disableRipple,b=void 0!==v&&v,y=e.disableTouchRipple,x=void 0!==y&&y,E=e.focusRipple,w=void 0!==E&&E,Z=e.focusVisibleClassName,S=e.onBlur,k=e.onClick,N=e.onFocus,R=e.onFocusVisible,C=e.onKeyDown,M=e.onKeyUp,T=e.onMouseDown,z=e.onMouseLeave,j=e.onMouseUp,D=e.onTouchEnd,P=e.onTouchMove,I=e.onTouchStart,L=e.onDragLeave,B=e.tabIndex,O=void 0===B?0:B,A=e.TouchRippleProps,H=e.type,V=void 0===H?"button":H,W=(0,r.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),F=a.useRef(null);var U=a.useRef(null),$=a.useState(!1),Y=$[0],K=$[1];g&&Y&&K(!1);var _=le(),J=_.isFocusVisible,Q=_.onBlurVisible,ee=_.ref;function te(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x;return G((function(a){return t&&t(a),!n&&U.current&&U.current[e](a),!0}))}a.useImperativeHandle(n,(function(){return{focusVisible:function(){K(!0),F.current.focus()}}}),[]),a.useEffect((function(){Y&&w&&!b&&U.current.pulsate()}),[b,w,Y]);var ne=te("start",T),ae=te("stop",L),re=te("stop",j),oe=te("stop",(function(e){Y&&e.preventDefault(),z&&z(e)})),ie=te("start",I),ce=te("stop",D),se=te("stop",P),ue=te("stop",(function(e){Y&&(Q(e),K(!1)),S&&S(e)}),!1),de=G((function(e){F.current||(F.current=e.currentTarget),J(e)&&(K(!0),R&&R(e)),N&&N(e)})),pe=function(){var e=q.findDOMNode(F.current);return f&&"button"!==f&&!("A"===e.tagName&&e.href)},me=a.useRef(!1),fe=G((function(e){w&&!me.current&&Y&&U.current&&" "===e.key&&(me.current=!0,e.persist(),U.current.stop(e,(function(){U.current.start(e)}))),e.target===e.currentTarget&&pe()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&pe()&&"Enter"===e.key&&!g&&(e.preventDefault(),k&&k(e))})),he=G((function(e){w&&" "===e.key&&U.current&&Y&&!e.defaultPrevented&&(me.current=!1,e.persist(),U.current.stop(e,(function(){U.current.pulsate(e)}))),M&&M(e),k&&e.target===e.currentTarget&&pe()&&" "===e.key&&!e.defaultPrevented&&k(e)})),ge=f;"button"===ge&&W.href&&(ge="a");var ve={};"button"===ge?(ve.type=V,ve.disabled=g):("a"===ge&&W.href||(ve.role="button"),ve["aria-disabled"]=g);var be=X(l,t),ye=X(ee,F),xe=X(be,ye),Ee=a.useState(!1),Ze=Ee[0],Se=Ee[1];a.useEffect((function(){Se(!0)}),[]);var ke=Ze&&!b&&!g;return a.createElement(ge,(0,o.Z)({className:(0,i.Z)(d.root,p,Y&&[d.focusVisible,Z],g&&d.disabled),onBlur:ue,onClick:k,onFocus:de,onKeyDown:fe,onKeyUp:he,onMouseDown:ne,onMouseLeave:oe,onMouseUp:re,onDragLeave:ae,onTouchEnd:ce,onTouchMove:se,onTouchStart:ie,ref:xe,tabIndex:g?-1:O},ve,W),u,ke?a.createElement(we,(0,o.Z)({ref:U,center:s},A)):null)})),Se=(0,l.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(Ze),ke=a.forwardRef((function(e,t){var n=e.edge,l=void 0!==n&&n,c=e.children,s=e.classes,u=e.className,d=e.color,p=void 0===d?"default":d,m=e.disabled,f=void 0!==m&&m,h=e.disableFocusRipple,g=void 0!==h&&h,v=e.size,b=void 0===v?"medium":v,y=(0,r.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(Se,(0,o.Z)({className:(0,i.Z)(s.root,u,"default"!==p&&s["color".concat((0,P.Z)(p))],f&&s.disabled,"small"===b&&s["size".concat((0,P.Z)(b))],{start:s.edgeStart,end:s.edgeEnd}[l]),centerRipple:!0,focusRipple:!g,disabled:f,ref:t},y),a.createElement("span",{className:s.label},c))})),Ne=(0,l.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,z.U1)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,z.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,z.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(ke),Re=n(8266),Ce=F(a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})),Me=n(920),Te=n(2126),ze=n(4251),je=n.p+"static/q-shipping-solutions-b796d9ae6c54a3bbb2990186a3de7c96.png",De=n.p+"static/bw_yj-a830dfde90320a7bcfe1fe54a7b1213b.jpg",Pe=n.p+"static/bw_sam-e38261a4842f0a1e1f043e156ea4cbff.jpg",Ie=(0,Me.Z)((function(e){return{profile:{position:"relative"},avatar:{width:e.spacing(20),height:e.spacing(20)},linkedin:{borderRadius:"10%",backgroundColor:e.palette.background.paper,padding:e.spacing(1),position:"absolute",bottom:0,right:0},lightfont:{fontWeight:200},spacing:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2),maxHeight:"50%",maxWidth:"90%",overflow:"auto"},video:{position:"relative",paddingBottom:"56.25%",height:0,"& iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}}}));var Le=function(){var e=Ie();return a.createElement(Te.Z,null,a.createElement(ze.Z,{title:"Home"}),a.createElement(p,{container:!0,justify:"center"},a.createElement(p,{item:!0,className:e.spacing},a.createElement("img",{src:je,alt:"Q Shipping Solutions",style:{marginBottom:"1.45rem",width:"100%"}}),a.createElement(v.Z,{variant:"h5",align:"center",className:e.lightfont},"A Math-Based Maritime Software Company.")),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Our Company"}),a.createElement(E,null,a.createElement(v.Z,null,"We develop customized decision-support software with a focus on the maritime industry, primarily shipping companies. Our solutions enable our clients to address critical operational problems based on real-time and historical data.")))),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Our Technology"}),a.createElement(E,null,a.createElement(v.Z,null,"Our approach to mathematical modeling differentiates us. Modeling enables large, complex problems to be framed and formulated so that computers can find optimal solutions that humans would’ve deemed unsolvable or resource consuming.")))),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Problem Scope"}),a.createElement(E,null,a.createElement(k,null,a.createElement(T,null,a.createElement(D,null,a.createElement(L,{style:{textAlign:"center"}},"Cost Management"),a.createElement(L,{style:{textAlign:"center"}},"Revenue Management"))),a.createElement(H,null,a.createElement(D,null,a.createElement(L,null,a.createElement("ul",null,a.createElement("li",null,"Safety Stock, Supply/Demand Prediction"),a.createElement("li",null,"Empty Container Repositioning"))),a.createElement(L,null,a.createElement("ul",null,a.createElement("li",null,"Spot Cargo Pricing"),a.createElement("li",null,"Long-term Contract Bid Pricing"))))))))),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Our Solutions"}),a.createElement(E,null,a.createElement(v.Z,{paragraph:!0},"Safety Stock"),a.createElement(v.Z,{paragraph:!0},"Ports must keep empty containers in storage to meet the demands of shippers. The optimal inventory level of empty containers meets all of shippers’ demands while minimizing cost of storage and leasing/owning containers. Too low of a level will miss potential revenue from shippers, and too high of a level will incur unnecessary spending."),a.createElement("div",{className:e.video},a.createElement("iframe",{src:"https://www.youtube.com/embed/mb0gl0-e074",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),a.createElement("br",null),a.createElement(v.Z,{paragraph:!0},"Empty Container Repositioning"),a.createElement(v.Z,{paragraph:!0},"Once an empty container has been returned by the shipper, shipping companies must relocate the container to locations with demand. Sometimes the cheapest relocation cost does not always result in maximum profit. A quicker but pricier relocation may lead to higher fulfillment and increased profit."),a.createElement("div",{className:e.video},a.createElement("iframe",{src:"https://www.youtube.com/embed/9m60RZyWGe8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Our Team"}),a.createElement(E,null,a.createElement(p,{container:!0,justify:"space-around",spacing:3},a.createElement(p,{item:!0},a.createElement(Re.Z,{className:e.profile},a.createElement(Y,{src:De,className:e.avatar}),a.createElement(Ne,{"aria-label":"YJ's Linkedin",color:"inherit",href:"https://www.linkedin.com/in/yoo-joon-kim-b9875013a/",target:"_blank",rel:"noopener noreferrer",className:e.linkedin},a.createElement(Ce,null))),a.createElement("br",null),a.createElement(v.Z,{align:"center"},"Yoo Joon (YJ) Kim",a.createElement("br",null),a.createElement("i",null,"CEO"))),a.createElement(p,{item:!0},a.createElement(Re.Z,{className:e.profile},a.createElement(Y,{src:Pe,className:e.avatar}),a.createElement(Ne,{"aria-label":"Samuel's Linkedin",color:"inherit",href:"https://www.linkedin.com/in/samlim0313/",target:"_blank",rel:"noopener noreferrer",className:e.linkedin},a.createElement(Ce,null))),a.createElement("br",null),a.createElement(v.Z,{align:"center"},"Samuel Lim",a.createElement("br",null),a.createElement("i",null,"Lead Engineer"))))))),a.createElement(p,{item:!0,xs:12,className:e.spacing},a.createElement(g,null,a.createElement(y,{title:"Contact Us"}),a.createElement(E,null,a.createElement(v.Z,{align:"center"},a.createElement("a",{href:"mailto:info@q-shipping.co",style:{textDecoration:"none",color:"inherit"}},"info@q-shipping.co")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cf80b4919438bc89e228.js.map