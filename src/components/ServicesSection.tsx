import { useState } from "react";
import { Instagram, Youtube, Music2, Send, Twitter, Facebook, Users, Heart, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Service {
  nameKey: string;
  descKey: string;
  badgeKey: string;
  icon: React.ElementType;
}

interface Platform {
  id: string;
  nameKey: string;
  icon: React.ElementType;
  color: string;
  services: Service[];
}

const platforms: Platform[] = [
  {
    id: "instagram",
    nameKey: "instagram",
    icon: Instagram,
    color: "from-pink-500 to-purple-500",
    services: [
      { nameKey: "followers", descKey: "followersDesc", badgeKey: "bestForInfluencers", icon: Users },
      { nameKey: "realLikes", descKey: "realLikesDesc", badgeKey: "engagementBoost", icon: Heart },
      { nameKey: "reelsViews", descKey: "reelsViewsDesc", badgeKey: "viralContent", icon: Eye },
      { nameKey: "storyViews", descKey: "storyViewsDesc", badgeKey: "brandRecall", icon: TrendingUp },
      { nameKey: "commentsMentions", descKey: "commentsMentionsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "customPackages", descKey: "customPackagesDesc", badgeKey: "resellerReady", icon: Share2 },
    ],
  },
  {
    id: "youtube",
    nameKey: "youtube",
    icon: Youtube,
    color: "from-red-500 to-red-600",
    services: [
      { nameKey: "videoViews", descKey: "videoViewsDesc", badgeKey: "viewsBoost", icon: Eye },
      { nameKey: "followers", descKey: "followersDesc", badgeKey: "pageGrowth", icon: Users },
      { nameKey: "postLikes", descKey: "postLikesDesc", badgeKey: "engagement", icon: Heart },
      { nameKey: "comments", descKey: "commentsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "shares", descKey: "sharesDesc", badgeKey: "distribution", icon: Share2 },
      { nameKey: "groupMembers", descKey: "groupMembersDesc", badgeKey: "community", icon: TrendingUp },
    ],
  },
  {
    id: "tiktok",
    nameKey: "tiktok",
    icon: Music2,
    color: "from-black to-pink-500",
    services: [
      { nameKey: "followers", descKey: "followersDesc", badgeKey: "viralContent", icon: Users },
      { nameKey: "videoViews", descKey: "videoViewsDesc", badgeKey: "viewsBoost", icon: Eye },
      { nameKey: "postLikes", descKey: "postLikesDesc", badgeKey: "engagement", icon: Heart },
      { nameKey: "comments", descKey: "commentsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "shares", descKey: "sharesDesc", badgeKey: "distribution", icon: Share2 },
      { nameKey: "storyViews", descKey: "storyViewsDesc", badgeKey: "brandRecall", icon: TrendingUp },
    ],
  },
  {
    id: "telegram",
    nameKey: "telegram",
    icon: Send,
    color: "from-blue-400 to-blue-500",
    services: [
      { nameKey: "groupMembers", descKey: "groupMembersDesc", badgeKey: "community", icon: Users },
      { nameKey: "videoViews", descKey: "videoViewsDesc", badgeKey: "viewsBoost", icon: Eye },
      { nameKey: "postLikes", descKey: "postLikesDesc", badgeKey: "engagement", icon: Heart },
      { nameKey: "comments", descKey: "commentsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "shares", descKey: "sharesDesc", badgeKey: "distribution", icon: Share2 },
      { nameKey: "followers", descKey: "followersDesc", badgeKey: "pageGrowth", icon: TrendingUp },
    ],
  },
  {
    id: "twitter",
    nameKey: "twitter",
    icon: Twitter,
    color: "from-gray-700 to-black",
    services: [
      { nameKey: "followers", descKey: "followersDesc", badgeKey: "pageGrowth", icon: Users },
      { nameKey: "shares", descKey: "sharesDesc", badgeKey: "distribution", icon: Share2 },
      { nameKey: "postLikes", descKey: "postLikesDesc", badgeKey: "engagement", icon: Heart },
      { nameKey: "videoViews", descKey: "videoViewsDesc", badgeKey: "viewsBoost", icon: Eye },
      { nameKey: "comments", descKey: "commentsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "customPackages", descKey: "customPackagesDesc", badgeKey: "resellerReady", icon: TrendingUp },
    ],
  },
  {
    id: "facebook",
    nameKey: "facebook",
    icon: Facebook,
    color: "from-blue-600 to-blue-700",
    services: [
      { nameKey: "pageLikes", descKey: "pageLikesDesc", badgeKey: "pageGrowth", icon: Users },
      { nameKey: "postLikes", descKey: "postLikesDesc", badgeKey: "engagement", icon: Heart },
      { nameKey: "videoViews", descKey: "videoViewsDesc", badgeKey: "viewsBoost", icon: Eye },
      { nameKey: "comments", descKey: "commentsDesc", badgeKey: "socialProof", icon: MessageCircle },
      { nameKey: "shares", descKey: "sharesDesc", badgeKey: "distribution", icon: Share2 },
      { nameKey: "groupMembers", descKey: "groupMembersDesc", badgeKey: "community", icon: TrendingUp },
    ],
  },
];

const ServicesSection = () => {
  const [activePlatform, setActivePlatform] = useState("facebook");
  const currentPlatform = platforms.find((p) => p.id === activePlatform)!;
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("bestSmmPanel")} <span className="text-gradient-primary">{t("smmPanelServices")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("servicesDescription")}
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const isActive = activePlatform === platform.id;
            return (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "glass glow-primary text-primary"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{t(platform.nameKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPlatform.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.nameKey}
                className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentPlatform.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {t(service.nameKey)}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t(service.descKey)}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {t(service.badgeKey)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
