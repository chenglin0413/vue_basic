const atiguigu = {}


atiguigu.install = function(Vue,options){
   //添加兩個全局指令
   Vue.directive('upper-text',function(el,binding){
        el.innerText = binding.value.toUpperCase()
   })
   Vue.directive('lower-text',function(el,binding){
        el.innerText = binding.value.toLowerCase()
   })

   //給Vue自身添加屬性
   Vue.projectName = '學生管理系統'
   Vue.MyVersion = 'V1.0.1'
   Vue.showInfo = function(){
       console.log('我是一些訊息')
   }

   //給Vue原型上添加數據，供vm使用
   Vue.prototype.$random = function(min,max){
    return Math.floor(Math.random() * (max-min) + (min))
   }
}

