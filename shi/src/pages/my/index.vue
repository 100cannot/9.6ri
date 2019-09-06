<template>
    <div class="my">
         <section class="section">
            我的
        </section>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/footer'
export default {
    props:{

    },
    components:{
        Footer
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.section{
    flex: 1;
}
</style>