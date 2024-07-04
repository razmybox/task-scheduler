import SideNav from "@/component/appui/Sidenav"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
            <div className="flex h-screen">
                <SideNav />
                {children}
            </div>

    )
}