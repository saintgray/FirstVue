// Vue component
// 화면을 구성할 수 있는 블록을 의미한다.
// Component 를 활용할 경우 화면을 빠르게 구조화하여 일괄적인 패턴으로 개발할 수 있다.
// 또한 코드 수정/확장이 용이하며 관리가 편하며 남이 작성한 코드를 직관적으로 이해할 수 있다.

// Component 종류에는 전역/지역 변수가 있는데
// 선언법은 다음과 같다.

//  1. 전역 Component
//      Vue.component('컴포넌트 이름', { 내용 });

Vue.component('global-comp',{
    template: '<div>전역 컴포넌트입니다></div>'
});
// html template 요소를 참고하는 Component
Vue.component('template-comp',{
    template: '#test'
});


// 2. 지역 Component
// var 컴포넌트이름 ={ 내용 }

var localComp={ template :  '<div>지역 컴포넌트입니다</div>' };

new Vue({
    el: '#comp',
    // 전역 컴포넌트의 경우 어디서는 접근 가능하기 때문에 component 속성을 적용하지 않아도
    // 해당 el 요소에 자동으로 붙여지지만 local Component 의 경우 그렇지 않기 때문에
    // 어떤 지역 component 를 넣을 지 명시해 주어야 한다 
    components: {
        // 컴포넌트 이름 : 변수명
        'local-comp' : localComp 
    }
});

new Vue({
    el:'#templateComponent'
})


// 만약 지역 컴포넌트를 인스턴스의 components 속성에 등록하지 않는다면 결과적으로는 유효범위가 벗어난 것이기 때문에
// 해당 요소에 부착되지 않는다.



