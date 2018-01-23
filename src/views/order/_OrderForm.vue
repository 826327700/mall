<template>
    <div>
        <!-- 地址选择 -->
        <div class="address-box">
            <div class="title">选择收货地址</div>
            <div class="list">
                <div class="address-item active">
                    <div class="item-title">
                        <span>广东深圳</span><span>（加菲猫 收）</span> <em>默认地址</em>
                    </div>
                    <div class="item-body">
                        <span>南山区</span><span>科技园南区</span><span>高新南六道16号805室</span><span>15212973193</span>
                    </div>
                    <div class="edit">
                        修改
                    </div>
                </div>
                <div class="address-item">
                    <div class="item-title">
                        <span>广东深圳</span><span>（加菲猫 收）</span> <em>默认地址</em>
                    </div>
                    <div class="item-body">
                        <span>南山区</span><span>科技园南区</span><span>高新南六道16号805室</span><span>15212973193</span>
                    </div>
                    <div class="edit">
                        修改
                    </div>
                </div>
                <div class="address-item">
                    <div class="item-title">
                        <span>广东深圳</span><span>（加菲猫 收）</span> <em>默认地址</em>
                    </div>
                    <div class="item-body">
                        <span>南山区</span><span>科技园南区</span><span>高新南六道16号805室</span><span>15212973193</span>
                    </div>
                    <div class="edit">
                        修改
                    </div>
                </div>
                <div class="address-item">
                    <div class="item-title">
                        <span>广东深圳</span><span>（加菲猫 收）</span> <em>默认地址</em>
                    </div>
                    <div class="item-body">
                        <span>南山区</span><span>科技园南区</span><span>高新南六道16号805室</span><span>15212973193</span>
                    </div>
                    <div class="edit">
                        修改
                    </div>
                </div>
            </div>
            <div class="more">显示全部地址</div>
        </div>

        <!-- 商品列表 -->
        <div class="order-info-box">
            <div class="title">
                确认信息订单
            </div>
            <div class="body">
                <div class="thead">
                    <div class="th">店铺商品</div>
                    <div class="th">单价</div>
                    <div class="th">数量</div>
                    <div class="th">优惠方式</div>
                    <div class="th">小计</div>
                </div>
                <div class="tbody">
                    <div class="row">
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
                                    1
                                </div>
                                <div class="td center">
                                    健康劵一张
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
                                    1
                                </div>
                                <div class="td center">
                                    健康劵一张
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                            </div>
                        </div>
                        <div class="shop-other">
                            <em>运送方式：</em><span>普通配送</span><span>快递</span><span>免邮</span>
                        </div>
                        <div class="shop-other">
                            <em>给卖家留言：</em><Input type="textarea" :autosize="{minRows: 1,maxRows: 5}" placeholder="选填"></Input>
                        </div>
                    </div>
                    <div class="row">
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
                                    1
                                </div>
                                <div class="td center">
                                    健康劵一张
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
                                    1
                                </div>
                                <div class="td center">
                                    健康劵一张
                                </div>
                                <div class="td center price">
                                    59.00
                                </div>
                            </div>
                        </div>
                        <div class="shop-other">
                            <em>运送方式：</em><span>普通配送</span><span>快递</span><span>免邮</span>
                        </div>
                        <div class="shop-other">
                            <em>给卖家留言：</em><Input type="textarea" :autosize="{minRows: 1,maxRows: 5}" placeholder="选填"></Input>
                        </div>
                    </div>
                </div>
                <div class="total">
                    <span>合计（含运费）</span><span class="price">￥59.00</span>
                </div>
            </div>
        </div>

        <!-- 发票部分 -->
        <div class="invoice-box">
            <div class="title">发票信息<em>* 开企业抬头发票须填写纳税人识别号，以免影响报销</em></div>
            <div class="invoice-radio">
                <RadioGroup v-model="invoice">
                    <Radio label="1">
                        <span>不需要开发票</span>
                    </Radio>
                    <Radio label="2">
                        <span>开发票</span>
                    </Radio>
                </RadioGroup>
            </div>
            <div class="invoice-list">
                <div class="invoice-item">
                    <span>普通发票（纸质）</span> <span>试验1</span> <span>明细</span> <Button type="text">修改</Button>
                </div>
            </div>
        </div>

        <!-- 提交总结 -->
        <div class="order-total-box">
            <div class="order-total-wrap">
                <p>实付款：<em class="price">￥59</em></p>
                <p>寄送至：广东 深圳 南山区 科技园南区 高新南六道16号805室</p>
                <p>收件人：刘忆 15212973193</p>
            </div>
            <div class="order-total-button">
                <div class="button" @click="submit">
                    提交订单
                </div>
            </div>
        </div>

        <!-- 发票弹窗 -->
        <Modal
        v-model="addInvoice.show"
            title="发票信息"
            @on-ok="addInvoiceFn">
            <div class="invoice-form">
                <Form :model="addInvoice" :label-width="100">
                    <FormItem label="">
                        <RadioGroup v-model="addInvoice.form.type" type="button" size="large">
                            <Radio :label="1">普通发票</Radio>
                            <Radio :label="2">电子发票</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="发票抬头">
                        <Input v-model="addInvoice.form.head" placeholder=""></Input>
                        <Button type="text">新增</Button>
                    </FormItem>
                    <FormItem label="纳税人识别号">
                        <Input v-model="addInvoice.form.number" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="发票内容">
                        <RadioGroup v-model="addInvoice.form.content" type="button" size="large">
                            <Radio label="明细"></Radio>
                        </RadioGroup>
                    </FormItem>
                    <div v-if="addInvoice.form.type==2">
                        <FormItem label="纳税人手机">
                            <Input v-model="addInvoice.form.phone" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="纳税人邮箱">
                            <RadioGroup v-model="addInvoice.form.email" type="button" size="large">
                                <Radio label="明细"></Radio>
                            </RadioGroup>
                        </FormItem>
                    </div>
                </Form>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                star:5,
                invoice:'1',
                addInvoice:{
                    show:false,
                    form:{

                    }
                }
            }
        },
        watch: {
            invoice:function(val){
                if(val=='2'){
                    this.addInvoice.show=true
                }
            }
        },
        methods: {
            addInvoiceFn(){

            },
            submit(){
                this.$router.push('/pay')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
        .address-box{
            .title{
                font-weight: bold;
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                .address-item{
                    width: 277.5px;
                    padding: 10px;
                    margin: 10px 0;
                    cursor: pointer;
                    border: 5px solid transparent;
                    border-image: url('../../assets/image/order/address_border.png') 5 round;
                    &:hover{
                        border-image: url('../../assets/image/order/address_active_border.png') 5 round;
                    };
                    &.active{
                        border-image: url('../../assets/image/order/address_active_border.png') 5 round;
                    };
                    &+.address-item{
                        margin-left: 30px;
                    };
                    .item-title{
                        padding-bottom: 10px;
                        border-bottom: 1px dashed #ddd;
                        position: relative;
                        em{
                            font-size: 12px;
                            float: right;
                            color: $secondary-color3;
                            font-style: normal;
                        }
                    };
                    .item-body{
                        padding: 10px 0;
                    };
                    .edit{
                        cursor: pointer;
                        color: $secondary-color3;
                        &:hover{
                            color: darken($secondary-color3,10%)
                        }
                    }
                }
            };
            .more{
                cursor: pointer;
                color: $secondary-color;
                &:hover{
                    color:$secondary-color4
                }
            }
        };
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
                    }
                };
                .thead{
                    border-bottom: 5px solid transparent;
                    border-image: url('../../assets/image/order/address_active_border.png') 8 round;
                    padding: 5px 0;
                    display: flex;
                    .th{
                        flex-grow: 0;
                        width: 150px;
                        color: $default-text-color;
                        text-align: center;
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
                        &:hover{
                            border: 1px solid $secondary-color4
                        };
                        .td{
                            flex-grow: 0;
                            width: 150px;
                            color: $default-text-color;
                            &:first-child{
                                flex-shrink:0;
                                width: 50%;
                            };
                            &.center{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            };
                            &.price{
                                color: $secondary-color
                            }
                        };
                        .order-info{
                            display: flex;
                            .thumb{
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
                    text-align: right;
                    padding: 10px 30px;
                    font-size: 16px;
                    .price{
                        font-size: 22px;
                        color: $secondary-color
                    }
                }
            }
        };
        .invoice-box{
            .title{
                font-weight: bold;
                em{
                    font-style: normal;
                    color: $secondary-color;
                    font-size:12px;
                    margin-left: 10px;
                }
            };
            .invoice-radio{
                padding: 5px 0;
            };
            .invoice-list{
                padding: 5px 0;
                .invoice-item{
                    margin: 5px 0;
                }
            }
        };
        .order-total-box{
            margin-bottom: 50px;
            .order-total-wrap{
                border: 2px solid $primary-color;
                padding: 30px;
                text-align: right;
                p{
                    margin: 10px 0;
                    font-size: 16px;
                    .price{
                        color:$secondary-color;
                        font-size: 22px;
                        font-style: normal;
                    }
                }
            };
            .order-total-button{
                text-align: right;
                .button{
                    display: inline-block;
                    background: $primary-color;
                    font-size: 18px;
                    padding: 10px 25px;
                    color: #fff;
                    cursor: pointer;
                    &:hover{
                        background: darken($primary-color,10%);
                    }
                }
            }
        }

</style>

