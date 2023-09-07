import React, { useRef } from "react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = async (e) => {
    // Make the function async
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };

    try {
      const response = await fetch(
        "https://ff-first-next-project.vercel.app/api/vocapi",
        {
          method: "POST",
          body: JSON.stringify(newWord),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      enWord.current.value = "";
      frWord.current.value = "";
      // You can now use the 'data' received from the API here
      // console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
