import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PORTFOLIO_TEASERS } from '../../data/studioData';
import { TeaserPortfolioItem } from '../../types/studio';
import { Icon3D } from '../ui/Icon3D';
import { TiltCard25D } from '../ui/TiltCard25D';

interface PortfolioSectionProps {
  onOpenTeaserModal: (teaser: TeaserPortfolioItem) => void;
  onRequestSimilar: (teaserTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenTeaserModal,
  onRequestSimilar,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const togglePlay = async (e: React.MouseEvent, teaserId: string) => {
    e.stopPropagation();
    const video = videoRefs.current[teaserId];
    if (!video) return;

    Object.keys(videoRefs.current).forEach((id) => {
      const otherVideo = videoRefs.current[id];
      if (id !== teaserId && otherVideo) {
        otherVideo.pause();
      }
    });

    if (video.paused) {
      try {
        await video.play();
        setPlayingId(teaserId);
      } catch {
        setPlayingId(null);
      }
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  const handleVideoEnded = (teaserId: string) => {
    setPlayingId((current) => (current === teaserId ? null : current));
  };

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#EFECE3]/65 dark:bg-[#0A0A0D] transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <Icon3D variant="play" size="sm" />
              <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                دیدن نمونه‌کارها · تیزرهای واقعی نمایار
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              نمونه‌کارهای تیزر سینمایی نمایار
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#504D46] dark:text-[#A6A198] max-w-md leading-relaxed">
            بخشی از تیزرهای تبلیغاتی نمایار برای نمایش توانایی ما در خلق فضای سینمایی و تبلیغ برای محصولات شما.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 sm:gap-8">
          {PORTFOLIO_TEASERS.map((teaser, index) => {
            const isPlaying = playingId === teaser.id;

            return (
              <motion.div
                key={teaser.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TiltCard25D intensity={1.1} className="h-full flex flex-col group">
                  <div className="rounded-[1.6rem] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.025] shadow-[0_24px_70px_rgba(20,18,14,0.08)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
                    <div
                      className="relative aspect-[9/14] bg-[#08080B] overflow-hidden cursor-pointer"
                      onClick={() => onOpenTeaserModal(teaser)}
                    >
                      <video
                        ref={(node) => {
                          videoRefs.current[teaser.id] = node;
                        }}
                        src={teaser.videoUrl}
                        poster={teaser.imageUrl}
                        preload="metadata"
                        playsInline
                        controls={false}
                        onEnded={() => handleVideoEnded(teaser.id)}
                        className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.015]"
                        aria-label={teaser.title}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-black/5 pointer-events-none" />

                      <div className="absolute top-4 inset-x-4 flex items-center justify-between text-xs text-white/90 pointer-events-none">
                        <span className="font-semibold text-[#D6C29C]">{teaser.categoryLabel}</span>
                        <span className="tabular-nums font-bold text-[#D6C29C]">{teaser.duration}</span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                        <div className="min-w-0 text-white pointer-events-none">
                          <p className="text-[11px] sm:text-xs text-[#D6C29C] font-semibold mb-1">{teaser.aspectRatioLabel}</p>
                          <h3 className="text-lg sm:text-xl font-extrabold truncate">{teaser.title}</h3>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => togglePlay(e, teaser.id)}
                          aria-label={isPlaying ? 'توقف ویدیو' : 'پخش ویدیو'}
                          className="shrink-0 w-12 h-12 rounded-2xl bg-black/58 backdrop-blur-md border border-[#C4AC80]/55 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.55)] hover:border-[#E2CFAC] hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <Icon3D variant={isPlaying ? 'pause' : 'play'} size="sm" frameless />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-5">
                      <div className="space-y-2.5">
                        <p className="text-sm font-bold text-[#161618] dark:text-[#F4F1EA]">
                          {teaser.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm leading-[1.9] text-[#504D46] dark:text-[#A6A198]">
                          {teaser.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => onOpenTeaserModal(teaser)}
                          className="px-4 py-2.5 rounded-xl btn-3d-surface text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                        >
                          <Icon3D variant="expand" size="xs" frameless className="text-[#8C7248] dark:text-[#C4AC80]" />
                          <span>مشاهده تیزر</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onRequestSimilar(`${teaser.title} (${teaser.categoryLabel})`)}
                          className="px-4 py-2.5 rounded-xl btn-3d-gold text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>سفارش تیزر</span>
                          <Icon3D variant="arrow-up-left" size="xs" frameless className="text-[#141310]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard25D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
