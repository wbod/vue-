 const myMimIn = {
   methods: {
     giveMoney(money){
       this.$parent.money += money
       this.money -= money
     }
   },
}

export default myMimIn;