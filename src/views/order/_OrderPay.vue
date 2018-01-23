<template>
    <div>
        <p>订单提交成功！请尽快完成支付！</p>
        <div class="pay-box">
            <RadioGroup v-model="payType">
            <div class="pay-item active">
                <Radio label="1">
                    <span class="text">健康钱包在线支付</span>
                </Radio>
                <div class="price">支付：<em>￥118.00</em></div>
            </div>
            <div class="pay-item">
                <Radio label="2">
                    <span class="text">健康钱包白条支付</span>
                </Radio>
                 <div class="price">支付：<em>￥118.00</em></div>
            </div>
            <div class="pay-item">
                <Radio label="3">
                    <span class="text">线下支付</span>
                </Radio>
                <div class="price">支付：<em>￥118.00</em></div>
            </div>
            </RadioGroup>
            <div class="pay-button" @click="submit">
                立即支付
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                payType:''
            }
        },
        mounted(){
            document.documentElement.scrollTop=0
            document.body.scrollTop=0
        },
        methods: {
            submit(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .pay-box{
        padding-bottom: 200px;
        margin-top: 20px;
        margin-bottom: 200px;
        box-shadow: 2px 4px 8px 1px rgba(91, 151, 207, 0.16);
        border-top: 1px solid rgba(91, 151, 207, 0.16);
        .ivu-radio-group{
            width: 100%;
        };
        .pay-item{
            padding: 20px;
            font-weight: bold;
            position: relative;
            border:1px solid transparent;
            .price{
                position: absolute;
                left: 30%;
                top: 20px;
                color: #666;
                opacity: 0;
                transition: all 0.3s ease-in;
                em{
                    font-style: normal;
                    color: $secondary-color;
                    font-size: 16px;
                };
            };
            &:hover{
                border:1px solid lighten($primary-color, 30%);
                .price{
                    opacity: 1;
                    left: 28%;
                };
                &+.pay-item{
                    border-top: 1px solid transparent
                }
            };
            &.active{
                border:1px solid lighten($primary-color, 20%);
                .price{
                    opacity: 1;
                    left: 28%;
                };
                &+.pay-item{
                    border-top: 1px solid transparent
                }
            }; 
            .text{
                margin-left: 10px;
            };
            &+.pay-item{
                border-top: 1px solid lighten($primary-color, 30%)
            }
        };
        .pay-button{
            display: inline-block;
            font-size: 16px;
            background: $primary-color;
            color: #fff;
            padding: 10px 30px;
            margin-left: 50px;
            margin-top: 50px;
            cursor: pointer;
            &:hover{
                background: darken($primary-color, 10%)
            }
        }
    }
</style>

