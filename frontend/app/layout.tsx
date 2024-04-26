import "./globals.css";
import Sidebar from "@/components/Sidebar";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-900">
        <Sidebar />
        <div className="p-4 sm:ml-72">{children}</div>
      </body>
    </html>
  );
}
