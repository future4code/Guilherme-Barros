interface CartoonCharacter{
   [index:string]:string
}

const homer:CartoonCharacter = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"

console.log(homer);