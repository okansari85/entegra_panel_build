(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7,8,10],{1028:function(t,e,r){"use strict";r.r(e);var n=r(890),o=r(939),c=r(911),l=r(938),d=r(923),f=r(894),h=(r(13),r(10),r(12),r(6),r(19),r(11),r(20),r(24)),m=r(2),y=(r(34),r(65),r(164)),v=r(922);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(m.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={computed:j(j({},Object(y.e)({breadcrumb:function(t){return t.breadcrumb.breadcrumb},categories:function(t){return t.categories.categories}})),{},{mycategories:{get:function(){return this.$store.state.categories.categories},set:function(t){this.$store.commit("categories/SET_CATEGORIES",t)}}}),data:function(){return{category:{},categoryValid:!1,categoryName:"",status:null,home:{icon:"pi pi-home",to:"/categories"},items:[],MdlText:"Kategori Ekle",textRules:[function(t){return!!t||"Bu alan Gereklidir"},function(t){return t&&t.length>=3||"İlgili alan 3 karakterden fazla olmalıdır."},function(t){return t&&t.length<=50||"İlgili alan en fazla 50 karakter olmalıdır."}]}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchBreadcrumb(t.$route.params.id).then((function(e){t.setCategories(e),t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},methods:j(j(j({},Object(y.b)({fetchBreadcrumb:"breadcrumb/fetchBreadcrumb",updateCategoryOrder:"categories/updateCategoryOrder",saveCategory:"categories/saveCategory",editCategory:"categories/editCategory",deleteCategory:"categories/deleteCategory"})),Object(y.d)({setCategories:"categories/SET_CATEGORIES"})),{},{showModal:function(){this.$refs.modals.dialog=!0,this.status="new",this.MdlText="Kategori Ekle"},onDrop:function(t){this.mycategories=Object(v.a)(this.categories,t);var e={categories:this.categories};console.log(e),this.updateCategoryOrder(e).then((function(){console.log("Başarılı")}))},clickEditCategory:function(t){this.status="edit",this.MdlText="Kategori Düzenle",this.category_id=t.id,this.categoryName=t.name,this.$refs.modals.dialog=!0},clickedSave:function(){var t=this;if(this.$refs.categoryForm.validate(),"new"==this.status&&this.categoryValid){var e={category_name:this.categoryName,parent_id:this.$route.params.id};this.saveCategory(e).then((function(){t.status=null,t.$refs.modals.dialog=!1,t.categoryName=""}))}if("edit"==this.status&&this.categoryValid){var r={category_id:this.category_id,category_name:this.categoryName};this.editCategory(r).then((function(){t.status=null,t.$refs.modals.dialog=!1,t.categoryName=""}))}},clickDeleteCategory:function(t){this.deleteCategory(t).then((function(){console.log("silindi")}))}})},_=r(5),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{flat:""}},[e("Modals",{ref:"modals",attrs:{"mdl-text":t.MdlText,showbtn:!1},on:{"clicked-save":t.clickedSave}},[e(l.a,{ref:"categoryForm",model:{value:t.categoryValid,callback:function(e){t.categoryValid=e},expression:"categoryValid"}},[e(c.a,{attrs:{fluid:""}},[e(d.a,[e(o.a,{attrs:{cols:"12",md:"12"}},[e(f.a,{staticClass:"mb-8",attrs:{rules:t.textRules,counter:50,label:"Kategori Adı",required:"",dense:""},model:{value:t.categoryName,callback:function(e){t.categoryName=e},expression:"categoryName"}})],1)],1)],1)],1)],1),t._v(" "),e("CBreadCrumb",{attrs:{"breadcrumb-items":t.breadcrumb}}),t._v(" "),e("br"),t._v(" "),e("CategoryList",{attrs:{items:t.mycategories,loading:t.loading},on:{"clicked-new":t.showModal,"clicked-edit":t.clickEditCategory,"clicked-delete":t.clickDeleteCategory,"on-drop":t.onDrop}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modals:r(921).default,CBreadCrumb:r(971).default,CategoryList:r(936).default})},921:function(t,e,r){"use strict";r.r(e);var n=r(191),o=r(890),c=r(914),l=r(893),d=r(273),f=r(274),h=r(187),m=r(53),y=r(908),v=r(81),O=r(293),j=(r(8),{name:"Modals",props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null},showbtn:{type:Boolean,default:!0},fullscreen:{type:Boolean,default:!0}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}}),w=r(5),component=Object(w.a)(j,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{fullscreen:t.fullscreen,eager:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([t.showbtn?{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{color:"primary",dark:""},on:{click:function(e){return t.newItem()}}},"v-btn",c,!1),o),[t._v("\n      "+t._s(t.mdlBtnText)+"\n    ")])]}}:null],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(o.a,[e(v.a,{attrs:{dark:"",color:"primary"}},[e(n.a,{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[e(d.a,[t._v("mdi-close")])],1),t._v(" "),e(O.b,[t._v(t._s(t.mdlText))]),t._v(" "),e(y.a),t._v(" "),e(O.a,[e(n.a,{attrs:{dark:"",text:""},on:{click:function(e){return t.saveItem()}}},[t._v("\n          Kaydet\n        ")])],1)],1),t._v(" "),e(f.a,{attrs:{"three-line":"",subheader:""}},[e(h.a,[e(m.a,[t._t("default")],2)],1)],1),t._v(" "),e(l.a)],1)],1)}),[],!1,null,null,null);e.default=component.exports},922:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));var n=r(18),o=(r(92),r(6),r(33),r(35),r(584),r(131),function(t,e){var r=e.removedIndex,o=e.addedIndex,c=e.payload;if(null===r&&null===o)return t;var l=Object(n.a)(t),d=c;return null!==r&&(d=l.splice(r,1)[0]),null!==o&&l.splice(o,0,d),l}),c=function(image){return URL.createObjectURL(image)}},923:function(t,e,r){"use strict";r(10),r(12),r(19),r(20);var n=r(2),o=(r(6),r(45),r(61),r(28),r(13),r(25),r(52),r(294),r(33),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(35),r(11),r(583),r(1)),c=r(66),l=r(0);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return h.reduce((function(r,n){return r[t+Object(l.F)(n)]=e(),r}),{})}var v=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:v}})),j=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},k=y("alignContent",(function(){return{type:String,default:null,validator:_}})),C={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(k)},S={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:_}},k),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=P.get(l);if(!f){var h,m;for(m in f=[],C)C[m].forEach((function(t){var e=r[t],n=x(m,t,e);n&&f.push(n)}));f.push((h={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(h,"align-".concat(r.align),r.align),Object(n.a)(h,"justify-".concat(r.justify),r.justify),Object(n.a)(h,"align-content-".concat(r.alignContent),r.alignContent),h)),P.set(l,f)}return t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},936:function(t,e,r){"use strict";r.r(e);var n=r(191),o=r(890),c=r(888),l=r(893),d=r(273),f=r(908),h=(r(34),r(924)),m={components:{Container:h.Container,Draggable:h.Draggable},props:{items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},methods:{editItem:function(t){this.$emit("clicked-edit",t)},deleteItem:function(t){this.$emit("clicked-delete",t)},newItem:function(){this.$emit("clicked-new")},onDrop:function(t){this.$emit("on-drop",t)}}},y=r(5),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{elevation:"0",outlined:"",loading:t.loading}},[e(c.d,{staticClass:"black--text",staticStyle:{"font-size":"16px"}},[t._v("\n    Kategoriler\n    "),e(f.a),t._v(" "),e(n.a,{staticClass:"text--primary",attrs:{color:"white",fab:"",small:"",dense:""},on:{click:t.newItem}},[e(d.a,[t._v("mdi-plus")])],1)],1),t._v(" "),e(l.a),t._v(" "),e("Container",{attrs:{"drag-handle-selector":".column-drag-handle","lock-axis":"y","drop-placeholder":t.dropPlaceholderOptions},on:{drop:t.onDrop}},t._l(t.items,(function(r){return e("Draggable",{key:r.id},[e("div",{staticClass:"draggable-item pt-5 pb-5"},[e("span",{staticClass:"column-drag-handle",staticStyle:{float:"left",padding:"0 10px"}},[e(d.a,{staticClass:"handle mt-0",attrs:{color:"red"}},[t._v("mdi-cursor-move")])],1),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"/categories/".concat(r.id)}},[t._v(" "+t._s(r.name))])],1),t._v(" "),e("span",{staticStyle:{float:"right","padding-right":"10px"}},[e(d.a,{staticClass:"handle mt-0",attrs:{color:"gray"},on:{click:function(e){return t.editItem(r)}}},[t._v("mdi-pencil")]),t._v(" "),e(d.a,{staticClass:"handle mt-0",attrs:{color:"gray"},on:{click:function(e){return t.deleteItem(r.id)}}},[t._v("mdi-delete")])],1)])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},938:function(t,e,r){"use strict";var n=r(2),o=(r(45),r(61),r(308),r(12),r(6),r(11),r(36),r(64),r(13),r(10),r(19),r(20),r(7)),c=r(107),l=r(130);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},939:function(t,e,r){"use strict";r(10),r(12),r(19),r(20);var n=r(2),o=(r(6),r(8),r(13),r(25),r(52),r(294),r(33),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(35),r(45),r(11),r(87),r(583),r(1)),c=r(66),l=r(0);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=h.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),v=h.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(v)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);if(!f){var h,m;for(m in f=[],O)O[m].forEach((function(t){var e=r[t],n=j(m,t,e);n&&f.push(n)}));var y=f.some((function(t){return t.startsWith("col-")}));f.push((h={col:!y||!r.cols},Object(n.a)(h,"col-".concat(r.cols),r.cols),Object(n.a)(h,"offset-".concat(r.offset),r.offset),Object(n.a)(h,"order-".concat(r.order),r.order),Object(n.a)(h,"align-self-".concat(r.alignSelf),r.alignSelf),h)),w.set(l,f)}return t(r.tag,Object(c.a)(data,{class:f}),o)}})},971:function(t,e,r){"use strict";r.r(e);r(312);var n={props:{breadcrumbItems:{type:Array,default:function(){return[]}}},data:function(){return{home:{icon:"pi pi-home",to:"/categories"}}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("Breadcrumb",{attrs:{home:t.home,model:t.breadcrumbItems}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);