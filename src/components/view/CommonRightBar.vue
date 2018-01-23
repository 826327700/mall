<template>
    <div class="xjk-right-bar">
        <Tooltip content="Left Center 文字提示" placement="left">
            <div class="right-bar-item">
                <i class="iconfont icon-wenhao1"></i>
            </div>
        </Tooltip>
        <Tooltip content="Left Center 文字提示" placement="left">
            <div class="right-bar-item">
                <i class="iconfont icon-liaotian"></i>
            </div> 
        </Tooltip>
        <Poptip v-model="showCart" placement="left" width="560">
            <Tooltip content="Left Center 文字提示" placement="left">
                <Badge :count="shopCart.total" class="cart-badge">
                <div class="right-bar-item" id="cart-icon">
                    <i class="iconfont icon-gouwuche1"></i>
                </div>
                </Badge> 
            </Tooltip>
            <div class="cart-modal" slot="content">
                <div class="add-successful-tip">
                    <Icon type="ios-checkmark-outline"></Icon><span>成功加入购车！</span><div class="button-bg" @click="goShopcart">去结算{{showCart}}</div>
                </div>
                <!--类似商品推荐-->
                <div class="shop-recommend">
                    <div class="recommend-title">
                        类似商品推荐
                    </div>
                    <div class="recommend-box">
                        <div v-for="good in list.data" :key="good.id" to="/goods" class="goods-item">
                            <div class="goods-pic">
                                <img v-lazy="good.pic" alt="">
                                <div class="goods-title">
                                    {{good.title}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Poptip>
        <Tooltip content="返回顶部" placement="left">
            <div class="right-bar-item" @click="backTop">
                <i class="iconfont icon-top02"></i>
            </div> 
        </Tooltip>
    </div>
</template>

<script>
import {mapState } from 'vuex'
    export default {
        data () {
            return {
                timer:null,
                list:{
                    data:[]
                },
                showCart:false,
            }
        },
        computed: {
			...mapState({
                shopCart: state => state.shopCart,
			}) 
		},
        mounted () {
            let i=0
            let timer=setInterval(()=>{
                let item={
                    pic:'static/image/search/result_good_pic.jpg',
                    title:'绿森林π芦荟软胶囊'+i,
                    id:i
                }
                this.list.data.push(item)
                i++
                if(i>3){
                    clearInterval(timer)
                    
                }
            },10)
        },
        methods: {
            goShopcart(){
                this.$router.push('/shopcart');
                this.showCart=false
            },
            backTop(){
                let _this=this
                cancelAnimationFrame(_this.timer);
                _this.timer = requestAnimationFrame(function fn(){
                    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if(oTop > 0){
                        document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
                        _this.timer = requestAnimationFrame(fn);
                    }else{
                        cancelAnimationFrame(_this.timer);
                    } 
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
    .xjk-right-bar{
        height: 100%;
        width: 40px;
        background-color: #000;
        position: fixed;
        top: 0;
        right: 0;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .right-bar-item{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
            width: 40px;
            cursor: pointer;
            position: relative;
            &:hover{
                background-color: $primary-color;
            }
            i{
                font-size: 20px;
            }
        };
        .cart-modal{
            color: $default-text-color
        }
        .add-successful-tip{
            display: flex;
            align-items: center;
            i{
                font-size: 36px;
                color: #057926;
                margin-right: 15px;
            };
            span{
                font-size: 16px;
                margin-right: 15px;
            };
            .button-bg{
                cursor: pointer;
                background-color: $secondary-color;
                color: #fff;
                padding: 3px 0;
                margin: 10px 0;
                text-align: center;
                width: 120px;
                &:hover{
                    background-color: darken($secondary-color,10%)
                }
            }
        }
        .shop-recommend{
            border-top: 1px dashed #ddd;
            padding: 10px;
            margin: 20px 0;
            .recommend-title{
                font-size: 16px;
            }
            .recommend-box{
                display: flex;
                margin-top: 10px;
                .goods-item{
                    flex-shrink: 0;
                    width: 110px;
                    height: 110px;
                    border: 1px solid #eee;
                    margin: 5px;
                    display: flex;
                    flex-direction:column;
                    align-items: center;
                    color: $default-text-color;
                    transition: transform 1s,opacity 1s;
                    overflow: hidden;
                    .goods-pic{
                        width: 100%;
                        height: 110px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        background-color: #fff;
                        position: relative;
                        img{
                            width: 100%;
                        }
                        .goods-title{
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            z-index: 1;
                            padding: 2px 5px;
                            background-color: rgba(0,0,0,0.5);
                            width: 100%;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            color: #fff;
                        }
                    }
                    
                    &:hover{
                        outline: $secondary-color4 solid 1px;
                    }
                }
            }
        }
    }
    
    
</style>
