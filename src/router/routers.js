const Index=resolve => require(['@/views/index/Index.vue'], resolve)
const Search=resolve => require(['@/views/search/Search.vue'], resolve)
const Detail=resolve => require(['@/views/detail/Detail.vue'], resolve)
const Order=resolve => require(['@/views/order/Order.vue'], resolve)
const OrderForm=resolve => require(['@/views/order/_OrderForm.vue'], resolve)
const OrderPay=resolve => require(['@/views/order/_OrderPay.vue'], resolve)
const Shopcart=resolve => require(['@/views/shopcart/Shopcart.vue'], resolve)
const Shop=resolve => require(['@/views/shop/Shop.vue'], resolve)
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
    { path: '/shop', component: Shop, name: '店铺详情' ,meta: { name:'',title:'店铺详情' }},
]

export default routers