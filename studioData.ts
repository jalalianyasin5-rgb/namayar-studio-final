import {
  MessagingChannelItem,
  PricingPlanItem,
  ProductDomainGroup,
  ProcessStepItem,
  StudioServiceItem,
  TeaserPortfolioItem,
} from '../types/studio';

import frameTeaser01Video from '../assets/videos/namayar_frame_teaser_01.mp4';
import frameTeaser02Video from '../assets/videos/namayar_frame_teaser_02.mp4';
import shoeTeaserVideo from '../assets/videos/namayar_shoe_teaser.mp4';
import frameTeaser01Poster from '../assets/images/portfolio-posters/namayar_frame_teaser_01.jpg';
import frameTeaser02Poster from '../assets/images/portfolio-posters/namayar_frame_teaser_02.jpg';
import shoeTeaserPoster from '../assets/images/portfolio-posters/namayar_shoe_teaser.jpg';

export const BALE_ORDER_URL = 'https://ble.ir/BeOmidAzady';
export const EITAA_ORDER_URL = 'https://eitaa.com/Yasin13890011';

export const MESSAGING_CHANNELS: MessagingChannelItem[] = [
  {
    id: 'bale',
    name: 'بله',
    subtitle: 'سفارش و هماهنگی',
    icon: 'bale',
    url: BALE_ORDER_URL,
  },
  {
    id: 'eitaa',
    name: 'ایتا',
    subtitle: 'سفارش و هماهنگی',
    icon: 'eitaa',
    url: EITAA_ORDER_URL,
  },
];

