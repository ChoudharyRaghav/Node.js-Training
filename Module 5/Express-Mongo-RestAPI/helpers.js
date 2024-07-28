// const { client } = require("./app.js").default;

import { client } from "./app.js";


function getAllMovies() {
  return client.db("NodeJs_Training").collection("movies").find().toArray();
}

function getMoviesById(movieId) {
  return client.db("NodeJs_Training").collection("movies").findOne({ id: { $eq: movieId } });
}

function addMovies(newMovie) {
  return client.db("NodeJs_Training").collection("movies").insertOne(newMovie);
}

function deleteMoviesById(movieId) {
  return client.db("NodeJs_Training").collection("movies").deleteOne({ id: { $eq: movieId } });
}

function updateMoviesByID(movieId, updateMovie) {
  return client.db("NodeJs_Training").collection("movies").updateOne({ id: { $eq: movieId } }, { $set: updateMovie });
}

export {getAllMovies, getMoviesById, addMovies, deleteMoviesById, updateMoviesByID}