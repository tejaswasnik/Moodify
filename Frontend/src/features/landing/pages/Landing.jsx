import { Link } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";
import { Navigate } from "react-router";
import "../styles/landing.scss";

const Landing = () => {
  const { user, loading } = useAuth();

  // If already logged in, redirect to home
  if (!loading && user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="landing">
      {/* Floating background orbs */}
      <div className="landing__orb landing__orb--1" />
      <div className="landing__orb landing__orb--2" />
      <div className="landing__orb landing__orb--3" />

      {/* Navbar */}
      <nav className="landing__nav" id="landing-nav">
        <Link to="/" className="landing__logo">
          <span className="landing__logo-icon">🎵</span>
          <span className="landing__logo-text">Moodify</span>
        </Link>
        <div className="landing__nav-actions">
          <Link to="/login" className="landing__nav-link landing__nav-link--ghost">
            Log in
          </Link>
          <Link to="/register" className="landing__nav-link landing__nav-link--primary">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="landing__hero" id="landing-hero">
        <span className="landing__badge">
          <span className="landing__badge-dot" />
          AI-Powered Music
        </span>
        <h1 className="landing__title">
          Your face picks the{" "}
          <span className="landing__title-accent">soundtrack.</span>
        </h1>
        <p className="landing__subtitle">
          Moodify reads your facial expression in real time, detects your mood,
          and instantly plays a song that matches exactly how you feel.
        </p>
        <div className="landing__cta-group">
          <Link to="/register" className="landing__cta landing__cta--primary" id="cta-get-started">
            Get Started — It's Free
          </Link>
          <Link to="/login" className="landing__cta landing__cta--outline" id="cta-login">
            I have an account
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="landing__features" id="landing-features">
        <div className="landing__features-grid">
          <div className="landing__feature-card">
            <div className="landing__feature-icon">📷</div>
            <h3 className="landing__feature-title">Face Detection</h3>
            <p className="landing__feature-desc">
              Advanced AI scans your expression through your camera and identifies your current emotional state with precision.
            </p>
          </div>
          <div className="landing__feature-card">
            <div className="landing__feature-icon">🧠</div>
            <h3 className="landing__feature-title">Mood Analysis</h3>
            <p className="landing__feature-desc">
              Our engine maps your detected expression to a mood — happy, calm, energetic, melancholic, and more.
            </p>
          </div>
          <div className="landing__feature-card">
            <div className="landing__feature-icon">🎧</div>
            <h3 className="landing__feature-title">Instant Playback</h3>
            <p className="landing__feature-desc">
              Get a perfectly matched song recommendation that plays instantly. No searching, no scrolling — just vibes.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="landing__how" id="landing-how">
        <span className="landing__how-label">How it works</span>
        <h2 className="landing__how-title">Three steps to your soundtrack</h2>
        <div className="landing__steps">
          <div className="landing__step">
            <div className="landing__step-number">1</div>
            <div className="landing__step-content">
              <h4 className="landing__step-title">Look at the camera</h4>
              <p className="landing__step-desc">
                Allow camera access and let Moodify capture your expression.
              </p>
            </div>
          </div>
          <div className="landing__step-connector">→</div>
          <div className="landing__step">
            <div className="landing__step-number">2</div>
            <div className="landing__step-content">
              <h4 className="landing__step-title">AI reads your mood</h4>
              <p className="landing__step-desc">
                Our model analyzes your face and determines the dominant emotion.
              </p>
            </div>
          </div>
          <div className="landing__step-connector">→</div>
          <div className="landing__step">
            <div className="landing__step-number">3</div>
            <div className="landing__step-content">
              <h4 className="landing__step-title">Music starts playing</h4>
              <p className="landing__step-desc">
                A song that matches your vibe plays automatically. Enjoy the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="landing__footer-cta">
        <div className="landing__footer-card">
          <h2 className="landing__footer-title">Ready to feel the music?</h2>
          <p className="landing__footer-desc">
            Join Moodify and let your expressions curate the perfect playlist.
          </p>
          <Link to="/register" className="landing__cta landing__cta--primary">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing__footer">
        <p>© {new Date().getFullYear()} Moodify. Built with emotion.</p>
      </footer>
    </div>
  );
};

export default Landing;
