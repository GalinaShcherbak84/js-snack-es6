$(document).ready(function(){
    // jsnack 1
    
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    /* const bici = [
        {
            nome: 'bicicletta1',
            peso: 8,
        },
        {
            nome: 'bicicletta2',
            peso: 11,
        },
        {
            nome: 'bicicletta3',
            peso: 10,
        },
    ];
    console.log(bici);
    
    // Stampare a schermo la bici con peso minore
    let biciLegera = bici[0];
    for(let i = 1; i < bici.length; i++){
        if(bici[i].peso < biciLegera.peso){
            biciLegera = bici[i];
        } 
    }
    console.log(`la bici con il peso più legero è: ${biciLegera.nome}`);
    
    // snack 2
    // creare un array di oggetti di squadre di calcio
    
    const teams = [
        {
            nome: 'squadra1',
            puntiFatti: 0,
            falliSubiti: 0,
        },
        {
            nome: 'squadra2',
            puntiFatti: 0,
            falliSubiti: 0,
        },
        {
            nome: 'squadra3',
            puntiFatti: 0,
            falliSubiti: 0,
        },
        {
            nome: 'squadra4',
            puntiFatti: 0,
            falliSubiti: 0,
        },
    ]; 
    console.log(teams);
    
    // generare i numeri random al posto degli 0
    for(let i = 0; i < teams.length; i++){
        let team = teams[i];
        team.puntiFatti = randomNumber(0, 10);
        team.falliSubiti = randomNumber(0, 10);
    }
    console.table(teams);
    
    // creare un nuovo array solo con i nomi e falli subiti
    const newTeams = [ ];
    for(let i = 0; i < teams.length; i++){
        let team = teams[i];
        newTeams.push({
            nome: team.nome,
            falliSubiti: team.falliSubiti
        });
    }
    console.table(newTeams);
    
    function randomNumber (min, max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    } */
    

    /* Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
    inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter */
        /* const myArray = ['Paolo', 'Fabbio', 'Giulia', 'luca', 'Marco'];

        console.log(myArray);

        let min = parseInt(prompt('Inserisci un numero tra 0 e 5.').trim());

        while(isNaN(min) || min < 0 || min > myArray.length || min ==''){
            min = parseInt(prompt('Inserisci un numero tra 0 e 5.').trim());
        }

        let max = parseInt(prompt('Inserisci un numero tra ' + min + ' e 5.').trim());

        while(isNaN(max) || max <= min || max > myArray.length || max ==''){
            min = parseInt(prompt('Inserisci un numero tra ' + min + 'e 5.').trim());
        }

        console.log(min, max); */

        // usando for
        //let newArray = [];
        /* function filterArray(arr, min, max){
            for(let i = 0; i < arr.length; i++){
                if(min <= i && i <= max){
                 newArray.push(arr[i]);
                }
            } 
        }
        filterArray(myArray, min, max);
        console.log(newArray); 
        
        //usando filter
        const newFiltrerArray = myArray.filter((element, index) => {
            return min <= index && max >= index;
        })
        console.log(newFiltrerArray); */

        // usando forEach
        /* myArray.forEach((element, index) => {
            if(min <= index && index <= max){
                newArray.push(element);
               }
        })
        console.log(newArray); */



        /* Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello,
        tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
        Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50
        (potete sfruttare il map per aggiungere la nuova proprietà) */

        //funzione i numeri random
        let numeriRandom = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1 ) + min );
        };

        const arrayObj = [
            {name: 'Laura', type: 'Vestito', color: 'Rosso',},
            {name: 'Olga', type: 'Maglione', color: 'Verde',},
            {name: 'Maria', type: 'Gonna', color: 'Viola',},
            {name: 'Elza', type: 'Camicia', color: 'Bianco',},
        ];

        console.log(arrayObj);

        const newArrayObj = arrayObj.map((element) =>{
            console.log(element);
            const newElement = {
                ... element,
                prezzo: numeriRandom(10, 100)
            }
            return newElement;
        })
        console.log(newArrayObj);
    })

    