export const PORTFOLIO_TEASERS: TeaserPortfolioItem[] = [
  {
    id: 'teaser-shoe',
    title: 'تیزر کفش',
    subtitle: 'حرکت سینمایی، تعلیق ذرات و نمایش اصالت بافت چرم و جیر با هوش مصنوعی',
    category: 'footwear',
    categoryLabel: 'کفش و مد',
    duration: '۰۰:۱۷',
    aspectRatioLabel: '16:9 Cinema · 9:16 Vertical',
    aiCapabilities: 'شبیه‌سازی نور حجمی · تعلیق ۲.۵ بعدی · بازآفرینی دقیق بافت متریال',
    summary:
      'نمایش پویایی، فرم ارگونومیک و جزئیات دوخت کفش در یک صحنه سینمایی تاریک با ذرات معلق طلایی و نورپردازی لبه‌ای که بدون نیاز به فیلم‌برداری سنتی، حس قدرت و لوکس بودن محصول را منتقل می‌کند.',
    visualDirectionNotes:
      'ترکیب کنتراست عمیق زغالی با پرتوهای گرم شامپاینی برای برجسته‌سازی خطوط طراحی و بافت واقعی رویه و زیره کفش.',
    imageUrl: shoeTeaserPoster,
    videoUrl: shoeTeaserVideo,
    featured: true,
    scenes: [
      {
        timecode: '۰۰:۰۰ - ۰۰:۱۰',
        title: 'طلوع سیلوئت و پرتوهای لبه‌ای',
        description: 'آشکار شدن تدریجی خطوط طراحی کفش از دل تاریکی با حرکت نرم نور طلایی روی بافت جیر و چرم.',
        technique: 'نورپردازی حجمی هوش مصنوعی',
      },
      {
        timecode: '۰۰:۱۰ - ۰۰:۲۲',
        title: 'تعلیق سینمایی و حرکت ذرات معلق',
        description: 'شناور شدن محصول در فضا همراه با حرکت آهسته ذرات طلایی و چرخش زاویه دید پیرامون جزئیات دوخت.',
        technique: 'عمق میدانی و حرکت ۲.۵ بعدی',
      },
      {
        timecode: '۰۰:۲۲ - ۰۰:۳۲',
        title: 'قاب نهایی و تثبیت هویت بصری',
        description: 'فرود پرقدرت محصول در مرکز کادر با کنتراست سینمایی و نمایش تمام‌رخ طراحی.',
        technique: 'تدوین ریتمیک و اصلاح رنگ سینمایی',
      },
    ],
  },
  {
    id: 'teaser-frame-classic',
    title: 'تیزر قاب عکس',
    subtitle: 'شکوه کلاسیک، بازتاب طلای شامپاینی و صحنه‌پردازی معمارانه با هوش مصنوعی',
    category: 'home_decor',
    categoryLabel: 'دکوراسیون و لوازم تزئینی',
    duration: '۰۰:۱۸',
    aspectRatioLabel: '16:9 Cinema · 9:16 Reels',
    aiCapabilities: 'بازتاب واقع‌گرایانه فلز و شیشه · طراحی دکور سنگ مرمر تیره · حرکت نرم نور',
    summary:
      'خلق فضایی فاخر و گالری‌گونه برای نمایش ظرافت حکاکی‌ها و درخشش متریال قاب عکس روی سکوی سنگ تیره با پرتوهای نور مایل که حس اصالت و ماندگاری را در ذهن مخاطب ثبت می‌کند.',
    visualDirectionNotes:
      'حرکت آهسته پرتوهای نور از روی لبه‌های برجسته قاب برای نمایش عمق تراش‌ها و کیفیت ساخت محصول در فضای دکوراتیو لوکس.',
    imageUrl: frameTeaser01Poster,
    videoUrl: frameTeaser01Video,
    featured: false,
    scenes: [
      {
        timecode: '۰۰:۰۰ - ۰۰:۰۹',
        title: 'درخشش جزئیات و بافت لبه‌های قاب',
        description: 'نمای نزدیک از ظرافت ساخت و عبور پرتو نور گرم از روی نقوش و زاویه‌های قاب عکس.',
        technique: 'ماکرو سنتز بصری هوش مصنوعی',
      },
      {
        timecode: '۰۰:۰۹ - ۰۰:۱۹',
        title: 'هارمونی محصول با فضای معمارانه',
        description: 'حرکت آرام زاویه دید در محیطی با سنگ‌های تیره و سایه‌های نرم برای نمایش مقیاس و شکوه قاب.',
        technique: 'صحنه‌پردازی و نورپردازی محیطی',
      },
      {
        timecode: '۰۰:۱۹ - ۰۰:۲۸',
        title: 'نمای کامل و امضای بصری اثر',
        description: 'تثبیت قاب نهایی در تعادل کامل نوری با تاکید بر جلوه لوکس محصول در دکوراسیون.',
        technique: 'مسترینگ رنگ شامپاینی و کنتراست بالا',
      },
    ],
  },
  {
    id: 'teaser-frame-modern',
    title: 'تیزر قاب عکس',
    subtitle: 'مینیمالیسم مدرن، هندسه معلق و تعادل نور و سایه روی سنگ عاجی گرم',
    category: 'home_decor',
    categoryLabel: 'خانه و سبک زندگی',
    duration: '۰۰:۱۵',
    aspectRatioLabel: '16:9 Cinema · 4:5 Social',
    aiCapabilities: 'طراحی صحنه مینیمال · سایه‌های طبیعی کیاروسکورو · حرکت پارالاکس نرم',
    summary:
      'روایتی مدرن و هنری از یک قاب عکس مینیمال با ترکیب چوب گردو و فلز ظریف، معلق بر فراز بافت سنگ تراورتن عاجی که زیبایی سادگی و دقت در جزئیات را به تصویر می‌کشد.',
    visualDirectionNotes:
      'استفاده از پالت عاجی گرم، زغالی و طلای مات با نور طبیعی جهت‌دار برای القای حس آرامش، هنر معاصر و کیفیت ممتاز.',
    imageUrl: frameTeaser02Poster,
    videoUrl: frameTeaser02Video,
    featured: false,
    scenes: [
      {
        timecode: '۰۰:۰۰ - ۰۰:۱۰',
        title: 'تعادل هندسی نور و سایه',
        description: 'حرکت سایه‌های معمارانه روی سطح سنگ تراورتن و نمایان شدن خطوط دقیق قاب عکس.',
        technique: 'شبیه‌سازی نورپردازی جهت‌دار',
      },
      {
        timecode: '۰۰:۱۰ - ۰۰:۲۱',
        title: 'نمایش پیوند چوب و فلز در نمای نزدیک',
        description: 'گذر نرم تصویر از روی بافت گرم چوب و یراق فلزی ظریف با وضوح خیره‌کننده.',
        technique: 'حفظ وفاداری کامل به بافت محصول',
      },
      {
        timecode: '۰۰:۲۱ - ۰۰:۳۰',
        title: 'ترکیب‌بندی نهایی در فضای سبک زندگی مدرن',
        description: 'قاب عریض پایانی با عمق ۲.۵ بعدی که جایگاه محصول را در یک فضای مدرن و لوکس به نمایش می‌گذارد.',
        technique: 'پالایش نهایی و خروجی چندفرمتی',
      },
    ],
  },
];

