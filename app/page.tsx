"use client";

import RoadmapTimeline from "@/components/RoadmapTimeline";
import { useState } from "react";

export default function Home() {
  const [showOrgChart, setShowOrgChart] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-coder-white">
      {/* Header */}
      <header className="bg-coder-black border-b border-coder-darkGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="coder-label text-coder-gray mb-2">2026</div>
              <h1 className="text-5xl coder-heading text-coder-white">
                Controllership Roadmap
              </h1>
              <p className="mt-3 text-lg text-coder-gray">
                Strategic initiatives for financial excellence and operational scaling
              </p>
            </div>
            <TeamMenu onShowOrgChart={() => setShowOrgChart(true)} />
          </div>
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
              onClick={() => setSelectedFilter(selectedFilter === "Fundraising" ? null : "Fundraising")}
              isActive={selectedFilter === "Fundraising"}
            />
            <ObjectiveCard
              title="First Audit with Deloitte"
              label="Compliance"
              description="Complete comprehensive financial audit with Deloitte"
              onClick={() => setSelectedFilter(selectedFilter === "Audit" ? null : "Audit")}
              isActive={selectedFilter === "Audit"}
            />
            <ObjectiveCard
              title="Operational Excellence"
              label="Process"
              description="Enhance accuracy, efficiency, and scalability of accounting operations"
              onClick={() => setSelectedFilter(selectedFilter === "Operations" ? null : "Operations")}
              isActive={selectedFilter === "Operations"}
            />
          </div>
          {selectedFilter && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedFilter(null)}
                className="text-sm coder-label text-coder-darkGray hover:text-coder-black transition-colors"
              >
                ← Clear Filter • Show All Items
              </button>
            </div>
          )}
        </section>

        {/* Timeline */}
        <section>
          <div className="coder-label text-coder-darkGray mb-3">Timeline</div>
          <h2 className="text-4xl coder-heading text-coder-black mb-10">
            Implementation Roadmap
          </h2>
          <RoadmapTimeline filter={selectedFilter} />
        </section>
      </div>

      {/* Org Chart Modal */}
      {showOrgChart && (
        <OrgChartModal onClose={() => setShowOrgChart(false)} />
      )}

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
  onClick,
  isActive,
}: {
  title: string;
  label: string;
  description: string;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-lg overflow-hidden transition-all duration-300 group ${
        isActive
          ? "bg-coder-black border-2 border-coder-black"
          : "bg-coder-lightGray border border-coder-gray hover:border-coder-black"
      }`}
    >
      <div className="p-8">
        <div className={`coder-label mb-4 ${isActive ? "text-coder-gray" : "text-coder-darkGray"}`}>
          {label}
        </div>
        <h3 className={`text-2xl coder-heading mb-3 transition-colors ${
          isActive ? "text-coder-white" : "text-coder-black group-hover:text-coder-darkGray"
        }`}>
          {title}
        </h3>
        <p className={`leading-relaxed ${isActive ? "text-coder-gray" : "text-coder-darkGray"}`}>
          {description}
        </p>
        {isActive && (
          <div className="mt-4 text-coder-gray text-sm">
            ✓ Filtering roadmap
          </div>
        )}
      </div>
    </button>
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

function TeamMenu({ onShowOrgChart }: { onShowOrgChart: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOrgChartClick = () => {
    setIsOpen(false);
    onShowOrgChart();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-coder-gray hover:text-coder-white transition-colors"
        aria-label="Team menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-coder-white border border-coder-gray rounded-lg shadow-lg z-20 overflow-hidden">
            <div className="bg-coder-black p-4 border-b border-coder-darkGray">
              <div className="coder-label text-coder-gray mb-1">Team</div>
              <h3 className="text-xl coder-heading text-coder-white">
                Accounting Team
              </h3>
            </div>
            <div className="p-4">
              <button
                onClick={handleOrgChartClick}
                className="w-full mb-4 p-3 bg-coder-black text-coder-white rounded-lg hover:bg-coder-darkGray transition-colors text-center coder-label"
              >
                View Org Chart →
              </button>
              <div className="space-y-3">
                <TeamMember
                  name="Dan"
                  title="Controller"
                  level={0}
                />
                <TeamMember
                  name="Marc"
                  title="Assistant Controller"
                  level={1}
                  reportsTo="Dan"
                />
                <TeamMember
                  name="Charlie"
                  title="Senior Accountant"
                  level={2}
                  reportsTo="Marc"
                />
                <TeamMember
                  name="Tayla"
                  title="Senior Payroll Specialist"
                  level={1}
                  reportsTo="Dan"
                />
                <div className="ml-8 pt-2 border-t border-coder-gray">
                  <div className="text-sm text-coder-darkGray italic flex items-center">
                    <span className="mr-2">→</span>
                    <div>
                      <div className="font-medium">Staff Accountant</div>
                      <div className="text-xs coder-label text-coder-darkGray">
                        Hiring Early Q4 2026 • Reports to Marc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TeamMember({
  name,
  title,
  level,
  reportsTo,
}: {
  name: string;
  title: string;
  level: number;
  reportsTo?: string;
}) {
  const indent = level * 32; // 32px per level

  return (
    <div className={`flex items-start`} style={{ marginLeft: `${indent}px` }}>
      {level > 0 && <span className="text-coder-darkGray mr-2">→</span>}
      <div className="flex-1">
        <div className="font-medium text-coder-black">{name}</div>
        <div className="text-sm text-coder-darkGray">{title}</div>
        {reportsTo && (
          <div className="text-xs coder-label text-coder-darkGray mt-1">
            Reports to {reportsTo}
          </div>
        )}
      </div>
    </div>
  );
}

function OrgChartModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coder-black/80">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative bg-coder-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-coder-black p-6 border-b border-coder-darkGray flex items-center justify-between z-10">
          <div>
            <div className="coder-label text-coder-gray mb-1">Organization</div>
            <h2 className="text-3xl coder-heading text-coder-white">
              Accounting Team Structure
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-coder-gray hover:text-coder-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          {/* Visual Org Chart */}
          <div className="flex flex-col items-center space-y-4">
            {/* Dan - Controller */}
            <div className="flex flex-col items-center">
              <div className="bg-coder-black text-coder-white rounded-lg p-6 text-center min-w-[200px]">
                <div className="coder-label text-coder-gray mb-2">Controller</div>
                <div className="text-xl font-bold">Dan</div>
              </div>
            </div>

            {/* Vertical Line from Dan */}
            <div className="w-1 h-12 bg-coder-black"></div>

            {/* Horizontal connector line for Dan's reports */}
            <div className="relative w-[600px] h-1 bg-coder-black">
              <div className="absolute left-1/4 -translate-x-1/2 -top-px w-1 h-1 bg-coder-black"></div>
              <div className="absolute right-1/4 translate-x-1/2 -top-px w-1 h-1 bg-coder-black"></div>
            </div>

            {/* Marc and Tayla - Direct Reports */}
            <div className="flex items-start justify-center gap-32">
              {/* Marc's Branch */}
              <div className="flex flex-col items-center space-y-4">
                {/* Vertical line down to Marc */}
                <div className="w-1 h-12 bg-coder-black"></div>
                
                <div className="bg-coder-darkGray text-coder-white rounded-lg p-6 text-center min-w-[200px]">
                  <div className="coder-label text-coder-gray mb-2">Assistant Controller</div>
                  <div className="text-xl font-bold">Marc</div>
                  <div className="text-xs text-coder-gray mt-2">Reports to Dan</div>
                </div>
                
                {/* Vertical Line to Marc's Reports */}
                <div className="w-1 h-12 bg-coder-black"></div>

                {/* Horizontal connector for Marc's reports */}
                <div className="relative w-[400px] h-1 bg-coder-black">
                  <div className="absolute left-1/4 -translate-x-1/2 -top-px w-1 h-1 bg-coder-black"></div>
                  <div className="absolute right-1/4 translate-x-1/2 -top-px w-1 h-1 bg-coder-black"></div>
                </div>

                {/* Charlie and Future Hire */}
                <div className="flex items-start gap-16">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-coder-black"></div>
                    <div className="bg-coder-lightGray border-2 border-coder-gray rounded-lg p-5 text-center min-w-[180px]">
                      <div className="coder-label text-coder-darkGray mb-2">Senior Accountant</div>
                      <div className="text-lg font-bold text-coder-black">Charlie</div>
                      <div className="text-xs text-coder-darkGray mt-2">Reports to Marc</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-coder-black"></div>
                    <div className="bg-coder-lightGray border-2 border-dashed border-coder-darkGray rounded-lg p-5 text-center min-w-[180px]">
                      <div className="coder-label text-coder-darkGray mb-2">Staff Accountant</div>
                      <div className="text-lg font-bold text-coder-darkGray italic">TBD</div>
                      <div className="text-xs text-coder-darkGray mt-2">Hiring Early Q4 2026</div>
                      <div className="text-xs text-coder-darkGray">Reports to Marc</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tayla's Branch */}
              <div className="flex flex-col items-center space-y-4">
                {/* Vertical line down to Tayla */}
                <div className="w-1 h-12 bg-coder-black"></div>
                
                <div className="bg-coder-lightGray border-2 border-coder-gray rounded-lg p-5 text-center min-w-[200px]">
                  <div className="coder-label text-coder-darkGray mb-2">Senior Payroll Specialist</div>
                  <div className="text-lg font-bold text-coder-black">Tayla</div>
                  <div className="text-xs text-coder-darkGray mt-2">Reports to Dan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 pt-6 border-t border-coder-gray">
            <div className="coder-label text-coder-darkGray mb-4">Legend</div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-coder-black rounded"></div>
                <span className="text-coder-darkGray">Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-coder-darkGray rounded"></div>
                <span className="text-coder-darkGray">Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-coder-lightGray border-2 border-coder-gray rounded"></div>
                <span className="text-coder-darkGray">Individual Contributor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-coder-lightGray border-2 border-dashed border-coder-darkGray rounded"></div>
                <span className="text-coder-darkGray">Future Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
