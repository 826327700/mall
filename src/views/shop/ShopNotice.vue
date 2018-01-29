<template>
    <div class="xjk-container">
        <div class="notice-list">
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
            <div class="item">
                <router-link to="/shop/notice/1">
                    【公告】关于快递、物流春节停运及我公司放假通知
                </router-link>
                <span class="date">
                    2018-01-26
                </span>
            </div>
        </div>
        <div class="notice-page">
            <Page :total="100" show-total show-elevator show-sizer></Page>
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
    .notice-list{
         
        .item{
            padding: 15px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            a{
                color: $default-text-color;
                &:hover{
                    color: $primary-color;
                }
            }
        }
    }
    .notice-page{
        padding: 20px 0;
        text-align: right;
    }
</style>

