<template>
    <div>
        <!-- 店铺banner -->
        <Carousel autoplay 
        :autoplay-speed='5000'
        >
            <CarouselItem>
                <div class="banner-item">
                    <img src="../../../static/image/shop/banner.png" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <div class="xjk-container xjk-b-top">
            <!--店铺 全部商品-->
            <div class="xjk-goods">
                <div>
                    <div class="shop-notice">
                        <div class="title">
                            <i class="iconfont icon-laba"></i>店铺公告
                        </div>
                        <div class="notice">
                            <router-link to="">
                                关于快递、物流春节停运及我公司放假通知
                            </router-link>
                            <span class="date">2018-01-26</span>
                        </div>
                    </div>
                    <div class="shop-category">
                        <div class="title">
                            <i class="iconfont icon-datu01"></i>商品分类
                        </div>
                        <div class="category">
                            <div class="item">
                                <router-link to="/shop/Goods?category=1">商品分类1</router-link>
                            </div>
                            <div class="item">
                                <router-link to="/shop/Goods?category=2">商品分类2</router-link>
                            </div>
                            <div class="item">
                                <router-link to="/shop/Goods?category=3">商品分类3</router-link>
                            </div>
                            <div class="item">
                                <router-link to="/shop/Goods?category=4">商品分类4</router-link>
                            </div>
                            <div class="item">
                                <router-link to="/shop/Goods?category=5">商品分类5</router-link>
                            </div>
                        </div>
                    </div>
                    <!--左侧广告商品-->
                    <left-ad/>
                </div>
                <!--店铺商品列表-->
                <goods-list/>
            </div>

            <!--推荐商品-->
            <goods-recommend/>
        </div>
    </div>
</template>

<script>
    import GoodsList from './shared/_shopGoodsList.vue'
    import LeftAd from '../search/_LeftAd'
    import GoodsRecommend from '../search/_goodsRecommend'
    export default {
        components:{
            LeftAd,GoodsList,GoodsRecommend,
        },
        data () {
            return {
            }
        },
        mounted(){
            document.documentElement.scrollTop=0
            document.body.scrollTop=0
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    
    .xjk-goods{
        display: flex;
        margin-top: 20px;
        .shop-category{
            margin: 0 0 10px 0;
            border: 1px solid #eee;
            width: 240px;
            .title{
                font-size: 16px;
                padding: 8px 10px;
                i{
                    color: $primary-color;
                    font-size:20px;
                    margin-right: 5px;
                }
            }
            .category{
                .item{
                    border-top: 1px solid #eee;
                    a{
                        color: $default-text-color;
                        display: inline-block;
                        padding: 8px 15px;
                        width: 100%;
                        height: 100%;
                        &:hover{
                            color: $primary-color
                        }
                    }
                    a.router-link-exact-active{
                        color: #fff;
                        background: $primary-color
                    }
                }
            };
            
        }
        .shop-notice{
            margin: 0 0 10px 0;
            border: 1px solid #eee;
            width: 240px;
            position: relative;
            .title{
                font-size: 16px;
                padding: 8px 10px;
                i{
                    color: $primary-color;
                    font-size:20px;
                    margin-right: 5px;
                }
            }
            .notice{
                padding: 10px 10px 50px 10px;
                position: relative;
                a{
                    color: $default-text-color;
                    &:hover{
                        color: $primary-color
                    }
                }
                .date{
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    color: #888;
                }
            }
            &:before{
                font-family: "iconfont" !important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                position: absolute;
                top: -16px;
                left: 20px;
                content: '\e608'
            }
            &:after{
                font-family: "iconfont" !important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                position: absolute;
                top: -16px;
                right: 20px;
                content: '\e608'
            }
        }
    }
</style>
