(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{8378:function(e,s,i){Promise.resolve().then(i.bind(i,2068))},7212:function(e,s,i){"use strict";i.d(s,{FT:function(){return r}});var n=i(2265),l=i(7437);let c=["as","disabled"];function r({tagName:e,disabled:s,href:i,target:n,rel:l,role:c,onClick:r,tabIndex:t=0,type:a}){e||(e=null!=i||null!=n||null!=l?"a":"button");let d={tagName:e};if("button"===e)return[{type:a||"button",disabled:s},d];let o=n=>{var l;if(!s&&("a"!==e||(l=i)&&"#"!==l.trim())||n.preventDefault(),s){n.stopPropagation();return}null==r||r(n)};return"a"===e&&(i||(i="#"),s&&(i=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:s?void 0:t,href:i,target:"a"===e?n:void 0,"aria-disabled":s||void 0,rel:"a"===e?l:void 0,onClick:o,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),o(e))}},d]}let t=n.forwardRef((e,s)=>{let{as:i,disabled:n}=e,t=function(e,s){if(null==e)return{};var i,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],s.indexOf(i)>=0||(l[i]=e[i]);return l}(e,c),[a,{tagName:d}]=r(Object.assign({tagName:i,disabled:n},t));return(0,l.jsx)(d,Object.assign({},t,a,{ref:s}))});t.displayName="Button",s.ZP=t},2808:function(e,s,i){"use strict";var n=i(6800),l=i.n(n),c=i(2265),r=i(7212),t=i(2574),a=i(7437);let d=c.forwardRef((e,s)=>{let{as:i,bsPrefix:n,variant:c="primary",size:d,active:o=!1,disabled:h=!1,className:u,...x}=e,j=(0,t.vE)(n,"btn"),[m,{tagName:p}]=(0,r.FT)({tagName:i,disabled:h,...x});return(0,a.jsx)(p,{...m,...x,ref:s,disabled:h,className:l()(u,j,o&&"active",c&&"".concat(j,"-").concat(c),d&&"".concat(j,"-").concat(d),x.href&&h&&"disabled")})});d.displayName="Button",s.default=d},6712:function(e,s,i){"use strict";var n=i(6800),l=i.n(n),c=i(2265),r=i(2574),t=i(7437);let a=c.forwardRef((e,s)=>{let[{className:i,...n},{as:c="div",bsPrefix:a,spans:d}]=function(e){let{as:s,bsPrefix:i,className:n,...c}=e;i=(0,r.vE)(i,"col");let t=(0,r.pi)(),a=(0,r.zG)(),d=[],o=[];return t.forEach(e=>{let s,n,l;let r=c[e];delete c[e],"object"==typeof r&&null!=r?{span:s,offset:n,order:l}=r:s=r;let t=e!==a?"-".concat(e):"";s&&d.push(!0===s?"".concat(i).concat(t):"".concat(i).concat(t,"-").concat(s)),null!=l&&o.push("order".concat(t,"-").concat(l)),null!=n&&o.push("offset".concat(t,"-").concat(n))}),[{...c,className:l()(n,...d,...o)},{as:s,bsPrefix:i,spans:d}]}(e);return(0,t.jsx)(c,{...n,ref:s,className:l()(i,!d.length&&a)})});a.displayName="Col",s.default=a},358:function(e,s,i){"use strict";var n=i(6800),l=i.n(n),c=i(2265),r=i(2574),t=i(7437);let a=c.forwardRef((e,s)=>{let{bsPrefix:i,className:n,as:c="div",...a}=e,d=(0,r.vE)(i,"row"),o=(0,r.pi)(),h=(0,r.zG)(),u="".concat(d,"-cols"),x=[];return o.forEach(e=>{let s;let i=a[e];delete a[e],null!=i&&"object"==typeof i?{cols:s}=i:s=i,null!=s&&x.push("".concat(u).concat(e!==h?"-".concat(e):"","-").concat(s))}),(0,t.jsx)(c,{ref:s,...a,className:l()(n,d,...x)})});a.displayName="Row",s.default=a},2574:function(e,s,i){"use strict";i.d(s,{SC:function(){return o},pi:function(){return a},vE:function(){return t},zG:function(){return d}});var n=i(2265);i(7437);let l=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:c,Provider:r}=l;function t(e,s){let{prefixes:i}=(0,n.useContext)(l);return e||i[s]||s}function a(){let{breakpoints:e}=(0,n.useContext)(l);return e}function d(){let{minBreakpoint:e}=(0,n.useContext)(l);return e}function o(){let{dir:e}=(0,n.useContext)(l);return"rtl"===e}},2068:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return t}});var n=i(7437),l=i(2808),c=i(358),r=i(6712);function t(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"photography-hero ",children:(0,n.jsx)("div",{className:"photography-title d-flex justify-content-center align-items-center rounded-2",children:(0,n.jsx)("div",{className:"display-4 text-white text-uppercase",children:"Fashion"})})}),(0,n.jsx)("div",{className:"section-title mt-5",children:(0,n.jsx)("h2",{children:"Preise & Leistungen"})}),(0,n.jsx)("section",{id:"pricing",className:"pricing section",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row gy-4",children:[(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"pricing-item",children:[(0,n.jsx)("h3",{children:"Quick"}),(0,n.jsxs)("h4",{children:[(0,n.jsx)("span",{className:"pe-2",children:"ab"}),"45",(0,n.jsx)("sup",{children:"€"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"30"})," Minuten Shooting"]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsxs)("span",{children:["bis zu ",(0,n.jsx)("b",{children:"3"})," Bilder inklusive"]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsx)("span",{children:"professionelle Retusche und Bildlooks"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsx)("span",{children:"pers\xf6nliche Onlinegalerie"})]})]}),(0,n.jsx)(l.default,{variant:"light",size:"lg",href:"/book",children:"Buchen"})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"pricing-item featured",children:[(0,n.jsx)("h3",{children:"Standard"}),(0,n.jsxs)("h4",{children:[(0,n.jsx)("span",{className:"pe-2",children:"ab"}),"80",(0,n.jsx)("sup",{children:"€"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"60"})," Minuten Shooting"]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsxs)("span",{children:["bis zu ",(0,n.jsx)("b",{children:"7"})," Bilder inklusive"]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsx)("span",{children:"professionelle Retusche und Bildlooks"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"bi bi-check"}),(0,n.jsx)("span",{children:"pers\xf6nliche Onlinegalerie"})]})]}),(0,n.jsx)(l.default,{variant:"primary",size:"lg",href:"/book",children:"Buchen"})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"pricing-item",children:[(0,n.jsx)("h3",{children:"Extended"}),(0,n.jsxs)("h4",{children:[(0,n.jsx)("span",{className:"pe-2",children:"ab"}),"150",(0,n.jsx)("sup",{children:"€"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"120"})," Minuten Shooting"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("span",{children:["bis zu ",(0,n.jsx)("b",{children:"15"})," Bilder inklusive"]})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"professionelle Retusche und Bildlooks"})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"pers\xf6nliche Onlinegalerie"})})]}),(0,n.jsx)(l.default,{variant:"light",size:"lg",href:"/book",children:"Buchen"})]})})]}),(0,n.jsxs)("div",{className:"row mt-4",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"pricing-item",children:[(0,n.jsx)("span",{className:"h4",children:"Alle entstandenen Bilder des Shootings"}),(0,n.jsxs)("h4",{children:[(0,n.jsx)("span",{className:"pe-2",children:"zzgl. "}),"100",(0,n.jsx)("sup",{children:"€"}),(0,n.jsx)("span",{className:"pe-2",children:"zum Parket Preis "})]}),(0,n.jsx)("p",{className:"mt-3",children:"ohne Retusche & Bildlooks"})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"pricing-item",children:[(0,n.jsx)("span",{className:"h4",children:"Anfahrt"}),(0,n.jsxs)("h4",{children:["0,50",(0,n.jsx)("sup",{children:"€"}),(0,n.jsx)("span",{className:"pe-2",children:"pro km"})]}),(0,n.jsxs)("p",{className:"mt-3",children:["Die Anfahrt zu einer Shooting-Location im Umkreis von ",(0,n.jsx)("b",{children:"\xfcber 15 km"})," ist kostenlos!"]}),(0,n.jsxs)("p",{className:"mt-3",children:["bei Entfernungen ",(0,n.jsx)("b",{children:"\xfcber 50 km"})," ist der ",(0,n.jsx)("b",{children:"Preis auf Anfrage"})]})]})})]})]})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"section-title mt-5",children:[(0,n.jsx)("h2",{children:"Beispielbilder"}),(0,n.jsxs)(c.default,{className:"mt-4",children:[(0,n.jsx)(r.default,{lg:"4",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("img",{className:"card-img-top",src:"/img/studio.webp",alt:"Card image cap"}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:"Test Image"}),(0,n.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"})]})]})}),(0,n.jsx)(r.default,{lg:"4",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("img",{className:"card-img-top",src:"/img/studio.webp",alt:"Card image cap"}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:"Test Image"}),(0,n.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"})]})]})}),(0,n.jsx)(r.default,{lg:"4",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("img",{className:"card-img-top",src:"/img/studio.webp",alt:"Card image cap"}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:"Test Image"}),(0,n.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"})]})]})})]})]})})]})}},6800:function(e,s){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e="",s=0;s<arguments.length;s++){var i=arguments[s];i&&(e=c(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var i in e)n.call(e,i)&&e[i]&&(s=c(s,i));return s}(i)))}return e}function c(e,s){return s?e?e+" "+s:e+s:e}e.exports?(l.default=l,e.exports=l):void 0!==(i=(function(){return l}).apply(s,[]))&&(e.exports=i)}()}},function(e){e.O(0,[971,23,744],function(){return e(e.s=8378)}),_N_E=e.O()}]);