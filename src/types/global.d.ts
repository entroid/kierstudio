// Fix for missing module declarations
declare module 'embla-carousel-react' {
  import { EmblaOptionsType } from 'embla-carousel';
  import { CSSProperties } from 'react';

  export interface EmblaCarouselType {
    // Add basic Embla Carousel methods you use
    scrollNext: () => void;
    scrollPrev: () => void;
    scrollTo: (index: number) => void;
    selectedScrollSnap: () => number;
    on: (event: string, callback: () => void) => void;
    off: (event: string, callback: () => void) => void;
  }

  export interface UseEmblaCarouselType {
    (options?: EmblaOptionsType): [React.RefObject<HTMLElement>, EmblaCarouselType | undefined];
  }

  const useEmblaCarousel: UseEmblaCarouselType;
  export default useEmblaCarousel;
}

declare module 'cmdk' {
  import * as React from 'react';

  export const Command: React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
  }>;
  
  // Add other CMDK components you use
  export const CommandInput: React.ComponentType<{
    placeholder?: string;
    className?: string;
  }>;
  
  export const CommandList: React.ComponentType<{
    children?: React.ReactNode;
  }>;
  
  export const CommandEmpty: React.ComponentType<{
    children?: React.ReactNode;
  }>;
  
  export const CommandGroup: React.ComponentType<{
    heading?: React.ReactNode;
    children?: React.ReactNode;
  }>;
  
  export const CommandItem: React.ComponentType<{
    value: string;
    onSelect?: () => void;
    children?: React.ReactNode;
  }>;
}

declare module 'vaul' {
  import * as React from 'react';
  
  export const Drawer: React.ComponentType<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: React.ReactNode;
  }>;
  
  export const DrawerTrigger: React.ComponentType<{
    children?: React.ReactNode;
    asChild?: boolean;
  }>;
  
  export const DrawerContent: React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
  }>;
}

declare module 'sonner' {
  import * as React from 'react';
  
  export const toast: {
    (message: string, options?: { duration?: number }): void;
    success: (message: string, options?: { duration?: number }) => void;
    error: (message: string, options?: { duration?: number }) => void;
    // Add other toast methods you use
  };
  
  export const Toaster: React.ComponentType<{
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    toastOptions?: {
      duration?: number;
    };
  }>;
}

// Fix for Figma asset imports
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

// Add this to your tsconfig.json under "include" if not already present
// "src/types/global.d.ts"
