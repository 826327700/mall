<template>
    <div >
        <transition-group
            name="slide-right-10"
            tag="div"
            class="list-type-1"
        >

        <div class="list-item" v-for="(item,index) in list.data" :key="item.id">
            <router-link to="/detail" class="item-pic">
                <img v-lazy="item.pic" alt="">
            </router-link>
            <div class="item-info">
                <div class="item-title">
                    <router-link to="/detail">{{item.title}}</router-link>
                </div>
                <p>剂型：胶囊</p>
                <p>规格：500mg/粒*90粒/瓶</p>
                <p>生产企业：修正药业</p>
                <p>库存：<span>会员可见</span></p>
                <p>价格：<span>会员可见</span></p>
            </div>
            <div class="item-button">
                <div class="button-bg" @click="$router.push('/shop')">进入店铺</div>
                <div class="button-bg" @click="addshopcart($event,item.pic)">加入购物车</div>
                <div class="button-nobg"><i class="iconfont icon-dianpu"></i>关注店铺</div>
                <div class="button-nobg"><i class="iconfont icon-dianpu"></i>收藏商品</div>
            </div>
        </div>
        
        </transition-group>
        <div class="result-page">
            <Page :total="100" show-total show-elevator show-sizer></Page>
        </div>
    </div>
</template>

<script>
    import * as util from '@/common/util'
    export default {
        data () {
            return {
                list:{
                    data:[]
                }
            }
        },
        mounted(){
            let i=0
            let timer=setInterval(()=>{
                let item={
                    pic:'static/image/search/result_good_pic.jpg',
                    title:'绿森林π芦荟软胶囊'+i,
                    id:i
                }
                this.list.data.push(item)
                i++
                if(i>10){
                    clearInterval(timer)
                }
            },100)
        },
        methods: {
            addshopcart(event,src){
                util.addcart(event,src,()=>{
                    this.$store.state.shopCart.total++
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .list-type-1{
        overflow: hidden;
        position: relative;
        min-height: 700px;
        .list-item{
            border: 1px solid #eee;
            padding: 15px;
            display: flex;
            margin-top: 10px;
            transition: all 1s;
            cursor: pointer;
            &:hover{
                border: 1px solid $secondary-color4;
            }
            .item-pic{
                width:148px;
                height: 148px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 100%;
                }
            }
            .item-info{
                padding-left: 20px;
                flex: 1;
                .item-title{
                    font-size: 16px;
                    margin-bottom: 10px;
                    a{
                        color: $default-text-color;
                        &:hover{
                            color: $primary-color;
                        }
                    }
                }
                p{
                    color: #999;
                    font-size:14px;
                    span{
                        color: $secondary-color
                    }
                }
            }
            .item-button{
                width: 200px;
                .button-bg{
                    cursor: pointer;
                    user-select: none;
                    background-color: $secondary-color;
                    color: #fff;
                    padding: 3px 0;
                    margin: 10px 0;
                    text-align: center;
                    width: 180px;
                    &:hover{
                        background-color: darken($secondary-color,10%)
                    }
                }
                .button-nobg{
                    cursor: pointer;
                    margin: 10px 0;
                    width: 180px;
                    color: $secondary-color;
                    i{
                        margin-right: 5px;
                        vertical-align: middle;
                    }
                    &:hover{
                        color: darken($secondary-color,10%)
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

