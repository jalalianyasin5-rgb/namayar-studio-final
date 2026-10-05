import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  BALE_ORDER_URL,
  EITAA_ORDER_URL,
  MESSAGING_CHANNELS,
} from '../../data/studioData';
import { Icon3D } from '../ui/Icon3D';

export { BALE_ORDER_URL, EITAA_ORDER_URL };

interface RequestTeaserCTAProps {
  selectedContext?: string;
  onClearContext: () => void;
  onNavigate: (sectionId: string) => void;
}

export const RequestTeaserCTA: React.FC<RequestTeaserCTAProps> = ({
  selectedContext,
  onClearContext,
  onNavigate,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="request-cta"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F2EFE6]/55 dark:bg-[#09090C] relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="surface-25d rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#B89F72]/35 dark:border-[#C4AC80]/30 space-y-8 sm:space-y-10"
        >
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-3.5">
            <div className="inline-flex items-center justify-center gap-2.5">
              <Icon3D variant="spark" size="sm" />
              <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                شروع سفارش · تبلیغ برای محصولات شما
              </p>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              شروع سفارش
            </h2>

            <p className="text-sm sm:text-base text-[#504D46] dark:text-[#A6A198] leading-relaxed">
              برای ثبت سفارش ساخت تیزر سینمایی و هماهنگی جزئیات، پیام‌رسان مورد نظر خود را انتخاب
              کنید.
            </p>
          </div>

          {/* Connected Selected Pricing Plan / Context Banner */}
          {selectedContext && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto p-4 rounded-xl bg-[#8C7248]/[0.08] dark:bg-[#C4AC80]/[0.10] border border-[#B89F72]/45 dark:border-[#C4AC80]/40 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#161618] dark:text-[#F4F1EA]">
                <Icon3D variant="check" size="xs" frameless className="shrink-0" />
                <span>
                  پلن انتخابی شما: <strong className="font-extrabold">{selectedContext}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3 mr-auto sm:mr-0">
                <button
                  type="button"
                  onClick={() => onNavigate('pricing')}
                  className="text-xs font-semibold text-[#8C7248] dark:text-[#C4AC80] hover:underline cursor-pointer"
                >
                  تغییر پلن
                </button>
                <span aria-hidden="true" className="text-black/20 dark:text-white/20">
                  |
                </span>
                <button
                  type="button"
                  onClick={onClearContext}
                  className="text-xs text-[#7C776E] dark:text-[#A6A198] hover:text-[#161618] dark:hover:text-white cursor-pointer"
                >
                  حذف
                </button>
              </div>
            </motion.div>
          )}

          {/* 2 Elegant 2.5D Messaging Options: Bale & Eitaa */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {MESSAGING_CHANNELS.map((channel, index) => (
              <motion.a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#FCFBF8] dark:bg-[#131319] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#B89F72]/60 dark:hover:border-[#C4AC80]/55 shadow-[0_14px_32px_-14px_rgba(22,22,24,0.07)] dark:shadow-[0_20px_42px_-16px_rgba(0,0,0,0.72)] hover:shadow-[0_20px_40px_-14px_rgba(163,136,92,0.18)] dark:hover:shadow-[0_24px_48px_-14px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between gap-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89F72]"
              >
                {/* Top Subtle Champagne Highlight Line on Hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#B89F72]/0 group-hover:via-[#B89F72]/70 dark:group-hover:via-[#C4AC80]/70 to-transparent transition-all duration-300"
                />

                {/* Icon & Platform Info */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Icon3D variant={channel.icon} size="lg" />
                    <div className="space-y-1 text-right">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#161618] dark:text-[#F4F1EA] group-hover:text-[#8C7248] dark:group-hover:text-[#C4AC80] transition-colors">
                        {channel.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#504D46] dark:text-[#A6A198]">
                        {channel.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button Appearance inside Card */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-bold text-[#8C7248] dark:text-[#C4AC80]">
                    ارسال پیام در {channel.name}
                  </span>
                  <span className="w-8 h-8 rounded-lg btn-3d-gold inline-flex items-center justify-center shrink-0">
                    <Icon3D
                      variant="arrow-up-left"
                      size="xs"
                      frameless
                      className="text-[#141310]"
                    />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Secondary Subtle Navigation Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#504D46] dark:text-[#A6A198]">
            <button
              type="button"
              onClick={() => onNavigate('pricing')}
              className="hover:text-[#8C7248] dark:hover:text-[#C4AC80] font-semibold transition-colors cursor-pointer"
            >
              مشاهده مجدد تعرفه‌ها
            </button>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">
              ·
            </span>
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="hover:text-[#8C7248] dark:hover:text-[#C4AC80] font-semibold transition-colors cursor-pointer"
            >
              دیدن نمونه‌کارها
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
