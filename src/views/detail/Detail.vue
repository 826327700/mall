<template>
    <div>
        <div class="xjk-container xjk-b-top">
            <Breadcrumb separator=">" class="xjk-m-t-10">
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/">品牌</BreadcrumbItem>
                <BreadcrumbItem to="/">修正药业</BreadcrumbItem>
                <BreadcrumbItem to="/">绿森林牌芦荟软胶囊</BreadcrumbItem>
            </Breadcrumb>

            <!--商品图片和基本信息-->
            <detail-header/>

            <!--商品详情和左侧栏-->
            <div class="xjk-detail-main">
                <div class="detail-left">
                    <div class="brand-box">
                        <div class="brand-logo">
                            <img src="static/image/brandlogo/brand_02.png" alt="">
                        </div>
                        <div class="brand-star">
                            <span>信用：</span><Rate disabled v-model="star"></Rate>
                        </div>
                        <div class="brand-button">
                            <span @click="goShop"><i class="iconfont icon-dianpu"></i>进入店铺</span>
                            <span><i class="iconfont icon-dianpu"></i>关注店铺</span>
                        </div>
                    </div>
                    <div class="shop-search">
                        <div class="title">
                            本店搜索
                        </div>
                        <div class="seach">
                            <input type="text">
                            <Icon type="ios-search"></Icon>
                        </div>
                        <div class="button">
                            <span>搜索</span>
                        </div>
                    </div>
                    <!--左侧广告商品-->
                    <left-ad/>
                </div>
                <div class="detail-main">
                    <detail-info/>
                </div>
            </div>

            <!--类似商品推荐-->
            <goods-recommend/>
        </div>
    </div>
</template>

<script>
    import DetailHeader from './_DetailHeader'
    import DetailInfo from './_DetailInfo'
    import GoodsRecommend from '../search/_goodsRecommend'
    import LeftAd from '../search/_LeftAd'
    export default {
        components:{
            DetailHeader,DetailInfo,GoodsRecommend,LeftAd
        },
        data () {
            return {
                star:5
            }
        },
        mounted(){
            document.documentElement.scrollTop=0
            document.body.scrollTop=0
        },
        methods: {
            goShop(){
                this.$router.push('/shop')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .xjk-detail-main{
        display: flex;
        .detail-left{
            width: 240px;
            .brand-box{
                border: 1px solid #eee;
                padding: 0 20px 20px 20px;
                .brand-logo{
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
                .brand-star{
                    span{
                        vertical-align: middle
                    }
                    text-align: center
                }
                .brand-button{
                    display: flex;
                    span{
                        flex: 1;
                        cursor: pointer;
                        color: $secondary-color3;
                        i{
                            margin-right: 5px;
                            color: #999;
                        };
                        &:hover{
                            i{
                                color: $secondary-color3;
                            }
                        }
                    }
                }
            };
            .shop-search{
                margin: 10px 0;
                border: 1px solid #eee;
                padding: 10px 20px 30px 20px;
                .title{
                    font-size: 16px;
                }
                .seach{
                    position: relative;
                    margin: 20px 10px;
                    input{
                        outline: none;
                        padding: 3px 30px 3px 10px;
                        width: 100%;
                    }
                    i{
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        font-size: 20px;

                    }
                };
                .button{
                    text-align: center;
                    span{
                        padding: 5px 20px;
                        background-color: $secondary-color3;
                        color: #fff;
                        border-radius: 3px;
                        cursor: pointer;
                        &:hover{
                            background-color:darken($secondary-color3,10%);
                        }
                    }
                }
            }
        }
        .detail-main{
            flex:1;
            margin-left: 10px;
        }
    }
</style>

