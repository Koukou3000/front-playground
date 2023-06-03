<template>
    <div>
        <hr>
        XCount<br>
        count = {{countAbout.count}}<br>
        {{personAbout.height}} | {{personAbout.weight/2}} | {{len1}}
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
    name:'XCount',
    computed:{
        ...mapState(['personAbout','countAbout']),
        ...mapGetters({len1:'personAbout/len'}) 
    },
}
</script>

