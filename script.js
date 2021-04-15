$(document).ready(function(){
    // jsnack 1
    
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    const bici = [
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
    }
    
    })