<template>
    <div class="xjk-main-wrap">
        <keep-alive>
            <shop-top-bar v-if="topType=='shop'"/>
            <top-bar v-else/>
        </keep-alive>
        <router-view/>
        <!--通用底部footer-->
        <common-footer/>
        <!--右侧操作栏-->
        <right-bar/>
    </div>
</template>

<script>
    import TopBar from '@/components/view/CommonTopBar.vue'
    import ShopTopBar from '@/components/view/ShopTopBar.vue'
    import RightBar from '@/components/view/CommonRightBar.vue'
    import CommonFooter from '../components/view/CommonFooter.vue'

    import {mapState } from 'vuex'
    export default {
        components: {
            TopBar,
            RightBar,
            CommonFooter,
            ShopTopBar
        },
        data () {
            return {

            }
        },
        computed: {
			...mapState({
                topType: state => state.topType,
			}) 
		},
        methods: {

        }
    }
</script>

<style lang="scss">
    
    
</style>
