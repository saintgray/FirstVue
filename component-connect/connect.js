var lcm1={
    template:'#firstcomp'
}

var lcm2={
    template:'#secondcomp'
}

new Vue({
    el:'#first',
    components:{
        'lcm1':lcm1
    }

})

new Vue({
    el:'#second',
    components:{
        'lcm2':lcm2
    }
})


// 상 하위 컴포넌트 관계
// Component 는 각각 고유한 유효 범위를 갖고 있기 때문에 직접 다른 컴포넌트의 값을
// 참조할 수 없다. 따라서 Vue Framework 자체에서 정의한 Component 데이터 전달 방법을
// 따라야 한다. 

// 상위 >> 하위 로 데이터 전달의 경우 props 를 통해 전달된다.
// 하위 >> 상위 로는 이벤트를 통해 데이터를 전달할 수 있다.



Vue.component('child-component',{
    props: ['myprops'],
    template: '<div>{{myprops}}</div>'
})
    // 여기에 data 속성을 정의하여
    // data : {
    //      mymessage: 'I am message'
    // }
    // 로 정의하지 않고 html 에서
    // <child-component v-bind:myprops="상위 컴포넌트의 data 속성명"></child-component>
    // 로 명시하여 상위 컴포넌트의 data 값을 전달 받을 수 있다.


new Vue({
    el: '#propstest',
    data: {
        mymessage: 'I am message'
    }
})
// 즉 이 instance 가 상위 컴포넌트이며 37번 줄에 정의한 컴포넌트가 하위 컴포넌트가 된다.




// 반대로 하위 컴포넌트에서 상위 컴포넌트의 통신은 어떻게 할까?
// 이벤트를 발생시켜 (event emit) 상위 컴포넌트에 신호를 보낸다.
// 이는 상위 컴포넌트가 이벤트를 감지하여 발생시 수신한 후에 상위 컴포넌트의 메소드를 호출하는 방식으로 구현된다.

// 이벤트 발생 문법 : $emit('이벤트명');
// 이벤트 수신 문법 : v-on:이벤트명='상위 컴포넌트의 메소드명' 으로 구현

// 하위 컴포넌트를 다음과 같이 정의한다.
Vue.component('second-child-component',{

    template: '<button v-on:click="showLog">하위 >> 상위 데이터 전달 테스트</button>',
    methods:{
        showLog:function(){
            this.$emit('show-log');
        }
    }

});

// 상위 컴포넌트를 다음과 같이 정의한다.
var childComp=new Vue({
    el:'#eventtest',
    data:{
        mymessage:'Hello'
    },
    methods:{
        printInfo: function(){
            console.log(this.mymessage);
        }
    }
});

// 주의할 점은 하위 컴포넌트를 먼저 정의하고 상위 컴포넌트를 정의해야 한다.


// 관계없는 두 컴포넌트(동 레벨의 컴포넌트) 간의 통신
// eventBus 를 사용하여 데이터를 주고받을 수 있다.










