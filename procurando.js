const alunos = ['João', 'Ana', 'Caio'];
const media = [10, 8, 9];

const listaGeral = [alunos, media] // Cria uma lista com duas outras listas dentro

function exibeNomeENota(Aluno) {
    if(listaGeral[0].includes(Aluno)){ // Includes confere se o que foi passado no parametro ta incluso na lista

        //const alunos = listaGeral[0];
        //const media = listaGeral[1];

        const [alunos, media] = listaGeral // mesma função das declaraçoes de const acima

        const indice = alunos.indexOf(Aluno) // IndexOf utilizado para mostrar o indice de algo

        const MediaAluno = media [indice] // Pesquisa a lista de médias e mostra a nota do aluno

        console.log(`A média de ${Aluno} é ${MediaAluno}`)

    }
    else{
        console.log('Aluno não encontrado!')
    }
}

exibeNomeENota('Ana')
