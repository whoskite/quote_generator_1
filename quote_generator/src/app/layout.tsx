import type { Metadata } from 'next';

import '../app/globals.css';
import { Providers } from '../app/providers';

export const metadata: Metadata = {
  title: 'Quote Generator Test',
  description: 'A quote generator test app for Frames v2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}