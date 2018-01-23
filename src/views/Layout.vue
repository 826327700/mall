<template>
    <div class="xjk-main-wrap">
        <top-bar></top-bar>
        <router-view/>
        <!--通用底部footer-->
        <common-footer/>
        <!--右侧操作栏-->
        <right-bar/>
    </div>
</template>

<script>
    import TopBar from '@/components/view/CommonTopBar.vue'
    import RightBar from '@/components/view/CommonRightBar.vue'
    import CommonFooter from '../components/view/CommonFooter.vue'
    export default {
        components: {
            TopBar,
            RightBar,
            CommonFooter
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    
    
</style>
