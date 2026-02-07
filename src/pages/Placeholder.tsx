import { Sidebar } from "@/components/Sidebar";
import { MessageSquare } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {title}
            </h1>
            <p className="text-gray-600 mb-6">{description}</p>
            <p className="text-sm text-gray-500">
              Let us know in the chat what you'd like to build here, and we'll
              generate it for you!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
