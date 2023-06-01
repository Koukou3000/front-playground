<template>
    <div>
        Vue在合适的时机给DOM元素加上css类名
        <button @click="isShow = !isShow">!isShow</button>
        
        <transition appear name="t1">
            <div v-show="isShow" class="d1">color bar 1</div>
        </transition>

        <transition appear name="t2">
            <div v-show="isShow" class="d2">color bar 2</div>
        </transition>
        
    </div>
</template>

<script>
    export default {
        name: 'TransitionLearn',
        data(){
            return{
                isShow: true
            }
        }
    }
</script>

<style scoped>
    /* transition */
    .d1{
        background: skyblue;
        color: white;
        text-align: center;
        /* transition: 0.5s linear; */
    }
    .t1-enter, .t1-leave-to{
        transform: translateX(-100%);
    }
    .t1-enter-to, .t1-leave{
        transform: translateX(0);
    }
    .t1-enter-active, .t1-leave-active{
        transition: 0.5s linear;
    }  


    /* keyframe */
    .d2{
        background: #333;
        color: orange;
        text-align: center;
    }
    .t2-enter-active{
        animation: anime01 0.5s linear;
    }
    .t2-leave-active{
        animation: anime01 0.5s linear reverse;
    }
    @keyframes anime01{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
 
   
</style>

