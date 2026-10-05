import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_TEASERS } from '../../data/studioData';
import { TeaserPortfolioItem } from '../../types/studio';
import { Icon3D } from '../ui/Icon3D';
import { ResilientImage } from '../ui/ResilientImage';
import { TiltCard25D } from '../ui/TiltCard25D';

interface HeroSectionProps {
  onOpenTeaserModal: (teaser: TeaserPortfolioItem) => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTeaserModal,
  onNavigate,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayingPreview, setIsPlayingPreview] = useState(true);
  const [progress, setProgress] = useState(0);

  const activeTeaser = PORTFOLIO_TEASERS[activeIndex];

  useEffect(() => {
    if (!isPlayingPreview) return;
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % PORTFOLIO_TEASERS.length);
          return 0;
        }
        return prev + 2;
      });
    }, 150);
    return () => window.clearInterval(interval);
  }, [isPlayingPreview]);

  const handleSelectTeaser = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
    setIsPlayingPreview(true);
  };

  const ambientGlowY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 30]);
  const stageParallaxY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -10]);

  return (
    <section
      id="hero"
      className="relative pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-24 lg:pb-28 overflow-hidden"
    >
      {/* Subtle Ambient Champagne Studio Lighting */}
      <motion.div
        aria-hidden="true"
        style={{ y: ambientGlowY }}
        className="pointer-events-none absolute -top-24 right-1/4 w-[280px] sm:w-[520px] h-[280px] sm:h-[520px] rounded-full bg-[#B89F72]/10 dark:bg-[#C4AC80]/8 blur-[120px]"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-right">
            {/* Staggered Item 1: Bespoke Cinematic Viewfinder Emblem + Kicker */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5"
            >
              <Icon3D variant="spark" size="sm" />
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                <span>استودیوی خلاق هوش مصنوعی</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#504D46] dark:text-[#A6A198]">
                  تبلیغ برای محصولات شما
                </span>
              </div>
            </motion.div>

            {/* Staggered Item 2: Core Hero Statement */}
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#161618] dark:text-[#F4F1EA] leading-[1.28] headline-balance"
            >
              نمایار؛{' '}
              <span className="text-[#8C7248] dark:text-[#C4AC80]">
                خلق تیزرهای تبلیغاتی سینمایی با هوش مصنوعی
              </span>
            </motion.h1>

            {/* DEDICATED MOBILE-FIRST 2.5D VISUAL STAGE */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block lg:hidden pt-1"
            >
              <div className="relative">
                <div className="surface-25d rounded-2xl overflow-hidden border border-[#B89F72]/35 dark:border-[#C4AC80]/30">
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#0A0A0D]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTeaser.id}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className={`w-full h-full ${
                          isPlayingPreview && !prefersReducedMotion ? 'animate-cinema-video' : ''
                        }`}
                      >
                        <ResilientImage
                          src={activeTeaser.imageUrl}
                          alt={activeTeaser.title}
                          priority
                          containerClassName="w-full h-full"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {isPlayingPreview && !prefersReducedMotion && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#C4AC80]/12 to-transparent animate-light-sweep"
                      />
                    )}

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/28 to-black/15"
                    />

                    {/* Top Bar inside Mobile Video Stage */}
                    <div className="absolute top-3 inset-x-3.5 flex items-center justify-between text-[11px] text-white/90">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4AC80]" />
                        <span className="font-semibold">{activeTeaser.title}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-white/75">{activeTeaser.categoryLabel}</span>
                      </div>
                      <span className="tabular-nums text-[#D6C29C] font-bold">
                        {activeTeaser.duration}
                      </span>
                    </div>

                    {/* Center Dimensional Play / Fullscreen Interaction on Mobile */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsPlayingPreview((p) => !p)}
                        aria-label={isPlayingPreview ? 'توقف پیش‌نمایش' : 'پخش پیش‌نمایش'}
                        className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C4AC80]/55 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                      >
                        <Icon3D
                          variant={isPlayingPreview ? 'pause' : 'play'}
                          size="sm"
                          frameless
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenTeaserModal(activeTeaser)}
                        aria-label="مشاهده تمام‌صفحه تیزر"
                        className="px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/25 text-white text-xs font-semibold flex items-center gap-2"
                      >
                        <Icon3D variant="expand" size="xs" frameless />
                        <span>نمایش کامل</span>
                      </button>
                    </div>

                    {/* Bottom Info & Progress Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 space-y-2">
                      <p className="text-xs text-white/90 font-medium line-clamp-1">
                        {activeTeaser.subtitle}
                      </p>
                      <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
                        <div
                          className="h-full bg-[#C4AC80] transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Switcher Strip */}
                  <div className="grid grid-cols-3 divide-x divide-x-reverse divide-black/[0.08] dark:divide-white/[0.08] bg-[#EEEAE0]/90 dark:bg-[#14141A]">
                    {PORTFOLIO_TEASERS.map((item, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelectTeaser(idx)}
                          className={`py-2.5 px-2 text-center transition-colors ${
                            isCurrent
                              ? 'bg-[#8C7248]/14 dark:bg-[#C4AC80]/16 text-[#8C7248] dark:text-[#C4AC80] font-bold'
                              : 'text-[#504D46] dark:text-[#A6A198]'
                          }`}
                        >
                          <p className="text-[11px] truncate">
                            {item.title}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Staggered Item 3: Value Proposition Paragraph */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-[17px] leading-[1.88] text-[#504D46] dark:text-[#A6A198] max-w-xl"
            >
              «نمایار» یک استودیوی خلاق ممتاز مبتنی بر هوش مصنوعی است که تبلیغ برای محصولات شما را در
              دسته‌های گوناگون—از مد، کفش و جواهرات تا دکوراسیون، قاب عکس، لوازم آرایشی و محصولات
              سبک زندگی—در قالب تیزرهای تبلیغاتی سینمایی، خیره‌کننده و اثرگذار اجرا می‌کند.
            </motion.p>

            {/* Staggered Item 4: Refined Champagne Gold CTAs */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <button
                type="button"
                onClick={() => onNavigate('pricing')}
                className="px-7 py-3.5 rounded-xl btn-3d-gold font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>درخواست ساخت تیزر</span>
                <Icon3D variant="arrow-up-left" size="xs" frameless className="text-[#141310]" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 rounded-xl btn-3d-surface font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Icon3D variant="play" size="xs" frameless />
                <span>دیدن نمونه‌کارها</span>
              </button>
            </motion.div>

            {/* Staggered Item 5: Multi-Category Capabilities Strip */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div>
                <p className="text-sm sm:text-lg font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                  تولید هوشمند
                </p>
                <p className="mt-1 text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed">
                  خلق صحنه، دکور و نورپردازی سینمایی با هوش مصنوعی
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-lg font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                  تنوع محصولات
                </p>
                <p className="mt-1 text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed">
                  مد، کفش، دکوراسیون، جواهرات، آرایشی و کالاهای مصرفی
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-lg font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                  اصالت متریال
                </p>
                <p className="mt-1 text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed">
                  حفظ دقیق فرم، رنگ و بافت واقعی محصولات شما
                </p>
              </div>
            </motion.div>
          </div>

          {/* Left Column (Desktop 2.5D Layered Video Stage) */}
          <motion.div
            style={{ y: stageParallaxY }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-6 relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl border border-[#B89F72]/20 dark:border-[#C4AC80]/15 bg-gradient-to-br from-[#B89F72]/8 via-transparent to-black/10 dark:to-black/30 -z-10 translate-x-2.5 translate-y-2.5"
            />

            <TiltCard25D intensity={1.8} className="group border border-[#B89F72]/35 dark:border-[#C4AC80]/30">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#09090C]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTeaser.id}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full h-full ${
                      isPlayingPreview && !prefersReducedMotion ? 'animate-cinema-video' : ''
                    }`}
                  >
                    <ResilientImage
                      src={activeTeaser.imageUrl}
                      alt={activeTeaser.title}
                      priority
                      containerClassName="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>

                {isPlayingPreview && !prefersReducedMotion && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#C4AC80]/12 to-transparent animate-light-sweep"
                  />
                )}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/32 to-black/12"
                />

                {/* Top Unboxed Metadata Bar */}
                <div className="absolute top-4 inset-x-5 flex items-center justify-between text-xs text-white/90 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4AC80]" />
                    <span>نمونه‌کار منتخب نمایار</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#D6C29C] font-semibold">{activeTeaser.categoryLabel}</span>
                  </div>
                  <span className="tabular-nums text-[#D6C29C] font-bold">
                    {activeTeaser.duration}
                  </span>
                </div>

                {/* Center Floating Play & Fullscreen Controls */}
                <div className="absolute inset-0 flex items-center justify-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setIsPlayingPreview((prev) => !prev)}
                    aria-label={isPlayingPreview ? 'توقف پیش‌نمایش ویدیو' : 'پخش پیش‌نمایش ویدیو'}
                    className="w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C4AC80]/55 flex items-center justify-center shadow-[0_14px_32px_rgba(0,0,0,0.65)] hover:scale-105 hover:border-[#D6C29C] transition-all duration-300 cursor-pointer"
                  >
                    <Icon3D
                      variant={isPlayingPreview ? 'pause' : 'play'}
                      size="md"
                      frameless
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenTeaserModal(activeTeaser)}
                    className="px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#C4AC80] text-white text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer"
                  >
                    <Icon3D variant="expand" size="xs" frameless />
                    <span>پخش و بررسی سکانس‌ها</span>
                  </button>
                </div>

                {/* Bottom Active Teaser Info & Timeline */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-3 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-[#D6C29C] font-medium">
                        {activeTeaser.aiCapabilities}
                      </p>
                      <h2 className="text-xl font-extrabold">{activeTeaser.title}</h2>
                      <p className="text-xs text-white/80 line-clamp-1">{activeTeaser.subtitle}</p>
                    </div>
                  </div>

                  <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
                    <div
                      className="h-full bg-[#C4AC80] transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Selector Deck */}
              <div className="p-3.5 bg-[#EEEAE0]/90 dark:bg-[#131318] border-t border-black/[0.07] dark:border-white/[0.07] grid grid-cols-3 gap-2.5">
                {PORTFOLIO_TEASERS.map((item, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectTeaser(idx)}
                      className={`p-2.5 rounded-xl border text-right transition-all cursor-pointer flex items-center gap-2.5 ${
                        isCurrent
                          ? 'bg-[#FCFBF8] dark:bg-[#1A1A22] border-[#8C7248]/55 dark:border-[#C4AC80]/55 shadow-xs'
                          : 'bg-black/[0.03] dark:bg-white/[0.03] border-transparent hover:border-black/15 dark:hover:border-white/15 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="w-11 h-8 rounded-lg overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                        <ResilientImage
                          src={item.imageUrl}
                          alt={item.title}
                          containerClassName="w-full h-full"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#161618] dark:text-[#F4F1EA] truncate">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-[#7C776E] dark:text-[#A6A198] truncate">
                          {item.categoryLabel}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </TiltCard25D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
