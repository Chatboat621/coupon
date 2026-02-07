import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}