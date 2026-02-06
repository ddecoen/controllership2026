import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-coder-white">
      {/* Header */}
      <header className="bg-coder-black border-b border-coder-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="coder-label text-coder-gray mb-2">2026</div>
          <h1 className="text-5xl coder-heading text-coder-white">
            Controllership Roadmap
          </h1>
          <p className="mt-3 text-lg text-coder-gray">
            Strategic initiatives for financial excellence and operational scaling
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Objectives Overview */}
        <section className="mb-20">
          <div className="coder-label text-coder-darkGray mb-3">Overview</div>
          <h2 className="text-4xl coder-heading text-coder-black mb-10">
            Strategic Priorities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ObjectiveCard
              title="Fundraising"
              label="Capital"
              description="Secure funding to fuel growth and strategic initiatives"
            />
            <ObjectiveCard
              title="First Audit with Deloitte"
              label="Compliance"
              description="Complete comprehensive financial audit with Deloitte"
            />
            <ObjectiveCard
              title="Operational Excellence"
              label="Process"
              description="Enhance accuracy, efficiency, and scalability of accounting operations"
            />
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="coder-label text-coder-darkGray mb-3">Timeline</div>
          <h2 className="text-4xl coder-heading text-coder-black mb-10">
            Implementation Roadmap
          </h2>
          <RoadmapTimeline />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-coder-black border-t border-coder-darkGray mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="coder-label text-coder-gray text-center">
            Controllership Roadmap 2026 • Building Financial Excellence
          </div>
        </div>
      </footer>
    </main>
  );
}

function ObjectiveCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-coder-lightGray border border-coder-gray rounded-lg overflow-hidden hover:border-coder-black transition-all duration-300 group">
      <div className="p-8">
        <div className="coder-label text-coder-darkGray mb-4">{label}</div>
        <h3 className="text-2xl coder-heading text-coder-black mb-3 group-hover:text-coder-darkGray transition-colors">
          {title}
        </h3>
        <p className="text-coder-darkGray leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
