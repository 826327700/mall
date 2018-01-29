<template>
    <div>
        <nav-bar/>
        <banner/>
        <div class="xjk-container xjk-m-t-20">
            <!--4格广告 -->
            <div class="xjk-ad-grid-4">
                <div class="ad-item"><img v-lazy="'static/image/index/chunjidacu.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/chanpincuxiao.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/kangti.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/lefantian.png'" alt=""></div>
            </div>

            <!--店铺推荐-->
            <div class="xjk-shop-recommend">
                <div class="shop-recommend-title">
                    <img v-lazy="'static/image/dianputuijian.png'" alt="">
                </div>
                <div class="shop-grid-wrap">
                    <div class="shop-item">
                        <div class="shop-item-info">
                            <div class="info-pic-wrap">
                                <router-link to="/shop/1">
                                <img v-lazy="'static/image/index/jiuzhitang.png'" alt="">
                                </router-link>
                            </div>
                            <div class="info-text-wrap">
                                九芝堂，前身“劳九芝堂药铺”创建于1650年。2004年2月，“九芝堂”商标被国家工商行政管理总局商标局认定为中国驰名商标；2006年9月，“九芝堂”被国家商务部认定为“中华老字号”；2008年6月，九芝堂传统中药文化被列入国家级非物质文化遗产保护目录。
                            </div>
                        </div>
                        <div class="shop-item-pic-list">
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/liuweidihuangwan.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/lurongwan.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/liuwei_unknown.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/buxuekeli.png'" alt="">
                            </router-link> 
                        </div>
                    </div>
                    <div class="shop-item">
                        <div class="shop-item-info">
                            <div class="info-pic-wrap">
                                <router-link to="/shop/1">
                                <img v-lazy="'static/image/index/renhetang.png'" alt="">
                                </router-link>
                            </div>
                            <div class="info-text-wrap">
                                广州仁和堂药业连锁有限公司成立于2002年8月23日，注册资金八百万元，主要经营：中药饮片、中成药、化学药制剂、生化药品、抗生素、诊断药品年8月23日，注册资金八百万元，主要经营：中药饮片、中成药、化学药制剂、生化药品、抗生素、诊断药品...
                            </div>
                        </div>
                        <div class="shop-item-pic-list">
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/renhetang_jiaonang.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/renhetang_unknown.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/renhetang_xiaoshipian.png'" alt="">
                            </router-link> 
                            <router-link to="/detail" class="pic-item">
                                <img v-lazy="'static/image/index/renhetang_huoxiang.png'" alt="">
                            </router-link> 
                        </div>
                    </div>
                </div>
            </div>

            <!--4格广告-->
            <div class="xjk-ad-grid-4">
                <div class="ad-item"><img v-lazy="'static/image/index/ad_01.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/ad_02.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/ad_03.png'" alt=""></div>
                <div class="ad-item"><img v-lazy="'static/image/index/ad_04.png'" alt=""></div>
            </div>

            <!--商品列表-->
            <goods-group/>
            <!--商品列表-->
            <goods-group/>
            <!--商品列表-->
            <goods-group/>

            <!--双列信息栏-->
            <div class="xjk-info-box">
                <div class="info-item-wrap">
                    <div class="info-title">
                        <span>招商信息</span><router-link to="/more">更多 <Icon type="ios-arrow-right"></Icon></router-link>
                    </div>
                    <div class="info-list">
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                    </div>
                </div>
                <div class="info-item-wrap">
                    <div class="info-title">
                        <span>招商信息</span><router-link to="/more">更多 <Icon type="ios-arrow-right"></Icon></router-link>
                    </div>
                    <div class="info-list">
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                        <div class="info-item">
                            <div class="info-item-category">招商信息主题1</div>
                            <div class="info-item-title"><router-link to="/1">福建省闽兴医药有限公司全国火热招商，欢迎广大医药代表</router-link></div>
                            <div class="info-item-date">2017-12-26</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--单列信息栏-->
            <div class="xjk-info-box">
                <div class="info-item-wrap">
                    <div class="info-title">
                        <span>招商信息</span><router-link to="/more">更多 <Icon type="ios-arrow-right"></Icon></router-link>
                    </div>
                    <div class="info-pic-row">
                        <div class="info-pic">
                            <img v-lazy="'static/image/index/taolunqu.png'" alt="">
                        </div>
                        <div class="info-text">
                            <div class="title">急性白血病共分为几型？</div>
                            <p>急性白血病可分为急性淋巴细胞白血病(急淋,ALL)和急性非淋巴细胞白血病(急非淋,ANLL)两大类。</p>
                        </div>
                    </div>
                    <div class="info-grid-4">
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-item-category">血液疾病</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">肿瘤</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                        </div>
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-item-category">血液疾病</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">肿瘤</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                        </div>
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-item-category">血液疾病</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">肿瘤</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                        </div>
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-item-category">血液疾病</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">调节免疫力</div>
                                <div class="info-item-title"><router-link to="/1">达沙替尼多少钱？一盒贵吗？</router-link></div>
                            </div>
                            <div class="info-item">
                                <div class="info-item-category">肿瘤</div>
                                <div class="info-item-title"><router-link to="/1">丽珠威片贵吗？6片多少钱？</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <!--单列信息栏-品牌logo-->
            <div class="xjk-info-box ">
                <div class="info-item-wrap brand-logo">
                    <div class="info-title">
                        <span>热门品牌</span>
                    </div>
                    <div class="logo-list-wrap">
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_01.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_02.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_03.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_04.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_05.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_06.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_07.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_08.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_09.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_10.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_11.png'" alt=""></router-link>
                        </div>
                        <div class="logo-item">
                            <router-link to="/logo"><img v-lazy="'static/image/brandlogo/brand_12.png'" alt=""></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import NavBar from '../../components/view/CommonNavBar.vue'
    import Banner from '../../components/view/CommonBanner.vue'
    import GoodsGroup from './_GoodsGroup.vue'
    export default {
        components: {
            NavBar,
            Banner,
            GoodsGroup,
        },
        data () {
            return {
                switch1: false,
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../style/common.scss';
    .xjk-ad-grid-4{
        display: flex;
        margin: 10px 0;
        .ad-item{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 155px;
            overflow: hidden;
            background-color: #fff;
            img{
                width: 100%;
                transition: transform 0.5s ease-in-out;
            }
            &+.ad-item{
                margin-left: 10px;
            }
            &:hover{
                img{
                    transform: scale(1.1)
                }
            }
        }
    }

    .xjk-shop-recommend{
        margin: 10px 0;
        background-color: #fff;
        .shop-recommend-title{
            height: 80px;
            padding: 10px 15px;
            img{
                height: 100%;
            }
        }
        .shop-grid-wrap{
            display: flex;
            .shop-item{
                flex: 1;
                border: 1px solid #eee;
                height: 330px;
                &+.shop-item{
                    margin-left: 10px;
                }
                .shop-item-info{
                    display: flex;
                    padding: 15px;
                    .info-pic-wrap{
                        flex-shrink:0;
                        width: 150px;
                        height: 150px;
                        background-color: #f6f6f6;
                        img{
                            width: 100%;
                            transition: all 0.5s ease-in;
                            &:hover{
                                transform: scale(1.05)
                            }
                        }
                    }
                    .info-text-wrap{
                        margin-left: 10px;
                        text-indent: 2em;
                    }
                }
                .shop-item-pic-list{
                    display: flex;
                    padding: 5px 15px;
                    .pic-item{
                        flex: 1;
                        border: 1px solid #eee;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        height: 120px;
                        img{
                            width: 100%;
                        };
                        &+.pic-item{
                            margin-left: 10px;
                        };
                        &:hover{
                            border: 1px solid $secondary-color4
                        }
                    }
                }
            }
        }
    }

    .xjk-info-box{
        display: flex;
        margin: 20px 0;
        .info-item-wrap{
            flex: 1;
            background-color: #fff;
            padding: 20px;
            .info-title{
                font-weight: bold;
                color: #fd7175;
                font-size: 16px;
                span{
                    padding-left: 10px;
                    border-left: 3px solid #fd7175;
                }
                a{
                    float: right;
                    color: #8a8a8a;
                    font-size: 14px;
                }
            }
            &+.info-item-wrap{
                margin-left: 10px;
            }
            .info-list{
                padding-top: 20px;
                .info-item{
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 0;
                    .info-item-category{
                        color: $primary-color;
                    }
                    .info-item-title{
                        flex: 1;
                        padding: 0 10px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        a{
                            color: $default-text-color
                        }
                        &:hover{
                            a{
                                color: $primary-color;
                                text-decoration: underline 
                            }
                        }
                    }
                    .info-item-date{
                        color: #999
                    }
                }
            }
            .info-pic-row{
                padding-top:20px;
                display: flex;
                .info-pic{
                    height: 100px;
                    width: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .info-text{
                    padding: 5px 10px;
                    .title{
                        font-weight: 600;
                        font-size: 16px;
                        color: $default-text-color!important;
                    }
                    p{
                        text-indent: 2em;
                        padding-top: 5px;
                    }
                }
            }
            .info-grid-4{
                display: flex;
                .info-list{
                    flex-shrink: 1;
                    flex:1;
                    padding-right: 20px;
                }
            }
            .logo-list-wrap{
                display: flex;
                flex-wrap: wrap;
                border-top: 1px solid #eee;
                margin-top: 20px;
                .logo-item{
                    width: 200px;
                    height: 114px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                    img{
                        width: 100%;
                    }
                }
            }
            &.brand-logo{
                padding-left: 0;
                padding-right: 0;
                padding-bottom: 0;
                .info-title{
                    padding: 0 20px;
                }
            }
        }
        
    }
</style>


