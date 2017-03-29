webpackJsonp([0],{275:function(t,e,s){s(302);var n=s(169)(s(281),s(296),null,null);t.exports=n.exports},279:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"news-item",props:["item"]}},280:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"]}},281:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(291),i=s.n(n),o=s(290),r=s.n(o),a=function(t){return t.dispatch("FETCH_POSTS",{page:t.state.route.params.page})};e.default={name:"home-view",components:{Spinner:i.a,Item:r.a},props:{type:String},data:function(){return{title:null,content:null,loading:!1,transition:"slide-left",error:null}},computed:{posts:function(){return this.$store.state.posts.data},totalPage:function(){return Math.ceil(this.$store.state.posts.total/this.$store.state.posts.limit)},currentPage:function(){return Number(this.$store.state.route.params.page)||1}},methods:{onPostSubmit:function(){var t=this;this.$store.dispatch("ADD_NEW_POST",{title:this.title,content:this.content}).catch(function(e){401==e.code&&(t.error="You need to login to create new post.")}),this.title=null,this.content=null}},preFetch:a,beforeMount:function(){this.$root._isMounted&&a(this.$store)},watch:{$route:function(t,e){this.loading=!0,this.transition=t.params.page>e.params.page?"slide-left":"slide-right",a(this.$store),this.loading=!1}}}},284:function(t,e,s){e=t.exports=s(168)(void 0),e.push([t.i,".news-item{background-color:#fff;padding:20px 30px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item a{font-weight:700}.news-item .meta{color:#999}",""])},285:function(t,e,s){e=t.exports=s(168)(void 0),e.push([t.i,".spinner{position:fixed;z-index:999;right:15px;bottom:15px;transition:opacity .15s ease;animation:rotator 1.4s linear infinite;animation-play-state:paused}.spinner.show{animation-play-state:running}.spinner.v-enter,.spinner.v-leave-active{opacity:0}.spinner.v-enter-active,.spinner.v-leave{opacity:1}.spinner .path{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;-ms-transform-origin:center;transform-origin:center;animation:dash 1.4s ease-in-out infinite}@keyframes rotator{0%{transform:scale(.5) rotate(0deg)}to{transform:scale(.5) rotate(270deg)}}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;transform:rotate(135deg)}to{stroke-dashoffset:126;transform:rotate(450deg)}}",""])},288:function(t,e,s){e=t.exports=s(168)(void 0),e.push([t.i,".home-view{box-sizing:border-box;padding-top:45px}.box,.home-view{background-color:#fff}.box{padding:20px 30px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav a{margin:0 1em}.news-list-nav .disabled{color:#ccc}.news-list{position:absolute;margin:30px 0;width:100%;transition:all .5s cubic-bezier(.55,0,.1,1)}.slide-left-enter,.slide-right-leave-active{opacity:0;-ms-transform:translate(30px);transform:translate(30px)}.slide-left-leave-active,.slide-right-enter{opacity:0;-ms-transform:translate(-30px);transform:translate(-30px)}.item-enter-active,.item-leave-active,.item-move{transition:all .5s cubic-bezier(.55,0,.1,1)}.item-enter,.item-leave-active{opacity:0;-ms-transform:translate(30px);transform:translate(30px)}.item-leave-active{position:absolute;display:none}@media (max-width:600px){.news-list{margin:10px 0}}",""])},290:function(t,e,s){s(298);var n=s(169)(s(279),s(292),null,null);t.exports=n.exports},291:function(t,e,s){s(299);var n=s(169)(s(280),s(293),null,null);t.exports=n.exports},292:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-item"},[s("router-link",{attrs:{to:"/item/"+t.item._id}},[t._v(t._s(t.item.title))]),s("br"),s("span",{staticClass:"content",domProps:{innerHTML:t._s(t.item.content)}}),s("br"),s("div",{staticClass:"meta"},[t.item.authorInfo?s("span",{staticClass:"author"},[t._v("Posted by "+t._s(t.item.authorInfo.email))]):t._e(),s("span",[t._v(" at "+t._s(t._f("datetime")(t.item.createdAt)))])])],1)},staticRenderFns:[]}},293:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",[s("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[s("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},staticRenderFns:[]}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-view"},[s("spinner",{attrs:{show:t.loading}}),s("div",{staticClass:"box"},[s("h1",[t._v("Home")]),s("p",[t._v("Blogpost below")]),s("form",{on:{submit:function(e){e.preventDefault(),t.onPostSubmit(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"title",placeholder:"Post Title",autofocus:"",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"content",placeholder:"Post Content",required:""},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Submit")])]),t.error?s("pre",[t._v(t._s(t.error))]):t._e()]),s("div",{staticClass:"news-list-nav"},[t.currentPage>1?s("router-link",{attrs:{to:"/"+(t.currentPage-1)}},[t._v("< prev")]):s("a",{staticClass:"disabled"},[t._v("< prev")]),s("span",[t._v(t._s(t.currentPage)+"/"+t._s(t.totalPage))]),t.currentPage<t.totalPage?s("router-link",{attrs:{to:"/"+(t.currentPage+1)}},[t._v("more >")]):s("a",{staticClass:"disabled"},[t._v("more >")])],1),s("transition",{attrs:{name:t.transition}},[t.currentPage>0?s("div",{key:t.currentPage,staticClass:"news-list"},[s("transition-group",{attrs:{tag:"div",name:"item"}},t._l(t.posts,function(t){return s("item",{key:t._id,attrs:{item:t}})}))],1):t._e()])],1)},staticRenderFns:[]}},298:function(t,e,s){var n=s(284);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(170)("b13330d6",n,!0)},299:function(t,e,s){var n=s(285);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(170)("76d18c82",n,!0)},302:function(t,e,s){var n=s(288);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(170)("d21ce4e6",n,!0)}});