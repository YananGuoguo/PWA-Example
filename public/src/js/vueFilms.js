var vueListeFilms="";
var tabFilms = [];

async function remplirTabFilms(reponse){
    if(reponse.length>0){//pas null
        tabFilms=reponse;
        // console.log("reponse",reponse)
    }else{//on est hors ligne et on va chercher nos données dans notre store films
        tabFilms= await contenuStore('films');
    }
}

async function listeFilms(){
    reponse = await getFilms();
    await remplirTabFilms(reponse);
    
for(unFilm of tabFilms){
vueListeFilms += '<div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">'+
'              <div class="mdl-card__media">'+
'                <img src="'+unFilm.CheminPochette+'" height:"120px">'+
'              </div>'+
'              <div class="mdl-card__title">'+
'                 <h4 class="mdl-card__title-text">'+unFilm.Titre+'</h4>'+
'              </div>'+
'              <div class="mdl-card__supporting-text">'+
'                <p class="mdl-typography--font-light mdl-typography--subhead"><strong>Titre : </strong>'+unFilm.Titre+'</p>'+
'                <p class="mdl-typography--font-light mdl-typography--subhead"><strong>Réalisateur : </strong>'+unFilm.Realisateur+'</p>'+
'                <p class="mdl-typography--font-light mdl-typography--subhead"><strong>Catégorie : </strong>'+unFilm.Categorie+'</p>'+
'                <p class="mdl-typography--font-light mdl-typography--subhead"><strong>Durée : </strong>'+unFilm.Duree+'</p>'+
'              </div>'+
'              <div class="mdl-card__actions">'+
'                 <a class="films-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">'+
'                   Savoir plus'+
'                   <i class="material-icons">chevron_right</i>'+
'                 </a>'+
'              </div>'+
'            </div>         ';
}
document.getElementById("listeFilms").innerHTML+=vueListeFilms;
}