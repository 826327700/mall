<template>
    <div>
        <div class="xjk-footer-icon">
            <img src="../../assets/image/footer_icon.png" alt="">
        </div>
        <div class="xjk-footer-wrap">
            <div class="xjk-container">
                <div class="footer-row">
                    <div class="help-info">
                        <h4>帮助中心</h4>
                        <p>服务热线：<span>0755-83521150</span></p>
                        <p class="xjk-text-12">周一到周六：09:00 - 21:00</p>
                    </div>
                    <div class="link-grid">
                        <div class="link-box">
                            <div class="link-title">
                                购物指南
                            </div>
                            <div class="link-list">
                                <router-link to="/link">
                                    免费注册
                                </router-link>
                            </div>
                        </div>
                        <div class="link-box">
                            <div class="link-title">
                                鑫泉保障
                            </div>
                            <div class="link-list">
                                <router-link to="/link">
                                    发票保障
                                </router-link>
                            </div>
                        </div>
                        <div class="link-box">
                            <div class="link-title">
                                支付方式
                            </div>
                            <div class="link-list">
                                <router-link to="/link">
                                    线下支付
                                </router-link>
                                <router-link to="/link">
                                    网银支付
                                </router-link>
                            </div>
                        </div>
                        <div class="link-box">
                            <div class="link-title">
                                商家服务
                            </div>
                            <div class="link-list">
                                <router-link to="/link">
                                    商家入驻
                                </router-link>
                                <router-link to="/link">
                                    商家中心
                                </router-link>
                                <router-link to="/link">
                                    鑫泉规则
                                </router-link>
                                <router-link to="/link">
                                    物流服务
                                </router-link>
                                <router-link to="/link">
                                    营运服务
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xjk-footer-copyright">
                    <p>互联网药品信息服务资质证书：<a href="">(粤)-经营性-2017-0044</a></p>
                    <p>© 2016-2017 深圳鑫泉健康网络有限公司 版权所有 <a href="">粤ICP备17132607号</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .xjk-footer-icon{
        text-align: center;
        background-color: #f5f5f5;
    }
    .xjk-footer-wrap{
        background-color: #fff;
        .footer-row{
            display: flex;
            padding: 20px 0px 40px 0px;
            margin: 0 80px;
            border-bottom: 1px solid #eee;
            .help-info{
                width: 350px;
                h4{
                    font-size: 16px;
                    margin: 10px 0;
                }
                span{
                    color: $primary-color;
                }
            }
            .link-grid{
                flex: 1;
                display: flex;
                padding-top: 10px;
                .link-box{
                    flex: 1;
                    text-align: center;
                    a{
                        color: #666;
                        font-size: 12px;
                        &:hover{
                            color: $primary-color;
                        }
                    }
                    .link-list{
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
        .xjk-footer-copyright{
            padding: 30px 0;
            text-align: center;
            color: #888;
            font-size: 12px;
            p{
                margin: 5px;
                a{
                    color: #888;
                    text-decoration: underline
                }
            }
        }
    }
</style>
