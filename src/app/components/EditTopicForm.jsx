"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, sinopsis, image }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newSinopsis, setNewSinopsis] = useState(sinopsis);
  const [newImage, setNewImage] = useState(image);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newSinopsis, newImage }),
      });
      if (!res.ok) {
        throw new Error("Failed to update movie");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Movie Title"
        />
        <input
          onChange={(e) => setNewSinopsis(e.target.value)}
          value={newSinopsis}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Movie Sinopsis"
        />
        <input
          onChange={(e) => setNewImage(e.target.value)}
          value={newImage}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Movie Image"
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Movie
        </button>
      </form>
    </div>
  );
}
