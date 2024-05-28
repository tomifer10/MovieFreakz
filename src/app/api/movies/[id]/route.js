import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Movie from "../../../../../models/movie";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newSinopsis: sinopsis,
    newImage: image,
  } = await request.json();
  await connectMongoDB();
  await Movie.findByIdAndUpdate(id, { title, sinopsis, image });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const movie = await Movie.findOne({ _id: id });
  return NextResponse.json({ movie }, { status: 200 });
}
