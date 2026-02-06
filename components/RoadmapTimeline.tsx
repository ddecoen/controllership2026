"use client";

interface TimelineItem {
  category: string;
  task: string;
  status: "in-progress" | "planned" | "completed";
  highlight?: boolean;
}

interface Phase {
  phase: string;
  title: string;
  items: TimelineItem[];
}

export default function RoadmapTimeline() {
  const phases = [
    {
      phase: "Q1 2026",
      title: "Foundation & Due Diligence",
      items: [
        {
          category: "Fundraising",
          task: "Financial Due Diligence preparation and support",
          status: "in-progress",
        },
        {
          category: "Tax & Compliance",
          task: "Go live with Taxwire for Sales Tax automation",
          status: "in-progress",
          highlight: true,
        },
        {
          category: "Operations",
          task: "Use Inscope to prepare monthly financial statements",
          status: "in-progress",
        },
        {
          category: "Audit Preparation",
          task: "Book audit clean-up entries (Stock Comp & ASC 606)",
          status: "in-progress",
        },
        {
          category: "Audit Preparation",
          task: "Complete equity clean-up and reconciliation",
          status: "in-progress",
        },
        {
          category: "Audit Preparation",
          task: "Initial engagement with Deloitte audit team",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Document current accounting processes",
          status: "in-progress",
        },
        {
          category: "Operations",
          task: "Identify automation and efficiency opportunities",
          status: "planned",
        },
      ],
    },
    {
      phase: "Q2 2026",
      title: "Funding Close & Audit Execution",
      items: [
        {
          category: "Fundraising",
          task: "Funding in bank by April 2026 ✓",
          status: "planned",
          highlight: true,
        },
        {
          category: "Fundraising",
          task: "Post-close accounting and capital deployment tracking",
          status: "planned",
        },
        {
          category: "Tax & Compliance",
          task: "Implement Rivet for Tax Preparation and filing",
          status: "planned",
          highlight: true,
        },
        {
          category: "Operations",
          task: "Continue using Inscope for financial statement preparation",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Provide documentation and schedules to Deloitte",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Support audit fieldwork and testing procedures",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Complete audit by late June 2026 ✓",
          status: "planned",
          highlight: true,
        },
        {
          category: "Operations",
          task: "Implement process improvements identified in Q1",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Standardize month-end close procedures",
          status: "planned",
        },
      ],
    },
    {
      phase: "Q3 2026",
      title: "Optimization & Scaling",
      items: [
        {
          category: "EMEA Expansion",
          task: "Research EMEA entity location: Netherlands vs Ireland",
          status: "planned",
        },
        {
          category: "EMEA Expansion",
          task: "Evaluate tax implications and regulatory requirements",
          status: "planned",
        },
        {
          category: "EMEA Expansion",
          task: "Assess accounting and compliance infrastructure needs",
          status: "planned",
        },
        {
          category: "Tech Stack",
          task: "Evaluate and optimize accounting technology stack",
          status: "planned",
        },
        {
          category: "Tech Stack",
          task: "Plan migration from NetSuite to Campfire",
          status: "planned",
          highlight: true,
        },
        {
          category: "Tech Stack",
          task: "Document current system dependencies and workflows",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Optimize accounting workflows for efficiency",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Implement automation tools and integrations",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Enhance accuracy through controls and reviews",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Train team on updated processes and systems",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Establish operational KPIs and metrics",
          status: "planned",
        },
      ],
    },
    {
      phase: "Q4 2026",
      title: "Scale & Continuous Improvement",
      items: [
        {
          category: "EMEA Expansion",
          task: "Finalize EMEA entity location decision",
          status: "planned",
        },
        {
          category: "EMEA Expansion",
          task: "Initiate entity formation and registration process",
          status: "planned",
          highlight: true,
        },
        {
          category: "EMEA Expansion",
          task: "Set up banking, accounting, and payroll infrastructure",
          status: "planned",
        },
        {
          category: "EMEA Expansion",
          task: "Establish transfer pricing and intercompany policies",
          status: "planned",
        },
        {
          category: "Tech Stack",
          task: "Begin phased NetSuite to Campfire migration",
          status: "planned",
        },
        {
          category: "Tech Stack",
          task: "Test and validate Campfire integrations",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Scale processes to support company growth",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Achieve measurable efficiency and accuracy gains",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Refine and optimize day-to-day operations",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Document best practices and playbooks",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Prepare for 2027 strategic initiatives",
          status: "planned",
        },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {phases.map((phase, phaseIndex) => (
        <div key={phaseIndex} className="relative">
          {/* Phase Header */}
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-24">
              <div className="bg-coder-black text-coder-white px-4 py-3 text-center coder-label">
                {phase.phase}
              </div>
            </div>
            <div className="ml-8">
              <h3 className="text-3xl coder-heading text-coder-black">
                {phase.title}
              </h3>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="ml-12 border-l-2 border-coder-gray pl-12 space-y-4">
            {phase.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`relative border rounded-lg p-6 transition-all duration-200 ${
                  item.highlight
                    ? "bg-coder-accent/10 border-coder-black border-2"
                    : "bg-coder-lightGray border-coder-gray hover:border-coder-darkGray"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[51px] top-7 w-4 h-4 rounded-full bg-coder-black border-4 border-coder-white" />

                {/* Content */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`coder-label ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <StatusBadge status={item.status} />
                      {item.highlight && (
                        <span className="coder-label text-coder-black">
                          ★ Key Milestone
                        </span>
                      )}
                    </div>
                    <p className="text-coder-black font-medium leading-relaxed">{item.task}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    Fundraising: "text-coder-black",
    "Audit Preparation": "text-coder-darkGray",
    Audit: "text-coder-darkGray",
    Operations: "text-coder-black",
    "Tech Stack": "text-coder-black",
    "EMEA Expansion": "text-coder-black",
    "Tax & Compliance": "text-coder-black",
  };
  return colors[category] || "text-coder-darkGray";
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig: {
    [key: string]: { label: string; className: string };
  } = {
    "in-progress": {
      label: "In Progress",
      className: "bg-coder-black text-coder-white",
    },
    planned: {
      label: "Planned",
      className: "bg-coder-white text-coder-black border border-coder-gray",
    },
    completed: {
      label: "Completed",
      className: "bg-coder-darkGray text-coder-white",
    },
  };

  const config = statusConfig[status] || statusConfig.planned;

  return (
    <span className={`px-3 py-1 text-xs font-mono font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
