import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ImageCarouselProps = {
  images: string[];
  alt?: string;
  className?: string;
  imgClassName?: string;
  autoPlay?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt = '',
  className = '',
  imgClassName = '',
  autoPlay = true,
  intervalMs = 3000,
  pauseOnHover = true,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images?.length || 0;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (total <= 1) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [total]);

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, total, paused]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <img src={images[index]} alt={alt} className={imgClassName} />
      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 p-1 rounded-md bg-background/80 border border-border text-foreground hover:bg-background transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 p-1 rounded-md bg-background/80 border border-border text-foreground hover:bg-background transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-3 rounded-full transition-colors ${i === index ? 'bg-accent' : 'bg-muted-foreground/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
