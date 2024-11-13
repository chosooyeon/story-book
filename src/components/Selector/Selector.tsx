import React from 'react';
import './selector.css';

interface SelectorProps {
  options: string[];
  isLabel?: boolean;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export const Selector =({ options,isLabel, label, onChange, disabled }:SelectorProps) => {
  return (
    <div className="selector-container">
      {
        isLabel && label ? <label className="selector-label">{label}</label> : <></>
      }
      <select className="selector" onChange={onChange} disabled={disabled}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
