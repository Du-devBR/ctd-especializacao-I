
import { Home } from './pages/Home'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient()

export function App() {

  return (
    <Home />
  )
}
