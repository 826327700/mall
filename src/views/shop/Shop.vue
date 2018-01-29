<template>
    <div>
        <nav-bar/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from './shared/_shopNav.vue'
    export default {
        components:{
            NavBar
        },
        data () {
            return {
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
    
</style>
