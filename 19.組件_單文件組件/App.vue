
/* 配置組件的結構 */
<template>
   <div>
       <h2>我是App，我有一台{{car}}</h2>
       <school/>
   </div>
</template>

/* 配置組件數據、交互、事件等等 */
<script>
        //引入School組件
        import School from './components/School.vue'
    export default {
        data(){
            return{
                car:'馬自達'
            }
        },
        components:{
            School,
        }
    }
</script>