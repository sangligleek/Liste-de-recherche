// Définition de la classe FilterableList.
class FilterableList {

    // Constructeur prenant en paramètre les éléments d'entrée de recherche et de liste d'utilisateurs.
    constructor(searchInput, userList) {

      // Assignation des éléments d'entrée aux propriétés de la classe.
      this.searchInput = searchInput;
      this.userList = userList;
  
      // Ajout d'un écouteur d'événement sur l'élément de saisie de recherche pour déclencher la fonction de filtrage, fonction de rappel (callback). bind(this) pour lier la méthode à l'instance actuelle de la classe .
      // Filtre les noms affichés.
      this.searchInput.addEventListener('input', this.filterNames.bind(this));
    }
  


    // Fonction de filtrage des noms.
    filterNames() {

      // Récupération de la valeur de recherche saisie dans l'élément d'entrée et conversion en minuscules.
      const searchValue = this.searchInput.value.toLowerCase();
  

      // Convertit la collection d'éléments 'li' dans 'userList' en un tableau et itère sur chaque élément.
      Array.from(this.userList.getElementsByTagName('li')).forEach(function(user) {

        // Récupère le contenu texte de chaque élément 'li' et le convertit en minuscules.
        const userName = user.innerText.toLowerCase();
  
        // Vérifie si 'userName' inclut 'searchValue'.
        if (userName.includes(searchValue)) {

          user.style.display = 'block';  // Si 'searchValue' est inclus dans 'userName', affiche l'élément 'user'.


        } else {
          
          user.style.display = 'none';  // Sinon, cache l'élément 'user'.

        }
      });
    }
  }
  
  // Récupération des éléments HTML avec les identifiants 'search' et 'users'.
  const searchInput = document.getElementById('search');
  const userList = document.getElementById('users');
  
  // Création d'une instance de la classe FilterableList avec les éléments récupérés.
  const filterableList = new FilterableList(searchInput, userList);