export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-100 text-gray-800">
        <main className="max-w-md mx-auto min-h-screen p-4">{children}</main>
        </body>
        </html>
    );
}
