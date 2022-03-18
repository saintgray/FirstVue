// Router 에 관한 태그는 2개로 나뉜다.

// 1. 해당 요청을 받는 router 로 요청하는 router-link 태그
//      to 속성값에 해당 URL 값을 입력하여 사용한다.
// 2. router-view : URL 값에 따라 갱신되는 화면 영역이다.


var Main={
    template:'<div>I am Main Component</div>'};
var Login={template:'<div>I am Login Component Area</div>'};

// 해당 path 에 대한 보여줄 component 를 명시하는 설정을 정의한다.
var routes=[
    {path: '/main', component: Main}, 
    {path: '/login', component: Login}
]

// VueRouter 인스턴스에 앞서 생성한 routes 설정을 넣는다.
var router = new VueRouter({
    routes
})

// 그 Router 인스턴스를 특정 요소에 mount 한다.
// $mount() API
// el 속성과 동일하게 인스턴스를 화면에 붙이는 역할을 담당한다.
// 즉, el 속성을 사용하지 않았더라도 생성 후 $mount() 를 이용하면 강제로 인스턴스를 화면에
// 부착할 수 있다.

// 또한 Vue 공식문서에도 인스턴스 안에 el 을 지정하지 않고 라우터만 지정하여 생성한 다음
// 생성된 인스턴스를 $mount 를 이용해 붙이라고 명시하고 있다.
var routerMountElement = new Vue({
    router
}).$mount('#router');