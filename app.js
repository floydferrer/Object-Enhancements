function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    };
};

let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

let instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  };



function createAnimal(species, verb, sound) {
    return {
    species,
    [verb](){
        return sound;
        }
    }
};

const dog = createAnimal("dog", "bark", "Woooof!");
const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa");