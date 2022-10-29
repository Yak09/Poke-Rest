const axios = require('axios');

const getAllPokemon = (req,res) =>{
    //res.send("Get all workouts");
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${req.params.poke_i}&limit=${req.params.poke_f}`)
    .then(response => {
       //console.log(response.data.url);
       res.send(response.data);
    })
    .catch(error => {
       res.send(error);
    });





};

const getOnePokemon = (req,res) => {
    //res.send(`Get  workout ${req.params.workoutId}`);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonId}/`)
      .then(response => {
         //console.log(response.data.url);
         res.send(response.data);
      })
      .catch(error => {
         res.send(error);
      });






};

 const createNewWorkout = (req,res) => {
    res.send(`Create workout ${req.params.pokemonId}`);
 };
 const updateWorkout = (req,res) => {
    res.send(`Update workout ${req.params.pokemonId}`);
 };
 const deleteWorkout = (req,res) => {
    res.send(`Delete workout ${req.params.pokemonId}`);
 };


 module.exports={
    getAllPokemon,
    getOnePokemon,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
 };