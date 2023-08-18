import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <header className="flex items-end w-full flex-col p-4">
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
