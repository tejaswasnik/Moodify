const songModel = require("../models/song.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");
async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);
  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/moodify/songs",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });
  res.status(201).json({
    message: "Song created successfully.",
    song,
  });
}
async function getSong(req, res) {
  try {
    const { mood } = req.query;

    const songs = await songModel.aggregate([
      {
        $match: { mood },
      },
      {
        $sample: { size: 1 },
      },
    ]);

    if (!songs.length) {
      return res.status(404).json({
        message: "No songs found for this mood.",
      });
    }

    res.status(200).json({
      message: "Song fetched successfully.",
      song: songs[0],
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
module.exports = { uploadSong, getSong };
