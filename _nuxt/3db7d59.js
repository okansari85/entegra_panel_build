(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1029:function(t,e,n){"use strict";n.r(e);var o=n(191),l=n(890),c=n(911),r=n(1018),d=n(893),h=n(273),f=n(908),m=n(894),v=n(81),y=n(964),_=(n(25),n(120),n(8),n(940)),x={props:{headers:{type:Array,default:null},slots:{type:Array,default:null},items:{type:Array,default:function(){return[]}},title:{type:String,default:null},showExpand:{type:Boolean,default:!1},singleExpand:{type:Boolean,default:!1},keyOfItem:{type:String,default:null},loading:{type:Boolean,default:!1},searchPorperyt:{type:Boolean,default:!0},paginationShow:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},detailEnabled:{type:Boolean,default:!1},itemsLength:{type:Number,default:0},showSelect:{type:Boolean,default:!1},singleSelect:{type:Boolean,default:!0},showDeleteBtn:{type:Boolean,default:!0},showEditBtn:{type:Boolean,default:!0}},data:function(){return{selectedArray:[],search:"",expanded:[],footerProps:{"items-per-page-options":[5,10,15,100]},options:{page:1,itemsPerPage:5}}},watch:{options:{handler:function(){this.$emit("handle-options",this.options,this.search)},deep:!0},search:n.n(_).a.debounce((function(){this.options.page=1,this.$emit("handle-options",this.options,this.search)}),300)},methods:{itemselected:function(t){this.$emit("clicked-row",t.item),console.log(t.item)},rowClick:function(t,e){},loadDetails:function(t){this.$emit("row-click",t.item)},editItem:function(t){this.$emit("clicked-edit",t)},deleteItem:function(t){this.$emit("clicked-delete",t)},detItem:function(t){this.$emit("clicked-detail",t)}}},w=n(5),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"mx-auto",staticStyle:{"margin-top":"-64px"},attrs:{eager:"","max-width":"90%"}},[e(v.a,{attrs:{flat:""}},[e(y.a,{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(h.a)],1)]}}])},[t._v(" "),e("span",[t._v("asdasd")])]),t._v(" "),e(f.a),t._v(" "),e(m.a,{attrs:{eager:"","append-icon":"mdi-magnify",label:"Arama","single-line":"",clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(o.a,{attrs:{icon:""}},[e(h.a,[t._v("mdi-dots-vertical")])],1)],1),t._v(" "),e(d.a),t._v(" "),e(c.a),t._v(" "),e(r.a,{attrs:{"v-model":t.selectedArray,eager:"",loading:t.loading,headers:t.headers,items:t.items,search:t.search,"show-expand":t.showExpand,"single-expand":t.singleExpand,expanded:t.expanded,"item-key":t.keyOfItem,options:t.options,"server-items-length":t.itemsLength,"disable-pagination":t.disablePagination,"hide-default-footer":t.paginationShow,"footer-props":t.footerProps,showSelect:t.showSelect,"single-select":t.singleSelect},on:{"update:expanded":function(e){t.expanded=e},"update:options":function(e){t.options=e},"item-expanded":t.loadDetails,"click:row":t.rowClick,"item-selected":t.itemselected},scopedSlots:t._u([{key:"expanded-item",fn:function(n){var o=n.headers;return[e("td",{attrs:{colspan:o.length}},[t._t("expanded")],2)]}},t._l(t.slots,(function(slot){return{key:"item.".concat(slot.slotName),fn:function(e){var n=e.item;return[t._t(slot.slotName,null,{degisken:n})]}}})),{key:"item.actions",fn:function(n){var o=n.item;return[t.detailEnabled?e(h.a,{attrs:{small:""},on:{click:function(e){return t.detItem(o)}}},[t._v("mdi-eye")]):t._e(),t._v(" "),t.showEditBtn?e(h.a,{attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v("mdi-pencil")]):t._e(),t._v(" "),t.showDeleteBtn?e(h.a,{attrs:{small:""},on:{click:function(e){return t.deleteItem(o)}}},[t._v("mdi-delete")]):t._e()]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},929:function(t,e,n){var content=n(930);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("53887fd2",content,!0,{sourceMap:!1})},930:function(t,e,n){var o=n(14)((function(i){return i[1]}));o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:4px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),o.locals={},t.exports=o},964:function(t,e,n){"use strict";var o=n(2),l=(n(8),n(929),n(126)),c=n(30),r=n(200),d=n(136),h=n(242),f=n(0),m=n(21),v=n(7);e.a=Object(v.a)(c.a,r.a,d.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,l=0;return this.top||this.bottom||n?l=o+e.width/2-content.width/2:(this.left||this.right)&&(l=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(l-=parseInt(this.nudgeLeft)),this.nudgeRight&&(l+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(l,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})}}]);