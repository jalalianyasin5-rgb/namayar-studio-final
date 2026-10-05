import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { Icon3D } from '../ui/Icon3D';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'portfolio', label: 'نمونه‌کارها' },
  { id: 'services', label: 'خدمات' },
  { id: 'pricing', label: 'تعرفه‌ها' },
  { id: 'process', label: 'فرآیند' },
  { id: 'about', label: 'درباره' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <motion.header
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F3EC]/92 dark:bg-[#08080A]/92 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] shadow-[0_12px_32px_-14px_rgba(22,22,24,0.08)] dark:shadow-[0_16px_38px_-14px_rgba(0,0,0,0.55)]'
          : 'bg-transparent border-b border-black/[0.05] dark:border-white/[0.05]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single Text Element Wordmark («نمایار») */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="text-xl sm:text-2xl font-black tracking-tight text-[#161618] dark:text-[#F4F1EA] hover:text-[#8C7248] dark:hover:text-[#C4AC80] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89F72]"
        >
          نمایار
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89F72] ${
                  isActive
                    ? 'text-[#161618] dark:text-[#F4F1EA] font-bold'
                    : 'text-[#504D46] dark:text-[#A6A198] hover:text-[#161618] dark:hover:text-[#F4F1EA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId={prefersReducedMotion ? undefined : 'namayar-active-nav'}
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[#8C7248] dark:bg-[#C4AC80] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle + Main Champagne Gold CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک'}
            title={theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'}
            className="btn-3d-surface w-10 h-10 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89F72]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun-icon"
                  initial={prefersReducedMotion ? { opacity: 1 } : { rotate: -75, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 75, scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  <Icon3D variant="sun" size="xs" frameless />
                </motion.span>
              ) : (
                <motion.span
                  key="moon-icon"
                  initial={prefersReducedMotion ? { opacity: 1 } : { rotate: 75, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { rotate: -75, scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  <Icon3D variant="moon" size="xs" frameless />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, 'pricing')}
            className="hidden sm:inline-flex items-center justify-center px-4 lg:px-5 py-2.5 text-xs lg:text-sm font-bold rounded-xl btn-3d-gold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89F72]"
          >
            درخواست ساخت تیزر
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'بستن منوی موبایل' : 'باز کردن منوی موبایل'}
            className="md:hidden btn-3d-surface w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
          >
            <Icon3D variant={mobileMenuOpen ? 'close' : 'menu'} size="xs" frameless />
          </button>
        </div>
      </div>

      {/* Stylish 2.5D Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-black/[0.08] dark:border-white/[0.10] bg-[#F6F3EC]/98 dark:bg-[#0B0B0E]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-xl"
          >
            <nav aria-label="منوی موبایل" className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: prefersReducedMotion ? 0 : idx * 0.03 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#8C7248]/12 dark:bg-[#C4AC80]/14 text-[#8C7248] dark:text-[#C4AC80] font-bold'
                        : 'text-[#161618] dark:text-[#F4F1EA] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                  </motion.a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, 'pricing')}
                  className="w-full py-3.5 px-5 rounded-xl btn-3d-gold font-bold text-sm flex items-center justify-center whitespace-nowrap"
                >
                  درخواست ساخت تیزر
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
