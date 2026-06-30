import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import "./FaceExpression.scss";


export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");
    const [status, setStatus] = useState("Starting camera...");
    const [isReady, setIsReady] = useState(false);
    const [isDetecting, setIsDetecting] = useState(false);

    useEffect(() => {
        let mounted = true;

        async function setupCamera() {
            try {
                await init({ landmarkerRef, videoRef, streamRef });
                if (!mounted) return;

                setIsReady(true);
                setStatus("Camera ready. Capture a mood when you are set.");
            } catch (error) {
                console.error(error);
                if (!mounted) return;

                setStatus("Camera access is blocked. Allow video to continue.");
            }
        }

        setupCamera();

        return () => {
            mounted = false;

            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        if (!isReady || isDetecting) {
            return;
        }

        setIsDetecting(true);
        setStatus("Analyzing facial cues...");

        const detectedExpression = detect({ landmarkerRef, videoRef, setExpression });

        setIsDetecting(false);

        if (!detectedExpression) {
            setStatus("No clear expression detected. Try again with better light.");
            return;
        }

        if (detectedExpression === "Neutral") {
            setStatus("Neutral expression detected. Try a stronger expression to match a track.");
        } else {
            setStatus(`Expression detected: ${detectedExpression}`);
        }
        onClick({ mood: detectedExpression })
    }


    return (
        <section className="surface-card face-expression">
            <div className="face-expression__header">
                <span className="section-label">Mood camera</span>
                <h2 className="face-expression__title">Match the music to your face</h2>
                <p className="page-copy">Use the camera to detect a mood, then load a track that fits the moment.</p>
            </div>

            <div className="face-expression__preview">
                <video
                    ref={videoRef}
                    className="face-expression__video"
                    playsInline
                    autoPlay
                    muted
                />
                <div className="face-expression__overlay">
                    <span>{expression}</span>
                    <strong>{status}</strong>
                </div>
            </div>

            <div className="face-expression__actions">
                <button className="button" onClick={handleClick} disabled={!isReady || isDetecting}>
                    {isDetecting ? "Analyzing..." : "Detect expression"}
                </button>
            </div>
        </section>
    );
}