import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coder-light via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-coder-dark">
            Controllership Roadmap
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Strategic initiatives for financial excellence and operational scaling
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Objectives Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-coder-dark mb-8">
            Strategic Priorities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ObjectiveCard
              title="Fundraising"
              icon="💰"
              description="Secure funding to fuel growth and strategic initiatives"
              color="purple"
            />
            <ObjectiveCard
              title="First Audit with Deloitte"
              icon="✓"
              description="Complete comprehensive financial audit with Deloitte"
              color="blue"
            />
            <ObjectiveCard
              title="Operational Excellence"
              icon="⚡"
              description="Enhance accuracy, efficiency, and scalability of accounting operations"
              color="purple"
            />
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-coder-dark mb-8">
            Implementation Timeline
          </h2>
          <RoadmapTimeline />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-coder-dark text-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Controllership Roadmap 2026 • Building Financial Excellence
          </p>
        </div>
      </footer>
    </main>
  );
}

function ObjectiveCard({
  title,
  icon,
  description,
  color,
}: {
  title: string;
  icon: string;
  description: string;
  color: "purple" | "blue";
}) {
  const colorClasses = {
    purple: "from-purple-600 to-coder-purple",
    blue: "from-blue-600 to-coder-blue",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`h-2 bg-gradient-to-r ${colorClasses[color]}`} />
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-coder-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
