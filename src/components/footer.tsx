// components/Footer.tsx

"use client";

import ScrollToTopButton from "./ScrollToTopButton";

interface FooterProps {
  className?: string; // Add className prop
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`w-full py-4 bg-white relative ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © 2024. Telehealth Thailand. All rights reserved.
        </p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}
