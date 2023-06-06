import { Card } from "./components/card"
import { frutas } from "./assets/db/db"

export function App() {

  return (
    <div>
      <h1>Frutas</h1>
      {
        frutas.map((frutas) => (
          <Card fruit={frutas}/>
        ))
      }
    </div>
  )
}
