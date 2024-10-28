import React from 'react';
import './card.css';

interface CardViewProps {
  title: string;
  content: string;
  onClick?: () => void;
}

export const Card = ({ title, content, onClick }:CardViewProps) => {
  return (
    <div className="patient-cardbox" onClick={onClick}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};