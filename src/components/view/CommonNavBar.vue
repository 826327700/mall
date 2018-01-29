<template>
    <div class="xjk-white-wrap nav-box-wrap">
        <div class="xjk-container">
            <div class="all-category-header">
                全部商品分类
            </div>
            <div class="nav-list-wrap">
                <router-link to="/">首页</router-link>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">特卖会</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">药品批发</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">供应商</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">药品资讯</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">药帮帮</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">求购信息</a>
                </Tooltip>
                <Tooltip content="即将上线，敬请期待" placement="top">
                    <a href="javascript:;">电子首营</a>
                </Tooltip>
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
