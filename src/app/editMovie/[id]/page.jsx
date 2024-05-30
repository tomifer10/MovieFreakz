import EditTopicForm from "@/app/components/EditTopicForm";

const getMovieById = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch movie");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditMovie({ params }) {
  const { id } = params;
  const movieData = await getMovieById(id);

  if (!movieData || !movieData.movie) {
    console.error("Movie data is not available");
    // You can render an error component or message here
    return <div>Failed to load movie data</div>;
  }

  const { movie } = movieData;
  const { title, sinopsis, image } = movie;
  console.log("id:", id);

  return (
    <EditTopicForm id={id} title={title} sinopsis={sinopsis} image={image} />
  );
}
