<template>
    <div>
        <div class="xjk-container xjk-b-top">
            <Breadcrumb separator=">" class="xjk-m-t-10">
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">药品</BreadcrumbItem>
                <BreadcrumbItem>解热镇痛</BreadcrumbItem>
            </Breadcrumb>
            <!--搜索页面分类-->
            <div class="xjk-search-category">
                
                <div class="search-category-row">
                    <div class="category-label">
                        分类
                    </div>
                    <div class="category-button">
                        <Button type="text" class="active">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                    </div>
                </div>
                <div class="search-category-row">
                    <div class="category-label">
                        剂型
                    </div>
                    <div class="category-button">
                        <Button type="text" class="active">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text" class="active">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                        <Button type="text">Text</Button>
                    </div>
                </div>
            </div>

            <!--搜索结果商品列表-->
            <div class="xjk-search-result">
                <div>
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
                <!--搜索结果-->
                <div class="search-result-list">
                    <div class="list-bar">
                        <div class="button-item">
                            默认排序
                        </div>
                        <div class="button-item active">
                            销量
                            <div class="up-down-icon">
                                <Icon type="android-arrow-dropup"></Icon>
                                <Icon type="android-arrow-dropdown active"></Icon>
                            </div>
                        </div>
                        <div class="button-item">
                            价格
                            <div class="up-down-icon">
                                <Icon type="android-arrow-dropup"></Icon>
                                <Icon type="android-arrow-dropdown"></Icon>
                            </div>
                        </div>
                        <div class="button-item">
                            信用
                            <div class="up-down-icon">
                                <Icon type="android-arrow-dropup"></Icon>
                                <Icon type="android-arrow-dropdown"></Icon>
                            </div>
                        </div>
                        <div class="button-item">
                            <Input placeholder="价格最低" size="small" style="width: 70px"></Input> - 
                            <Input placeholder="价格最高" size="small" style="width: 70px"></Input>
                            <Button type="ghost" size="small">确定</Button>
                        </div>
                        <CheckboxGroup class="checkbox">
                            <Checkbox label="是否促销"></Checkbox>
                            <Checkbox label="是否医保"></Checkbox>
                            <Checkbox label="是否首营"></Checkbox>
                        </CheckboxGroup>
                        <div class="list-style-button">
                            <div class="style-button" :class="{'active':result.listType==1}" @click="changeListType(1)">
                                <i class="iconfont icon-liebiao"></i>列表
                            </div>
                            <div class="style-button" :class="{'active':result.listType==2}" @click="changeListType(2)">
                                <i class="iconfont icon-datu01"></i>大图
                            </div>
                        </div>
                    </div>
                    <div class="result-list">
                        <list-type1 v-if='result.listType==1'/>
                        <list-type2 v-if='result.listType==2'/>
                        <list-type3 v-if='result.listType==3'/>
                    </div>
                    
                </div>
            </div>

            <!--推荐商品-->
            <goods-recommend/>
        </div>
    </div>
</template>

<script>
    import LeftAd from '../search/_LeftAd'
    import ListType1 from '../search/_ListType1'
    import ListType2 from '../search/_ListType2'
    import ListType3 from '../search/_ListType3'
    import GoodsRecommend from '../search/_goodsRecommend'
    export default {
        components:{
            ListType1,LeftAd,ListType2,ListType3,GoodsRecommend
        },
        data () {
            return {
                result:{
                    listType:1,
                }
            }
        },
        mounted(){
            document.documentElement.scrollTop=0
            document.body.scrollTop=0
        },
        methods: {
            changeListType(type){
                this.result.listType=type
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .xjk-search-category{
        margin-top: 20px;
        border: 1px solid #eee;
        .search-category-row{
            display: flex;
            .category-label{
                padding: 10px 0;
                flex-shrink: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width:120px;
                background-color: #f5f5f5;
            }
            .category-button{
                padding: 10px 0;
                padding-right: 100px;
                .ivu-btn-text{
                    color: #999;
                    &:hover{
                        color: $secondary-color
                    }
                    &.active{
                        color: $secondary-color
                    }
                }
            }
            &+.search-category-row{
                border-top:1px solid #eee;
            }
        }
    }

    .xjk-search-result{
        display: flex;
        margin-top: 20px;
        
        .search-result-list{
            flex: 1;
            .list-bar{
                background-color: #f5f5f5;
                padding: 5px;
                display: flex;
                justify-content: space-between;
                .checkbox{
                    flex:1
                };
                .button-item{
                    display: flex;
                    align-items: center;
                    padding: 5px 8px;
                    background-color: #fff;
                    border: 1px solid #eee;
                    cursor: pointer;
                    .up-down-icon{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 0 5px;
                        i{
                            font-size: 20px;
                            &:first-child{
                                margin-top: 2px;
                            }
                        }
                        i+i{
                            margin-top: -10px;
                        }
                    }
                    .ivu-btn{
                        margin-left: 5px;
                    }
                    &+.button-item{
                        border-left: 0px;
                    }
                    &.active{
                        color: $secondary-color;
                        i{
                            color: $default-text-color;
                            &.active{
                                color: $secondary-color;
                            }
                        }
                    }
                }
                .ivu-checkbox-group{
                    margin: 0 10px;
                    display: flex;
                    align-items: center;
                }
                .list-style-button{
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    .style-button{
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        cursor: pointer;
                        i{
                            margin-right: 5px;
                        }
                        &.active{
                            color: $secondary-color;
                            i{
                                color: $secondary-color;
                            }
                        }
                        &:hover{
                            color: $secondary-color;
                            i{
                                color: $secondary-color;
                            }
                        }
                    }
                }
            }
            .result-list{
                
            }
            
        };

        .shop-search{
            margin: 0 0 10px 0;
            border: 1px solid #eee;
            padding: 10px 20px 30px 20px;
            width: 240px;
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
</style>
