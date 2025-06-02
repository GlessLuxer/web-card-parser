import React, { useState } from "react";
import "./Selector.css";

const merchArray = [
  "GeForce RTX 30 Series",
  "GeForce RTX 40 Series",
  "GeForce RTX 50 Series",
];
const merchArraySeries50 = [
  "GeForce RTX 5060",
  "GeForce RTX 5060 Ti",
  "GeForce RTX 5070",
  "GeForce RTX 5070 Ti",
  "GeForce RTX 5080",
  "GeForce RTX 5090",
];
const merchArraySeries40 = [
  "GeForce RTX 4060",
  "GeForce RTX 4060 Ti",
  "GeForce RTX 4070",
  "GeForce RTX 4070 Ti",
  "GeForce RTX 4070 Ti SUPER",
  "GeForce RTX 4080 Super",
  "GeForce RTX 4090",
];
const merchArraySeries30 = [
  "GeForce RTX 3050 (6GB)",
  "GeForce RTX 3050 (8GB)",
  "GeForce RTX 3060",
  "GeForce RTX 3060 Ti",
  "GeForce RTX 3070",
  "GeForce RTX 3070 Ti",
  "GeForce RTX 3080",
  "GeForce RTX 3080 Ti",
  "GeForce RTX 3090",
  "GeForce RTX 3090 Ti",
];

function Selector() {
  const [extendName, setExtendName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modelName, setModelName] = useState("Card model...");
  const [childIsOpen, setChildIsOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const openCloseList = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedSeries(null);
    }
  };

  const childOpenCloseList = () => {
    setChildIsOpen(!childIsOpen);
  };

  const handleSeriesClick = (seriesName) => {
    setSelectedSeries(seriesName);
    setChildIsOpen(true);
  };

  const changeModelName = (event) => {
    setModelName(event.target.textContent);
    setIsOpen(false);
    setFinalName(`${event.target.textContent} ${extendName}`);
  };

  return (
    <div className="selector_widget">
      <div className="panelGrid">
        <button className="button" onClick={openCloseList}>
          {modelName}
          {isOpen? (<span className="arrow">&#5169;</span>):(<span className="arrow">&#5167;</span>)}
        </button>
        
        {isOpen && (
          <ul className="list_1">
            {merchArray.map((item) => (
              <li
                key={item}
                className="list_element"
                onClick={() => handleSeriesClick(item)}
              >
                {item}
                {childIsOpen && selectedSeries === item && (
                  <ul className="list_2">
                    {(selectedSeries === "GeForce RTX 30 Series"
                      ? merchArraySeries30
                      : selectedSeries === "GeForce RTX 40 Series"
                      ? merchArraySeries40
                      : merchArraySeries50)
                      .map((item) => (
                        <li
                          key={item}
                          className="list_element"
                          onClick={changeModelName}
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="btnRequest">Request</button>
    </div>
  );
}

export default Selector;
