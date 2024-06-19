import React, { useState } from 'react';

function renderSymptomButtons(selectedSymptoms, handleSymptomSelect, handleSymptomDeselect) {
  const symptomsData = [
    "Fever", "Cough", "Sore throat", "Headache", "Shortness of breath", "Fatigue", "Sneezing",
    "Runny or stuffy nose", "Watery or itchy eyes", "Loss of taste or smell", "Nausea",
    "Excessive urination", "Blurred vision", "Chest tightness or pain", "Wheezing", "Anxiety",
    "Early awakening", "Sweating", "Cold sweat", "Breathlessness", "Chest pain",
    "Shooting pain in the left hand", "Loss of appetite", "Change in voice", "Persistent cough",
    "Unexplained weight loss", "Increased appetite", "Loss of memory", "Trouble with balance",
    "Temporary limb paralysis", "Runny or stuffy nose", "Watery or itchy eyes",
    "Burning sensation during urination", "Cloudy or bloody urine", "Pelvic pain",
    "Severe headache", "Sensitivity to light", "Sensitivity to sound", "Abdominal pain",
    "Vomiting", "Indigestion", "High blood pressure", "Dizziness", "Joint pain", "Swelling",
    "Stiffness", "Bone pain", "Fractures", "Loss of height", "Back pain"
  ];

  return (
    <div>
      <select multiple value={selectedSymptoms} onChange={handleSymptomSelect}>
        {symptomsData.map((symptom) => (
          <option key={symptom} value={symptom}>{symptom}</option>
        ))}
      </select>
      <button onClick={handleSymptomDeselect}>Deselect All</button>
    </div>
  );
}

function TemperatureInput({ temperature, onChange }) {
  return (
    <div>
      <label style={{ color: 'white' }}>
        Enter your temperature (in fahrenheit):
        <input type="number" value={temperature} onChange={onChange} />
      </label>
    </div>
  );
}

function BloodpressureInput({ bloodpressure, onChange }) {
  return (
    <div>
      <label style={{ color: 'white' }}>
        Enter your blood pressure (in bpm):
        <input type="number" value={bloodpressure} onChange={onChange} />
      </label>
    </div>
  );
}

