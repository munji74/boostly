// src/components/Features.jsx

function Features() {
  const features = [
    {
      title: "Social Media Management Dashboard",
      description:
        "A centralized dashboard to manage multiple social media platforms (Instagram, Facebook, TikTok, LinkedIn, etc.) in one place.",
      points: [],
      icon: "📱",
    },
    {
      title: "Content Creation & Scheduling",
      description: "",
      points: [
        "Custom content creation (images, captions, hashtags, etc.)",
        "Automated posting calendar",
        "AI-assisted caption and hashtag suggestions",
      ],
      icon: "📆",
    },
    {
      title: "Follower Growth Tools",
      description: "",
      points: [
        "Targeted growth campaigns",
        "Follower analytics",
        "Engagement strategies to attract the right audience",
      ],
      icon: "📈",
    },
    {
      title: "Analytics & Reporting",
      description: "",
      points: [
        "Real-time performance metrics",
        "Weekly/monthly reports with insights",
        "Competitor benchmarking",
      ],
      icon: "📊",
    },
    {
      title: "Custom Branding Tools",
      description: "",
      points: [
        "Brand style guide integration",
        "Custom templates for posts and stories",
        "Logo and brand asset library",
      ],
      icon: "🎨",
    },
    {
      title: "Engagement Management",
      description: "",
      points: [
        "Inbox management for DMs and comments",
        "Automated replies and saved responses",
        "Alerts for important messages",
      ],
      icon: "💬",
    },
    {
      title: "Ad Campaign Management",
      description: "Optional Add-on",
      points: [
        "Boosted post and ad creation",
        "Budget and audience targeting support",
        "Ad performance monitoring",
      ],
      icon: "🚀",
    },
    {
      title: "Client Collaboration Portal",
      description: "",
      points: [
        "Feedback and approval workflows",
        "Shared calendars and notes",
        "Direct chat with the Boostly support team",
      ],
      icon: "🤝",
    },
    {
      title: "Content Ideas & Trends Feed",
      description: "",
      points: [
        "Industry-specific content ideas",
        "Trending hashtags and audio suggestions",
        "Seasonal and event-based content prompts",
      ],
      icon: "🔥",
    },
    {
      title: "Learning Center",
      description: "(For DIY Clients)",
      points: [
        "Tutorials and guides for social media success",
        "Strategy templates and content planning worksheets",
        "Monthly webinars and Q&A sessions",
      ],
      icon: "🎓",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-4">
          Boostly – Core Features
        </h2>
        <div className="border-t border-blue-200 w-24 mx-auto mb-12"></div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                {index + 1}. {feature.title}
              </h3>
              {feature.description && (
                <p className="italic text-sm text-gray-600 mb-2">{feature.description}</p>
              )}
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
