# Controllership Roadmap 2026 🎯

A modern, visually appealing web application showcasing the strategic roadmap for controllership excellence. Built with Next.js 14 and deployed on Vercel.

![Next.js](https://img.shields.io/badge/Next.js-14.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?logo=tailwind-css)

## 🎨 Features

- **Modern Design**: Clean, professional interface following Coder brand guidelines
- **Interactive Timeline**: Visual roadmap spanning all quarters of 2026
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Three Core Pillars**:
  - 💰 **Fundraising**: Secure capital for strategic growth
  - ✓ **Deloitte Audit**: Complete first comprehensive financial audit
  - ⚡ **Operational Excellence**: Enhance accuracy, efficiency, and scalability

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized production build
npm run build
npm start
```

## 📦 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/controllership-roadmap)

## 🎨 Design System

The application follows Coder brand guidelines with a custom color palette:

- **Primary Purple**: `#7C3AED` - Main brand color
- **Primary Blue**: `#3B82F6` - Secondary accent
- **Dark**: `#1E293B` - Text and headers
- **Light**: `#F8FAFC` - Backgrounds

## 📋 Roadmap Structure

### Q1 2026: Foundation & Planning
- Financial model preparation
- Investor deck development
- Process documentation
- Deloitte engagement kickoff

### Q2 2026: Execution & Optimization
- Investor roadshow
- Audit fieldwork
- Automation implementation
- Process standardization

### Q3 2026: Validation & Refinement
- Funding round closure
- Audit completion
- Team training
- KPI establishment

### Q4 2026: Scale & Excellence
- Capital deployment
- Final audit opinion
- Process scaling
- Performance achievement

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Runtime**: React 18

## 📁 Project Structure

```
controllership-roadmap/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   └── RoadmapTimeline.tsx   # Main timeline component
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment config
```

## 🔧 Customization

### Update Timeline Content

Edit `components/RoadmapTimeline.tsx` to modify phases, tasks, and statuses:

```typescript
const phases = [
  {
    phase: "Q1 2026",
    title: "Your Phase Title",
    items: [
      {
        category: "Category Name",
        task: "Task description",
        status: "in-progress" | "planned" | "completed"
      }
    ]
  }
]
```

### Modify Color Scheme

Update `tailwind.config.ts`:

```typescript
colors: {
  coder: {
    purple: "#YourColor",
    blue: "#YourColor",
    dark: "#YourColor",
    light: "#YourColor",
  },
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ for financial excellence