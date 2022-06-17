import { useEffect, useRef } from "react";

export function useSlider({
  selectedId,
  onInView,
}: {
  selectedId?: string;
  onInView?: (id: string) => void;
}) {
  const refs = useRef<{
    [id: string]: {
      element: HTMLDivElement | null;
      observer: IntersectionObserver;
    };
  }>({});

  useEffect(() => {
    if (selectedId) {
      const selectedRef = refs.current[selectedId];
      if (selectedRef) {
        selectedRef.element?.scrollIntoView();
      }
    }

    return () => {
      Object.values(refs.current).forEach(({ element, observer }) => {
        if (element) {
          observer.unobserve(element);
        }
      })
    };
  }, [refs.current]);

  const setRef = (id: string) => (element: HTMLDivElement) => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView && onInView(id);
          return;
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if ( element && !refs.current[id] ) {
      observer.observe(element);
    }

    refs.current[id] = {
      element,
      observer,
    };
  };

  const scrollTo = (id: string) => {
    refs.current[id]?.element?.scrollIntoView({ behavior: "smooth" });
  };

  return { setRef, scrollTo };
}