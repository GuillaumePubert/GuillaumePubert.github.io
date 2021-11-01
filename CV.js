function affichage(id){
    let affichage = document.getElementById(id);
	affichage.classList.toggle("d-none");
    let fleche = document.getElementById("fleche"+id);
    fleche.classList.toggle("rotate");
    
    
}

function main(){
     document.getElementById("bouttonFormation").addEventListener('click',function(){affichage("Formation")});
     document.getElementById("bouttonCompetence").addEventListener('click',function(){affichage("Competence")});
     document.getElementById("bouttonExperience").addEventListener('click',function(){affichage("Experience")});
     document.getElementById("bouttonInteret").addEventListener('click',function(){affichage("Interet")});
}

main();
