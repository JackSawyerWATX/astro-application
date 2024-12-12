import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [astronaut, setAstronaut] = useState({ name: "", age: "" });
  const [planet, setPlanet] = useState("");
  const [mission, setMission] = useState("");

  const handleInputChange = (event) => {
    setAstronaut({ ...astronaut, [event.target.name]: event.target.value });
  };

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };

  const handleMissionChange = (event) => {
    setMission(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Astronaut Name: ${astronaut.name}, Age: ${astronaut.age}, Planet: ${planet}, Mission: ${mission}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={astronaut.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          name="age"
          type="number"
          className="form-control"
          value={astronaut.age}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Planet:</label>
        <select
          className="form-select"
          value={planet}
          onChange={handlePlanetChange}
        >
          <option value="">-- Choose an Option --</option>
          <option value="Mars">Mars</option>
          <option value="Moon">Moon</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Mission Name:</label>
        <input
          name="mission"
          type="text"
          className="form-control"
          value={mission}
          onChange={handleMissionChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default App;
