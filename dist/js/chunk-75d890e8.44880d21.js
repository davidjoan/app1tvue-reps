(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75d890e8"],{"159b":function(r,s,a){var t=a("da84"),e=a("fdbc"),o=a("17c2"),l=a("9112");for(var i in e){var c=t[i],n=c&&c.prototype;if(n&&n.forEach!==o)try{l(n,"forEach",o)}catch(u){n.forEach=o}}},"17c2":function(r,s,a){"use strict";var t=a("b727").forEach,e=a("b301");r.exports=e("forEach")?function(r){return t(this,r,arguments.length>1?arguments[1]:void 0)}:[].forEach},"65f0":function(r,s,a){var t=a("861d"),e=a("e8b5"),o=a("b622"),l=o("species");r.exports=function(r,s){var a;return e(r)&&(a=r.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?t(a)&&(a=a[l],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===s?0:s)}},"9bfd":function(r,s,a){"use strict";a.r(s);var t=function(){var r=this,s=r.$createElement,a=r._self._c||s;return a("div",[a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Bootstrap Progress")]),a("div",{staticClass:"card-header-actions"},[a("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/progress",rel:"noreferrer noopener",target:"_blank"}},[a("small",{staticClass:"text-muted"},[r._v("docs")])])])],1),a("CCardBody",[a("CProgress",{attrs:{value:r.counter,max:r.max,"show-percentage":"",animated:""}}),a("CProgress",{staticClass:"mt-1",attrs:{max:r.max,"show-value":""}},[a("CProgressBar",{attrs:{value:.6*r.counter,color:"success"}}),a("CProgressBar",{attrs:{value:.25*r.counter,color:"warning"}}),a("CProgressBar",{attrs:{value:.15*r.counter,color:"danger"}})],1),a("CButton",{staticClass:"mt-4",attrs:{color:"secondary"},on:{click:r.clicked}},[r._v(" Click me to animate progress bars ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),r._v(" "),a("strong",[r._v(" Progress ")]),a("small",[r._v("labels")])],1),a("CCardBody",[a("h6",[r._v("No label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value,max:r.max2}}),a("h6",[r._v("Value label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value,max:r.max2,"show-value":""}}),a("h6",[r._v("Progress label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value,max:r.max2,"show-percentage":""}}),a("h6",[r._v("Value label with precision")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value,max:r.max2,precision:2,"show-value":""}}),a("h6",[r._v("Progress label with precision")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value,max:r.max2,precision:2,"show-percentage":""}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("width")])],1),a("CCardBody",[a("h6",[r._v("Default width")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value3}}),a("h6",[r._v("Custom widths")]),a("CProgress",{staticClass:"w-75 mb-2",attrs:{value:r.value3}}),a("CProgress",{staticClass:"w-50 mb-2",attrs:{value:r.value3}}),a("CProgress",{staticClass:"w-25",attrs:{value:r.value3}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("height")])],1),a("CCardBody",[a("h6",[r._v("Default height")]),a("CProgress",{staticClass:"mb-3",attrs:{value:r.value3,"show-percentage":""}}),a("h6",[r._v("Custom heights")]),a("CProgress",{staticClass:"mb-2",attrs:{height:"2rem",value:r.value3,"show-percentage":""}}),a("CProgress",{staticClass:"mb-2",attrs:{height:"20px",value:r.value3,"show-percentage":""}}),a("CProgress",{attrs:{height:"2px",value:r.value3}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("colors")])],1),a("CCardBody",r._l(r.bars,(function(s,t){return a("div",{key:t,staticClass:"row mb-1"},[a("div",{staticClass:"col-sm-2"},[r._v(r._s(s.color)+":")]),a("div",{staticClass:"col-sm-10 pt-1"},[a("CProgress",{key:s.color,attrs:{value:s.value,color:s.color}})],1)])})),0)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("striped")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:r.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:r.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:r.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:100,color:"danger",striped:r.striped}}),a("CButton",{attrs:{color:"secondary"},on:{click:function(s){r.striped=!r.striped}}},[r._v(" "+r._s(r.striped?"Remove":"Add")+" Striped ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("animated")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:"",animated:r.animate}}),a("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:"",animated:r.animate}}),a("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:"",animated:r.animate}}),a("CProgress",{staticClass:"mb-3",attrs:{value:100,color:"danger",animated:r.animate}}),a("CButton",{attrs:{color:"secondary"},on:{click:function(s){r.animate=!r.animate}}},[r._v(" "+r._s(r.animate?"Stop":"Start")+" Animation ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[r._v(" Progress ")]),a("small",[r._v("multiple bars")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-3",attrs:{max:r.max3}},[a("CProgressBar",{attrs:{color:"primary",value:r.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:r.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:r.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{"show-percentage":"",max:r.max3}},[a("CProgressBar",{attrs:{color:"primary",value:r.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:r.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:r.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:r.max3}},[a("CProgressBar",{attrs:{color:"primary",value:r.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:r.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:r.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{max:r.max3}},[a("CProgressBar",{attrs:{color:"primary",value:r.values[0],"show-percentage":""}}),a("CProgressBar",{attrs:{color:"success",value:r.values[1],animated:"","show-percentage":""}}),a("CProgressBar",{attrs:{color:"info",value:r.values[2],striped:"","show-percentage":""}})],1)],1)],1)],1)},e=[],o=(a("159b"),{name:"ProgressBars",data:function(){return{counter:73,max:100,max2:50,value:33.333333333,value3:75,bars:[{color:"success",value:75},{color:"info",value:75},{color:"warning",value:75},{color:"danger",value:75},{color:"primary",value:75},{color:"secondary",value:75},{color:"dark",value:75}],timer:null,striped:!0,animate:!0,max3:100,values:[15,30,20]}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var r=this;this.timer=setInterval((function(){r.bars.forEach((function(r){r.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}}),l=o,i=a("2877"),c=Object(i["a"])(l,t,e,!1,null,null,null);s["default"]=c.exports},b301:function(r,s,a){"use strict";var t=a("d039");r.exports=function(r,s){var a=[][r];return!a||!t((function(){a.call(null,s||function(){throw 1},1)}))}},b727:function(r,s,a){var t=a("f8c2"),e=a("44ad"),o=a("7b0b"),l=a("50c4"),i=a("65f0"),c=[].push,n=function(r){var s=1==r,a=2==r,n=3==r,u=4==r,C=6==r,v=5==r||C;return function(d,m,g,f){for(var h,p,P=o(d),b=e(P),y=t(m,g,3),x=l(b.length),_=0,w=f||i,B=s?w(d,x):a?w(d,0):void 0;x>_;_++)if((v||_ in b)&&(h=b[_],p=y(h,_,P),r))if(s)B[_]=p;else if(p)switch(r){case 3:return!0;case 5:return h;case 6:return _;case 2:c.call(B,h)}else if(u)return!1;return C?-1:n||u?u:B}};r.exports={forEach:n(0),map:n(1),filter:n(2),some:n(3),every:n(4),find:n(5),findIndex:n(6)}},e8b5:function(r,s,a){var t=a("c6b6");r.exports=Array.isArray||function(r){return"Array"==t(r)}},fdbc:function(r,s){r.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-75d890e8.44880d21.js.map