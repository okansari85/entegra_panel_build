(window.webpackJsonp=window.webpackJsonp||[]).push([[29,18],{1026:function(e,t,n){"use strict";n.r(t);var r=n(890),o=n(187),l=n(53),d=n(913),c=n(918),m=n(915),f=n(580),_=(n(13),n(10),n(12),n(6),n(19),n(11),n(20),n(2)),y=n(164);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={meta:{auth:{authority:1}},computed:v({},Object(y.c)({getorderscount:"siparisler/getorderscount",getordersperpage:"siparisler/getordersperpage",getallorders:"siparisler/getallorders",getordernew:"siparisler/getordernew"})),methods:v(v({},Object(y.b)({getOrders:"siparisler/getOrders",resetState:"siparisler/resetState"})),{},{formattedDate:function(e){return new Date(e).toLocaleDateString("tr-TR",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})},clickedEdit:function(e){},clickedDelete:function(e){},handleOptions:function(e,t){var n=this,r={search:t,page:e.page,per_page:e.itemsPerPage,status:this.status};this.loading=!0,this.getOrders(r).then((function(e){n.loading=!1}))},onTabClick:function(e){this.resetState(),0==e&&(this.status=1),1==e&&(this.status=2),2==e&&(this.status=3),3==e&&(this.status=4),this.handleOptions({page:1,itemsPerPage:15},"")}}),data:function(){return{tab:null,keyItem:"id",status:1,loading:!0,headers:[[{text:"Platform",value:"platformId"},{text:"Sipariş Bilgileri",value:"orderDate"},{text:"Müşteri Bilgileri",value:"buyer"},{text:"Kargo Bilgileri",value:"shippingCompanyName"}]],slots:[{Id:1,slotName:"shippingCompanyName"},{Id:2,slotName:"platformId"},{Id:3,slotName:"orderDate"},{Id:4,slotName:"buyer"}],title:["Yeni Siparişler (Teyit Edilecek)","Kargolanacak","Kargolandı","Tamamlandı"]}}},w=n(5),component=Object(w.a)(k,(function(){var e=this,t=e._self._c;return t("div",[t(m.a,{attrs:{"slider-color":"yellow","background-color":"transparent",color:"black","show-arrows":""},on:{change:function(t){return e.onTabClick(e.tab)}},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(d.a,[e._v("Yeni Sipariş")]),e._v(" "),t(d.a,[e._v("Kargolanacak")]),e._v(" "),t(d.a,[e._v("Kargolandı")]),e._v(" "),t(d.a,[e._v("Tamamlandı")])],1),e._v(" "),t(f.a,{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(c.a,{staticClass:"pt-2"},[t(r.a,[t("VuetifyDataTable",{ref:"dt",attrs:{headers:e.headers[0],loading:e.loading,items:e.getallorders,title:e.title[0],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.buyer.fullName))]),e._v(" "),t(l.b,[e._v(e._s(r.buyer.adresses[1].district)+" / "+e._s(r.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(e.formattedDate(r.orderDate)))]),e._v(" "),t(l.b,[e._v(e._s(r.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.shippingCompanyName))]),e._v(" "),t(l.b,[e._v(e._s(r.campaignNumber))])],1)],1)]}},{key:"platformId",fn:function(n){var r=n.degisken;return[t("span",[e._v(e._s("1"==r.platformId?"N11":"2"==r.platformId?"HB":"")+" ")])]}}])})],1)],1),e._v(" "),t(c.a,{staticClass:"pt-2"},[t(r.a,[t("VuetifyDataTable",{ref:"dta",attrs:{headers:e.headers[0],loading:e.loading,items:e.getallorders,title:e.title[1],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.buyer.fullName))]),e._v(" "),t(l.b,[e._v(e._s(r.buyer.adresses[1].district)+" / "+e._s(r.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(e.formattedDate(r.orderDate)))]),e._v(" "),t(l.b,[e._v(e._s(r.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.shippingCompanyName))]),e._v(" "),t(l.b,[e._v(e._s(r.campaignNumber))])],1)],1)]}},{key:"platformId",fn:function(n){var r=n.degisken;return[t("span",[e._v(e._s("1"==r.platformId?"N11":"2"==r.platformId?"HB":"")+" ")])]}}])})],1)],1),e._v(" "),t(c.a,{staticClass:"pt-2"},[t(r.a,[t("VuetifyDataTable",{ref:"dtb",attrs:{headers:e.headers[0],loading:e.loading,items:e.getallorders,title:e.title[2],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.buyer.fullName))]),e._v(" "),t(l.b,[e._v(e._s(r.buyer.adresses[1].district)+" / "+e._s(r.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(e.formattedDate(r.orderDate)))]),e._v(" "),t(l.b,[e._v(e._s(r.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.shippingCompanyName))]),e._v(" "),t(l.b,[e._v(e._s(r.campaignNumber))])],1)],1)]}},{key:"platformId",fn:function(n){var r=n.degisken;return[t("span",[e._v(e._s("1"==r.platformId?"N11":"2"==r.platformId?"HB":"")+" ")])]}}])})],1)],1),e._v(" "),t(c.a,{staticClass:"pt-2"},[t(r.a,[t("VuetifyDataTable",{ref:"dtc",attrs:{headers:e.headers[0],loading:e.loading,items:e.getallorders,title:e.title[3],"items-length":e.getorderscount,"key-of-item":e.keyItem,slots:e.slots},on:{"clicked-edit":e.clickedEdit,"clicked-delete":e.clickedDelete,"handle-options":e.handleOptions},scopedSlots:e._u([{key:"buyer",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.buyer.fullName))]),e._v(" "),t(l.b,[e._v(e._s(r.buyer.adresses[1].district)+" / "+e._s(r.buyer.adresses[1].city))])],1)],1)]}},{key:"orderDate",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(e.formattedDate(r.orderDate)))]),e._v(" "),t(l.b,[e._v(e._s(r.market_order_number))])],1)],1)]}},{key:"shippingCompanyName",fn:function(n){var r=n.degisken;return[t(o.a,{staticClass:"pa-0",attrs:{"two-line":""}},[t(l.a,[t(l.c,[e._v(e._s(r.shippingCompanyName))]),e._v(" "),t(l.b,[e._v(e._s(r.campaignNumber))])],1)],1)]}},{key:"platformId",fn:function(n){var r=n.degisken;return[t("span",[e._v(e._s("1"==r.platformId?"N11":"2"==r.platformId?"HB":"")+" ")])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VuetifyDataTable:n(941).default})},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return m}));var r=n(890),o=n(0),l=Object(o.j)("v-card__actions"),d=Object(o.j)("v-card__subtitle"),c=Object(o.j)("v-card__text"),m=Object(o.j)("v-card__title");r.a},941:function(e,t,n){"use strict";n.r(t);var r=n(890),o=n(888),l=n(1018),d=n(273),c=n(908),m=n(894),f=(n(24),n(120),n(8),n(940)),_={name:"VuetifyDataTable",props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:function(){return[]}},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},detailEnabled:{type:Boolean,default:!1},itemsLength:{type:Number,default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!0},showDeleteBtn:{type:Boolean,default:!0},showEditBtn:{type:Boolean,default:!0}},data:function(){return{selectedArray:[],search:"",expanded:[],footerProps:{"items-per-page-options":[5,10,15,100]},options:{page:1,itemsPerPage:15,status:0}}},watch:{options:{handler:function(){this.$emit("handle-options",this.options,this.search)},deep:!0},search:n.n(f).a.debounce((function(){this.options.page=1,this.$emit("handle-options",this.options,this.search)}),300)},methods:{itemselected:function(e){this.$emit("clicked-row",e.item),console.log(e.item)},rowClick:function(e,t){},loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)},detItem:function(e){this.$emit("clicked-detail",e)}}},y=n(5),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t(r.a,{staticClass:"mx-auto",attrs:{eager:"",outlined:""}},[e.searchPorperyt?t(o.d,[e._v("\n    "+e._s(e.title)+"\n    "),t(c.a),e._v(" "),t(c.a),e._v(" "),t(m.a,{attrs:{eager:"","append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),t(l.a,{attrs:{"v-model":e.selectedArray,eager:"",loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow,"disable-pagination":e.disablePagination,"server-items-length":e.itemsLength,options:e.options,"footer-props":e.footerProps,"show-select":e.showSelect,"single-select":e.singleSelect},on:{"update:expanded":function(t){e.expanded=t},"update:options":function(t){e.options=t},"item-expanded":e.loadDetails,"click:row":e.rowClick,"item-selected":e.itemselected},scopedSlots:e._u([{key:"expanded-item",fn:function(n){var r=n.headers;return[t("td",{attrs:{colspan:r.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item.".concat(slot.slotName),fn:function(t){var n=t.item;return[e._t(slot.slotName,null,{degisken:n})]}}})),{key:"item.actions",fn:function(n){var r=n.item;return[e.detailEnabled?t(d.a,{attrs:{small:""},on:{click:function(t){return e.detItem(r)}}},[e._v("\n        mdi-eye\n      ")]):e._e(),e._v(" "),e.showEditBtn?t(d.a,{attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n        mdi-pencil\n      ")]):e._e(),e._v(" "),e.showDeleteBtn?t(d.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n        mdi-delete\n      ")]):e._e()]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports}}]);