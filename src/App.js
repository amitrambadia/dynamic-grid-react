import React, { useState } from 'react';

const App = () => {
  const columnOptions = [1, 2, 3, 4, 5];
  const [selectedColumns, setSelectedColumns] = useState(columnOptions[0]);
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    const index = boxes.length + 1;
    const box = { id: index, index };
    setBoxes([...boxes, box]);
  };

  const removeBox = (boxId) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== boxId).map((box, index) => ({ ...box, index: index + 1 })));
  };

  const resetGrid = () => {
    setBoxes([]);
    setSelectedColumns(columnOptions[0]);
  };


  return (
    <div>
      <h2>Dynamic Grid Demo</h2>
      <select
        value={selectedColumns}
        onChange={(e) => setSelectedColumns(parseInt(e.target.value))}
        className="form-control sl"
      >
        {columnOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={addBox}>Add Box</button>
      <button onClick={resetGrid}>Reset</button>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${selectedColumns}, 1fr)`, gap: '10px' }}>
        {boxes.map((box) => (
          <div key={box.id} className="box">
            <p>Box {box.index}</p>
            <button onClick={() => removeBox(box.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
