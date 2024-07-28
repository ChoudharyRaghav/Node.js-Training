import express from 'express'

import { getAllMovies, getMoviesById, addMovies, deleteMoviesById, updateMoviesByID } from '../helpers.js'

const router = express.Router()
//get all movies
router.get('/getMovie', async (req, res) => {
    const result = await getAllMovies()
    res.send(result)
  })
  
  //get movie by id
  router.get('/getMovie/:movieId', async (req, res) => {
    const { movieId } = req.params
    //console.log(movieId, req.params)
    const result = await getMoviesById(movieId)
    result ? res.send(result) : res.status(400).send({message:"No movies found"})
  })
  
  //insert new movie
  router.post('/addMovie', /*express.json(),*/ async (req, res) => {
    const newMovie = req.body
    // console.log(newMovie)
    const result = await addMovies(newMovie)
    res.send(result)
  })
  
  //delete movie by id
  router.delete('/deleteMovie/:movieId', async (req, res) => {
    const { movieId } = req.params
    //console.log(movieId, req.params)
    const result = await deleteMoviesById(movieId)
    res.send(result)
  })
  
  //update movie by id
  router.put('/updateMovie/:movieId', async (req, res) => {
    const { movieId } = req.params
    const updateMovie = req.body
    // console.log(updateMovie)
    const result = await updateMoviesByID(movieId, updateMovie)
    res.send(result)
  })

export const moviesRouter = router