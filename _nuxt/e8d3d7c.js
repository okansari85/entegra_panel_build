(window.webpackJsonp=window.webpackJsonp||[]).push([[31,20],{1039:function(e,t,r){"use strict";r.r(t);var n=r(895),o=r(273),l=r(188),d=r(53),c=r(918),m=r(923),f=r(920),_=r(582),v=(r(589),r(15),r(10),r(12),r(6),r(19),r(11),r(20),r(2)),y=r(165);r(976);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={meta:{auth:{authority:1}},computed:k({},Object(y.c)({getorderscount:"siparisler/getorderscount",getordersperpage:"siparisler/getordersperpage",getallorders:"siparisler/getallorders",getordernew:"siparisler/getordernew"})),methods:k(k({},Object(y.b)({getOrders:"siparisler/getOrders",resetState:"siparisler/resetState"})),{},{formattedDate:function(e){var t=new Date(e);return e?t.toLocaleDateString("tr-TR",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}):""},clickedEdit:function(e){},clickedDelete:function(e){},confirmCompleted:function(){this.handleOptions({page:1,itemsPerPage:15},"")},handleOptions:function(e,t){var r=this,n={search:t,page:e.page,per_page:e.itemsPerPage,status:this.status};this.loading=!0,this.getOrders(n).then((function(e){r.loading=!1}))},showTeyitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.siparisText=e.market_order_number+" - "+this.formattedDate(e.orderDate)+" - "+e.buyer.fullName,this.$refs.teyitForm.showModal(e)},onTabClick:function(e){this.resetState(),0==e&&(this.status=1),1==e&&(this.status=2),2==e&&(this.status=3),3==e&&(this.status=4),this.handleOptions({page:1,itemsPerPage:15},"")}}),data:function(){return{tab:null,keyItem:"id",status:1,loading:!0,siparisText:"",headers:[[{text:"Platform",value:"platformId"},{text:"Sipariş Bilgileri",value:"orderDate"},{text:"Müşteri Bilgileri",value:"buyer"},{text:"Ürün Bilgileri",value:"items"},{text:"Kargo Bilgileri",value:"shippingCompanyName"},{text:"Sipariş Tutaru",value:"dueAmount"},{text:"Teyitli mi",value:"is_confirmed"}],[{text:"Platform",value:"platformId"},{text:"Sipariş Bilgileri",value:"orderDate"},{text:"Müşteri Bilgileri",value:"buyer"},{text:"Ürün Bilgileri",value:"items"},{text:"Kargo Bilgileri",value:"shippingCompanyName"},{text:"Sipariş Tutaru",value:"dueAmount"}],[{text:"Platform",value:"platformId"},{text:"Sipariş Bilgileri",value:"orderDate"},{text:"Müşteri Bilgileri",value:"buyer"},{text:"Ürün Bilgileri",value:"items"},{text:"Kargo Bilgileri",value:"shippingCompanyName"},{text:"Kargolanma Tarihi",value:"shippedDate"},{text:"Sipariş Tutaru",value:"dueAmount"}],[{text:"Platform",value:"platformId"},{text:"Sipariş Bilgileri",value:"orderDate"},{text:"Müşteri Bilgileri",value:"buyer"},{text:"Ürün Bilgileri",value:"items"},{text:"Kargo Bilgileri",value:"shippingCompanyName"},{text:"Kargolanma Tarihi",value:"shippedDate"},{text:"Sipariş Tutaru",value:"dueAmount"}]],slots:[{Id:1,slotName:"shippingCompanyName"},{Id:2,slotName:"platformId"},{Id:3,slotName:"orderDate"},{Id:4,slotName:"buyer"},{Id:5,slotName:"dueAmount"},{Id:6,slotName:"items"},{Id:7,slotName:"is_confirmed"},{Id:8,slotName:"shippedDate"}],title:["Yeni Siparişler (Teyit Edilecek)","Kargolanacak","Kargolandı","Tamamlandı"]}}},w=x,C=r(5),component=Object(C.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t("TeyitForm",{ref:"teyitForm",attrs:{"mdl-text":e.siparisText},on:{completed:function(t){return e.confirmCompleted()}}}),e._v(" "),t(f.a,{attrs:{"slider-color":"yellow","background-color":"transparent",color:"black","show-arrows":""},on:{change:function(t){return e.onTabClick(e.tab)}},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(c.a,[e._v("Yeni Sipariş")]),e._v(" "),t(c.a,[e._v("Kargolanacak")]),e._v(" "),t(c.a,[e._v("Kargolandı")]),e._v(" "),t(c.a,[e._v("Tamamlandı")])],1),e._v(" "),t(_.a,{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(m.a,{staticClass:"pt-2"},[t(n.a,[t("VuetifyDataTable",{ref:"dt",attrs:{headers:e.headers[0],loading:e.loading,items:e.getallorders,title:e.title[0],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.buyer.fullName))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(n.buyer.adresses[1].district)+" / "+e._s(n.buyer.adresses[1].city)+"\n                ")])],1)],1)]}},{key:"orderDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(e.formattedDate(n.orderDate)))]),e._v(" "),t(d.b,[e._v(e._s(n.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.shippingCompanyName))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(n.campaignNumber)+"\n                ")])],1)],1)]}},{key:"items",fn:function(r){var n=r.degisken;return e._l(n.items,(function(r){return t(l.a,{key:r.id,staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(r.orderable.productSellerCode)+e._s(r.orderable.merchantSku)+" x "+e._s(r.orderable.quantity))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(r.orderable.productName)+"\n                ")])],1)],1)}))}},{key:"dueAmount",fn:function(r){var n=r.degisken;return[t("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[t("b",[e._v(e._s(parseFloat(n.dueAmount).toFixed(2)))])])]}},{key:"platformId",fn:function(r){var n=r.degisken;return[t("span",[e._v(e._s("1"==n.platformId?"N11":"2"==n.platformId?"HB":"")+" ")])]}},{key:"is_confirmed",fn:function(r){var n=r.degisken;return["0"==n.is_confirmed?t(o.a,{attrs:{color:"red",large:""},on:{click:function(t){return e.showTeyitForm(n)}}},[e._v("\n              mdi-alert-circle\n            ")]):e._e(),e._v(" "),"1"==n.is_confirmed?t(o.a,{attrs:{color:"green",large:""},on:{click:function(t){return e.showTeyitForm(n)}}},[e._v("\n              mdi-check\n            ")]):e._e()]}}])})],1)],1),e._v(" "),t(m.a,{staticClass:"pt-2"},[t(n.a,[t("VuetifyDataTable",{ref:"dta",attrs:{headers:e.headers[1],loading:e.loading,items:e.getallorders,title:e.title[1],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.buyer.fullName))]),e._v(" "),t(d.b,[e._v(e._s(n.buyer.adresses[1].district)+" / "+e._s(n.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(e.formattedDate(n.orderDate)))]),e._v(" "),t(d.b,[e._v(e._s(n.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.shippingCompanyName))]),e._v(" "),t(d.b,[e._v(e._s(n.campaignNumber))])],1)],1)]}},{key:"items",fn:function(r){var n=r.degisken;return e._l(n.items,(function(r){return t(l.a,{key:r.id,staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(r.orderable.productSellerCode)+e._s(r.orderable.merchantSku)+" x "+e._s(r.orderable.quantity))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(r.orderable.productName)+"\n                ")])],1)],1)}))}},{key:"platformId",fn:function(r){var n=r.degisken;return[t("span",[e._v(e._s("1"==n.platformId?"N11":"2"==n.platformId?"HB":"")+" ")])]}},{key:"dueAmount",fn:function(r){var n=r.degisken;return[t("span",{staticStyle:{"font-weight":"bold"}},[t("b",[e._v(e._s(n.dueAmount))])])]}}])})],1)],1),e._v(" "),t(m.a,{staticClass:"pt-2"},[t(n.a,[t("VuetifyDataTable",{ref:"dtb",attrs:{headers:e.headers[2],loading:e.loading,items:e.getallorders,title:e.title[2],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.buyer.fullName))]),e._v(" "),t(d.b,[e._v(e._s(n.buyer.adresses[1].district)+" / "+e._s(n.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(e.formattedDate(n.orderDate)))]),e._v(" "),t(d.b,[e._v(e._s(n.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"three-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.shippingCompanyName))]),e._v(" "),t(d.b,[e._v(e._s(n.campaignNumber))])],1)],1)]}},{key:"platformId",fn:function(r){var n=r.degisken;return[t("span",[e._v(e._s("1"==n.platformId?"N11":"2"==n.platformId?"HB":"")+" ")])]}},{key:"items",fn:function(r){var n=r.degisken;return e._l(n.items,(function(r){return t(l.a,{key:r.id,staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(r.orderable.productSellerCode)+e._s(r.orderable.merchantSku)+" x "+e._s(r.orderable.quantity))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(r.orderable.productName)+"\n                ")])],1)],1)}))}},{key:"shippedDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"three-line":""}},[t(d.a,[t(d.b,[e._v(e._s(e.formattedDate(n.shippedDate)))])],1)],1)]}},{key:"dueAmount",fn:function(r){var n=r.degisken;return[t("span",{staticStyle:{"font-weight":"bold"}},[t("b",[e._v(e._s(n.dueAmount))])])]}}])})],1)],1),e._v(" "),t(m.a,{staticClass:"pt-2"},[t(n.a,[t("VuetifyDataTable",{ref:"dtc",attrs:{headers:e.headers[3],loading:e.loading,items:e.getallorders,title:e.title[3],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.buyer.fullName))]),e._v(" "),t(d.b,[e._v(e._s(n.buyer.adresses[1].district)+" / "+e._s(n.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(e.formattedDate(n.orderDate)))]),e._v(" "),t(d.b,[e._v(e._s(n.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"three-line":""}},[t(d.a,[t(d.c,[e._v(e._s(n.shippingCompanyName))]),e._v(" "),t(d.b,[e._v(e._s(n.campaignNumber)+" ")])],1)],1)]}},{key:"shippedDate",fn:function(r){var n=r.degisken;return[t(l.a,{staticClass:"pa-0",attrs:{"three-line":""}},[t(d.a,[t(d.b,[e._v(e._s(e.formattedDate(n.shippedDate))+" ")])],1)],1)]}},{key:"platformId",fn:function(r){var n=r.degisken;return[t("span",[e._v(e._s("1"==n.platformId?"N11":"2"==n.platformId?"HB":"")+" ")])]}},{key:"items",fn:function(r){var n=r.degisken;return e._l(n.items,(function(r){return t(l.a,{key:r.id,staticClass:"pa-0",attrs:{"two-line":""}},[t(d.a,[t(d.c,[e._v(e._s(r.orderable.productSellerCode)+e._s(r.orderable.merchantSku)+" x "+e._s(r.orderable.quantity))]),e._v(" "),t(d.b,{staticClass:"text-wrap"},[e._v("\n                  "+e._s(r.orderable.productName)+"\n                ")])],1)],1)}))}},{key:"dueAmount",fn:function(r){var n=r.degisken;return[t("span",{staticStyle:{"font-weight":"bold"}},[t("b",[e._v(e._s(parseFloat(n.dueAmount).toFixed(2)))])])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TeyitForm:r(976).default,VuetifyDataTable:r(947).default})},893:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return m}));var n=r(895),o=r(0),l=Object(o.j)("v-card__actions"),d=Object(o.j)("v-card__subtitle"),c=Object(o.j)("v-card__text"),m=Object(o.j)("v-card__title");n.a},947:function(e,t,r){"use strict";r.r(t);var n=r(895),o=r(893),l=r(1031),d=r(273),c=r(913),m=r(899),f=(r(25),r(120),r(8),r(946)),_={name:"VuetifyDataTable",props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:function(){return[]}},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},detailEnabled:{type:Boolean,default:!1},itemsLength:{type:Number,default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!0},showDeleteBtn:{type:Boolean,default:!0},showEditBtn:{type:Boolean,default:!0}},data:function(){return{selectedArray:[],search:"",expanded:[],footerProps:{"items-per-page-options":[5,10,15,100]},options:{page:1,itemsPerPage:15,status:0}}},watch:{options:{handler:function(){this.$emit("handle-options",this.options,this.search)},deep:!0},search:r.n(f).a.debounce((function(){this.options.page=1,this.$emit("handle-options",this.options,this.search)}),300)},methods:{itemselected:function(e){this.$emit("clicked-row",e.item),console.log(e.item)},rowClick:function(e,t){},loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)},detItem:function(e){this.$emit("clicked-detail",e)}}},v=r(5),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;return t(n.a,{staticClass:"mx-auto",attrs:{eager:"",outlined:""}},[e.searchPorperyt?t(o.d,[e._v("\n    "+e._s(e.title)+"\n    "),t(c.a),e._v(" "),t(c.a),e._v(" "),t(m.a,{attrs:{eager:"","append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),t(l.a,{attrs:{"v-model":e.selectedArray,eager:"",loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow,"disable-pagination":e.disablePagination,"server-items-length":e.itemsLength,options:e.options,"footer-props":e.footerProps,"show-select":e.showSelect,"single-select":e.singleSelect},on:{"update:expanded":function(t){e.expanded=t},"update:options":function(t){e.options=t},"item-expanded":e.loadDetails,"click:row":e.rowClick,"item-selected":e.itemselected},scopedSlots:e._u([{key:"expanded-item",fn:function(r){var n=r.headers;return[t("td",{attrs:{colspan:n.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item.".concat(slot.slotName),fn:function(t){var r=t.item;return[e._t(slot.slotName,null,{degisken:r})]}}})),{key:"item.actions",fn:function(r){var n=r.item;return[e.detailEnabled?t(d.a,{attrs:{small:""},on:{click:function(t){return e.detItem(n)}}},[e._v("\n        mdi-eye\n      ")]):e._e(),e._v(" "),e.showEditBtn?t(d.a,{attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n        mdi-pencil\n      ")]):e._e(),e._v(" "),e.showDeleteBtn?t(d.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n        mdi-delete\n      ")]):e._e()]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports}}]);