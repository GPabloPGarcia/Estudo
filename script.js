let income = 8057.45;
const calculation = income => {
/*
    55% PARA O QUE É ESSENCIAL
    5%  PARA EDUCAÇÃO – LIVROS, CURSOS, MAIOR ERRO
    30% PARA OBJETIVOS DE MÉDIO E LONGO PRAZO – VIAGEM/ ABRIR UM NEGÓCIO
    10% PRA GASTAR COM O QUE VC QUISER! 
*/
    return {
        ESSENCIAL: ((55 / 100) * income).toFixed(2),
        EDUCATION: ((5 / 100) * income).toFixed(2),
        GOALS: ((30 / 100) * income).toFixed(2),
        FREE: ((10 / 100) * income).toFixed(2),
    }
};

console.log(calculation(income));
