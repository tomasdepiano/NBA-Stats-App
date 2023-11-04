import { useState } from "react";

function DropdownExample() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h5>What player do you want to select?</h5>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="option1">Kobe Bryant</option>
        <option value="option2">Michael Jordan</option>
        <option value="option3">LeBron James</option>
      </select>
    </div>
  );
}

export default DropdownExample;
