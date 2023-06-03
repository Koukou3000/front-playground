<template>
   <div>
    <hr>
    这是MyPerson组件的内容<br>
    count = {{count}}<br>
     {{height}} {{weight}} {{length}}
       <button @click="vuexAdd">加</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
    name:'MyPerson',
     methods: {
            vuexAdd(){
                this.$store.dispatch('add',1)
            }
        },
    computed:{
        ...mapState(['height','weight','count']),
        ...mapGetters({length:'length'})
    }
}
</script>

<style>

</style>