Vue.component("message_board", {
    props:["title"],
    template: `<div>
    <h4>{{title}}</h4>
   <p> Your name:<input type="text" v-model="visitor_name"></p>
      <p>  Your message:<input type="text" v-model="visitor_message"></p>
       <p> <button v-on:click="sayhi">say hi</button></p>
        <ul>
            <li v-for="message in messages"> {{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
        </ul>   
        </div>
    `,

    data: function () {
        return {
            visitor_name: "",
            visitor_message: "",
            messages: []
        }
    },
    methods: {
        sayhi: function () {
            this.messages.push({ "visitor_name": this.visitor_name, "visitor_message": this.visitor_message });
            this.visitor_name = "";
            this.visitor_message = "";
            this.$emit("add-to-global-count")
        }
    },
    computed: {
        count: function () {
            return this.messages.length;
        }
    }
})

var app = new Vue({
    el: "#app",
    data:{
        global_count:0
    },
    methods:{
        global_count_func:function(){
            this.global_count+=1;
        }
    }
}

)
