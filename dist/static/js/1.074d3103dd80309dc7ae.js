webpackJsonp([1],{"/8of":function(t,s){},"1EOc":function(t,s,a){"use strict";var e=a("s0MJ"),i={data:function(){return{list:{data:[]}}},mounted:function(){var t=this,s=0,a=setInterval(function(){var e={pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊"+s,id:s};t.list.data.push(e),++s>10&&clearInterval(a)},100)},methods:{addshopcart:function(t){var s=this;e.a(t,function(){s.$store.state.shopCart.total++})}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("transition-group",{staticClass:"list-type-1",attrs:{name:"slide-right-10",tag:"div"}},t._l(t.list.data,function(s,e){return a("div",{key:s.id,staticClass:"list-item"},[a("router-link",{staticClass:"item-pic",attrs:{to:"/detail"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.pic,expression:"item.pic"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"item-info"},[a("div",{staticClass:"item-title"},[a("router-link",{attrs:{to:"/detail"}},[t._v(t._s(s.title))])],1),t._v(" "),a("p",[t._v("剂型：胶囊")]),t._v(" "),a("p",[t._v("规格：500mg/粒*90粒/瓶")]),t._v(" "),a("p",[t._v("生产企业：修正药业")]),t._v(" "),a("p",[t._v("库存："),a("span",[t._v("会员可见")])]),t._v(" "),a("p",[t._v("价格："),a("span",[t._v("会员可见")])])]),t._v(" "),a("div",{staticClass:"item-button"},[a("div",{staticClass:"button-bg",on:{click:function(s){t.$router.push("/shop")}}},[t._v("进入店铺")]),t._v(" "),a("div",{staticClass:"button-bg",on:{click:function(a){t.addshopcart(s.pic)}}},[t._v("加入购物车")]),t._v(" "),a("div",{staticClass:"button-nobg"},[a("i",{staticClass:"iconfont icon-dianpu"}),t._v("关注店铺")]),t._v(" "),a("div",{staticClass:"button-nobg"},[a("i",{staticClass:"iconfont icon-dianpu"}),t._v("收藏商品")])])],1)})),t._v(" "),a("div",{staticClass:"result-page"},[a("Page",{attrs:{total:100,"show-total":"","show-elevator":"","show-sizer":""}})],1)],1)},staticRenderFns:[]};var o=a("X4nt")(i,n,!1,function(t){a("/8of")},"data-v-7e6197c0",null);s.a=o.exports},"2D33":function(t,s){},"3HLV":function(t,s){},N3pO:function(t,s,a){"use strict";var e={data:function(){return{list:{loading:!0,data:[]}}},created:function(){},mounted:function(){var t=this;setTimeout(function(){t.createData()},2e3)},methods:{createData:function(){var t=this,s=0;this.list.loading=!1;var a=setInterval(function(){var e={pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊"+s,id:s};t.list.data.push(e),++s>11&&clearInterval(a)},10)},afterEnter:function(){console.log("动画完成")}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.list.loading?a("div",{staticClass:"list-type-2"},[t.list.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1):t._e(),t._v(" "),t.list.loading?t._e():a("transition-group",{staticClass:"list-type-2",attrs:{name:"cell",tag:"div"},on:{"after-cancelled":t.afterEnter}},t._l(t.list.data,function(s){return a("router-link",{key:s.id,staticClass:"goods-item",attrs:{to:"/detail"}},[a("div",{staticClass:"goods-pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.pic,expression:"item.pic"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"goods-title"},[t._v("\n                "+t._s(s.title)+"\n            ")]),t._v(" "),a("div",{staticClass:"goods-price"},[a("span",[t._v("500mg.粒*90粒/瓶")]),t._v(" "),a("span",{staticClass:"price"},[t._v("会员可见")])]),t._v(" "),a("div",{staticClass:"good-sales"},[a("span",{staticClass:"brand"},[t._v("修正药业")]),t._v(" "),a("span",{staticClass:"sales"},[t._v("月销量 7500笔")])])])})),t._v(" "),a("div",{staticClass:"result-page"},[a("Page",{attrs:{total:100,"show-total":"","show-elevator":"","show-sizer":""}})],1)],1)},staticRenderFns:[]};var n=a("X4nt")(e,i,!1,function(t){a("SUnA")},"data-v-fe0bbe42",null);s.a=n.exports},SUnA:function(t,s){},ZkPV:function(t,s,a){"use strict";var e={data:function(){return{list:{data:[]}}},mounted:function(){var t=this,s=0,a=setInterval(function(){var e={shoppic:"static/image/search/brand_logo.jpg",shoptitle:"绿森林π芦荟软胶囊",id:s,level:5,goods:[{pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊",id:s+"-1"},{pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊",id:s+"-2"},{pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊",id:s+"-2"},{pic:"static/image/search/result_good_pic.jpg",title:"绿森林π芦荟软胶囊",id:s+"-2"}]};t.list.data.push(e),++s>10&&clearInterval(a)},300)},methods:{}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("transition-group",{staticClass:"list-type-3",attrs:{name:"slide-bottom-10",tag:"div"}},t._l(t.list.data,function(s){return a("div",{key:s.id,staticClass:"shop-item"},[a("div",{staticClass:"shop-header"},[a("div",{staticClass:"shop-pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.shoppic,expression:"item.shoppic"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"shop-title"},[a("p",{staticClass:"title"},[t._v("\n                    "+t._s(s.shoptitle)+"\n                ")]),t._v(" "),a("p",[a("span",[t._v("会员等级：")]),a("Rate",{attrs:{disabled:""},model:{value:s.level,callback:function(a){t.$set(s,"level",a)},expression:"item.level"}})],1),t._v(" "),a("p",[t._v("\n                    起送金额：1000\n                ")])]),t._v(" "),a("div",{staticClass:"shop-button"},[a("div",{staticClass:"button-bg"},[t._v("进入店铺")])])]),t._v(" "),a("div",{staticClass:"shop-recommend"},[a("div",{staticClass:"recommend-title"},[t._v("\n                店铺热卖推荐\n            ")]),t._v(" "),a("div",{staticClass:"recommend-box"},t._l(s.goods,function(s){return a("router-link",{key:s.id,staticClass:"goods-item",attrs:{to:"/detail"}},[a("div",{staticClass:"goods-pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.pic,expression:"good.pic"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"goods-title"},[t._v("\n                        "+t._s(s.title)+"\n                    ")]),t._v(" "),a("div",{staticClass:"goods-price"},[a("span",[t._v("500mg.粒*90粒/瓶")]),t._v(" "),a("span",{staticClass:"price"},[t._v("会员可见")])]),t._v(" "),a("div",{staticClass:"good-sales"},[a("span",{staticClass:"brand"},[t._v("修正药业")]),t._v(" "),a("span",{staticClass:"sales"},[t._v("月销量 7500笔")])])])}))])])})),t._v(" "),a("div",{staticClass:"result-page"},[a("Page",{attrs:{total:100,"show-total":"","show-elevator":"","show-sizer":""}})],1)],1)},staticRenderFns:[]};var n=a("X4nt")(e,i,!1,function(t){a("3HLV")},"data-v-11ac60a0",null);s.a=n.exports},d1Q5:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("eglp"),i=a("1EOc"),n=a("N3pO"),o=a("ZkPV"),r=a("gK8R"),v={components:{ListType1:i.a,LeftAd:e.a,ListType2:n.a,ListType3:o.a,GoodsRecommend:r.a},data:function(){return{result:{listType:1}}},methods:{changeListType:function(t){this.result.listType=t}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"xjk-container xjk-b-top"},[a("Breadcrumb",{staticClass:"xjk-m-t-10",attrs:{separator:">"}},[a("BreadcrumbItem",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),a("BreadcrumbItem",{attrs:{to:"/components/breadcrumb"}},[t._v("药品")]),t._v(" "),a("BreadcrumbItem",[t._v("解热镇痛")])],1),t._v(" "),a("div",{staticClass:"xjk-search-category"},[a("div",{staticClass:"search-category-row"},[a("div",{staticClass:"category-label"},[t._v("\n                    品牌\n                ")]),t._v(" "),a("div",{staticClass:"category-button"},[a("Button",{staticClass:"active",attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")])],1)]),t._v(" "),a("div",{staticClass:"search-category-row"},[a("div",{staticClass:"category-label"},[t._v("\n                    分类\n                ")]),t._v(" "),a("div",{staticClass:"category-button"},[a("Button",{staticClass:"active",attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")])],1)]),t._v(" "),a("div",{staticClass:"search-category-row"},[a("div",{staticClass:"category-label"},[t._v("\n                    剂型\n                ")]),t._v(" "),a("div",{staticClass:"category-button"},[a("Button",{staticClass:"active",attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{staticClass:"active",attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")]),t._v(" "),a("Button",{attrs:{type:"text"}},[t._v("Text")])],1)])]),t._v(" "),a("div",{staticClass:"xjk-search-result"},[a("left-ad"),t._v(" "),a("div",{staticClass:"search-result-list"},[a("div",{staticClass:"list-bar"},[a("div",{staticClass:"button-item"},[t._v("\n                        默认排序\n                    ")]),t._v(" "),a("div",{staticClass:"button-item active"},[t._v("\n                        销量\n                        "),a("div",{staticClass:"up-down-icon"},[a("Icon",{attrs:{type:"android-arrow-dropup"}}),t._v(" "),a("Icon",{attrs:{type:"android-arrow-dropdown active"}})],1)]),t._v(" "),a("div",{staticClass:"button-item"},[t._v("\n                        价格\n                        "),a("div",{staticClass:"up-down-icon"},[a("Icon",{attrs:{type:"android-arrow-dropup"}}),t._v(" "),a("Icon",{attrs:{type:"android-arrow-dropdown"}})],1)]),t._v(" "),a("div",{staticClass:"button-item"},[t._v("\n                        信用\n                        "),a("div",{staticClass:"up-down-icon"},[a("Icon",{attrs:{type:"android-arrow-dropup"}}),t._v(" "),a("Icon",{attrs:{type:"android-arrow-dropdown"}})],1)]),t._v(" "),a("div",{staticClass:"button-item"},[a("Input",{staticStyle:{width:"70px"},attrs:{placeholder:"价格最低",size:"small"}}),t._v(" - \n                        "),a("Input",{staticStyle:{width:"70px"},attrs:{placeholder:"价格最高",size:"small"}}),t._v(" "),a("Button",{attrs:{type:"ghost",size:"small"}},[t._v("确定")])],1),t._v(" "),a("CheckboxGroup",[a("Checkbox",{attrs:{label:"是否促销"}}),t._v(" "),a("Checkbox",{attrs:{label:"是否医保"}}),t._v(" "),a("Checkbox",{attrs:{label:"是否首营"}})],1),t._v(" "),a("div",{staticClass:"list-style-button"},[a("div",{staticClass:"style-button",class:{active:1==t.result.listType},on:{click:function(s){t.changeListType(1)}}},[a("i",{staticClass:"iconfont icon-liebiao"}),t._v("列表\n                        ")]),t._v(" "),a("div",{staticClass:"style-button",class:{active:2==t.result.listType},on:{click:function(s){t.changeListType(2)}}},[a("i",{staticClass:"iconfont icon-datu01"}),t._v("大图\n                        ")]),t._v(" "),a("div",{staticClass:"style-button",class:{active:3==t.result.listType},on:{click:function(s){t.changeListType(3)}}},[a("i",{staticClass:"iconfont icon-dianpu"}),t._v("店铺\n                        ")])])],1),t._v(" "),a("div",{staticClass:"result-list"},[1==t.result.listType?a("list-type1"):t._e(),t._v(" "),2==t.result.listType?a("list-type2"):t._e(),t._v(" "),3==t.result.listType?a("list-type3"):t._e()],1)])],1),t._v(" "),a("goods-recommend")],1)])},staticRenderFns:[]};var l=a("X4nt")(v,c,!1,function(t){a("2D33")},"data-v-1250c0aa",null);s.default=l.exports}});
//# sourceMappingURL=1.074d3103dd80309dc7ae.js.map