# Patient Monitor - Devoir W3D7

Application React interactive démontrant l'utilisation de `useState` et des événements.

## Objectifs

Construire une mini application "Patient Monitor" utilisant React pour démontrer:

- L'utilisation correcte de `useState`
- La gestion de plusieurs états dans un composant
- L'implémentation d'événements (`onClick`)
- La logique conditionnelle
- Les styles dynamiques

## Exigences Techniques

### 1. État 1: Fréquence Cardiaque

- State `heartRate` avec valeur initiale de 70 bpm
- Bouton [+] pour augmenter
- Bouton [-] pour diminuer
- Validation: Ne jamais descendre en dessous de 0

### 2. État 2: Statut du Patient

- State `isCritical` (boolean)
- Bouton pour basculer entre "Stable" et "Critical"

### 3. Affichage Conditionnel

- Si `heartRate > 100` → afficher "High Heart Rate"
- Si `isCritical === true` → afficher "Emergency Mode Activated"

### 4. Styles Dynamiques

- Si patient critique → fond rouge
- Sinon → fond normal

### 5. Validation

- Empêcher les valeurs invalides (ex: fréquence négative)

## Bonus (Avancé)

- État `temperature` avec gestion
- Si température > 39 → afficher "Fever Alert"
- Bouton "Reset" pour remettre toutes les valeurs à zéro
- `useEffect` pour afficher un message dans la console à chaque changement de fréquence

## Analyse Critique

### Question 1: Pourquoi on ne modifie jamais directement une variable en React?

React utilise une **comparaison des références** pour détecter les changements d'état:

- Si on modifie directement une variable, l'objet reste la même référence en mémoire
- React ne détecte pas le changement car la référence est identique
- Seul un nouvel état (nouvelle référence) déclenche le re-render
- Cela garantit la prévisibilité et la cohérence de l'interface

```javascript
// MAUVAIS: React ne détecte pas le changement
state.count = state.count + 1;

// BON: React détecte la nouvelle référence
setState(state.count + 1);
```

### Question 2: Pourquoi setState déclenche un re-render?

1. `setState` crée une **NOUVELLE référence** d'objet/variable
2. React détecte cette nouvelle référence via une comparaison
3. React déclenche le **Virtual DOM diffing** (comparaison ancien vs nouveau DOM)
4. Seules les parties changées sont mises à jour dans le DOM réel
5. Cela assure les meilleures performances

### Question 3: Quelle est la différence entre un state et une variable normale?

| Aspect          | State (useState)              | Variable normale              |
| --------------- | ----------------------------- | ----------------------------- |
| **Re-render**   | Re-rend le composant          | N'existe que dans la fonction |
| **Persistance** | Persiste entre les re-renders | Reset à chaque re-render      |
| **Performance** | Optimal avec React            | Inefficace                    |
| **Réactivité**  | Réactive aux changements      | Non réactive                  |

```javascript
// Variable normale - RESET à chaque re-render
let count = 0;
count++; // Redevient 0 au re-render!

// State - PERSISTE et déclenche re-render
const [count, setCount] = useState(0);
setCount(count + 1); // Persiste et re-rend
```

## Installation & Exécution

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le serveur démarre généralement sur `http://localhost:5173`

### 3. Build pour la production
```bash
npm run build
```

## Structure du Projet

```
devoir_w3_d7/
├── App.jsx          # Composant principal avec toute la logique
├── App.css          # Styles du composant
├── main.jsx         # Point d'entrée React
├── index.html       # HTML d'entrée
├── vite.config.js   # Configuration Vite
├── package.json     # Dépendances et scripts
└── README.md        # Ce fichier
```

## Utilisation de l'Application

1. **Gérer la Fréquence Cardiaque**
   - Bouton [+] pour augmenter
   - Bouton [-] pour diminuer
   - La valeur ne peut pas descendre en dessous de 0
   - Si > 100 bpm: Alerte "High Heart Rate"

2. **Gérer la Température**
   - Bouton [+] pour augmenter
   - Bouton [-] pour diminuer
   - Si > 39°C: Alerte "Fever Alert"

3. **Changer le Statut du Patient**
   - Bouton pour basculer entre "Stable" et "Critique"
   - En mode critique: Fond rouge et border rouge
   - Alerte "Emergency Mode Activated"

4. **Réinitialiser**
   - Bouton "Reset" pour revenir aux valeurs par défaut
   - Message de confirmation dans la console

## Affichage des États

L'application affiche en temps réel:

- Fréquence cardiaque (bpm)
- Température (°C)
- Statut du patient (Stable/Critique)
- Alertes actives

## Console JavaScript

Ouvrez la console du navigateur (F12) pour voir:

- Messages de changement de fréquence cardiaque
- Message de réinitialisation

## Développement

### Technologies utilisées

- **React** 19.2.4
- **Vite** 8.0.4
- **CSS3** avec animations et transitions

### Concepts React utilisés

- `useState` pour gérer l'état
- `useEffect` pour les effets secondaires
- Rendu conditionnel
- Styles dynamiques
- Gestion d'événements

## Notes

- L'application est totalement responsive (mobile, tablette, desktop)
- Les styles utilisent des dégradés et des animations fluides
- La validation empêche les valeurs invalides
- Les alertes s'affichent/disparaissent dynamiquement
- Tous les changements sont loggés dans la console pour le débogage

## Checklist de Validation

- [x] `useState` utilisé correctement pour heartRate
- [x] `useState` utilisé correctement pour isCritical
- [x] `useState` utilisé correctement pour temperature (bonus)
- [x] Événements `onClick` implémentés
- [x] Logique conditionnelle pour les alertes
- [x] Styles dynamiques (fond rouge en critique)
- [x] Validation (heartRate ne descend pas en dessous de 0)
- [x] Bouton Reset (bonus)
- [x] `useEffect` pour logger les changements (bonus)
- [x] Analyse critique documentée dans App.jsx
- [x] Code propre et lisible
- [x] Application fonctionnelle sans erreurs

---

**Créé par:** Développeur Junior en formation  
**Date:** Semaine 3, Classe 1  
**École:** Localhost Academy
