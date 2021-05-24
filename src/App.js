import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const CustomPriceRenderer = ({ value }) => {
  console.log("Rendering price");
  return <div>This is the price: {value}</div>;
};

const App = () => {
  const [firstDataRendered, setFirstDataRendered] = useState(false);

  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <p>{firstDataRendered ? "rendered" : ""}</p>
      <AgGridReact
        rowData={rowData}
        onFirstDataRendered={() => {
          console.log("First data rendered");
          setFirstDataRendered(true);
        }}
      >
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn
          field="price"
          cellRendererFramework={CustomPriceRenderer}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default App;
