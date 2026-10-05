import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRODUCT_DOMAINS, STUDIO_SERVICES } from '../../data/studioData';
import { Icon3D } from '../ui/Icon3D';
import { ResilientImage } from '../ui/ResilientImage';
import { TiltCard25D } from '../ui/TiltCard25D';

interface ServicesSectionProps {
  onSelectServiceForBrief: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBrief,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    STUDIO_SERVICES[0].id
  );

  const toggleDeliverables = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Lateral Perspective Slide-In */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div className="max-w-2xl space-y-3.5">
            <div className="flex items-center gap-3">
              <Icon3D variant="layers" size="sm" />
              <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                خدمات خلاقانه نمایار · بدون محدودیت در دسته‌بندی محصول
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              تبلیغ برای محصولات شما با تیزرهای سینمایی در دسته‌های گوناگون
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#504D46] dark:text-[#A6A198] max-w-md leading-relaxed">
            فرقی نمی‌کند محصول شما در حوزه مد، کفش و جواهرات باشد یا در دسته لوازم آرایشی، خانه،
            دکوراسیون و کالاهای مصرفی؛ «نمایار» برای محصولات شما جهانی سینمایی و منحصربه‌فرد
            می‌آفریند.
          </p>
        </motion.div>

        {/* Multi-Category Product Spectrum */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCT_DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TiltCard25D intensity={1.4} className="h-full p-5 sm:p-6 group">
                <div className="space-y-4">
                  <Icon3D variant={domain.icon} size="md" />
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                      {domain.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#504D46] dark:text-[#A6A198]">
                      {domain.examples}
                    </p>
                  </div>
                </div>
              </TiltCard25D>
            </motion.div>
          ))}
        </div>

        {/* Asymmetric 2.5D Bento Grid of Core Creative AI Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {STUDIO_SERVICES.map((service, idx) => {
            const isLarge = service.bentoSpan === 'large';
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={isLarge ? 'lg:col-span-7' : 'lg:col-span-5'}
              >
                <TiltCard25D intensity={1.5} className="h-full flex flex-col justify-between group">
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                    {/* Top Row */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4 border-b border-black/[0.07] dark:border-white/[0.07] pb-4">
                        <div className="flex items-center gap-3.5">
                          <Icon3D variant={service.icon} size="md" />
                          <span className="text-xl sm:text-2xl font-extrabold tabular-nums text-[#8C7248] dark:text-[#C4AC80]">
                            {service.index}.
                          </span>
                        </div>
                        <span className="text-xs font-medium text-[#7C776E] dark:text-[#A6A198]">
                          استودیوی خلاق نمایار
                        </span>
                      </div>

                      {/* Service Title & Subtitle */}
                      <div className="space-y-2 pt-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#161618] dark:text-[#F4F1EA] leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Service Description */}
                      <p className="text-sm sm:text-[15px] leading-[1.85] text-[#504D46] dark:text-[#A6A198]">
                        {service.description}
                      </p>
                    </div>

                    {/* Visual Strip on Large Bento Cards */}
                    {isLarge && service.imagePreview && (
                      <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08]">
                        <ResilientImage
                          src={service.imagePreview}
                          alt={service.title}
                          containerClassName="w-full h-full"
                          className="group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                        />
                        <div className="absolute bottom-3 inset-x-4 text-xs text-white/90">
                          <span>دامنه پوشش: {service.categoriesCovered}</span>
                        </div>
                      </div>
                    )}

                    {!isLarge && (
                      <div className="text-xs text-[#7C776E] dark:text-[#A6A198] pt-1">
                        <span className="font-bold text-[#161618] dark:text-[#F4F1EA]">
                          دامنه کاربرد:{' '}
                        </span>
                        <span>{service.categoriesCovered}</span>
                      </div>
                    )}

                    {/* Interactive Deliverables Accordion & Action */}
                    <div className="pt-4 border-t border-black/[0.07] dark:border-white/[0.07] space-y-4">
                      <button
                        type="button"
                        onClick={() => toggleDeliverables(service.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-[#161618] dark:text-[#F4F1EA] hover:text-[#8C7248] dark:hover:text-[#C4AC80] transition-colors py-1 cursor-pointer"
                      >
                        <span>ویژگی‌ها و دستاوردهای این بخش ({service.deliverables.length} مورد)</span>
                        <span
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        >
                          <Icon3D variant="chevron-down" size="xs" frameless />
                        </span>
                      </button>

                      {isExpanded && (
                        <ul className="space-y-3 pt-1 text-xs sm:text-sm text-[#504D46] dark:text-[#A6A198]">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                              <Icon3D variant="check" size="xs" frameless className="mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-2 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => onSelectServiceForBrief(service.title)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C7248] dark:text-[#C4AC80] hover:underline cursor-pointer whitespace-nowrap"
                        >
                          <span>درخواست ساخت تیزر با این رویکرد</span>
                          <Icon3D
                            variant="arrow-up-left"
                            size="xs"
                            frameless
                            className="text-[#8C7248] dark:text-[#C4AC80]"
                          />
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
