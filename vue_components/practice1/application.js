var app =new Vue({
    el:"#app",
    data:{
        passwd:""
    },
    computed:{
        lowercase:function(){
            if(this.passwd.length==0){
                return false
            }
            
            return /[a-z]/.test(this.passwd)
        },
        uppercase:function(){
             if(this.passwd.length==0){
                return false
            }
            return /[A-Z]/.test(this.passwd) 
        },
        number_:function(){
            return /\d/.test(this.passwd)
        },
        special_char:function(){
            let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return format.test(this.passwd)
        },
    }

})