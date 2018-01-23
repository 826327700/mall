<template>
    <div>
        <div class="jxk-banner-container">
            <Carousel autoplay 
            :autoplay-speed='5000'
            loop>
                <CarouselItem>
                    <div class="banner-item">
                        <img src="../../assets/image/banner_1.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="banner-item">
                        <img src="../../assets/image/banner_2.jpg" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
            <div class="xjk-container">
                <div class="banner-nav-wrap">
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==1}" @mouseenter="mouseenterNav(0)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-1"></i><span class="title-text">原辅料</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">原辅料</router-link>
                            <router-link to="/key">制药辅料</router-link>
                            <router-link to="/key">药包材</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==2}" @mouseenter="mouseenterNav(1)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-2"></i><span class="title-text">药品</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">解热镇痛</router-link>
                            <router-link to="/key">呼吸系统</router-link>
                            <router-link to="/key">消化系统</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==3}" @mouseenter="mouseenterNav(2)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-3"></i><span class="title-text">中药饮片</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">药食同源</router-link>
                            <router-link to="/key">药材</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==4}" @mouseenter="mouseenterNav(3)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-4"></i><span class="title-text">食品类别</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">保健食品</router-link>
                            <router-link to="/key">普通食品</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==5}" @mouseenter="mouseenterNav(4)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-5"></i><span class="title-text">医疗器械</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">家庭护理</router-link>
                            <router-link to="/key">医用器械</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==6}" @mouseenter="mouseenterNav(5)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-6"></i><span class="title-text">化妆品</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="sub-title">
                            <router-link to="/key">女性护理</router-link>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                    <div class="line-nav-wrap" :class="{'no-bottom-border':activeNav==2}" @mouseenter="mouseenterNav(6)" @mouseleave="mouseleaveNav">
                        <div class="title">
                            <i class="nav-icon-7"></i><span class="title-text">消毒产品</span><span class="arrow-right"><Icon type="ios-arrow-right"></Icon></span>
                        </div>
                        <div class="more-sub-nav-warp">
                            <div class="left-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeNav:null,
            }
        },
        methods: {
            mouseenterNav(num){
                this.activeNav=num
                let subNavLine=event.currentTarget.querySelector('.left-line');
                subNavLine.style.top=(num*56.5)+'px';
            },
            mouseleaveNav(){
                this.activeNav=null
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .jxk-banner-container{
        height: 402px;
        overflow: hidden;
        position: relative;
        .banner-item{
            display: flex;
            justify-content:center;
            align-items: center;
            height: 402px;
            overflow: hidden;
        }
        .xjk-container{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 0;
            .banner-nav-wrap{
                position: absolute;
                left: 0;
                top:0 ;
                width: 220px;
                height: 402px;
                background-color: #fff;
                display: flex;
                flex-direction:column;
                .line-nav-wrap{
                    height: 57px;
                    border: 1px solid transparent;
                    padding: 0 15px;
                    border-bottom: 1px dashed $primary-color;
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    .title{
                        font-size: 16px;
                        display: flex;
                        justify-content: space-between;
                        i{
                            width: 16px;
                            height: 20px;
                            background-size: 100% 100%;
                        }
                        @for $i from 1 through 7 {
                            .nav-icon-#{$i} {
                                background-image: url('../../assets/image/icon/nav_icon_#{$i}.png');
                            }
                        }
                        
                        .title-text{
                            flex: 1;
                            padding-left: 10px;
                        }
                        .arrow-right{
                            width: 10px;
                        }
                    }
                    .sub-title{
                        a{
                            font-size: 12px;
                            margin: 0 5px;
                            color: $default-text-color;
                            &:first-child{
                                margin-left: 0
                            };
                            &:hover{
                                color: $primary-color;
                            }
                        }
                    }
                    &:hover{
                        border-left: 1px solid $primary-color;
                        border-top: 1px solid $primary-color;
                        border-bottom: 1px solid $primary-color!important;
                        border-right: 1px solid #fff;
                        .more-sub-nav-warp{
                            display: block
                        }
                    }
                    &:last-child{
                        border-bottom: 1px solid transparent;
                    }
                    &.no-bottom-border{
                        border-bottom: 1px solid transparent;
                    }
                    .more-sub-nav-warp{
                        display: none;
                        position: absolute;
                        left: 219px;
                        top: 0;
                        height: 402px;
                        max-width:730px;
                        min-width: 220px; 
                        background-color: #fff;
                        border: 1px solid $primary-color;
                        .left-line{
                            position: absolute;
                            left: -1px;
                            top: -1px;
                            height: 56px;
                            width: 1px;
                            border-left: 1px solid #fff;
                        }
                    }
                }
            }
        }
    }
</style>
