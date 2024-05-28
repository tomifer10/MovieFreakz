export default function EditMovie() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Movie Title"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Movie Sinopsis"
        />
        <input
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
