const express = require("express");
const router = express.Router();
const pokemonController = require("../../controllers/pokemonController");

router
    .get("/:poke_i/:poke_f", pokemonController.getAllPokemon)
    .get("/:pokemonId", pokemonController.getOnePokemon)
    .post("/:pokemonId", pokemonController.createNewWorkout)
    .patch("/:pokemonId",pokemonController.updateWorkout)
    .delete("/:pokemonId",pokemonController.deleteWorkout)



module.exports = router;