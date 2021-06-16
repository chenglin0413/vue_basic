/*
    較針來講:當前的這個Vue文件，並不是一個組件，而是一個組件所需的所有配置
*/

/* 配置模板結構 */
<template>
    <div>
        <h2 class="title">學校的名字是: {{name}}</h2>
        <h2 class="info" @click="showAddress">學校的地址是: {{address}}</h2>′
    </div>
</template>

/* 配置組件數據、交互、事件等等 */

<script>
    //較真來說，此處只是暴露了一個組件的配置，並沒有去創建組件，因為沒有調用Vue.extend
    export default {
        // data中存放組件所需數據
        data(){
            return {
                name:'上矽谷',
                address:'基隆路',
            }
        },
        methods: {
            showAddress(){
                alert(this.address)
            }
        },
    }
</script>

/* 配置組件樣式 */
<style>
    .title{
        background-color: orange;
    }
    .info{
        background-color: pink;
    }
</style>