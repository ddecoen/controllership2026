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
        {/* Mission & Vision */}
        <section className="mb-20 border-b border-coder-gray pb-20">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="coder-label text-coder-darkGray mb-4">Mission</div>
              <h2 className="text-3xl coder-heading text-coder-black mb-4">
                Take friction out of doing business...
              </h2>
              <p className="text-xl text-coder-darkGray">
                ... while keeping Coder secure, compliant, and accountable.
              </p>
            </div>
            <div>
              <div className="coder-label text-coder-darkGray mb-4">Vision</div>
              <p className="text-coder-darkGray leading-relaxed">
                A Coder where employees move with empowered speed (not reckless velocity). 
                A company, where engineers code, marketers generate demand and sellers sell – 
                without getting stuck in operational quicksand. The operational backbone just works, 
                so the company can stay in flow.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="coder-label text-coder-darkGray mb-6">Guiding Principles</div>
              <ul className="space-y-3">
                <PrincipleItem text="Build ahead of need" />
                <PrincipleItem text="Partner with the business" />
                <PrincipleItem text="Set context constantly" />
                <PrincipleItem text="Keep things simple" />
                <PrincipleItem text="Experiment and tinker" />
              </ul>
            </div>
            <div>
              <div className="coder-label text-coder-darkGray mb-6">Ways of Working</div>
              <ul className="space-y-3">
                <PrincipleItem text="Put the human first" />
                <PrincipleItem text="Have each other's back" />
                <PrincipleItem text="Make decisions with data" />
                <PrincipleItem text="Provide context constantly" />
                <PrincipleItem text='Lead with "yes, and..."' />
              </ul>
            </div>
          </div>
        </section>

        {/* Controllership Function Themes */}
        <section className="mb-20 bg-coder-lightGray border border-coder-gray rounded-lg p-12">
          <div className="coder-label text-coder-darkGray mb-4">Current State</div>
          <h2 className="text-4xl coder-heading text-coder-black mb-8">
            Controllership Function Themes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ThemeCard
              title="Reliable Financial Operations"
              description="Ensure accurate and timely financial reporting, month-end close, and day-to-day accounting operations that the business can depend on."
            />
            <ThemeCard
              title="Strategic Business Partnership"
              description="Partner closely with Finance and Leadership to provide data-driven insights, support decision-making, and enable business growth."
            />
            <ThemeCard
              title="Compliance & Risk Management"
              description="Maintain SOX compliance, manage audit relationships, and build robust internal controls as the company scales."
            />
            <ThemeCard
              title="Process Excellence & Automation"
              description="Continuously improve workflows, implement automation tools, and streamline operations to increase efficiency and reduce manual work."
            />
            <ThemeCard
              title="Team Development & Culture"
              description="Build a high-performing accounting team that embodies Coder's values, promotes knowledge sharing, and supports each other's growth."
            />
            <ThemeCard
              title="Scalable Infrastructure"
              description="Build systems, processes, and documentation that can scale 2-3x without proportional headcount increase."
            />
          </div>
        </section>

        {/* Key Objectives Overview */}
        <section className="mb-20">
          <div className="coder-label text-coder-darkGray mb-3">2026 Focus Areas</div>
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

function PrincipleItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-coder-black mr-3 mt-1">•</span>
      <span className="text-coder-black">{text}</span>
    </li>
  );
}

function ThemeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-coder-white border border-coder-gray rounded-lg p-6 hover:border-coder-black transition-all duration-300">
      <h3 className="text-xl coder-heading text-coder-black mb-3">
        {title}
      </h3>
      <p className="text-coder-darkGray text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
