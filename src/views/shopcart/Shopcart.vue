<template>
    <div class="xjk-container">
         <!-- 商品列表 -->
        <div class="order-info-box">
            <div class="body">
                <div class="thead">
                    <div class="th">店铺商品</div>
                    <div class="th">单价</div>
                    <div class="th">数量</div>
                    <div class="th">金额</div>
                    <div class="th">操作</div>
                </div>
                <div class="tbody">
                    <div class="row">
                        <div class="shop-name">
                            <Checkbox label="twitter"></Checkbox>
                            <span>店铺：修正药业</span><Rate disabled v-model="star"></Rate>
                        </div>
                        <div class="shop-goods">
                            <div class="tr">
                                <div class="td order-info">
                                    <Checkbox label="twitter"></Checkbox>
                                    <div class="thumb">
                                        <img src="static/image/detail/detail_pic.jpg" alt="">
                                    </div>
                                    <div class="info">
                                        <p>修正绿森林牌芦荟软胶囊 500mg/粒*90粒/瓶</p>
                                        <p>服务 由 安徽华源医药股份有限公司 发货并提供售后服务</p>
                                        <p>批准文号 国食健字G20100447</p>
                                    </div>
                                </div>
                                <div class="td center">
                                    59.00
                                </div>
                                <div class="td center">
                                    <InputNumber :max="10" :min="1"></InputNumber>
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                                <div class="td colum-center">
                                    <Button type="text">移入收藏夹</Button>
                                    <Button type="text">删除</Button>
                                </div>
                            </div>
                            <div class="tr">
                                <div class="td order-info">
                                    <Checkbox label="twitter"></Checkbox>
                                    <div class="thumb">
                                        <img src="static/image/detail/detail_pic.jpg" alt="">
                                    </div>
                                    <div class="info">
                                        <p>修正绿森林牌芦荟软胶囊 500mg/粒*90粒/瓶</p>
                                        <p>服务 由 安徽华源医药股份有限公司 发货并提供售后服务</p>
                                        <p>批准文号 国食健字G20100447</p>
                                    </div>
                                </div>
                                <div class="td center">
                                    59.00
                                </div>
                                <div class="td center">
                                    <InputNumber :max="10" :min="1"></InputNumber>
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row invalid">
                        <div class="shop-name">
                            <span>店铺：修正药业</span><Rate disabled v-model="star"></Rate>
                        </div>
                        <div class="shop-goods">
                            <div class="tr">
                                <div class="td order-info">
                                    <div class="thumb">
                                        <img src="static/image/detail/detail_pic.jpg" alt="">
                                    </div>
                                    <div class="info">
                                        <p>修正绿森林牌芦荟软胶囊 500mg/粒*90粒/瓶</p>
                                        <p>服务 由 安徽华源医药股份有限公司 发货并提供售后服务</p>
                                        <p>批准文号 国食健字G20100447</p>
                                    </div>
                                </div>
                                <div class="td center">
                                    59.00
                                </div>
                                <div class="td center">
                                    <InputNumber :max="10" :min="1"></InputNumber>
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                            </div>
                            <div class="tr">
                                <div class="td order-info">
                                    <div class="thumb">
                                        <img src="static/image/detail/detail_pic.jpg" alt="">
                                    </div>
                                    <div class="info">
                                        <p>修正绿森林牌芦荟软胶囊 500mg/粒*90粒/瓶</p>
                                        <p>服务 由 安徽华源医药股份有限公司 发货并提供售后服务</p>
                                        <p>批准文号 国食健字G20100447</p>
                                    </div>
                                </div>
                                <div class="td center">
                                    59.00
                                </div>
                                <div class="td center">
                                    <InputNumber :max="10" :min="1"></InputNumber>
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="total">
                    <Checkbox label="twitter">全选</Checkbox>
                    <Button type="text">删除</Button>
                    <Button type="text">清除失效商品</Button>
                    <Button type="text">移入收藏夹</Button>
                    <Button type="text">分享</Button>
                    <div class="info">
                        <span>已选商品<em>1</em>件</span>
                        <span >合计（不含运费）</span><span class="price">￥59.00</span>
                    </div>
                    <div class="button" @click="submit">
                        结算
                    </div>
                </div>
            </div>
        </div>

        <!-- 推荐商品 -->
        <goods-recommend/>
    </div>
</template>

<script>
    import GoodsRecommend from '../search/_goodsRecommend'
    export default {
        components: {
            GoodsRecommend
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
            submit(){
                this.$router.push('/order')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../style/common.scss';
    .order-info-box{
            margin: 20px 0;
            .title{
                font-weight: bold;
            };
            .body{
                .row{
                    .shop-name{
                        font-size: 16px;
                        span{
                            vertical-align: middle;
                            margin-right: 10px;
                        };
                        padding: 5px 0;
                        border-bottom: 1px dashed #ddd;
                        margin-bottom: 10px;
                    };
                    .shop-other{
                        padding: 10px;
                        margin: 5px 0;
                        background: #f5f9fc;
                        em{
                            font-style: normal;
                            color: #666;
                            min-width: 90px;
                        };
                        span{
                            margin-right: 10px;
                        };
                        .ivu-input-wrapper{
                            width: 300px;
                            vertical-align: middle;
                        }
                        display: flex;
                    };
                    &.invalid{
                        color: #888!important;
                        .tr{
                            background: #f5f5f5;
                        };
                        .td{
                             color: #888!important;
                        }
                    }
                };
                .thead{
                    border-bottom: 5px solid transparent;
                    border-image: url('../../assets/image/order/address_active_border.png') 8 round;
                    padding: 5px 0;
                    display: flex;
                    .th{
                        flex-grow: 0;
                        color: $default-text-color;
                        text-align: center;
                        width: 150px;
                        &:first-child{
                            flex-shrink:0;
                            width: 50%;
                        }
                    }
                };
                .tbody{
                    padding: 10px 0;
                    .tr{
                        display: flex;
                        padding: 5px 0;
                        margin: 3px 0;
                        border: 1px solid transparent;
                        background: #f5f9fc;
                        &:hover{
                            border: 1px solid $secondary-color4
                        };
                        .td{
                            flex-grow: 0;
                            color: $default-text-color;
                            width: 150px;
                            &:first-child{
                                flex-shrink:0;
                                width: 50%;
                            };
                            &.center{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            };
                            &.colum-center{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                            };
                            &.price{
                                color: $secondary-color
                            };
                            
                        };
                        .order-info{
                            display: flex;
                            align-items: center;
                            padding-left: 20px;
                            .thumb{
                                margin-left: 10px;
                                height: 80px;
                                width: 80px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                overflow: hidden;
                                img{
                                    width: 100%;
                                }
                            };
                            .info{
                                margin-left: 10px;
                            }
                        }
                    }
                    
                };
                .total{
                    background: #f5f9fc;
                    margin-top: 20px;
                    padding: 10px 30px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    .price{
                        font-size: 22px;
                        color: $secondary-color
                    };
                    .ivu-checkbox-wrapper,.ivu-btn-text{
                        font-size:16px;
                    };
                    .button{
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 150px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: $primary-color;
                        color: #fff;
                        cursor: pointer;
                        user-select: none;
                        &:hover{
                            background:darken($primary-color,10%)
                        }
                    };
                    .info{
                        flex: 1;
                        text-align: right;
                        margin-right: 150px;
                        em{
                            font-style: normal;
                            color: $secondary-color
                        }
                    }
                }
            }
        };
</style>

