import React from "react";

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12L6 12" stroke="white" strokeWidth="2" strokeLinecap="square"/>
      <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H18" stroke="white" strokeWidth="2" strokeLinecap="square"/>
      <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  </button>
);
