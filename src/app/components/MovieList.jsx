import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getMovies = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/movies", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading movies:", error);
    return { movies: [] }; // Devuelve un objeto vacío en caso de error
  }
};

export default async function MovieList() {
  const { movies } = await getMovies();

  return (
    <>
      {" "}
      {movies.length === 0 ? (
        <p> No movies found</p>
      ) : (
        movies.map((m) => (
          <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{m.title}</h2>
              <div>{m.sinopsis}</div>
              <div>
                {m.image && (
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-32 h-48 object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn />
              <Link href={`/editMovie/${m._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
