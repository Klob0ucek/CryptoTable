import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import CurrenciesPage from "./pages/CurrenciesPage.tsx";
import Tabs from "./components/tabs/Tabs.tsx";
import LiveFeedPage from "./pages/LiveFeedPage.tsx";

export enum TabOptions {
    Top = "top",
    Live = "live"
}

const queryClient = new QueryClient();

function App() {
    const [tab, setTab] = useState<TabOptions>(TabOptions.Top);

    const renderPage = () => {
        switch (tab) {
            case TabOptions.Top:
                return <CurrenciesPage/>;
            case TabOptions.Live:
                return <LiveFeedPage/>;
            default:
                return null;
        }
    };

  return (
      <QueryClientProvider client={queryClient}>
          <Tabs setPage={setTab}/>
          {renderPage()}
      </QueryClientProvider>
  )
}

export default App
