var app= new Vue({
    el:"#app",
    data:{
        message:"hello world",
        visitor_name:"",
        visitors: []
    },
    methods: {sayhi: function(){
        this.message="hi";
        this.visitors.push(this.visitor_name);
        this.visitor_name=""
    }
    },
    computed:{
        count:function(){
            return this.visitors.length ;
        }
    }   
    },
)