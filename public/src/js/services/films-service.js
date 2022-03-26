async function getFilms(){
    //Fetch un fichier json
    let url = 'http://localhost:8081/src/donnees/films.json';
    let reponse;
    try{   
        reponse = await fetch(url);
        reponse = await reponse.json(); // lit reponse du body et retourne en format JSON
    }catch(err){
        reponse=[];
    }
    return reponse;
}