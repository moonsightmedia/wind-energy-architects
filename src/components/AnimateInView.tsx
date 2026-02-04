import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  /** Delay before adding .visible (stagger, in ms). Default 0. */
  delay?: number;
}

export default function AnimateInView({ children, className, delay = 0 }: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        if (delay > 0) {
          timeoutId = setTimeout(() => setVisible(true), delay);
        } else {
          setVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn("animate-in-view", visible && "visible", className)}
    >
      {children}
    </div>
  );
}
