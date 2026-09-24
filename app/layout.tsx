import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نيو برازر - New Brother",
  description: "مصنع ملابس جاهزة حريمي - البيع بالجملة فقط",
  icons: {
    icon: '/LogoNewBrother.png',
    apple: '/LogoNewBrother.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: 'hidden', fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
