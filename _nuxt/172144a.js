(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(t,e,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("57a56b0b",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";var r=n(4),o=n(53).findIndex,c=n(93),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},235:function(t,e,n){"use strict";n(227)},236:function(t,e,n){var r=n(91)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.manga-image[data-v-659924e0]{\n  min-height:400px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},241:function(t,e,n){"use strict";n.r(e);var r=n(24),o=(n(30),n(168),n(234),n(45),n(26),n(44),n(65),n(36),n(66),n(0)),c=n(225),l=n.n(c),d=n(35),f=n(118);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=o.a.extend({components:{},data:function(){return{database:n(223)}},computed:{nameSlug:function(){return this.$route.params.name},identifierSlug:function(){return this.$route.params.number},manga:function(){var t=this.$route.params.name,e=l.a.find(this.database.mangas,{nameSlug:t});return e},chapter:function(){var t=this.$route.params.number,e=l.a.find(this.manga.chapters,{identifierSlug:t});return e},prevChapter:function(){var t,e,n,r=l.a.findIndex(this.manga.chapters,{identifierSlug:this.chapter.identifierSlug});return null===(n=null===(e=null===(t=this.manga)||void 0===t?void 0:t.chapters)||void 0===e?void 0:e[r+1])||void 0===n?void 0:n.identifierSlug},nextChapter:function(){var t,e,n,r=l.a.findIndex(this.manga.chapters,{identifierSlug:this.chapter.identifierSlug});return null===(n=null===(e=null===(t=this.manga)||void 0===t?void 0:t.chapters)||void 0===e?void 0:e[r-1])||void 0===n?void 0:n.identifierSlug}},mounted:function(){this.setState({nameSlug:this.nameSlug,identifierSlug:this.identifierSlug})},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({setState:f.SET_STATE}))}),v=m,x=(n(235),n(43)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col gap-4 max-w-3xl mx-auto py-8"},[n("nuxt-link",{staticClass:"p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4",attrs:{to:"/"+t.manga.nameSlug}},[t._v(t._s(t.manga.name))]),t._v(" "),t._l(t.chapter.images,(function(image){return n("img",{key:image.url,staticClass:"manga-image",attrs:{loading:"lazy",height:"400",src:image.url,alt:""}})})),t._v(" "),t.prevChapter?n("nuxt-link",{staticClass:"p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4",attrs:{to:""+t.prevChapter}},[n("span",[t._v("Anterior")])]):t._e(),t._v(" "),t.nextChapter?n("nuxt-link",{staticClass:"p-4 bg-purple-300 text-gray-900 rounded text-center font-bold mx-4",attrs:{to:""+t.nextChapter}},[n("span",[t._v("Proximo")])]):t._e()],2)}),[],!1,null,"659924e0",null);e.default=component.exports}}]);