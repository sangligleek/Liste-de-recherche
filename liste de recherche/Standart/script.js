// Récupère l'élément HTML avec l'ID 'search' et le stocke dans la variable 'searchInput'.
const searchInput = document.getElementById('search');

// Récupère l'élément HTML avec l'ID 'users' et le stocke dans la variable 'userList'.
const userList = document.getElementById('users');



// Ajoute un écouteur d'événement sur l'élément 'searchInput' pour détecter les changements de valeur.
searchInput.addEventListener('input', function() {

    const searchValue = this.value.toLowerCase();  // Récupère la valeur saisie dans 'searchInput' et la convertit en minuscules.


   // Convertit la collection d'éléments 'li' dans 'userList' en un tableau et itère sur chaque élément.
    Array.from(userList.getElementsByTagName('li')).forEach(function(user) {

        const userName = user.innerText.toLowerCase();  // Récupère le contenu texte de chaque élément 'li' et le convertit en minuscules.

       // Vérifie si 'userName' inclut 'searchValue'.
        if (userName.includes(searchValue)) {

            user.style.display = 'block';  // Si 'searchValue' est inclus dans 'userName', affiche l'élément 'user'.


        } else {

            user.style.display = 'none'; // Sinon, cache l'élément 'user'.

        }
    });
});