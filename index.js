class Telephone{
    constructor(){
       this.phoneNumbers  = new Set()
        this.observers  = new Set()
    }



  addPhoneNumber(number){
    this.phoneNumbers.add(number)
    return (` ${number} has been added`)
  }

  removePhoneNumber(number){
    if(this.phoneNumbers.has(number)){
        this.phoneNumbers.delete(number)
        return (` ${number} has been removed`)
    } else {
        return (` ${number} not Found`)
    }
   
  }


  dialPhoneNumber(number){
   if(this.phoneNumbers.has(number)){
    this.notify(number)
    return ( `I am calling ${number}`)
   }
   return (`cannot dial ${number}`)
  }

  addObserver(observer){
    this.observers.add(observer)
     return (` ${observer} has been added`)
  }

  removeObserver(observer){
   this.observers.delete(observer)
    return (` ${observer} has been removed`)
   
  }

  notify(number){
    for(let observer of this.observers) {
     observer.update(number)
    }
 }
}

class Observer1 {
 
    update(number){
console.log(number)
    }
}

class Observer2 {
    update(number){
  console.log(`Now Dialling ${number}`)
    }
}

const telephone = new Telephone;

const observer1 = new Observer1;
const observer2 = new Observer2;

telephone.addObserver(observer1)
telephone.addObserver(observer2)
console.log(telephone.addPhoneNumber('09136675237'))
console.log(telephone.addPhoneNumber('08016674289'))
console.log(telephone.dialPhoneNumber('09136675237'))
console.log(telephone.removePhoneNumber('09136675237'))
