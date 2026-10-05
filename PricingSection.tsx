import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRICING_PLANS } from '../../data/studioData';
import { PricingPlanItem } from '../../types/studio';
import { Icon3D } from '../ui/Icon3D';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlanItem) => void;
  onNavigatePortfolio: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onNavigatePortfolio,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F2EFE6]/70 dark:bg-[#0A0A0D] transition-colors duration-500 relative"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16"
        >
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-3">
              <Icon3D variant="gem" size="sm" />
              <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                تعرفه‌های شفاف · تبلیغ برای محصولات شما
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              پلن‌های ساخت تیزر و تصاویر محصول
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#504D46] dark:text-[#A6A198] max-w-md leading-relaxed">
            پکیج متناسب با نیاز برند خود را انتخاب کنید. تمامی پلن‌ها با کارگردانی بصری دقیق و حفظ
            کامل جزئیات محصولات شما اجرا می‌شوند.
          </p>
        </motion.div>

        {/* Redesigned Balanced, Minimal, Architectural Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isFeatured = Boolean(plan.featured);

            return (
              <motion.article
                key={plan.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-[#FCFBF8] dark:bg-[#14141A] border border-[#B89F72]/55 dark:border-[#C4AC80]/45 shadow-[0_24px_48px_-16px_rgba(22,22,24,0.11)] dark:shadow-[0_28px_56px_-18px_rgba(0,0,0,0.85)]'
                    : 'bg-[#FCFBF8]/90 dark:bg-[#101014] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#B89F72]/40 dark:hover:border-[#C4AC80]/35 shadow-[0_14px_34px_-16px_rgba(22,22,24,0.06)] dark:shadow-[0_20px_44px_-18px_rgba(0,0,0,0.65)]'
                }`}
              >
                {/* Top Subtle Champagne Accent Line on Featured Card */}
                {isFeatured && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#B89F72] dark:via-[#C4AC80] to-transparent"
                  />
                )}

                <div className="space-y-7">
                  {/* Card Header: Plan Label, Title & Minimal 3D Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                        <span>{plan.planLabel}</span>
                        {isFeatured && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>پیشنهاد متعادل</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#161618] dark:text-[#F4F1EA] tracking-tight">
                        {plan.title}
                      </h3>
                    </div>
                    <Icon3D variant={plan.icon} size="sm" />
                  </div>

                  {/* Price Presentation */}
                  <div className="py-5 border-y border-black/[0.07] dark:border-white/[0.07] flex items-baseline justify-between">
                    <span className="text-xs font-medium text-[#7C776E] dark:text-[#6E6A63]">
                      سرمایه‌گذاری پکیج
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-[34px] font-black tabular-nums tracking-tight text-[#161618] dark:text-[#F4F1EA]">
                        {plan.price}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                        {plan.currency}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[#161618] dark:text-[#F4F1EA] leading-relaxed"
                      >
                        <Icon3D variant="check" size="xs" frameless className="shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-8 mt-8 border-t border-black/[0.06] dark:border-white/[0.06] space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-3.5 px-5 rounded-xl btn-3d-gold font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>انتخاب این پلن</span>
                    <Icon3D variant="arrow-up-left" size="xs" frameless className="text-[#141310]" />
                  </button>

                  <button
                    type="button"
                    onClick={onNavigatePortfolio}
                    className="w-full py-3 px-4 rounded-xl btn-3d-surface font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>دیدن نمونه‌کارها</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
