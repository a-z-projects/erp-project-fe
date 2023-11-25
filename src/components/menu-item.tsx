export default function MenuItem({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full bg-slate-200 p-3 rounded-lg truncate">
      {children}
    </div>
  );
}
