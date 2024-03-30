import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tailwind CSS Presentation',
  description:
    'Presentation on Tailwind CSS created by Evan Griffith for Codesmith April 2024',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      { children }
      </body>
    </html>
  );
}
