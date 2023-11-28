export default function Overfiew({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="border-[1px] border-slate-200 rounded-lg shadow-md p-8 w-[400px] flex justify-center">
            {children}
        </div>
    )
}