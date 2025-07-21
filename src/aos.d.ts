declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      offset?: number;
      easing?: string;
      delay?: number;
      once?: boolean;
      mirror?: boolean;
    }) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
