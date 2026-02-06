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
    <div className="space-y-12">
      {phases.map((phase, phaseIndex) => (
        <div key={phaseIndex} className="relative">
          {/* Phase Header */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 w-32">
              <div className="bg-gradient-to-r from-coder-purple to-coder-blue text-white px-4 py-2 rounded-lg text-center font-bold">
                {phase.phase}
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-coder-dark">
                {phase.title}
              </h3>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="ml-16 border-l-4 border-coder-purple/20 pl-8 space-y-6">
            {phase.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`relative rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200 ${
                  item.highlight
                    ? "bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-coder-purple/30"
                    : "bg-white"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-7 w-6 h-6 rounded-full bg-gradient-to-br from-coder-purple to-coder-blue border-4 border-white" />

                {/* Content */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                      <StatusBadge status={item.status} />
                      {item.highlight && (
                        <span className="text-xs font-bold text-coder-purple">
                          🎯 Key Milestone
                        </span>
                      )}
                    </div>
                    <p className="text-gray-800 font-medium">{item.task}</p>
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
    Fundraising: "bg-green-100 text-green-800",
    "Audit Preparation": "bg-blue-100 text-blue-800",
    Audit: "bg-blue-100 text-blue-800",
    Operations: "bg-purple-100 text-purple-800",
  };
  return colors[category] || "bg-gray-100 text-gray-800";
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig: {
    [key: string]: { label: string; className: string };
  } = {
    "in-progress": {
      label: "In Progress",
      className: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    planned: {
      label: "Planned",
      className: "bg-gray-100 text-gray-700 border-gray-300",
    },
    completed: {
      label: "Completed",
      className: "bg-green-100 text-green-800 border-green-300",
    },
  };

  const config = statusConfig[status] || statusConfig.planned;

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium border ${config.className}`}
    >
      {config.label}
    </span>
  );
}
