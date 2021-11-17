const { uuid } = require('uuidv4');

let alunos = [];

module.exports = {
    Query: {
        alunos: () => alunos,
        aluno: (_, { id }) => alunos.find(aluno => aluno.id == id)
    },
    Mutation: {
        createAluno: (_, {
            nome,
            curso,
            semestre,
            ra,
            cpf,
            cidade,
        }) => {
            const aluno = {
                id: uuid(),
                nome,
                curso,
                semestre,
                ra,
                cpf,
                cidade,
                creation: new Date(),
                lastUpdate: new Date()
            }

            alunos.push(aluno);

            return aluno;
        },
        updateAluno: (_, {
            id,
            nome,
            curso,
            semestre,
            ra,
            cpf,
            cidade,
        }) => {
            const indice = alunos.findIndex(aluno => aluno.id == id);

            if (indice == -1)
                return null;

            alunos[indice].nome = nome;
            alunos[indice].curso = curso;
            alunos[indice].semestre = semestre;
            alunos[indice].ra = ra;
            alunos[indice].cpf = cpf;
            alunos[indice].cidade = cidade;
            alunos[indice].lastUpdate = new Date();

            return alunos[indice];
        },
        deleteAluno: (_, {
            id
        }) => {
            const indice = alunos.findIndex(aluno => aluno.id == id);

            if (indice == -1)
                return null;

            alunos.splice(indice, 1);

            return alunos[indice];
        },
    }
};