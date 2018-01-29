<template>
    <div class="xjk-white-wrap nav-box-wrap">
        <div class="xjk-container">
            <div class="nav-list-wrap">
                <router-link to="/shop/index">首页</router-link>
                <router-link to="/shop/goods">全部商品</router-link>
                <router-link to="/shop/notice">店铺公告</router-link>
                <router-link to="/shop/about">关于我们</router-link>
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
    @import '../../../style/common.scss';
    .nav-box-wrap{
        font-size: 16px;
        //border-bottom: 1px solid $primary-color;
        background: #f5f5f5;
        .xjk-container{
            display: flex;
            height: 40px;
            .all-category-header{
                background-color: $primary-color;
                line-height: 40px;
                text-align: center;
                color: #fff;
                width: 220px;
            }
            .nav-list-wrap{
                display: flex;
                flex: 1;
                line-height: 40px;
                a{
                    padding: 0 20px;
                    color: $default-text-color;
                    &:hover{
                        color: $primary-color
                    }
                }
                .router-link-active{
                    background: $primary-color;
                    color: #fff;
                }
            }
        }
    }
 
</style>
