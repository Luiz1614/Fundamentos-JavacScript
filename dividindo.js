const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
]

const sala1 = alunos.slice(0, alunos.length/2) //divide os indices do 0 até o 9 sem alterar a array principal
const sala2 = alunos.slice(alunos.length/2) // divide os indices do 10 até o 20 sem alterar o array principal

console.log(sala1)
console.log(sala2)