"use client";

export default function RoadmapTimeline() {
  const phases = [
    {
      phase: "Q1 2026",
      title: "Foundation & Planning",
      items: [
        {
          category: "Fundraising",
          task: "Prepare financial models and projections",
          status: "in-progress",
        },
        {
          category: "Fundraising",
          task: "Develop investor pitch deck",
          status: "in-progress",
        },
        {
          category: "Audit Preparation",
          task: "Initial meeting with Deloitte audit team",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Document current accounting processes",
          status: "in-progress",
        },
        {
          category: "Operations",
          task: "Identify automation opportunities",
          status: "planned",
        },
      ],
    },
    {
      phase: "Q2 2026",
      title: "Execution & Optimization",
      items: [
        {
          category: "Fundraising",
          task: "Begin investor roadshow and meetings",
          status: "planned",
        },
        {
          category: "Fundraising",
          task: "Negotiate term sheets",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Provide documentation to Deloitte",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Conduct preliminary audit fieldwork",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Implement accounting automation tools",
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
      title: "Validation & Refinement",
      items: [
        {
          category: "Fundraising",
          task: "Close funding round",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Complete Deloitte audit procedures",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Address audit findings and recommendations",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Train team on new processes and tools",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Establish KPIs for accuracy and efficiency",
          status: "planned",
        },
      ],
    },
    {
      phase: "Q4 2026",
      title: "Scale & Excellence",
      items: [
        {
          category: "Fundraising",
          task: "Deploy capital per strategic plan",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Receive final audit opinion from Deloitte",
          status: "planned",
        },
        {
          category: "Audit",
          task: "Implement audit recommendations",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Scale processes for 2X company growth",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Achieve 95%+ accuracy and 30% efficiency gains",
          status: "planned",
        },
        {
          category: "Operations",
          task: "Document best practices for ongoing scaling",
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
                className="relative bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200"
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
