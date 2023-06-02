<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        <button @click="tellTruth">坦白</button>
    </div>
</template>

<script>
    // export简写形式
    export default {
        name:'MyRoomMate',
        data(){
            return{
                name:'roomMate',
                secret:''
            }
        },
        methods: {
            tellTruth(){
                this.$bus.$emit('studentGet','我____60级', this.name)
            },
        },
    }
</script>