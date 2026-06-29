const express = require("express");
const SongRouter = express.Router();
const upload = require("../middlewares/upload.middleware");
const songControllers = require("../controllers/song.controller");
SongRouter.post("/", upload.single("song"), songControllers.uploadSong);

module.exports = { SongRouter };
