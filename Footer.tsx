import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] bg-[#EEEAE0] dark:bg-[#060608] text-[#504D46] dark:text-[#A6A198] transition-colors duration-500">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xs sm:text-sm font-medium tracking-tight">
          © ۱۴۰۵ نمایار — استودیوی خلاق تیزرهای تبلیغاتی سینمایی
        </p>
      </div>
    </footer>
  );
};
