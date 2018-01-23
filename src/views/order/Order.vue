<template>
    <div class="xjk-container order-wrap">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                star:5,
                invoice:'1'
            }
        },
        mounted(){
            document.documentElement.scrollTop=0
            document.body.scrollTop=0
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.scss';
    .order-wrap{
        
    }

</style>

