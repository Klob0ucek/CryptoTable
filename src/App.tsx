import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import CurrenciesPage from "./pages/CurrenciesPage.tsx";
import Tabs from "./components/tabs/Tabs.tsx";
import LiveFeedPage from "./pages/LiveFeedPage.tsx";

const queryClient = new QueryClient();

function App() {
    const [tab, setTab] = useState('currencies');

  return (
      <QueryClientProvider client={queryClient}>
          <Tabs setPage={setTab}/>
          {tab == 'currencies' ? (
              <CurrenciesPage/>
          ) : (
              <LiveFeedPage/>
          )}
      </QueryClientProvider>
  )
}

export default App
