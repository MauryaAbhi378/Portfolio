import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitConfig {
  children: React.ReactElement<{ iconSize?: number }>[];
  radius?: number;
  iconSize?: number;
  speed?: number;
  reverse?: boolean;
}

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orbits: OrbitConfig[];
  className?: string;
  showPath?: boolean; // NEW: show orbit lines
}

export function OrbitingCircles({
  orbits,
  className,
  showPath = true,
  ...props
}: OrbitingCirclesProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {orbits.map((orbit, orbitIndex) => {
        const {
          children,
          radius = 160,
          iconSize = 30,
          speed = 1,
          reverse,
        } = orbit;
        const duration = 20 / speed;

        return (
          <React.Fragment key={orbitIndex}>
            {showPath && (
              <svg className="pointer-events-none absolute inset-0 w-full h-full">
                <circle
                  className="stroke-white/20 stroke-1"
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="none"
                />
              </svg>
            )}

            {children.map((child, index) => {
              const angle = (360 / children.length) * index;

              const childWithProps = React.cloneElement(child, { iconSize });

              return (
                <div
                  key={index}
                  style={
                    {
                      width: `${iconSize}px`,
                      height: `${iconSize}px`,
                      "--angle": `${angle}deg`,
                      "--radius": `${radius}px`,
                      "--duration": `${duration}s`,
                    } as React.CSSProperties
                  }
                  className={cn(
                    "absolute top-1/2 left-1/2 flex items-center justify-center transform-gpu animate-orbit",
                    { "[animation-direction:reverse]": reverse }
                  )}
                  {...props}
                >
                  {childWithProps}
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
