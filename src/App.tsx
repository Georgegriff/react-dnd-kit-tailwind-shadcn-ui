import { Github } from "lucide-react";
import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <header className="flex justify-between w-full flex-row p-4">
            <Button variant="link" asChild className="text-primary h-16 w-16">
              <a href="https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui">
                <Github className="fill-current h-full w-full" />
              </a>
            </Button>
            <ThemeToggle />
          </header>
          <main className="basis-[100%] flex-1 flex items-center">
            <KanbanBoard />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
