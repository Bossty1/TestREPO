import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  services: { ar: "الخدمات", en: "Services" },
  pricing: { ar: "الأسعار", en: "Pricing" },
  faq: { ar: "الأسئلة الشائعة", en: "FAQ" },
  contact: { ar: "اتصل بنا", en: "Contact" },
  signIn: { ar: "تسجيل الدخول", en: "Sign In" },
  getStarted: { ar: "ابدأ الآن", en: "Get Started" },
  
  // Hero
  web3Services: { ar: "خدمات SMM Web3.0", en: "Web3.0 SMM Services" },
  heroTitle1: { ar: "أفضل و أرخص", en: "Best & Cheapest" },
  heroTitle2: { ar: "وكالة مختصه في الحملات الاعلانية", en: "Marketing Campaings" },
  heroDescription: { ar: "SmmBossty هي لوحة SMM موثوقة بتقنية Web3.0 للمشاركة الحقيقية والنتائج الفورية. عزز تواجدك على", en: "SmmBossty is your trusted Web3.0 SMM panel for real engagement and instant results. Boost your presence on" },
  andMore: { ar: "والمزيد", en: "and more" },
  web3SecurePayments: { ar: "دفع آمن Web3", en: "Web3 Secure Payments" },
  instantDelivery: { ar: "توصيل فوري", en: "Instant Delivery" },
  support247: { ar: "دعم 24/7", en: "24/7 Support" },
  getStartedNow: { ar: "ابدأ الآن", en: "Get Started Now" },
  viewServices: { ar: "عرض الخدمات", en: "View Services" },
  users: { ar: "مستخدم", en: "Users" },
  growth: { ar: "النمو", en: "Growth" },
  delivery: { ar: "التوصيل", en: "Delivery" },
  instant: { ar: "فوري", en: "Instant" },
  orders: { ar: "الطلبات", en: "Orders" },
  smmPanel: { ar: "لوحة SMM", en: "SMM Panel" },
  web3ServicesShort: { ar: "خدمات Web3.0", en: "Web3.0 Services" },
  instagramFollowers: { ar: "متابعين انستغرام", en: "Instagram Followers" },
  youtubeViews: { ar: "مشاهدات يوتيوب", en: "YouTube Views" },
  tiktokLikes: { ar: "إعجابات تيك توك", en: "TikTok Likes" },
  
  // Stats
  ourStats: { ar: "إحصائياتنا", en: "Our" },
  smmPanelStats: { ar: "لوحة SMM", en: "SMM Panel Stats" },
  statsDescription: { ar: "أرخص وأسرع وأكثر لوحة SMM موثوقة في 2025", en: "Cheapest, Fastest & Most Trusted SMM Panel in 2025" },
  totalOrders: { ar: "إجمالي الطلبات", en: "Total Orders" },
  totalOrdersDesc: { ar: "تم تسليم الطلبات بجودة ثابتة", en: "Orders delivered with consistent quality" },
  registeredUsers: { ar: "المستخدمين المسجلين", en: "Registered Users" },
  registeredUsersDesc: { ar: "وكالات ومسوقين ومؤثرين يثقون بنا", en: "Agencies, resellers & influencers trust us" },
  activeServices: { ar: "الخدمات النشطة", en: "Active Services" },
  activeServicesDesc: { ar: "من انستغرام إلى يوتيوب وتيك توك", en: "From Instagram to YouTube & TikTok" },
  countriesServed: { ar: "الدول المخدومة", en: "Countries Served" },
  countriesServedDesc: { ar: "وصول عالمي بأسعار محلية", en: "Global reach with local pricing" },
  experience: { ar: "سنوات الخبرة", en: "Experience" },
  experienceDesc: { ar: "نحسن حلولنا باستمرار", en: "Constantly optimizing our solutions" },
  
  // Services
  bestSmmPanel: { ar: "أفضل خدمات", en: "Best" },
  smmPanelServices: { ar: "لوحة SMM", en: "SMM Panel Services" },
  servicesDescription: { ar: "تبديل بين المنصات لاستكشاف خدماتنا المخصصة لشبكاتك الاجتماعية المفضلة", en: "Switch between platforms to explore our tailored services for your favourite social networks" },
  
  // Platform names
  instagram: { ar: "انستغرام", en: "Instagram" },
  youtube: { ar: "يوتيوب", en: "YouTube" },
  tiktok: { ar: "تيك توك", en: "TikTok" },
  telegram: { ar: "تيليجرام", en: "Telegram" },
  twitter: { ar: "إكس / تويتر", en: "X / Twitter" },
  facebook: { ar: "فيسبوك", en: "Facebook" },
  
  // Facebook services
  pageLikes: { ar: "إعجابات الصفحة", en: "Page Likes" },
  pageLikesDesc: { ar: "نمي صفحتك على فيسبوك", en: "Grow your Facebook page" },
  pageGrowth: { ar: "نمو الصفحة", en: "Page Growth" },
  postLikes: { ar: "إعجابات المنشور", en: "Post Likes" },
  postLikesDesc: { ar: "عزز تفاعل منشوراتك", en: "Boost post engagement" },
  engagement: { ar: "التفاعل", en: "Engagement" },
  videoViews: { ar: "مشاهدات الفيديو", en: "Video Views" },
  videoViewsDesc: { ar: "زد وصول الفيديو", en: "Increase video reach" },
  viewsBoost: { ar: "تعزيز المشاهدات", en: "Views Boost" },
  comments: { ar: "التعليقات", en: "Comments" },
  commentsDesc: { ar: "أضف تعليقات حقيقية", en: "Add authentic comments" },
  socialProof: { ar: "إثبات اجتماعي", en: "Social Proof" },
  shares: { ar: "المشاركات", en: "Shares" },
  sharesDesc: { ar: "انشر محتواك", en: "Spread your content" },
  distribution: { ar: "التوزيع", en: "Distribution" },
  groupMembers: { ar: "أعضاء المجموعة", en: "Group Members" },
  groupMembersDesc: { ar: "ابني مجتمعك", en: "Build your community" },
  community: { ar: "المجتمع", en: "Community" },
  
  // Instagram services
  followers: { ar: "المتابعين", en: "Followers" },
  followersDesc: { ar: "متابعين عالي الجودة مع توصيل فوري", en: "High-retention, drip-feed or instant followers" },
  bestForInfluencers: { ar: "الأفضل للمؤثرين", en: "Best for Influencers" },
  realLikes: { ar: "إعجابات وحفظ حقيقي", en: "Real Likes & Saves" },
  realLikesDesc: { ar: "عزز التفاعل على المنشورات والريلز", en: "Boost engagement on posts, reels and carousels" },
  engagementBoost: { ar: "تعزيز التفاعل", en: "Engagement Boost" },
  reelsViews: { ar: "مشاهدات الريلز", en: "Reels Views & Reach" },
  reelsViewsDesc: { ar: "ساعد محتواك على الانتشار", en: "Help your content go viral with targeted views" },
  viralContent: { ar: "محتوى فيروسي", en: "Viral Content" },
  storyViews: { ar: "مشاهدات الستوري", en: "Story Views" },
  storyViewsDesc: { ar: "زد تذكر العلامة التجارية", en: "Increase brand recall and stand out" },
  brandRecall: { ar: "تذكر العلامة", en: "Brand Recall" },
  commentsMentions: { ar: "التعليقات والإشارات", en: "Comments & Mentions" },
  commentsMentionsDesc: { ar: "اصنع إثبات اجتماعي وحفز المحادثات", en: "Create social proof and drive conversations" },
  customPackages: { ar: "باقات مخصصة", en: "Custom Packages" },
  customPackagesDesc: { ar: "صمم حزمك الخاصة للعملاء", en: "Design your own bundles for clients" },
  resellerReady: { ar: "جاهز للموزعين", en: "Reseller Ready" },
  
  // Features
  whyChoose: { ar: "لماذا تختار", en: "Why Choose" },
  featuresDescription: { ar: "نقدم تفاعل حقيقي مع أفضل الميزات في الصناعة", en: "We deliver real engagement with the best features in the industry" },
  autoDelivery: { ar: "توصيل تلقائي فوري", en: "Instant Auto-Delivery" },
  autoDeliveryDesc: { ar: "تبدأ معالجة الطلبات فوراً مع تتبع في الوقت الحقيقي", en: "Orders start processing immediately with real-time tracking and updates" },
  prioritySupport: { ar: "دعم أولوية 24/7", en: "24/7 Priority Support" },
  prioritySupportDesc: { ar: "احصل على المساعدة في أي وقت من فريق الدعم المخصص", en: "Get help anytime from our dedicated support team via live chat or ticket" },
  unbeatablePrices: { ar: "أسعار لا تُقارن", en: "Unbeatable Prices" },
  unbeatablePricesDesc: { ar: "أرخص لوحة SMM مع خدمات عالية الجودة بدون رسوم مخفية", en: "The cheapest SMM panel with high-quality services and no hidden fees" },
  apiAccess: { ar: "وصول API", en: "API Access" },
  apiAccessDesc: { ar: "تكامل API كامل للموزعين والوكالات مع توثيق مفصل", en: "Full API integration for resellers and agencies with detailed documentation" },
  globalCoverage: { ar: "تغطية عالمية", en: "Global Coverage" },
  globalCoverageDesc: { ar: "نخدم 150+ دولة مع أسعار محلية وخدمات مستهدفة جغرافياً", en: "Serving 150+ countries with localized pricing and geo-targeted services" },
  
  // FAQ
  faqTitle: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
  faqDescription: { ar: "كل ما تحتاج معرفته عن خدمات لوحة SMM الخاصة بنا", en: "Everything you need to know about our SMM Panel services" },
  faq1Q: { ar: "ما هي لوحة SmmBossty SMM؟", en: "What is SmmBossty SMM Panel?" },
  faq1A: { ar: "SmmBossty هي لوحة SMM بتقنية Web3.0 توفر خدمات نمو وسائل التواصل الاجتماعي لمنصات مثل انستغرام ويوتيوب وتيك توك وتيليجرام وتويتر/X وفيسبوك. نقدم متابعين وإعجابات ومشاهدات وتعليقات والمزيد بأرخص الأسعار مع توصيل فوري.", en: "SmmBossty is a Web3.0 SMM Panel that provides social media growth services for platforms like Instagram, YouTube, TikTok, Telegram, Twitter/X, and Facebook. We offer followers, likes, views, comments, and more at the cheapest prices with instant delivery." },
  faq2Q: { ar: "ما مدى سرعة التوصيل؟", en: "How fast is the delivery?" },
  faq2A: { ar: "تبدأ معظم الطلبات في المعالجة خلال ثوانٍ ويتم تسليمها فوراً. للطلبات الكبيرة، نستخدم توصيل تدريجي للحفاظ على أمان الحساب وأنماط النمو الطبيعية.", en: "Most orders start processing within seconds and are delivered instantly. For larger orders, we use drip-feed delivery to maintain account safety and natural growth patterns." },
  faq3Q: { ar: "ما طرق الدفع المقبولة؟", en: "What payment methods do you accept?" },
  faq3A: { ar: "نقبل مجموعة واسعة من طرق الدفع بما في ذلك العملات المشفرة (USDT، بيتكوين)، بيكاش، ناجد، روكيت، بايبال، بايتم، فيزا، وماستركارد. جميع المعاملات مشفرة وآمنة.", en: "We accept a wide range of payment methods including crypto (USDT, Bitcoin), bKash, Nagad, Rocket, PayPal, PayTM, Visa, and MasterCard. All transactions are encrypted and secure." },
  faq4Q: { ar: "هل استخدام خدمات SMM آمن؟", en: "Is it safe to use SMM services?" },
  faq4A: { ar: "نعم! نستخدم طرق توصيل آمنة وخدمات عالية الجودة لا تنتهك شروط المنصات. خدماتنا مصممة لتبدو طبيعية ولا نطلب أبداً كلمات مرور حسابك.", en: "Yes! We use safe delivery methods and high-quality services that don't violate platform terms. Our services are designed to look natural and we never ask for your account passwords." },
  faq5Q: { ar: "هل توفرون وصول API للموزعين؟", en: "Do you offer API access for resellers?" },
  faq5A: { ar: "نعم! نوفر وصول API كامل للموزعين والوكالات. يمكنك دمج خدماتنا في لوحتك أو موقعك الخاص مع توثيق API شامل ودعم مخصص للموزعين.", en: "Yes! We provide full API access for resellers and agencies. You can integrate our services into your own panel or website with comprehensive API documentation and dedicated reseller support." },
  faq6Q: { ar: "ماذا لو لم يكتمل طلبي؟", en: "What if my order doesn't complete?" },
  faq6A: { ar: "نقدم ضمان استرداد الأموال بنسبة 100٪ إذا لم يكتمل طلبك. سيساعد فريق الدعم 24/7 في حل أي مشاكل، ونوفر أيضاً إعادة ملء تلقائية على معظم الخدمات.", en: "We offer a 100% money-back guarantee if your order doesn't complete. Our 24/7 support team will help resolve any issues, and we also provide automatic refills on most services." },
  faq7Q: { ar: "أي الدول تخدمون؟", en: "Which countries do you serve?" },
  faq7A: { ar: "نخدم العملاء في 150+ دولة حول العالم بما في ذلك الولايات المتحدة والمملكة المتحدة والهند وباكستان وبنغلاديش وألمانيا وكوريا والمكسيك والمزيد.", en: "We serve customers in 150+ countries worldwide including USA, UK, India, Pakistan, Bangladesh, Germany, Korea, Mexico, and more." },
  
  // CTA
  readyToBoost: { ar: "هل أنت مستعد لـ", en: "Ready to" },
  boostSocialMedia: { ar: "تعزيز وسائل التواصل الاجتماعي؟", en: "Boost Your Social Media?" },
  ctaDescription: { ar: "انضم إلى أكثر من 250,000+ مستخدم يثقون في SmmBossty لنمو وسائل التواصل الاجتماعي. ابدأ بمبلغ صغير يبدأ من 1$ وشاهد نتائج فورية!", en: "Join over 250,000+ users who trust SmmBossty for their social media growth. Start with as little as $1 and see instant results!" },
  contactSupport: { ar: "اتصل بالدعم", en: "Contact Support" },
  noPasswordRequired: { ar: "لا يلزم كلمة مرور", en: "No Password Required" },
  moneyBackGuarantee: { ar: "ضمان استرداد الأموال", en: "Money Back Guarantee" },
  
  // Footer
  footerDescription: { ar: "لوحة SMM رقم 1 بتقنية Web3.0 يثق بها المؤثرون والشركات والموزعون حول العالم. عزز تواجدك على وسائل التواصل الاجتماعي مع توصيل فوري وأسعار لا تُقارن.", en: "The #1 Web3.0 SMM Panel trusted by influencers, businesses, and resellers worldwide. Boost your social media presence with instant delivery and unbeatable prices." },
  servicesTitle: { ar: "الخدمات", en: "Services" },
  instagramServices: { ar: "خدمات انستغرام", en: "Instagram Services" },
  youtubeServices: { ar: "خدمات يوتيوب", en: "YouTube Services" },
  tiktokServices: { ar: "خدمات تيك توك", en: "TikTok Services" },
  telegramServices: { ar: "خدمات تيليجرام", en: "Telegram Services" },
  twitterServices: { ar: "خدمات تويتر/X", en: "Twitter/X Services" },
  facebookServices: { ar: "خدمات فيسبوك", en: "Facebook Services" },
  companyTitle: { ar: "الشركة", en: "Company" },
  aboutUs: { ar: "من نحن", en: "About Us" },
  blog: { ar: "المدونة", en: "Blog" },
  apiDocumentation: { ar: "توثيق API", en: "API Documentation" },
  affiliateProgram: { ar: "برنامج التسويق بالعمولة", en: "Affiliate Program" },
  supportTitle: { ar: "الدعم", en: "Support" },
  termsOfService: { ar: "شروط الخدمة", en: "Terms of Service" },
  privacyPolicy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  refundPolicy: { ar: "سياسة الاسترداد", en: "Refund Policy" },
  liveChat: { ar: "الدردشة المباشرة", en: "Live Chat" },
  accepting: { ar: "نقبل:", en: "Accepting:" },
  crypto: { ar: "عملات مشفرة", en: "Crypto" },
  allRightsReserved: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-heading" : "font-body"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
