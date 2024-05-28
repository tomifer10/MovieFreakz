import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Movie from "../../../../models/movie";

export async function POST(request) {
  const { title, sinopsis, image } = await request.json();
  await connectMongoDB();
  await Movie.create({ title, sinopsis, image });
  return NextResponse.json({ message: "Movie Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const movies = await Movie.find();
  return NextResponse.json({ movies });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Movie.findByIdAndDelete(id);
  return NextResponse.son({ message: "Topic deleted" }, { status: 200 });
}
