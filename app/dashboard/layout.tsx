import DashboardHeader from './_components/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <main>
      <DashboardHeader />
      {children}
    </main>
  );
}
