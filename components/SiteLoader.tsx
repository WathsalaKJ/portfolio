"use client";

import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_TIME = 1800;
const MAXIMUM_DISPLAY_TIME = 5000;
const LOADER_STEPS = ["Ideate.", "Design.", "Develop.", "Innovate."];

export default function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    let isComplete = false;
    let lastProgress = 0;
    let animationFrame = 0;
    let hideTimeout = 0;
    let stepIndex = 0;

    const stepInterval = window.setInterval(() => {
      stepIndex = (stepIndex + 1) % LOADER_STEPS.length;
      setActiveStep(stepIndex);
    }, MINIMUM_DISPLAY_TIME / LOADER_STEPS.length);

    const updateProgress = () => {
      if (!isComplete) {
        const nextProgress = Math.min(
          90,
          Math.floor(((Date.now() - startedAt) / MAXIMUM_DISPLAY_TIME) * 90),
        );
        if (nextProgress !== lastProgress) {
          lastProgress = nextProgress;
          setProgress(nextProgress);
        }
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    const finishLoading = () => {
      if (isComplete) return;
      isComplete = true;
      setProgress(100);
      const remaining = Math.max(
        0,
        MINIMUM_DISPLAY_TIME - (Date.now() - startedAt),
      );
      hideTimeout = window.setTimeout(() => {
        window.clearInterval(stepInterval);
        setIsVisible(false);
      }, remaining);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const fallbackTimeout = window.setTimeout(
      finishLoading,
      MAXIMUM_DISPLAY_TIME,
    );

    return () => {
      window.removeEventListener("load", finishLoading);
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(hideTimeout);
      window.clearTimeout(fallbackTimeout);
      window.clearInterval(stepInterval);
    };
  }, []);

  return (
    <div
      className={`site-loader${isVisible ? "" : " is-hidden"}`}
      role="status"
      aria-label="Loading portfolio"
      aria-hidden={!isVisible}
    >
      <div className="site-loader__stars" aria-hidden="true" />
      <div className="site-loader__content">
        <h1 className="site-loader__name">
          Sanduni <span>Wathsala</span>
        </h1>
        <div className="site-loader__subtitle">
          <span />
          <p>Personal Portfolio</p>
          <span />
        </div>
        <div
          className="site-loader__progress"
          role="progressbar"
          aria-label="Page loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="site-loader__motto" aria-label="Ideate, Design, Develop, Innovate">
          {LOADER_STEPS.map((step, index) => (
            <span
              className={`site-loader__step${index === activeStep ? " is-active" : ""}`}
              key={step}
              aria-hidden="true"
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
