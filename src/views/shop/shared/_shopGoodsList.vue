<template>
    <div>
        <div class="search-result-list">
            <div class="list-bar">
                <div class="button-item">
                    默认排序
                </div>
                <div class="button-item active">
                    销量
                    <div class="up-down-icon">
                        <Icon type="android-arrow-dropup"></Icon>
                        <Icon type="android-arrow-dropdown active"></Icon>
                    </div>
                </div>
                <div class="button-item">
                    价格
                    <div class="up-down-icon">
                        <Icon type="android-arrow-dropup"></Icon>
                        <Icon type="android-arrow-dropdown"></Icon>
                    </div>
                </div>
                <div class="button-item">
                    信用
                    <div class="up-down-icon">
                        <Icon type="android-arrow-dropup"></Icon>
                        <Icon type="android-arrow-dropdown"></Icon>
                    </div>
                </div>
                <div class="button-item">
                    <Input placeholder="价格最低" size="small" style="width: 70px"></Input> - 
                    <Input placeholder="价格最高" size="small" style="width: 70px"></Input>
                    <Button type="ghost" size="small">确定</Button>
                </div>
                <CheckboxGroup class="checkbox">
                    <Checkbox label="是否促销"></Checkbox>
                    <Checkbox label="是否医保"></Checkbox>
                    <Checkbox label="是否首营"></Checkbox>
                </CheckboxGroup>
                <div class="list-style-button">
                    <div class="style-button" :class="{'active':result.listType==1}" @click="changeListType(1)">
                        <i class="iconfont icon-liebiao"></i>列表
                    </div>
                    <div class="style-button" :class="{'active':result.listType==2}" @click="changeListType(2)">
                        <i class="iconfont icon-datu01"></i>大图
                    </div>
                </div>
            </div>
            <div class="result-list">
                <list-type1 :show-shop-btn="false" v-if='result.listType==1'/>
                <list-type2 v-if='result.listType==2'/>
            </div>
            
        </div>
    </div>
</template>

<script>
    import ListType1 from '../../search/_ListType1'
    import ListType2 from '../../search/_ListType2'
    export default {
        components: {
            ListType1,ListType2
        },
        data () {
            return {
                result:{
                    listType:1,
                }
            }
        },
        methods: {
            changeListType(type){
                this.result.listType=type
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/common.scss';
    .search-result-list{
        flex: 1;
        .list-bar{
            background-color: #f5f5f5;
            padding: 5px;
            display: flex;
            justify-content: space-between;
            .checkbox{
                flex:1
            };
            .button-item{
                display: flex;
                align-items: center;
                padding: 5px 8px;
                background-color: #fff;
                border: 1px solid #eee;
                cursor: pointer;
                .up-down-icon{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 0 5px;
                    i{
                        font-size: 20px;
                        &:first-child{
                            margin-top: 2px;
                        }
                    }
                    i+i{
                        margin-top: -10px;
                    }
                }
                .ivu-btn{
                    margin-left: 5px;
                }
                &+.button-item{
                    border-left: 0px;
                }
                &.active{
                    color: $secondary-color;
                    i{
                        color: $default-text-color;
                        &.active{
                            color: $secondary-color;
                        }
                    }
                }
            }
            .ivu-checkbox-group{
                margin: 0 10px;
                display: flex;
                align-items: center;
            }
            .list-style-button{
                display: flex;
                align-items: center;
                background-color: #fff;
                .style-button{
                    display: flex;
                    align-items: center;
                    padding: 0 10px;
                    cursor: pointer;
                    i{
                        margin-right: 5px;
                    }
                    &.active{
                        color: $secondary-color;
                        i{
                            color: $secondary-color;
                        }
                    }
                    &:hover{
                        color: $secondary-color;
                        i{
                            color: $secondary-color;
                        }
                    }
                }
            }
        }
        .result-list{
            
        }
        
    };
</style>

