"use client";

import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Overlay } from "./Overlay";

const FRAME_COUNT = 120;
const FRAME_PATH = "/sequence";

function getFrameSrc(index: number) {
  const padded = String(index).padStart(3, "0");
  return `${FRAME_PATH}/frame_${padded}_delay-0.066s.png`;
}

function drawImageCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > canvasRatio) {
    sourceWidth = image.naturalHeight * canvasRatio;
    sourceX = (image.naturalWidth - sourceWidth) / 2;
  } else {
    sourceHeight = image.naturalWidth / canvasRatio;
    sourceY = (image.naturalHeight - sourceHeight) / 2;
  }

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    canvasWidth,
    canvasHeight,
  );
}

export function ScrollyCanvas() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const frameSources = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, index) => getFrameSrc(index)),
    [],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 220,
    restDelta: 0.0005,
  });

  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[frameIndex];

    if (!canvas || !image || !image.complete) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    drawImageCover(context, image, canvas.width, canvas.height);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const imgs = frameSources.map(() => {
      const img = new Image();
      img.decoding = "async";
      return img;
    });

    imagesRef.current = imgs;

    imgs.forEach((img, index) => {
      img.onload = () => {
        loadedCount += 1;

        if (index === 0) {
          resizeCanvas();
        }

        if (isMounted && loadedCount === frameSources.length) {
          setIsReady(true);
          renderFrame(currentFrameRef.current);
        }
      };

      img.onerror = () => {
        if (isMounted) {
          setLoadError(true);
        }
      };

      img.src = frameSources[index];
    });

    resizeCanvas();

    return () => {
      isMounted = false;
    };
  }, [frameSources, renderFrame, resizeCanvas]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(latest * (FRAME_COUNT - 1))),
    );

    if (frameIndex === currentFrameRef.current) {
      return;
    }

    currentFrameRef.current = frameIndex;
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-[#0C0C0C]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0C0C0C]">
        <canvas
          ref={canvasRef}
          aria-label="Scroll-linked image sequence"
          className="h-screen w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.34)_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]" />
        {!isReady && (
          <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center px-6">
            <p className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#D7E2EA]/60 backdrop-blur-md">
              Loading sequence
            </p>
          </div>
        )}
        {loadError && (
          <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center px-6">
            <p className="max-w-md rounded-md border border-white/10 bg-black/50 px-4 py-3 text-center text-sm text-[#D7E2EA]/70 backdrop-blur-md">
              Add the sequence frames to public/sequence to enable the cinematic scroll render.
            </p>
          </div>
        )}
      </div>
      <Overlay progress={scrollYProgress} />
    </section>
  );
}
