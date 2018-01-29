const Index=resolve => require(['@/views/index/Index.vue'], resolve)
const Search=resolve => require(['@/views/search/Search.vue'], resolve)
const Detail=resolve => require(['@/views/detail/Detail.vue'], resolve)
const Order=resolve => require(['@/views/order/Order.vue'], resolve)
const OrderForm=resolve => require(['@/views/order/_OrderForm.vue'], resolve)
const OrderPay=resolve => require(['@/views/order/_OrderPay.vue'], resolve)
const Shopcart=resolve => require(['@/views/shopcart/Shopcart.vue'], resolve)
const Shop=resolve => require(['@/views/shop/Shop.vue'], resolve)
const ShopIndex=resolve => require(['@/views/shop/ShopIndex.vue'], resolve)
const ShopGoods=resolve => require(['@/views/shop/ShopGoods.vue'], resolve)
const ShopNotice=resolve => require(['@/views/shop/ShopNotice.vue'], resolve)
const ShopNoticeDetail=resolve => require(['@/views/shop/ShopNoticeDetail.vue'], resolve)
const ShopAbout=resolve => require(['@/views/shop/ShopAbout.vue'], resolve)
const routers=[
    { path: '/', component: Index, name: '首页' ,meta: { name:'',title:'首页' }},
    { path: '/search', component: Search, name: '搜索' ,meta: { name:'',title:'搜索' }},
    { path: '/detail', component: Detail, name: '商品详情' ,meta: { name:'',title:'商品详情' }},
    { 
        path: '/order', 
        component: Order, 
        name: '立即购买' ,
        children:[
            {path: '/order', component: OrderForm, name: '立即购买',meta: { name:'',title:'立即购买',topType:'step',topStep:0 } },
            {path: '/pay', component: OrderPay, name: '立即付款',meta: { name:'',title:'立即付款',topType:'step',topStep:1 } }
        ]
    },
    { path: '/shopcart', component: Shopcart, name: '我的购物车' ,meta: { name:'',title:'我的购物车' }},
    { 
        path: '/shop', 
        component: Shop, 
        name: '店铺详情' ,
        meta: { name:'',title:'店铺详情',topType:'shop' } ,
        children:[
            {path: '/shop/:id', component: ShopIndex, name: '店铺首页',meta: { name:'',title:'店铺首页',topType:'shop' } },
            {path: '/shop/goods', component: ShopGoods, name: '店铺商品',meta: { name:'',title:'店铺商品',topType:'shop' } },
            {path: '/shop/notice', component: ShopNotice, name: '店铺公告',meta: { name:'',title:'店铺公告',topType:'shop' } },
            {path: '/shop/notice/:id', component: ShopNoticeDetail, name: '店铺公告详情',meta: { name:'',title:'店铺公告详情',topType:'shop' } },
            {path: '/shop/about', component: ShopAbout, name: '店铺-关于我们',meta: { name:'',title:'店铺-关于我们',topType:'shop' } }
        ]
    }
]

export default routers