const { createApp } = Vue

  createApp({
    data() {
      return {
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
    }
  }).mount('#app')