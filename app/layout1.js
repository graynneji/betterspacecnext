"use client";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
