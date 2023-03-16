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
        }
      }
  }
).mount('#app')