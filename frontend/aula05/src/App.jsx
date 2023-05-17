import { Card } from "./components/Card";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <Card />
    </QueryClientProvider>

  )
}
