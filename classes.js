class Animal {
  constructor(options) {
    this.speed = 0
    this.name = options.name
  }
  run(speed) {
    this.speed = speed
    console.log(
      `this animal's name is ${this.name} and runs at speed of ${this.speed}`
    )
  }
  stop(){
    console.log(`this animalstops`)
  }
}

const Elephant = new Animal( {name: 'Elephant'} )
Elephant.run(50)

class Rabbit extends Animal {
  constructor(options){
    super(name)
    this.name = options.name
  }
  hide(){
    console.log(`${this.name} hides`)
  }
  stop(){
    console.log(`${this.name}`)
  }
}
let rabbit = new Rabbit({name:"rabbit", earLength: 10})
rabbit.run(7)
rabbit.hide()
rabbit.stop()