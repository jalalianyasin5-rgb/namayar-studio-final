import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Icon3D } from '../ui/Icon3D';
import { ResilientImage } from '../ui/ResilientImage';
import { TiltCard25D } from '../ui/TiltCard25D';

export const AboutStudioSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Right Text Column */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <Icon3D variant="crown" size="sm" />
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C7248] dark:text-[#C4AC80]">
                <span>درباره نمایار</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#504D46] dark:text-[#A6A198]">
                  پیوند هنر کارگردانی و هوش مصنوعی پیشرفته
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#161618] dark:text-[#F4F1EA] headline-balance leading-[1.28]">
              تبلیغ برای محصولات شما با استاندارد نوین تیزرهای سینمایی
            </h2>

            <p className="text-sm sm:text-base leading-[1.9] text-[#504D46] dark:text-[#A6A198]">
              «نمایار» یک استودیوی خلاق ممتاز مبتنی بر هوش مصنوعی است که با هدف دگرگون ساختن شیوه
              تبلیغ برای محصولات شما شکل گرفته است. ما به جای محدود شدن به چارچوب‌های سنتی، از
              پیشرفته‌ترین فناوری‌های هوش مصنوعی بصری و کارگردانی هنری بهره می‌گیریم تا برای هر محصول،
              صحنه‌ای درخور و باشکوه خلق کنیم.
            </p>

            <p className="text-sm sm:text-base leading-[1.9] text-[#504D46] dark:text-[#A6A198]">
              در «نمایار»، تمرکز ما بر وفاداری کامل به هویت محصولات شماست؛ به گونه‌ای که بافت چرم،
              درخشش فلز، ظرافت قاب، شفافیت بلور یا لطافت پارچه در دل نورپردازی و فضاسازی‌های سینمایی
              ۲.۵ بعدی با بالاترین سطح زیبایی‌شناسی به تصویر کشیده شود.
            </p>

            {/* Pillars with 3D Dimensional Icons */}
            <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3.5">
                <Icon3D variant="shield" size="sm" />
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                    وفاداری به اصالت کالا
                  </h3>
                  <p className="text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed">
                    حفظ دقیق جزئیات ظاهری، رنگ و هندسه محصول واقعی شما در تمامی پلان‌های سینمایی
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Icon3D variant="sliders" size="sm" />
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-[#161618] dark:text-[#F4F1EA]">
                    تخیل بصری بی‌مرز
                  </h3>
                  <p className="text-xs text-[#504D46] dark:text-[#A6A198] leading-relaxed">
                    امکان طراحی هرگونه اتمسفر، دکور معمارانه و نورپردازی متناسب با جایگاه لوکس برند
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Visual Column */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <TiltCard25D intensity={1.5} className="border border-[#B89F72]/35 dark:border-[#C4AC80]/30">
              <div className="relative aspect-16/10 w-full">
                <ResilientImage
                  src="/src/assets/images/hero_perfume_cinema_1791119126856.jpg"
                  alt="خلق صحنه‌های سینمایی با هوش مصنوعی در استودیو خلاق نمایار"
                  containerClassName="w-full h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/28 to-transparent"
                />
                <div className="absolute bottom-5 inset-x-5 sm:inset-x-6 text-white space-y-1.5">
                  <div className="text-xs text-[#D6C29C] font-semibold flex items-center gap-2">
                    <span>چشم‌انداز بصری نمایار</span>
                    <span aria-hidden="true">·</span>
                    <span>سنتز نور، بافت و حرکت سینمایی</span>
                  </div>
                  <p className="text-sm sm:text-lg font-extrabold leading-snug">
                    تبلیغ برای محصولات شما و خلق تجربه‌های بصری ماندگار با قدرت هوش مصنوعی و کارگردانی هنری
                  </p>
                </div>
              </div>
            </TiltCard25D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
