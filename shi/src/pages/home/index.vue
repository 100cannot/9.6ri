<template>
    <div class="home">
        <section class="section">
           <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide><img src="logo.png" alt=""></swiper-slide>
            <swiper-slide><img src="logo.png" alt=""></swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <!-- Optional controls -->
        </swiper>
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
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.section{
    flex: 1;
}
</style>