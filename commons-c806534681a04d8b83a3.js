(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{8266:function(t,r,e){"use strict";e.d(r,{Z:function(){return M}});var o=e(7329),n=e(2122),i=(e(5697),e(4131));var a=function(t){var r=function(r){var e=t(r);return r.css?(0,n.Z)({},(0,i.Z)(e,t((0,n.Z)({theme:r.theme},r.css))),function(t,r){var e={};return Object.keys(t).forEach((function(o){-1===r.indexOf(o)&&(e[o]=t[o])})),e}(r.css,[t.filterProps])):e};return r.propTypes={},r.filterProps=["css"].concat((0,o.Z)(t.filterProps)),r};var p=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var o=function(t){return r.reduce((function(r,e){var o=e(t);return o?(0,i.Z)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(t,r){return t.concat(r.filterProps)}),[]),o},s=e(6156),l=e(3592);function c(t,r){return r&&"string"==typeof r?r.split(".").reduce((function(t,r){return t&&t[r]?t[r]:null}),t):null}var d=function(t){var r=t.prop,e=t.cssProperty,o=void 0===e?t.prop:e,n=t.themeKey,i=t.transform,a=function(t){if(null==t[r])return null;var e=t[r],a=c(t.theme,n)||{};return(0,l.k)(t,e,(function(t){var r;return"function"==typeof a?r=a(t):Array.isArray(a)?r=a[t]||t:(r=c(a,t)||t,i&&(r=i(r))),!1===o?r:(0,s.Z)({},o,r)}))};return a.propTypes={},a.filterProps=[r],a};function u(t){return"number"!=typeof t?t:"".concat(t,"px solid")}var m=p(d({prop:"border",themeKey:"borders",transform:u}),d({prop:"borderTop",themeKey:"borders",transform:u}),d({prop:"borderRight",themeKey:"borders",transform:u}),d({prop:"borderBottom",themeKey:"borders",transform:u}),d({prop:"borderLeft",themeKey:"borders",transform:u}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),h=p(d({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),f=p(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),g=p(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),y=p(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),b=p(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=d({prop:"boxShadow",themeKey:"shadows"});function x(t){return t<=1?"".concat(100*t,"%"):t}var Z=d({prop:"width",transform:x}),w=d({prop:"maxWidth",transform:x}),k=d({prop:"minWidth",transform:x}),W=d({prop:"height",transform:x}),C=d({prop:"maxHeight",transform:x}),S=d({prop:"minHeight",transform:x}),A=(d({prop:"size",cssProperty:"width",transform:x}),d({prop:"size",cssProperty:"height",transform:x}),p(Z,w,k,W,C,S,d({prop:"boxSizing"}))),K=p(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),P=e(5408),E=e(2112),T=e(4982),B=function(t){var r=(0,E.Z)(t);return function(t,e){return r(t,(0,n.Z)({defaultTheme:T.Z},e))}},R=a(p(m,h,f,g,y,b,v,A,P.Z,K)),M=B("div")(R,{name:"MuiBox"})},453:function(t,r,e){"use strict";var o=e(2122),n=e(1253),i=e(7294),a=e(5505),p=e(4621),s=e(1664),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=i.forwardRef((function(t,r){var e=t.align,p=void 0===e?"inherit":e,c=t.classes,d=t.className,u=t.color,m=void 0===u?"initial":u,h=t.component,f=t.display,g=void 0===f?"initial":f,y=t.gutterBottom,b=void 0!==y&&y,v=t.noWrap,x=void 0!==v&&v,Z=t.paragraph,w=void 0!==Z&&Z,k=t.variant,W=void 0===k?"body1":k,C=t.variantMapping,S=void 0===C?l:C,A=(0,n.Z)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),K=h||(w?"p":S[W]||l[W])||"span";return i.createElement(K,(0,o.Z)({className:(0,a.Z)(c.root,d,"inherit"!==W&&c[W],"initial"!==m&&c["color".concat((0,s.Z)(m))],x&&c.noWrap,b&&c.gutterBottom,w&&c.paragraph,"inherit"!==p&&c["align".concat((0,s.Z)(p))],"initial"!==g&&c["display".concat((0,s.Z)(g))]),ref:r},A))}));r.Z=(0,p.Z)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},920:function(t,r,e){"use strict";var o=e(2122),n=e(7627),i=e(4982);r.Z=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.Z)(t,(0,o.Z)({defaultTheme:i.Z},r))}},1664:function(t,r,e){"use strict";e.d(r,{Z:function(){return n}});var o=e(2192);function n(t){if("string"!=typeof t)throw new Error((0,o.Z)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},2126:function(t,r,e){"use strict";e.d(r,{Z:function(){return f}});var o=e(7294),n=e(2122),i=e(1253),a=e(6156),p=e(5505),s=e(4621),l=e(1664),c=o.forwardRef((function(t,r){var e=t.classes,a=t.className,s=t.component,c=void 0===s?"div":s,d=t.disableGutters,u=void 0!==d&&d,m=t.fixed,h=void 0!==m&&m,f=t.maxWidth,g=void 0===f?"lg":f,y=(0,i.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(c,(0,n.Z)({className:(0,p.Z)(e.root,a,h&&e.fixed,u&&e.disableGutters,!1!==g&&e["maxWidth".concat((0,l.Z)(String(g)))]),ref:r},y))})),d=(0,s.Z)((function(t){return{root:(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(r,e){var o=t.breakpoints.values[e];return 0!==o&&(r[t.breakpoints.up(e)]={maxWidth:o}),r}),{}),maxWidthXs:(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,a.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,a.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,a.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,a.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(c),u=e(8266),m=e(453),h=(0,e(920).Z)((function(t){return{root:{minHeight:"100vh"},footer:{backgroundColor:"#222"},footerContainer:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)}}})),f=function(t){var r=t.children,e=h();return o.createElement(o.Fragment,null,o.createElement(u.Z,{className:e.root},o.createElement(d,{fixed:!0,maxWidth:"sm"},r)),o.createElement(u.Z,{className:e.footer},o.createElement(d,{fixed:!0,maxWidth:"sm",className:e.footerContainer},o.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.5320428043515!2d-71.08632159849083!3d42.36317177056365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5b9258c7b%3A0x333c673be2669ef7!2sOne%20Broadway%2C%201%20Broadway%2014th%20floor%2C%20Cambridge%2C%20MA%2002142!5e0!3m2!1sen!2sus!4v1625692369673!5m2!1sen!2sus",width:"100%",maxwidth:"400",height:"300",style:{border:"2px solid"},allowFullScreen:"",loading:"lazy",title:"google maps"}),o.createElement(m.Z,{align:"center"},o.createElement("br",null),"© ",(new Date).getFullYear()," Q Shipipng Solutions LLC"))))}},4251:function(t,r,e){"use strict";var o=e(7294),n=e(5414),i=e(5313);function a(t){var r,e,a=t.description,p=t.lang,s=t.meta,l=t.title,c=(0,i.useStaticQuery)("63159454").site,d=a||c.siteMetadata.description,u=null===(r=c.siteMetadata)||void 0===r?void 0:r.title;return o.createElement(n.q,{htmlAttributes:{lang:p},title:l,titleTemplate:u?""+u:null,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(e=c.siteMetadata)||void 0===e?void 0:e.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(s)})}a.defaultProps={lang:"en",meta:[],description:""},r.Z=a}}]);
//# sourceMappingURL=commons-c806534681a04d8b83a3.js.map