export const PRICING_PLANS: PricingPlanItem[] = [
  {
    id: 'plan-1',
    planLabel: 'پلن ۱',
    title: 'تیزر ۲۰ ثانیه‌ای',
    price: '۴۵۰٬۰۰۰',
    currency: 'تومان',
    icon: 'film',
    features: [
      '۱ ویدیو تیزر',
      '۵ عکس از زوایای مختلف محصول',
    ],
    featured: false,
  },
  {
    id: 'plan-2',
    planLabel: 'پلن ۲',
    title: 'تیزر ۳۰ ثانیه‌ای',
    price: '۷۵۰٬۰۰۰',
    currency: 'تومان',
    icon: 'crown',
    features: [
      '۱ ویدیو تیزر',
      '۸ عکس محصول',
      'امکان تعویض عکس‌ها',
    ],
    featured: true,
  },
  {
    id: 'plan-3',
    planLabel: 'پلن ۳',
    title: 'پکیج دو محصول',
    price: '۱٬۰۰۰٬۰۰۰',
    currency: 'تومان',
    icon: 'gem',
    features: [
      '۲ ویدیو ۲۰ ثانیه‌ای برای ۲ محصول مختلف',
      '۱۲ عکس، ۶ عکس برای هر محصول',
      'امکان تعویض عکس‌ها',
    ],
    featured: false,
  },
];

export const PRODUCT_DOMAINS: ProductDomainGroup[] = [
  {
    id: 'domain-fashion-footwear',
    title: 'مد، پوشاک، کفش و لوازم جانبی',
    examples: 'کفش‌های چرمی و کتانی، کیف، عینک، کمربند، شال و کلکسیون‌های مد',
    icon: 'crown',
  },
  {
    id: 'domain-jewelry-watches',
    title: 'جواهرات، طلا، ساعت و اکسسوری‌های فاخر',
    examples: 'انگشتر، گردنبند، ساعت‌های مچی، دستبند و سنگ‌های قیمتی',
    icon: 'prism',
  },
  {
    id: 'domain-cosmetics-perfume',
    title: 'عطر، لوازم آرایشی و مراقبت شخصی',
    examples: 'عطر و ادکلن، سرم‌های پوستی، کرم‌ها و پکیجینگ‌های زیبایی',
    icon: 'spark',
  },
  {
    id: 'domain-home-lifestyle',
    title: 'خانه، دکوراسیون، قاب عکس و محصولات مصرفی',
    examples: 'قاب عکس، اشیای دکوراتیو، ظروف لوکس، روشنایی، گجت‌ها و کالاهای سبک زندگی',
    icon: 'cube',
  },
];

