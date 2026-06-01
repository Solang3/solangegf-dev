import KonamiListener from "@/components/KonamiListener";

export default function PlaywithmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="arcade-scope min-h-screen">
      {children}
      <KonamiListener />
    </div>
  );
}
