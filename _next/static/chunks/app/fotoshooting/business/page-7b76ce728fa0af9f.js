(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{5023:function(e,t,n){Promise.resolve().then(n.bind(n,9914))},7212:function(e,t,n){"use strict";n.d(t,{FT:function(){return l}});var i=n(2265),r=n(7437);let s=["as","disabled"];function l({tagName:e,disabled:t,href:n,target:i,rel:r,role:s,onClick:l,tabIndex:a=0,type:c}){e||(e=null!=n||null!=i||null!=r?"a":"button");let o={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},o];let u=i=>{var r;if(!t&&("a"!==e||(r=n)&&"#"!==r.trim())||i.preventDefault(),t){i.stopPropagation();return}null==l||l(i)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:a,href:n,target:"a"===e?i:void 0,"aria-disabled":t||void 0,rel:"a"===e?r:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},o]}let a=i.forwardRef((e,t)=>{let{as:n,disabled:i}=e,a=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s),[c,{tagName:o}]=l(Object.assign({tagName:n,disabled:i},a));return(0,r.jsx)(o,Object.assign({},a,c,{ref:t}))});a.displayName="Button",t.ZP=a},2808:function(e,t,n){"use strict";var i=n(6800),r=n.n(i),s=n(2265),l=n(7212),a=n(2574),c=n(7437);let o=s.forwardRef((e,t)=>{let{as:n,bsPrefix:i,variant:s="primary",size:o,active:u=!1,disabled:d=!1,className:p,...f}=e,m=(0,a.vE)(i,"btn"),[h,{tagName:x}]=(0,l.FT)({tagName:n,disabled:d,...f});return(0,c.jsx)(x,{...h,...f,ref:t,disabled:d,className:r()(p,m,u&&"active",s&&"".concat(m,"-").concat(s),o&&"".concat(m,"-").concat(o),f.href&&d&&"disabled")})});o.displayName="Button",t.default=o},6712:function(e,t,n){"use strict";var i=n(6800),r=n.n(i),s=n(2265),l=n(2574),a=n(7437);let c=s.forwardRef((e,t)=>{let[{className:n,...i},{as:s="div",bsPrefix:c,spans:o}]=function(e){let{as:t,bsPrefix:n,className:i,...s}=e;n=(0,l.vE)(n,"col");let a=(0,l.pi)(),c=(0,l.zG)(),o=[],u=[];return a.forEach(e=>{let t,i,r;let l=s[e];delete s[e],"object"==typeof l&&null!=l?{span:t,offset:i,order:r}=l:t=l;let a=e!==c?"-".concat(e):"";t&&o.push(!0===t?"".concat(n).concat(a):"".concat(n).concat(a,"-").concat(t)),null!=r&&u.push("order".concat(a,"-").concat(r)),null!=i&&u.push("offset".concat(a,"-").concat(i))}),[{...s,className:r()(i,...o,...u)},{as:t,bsPrefix:n,spans:o}]}(e);return(0,a.jsx)(s,{...i,ref:t,className:r()(n,!o.length&&c)})});c.displayName="Col",t.default=c},358:function(e,t,n){"use strict";var i=n(6800),r=n.n(i),s=n(2265),l=n(2574),a=n(7437);let c=s.forwardRef((e,t)=>{let{bsPrefix:n,className:i,as:s="div",...c}=e,o=(0,l.vE)(n,"row"),u=(0,l.pi)(),d=(0,l.zG)(),p="".concat(o,"-cols"),f=[];return u.forEach(e=>{let t;let n=c[e];delete c[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&f.push("".concat(p).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,a.jsx)(s,{ref:t,...c,className:r()(i,o,...f)})});c.displayName="Row",t.default=c},2574:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},pi:function(){return c},vE:function(){return a},zG:function(){return o}});var i=n(2265);n(7437);let r=i.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:l}=r;function a(e,t){let{prefixes:n}=(0,i.useContext)(r);return e||n[t]||t}function c(){let{breakpoints:e}=(0,i.useContext)(r);return e}function o(){let{minBreakpoint:e}=(0,i.useContext)(r);return e}function u(){let{dir:e}=(0,i.useContext)(r);return"rtl"===e}},9914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(7437),r=n(8646),s=n(8805),l=n(7566);let a=[{imageUrl:"/img/studio.webp",altText:"Example Picture",title:"Test Image",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"},{imageUrl:"/img/studio.webp",altText:"Example Picture",title:"Test Image",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"},{imageUrl:"/img/studio.webp",altText:"Example Picture",title:"Test Image",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"},{imageUrl:"/img/studio.webp",altText:"Example Picture",title:"Test Image",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}],c=[{title:"Quick",price:45,featured:!1,features:["<b>30</b> Minuten Shooting","bis zu <b>3</b> Bilder inklusive","professionelle Retusche und Bildlooks","pers\xf6nliche Onlinegalerie"]},{title:"Standard",price:80,featured:!0,features:["<b>60</b> Minuten Shooting","bis zu <b>7</b> Bilder inklusive","professionelleasdfsdfsdund Bildlooks","pers\xf6nliche Onlinegalerie"]},{title:"Extended",price:150,featured:!1,features:["<b>120</b> Minuten Shooting","bis zu <b>15</b> Bilder inklusive","professionelle Retusche und Bildlooks","pers\xf6nliche Onlinegalerie"]}],o=[{title:"Alle entstandenen Bilder des Shootings",price:"100",priceUnit:"",description:["ohne Retusche & Bildlooks"]},{title:"Anfahrt",price:"0,50",priceUnit:"pro km",description:["Die Anfahrt zu einer Shooting-Location im Umkreis von <b>15 km</b> ist kostenlos!","bei Entfernungen <b>\xfcber 50 km</b> ist der <b>Preis auf Anfrage</b>"]}];function u(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"photography-hero ",children:(0,i.jsx)("div",{className:"photography-title d-flex justify-content-center align-items-center rounded-2",children:(0,i.jsx)("div",{className:"display-4 text-white text-uppercase",children:"Business"})})}),(0,i.jsx)("div",{className:"section-title mt-5",children:(0,i.jsx)("h2",{children:"Preise & Leistungen"})}),(0,i.jsx)("section",{id:"pricing",className:"pricing section",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(s.Z,{pricings:c}),(0,i.jsx)(l.Z,{additionalFeatures:o})]})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"section-title mt-5",children:[(0,i.jsx)("h2",{children:"Beispielbilder"}),(0,i.jsx)(r.Z,{cards:a})]})})]})}},7566:function(e,t,n){"use strict";var i=n(7437);n(2265),t.Z=e=>{let{additionalFeatures:t}=e,n="col-lg-".concat(12/t.length);return(0,i.jsx)("div",{className:"row mt-4",children:t.map((e,t)=>(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:"pricing-item",children:[(0,i.jsx)("span",{className:"h4",children:e.title}),(0,i.jsxs)("h4",{children:[(0,i.jsx)("span",{className:"pe-2",children:"zzgl. "}),e.price,(0,i.jsx)("sup",{children:"€"}),(0,i.jsx)("span",{className:"pe-2",children:e.priceUnit})]}),e.description.map((e,t)=>(0,i.jsx)("p",{className:"mt-3",dangerouslySetInnerHTML:{__html:e}},t))]})},t))})}},8805:function(e,t,n){"use strict";var i=n(7437);n(2265);var r=n(2808);t.Z=e=>{let{pricings:t}=e;return(0,i.jsx)("div",{className:"row",children:t.map((e,t)=>(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"pricing-item ".concat(e.featured?"featured":""),children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsxs)("h4",{children:[(0,i.jsx)("span",{className:"pe-2",children:"ab"}),e.price,(0,i.jsx)("sup",{children:"€"})]}),(0,i.jsx)("ul",{children:e.features.map((e,t)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bi bi-check"}),(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})]},t))}),(0,i.jsx)(r.default,{variant:e.featured?"primary":"light",size:"lg",href:"/book",children:"Buchen"})]})},t))})}},8646:function(e,t,n){"use strict";var i=n(7437);n(2265);var r=n(358),s=n(6712);t.Z=e=>{let{cards:t}=e,n=((e,t)=>{let n=[];for(let i=0;i<e.length;i+=t)n.push(e.slice(i,i+t));return n})(t,3);return(0,i.jsx)("div",{children:n.map((e,t)=>(0,i.jsx)(r.default,{className:"mt-4 justify-content-center",children:e.map((e,t)=>(0,i.jsx)(s.default,{lg:"4",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("img",{className:"card-img-top",src:e.imageUrl,alt:e.altText}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("h5",{className:"card-title",children:e.title}),(0,i.jsx)("p",{className:"card-text",children:e.description})]})]})},t))},t))})}},6800:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[971,23,744],function(){return e(e.s=5023)}),_N_E=e.O()}]);