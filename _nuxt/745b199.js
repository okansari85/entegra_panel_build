(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{888:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return f}));var o=n(890),l=n(0),d=Object(l.j)("v-card__actions"),r=Object(l.j)("v-card__subtitle"),c=Object(l.j)("v-card__text"),f=Object(l.j)("v-card__title");o.a},941:function(e,t,n){"use strict";n.r(t);var o=n(890),l=n(888),d=n(1018),r=n(273),c=n(908),f=n(894),m=(n(24),n(120),n(8),n(940)),h={name:"VuetifyDataTable",props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:function(){return[]}},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},detailEnabled:{type:Boolean,default:!1},itemsLength:{type:Number,default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!0},showDeleteBtn:{type:Boolean,default:!0},showEditBtn:{type:Boolean,default:!0}},data:function(){return{selectedArray:[],search:"",expanded:[],footerProps:{"items-per-page-options":[5,10,15,100]},options:{page:1,itemsPerPage:5}}},watch:{options:{handler:function(){this.$emit("handle-options",this.options,this.search)},deep:!0},search:n.n(m).a.debounce((function(){this.options.page=1,this.$emit("handle-options",this.options,this.search)}),300)},methods:{itemselected:function(e){this.$emit("clicked-row",e.item),console.log(e.item)},rowClick:function(e,t){},loadDetails:function(e){this.$emit("row-click",e.item)},editItem:function(e){this.$emit("clicked-edit",e)},deleteItem:function(e){this.$emit("clicked-delete",e)},detItem:function(e){this.$emit("clicked-detail",e)}}},y=n(5),component=Object(y.a)(h,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"mx-auto",attrs:{eager:"",outlined:""}},[e.searchPorperyt?t(l.d,[e._v("\n    "+e._s(e.title)+"\n    "),t(c.a),e._v(" "),t(c.a),e._v(" "),t(f.a,{attrs:{eager:"","append-icon":"mdi-magnify",label:"Arama","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),e._v(" "),t(d.a,{attrs:{"v-model":e.selectedArray,eager:"",loading:e.loading,headers:e.headers,items:e.items,search:e.search,"show-expand":e.showExpand,"single-expand":e.singleExpand,expanded:e.expanded,"item-key":e.keyOfItem,"hide-default-footer":e.paginationShow,"disable-pagination":e.disablePagination,"server-items-length":e.itemsLength,options:e.options,"footer-props":e.footerProps,"show-select":e.showSelect,"single-select":e.singleSelect},on:{"update:expanded":function(t){e.expanded=t},"update:options":function(t){e.options=t},"item-expanded":e.loadDetails,"click:row":e.rowClick,"item-selected":e.itemselected},scopedSlots:e._u([{key:"expanded-item",fn:function(n){var o=n.headers;return[t("td",{attrs:{colspan:o.length}},[e._t("expanded")],2)]}},e._l(e.slots,(function(slot){return{key:"item.".concat(slot.slotName),fn:function(t){var n=t.item;return[e._t(slot.slotName,null,{degisken:n})]}}})),{key:"item.actions",fn:function(n){var o=n.item;return[e.detailEnabled?t(r.a,{attrs:{small:""},on:{click:function(t){return e.detItem(o)}}},[e._v("\n        mdi-eye\n      ")]):e._e(),e._v(" "),e.showEditBtn?t(r.a,{attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n        mdi-pencil\n      ")]):e._e(),e._v(" "),e.showDeleteBtn?t(r.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")]):e._e()]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports}}]);