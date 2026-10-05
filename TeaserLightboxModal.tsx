import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { TeaserPortfolioItem } from '../../types/studio';
import { Icon3D } from '../ui/Icon3D';

interface TeaserLightboxModalProps {
  teaser: TeaserPortfolioItem | null;
  onClose: () => void;
  onOrderSimilar: (referenceTitle: string) => void;
}

export const TeaserLightboxModal: React.FC<TeaserLightboxModalProps> = ({
  teaser,
  onClose,
  onOrderSimilar,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!teaser || !videoRef.current) return;

    const video = videoRef.current;
    video.currentTime = 0;
    const playPromise = video.play();
    playPromise?.catch(() => undefined);
  }, [teaser]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && teaser) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [teaser, onClose]);

  if (!teaser) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-teaser-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl rounded-2xl bg-[#FCFBF8] dark:bg-[#0E0E13] border border-black/12 dark:border-white/12 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        >
          <div className="px-5 sm:px-7 py-4 border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between gap-4 shrink-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#504D46] dark:text-[#A6A198]">
              <span className="font-bold text-[#8C7248] dark:text-[#C4AC80]">نمایار · نمونه‌کار</span>
              <span aria-hidden="true">·</span>
              <span>{teaser.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums font-semibold">{teaser.duration}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="بستن پنجره پیش‌نمایش"
              className="btn-3d-surface w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer shrink-0"
            >
              <Icon3D variant="close" size="xs" frameless />
            </button>
          </div>

          <div className="p-4 sm:p-7 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black">
                  <video
                    ref={videoRef}
                    src={teaser.videoUrl}
                    poster={teaser.imageUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full max-h-[74vh] object-contain bg-black"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3.5">
                  <Icon3D variant="film" size="md" />
                  <div>
                    <p className="text-xs font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                      {teaser.categoryLabel}
                    </p>
                    <h2
                      id="lightbox-teaser-title"
                      className="text-xl sm:text-2xl font-extrabold text-[#161618] dark:text-[#F4F1EA]"
                    >
                      {teaser.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#161618] dark:text-[#F4F1EA]/90 leading-relaxed">
                  {teaser.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#504D46] dark:text-[#A6A198] leading-[1.9]">
                  {teaser.summary}
                </p>

                <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] space-y-2.5 text-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#7C776E] dark:text-[#A6A198]">روش تولید:</span>
                    <span className="font-bold text-[#161618] dark:text-[#F4F1EA] text-right">
                      کارگردانی و سنتز بصری با هوش مصنوعی
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#7C776E] dark:text-[#A6A198]">نسبت تصویر:</span>
                    <span className="font-bold text-[#161618] dark:text-[#F4F1EA]" dir="ltr">
                      {teaser.aspectRatioLabel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#7C776E] dark:text-[#A6A198]">مدت:</span>
                    <span className="font-bold text-[#8C7248] dark:text-[#C4AC80] tabular-nums">
                      {teaser.duration}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#B89F72]/30 dark:border-[#C4AC80]/25 bg-[#8C7248]/[0.06] dark:bg-[#C4AC80]/[0.08]">
                  <p className="text-xs font-bold text-[#8C7248] dark:text-[#C4AC80] mb-1.5">جهت بصری:</p>
                  <p className="text-xs text-[#161618] dark:text-[#F4F1EA] leading-relaxed">
                    {teaser.visualDirectionNotes}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOrderSimilar(`${teaser.title} (${teaser.categoryLabel})`)}
                  className="w-full py-3.5 px-5 rounded-xl btn-3d-gold font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>درخواست ساخت تیزر مشابه برای محصول شما</span>
                  <Icon3D variant="arrow-up-left" size="xs" frameless className="text-[#141310]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
