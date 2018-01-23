<template>
    <div>
        <transition-group
            name="slide-bottom-10"
            tag="div"
            class="list-type-3"
        >
        <div class="shop-item" v-for="item in list.data" :key="item.id">
            <div class="shop-header">
                <div class="shop-pic">
                    <img v-lazy="item.shoppic" alt="">
                </div>
                <div class="shop-title">
                    <p class="title">
                        {{item.shoptitle}}
                    </p>
                    <p>
                        <span>会员等级：</span><Rate disabled v-model="item.level"></Rate>
                    </p>
                    <p>
                        起送金额：1000
                    </p>
                </div>
                <div class="shop-button">
                    <div class="button-bg">进入店铺</div>
                </div>
            </div>
            <div class="shop-recommend">
                <div class="recommend-title">
                    店铺热卖推荐
                </div>
                <div class="recommend-box">
                    <router-link v-for="good in item.goods" :key="good.id" to="/detail" class="goods-item">
                        <div class="goods-pic">
                            <img v-lazy="good.pic" alt="">
                        </div>
                        <div class="goods-title">
                            {{good.title}}
                        </div>
                        <div class="goods-price">
                            <span>500mg.粒*90粒/瓶</span> <span class="price">会员可见</span>
                        </div>
                        <div class="good-sales">
                            <span class="brand">修正药业</span> <span class="sales">月销量 7500笔</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        </transition-group>
        <div class="result-page">
            <Page :total="100" show-total show-elevator show-sizer></Page>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list:{
                    data:[]
                }
            }
        },
        mounted () {
            let i=0
            let timer=setInterval(()=>{
                let item={
                    shoppic:'static/image/search/brand_logo.jpg',
                    shoptitle:'绿森林π芦荟软胶囊',
                    id:i,
                    level:5,
                    goods:[{
                        pic:'static/image/search/result_good_pic.jpg',
                        title:'绿森林π芦荟软胶囊',
                        id:i+'-1'
                    },{
                        pic:'static/image/search/result_good_pic.jpg',
                        title:'绿森林π芦荟软胶囊',
                        id:i+'-2'
                    },{
                        pic:'static/image/search/result_good_pic.jpg',
                        title:'绿森林π芦荟软胶囊',
                        id:i+'-2'
                    },{
                        pic:'static/image/search/result_good_pic.jpg',
                        title:'绿森林π芦荟软胶囊',
                        id:i+'-2'
                    }]
                }
                this.list.data.push(item)
                i++
                if(i>10){
                    clearInterval(timer)
                }
            },300)
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .list-type-3{
        min-height: 700px;
        .shop-item{
            padding: 20px 0 10px 0;
            
            .shop-header{
                display: flex;
                .shop-pic{
                    width: 90px;
                    height: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    margin-right: 10px;
                    img{
                        width: 100%;
                    }
                }
                .shop-title{
                    flex:1;
                    .title{
                        font-size: 16px;
                        font-weight: 600;
                        color: $secondary-color2;
                        margin-top: 5px;
                        margin-bottom: 5px;
                    }
                    p{
                        span{
                            vertical-align: middle
                        }
                    }
                }
                .shop-button{
                    width: 200px;
                    .button-bg{
                        cursor: pointer;
                        background-color: $secondary-color;
                        color: #fff;
                        padding: 3px 0;
                        margin: 40px 0 20px 0;
                        text-align: center;
                        width: 180px;
                        &:hover{
                            background-color: darken($secondary-color,10%)
                        }
                    }
                }
            }
            .shop-recommend{
                border: 1px solid #eee;
                padding: 10px;
                margin-left: 90px;
                .recommend-title{
                    font-size: 16px;
                }
                .recommend-box{
                    display: flex;
                    margin-top: 10px;
                    .goods-item{
                        flex-shrink: 0;
                        width: 24%;
                        border: 1px solid #eee;
                        margin: 5px;
                        padding: 15px 5px;
                        display: flex;
                        flex-direction:column;
                        align-items: center;
                        color: $default-text-color;
                        transition: transform 1s,opacity 1s;
                        overflow: hidden;
                        .goods-pic{
                            width: 100%;
                            height: 160px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;
                            background-color: #fff;
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
                            display: flex;
                            justify-content: space-between;
                            border-bottom: 1px solid #eee;
                            .price{
                                color: $secondary-color
                            }
                        }
                        .good-sales{
                            width: 100%;
                            padding: 5px 0px;
                            display: flex;
                            justify-content: space-between;
                            .brand{
                                font-weight: 600;
                                color: $secondary-color2;
                            }
                            .sales{
                                font-size: 12px;
                                color: $secondary-color3;
                            }
                        }
                        &:hover{
                            outline: $secondary-color4 solid 1px;
                        }
                    }
                }
            }
        }
    }
    .result-page{
        padding: 10px 0;
        text-align: right;
        .ivu-page{
            display: inline-block;
        }
    }
</style>

