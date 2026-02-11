declare namespace JSX {
  interface IntrinsicElements {
    'wa-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string;
        variant?: 'solid' | 'regular' | 'light' | 'duotone' | 'brands';
      },
      HTMLElement
    >;
  }
}
