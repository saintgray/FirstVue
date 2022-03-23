var Body={
    template:'#content'
}

var Header={
    template:'#header'
}

var Footer={
    template:'#footer'
}
// var routes=[
//   {
//      path, component 정의  
//   }
// ]
//
// 후에 
// new VueRouter({
//      router    
// })
// 형식으로 쓸 수도 있지만 VueRouter 생성자 안에 routes 속성을 바로 정의할 수도 있다.
var router = new VueRouter({
    routes:[
        {
            path:'/',
            components:{
                // 좌항은 router-view의 name 속성값이 위치하며 우변에는 넣을 컴포넌트 변수명을 쓴다.
                // default 는 router-view 태그의 name 속성값이 정해지지 않았을 경우 들어갈 컴포넌트를 의미한다.
                default:Body,
                header:Header,
                footer:Footer
            }
        }
    ]
})


var app=new Vue({
  router  
}).$mount('#globalwrap');