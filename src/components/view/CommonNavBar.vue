<template>
    <div class="xjk-white-wrap nav-box-wrap">
        <div class="xjk-container">
            <div class="all-category-header">
                全部商品分类
            </div>
            <div class="nav-list-wrap">
                <router-link to="/">首页</router-link>
                <router-link to="/1">特卖会</router-link>
                <router-link to="/2">药品批发</router-link>
                <router-link to="/3">供应商</router-link>
                <router-link to="/4">药品资讯</router-link>
                <router-link to="/5">药帮帮</router-link>
                <router-link to="/6">求购信息</router-link>
                <router-link to="/7">电子首营</router-link>
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
    .nav-box-wrap{
        font-size: 16px;
        border-bottom: 1px solid $primary-color;
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
                    color: $primary-color;
                }
            }
        }
    }
 
</style>
