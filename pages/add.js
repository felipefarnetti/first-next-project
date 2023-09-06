import React, { useEffect, useState, useRef } from "react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };
    const deploymentURL = window.location.origin; // Get the base URL of the current page
    fetch(`${deploymentURL}/api/vocapi`, {
      // Construct the full URL
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        enWord.current.value = "";
        frWord.current.value = "";
        console.log(data);
      });
  };

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addEn" className="form-label">
          Ajouter un mot en anglais
        </label>
        <input ref={enWord} type="text" className="form-control" id="addEn" />

        <label htmlFor="addFr" className="form-label">
          Ajouter un mot en français
        </label>
        <input ref={frWord} type="text" className="form-control" id="addFr" />
        <button className="btn btn-primary mt-4">Ajouter</button>
      </form>
    </div>
  );
}
