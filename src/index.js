const express = require("express");

const cors = require('cors');
const v1pokemonRouter = require("./v1/routes/pokemonRoutes");
const morgan = require("morgan");


const app = express();
app.use(cors());

const PORT=process.env.PORT || 3000;

app.use("/api/v1/pokemon",v1pokemonRouter);
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(morgan('dev'));
app.use(express.json());



app.listen(PORT,()=>{console.log("Server runing")});


