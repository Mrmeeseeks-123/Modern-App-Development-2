const store=new Vuex.Store({
    state: {
        global_count:0
    },
    mutations:{
        increment_global_count: function(state){
            state.global_count++;
        }
        }
    })
const about =Vue.component("about",{
    template:`<div>
    <h3> About </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, tortor eu fringilla hendrerit, nunc metus luctus massa, sit amet aliquam magna dolor ac magna. Integer nec quam feugiat, viverra eros id, tincidunt arcu. Nullam ipsum purus, suscipit ac neque sed, lacinia maximus nibh. Pellentesque tortor mauris, sagittis non suscipit quis, consequat posuere ante. Morbi eget sagittis mauris. Nam quis facilisis leo. Nullam at nunc ut urna scelerisque semper ac tincidunt libero. Donec eget purus at metus tempus tincidunt eu sed erat. Phasellus at scelerisque sapien. Aenean nulla mi, vestibulum id iaculis sit amet, laoreet eget ipsum.<p>
      <p>Vestibulum venenatis placerat quam eu pharetra. Ut a mi imperdiet, efficitur nunc sed, fringilla est. Phasellus id felis eget leo vulputate bibendum sit amet nec lorem. Nam et ligula lorem. Nullam lobortis condimentum lacus, et ultricies nisl interdum vitae. Aenean euismod, erat ac vestibulum fermentum, erat eros dapibus ligula, a dignissim lorem tellus vel purus. Ut cursus quis mauris non pharetra.</p>
  </div>`
})
const privacypolicy = Vue.component("privacy-policy", {
    template:
        ` <div>
        <h3> Privacy Policy </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, tortor eu fringilla hendrerit, nunc metus luctus massa, sit amet aliquam magna dolor ac magna. Integer nec quam feugiat, viverra eros id, tincidunt arcu. Nullam ipsum purus, suscipit ac neque sed, lacinia maximus nibh. Pellentesque tortor mauris, sagittis non suscipit quis, consequat posuere ante. Morbi eget sagittis mauris. Nam quis facilisis leo. Nullam at nunc ut urna scelerisque semper ac tincidunt libero. Donec eget purus at metus tempus tincidunt eu sed erat. Phasellus at scelerisque sapien. Aenean nulla mi, vestibulum id iaculis sit amet, laoreet eget ipsum.<p>
          <p>Vestibulum venenatis placerat quam eu pharetra. Ut a mi imperdiet, efficitur nunc sed, fringilla est. Phasellus id felis eget leo vulputate bibendum sit amet nec lorem. Nam et ligula lorem. Nullam lobortis condimentum lacus, et ultricies nisl interdum vitae. Aenean euismod, erat ac vestibulum fermentum, erat eros dapibus ligula, a dignissim lorem tellus vel purus. Ut cursus quis mauris non pharetra.</p>
      </div>`
})
const messageboard = Vue.component("message_board", {
    props: ["title"],
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
            icon_color: "green"
        }
    },
    methods: {
        sayhi: function () {
            this.messages.push({ "visitor_name": this.visitor_name, "visitor_message": this.visitor_message });
            this.icon_color = "yellow";
            fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({ "visitor_name": this.visitor_name, "visitor_message": this.visitor_message })
            })
                .then(Response => Response.json()).then(data => {
                    console.log("success", data);
                    this.icon_color = "green"
                }).catch(
                    (error) => {
                        console.log("error", error);
                        this.icon_color = "red";
                    }
                );



            this.visitor_name = "";
            this.visitor_message = "";
            //this.$emit("add-to-global-count")
            this.$store.commit('increment_global_count');
        }
    },
    computed: {
        count: function () {
            return this.messages.length;
        }
    },
    // mounted: async function () {
    //     //using mount hook to load old messages from an api that returns "old_message_example.json"
    //     r = await fetch("http://localhost:8000/old_message_example.json");
    //     data = await r.json();
    //     this.messages = data;
    // }
})

const routes=[
    {path:'/',component:messageboard,props:{"title":"abcd"}},{path:'/privacy-policy',component:privacypolicy},{path:'/about',component:about}
];
const router=new VueRouter(
    {routes
    }
)


var app = new Vue({
    el: "#app",
    router:router,
    store:store,
    computed:{
        super_count:function(){
            return store.state.global_count;
        }
    }
    })
