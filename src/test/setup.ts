import "@testing-library/jest-dom";

// Polyfill IntersectionObserver for jsdom (used by framer-motion's in-view feature)
if (!("IntersectionObserver" in globalThis)) {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = "0px";
    readonly thresholds: ReadonlyArray<number> = [0];
    constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
    observe(_target: Element): void {}
    unobserve(_target: Element): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  const g = globalThis as unknown as { IntersectionObserver?: typeof IntersectionObserver };
  g.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
}