function OxygenInput({ oxygen, onChange }) {
  return (
    <div>
      <label style={{ color: 'white' }}>
        Enter your oxygen level (in percentage):
        <input type="number" value={oxygen} onChange={onChange} />
      </label>
    </div>
  );
}

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [temperature, setTemperature] = useState('98');
  const [oxygen, setOxygen] = useState(99);
  const [bloodpressure, setBloodPressure] = useState('70');

  function diseaseData(name, symptoms, minTemperature, maxTemperature, minOxygenLevel, maxOxygenLevel, minBloodPressure, maxBloodPressure) {
    this.name = name;
    this.symptoms = symptoms;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.minOxygenLevel = minOxygenLevel;
    this.maxOxygenLevel = maxOxygenLevel;
    this.minBloodPressure = minBloodPressure;
    this.maxBloodPressure = maxBloodPressure;
  }

  const diseases = [
    new diseaseData('Flu', ['Fever', 'Cough', 'Sore throat', 'Headache'], 36.5, 38, 90, Infinity, 60, 100),
    new diseaseData('Cold', ['Sneezing', 'Cough'], 0, 36.5, 90, Infinity, 60, 100),
    new diseaseData('COVID-19', ['Fever', 'Cough', 'Shortness of breath', 'Loss of taste or smell'], 100, Infinity, 90, Infinity, 60, 100),
    new diseaseData('Diabetes', ['Fatigue', 'Nausea', 'Excessive urination', 'Blurred vision', 'Unexplained Weight loss'], 0, Infinity, 0, Infinity, 0, Infinity),
    new diseaseData('Asthma', ['Chest tightness or pain', 'Cough', 'Wheezing', 'Anxiety', 'Early awakening'], 0, Infinity, 0, Infinity, 90, Infinity),
    new diseaseData('Heart Attack', ['Nausea', 'Sweating', 'Cold sweat', 'Breathlessness', 'Chest pain', 'Shooting pain in the left hand', 'Anxiety'], 0, Infinity, 0, Infinity, 110, Infinity),
    new diseaseData('Lung Cancer', ['Fatigue', 'Wheezing', 'Loss of appetite', 'Change in voice', 'Chest pain', 'Persistent cough', 'Unexplained Weight loss'], 0, Infinity, 86, 96, 0, Infinity),
    new diseaseData('Brain cancer', ['Nausea', 'Blurred vision', 'Increased appetite', 'Loss of memory', 'Trouble with balance', 'Temporary limb paralysis'], 0, Infinity, 0, Infinity, 0, Infinity),
    new diseaseData('Common Cold', ['Sore throat', 'Runny nose', 'Congestion', 'Sneezing', 'Cough'], 0, 36.5, 90, Infinity, 60, 100),
    new diseaseData('Pneumonia', ['Fever', 'Cough', 'Shortness of breath', 'Chest pain', 'Fatigue'], 36.5, 38, 90, Infinity, 60, 100),
    new diseaseData('Bronchitis', ['Cough', 'Sore throat', 'Shortness of breath', 'Chest discomfort', 'Fatigue'], 36.5, 38, 90, Infinity, 60, 100),
    new diseaseData('Urinary Tract Infection', ['Frequent urination', 'Burning sensation during urination', 'Cloudy or bloody urine', 'Pelvic pain'], 36.5, 38, 90, Infinity, 60, 100),
    new diseaseData('Migraine', ['Severe headache', 'Nausea', 'Sensitivity to light', 'Sensitivity to sound'], 0, Infinity, 90, Infinity, 60, 100),
    new diseaseData('Gastritis', ['Abdominal pain', 'Nausea', 'Vomiting', 'Indigestion', 'Loss of appetite'], 0, Infinity, 90, Infinity, 60, 100),
    new diseaseData('Hypertension', ['High blood pressure', 'Headache', 'Dizziness', 'Shortness of breath', 'Chest pain'], 0, Infinity, 90, Infinity, 100, Infinity),
    new diseaseData('Rheumatoid Arthritis', ['Joint pain', 'Swelling', 'Stiffness', 'Fatigue', 'Fever'], 36.5, Infinity, 90, Infinity, 60, 100),
    new diseaseData('Osteoporosis', ['Bone pain', 'Fractures', 'Loss of height', 'Back pain'], 0, Infinity, 90, Infinity, 60, 100),
  ];

  const handleSymptomSelect = (event) => {
    const { value } = event.target;

    if (selectedSymptoms.includes(value)) {
      setSelectedSymptoms((prevSelectedSymptoms) =>
        prevSelectedSymptoms.filter((symptom) => symptom !== value)
      );
    } else {
      setSelectedSymptoms((prevSelectedSymptoms) => [
        ...prevSelectedSymptoms,
        value,
      ]);
    }
  };

  const handleSymptomDeselect = () => {
    setSelectedSymptoms([]);
  };

  const handleDiseaseRecognition = () => {
    const matchingDiseases = diseases.filter((disease) => {
      const matchingSymptoms = selectedSymptoms.filter((symptom) =>
        disease.symptoms.includes(symptom)
      );
      return (
        matchingSymptoms.length === selectedSymptoms.length &&
        temperature >= disease.minTemperature &&
        temperature <= disease.maxTemperature &&
        oxygen >= disease.minOxygenLevel &&
        oxygen <= disease.maxOxygenLevel &&
        bloodpressure >= disease.minBloodPressure &&
        bloodpressure <= disease.maxBloodPressure
      );
    });

    const randomDisease = matchingDiseases[Math.floor(Math.random() * matchingDiseases.length)];
    setDiseaseResult(randomDisease);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setDiseaseResult(null);
    setTemperature('');
  };

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleOxygenChange = (event) => {
    setOxygen(event.target.value);
  };

  const handleBloodPressureChange = (event) => {
    setBloodPressure(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <h1 style={{ color: 'white' }}>Disease Recognition</h1>

      <TemperatureInput temperature={temperature} onChange={handleTemperatureChange} />
      <OxygenInput oxygen={oxygen} onChange={handleOxygenChange} />
      <BloodpressureInput bloodpressure={bloodpressure} onChange={handleBloodPressureChange} />

      {diseaseResult ? (
        <div>
          <h2 style={{ color: 'white' }}>Based on the symptoms selected, You may have {diseaseResult.name}.</h2>
          <p style={{ color: 'white' }}>Selected symptoms:</p>
          <ul>
            {selectedSymptoms.map((symptom) => (
              <li style={{ color: 'white' }} key={symptom} data-testid="selected-symptom">
                {symptom}
              </li>
            ))}
          </ul>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: 'white' }}>Select your symptoms:</h2>
          {renderSymptomButtons(selectedSymptoms, handleSymptomSelect, handleSymptomDeselect)}
          <button onClick={handleDiseaseRecognition}>Recognize Disease</button>
        </div>
      )}
    </div>
  );
}

export default App;
