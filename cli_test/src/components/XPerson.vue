<template>
   <div>
        <hr>
        XPerson 简写方式<br>
        count = {{count}}<br>
        {{height}}cm - {{weight/2}}kg - {{len}}cm
       <button @click="add(1)">+</button>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    name:'XPerson',
    computed:{
        // 从Vuex.Store设置的模块中，寻找对应内容
        ...mapState('countAbout',['count']), // 一个模块，多个state
        ...mapState('personAbout',['height','weight']),
        ...mapGetters('personAbout',['len'])
        
    },
    methods: {
        // add(){this.$store.dispatch('add',1)}
        // ...mapActions({vuexAdd:'countAbout/add'}), // 属性用【.】，方法用【/】
        ...mapActions('countAbout',['add']), 
    },
}
</script>

