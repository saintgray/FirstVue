// 1. Vue 인스턴스의 생성
// new Vue({ ... })
//   - 속성 : 인스턴스 생성 내에 선언된 Vue 속성들을 의미
new Vue({
    el: '#app',
    data:{
        message:'Hellow Vue.js!'
    }

})

// el : element 의 약자로 해당 타겟 요소를 지정하는 속성
// data : 해당 타겟 요소에 표현할 변수명과 값을 지정하는 속성
// 예를 들어 data : { message : 'Hello'}
// 라고 지정을 하였다면 app 요소 안에 {{message}} (변수명) 으로 기술하여 
// 지정한 변수를 출력해 줄 수 있다.
// template : 화면에 표시할 HTML ,CSS, 등의 마크업 요소를 정의하는 속성
// methods : 화면 로직 제어와 관계된 method 를 정의하는 속성. 전반적인 이벤트를 제어하는 로직 추가 가능
// created : 뷰 인스턴스 생성 직후 실행할 로직을 정의할 수 있는 속성




// 인스턴스의 유효범위
// 옵션 속성들은 HTML 요소의 특정 범위 안에서만 적용되는데 전역/지역 컴포넌트 개념과 연관된다.
// 화면에 내가 생성한 인스턴스의 옵션 속성을 적용하는 과정은 다음과 같다.
//  - 1. Vue 라이브러리 파일 로딩
//  - 2. 인스턴스 객체 생성(옵션 속성 포함)
//  - 3. 특정 화면 요소에 인스턴스를 붙임
//  - 4. 인스턴스 내용이 화면 요소로 변환
//  - 5. 변환된 화면 요소를 클라이언트가 최종 확인
new Vue({
    el: '#scopetest',
    data:{
        greeting : 'HELLO!'
    }
})



// 뷰 인스턴스의 라이프 사이클
// 인스턴스 생성 - 인스턴스를 화면에 부착 - 인스턴스 내용 갱신 - 인스턴스 소멸 4단계가 뷰 인스턴스의 life cycle 이다

// 이 4단계 사이에 속성을 정의하여 로직을 추가할 수 있다.
// 1. 1-2 단계 사이
//      이벤트 및 라이프 사이클 초기화
//      직후 beforeCreate 정의 가능
//      화면에 반응성 주입
//      created 정의 가능
//      el, template 속성 확인 >> template 속성 내용을 render() 로 변환
//      beforeMount 적용 가능
//      $el 생성 후 el 속성 값을 대입(mount 과정)
//      mounted 적용 가능

// 2. 2-3 단계 사이
//      인스턴스의 데이터 변경
//          beforeUpdate 적용 가능
//      화면 재 렌더링 및 데이터 갱신(update 과정)
//          update 적용 가능

// 3. 3-4 단계 사이
//      인스턴스 접근 가능
//          beforeDestroy 적용 가능
//      컴포넌트, 인스턴스, 디렉티브 등 모두 해제(destroy 과정)
//          destroyed 적용 가능

new Vue({
    el:'#lifecycle',
    data:{
        lifecycle:'lifecycle'
    },
    beforeCreate : function(){
        console.log("beforeCreate");
    },
    created:function(){
        console.log("created");
    },
    mounted:function(){
        console.log("Monted");
        // 밑의 updated 의 함수가 호출되기 위해서는 binding 되는 data 의 값이 변경되어야 수행된다.
        this.lifecycle='lifecycle changed';
        // 만약 이 로직이 없었다면 콘솔 창에는 updated 가 찍히지 않을 것이다.
    }, 
    updated: function(){
        console.log("updated");
    }
})


