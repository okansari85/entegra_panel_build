(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{950:function(t,e,n){"use strict";n.r(e);var o=n(191),l=n(901),r=n(899),c=n(904),d=n(273),m=n(919),f=(n(34),n(936)),h={components:{Container:f.Container,Draggable:f.Draggable},props:{items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},methods:{editItem:function(t){this.$emit("clicked-edit",t)},deleteItem:function(t){this.$emit("clicked-delete",t)},newItem:function(){this.$emit("clicked-new")},onDrop:function(t){this.$emit("on-drop",t)}}},v=n(5),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{elevation:"0",outlined:"",loading:t.loading}},[e(r.d,{staticClass:"black--text",staticStyle:{"font-size":"16px"}},[t._v("\n    Kategoriler\n    "),e(m.a),t._v(" "),e(o.a,{staticClass:"text--primary",attrs:{color:"white",fab:"",small:"",dense:""},on:{click:t.newItem}},[e(d.a,[t._v("mdi-plus")])],1)],1),t._v(" "),e(c.a),t._v(" "),e("Container",{attrs:{"drag-handle-selector":".column-drag-handle","lock-axis":"y","drop-placeholder":t.dropPlaceholderOptions},on:{drop:t.onDrop}},t._l(t.items,(function(n){return e("Draggable",{key:n.id},[e("div",{staticClass:"draggable-item pt-5 pb-5"},[e("span",{staticClass:"column-drag-handle",staticStyle:{float:"left",padding:"0 10px"}},[e(d.a,{staticClass:"handle mt-0",attrs:{color:"red"}},[t._v("mdi-cursor-move")])],1),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"/categories/".concat(n.id)}},[t._v(" "+t._s(n.name))])],1),t._v(" "),e("span",{staticStyle:{float:"right","padding-right":"10px"}},[e(d.a,{staticClass:"handle mt-0",attrs:{color:"gray"},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")]),t._v(" "),e(d.a,{staticClass:"handle mt-0",attrs:{color:"gray"},on:{click:function(e){return t.deleteItem(n.id)}}},[t._v("mdi-delete")])],1)])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);