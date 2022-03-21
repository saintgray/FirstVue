var parent = {
    template: '#parent'
};
var first_children = {
    template: '#first-children-template'
};
var second_children = {
    template: '#second-children-template'
};

var routes = [
    {
        path: '/parent',
        component: parent,
        // nested component 의 하위 요소는 children 속성에 명시한다.
        children: [
            {
                path: 'first',
                component: first_children
            },
            {
                path: 'second',
                component: second_children
            }
        ]
    }

];

var router = new VueRouter({
    routes
})

var view = new Vue({
    router
}).$mount('#view');