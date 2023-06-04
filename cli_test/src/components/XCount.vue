<template>
    <div>
        <hr>
        XCount 原生方式<br>
        count = {{countAbout.count}}<br>
        {{personAbout.height}} | {{personAbout.weight/2}} | {{len1}}
        <button @click="add">actions ++</button>
        <button @click="addMu">MUTATIONS +++</button>
    </div>
</template>

<script>

export default {
    name:'XCount',
    computed:{
        personAbout(){
            return this.$store.state.personAbout
        },
        countAbout(){
            return this.$store.state.countAbout
        },
        // ...mapState(['personAbout','countAbout']),     
        len1(){
            return this.$store.getters['personAbout/len'] //getters.personAbout/len 
        }
        // ...mapGetters({len1:'personAbout/len'}) 
    },
    methods: {
        add(){
            this.$store.dispatch('countAbout/add',3)
        },
        addMu(){
            this.$store.commit('countAbout/ADD',114)
        }

    },
}
</script>

