<template>
    <div class="shop-recommend">
        <div class="recommend-title">
            类似商品推荐
        </div>
        <div class="recommend-box">
            <div v-for="good in list.data" :key="good.id" to="/goods" class="goods-item">
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
            </div>
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
                    pic:'static/image/search/result_good_pic.jpg',
                    title:'绿森林π芦荟软胶囊'+i,
                    id:i
                }
                this.list.data.push(item)
                i++
                if(i>4){
                    clearInterval(timer)
                    
                }
            },10)
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .shop-recommend{
        border: 1px solid #eee;
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
                width: 19%;
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
                    height: 200px;
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
</style>
