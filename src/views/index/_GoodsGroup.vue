<template>
    <div>
        <!--商品列表-->
            <div class="xjk-goods-group">
                <div class="left-ad-wrap">
                    <img v-lazy="'static/image/index/ysg.png'" alt="">
                </div>
                <div class="goods-grid">
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_gouqi.png'" alt="">
                        </div>
                        <div class="goods-title">
                            Beryl/百瑞源 枸杞，中宁枸杞
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_ejiao.png'" alt="">
                        </div>
                        <div class="goods-title">
                            【五月新货】山东东阿阿胶桃
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_kangmei.png'" alt="">
                        </div>
                        <div class="goods-title">
                            康美
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_fengmi.png'" alt="">
                        </div>
                        <div class="goods-title">
                            老字号 百花牌天然蜂蜜
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_shouxiangu.png'" alt="">
                        </div>
                        <div class="goods-title">
                            寿仙谷 破壁灵芝孢子粉
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_gouqi.png'" alt="">
                        </div>
                        <div class="goods-title">
                            Beryl/百瑞源 枸杞，中宁枸杞
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_ejiao.png'" alt="">
                        </div>
                        <div class="goods-title">
                            【五月新货】山东东阿阿胶桃
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_kangmei.png'" alt="">
                        </div>
                        <div class="goods-title">
                            康美
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_fengmi.png'" alt="">
                        </div>
                        <div class="goods-title">
                            老字号 百花牌天然蜂蜜
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                    <router-link to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="'static/image/index/ysg_shouxiangu.png'" alt="">
                        </div>
                        <div class="goods-title">
                            寿仙谷 破壁灵芝孢子粉
                        </div>
                        <div class="goods-price">
                            会员可见
                        </div>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
 .xjk-goods-group{
        margin: 20px 0;
        height: 535px;
        display: flex;
        background-color: #fff;
        border-top: 1px solid $primary-color;
        .left-ad-wrap{
            width: 250px;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                height: 100%;
                width: 100%;
                &[lazy="error"]{
                    height: auto;
                }
            }
        }
        .goods-grid{
            flex: 1;
            display: flex;
            flex-wrap:wrap;
            .goods-item{
                flex-shrink: 0;
                width: 20%;
                height: 50%;
                border-right: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 30px 10px;
                display: flex;
                flex-direction:column;
                align-items: center;
                color: $default-text-color;
                .goods-pic{
                    width: 140px;
                    height: 140px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    background-color: #f5f5f5;
                    img{
                        width: 100%;
                    }
                }
                .goods-title{
                    padding: 10px 0px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .goods-price{
                    width: 100%;
                    color: $secondary-color
                }
                &:hover{
                    outline: $secondary-color4 solid 1px;
                }
            }
        }
    }
</style>
