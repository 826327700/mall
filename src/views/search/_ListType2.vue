<template>
    <div>
        <div class="list-type-2" v-if="list.loading">
            <Spin size="large" fix v-if="list.loading"></Spin>
        </div>
        <transition-group name="cell" tag="div" class="list-type-2" v-on:after-cancelled="afterEnter" v-if="!list.loading">
            <router-link v-for="item in list.data" :key="item.id" to="/detail" class="goods-item">
                <div class="goods-pic">
                    <img v-lazy="item.pic" alt="">
                </div>
                <div class="goods-title">
                    {{item.title}}
                </div>
                <div class="goods-price">
                    <span>500mg.粒*90粒/瓶</span> <span class="price">会员可见</span>
                </div>
                <div class="good-sales">
                    <span class="brand">修正药业</span> <span class="sales">月销量 7500笔</span>
                </div>
            </router-link>
            
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
                    loading:true,
                    data:[]
                }
            }
        },
        created () {
            
        },
        mounted(){
            setTimeout(() => {
                this.createData()
            }, 2000);
        },
        methods: {
            createData(){
                let i=0
                this.list.loading=false
                let timer=setInterval(()=>{
                    let item={
                        pic:'static/image/search/result_good_pic.jpg',
                        title:'绿森林π芦荟软胶囊'+i,
                        id:i
                    }
                    this.list.data.push(item)
                    i++
                    if(i>11){
                        clearInterval(timer)
                        
                    }
                },10)
            },
            afterEnter(){
                console.log('动画完成')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .list-type-2{
        display: flex;
        flex-wrap: wrap;
        min-height: 700px;
        position: relative;
        .cell-enter {
            opacity: 0;
            transform: scale(0.5)
        };
        .goods-item{
                flex-shrink: 0;
                width: 225px;
                border: 1px solid #eee;
                margin: 5px;
                padding: 20px 10px;
                display: flex;
                flex-direction:column;
                align-items: center;
                color: $default-text-color;
                transition: transform 1s,opacity 1s;
                .goods-pic{
                    width: 200px;
                    height: 220px;
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
    .result-page{
            padding: 10px 0;
            text-align: right;
            .ivu-page{
                display: inline-block;
            }
        }
</style>

