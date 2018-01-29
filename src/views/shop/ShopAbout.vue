<template>
    <div class="xjk-container">
        <div class="about-box">
            <div class="title">
                公司介绍
            </div>
            <div class="about">
                <p>修正药业集团是集科研、生产、营销于一体的大型现代化民营企业，集团总部设在长春，营销总部设在北京。产业布局已从医药名城通化，延伸到柳河、双阳、长春、北京、四川、南昌等地。总占地面积117万平方米，总建筑面积39万平方米。集团下辖66个全资子公司，有员工80000余人，资产总额75亿元。</p>
                <p>修正药业集团于1995年5月由董事长修涞贵创立，是集中成药、化学制药、生物制药的科研生产营销、药品连锁经营、中药材标准栽培于一体的大型现代化民营制药企业。修正药业拥有两个总公司、“修正、通药、斯达舒”三个国家级驰名商标、和十四个销售平台的发展格局，自2000年起，连续10年在吉林省医药企业综合排序中位居榜首，2004年起在全国中药企业利润排序中第一名，销售额和利润居中国医药行业前十强。2010年完成产值169亿元，实现销售收入171亿元。2000-2010年累计实现销售收入552.2亿元。</p>
                <p>2017年7月5日修正药业医药产业园签约湖北荆门市</p>
            </div>
            <div class="title">
                联系我们
            </div>
            <div class="contact">
                <p><i class="icon gongsi"></i>公司名称：修正药业集团</p>
                <p><i class="icon contact"></i>联系人：邓玉萍</p>
                <p><i class="icon email"></i>电子邮箱：dengyuping@163.com</p>
                <p><i class="icon address"></i>经营地址：吉林省通化市修正路39号</p>
                <p><i class="icon qq"></i>联系QQ：123456789</p>
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
    .about-box{
        padding: 20px 0;
        .title{
            border-left: 5px solid $primary-color;
            font-size: 16px;
            padding-left: 5px;
            margin-top: 10px;
        }
        .about{
            font-size: 14px;
            padding: 10px 0;
            p{
                text-indent: 2em;
                line-height: 2;
            }
        }
        .contact{
            padding: 10px 0;
            p{
                line-height: 2.5
            }
            i.icon{
                display: inline-block;
                height: 20px;
                width: 20px;
                vertical-align: middle;
                margin-right: 5px;
            }
            .icon.gongsi{
                background: url(../../../static/image/shop/gongsi.png) 100% 100% no-repeat;
            }
            .icon.contact{
                background: url(../../../static/image/shop/contact.png) 100% 100% no-repeat;
            }
            .icon.email{
                background: url(../../../static/image/shop/email.png) 100% 100% no-repeat;
            }
            .icon.address{
                background: url(../../../static/image/shop/address.png) 100% 100% no-repeat;
            }
            .icon.qq{
                background: url(../../../static/image/shop/qq.png) 100% 100% no-repeat;
            }
        }
    }
</style>