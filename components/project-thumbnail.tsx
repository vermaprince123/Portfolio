"use client";

import { 
  Code, 
  Database, 
  BookOpen, 
  GraduationCap, 
  BarChart3, 
  Package,
  GitBranch,
  Layers,
  Sparkles
} from "lucide-react";

interface ProjectThumbnailProps {
  title: string;
  technologies: string[];
}

// Project-specific configurations with unique icons and gradients
const projectConfigs: Record<string, { icon: any; gradient: string; pattern: string }> = {
  "algorithms kit": {
    icon: Package,
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    pattern: "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
  },
  "edignite": {
    icon: BookOpen,
    gradient: "from-teal-600 via-cyan-500 to-blue-500",
    pattern: "bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]"
  },
  "visual sorting": {
    icon: BarChart3,
    gradient: "from-indigo-600 via-purple-500 to-pink-500",
    pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"
  },
  "tutor": {
    icon: GraduationCap,
    gradient: "from-orange-600 via-red-500 to-pink-500",
    pattern: "bg-[radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.12)_0%,transparent_50%)]"
  },
  "dsa": {
    icon: Code,
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    pattern: "bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
  },
  "mysql": {
    icon: Database,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    pattern: "bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.15)_0%,transparent_50%)]"
  },
};

export function ProjectThumbnail({ title, technologies }: ProjectThumbnailProps) {
  const titleLower = title.toLowerCase();
  
  // Find matching project config
  let config = projectConfigs[titleLower] || null;
  
  // If no exact match, try partial matching
  if (!config) {
    for (const [key, value] of Object.entries(projectConfigs)) {
      if (titleLower.includes(key) || key.includes(titleLower.split(' ')[0])) {
        config = value;
        break;
      }
    }
  }
  
  // Fallback based on technologies
  if (!config) {
    const techString = technologies.join(" ").toLowerCase();
    if (techString.includes("mysql") || techString.includes("database")) {
      config = projectConfigs["mysql"];
    } else if (techString.includes("algorithm") || techString.includes("dsa") || techString.includes("data structure")) {
      config = projectConfigs["dsa"];
    } else if (techString.includes("visual") || techString.includes("chart")) {
      config = projectConfigs["visual sorting"];
    } else {
      config = {
        icon: Sparkles,
        gradient: "from-primary via-primary/80 to-primary/60",
        pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
      };
    }
  }

  const Icon = config.icon;
  const gradientClass = config.gradient;
  const patternClass = config.pattern;

  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
      {/* Animated background pattern */}
      <div className={`absolute inset-0 ${patternClass} opacity-50`} />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Icon with glow effect */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
          <Icon className="relative h-20 w-20 text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Technology badges */}
        <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
          {technologies.slice(0, 2).map((tech, index) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
    </div>
  );
}

