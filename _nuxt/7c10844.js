(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1029:function(t,e,n){"use strict";n.r(e);var r=n(940),o=n(923),c={name:"InspirePage"},l=n(5),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,[e(r.a,{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),e("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[t._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},923:function(t,e,n){"use strict";n(10),n(12),n(19),n(20);var r=n(2),o=(n(6),n(45),n(61),n(28),n(13),n(25),n(52),n(294),n(33),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(35),n(11),n(583),n(1)),c=n(66),l=n(0);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=["sm","md","lg","xl"],j=["start","end","center"];function y(t,e){return O.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var v=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},m=y("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},P=y("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);if(!d){var O,j;for(j in d=[],C)C[j].forEach((function(t){var e=n[t],r=D(j,t,e);r&&d.push(r)}));d.push((O={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(O,"align-".concat(n.align),n.align),Object(r.a)(O,"justify-".concat(n.justify),n.justify),Object(r.a)(O,"align-content-".concat(n.alignContent),n.alignContent),O)),x.set(l,d)}return t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},940:function(t,e,n){"use strict";n(10),n(12),n(19),n(20);var r=n(2),o=(n(6),n(8),n(13),n(25),n(52),n(294),n(33),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(35),n(45),n(11),n(87),n(583),n(1)),c=n(66),l=n(0);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=["sm","md","lg","xl"],j=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=O.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),v=O.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(j),offset:Object.keys(y),order:Object.keys(v)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);if(!d){var O,j;for(j in d=[],w)w[j].forEach((function(t){var e=n[t],r=h(j,t,e);r&&d.push(r)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!y||!n.cols},Object(r.a)(O,"col-".concat(n.cols),n.cols),Object(r.a)(O,"offset-".concat(n.offset),n.offset),Object(r.a)(O,"order-".concat(n.order),n.order),Object(r.a)(O,"align-self-".concat(n.alignSelf),n.alignSelf),O)),m.set(l,d)}return t(n.tag,Object(c.a)(data,{class:d}),o)}})}}]);