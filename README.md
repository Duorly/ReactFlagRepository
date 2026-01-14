# 🌍 FlagRepository

**FlagRepository** est une application web développée en React permettant de découvrir, rechercher et filtrer les drapeaux du monde à partir de l’API **REST Countries**.

Le projet met l’accent sur l’utilisation d’API REST, la création de composants React interactifs et la gestion dynamique des données côté frontend.

---

## 🎯 Objectifs pédagogiques

* Comprendre et consommer une API REST
* Manipuler les hooks React (`useState`, `useEffect`)
* Créer des composants réutilisables
* Implémenter des filtres et une recherche dynamique
* Concevoir une interface responsive (mobile & desktop)

---

## 🚀 Fonctionnalités

### Fonctionnalités principales

* 📜 Affichage de la liste complète des drapeaux du monde
* 🔍 Recherche par nom de pays
* 🎨 Filtrage par couleurs de drapeau (checkboxes)
* 📱 Design responsive (mobile / desktop)

### Bonus

* 📄 Page détail pour chaque pays

    * Capitale
    * Population
    * Région
* 📊 Tri par population ou continent
* 🔁 Pagination ou scroll infini

---

## 🧱 Architecture du projet

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── ColorFilter.jsx
│   ├── FlagList.jsx
│   └── FlagCard.jsx
├── pages/
│   ├── Home.jsx
│   └── CountryDetail.jsx
├── services/
│   └── restCountries.js
├── App.jsx
└── main.jsx
```

---

## 🧩 Composants principaux

* **SearchBar**
  Barre de recherche pour filtrer les pays par nom.

* **ColorFilter**
  Ensemble de checkboxes permettant de filtrer les drapeaux par couleur.

* **FlagList**
  Affiche la liste des pays filtrés.

* **FlagCard**
  Carte individuelle contenant le drapeau et le nom du pays.

---

## 🛠️ Technologies utilisées

* **Frontend** : React
* **API** : [REST Countries](https://restcountries.com/)
* **Styling** : TailwindCSS / CSS / Sass
* **Routing** : React Router (bonus)
* **Extras** : Librairies d’icônes (ex: Heroicons, React Icons)

---

## ⚙️ Installation et lancement

1. Cloner le dépôt :

```bash
git clone https://github.com/votre-organisation/flagrepository.git
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le projet :

```bash
npm run dev
```

4. Ouvrir dans le navigateur :

```
http://localhost:5173
```

---

## 👥 Équipe & répartition des rôles

* **Membre 1** : API & logique de filtrage
* **Membre 2** : UI, composants & responsive design
* **Membre 3** : Architecture, routing & bonus

---

## 📌 Améliorations possibles

* Sauvegarde des filtres dans l’URL
* Mode sombre
* Tests unitaires (Jest / React Testing Library)
* Mise en cache des données API

---

## 📄 Licence

Projet réalisé dans un cadre pédagogique.
Libre d’utilisation à des fins éducatives.
