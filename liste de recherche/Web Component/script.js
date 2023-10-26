//Défini la classe FilterableList qui héritera des fonctionnalités et des comportements de base des éléments HTML.
class FilterableList extends HTMLElement {

      // Lorsque l'élément personnalisé est connecté au DOM.
    connectedCallback(){
        // Définit le contenu HTML de l'élément. "generateUserList" est appelée et son résultat est inséré dans la chaîne de texte.
      this.innerHTML = `
        <ul id="users">
          ${this.generateUserList()} 
        </ul>
      `;
      
      // Récupère l'élément d'entrée de recherche avec l'ID 'search'.
      this.searchInput = document.getElementById('search');

      // Récupère la liste d'utilisateurs avec l'ID 'users'.
      this.userList = document.getElementById('users');
  
      // Ajoute un écouteur d'événements sur l'entrée de recherche pour déclencher la fonction filterNames en utilisant bind(this) pour lier la méthode à l'instance actuelle de la classe.
      // Filtre les noms affichés.
      this.searchInput.addEventListener('input', this.filterNames.bind(this));

    }

      // Génère le contenu HTML de la liste d'utilisateurs en fonction des attributs 'item-' et de leurs valeurs.
    generateUserList() {
      
      let userListHTML = ''; // Cette variable sera utilisée pour stocker le contenu HTML généré pour la liste.
      let index = 0;
      while (this.getAttribute('item-' + index) !== null) { // Tant que l'attribut "item-" + index existe. L'attribut "item-" est utilisé pour définir les noms des utilisateurs et chaque utilisation de cet attribut correspond à un utilisateur dans la liste.
        const user = this.getAttribute('item-' + index); // Récupère la valeur de l'attribut "item-" + index, c'est-à-dire le nom de l'utilisateur.
        userListHTML += `<li><a href="#">${user}</a></li>`; // Cette ligne ajoute une balise <li> contenant une balise <a> au contenu HTML généré userListHTML. La valeur de user (le nom de l'utilisateur) est insérée dans cette structure HTML à l'aide de ${user}.
        index++; // Cette ligne incrémente la valeur index de 1, afin de passer à l'attribut suivant lors de la prochaine boucle.

      }
      return userListHTML; // Retourne le contenu HTML généré.
    }
  
      // Filtre les noms.
    filterNames() {

      // Récupère la valeur de recherche en minuscules depuis l'entrée de recherche.
      const searchValue = this.searchInput.value.toLowerCase();
  

      // Parcourt chaque élément <li> de la liste d'utilisateurs.
      Array.from(this.userList.getElementsByTagName('li')).forEach(function(user) {
        const userName = user.innerText.toLowerCase(); // Récupère le contenu texte en minuscules de l'élément <li>.
  

        // Vérifie si le nom de l'utilisateur contient la valeur de recherche.
        if (userName.includes(searchValue)) {

          user.style.display = 'block'; // Affiche l'élément <li> si le nom correspond à la recherche.
        } else {
          user.style.display = 'none'; // Masque l'élément <li> si le nom ne correspond pas à la recherche.
        }
      });
    }
  }
  
  
  // Définit l'élément personnalisé 'filterable-list' en utilisant la classe FilterableList.
  customElements.define('filterable-list', FilterableList);