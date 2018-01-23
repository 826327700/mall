<template>
    <div class="left-ad-wrap">
        <div class="ad-title">
            商品精选
            <span>广告</span>
        </div>
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
                <img v-lazy="'static/image/index/ysg_gouqi.png'" alt="">
            </div>
            <div class="goods-title">
                Beryl/百瑞源 枸杞，中宁枸杞
            </div>
            <div class="goods-price">
                会员可见
            </div>
        </router-link>
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
    .left-ad-wrap{
        width: 240px;
        margin-right: 10px;
        border: 1px solid #eee;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        .ad-title{
            font-size: 16px;
            color: #333;
            padding: 5px 10px;
            span{
                font-size: 14px;
                float: right;
                color: #999;
            }
        }
        .goods-item{
            flex-shrink: 0;
            width: 100%;
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
                margin: 10px 0px;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .goods-price{
                width: 100%;
                color: #d25b5a
            }
            &:hover{
                outline: $secondary-color4 solid 1px;
            }
        }
    }
</style>
