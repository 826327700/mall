<template>
    <div>
        <div class="detail-text">
            <div class="text-header">
                <div class="header-item active">商品详情</div>
            </div>
            <div class="text-desc">
                <div class="thumb">
                    <img src="static/image/detail/detail_pic.jpg" alt="">
                </div>
                <div class="desc">
                    保健食品亦称功能性食品。一个特定的食品种类。它具有调节人体功能的作用，但不以治疗疾病为目的，适于特定人群食用。
                </div>
            </div>
            <div class="text-info">
                <div class="row">
                    <div class="cell">
                        <span class="label">品牌名称</span>
                        <span class="text">修正</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">名称：</span>
                        <span class="text">绿森林牌芦荟软胶囊</span>
                    </div>
                    <div class="cell">
                        <span class="label">贮藏：</span>
                        <span class="text">贮藏条件</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">有效期：</span>
                        <span class="text">24月</span>
                    </div>
                    <div class="cell">
                        <span class="label">指导零售价：</span>
                        <span class="text">开心就好</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">质量标准：</span>
                        <span class="text">不知道</span>
                    </div>
                    <div class="cell">
                        <span class="label">批准文号：</span>
                        <span class="text">国食健字G20100447</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">生产厂商：</span>
                        <span class="text">修正药业</span>
                    </div>
                    <div class="cell">
                        <span class="label">批准文号有效期：</span>
                        <span class="text">2018-12-01</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">生产地址：</span>
                        <span class="text">广东省汕头市潮汕路金源工业城</span>
                    </div>
                    <div class="cell">
                        <span class="label">备注：</span>
                        <span class="text">无</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">国产/进口：</span>
                        <span class="text">国产</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">单位：</span>
                        <span class="text">瓶</span>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <span class="label">规格：</span>
                        <span class="text">500mg/粒*90粒/瓶</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-pic">
            <img src="static/image/detail/detail_long_pic.jpg" alt="">
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
    .detail-text{
        border: 1px solid #eee;
        .text-header{
            background-color: #f5f5f5;
            height: 40px;
            display: flex;
            .header-item{
                height: 100%;
                padding: 0 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &.active{
                    background-color: #fff;
                    border-top: 3px solid $primary-color;
                }
                &:hover{
                    background-color: #fff;
                }
            }
        };
        .text-desc{
            border-top:1px solid #eee;
            border-bottom:1px solid #eee;
            display: flex;
            .thumb{
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                height: 66px;
                width: 66px;
                margin: 10px 20px;
                img{
                    width: 100%;
                };
            }
            .desc{
                display: flex;
                align-items: center;
                color: $default-text-color
            }
            
        };
        .text-info{
            padding: 20px;
            .row{
                display: flex;
                padding: 5px 0;
                .cell{
                    width: 33%;
                    display: flex;
                    .label{
                        color: #666;
                        margin-right: 10px;
                    }
                    .text{
                        color: $default-text-color
                    }
                }
            }
        }
    }
    .detail-pic{
        overflow: hidden;
        img{
            width: 100%;
        }
    }
</style>

