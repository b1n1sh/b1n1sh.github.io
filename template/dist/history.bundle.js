(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1348:function(t,e,i){"use strict";var s=i(928);i.n(s).a},1349:function(t,e,i){"use strict";var s=i(929);i.n(s).a},1369:function(t,e,i){"use strict";i.r(e);var s=i(1),o=i.n(s),r=i(71),n=i(23),a=i(0),c={props:{item:{type:Object,default:function(){return{}}},pos:{type:Number,default:0}},methods:{tapDelete:function(){this.$emit("tap:delete",this.item,this.pos)},tapItem:function(){this.$emit("tap:item",this.item,this.pos)}}},l=(i(1348),i(29)),h=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line history__line",on:{click:t.tapItem}},[i("div",{staticClass:"line__item"},[i("div",{staticClass:"history__icon"},[i("svg-icon",{staticClass:"history__icon-clock",attrs:{name:"clock"}})],1)]),t._v(" "),i("div",{staticClass:"line__item primary history__info line"},[i("p",{staticClass:"history__title"},[t._v("\n      "+t._s(t.item.hotword)+"\n    ")]),t._v(" "),t.item.jumpUrl?i("p",{staticClass:"history__sub"},[t._v("\n      "+t._s(t.item.jumpUrl)+"\n    ")]):t._e()]),t._v(" "),i("div",{staticClass:"line__item"},[i("div",{staticClass:"history__delete",on:{touchstart:function(t){t.stopPropagation()},click:function(e){return e.stopPropagation(),e.preventDefault(),t.tapDelete(e)}}},[i("svg-icon",{staticClass:"history__delete-icon",attrs:{name:"cross"}})],1)])])}),[],!1,null,null,null).exports,p=i(50),u=i(4),d=i(5);function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){o()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={components:{"history-item":h},mixins:[a.h],data:function(){return{historyList:[],showDelete:!1}},computed:{localStorageKey:function(){return a.b.scene===u.e.scene.VERTICAL?"history".concat(a.b.type):"history0"}},created:function(){var t=this,e=this;p.b.onHisReady((function(e){if(p.a.delHis({isDeleteAll:1}),e.data&&e.data.length&&e.data[0].items.length){var i=e.data[0].items.map((function(t){return{hotword:t.word,id:a.e.generateGuuId().substring(0,13)}}));t.historyList=i,a.c.store(t.localStorageKey,i)}})),e.getData(),d.a.$on(d.b.GO_TO_HISTORY,(function(){e.getData()}))},methods:{getData:function(){var t=a.c.getStore(this.localStorageKey);this.historyList=t||[],this.showDelete=this.historyList.length,this.historyList.length?p.a.delHis({isDeleteAll:1}):p.a.getHis({scene:a.b.scene})},tapDeleteAll:function(){this.historyList=[],this.showDelete=!1,a.c.remove(this.localStorageKey),p.a.delHis({isDeleteAll:1});var t=[2,"",a.b.scene,0].join(",");p.a.kvReport({logId:14884,logString:t})},tapDelete:function(t,e){var i=this.historyList.splice(e,1)[0];this.historyList.length||(this.showDelete=!1);var s=this.localStorageKey,o=a.c.getStore(s);o&&o.length&&(o.forEach((function(t,e){t.id==i.id&&o.splice(e,1)})),a.c.store(s,o)),p.a.delHis({isDeleteAll:0,query:t.word});var c=["1",encodeURIComponent(i.hotword),a.b.scene,(t.showType||0)+1].join(",");p.a.kvReport({logId:14884,logString:c}),Object(n.c)(r.a.detail.history.hisDel)},tapItem:function(t){p.a.setInputBar({query:t.hotword,isInputChange:!1}),a.b.setValue({query:t.hotword,searchId:""}),t.showType?p.a.openView(_(_({},a.b.getBase()),{},{actionType:8,jumpUrl:t.jumpUrl,query:t.hotword})):d.a.$emit(d.b.GOTO,{page:u.d.RESULT,query:t.hotword,action:u.g.HISTORY,searchId:"",extReqParams:{key:"parentSearchID",textValue:this.M_composeParentSid({t:u.h.SEARCH_HISTORY,did:t.hotword})}});var e=["3",encodeURIComponent(t.hotword),a.b.scene,(t.showType||0)+1].join(",");p.a.kvReport({logId:14884,logString:e}),Object(n.c)(r.a.detail.history.his)}}},f=(i(1349),Object(l.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history-page"},[i("div",t._l(t.historyList,(function(e,s){return i("history-item",{key:s,attrs:{item:e,pos:s},on:{"tap:delete":t.tapDelete,"tap:item":t.tapItem}})})),1),t._v(" "),t.showDelete?i("div",{staticClass:"history__clear-all",on:{click:t.tapDeleteAll}},[i("svg-icon",{staticClass:"history__clear-icon",attrs:{name:"trashcan"}}),t._v(" "),i("span",{staticClass:"history__clear-text"},[t._v("清除历史")])],1):t._e()])}),[],!1,null,null,null));e.default=f.exports},928:function(t,e,i){},929:function(t,e,i){}}]);