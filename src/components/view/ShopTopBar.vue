<template>
    <div class="xjk-top-bar">
        <div class="xjk-container">
            <div class="xjk-top-wrap">
                <span>欢迎您！XXXXX有限公司</span>
                <Poptip placement="bottom-start" v-model="province.show" width="400">
                    <span class="province-button"><i class="iconfont icon-dingwei"></i>{{province.active?province.active.regionName:'请选择'}}</span>
                    <div class="province-list" slot="content">
                        <Button type="text" v-for="p in province.provinceData" :key="p.regionId" @click="selectProvince(p)">{{p.regionName}}</Button>
                    </div>
                </Poptip>
                <div class="top-link">
                    <span class="line-item">
                        <router-link to="/0"><i class="iconfont icon-shoucangjia"></i>收藏夹</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/1"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/2"><i class="iconfont icon-kttx"></i>会员中心</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/3"><i class="iconfont icon-dingdan"></i>我的订单</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/4">关于我们</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/5">帮助中心</router-link>
                    </span>
                    <span class="line-item">
                        <router-link to="/6">安全退出</router-link>
                    </span>
                </div>
            </div>
            <div class="xjk-top-logo-search">
                <div class="logo-wrap">
                    <router-link to="/">
                        <img src="../../assets/image/shop_logo.png" alt="">
                    </router-link>
                </div>
                <div class="follow-shop">
                    <span><i class="iconfont icon-dianpu"></i>关注店铺</span>
                </div>
                <div class="search-wrap">
                    <div>
                        <input class="search-input" type="text" @keyup.13="goSearch" autocomplete="on">
                        <div class="search-button" @click="goSearch">
                            <Icon type="ios-search-strong"></Icon>
                        </div>
                    </div>
                    <div class="hot-word-wrap">
                        <span class="word-item">保心护心</span>
                        <span class="word-item hot">淡化疤痕</span>
                        <span class="word-item">女性养颜</span>
                    </div>
                </div>
                <div class="order-step" v-if="topType=='step'">
                    <Steps :current="topStep">
                        <Step title="拍下商品"></Step>
                        <Step title="付款"></Step>
                        <Step title="确认收货"></Step>
                    </Steps>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addressData from '@/common/regionJson'
    import {mapState } from 'vuex'
    export default {
        data () {
            return {
                province:{
                    show:false,
                    provinceData:[],
                    active:null
                }
                
            }
        },
        computed: {
			...mapState({
                topType: state => state.topType,
                topStep:state => state.topStep,
			}) 
		},
        created(){
            this.province.provinceData=addressData.map((item)=>{
                item.childrenRegions=[]
                return item
            })
            // 百度地图API功能
            this.province.active={
                regionName:'定位中...'
            }
            var geolocation = new BMap.Geolocation();
            var _this=this
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    // 创建地理编码实例      
                    var myGeo = new BMap.Geocoder();      
                    // 根据坐标得到地址描述    
                    myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){      
                        if (result){      
                            let active=_this.province.provinceData.find(item=>{
                                return item.regionName.includes(result.addressComponents.province)
                            })
                            if(active){
                                _this.province.active=active
                            }
                        }      
                    });
                }
                else {
                    _this.province.active={
                        regionName:'自动获取失败'
                    }
                }        
            });
            
        },
        methods: {
            selectProvince(value){
                this.province.active=value
                this.province.show=false
            },
            goSearch(){
                this.$router.push('/search')
            }
        }
    }
</script>

<style lang='scss' scoped>
@import '../../style/common.scss';
    .xjk-top-bar{
        background-color: #fff;
        padding-bottom: 20px;
        .xjk-top-wrap{
            display: flex;
            align-items:center;
            height: 30px;
            .line-item{
                padding: 0 15px;
                border-right: 1px solid #d5d5d5;
                &:last-child{
                    border-right: 0px
                }
            }
            a{
                color: $default-text-color;
                &:hover{
                    color: $primary-color;
                    i{
                        color: $primary-color
                    }
                };
                i{
                    color: #999;
                    margin-right: 5px;
                }
            }
            .router-link-active{
                color: $primary-color
            }
            .top-link{
                flex: 1;
                text-align: right ;
            }
            .ivu-poptip{
                margin: 0 20px;
            }
            .province-button{
                cursor: pointer;
                color: $secondary-color;
                i{
                    margin-right: 5px;
                }
            }
            .province-list{
                white-space: normal;
            }
        }
        .xjk-top-logo-search{
            margin-top: 30px;
            min-height: 60px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            position: relative;
            .logo-wrap{
                width: 300px;
                height: 70px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .follow-shop{
                flex: 1;
                margin-top: 25px;
                span{
                    cursor: pointer;
                    color: $secondary-color3;
                }
                i{
                    margin-right: 5px;
                }
            }
            .search-wrap{
                .search-input{
                    height: 40px;
                    border: 1px solid $primary-color;
                    border-bottom-left-radius: 20px;
                    border-top-right-radius: 20px;
                    outline: none;
                    padding: 0 15px;
                    width: 538px;
                    color: $primary-color;
                }
                .search-button{
                    margin-left: 5px;
                    margin-top: -4px;
                    height: 40px;
                    width: 40px;
                    text-align: center;
                    line-height: 40px;
                    background-color: $primary-color;
                    color: #fff;
                    display: inline-block;
                    font-size: 24px;
                    vertical-align: middle;
                    border-top-left-radius: 20px;
                    border-bottom-right-radius: 20px;
                    cursor: pointer;
                }
            }
            .order-step{
                width: 900px;
                position: absolute;
                right: 0;
                top: 15px;
            }
            .hot-word-wrap{
                .word-item{
                    margin: 5px 15px;
                    cursor: pointer;
                    color: #666;
                    &:hover{
                        color: $primary-color;
                    }
                    &.hot{
                        color:$secondary-color
                    }
                }
            }
        }
    }
 
</style>
