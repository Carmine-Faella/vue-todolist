const { createApp } = Vue

  createApp({
    data() {
      return {
        newdo:'',
        toDoList:[
            {
                text:'Fare la spesa',
                done:false
            },
            {
                text:'Portare fuori il cane',
                done:true
            },
            {
                text:'Studiare',
                done:false
            }
        ]
      }
    },
    methods: {
        remove(index){
            this.toDoList.splice(index, 1)
        },
        add(){
            const newText = {
                text:this.newdo,
                done:false
            };

            this.toDoList.unshift(newText);
            this.newdo=''
        },
        checkDo(index){
            if(this.toDoList[index].done == true){
                this.toDoList[index].done = false;
                console.log(this.toDoList[index].done)
            }else{
                this.toDoList[index].done = true
            }
        }
    }
  }
).mount('#app')