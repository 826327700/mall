<template>
    <div class="xjk-detail-header">
        <div class="detail-header-left">
            <div class="detail-pic-box">
                <pic-zoom :url="'static/image/detail/detail_pic.jpg'" :scale="3"></pic-zoom>
            </div>
            <div class="detail-thumb-box">
                <div class="thumb-item">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
                <div class="thumb-item">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
                <div class="thumb-item">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
                <div class="thumb-item">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
                <div class="thumb-item">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
            </div>
            <div class="text-button">
                <span><i class="iconfont icon-fenxiang-tianchong"></i>分享商品</span>
                <span><i class="iconfont icon-shoucang"></i>收藏商品</span>
            </div>
        </div>
        <div class="detail-header-right">
            <div class="detail-title">
                <h3>修正 绿森林牌芦荟软胶囊 500mg/粒*90粒/瓶</h3>
                <div class="label-row">
                    <span class="label">生产厂商</span>
                    <span>修正药业</span>
                </div>
                <div class="label-row">
                    <span class="label">服务</span>
                    <span>由 安徽华源医药股份有限公司 发货并提供售后服务</span>
                </div>
                <div class="label-row">
                    <span class="label">批准文号</span>
                    <span>国食健字G20100447</span>
                </div>
            </div>
            <div class="detail-other">
                <div class="label-row">
                    <span class="label">单价</span>
                    <span class="price">会员可见</span>
                </div>
                <div class="label-row">
                    <span class="label">规格</span>
                    <div class="spec-select">
                        <div class="option active">500mg/粒*90粒/瓶</div>
                        <div class="option">500mg/粒*90粒/瓶</div>
                    </div>
                </div>
                <div class="label-row">
                    <span class="label">数量</span>
                    <span><InputNumber :max="100" :min="1" :step="1"></InputNumber></span>
                </div>
                <div class="label-row xjk-m-t-20">
                    <span class="label"></span>
                    <div class="button-wrap">
                        <div class="buy-button" @click="order">
                            购买商品
                        </div>
                        <div class="car-button" @click="addToCart($event,'static/image/detail/detail_pic.jpg')">
                            加入购物车
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PicZoom from 'vue-piczoom'
    import * as util from '@/common/util'
    export default {
        components:{
            PicZoom
        },
        data () {
            return {
                add:false
            }
        },
        methods: {
            order(){
                this.$router.push('/order')
            },
            addToCart(event,src){
                util.addcart(event,src)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .xjk-detail-header{
        margin: 20px 0 10px 0; 
        border: 1px solid #eee;
        display: flex;
        .detail-header-left{
            width: 415px;
            .detail-pic-box{
                width: 415px;
                height: 415px;
                border-right: 1px solid #eee;
                border-bottom: 1px solid #eee;
            };
            .detail-thumb-box{
                display: flex;
                padding: 10px 0 20px 0;
                .thumb-item{
                    width: 20%;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    border: 1px solid transparent;
                    &:hover{
                        border: 1px solid $secondary-color4;
                    };
                    img{
                        width: 100%;
                    }
                }
            };
            .text-button{
                padding: 5px 15px;
                color: #888;
                span{
                    cursor: pointer;
                    &:hover{
                        color: $default-text-color
                    }
                };
                i{
                    margin-right: 5px;
                    vertical-align: middle;
                }
            }
        }
        .detail-header-right{
            flex:1;
            padding:0 30px;
            .detail-title{
                border-bottom: 1px dashed #ddd;
                padding-bottom: 20px;
                h3{
                    margin: 20px 0;
                }
            }
            .label-row{
                display: flex;
                align-items: center;
                padding: 5px 0;
                .label{
                    width: 72px;
                    color: #888;
                };
                .price{
                    color: $secondary-color;
                };
                .spec-select{
                    display: flex;
                    .option{
                        display: block;
                        cursor: pointer;
                        padding: 3px 20px;
                        border: 1px solid #ddd;
                        position: relative;
                        &:hover{
                            border: 1px solid $secondary-color4;
                        }
                        &+.option{
                            margin-left: 10px;
                        }
                        &.active{
                            border: 1px solid $secondary-color4;
                            overflow: hidden;
                            &::after{
                                position: absolute;
                                bottom: -11px;
                                right: -11px;
                                height: 22px;
                                width: 22px;
                                content: '';
                                background-color: $secondary-color4;
                                transform: rotate(45deg)
                            }
                            &::before{
                                position: absolute;
                                font-family: "iconfont" !important;
                                font-size: 12px;
                                bottom: 2px;
                                right: 0px;
                                height: 11px;
                                width: 11px;
                                content: '\e603';
                                z-index: 2;
                                background-color:transparent;
                                color: #fff;
                            }
                        }
                    }
                }
                .button-wrap{
                    display: flex;
                    .buy-button{
                        cursor: pointer;
                        border: 1px solid lighten($primary-color,20%);
                        background-color: lighten($primary-color,40%);
                        color: $primary-color;
                        padding: 10px 30px;
                        &:hover{
                            border: 1px solid lighten($primary-color,10%);
                            background-color: lighten($primary-color,30%);
                        }
                    }
                    .car-button{
                        cursor: pointer;
                        margin-left: 20px;
                        border: 1px solid $primary-color;
                        background-color: $primary-color;
                        color: #fff;
                        padding: 10px 30px;
                        &:hover{
                            background-color:darken($primary-color,10%);
                        }
                    }
                }
            }
        }
        
    }
</style>

