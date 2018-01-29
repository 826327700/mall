<template>
    <div class="xjk-404" ref="page404">
        页面未找到或暂未开发
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        mounted () {
            this.$refs.page404.style.height=window.innerHeight+'px'
            console.log(this.$refs.page404)  
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    .xjk-404{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        background: #f5f5f5;
        font-size: 24px;
    }
</style>

