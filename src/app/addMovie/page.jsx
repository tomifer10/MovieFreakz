"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title | sinopsis | image) {
      alert("All fields are required");
      return;
    }
    try {
      await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, sinopsis, image }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a movie");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Movie Title"
      />
      <input
        onChange={(e) => setSinopsis(e.target.value)}
        value={sinopsis}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Movie Sinopsis"
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Movie Image"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Movie
      </button>
    </form>
  );
}
