import FaceExpression from "../../FaceExpression/components/FaceExpression";
import { useSong } from "../hooks/useSong";
import Player from "../components/Player";
import "../styles/home.scss";
const Home = () => {
  const { handleGetSong, loading, song } = useSong();

  return (
    <main className="page-shell home-page">
      <section className="home-page__hero">
        <div className="home-page__copy">
          <span className="section-label">Moodify</span>
          <h1 className="page-title">Turn an expression into a soundtrack.</h1>
          <p className="page-copy">
            Capture your face, let the app infer the mood, and surface a track that fits the tone without breaking the flow.
          </p>
        </div>

        <div className="home-page__status surface-card">
          <span className="home-page__status-label">Now playing</span>
          <strong>{song?.title || "Waiting for a mood match"}</strong>
          <p>{loading ? "Finding a song for your expression..." : song?.mood || "Detect a mood to unlock music."}</p>
        </div>
      </section>

      <section className="home-page__grid">
        <FaceExpression onClick={handleGetSong} />
      </section>

      <Player />
    </main>
  );
};

export default Home;
