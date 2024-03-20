Vue.component("message_board", {
    props:["title"],
    template: `<div>
    <h4>{{title}}</h4>
   <p> Your name:<input type="text" v-model="visitor_name"></p>
      <p>  Your message:<input type="text" v-model="visitor_message"></p>
       <p> <button v-on:click="sayhi">say hi</button></p>
       <i class="bi bi-cloud-arrow-up-fill" v-bind:style="{color:icon_color}"></i>
        <ul>
            <li v-for="message in messages"> {{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
        </ul>
        </div>
    `,

    data: function () {
        return {
            visitor_name: "",
            visitor_message: "",
            messages: [],
            icon_color:"green"
        }
    },
    methods: {
        sayhi: function () {
            this.messages.push({ "visitor_name": this.visitor_name, "visitor_message": this.visitor_message });
            this.icon_color="yellow";
            fetch("https://httpbin.org/post",{method:"POST",
            body:JSON.stringify({"visitor_name":this.visitor_name,"visitor_message":this.visitor_message})})
            .then(Response => Response.json()).then(data => {console.log("success",data);
                                                            this.icon_color="green"}).catch(
                                                                (error)=>{
                                                                    console.log("error",error);
                                                                    this.icon_color="red";
                                                                }
                                                            );
            
            
            
            this.visitor_name = "";
            this.visitor_message = "";
            this.$emit("add-to-global-count")
        }
    },
    computed: {
        count: function () {
            return this.messages.length;
        }
    },
    mounted: async function(){
        //using mount hook to load old messages from an api that returns "old_message_example.json"
        r= await fetch("http://localhost:8000/old_message_example.json");
        data= await r.json();
        this.messages=data;
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