export const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    id: 'service-ai-commercial-teasers',
    index: '۰۱',
    icon: 'spark',
    title: 'تبلیغ برای محصولات شما با خلق تیزرهای سینمایی هوش مصنوعی',
    subtitle: 'تبدیل تصویر محصول شما به یک تیزر ویدئویی خیره‌کننده و لوکس',
    description:
      'در «نمایار»، ما بدون محدودیت‌های تولید سنتی، تبلیغ برای محصولات شما را در هر دسته—از مد، کفش، کیف و جواهرات تا لوازم آرایشی، عطر، قاب عکس، دکوراسیون منزل و کالاهای مصرفی—در قلب صحنه‌های سینمایی چشم‌نواز اجرا می‌کنیم تا ارزش واقعی برندتان در نگاه اول بدرخشد.',
    categoriesCovered:
      'مد و کفش · جواهرات و لوازم جانبی · آرایشی و عطر · خانه و تزئینی · سبک زندگی و کالاهای مصرفی',
    deliverables: [
      'حفظ کامل اصالت، فرم، رنگ و جزئیات واقعی محصولات شما',
      'خلق حرکت‌های سینمایی، اسلوموشن و زوایای دید پویا با هوش مصنوعی',
      'ارائه خروجی در نسبت‌های تصویر افقی (16:9) و عمودی (9:16) متناسب با کمپین برند',
    ],
    bentoSpan: 'large',
    imagePreview: '/src/assets/images/teaser_luxury_shoe_1791119161902.jpg',
  },
  {
    id: 'service-virtual-set-lighting',
    index: '۰۲',
    icon: 'layers',
    title: 'طراحی صحنه، دکور و نورپردازی سینمایی نامحدود',
    subtitle: 'خلق فضاهای معمارانه، سطوح سنگی، آب، مه و نورپردازی حجمی',
    description:
      'هر محصول برای درخشش نیازمند اتمسفر اختصاصی خود است. ما بر اساس هویت بصری برند شما، دکورهای لوکس مینیمال، کلاسیک یا آینده‌نگرانه طراحی می‌کنیم و بازتاب نور روی چرم، شیشه، چوب، فلز و پارچه را با دقت هنری شبیه‌سازی می‌نماییم.',
    categoriesCovered: 'مناسب تمامی محصولات شما بدون محدودیت ابعاد یا دسته‌بندی',
    deliverables: [
      'طراحی اتمسفر و پالت نوری اختصاصی منطبق با شخصیت برند',
      'خلق جلوه‌های محیطی ظریف (پرتوهای نور، ذرات معلق، بازتاب‌های آینه‌ای و سایه‌های عمیق)',
      'هماهنگی کامل دکور و پس‌زمینه با بافت و رنگ محصول شما',
    ],
    bentoSpan: 'regular',
    imagePreview: '/src/assets/images/teaser_frame_classic_1791122000364.jpg',
  },
  {
    id: 'service-creative-direction',
    index: '۰۳',
    icon: 'compass',
    title: 'کارگردانی هنری و سناریونویسی بصری کمپین‌های محصول',
    subtitle: 'تدوین کانسپت خلاقانه برای میخکوب کردن مخاطب در ثانیه‌های نخست',
    description:
      'یک تیزر موفق تنها یک تصویر زیبا نیست؛ بلکه داستانی کوتاه و اثرگذار برای تبلیغ برای محصولات شماست. تیم خلاق «نمایار» قبل از تولید، مسیر حرکت نگاه مخاطب، ریتم صحنه‌ها و پیام کلیدی محصول را مهندسی می‌کند.',
    categoriesCovered: 'کمپین‌های معرفی محصول جدید · ری‌برندینگ · ارتقای پرستیژ بصری برند',
    deliverables: [
      'تدوین مفهوم خلاقانه (Creative Concept) متمایز از رقبا',
      'طراحی ریتم بصری برای جلب توجه فوری مخاطب در شبکه‌های اجتماعی و وب‌سایت',
      'یکپارچگی کامل سبک بصری تیزر با هویت برند شما',
    ],
    bentoSpan: 'regular',
    imagePreview: '/src/assets/images/teaser_frame_minimal_1791122015889.jpg',
  },
  {
    id: 'service-final-mastering',
    index: '۰۴',
    icon: 'film',
    title: 'تدوین نهایی، اصلاح رنگ سینمایی و مهندسی صدا',
    subtitle: 'پالایش فریم‌به‌فریم، گریدینگ رنگ لوکس و صداگذاری هماهنگ با تصویر',
    description:
      'در مرحله پایانی، تمامی سکانس‌های تولیدشده با هوش مصنوعی تحت نظارت کارگردان هنری تدوین می‌شوند؛ رنگ‌ها به استاندارد سینمایی کالیبره شده و با افکت‌های صوتی و موسیقی متن فاخر ترکیب می‌گردند تا اثری بی‌نقص و آماده انتشار تحویل شود.',
    categoriesCovered: 'تمامی تیزرهای تبلیغاتی تولیدشده در استودیو خلاق نمایار',
    deliverables: [
      'تدوین ریتمیک و یکپارچه‌سازی گذارهای تصویری (Seamless Transitions)',
      'اصلاح رنگ و کنتراست سینمایی (Color Grading) با حفظ رنگ واقعی محصول شما',
      'صداگذاری و انتخاب موسیقی متن متناسب با ریتم حرکت تصویر',
    ],
    bentoSpan: 'large',
    imagePreview: '/src/assets/images/hero_perfume_cinema_1791119126856.jpg',
  },
];

