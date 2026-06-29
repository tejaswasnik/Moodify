import React from "react";
import FaceExpression from "../../FaceExpression/components/FaceExpression";
import { useSong } from "../hooks/useSong";
import Player from "../components/Player";
const Home = () => {
  const { handleGetSong, loading } = useSong();

  return (
    <div style={{ display: "grid", gap: "24px", padding: "24px" }}>
      <FaceExpression onClick={handleGetSong} />
      {loading ? <p style={{ textAlign: "center" }}>Loading song...</p> : null}
      <Player />
    </div>
  );
};

export default Home;
