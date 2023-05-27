<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        {{name}} -- {{age}}
    </div>
    
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:'kou',
                age:18
            }
        }

    }
</script>

<style>

</style>