export const CREATIVE_PROCESS_STEPS: ProcessStepItem[] = [
  {
    id: 'step-01',
    stepNumber: '۰۱',
    icon: 'cube',
    title: 'درک محصول',
    subtitle: 'Product Understanding',
    summary:
      'در گام نخست، ویژگی‌های ظاهری، متریال، بافت، زوایای کلیدی و نقاط تمایز محصول شما به دقت تحلیل می‌شود تا جوهره اصلی آن و مخاطب هدف به طور کامل شناخته شود.',
    deliverableOutcome: 'تحلیل جامع فرم، متریال و نقاط قوت بصری محصول شما',
    aiFocus: 'حفظ اصالت و وفاداری ۱۰۰٪ به جزئیات واقعی محصولات شما',
  },
  {
    id: 'step-02',
    stepNumber: '۰۲',
    icon: 'spark',
    title: 'مفهوم خلاقانه',
    subtitle: 'Creative Concept',
    summary:
      'بر اساس شخصیت برند و پیام کمپین، ایده مرکزی و روایت داستانی تیزر شکل می‌گیرد؛ مفهومی که تبلیغ برای محصولات شما را به یک تجربه خواستنی و به‌یادماندنی تبدیل می‌کند.',
    deliverableOutcome: 'سناریوی کوتاه تبلیغاتی و ایده خلاقانه اختصاصی برند',
    aiFocus: 'طراحی قلاب بصری اثرگذار برای ثانیه‌های آغازین تیزر',
  },
  {
    id: 'step-03',
    stepNumber: '۰۳',
    icon: 'compass',
    title: 'جهت بصری',
    subtitle: 'Visual Direction',
    summary:
      'سبک هنری، پالت رنگی، کنتراست، ریتم حرکت و حس‌وحال (Mood) کلی اثر تعیین می‌شود تا تیزر نهایی دقیقاً هم‌راستا با پرستیژ و جایگاه برند شما باشد.',
    deliverableOutcome: 'تعیین زبان بصری، پالت رنگی و استوری‌بورد مفهومی',
    aiFocus: 'هماهنگ‌سازی استانداردهای زیبایی‌شناسی لوکس با هویت برند',
  },
  {
    id: 'step-04',
    stepNumber: '۰۴',
    icon: 'layers',
    title: 'طراحی صحنه / دکور / نورپردازی',
    subtitle: 'Scene, Set & Lighting Design',
    summary:
      'محیط پیرامون محصول، سکوها، بافت‌های پس‌زمینه و زاویه تابش نورهای اصلی و محیطی طراحی می‌شوند تا انحناها، تراش‌ها و کیفیت متریال محصول در بهترین حالت ممکن بدرخشند.',
    deliverableOutcome: 'معماری صحنه، چیدمان دکور و طراحی نورپردازی سینمایی',
    aiFocus: 'شبیه‌سازی دقیق بازتاب نور، سایه‌های واقع‌گرایانه و عمق ۲.۵ بعدی',
  },
  {
    id: 'step-05',
    stepNumber: '۰۵',
    icon: 'prism',
    title: 'تولید هوش مصنوعی',
    subtitle: 'AI Generation',
    summary:
      'با بهره‌گیری از موتورهای پیشرفته هوش مصنوعی بصری و هدایت دقیق کارگردان هنری، سکانس‌های ویدئویی با حرکت‌های نرم، جلوه‌های محیطی ظریف و وضوح بالا خلق می‌شوند.',
    deliverableOutcome: 'خلق پلان‌های ویدئویی سینمایی با حرکت و پویایی چشم‌نواز',
    aiFocus: 'سنتز حرکت سینمایی با حفظ یکپارچگی کامل شکل و جزئیات محصول',
  },
  {
    id: 'step-06',
    stepNumber: '۰۶',
    icon: 'film',
    title: 'ویرایش نهایی',
    subtitle: 'Final Editing',
    summary:
      'پلان‌های برگزیده با ریتم دقیق تدوین شده، اصلاح رنگ و نور نهایی (Color Grading) و مهندسی صدا روی آن‌ها انجام می‌گیرد تا فایل مستر آماده انتشار تحویل گردد.',
    deliverableOutcome: 'تیزر نهایی کالیبره‌شده با صداگذاری حرفه‌ای و آماده انتشار',
    aiFocus: 'پالایش فریم‌به‌فریم، کنترل کیفیت نهایی و خروجی استاندارد',
  },
];
