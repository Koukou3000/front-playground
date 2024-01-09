<template>
    <div>
        <button @click="talksth">向父组件传值</button>
        <br>
        {{ p1 }}
       
    </div>
</template>

<script>
export default {
    name:'SonComponent',
    components: {},
    props: ['p1'],
    data() {
        return {
            whichHideInHeart: 'okay.'
        };
    },
    methods: {
        talksth() {
            this.$emit('listen', this.whichHideInHeart)
        }
    }

}
</script>
<style scoped></style>