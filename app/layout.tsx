import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Fontana | Portfolio",
  description:
    "Desarrollador full-stack especializado en crear aplicaciones web y móviles intuitivas y eficientes. Experiencia en React, Next.js, Node.js y soluciones centradas en el usuario. Explora mi portafolio para ver proyectos de e-banking, IoT y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="description" content={metadata.description ?? ""} />
      <meta
        name="keywords"
        content="desarrollo web, diseño web, páginas web, landing page, SEO, sitios responsivos, desarrollo de software, paginas web personalizadas"
      />
      <meta name="author" content="Felipe Fontana" />
      <meta
        property="og:title"
        content="Felipe Fontana | Desarrollo Web Profesional"
      />
      <meta property="og:description" content={metadata.description ?? ""} />
      <meta property="og:image" content="ruta-a-tu-imagen.jpg" />
      <meta property="og:url" content="https://tusitio.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Felipe Fontana | Desarrollo Web Profesional"
      />
      <meta name="twitter:description" content={metadata.description ?? ""} />
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
