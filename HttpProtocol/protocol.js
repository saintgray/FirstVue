// View Resource 라이브러리를 사용한 http 통신
new Vue({
    el:'#V-resource',
    methods:{
        getDataWithVR:function(){
            this.$http.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
                      .then(function(response){
                          console.log(response);
                          console.log(JSON.parse(response.data));
                      });
        }
    }
})


// axios 를 사용한 http 통신
new Vue({
    el:'#Axios',
    methods:{
        getDataWithAxios:function(){
            axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
                 .then(function(data){
                     console.log(data);
                     // 뷰 라이브러리와 다르게 data 속성이 일반 문자열 형식이 아니라
                     // 객체 형태로 자동 변환되기 때문에 JSON.parse()를 사용하여 객체로 변환해줄 필요가 없다.
                     // 즉 이 점이 axios 가 Vue Library 보다 더 범용적으로 쓰이는 이유이기도 하다.(code diet)
                 });
        }
    }
})

