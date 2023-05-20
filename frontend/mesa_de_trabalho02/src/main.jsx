import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import '../src/styles/main.sass'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SelectedTaskProvider } from './contexts/editTaskContext.jsx';

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <SelectedTaskProvider>
        <App />
      </SelectedTaskProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
