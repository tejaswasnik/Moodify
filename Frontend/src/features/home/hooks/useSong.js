import { getSong } from "../services/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";

export const useSong = () => {
  const context = useContext(SongContext);
  const { loading, setLoading, song, setSong } = context;

  async function handleGetSong(input) {
    const mood = typeof input === "string" ? input : input?.mood;

    if (!mood || mood === "Neutral") {
      setSong(null);
      return;
    }

    setLoading(true);

    try {
      const data = await getSong({ mood });
      setSong(data.song || null);
    } finally {
      setLoading(false);
    }
  }

  return { handleGetSong, loading, song };
};
