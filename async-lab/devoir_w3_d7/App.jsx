import { useState, useEffect } from 'react';
import './App.css';

/**
 * APPLICATION PATIENT MONITOR
 * 
 * ANALYSE CRITIQUE - Réponses aux questions:
 * 
 * 1. Pourquoi on ne modifie jamais directement une variable en React ?
 *    - React utilise une comparaison des états pour détecter les changements.
 *    - Si on modifie directement une variable, React ne détecte pas le changement
 *      car l'objet reste la même référence en mémoire.
 *    - React ne re-rend que si un nouvel état (nouvelle référence) est défini.
 *    - Cela garantit la prévisibilité et la cohérence de l'interface.
 * 
 * 2. Pourquoi setState déclenche un re-render ?
 *    - setState crée une NOUVELLE référence d'objet/variable.
 *    - React détecte cette nouvelle référence et déclenche un re-render.
 *    - React puis compare l'ancien DOM avec le nouveau (Virtual DOM diffing).
 *    - Seules les parties changées sont mises à jour dans le DOM réel.
 * 
 * 3. Quelle est la différence entre un state et une variable normale ?
 *    - State: Re-rend le composant quand il change (useState)
 *    - Variable: N'existe que dans la fonction, disparaît après le re-render
 *    - State: Persiste entre les re-renders
 *    - Variable: Reset à chaque re-render si elle n'est pas dans un state
 */

function App() {
  // ===== ÉTATS =====
  const [heartRate, setHeartRate] = useState(70);
  const [isCritical, setIsCritical] = useState(false);
  const [temperature, setTemperature] = useState(37); // Bonus
  const [lastHeartRate, setLastHeartRate] = useState(70); // Pour tracker les changements

  // ===== EFFETS =====
  // Bonus: Afficher un message dans la console à chaque changement de fréquence cardiaque
  useEffect(() => {
    if (heartRate !== lastHeartRate) {
      console.log(`Fréquence cardiaque modifiée: ${lastHeartRate} -> ${heartRate} bpm`);
      setLastHeartRate(heartRate);
    }
  }, [heartRate, lastHeartRate]);

  // ===== FONCTIONS GESTIONNAIRES D'ÉVÉNEMENTS =====
  const increaseHeartRate = () => {
    setHeartRate(heartRate + 1);
  };

  const decreaseHeartRate = () => {
    // Validation: Ne pas descendre en dessous de 0
    if (heartRate > 0) {
      setHeartRate(heartRate - 1);
    }
  };

  const toggleCritical = () => {
    setIsCritical(!isCritical);
  };

  const increaseTemperature = () => {
    setTemperature(temperature + 0.1);
  };

  const decreaseTemperature = () => {
    setTemperature(Math.max(35, temperature - 0.1));
  };

  // Bonus: Bouton Reset
  const resetAll = () => {
    setHeartRate(70);
    setIsCritical(false);
    setTemperature(37);
    setLastHeartRate(70);
    console.log('Tous les paramètres ont été réinitialisés');
  };

  // ===== LOGIQUE CONDITIONNELLE =====
  const isHighHeartRate = heartRate > 100;
  const isEmergency = isCritical;
  const hasFever = temperature > 39; // Bonus

  // Déterminer la couleur de fond
  const bgColor = isCritical ? '#ffebee' : '#f5f5f5'; // Fond rouge clair en critique, blanc en normal
  const borderColor = isCritical ? '#d32f2f' : '#ccc';
  const textColor = isCritical ? '#d32f2f' : '#333';

  return (
    <div className="container" style={{ backgroundColor: bgColor, borderColor: borderColor }}>
      <h1 style={{ color: textColor }}>Patient Monitor</h1>

      {/* ALERTES */}
      <div className="alerts">
        {isHighHeartRate && (
          <div className="alert alert-warning">High Heart Rate ({heartRate} bpm)</div>
        )}
        {isEmergency && (
          <div className="alert alert-danger">Emergency Mode Activated!</div>
        )}
        {hasFever && (
          <div className="alert alert-danger">Fever Alert ({temperature.toFixed(1)}°C)</div>
        )}
      </div>

      {/* SECTION FRÉQUENCE CARDIAQUE */}
      <div className="card">
        <h2>Fréquence Cardiaque</h2>
        <div className="value" style={{ color: isHighHeartRate ? 'red' : 'green' }}>
          {heartRate} <span className="unit">bpm</span>
        </div>
        <div className="button-group">
          <button onClick={decreaseHeartRate} className="btn btn-primary">
            [-] Diminuer
          </button>
          <button onClick={increaseHeartRate} className="btn btn-primary">
            [+] Augmenter
          </button>
        </div>
        <p className="status">
          {isHighHeartRate ? 'Fréquence élevée' : 'Fréquence normale'}
        </p>
      </div>

      {/* SECTION TEMPÉRATURE (BONUS) */}
      <div className="card">
        <h2>Température</h2>
        <div className="value" style={{ color: hasFever ? 'red' : 'blue' }}>
          {temperature.toFixed(1)} <span className="unit">°C</span>
        </div>
        <div className="button-group">
          <button onClick={decreaseTemperature} className="btn btn-info">
            [-] Baisser
          </button>
          <button onClick={increaseTemperature} className="btn btn-info">
            [+] Augmenter
          </button>
        </div>
        <p className="status">
          {hasFever ? 'Fièvre' : 'Température normale'}
        </p>
      </div>

      {/* SECTION STATUT PATIENT */}
      <div className="card">
        <h2>Statut du Patient</h2>
        <div className="status-badge" style={{ 
          backgroundColor: isCritical ? '#d32f2f' : '#4caf50',
          color: 'white'
        }}>
          {isCritical ? 'CRITIQUE' : 'STABLE'}
        </div>
        <button onClick={toggleCritical} className={`btn ${isCritical ? 'btn-danger' : 'btn-success'}`}>
          {isCritical ? 'Passer à Stable' : 'Passer à Critique'}
        </button>
      </div>

      {/* BOUTON RESET (BONUS) */}
      <div className="card reset-section">
        <button onClick={resetAll} className="btn btn-reset">
          Reset Tous les Paramètres
        </button>
      </div>

      {/* AFFICHAGE DE DONNÉES POUR LE DÉBOGAGE */}
      <div className="debug-info">
        <p><strong>État actuel:</strong></p>
        <ul>
          <li>Fréquence cardiaque: {heartRate} bpm</li>
          <li>Température: {temperature.toFixed(1)}°C</li>
          <li>Statut: {isCritical ? 'Critique' : 'Stable'}</li>
          <li>Mode d'urgence: {isEmergency ? 'OUI' : 'NON'}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
