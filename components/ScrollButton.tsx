"use client";

export default function ScrollButton({
  targetId,
  children,
  className,
}: {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleScrollTo = () => {
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <button onClick={handleScrollTo} className={className}>
      {children}
    </button>
  );
}
