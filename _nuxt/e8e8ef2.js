(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{915:function(t,e,o){var content=o(930);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("299327e2",content,!0,{sourceMap:!1})},929:function(t,e,o){"use strict";o(915)},930:function(t,e,o){var c=o(14)((function(i){return i[1]}));c.push([t.i,".hover-opacity[data-v-048d9661]{opacity:.5;transition:opacity .5s ease}.hover-opacity[data-v-048d9661]:hover{opacity:1}",""]),c.locals={},t.exports=c},936:function(t,e,o){"use strict";o.r(e);var c={props:{width:{type:String,default:40},grayScaledImage:{type:String,default:""},coloredImage:{type:String,default:""},ismarketProductMatched:{type:Boolean,default:!1}},data:function(){return{imageSrc:this.grayScaledImage}},methods:{changeImage:function(t){this.imageSrc=t&&1!=this.ismarketProductMatched?this.coloredImage:this.grayScaledImage},clickedLogo:function(){this.$emit("handle-logo-click")}}},r=(o(929),o(5)),component=Object(r.a)(c,(function(){var t=this;return(0,t._self._c)("img",{class:t.ismarketProductMatched?"":"hover-opacity",staticStyle:{cursor:"pointer",transition:"opacity 0.5s ease"},attrs:{src:t.ismarketProductMatched?t.coloredImage:t.imageSrc,alt:"Hover Image",width:t.width},on:{mouseover:function(e){return t.changeImage(!0)},mouseout:function(e){return t.changeImage(!1)},click:t.clickedLogo}})}),[],!1,null,"048d9661",null);e.default=component.exports}}]);