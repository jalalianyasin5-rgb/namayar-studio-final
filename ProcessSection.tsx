import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CREATIVE_PROCESS_STEPS } from '../../data/studioData';
import { Icon3D } from '../ui/Icon3D';
import { TiltCard25D } from '../ui/TiltCard25D';

interface ProcessSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = CREATIVE_PROCESS_STEPS[activeStepIndex];

  return (
    <section
      id="process"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#EFECE3]/45 dark:bg-[#09090D] transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical Cascade & Step Reveal */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <Icon3D variant="prism" size="sm" />
              <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                معماری خلاقیت در نمایار · ۶ گام تا اثر نهایی
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              فرآیند خلاقیت و تولید تیزر با هوش مصنوعی
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#504D46] dark:text-[#A6A198] max-w-md leading-relaxed">
            از لحظه شناخت دقیق ویژگی‌های محصول شما تا طراحی صحنه، تولید هوشمند و ویرایش نهایی، هر
            مرحله با دقت هنری و کارگردانی سینمایی پیش می‌رود.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Right Column: 6 Animated Process Steps Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREATIVE_PROCESS_STEPS.map((step, index) => {
              const isSelected = index === activeStepIndex;
              return (
                <motion.button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`w-full text-right p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 group ${
                    isSelected
                      ? 'bg-[#FCFBF8] dark:bg-[#14141A] border-[#B89F72]/60 dark:border-[#C4AC80]/50 shadow-[0_16px_36px_-14px_rgba(22,22,24,0.09)] dark:shadow-[0_20px_42px_-15px_rgba(0,0,0,0.75)]'
                      : 'bg-[#FCFBF8]/65 dark:bg-[#0E0E13]/80 border-black/[0.08] dark:border-white/[0.08] hover:border-[#B89F72]/40 dark:hover:border-[#C4AC80]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 w-full">
                    <Icon3D variant={step.icon} size="sm" />
                    <span
                      className={`text-lg font-extrabold tabular-nums ${
                        isSelected
                          ? 'text-[#8C7248] dark:text-[#C4AC80]'
                          : 'text-[#7C776E] dark:text-[#6E6A63]'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed line-clamp-2">
                      {step.summary}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Left Column: Layered 2.5D Interactive Step Stage Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <TiltCard25D intensity={1.5} className="p-6 sm:p-8 border border-[#B89F72]/35 dark:border-[#C4AC80]/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Stage Header */}
                  <div className="flex items-center justify-between border-b border-black/[0.07] dark:border-white/[0.07] pb-5 gap-4">
                    <div className="flex items-center gap-3.5">
                      <Icon3D variant={currentStep.icon} size="md" />
                      <div>
                        <p className="text-xs font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                          گام {currentStep.stepNumber} از ۰۶ · {currentStep.subtitle}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#161618] dark:text-[#F4F1EA] mt-0.5">
                          {currentStep.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Step Summary */}
                  <p className="text-sm sm:text-base leading-[1.9] text-[#504D46] dark:text-[#A6A198]">
                    {currentStep.summary}
                  </p>

                  {/* Outcome & AI Focus */}
                  <div className="space-y-4 pt-2 border-t border-black/[0.07] dark:border-white/[0.07]">
                    <div className="space-y-1.5">
                      <p className="text-xs font-bold text-[#8C7248] dark:text-[#C4AC80]">
                        خروجی این مرحله:
                      </p>
                      <div className="flex items-start gap-2.5 text-sm font-semibold text-[#161618] dark:text-[#F4F1EA]">
                        <Icon3D variant="check" size="xs" frameless className="mt-0.5 shrink-0" />
                        <span>{currentStep.deliverableOutcome}</span>
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <p className="text-xs font-bold text-[#7C776E] dark:text-[#A6A198]">
                        تمرکز هوشمند نمایار:
                      </p>
                      <p className="text-xs sm:text-sm text-[#504D46] dark:text-[#A6A198]">
                        {currentStep.aiFocus}
                      </p>
                    </div>
                  </div>

                  {/* Step Progress Dots */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {CREATIVE_PROCESS_STEPS.map((s, i) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveStepIndex(i)}
                        aria-label={`رفتن به مرحله ${s.title}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === activeStepIndex
                            ? 'w-8 bg-[#8C7248] dark:bg-[#C4AC80]'
                            : 'w-2 bg-black/15 dark:bg-white/15'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Step Navigation Controls & CTA */}
                  <div className="pt-4 border-t border-black/[0.07] dark:border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStepIndex((prev) =>
                            prev > 0 ? prev - 1 : CREATIVE_PROCESS_STEPS.length - 1
                          )
                        }
                        aria-label="گام قبلی"
                        className="px-3.5 py-2 rounded-xl btn-3d-surface text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Icon3D variant="arrow-right" size="xs" frameless />
                        <span>گام قبل</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStepIndex((prev) =>
                            prev < CREATIVE_PROCESS_STEPS.length - 1 ? prev + 1 : 0
                          )
                        }
                        aria-label="گام بعدی"
                        className="px-3.5 py-2 rounded-xl btn-3d-surface text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>گام بعد</span>
                        <Icon3D variant="arrow-left" size="xs" frameless />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate('pricing')}
                      className="text-xs sm:text-sm font-bold text-[#8C7248] dark:text-[#C4AC80] hover:underline cursor-pointer whitespace-nowrap"
                    >
                      شروع فرآیند برای محصول شما ←
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TiltCard25D>
          </div>
        </div>
      </div>
    </section>
  );
};
