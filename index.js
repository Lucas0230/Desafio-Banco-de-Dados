let array = [
    {
        value: '200',
        date: '2022-05-30T22:38:18.203Z'
    },
    {
        value: '100',
        date: '2022-09-30T22:38:18.203Z'
    },
    {
        value: '14',
        date: '2022-03-30T22:38:18.203Z'
    },
    {
        value: '50',
        date: '2021-05-30T22:38:18.203Z'
    },
    {
        value: '1259',
        date: '2023-05-30T22:38:18.203Z'
    }
]

import readline from 'readline';

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function quests() {

    leitor.question("Qual o ano?\n", (response) => {

        var year = response;

        if (parseInt(year) <= 0) {
            console.log('❌ O valor digitado é inválido!')
            return quests();
        }

        leitor.question("Qual o mês?\n", (response) => {

            var month = response;

            if (parseInt(month) <= 0 || parseInt(month) > 12) {
                console.log('❌ O valor digitado é inválido!')
                return quests();
            }

            getValue(year, month)
            leitor.close()
        });

    });


}

quests();

async function getValue(year, month) {

    // Transforma os valores em numéricos
    month = parseInt(month);
    year = parseInt(year);

    let index = 0;
    let stop = false;

    // Loop para pesquisar entre os dados
    while (!stop) {

        let yearTest = array[index].date.slice(0, 4);
        let monthTest = array[index].date.slice(5, 7);

        if (yearTest == year && monthTest == month) {
            console.log('------------------------------------------------')
            console.log('🚀 O valor encontrado foi:', array[index].value)
            console.log('------------------------------------------------')
            break;
        }

        index++

        if (index == array.length) {
            index = 0;
            month--
        }

        if (month == 0) {
            month = 12;
            year--
        }

        if (year <= 0) {
            stop = true
            console.log('Não achamos dados para esta data!')
        }

    }
}
