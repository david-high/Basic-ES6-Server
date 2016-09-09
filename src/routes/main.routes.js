// import node modules
import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send({message: 'Hello World from ES6!'});
});


// Exporting an object as the default import for this modules
export default router;