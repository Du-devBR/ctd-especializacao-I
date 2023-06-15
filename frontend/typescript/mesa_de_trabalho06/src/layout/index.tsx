import { Card } from "../components/cards";
import { Forms } from "../components/form";

export function MainLayout(){
  return(
    <div className="flex w-full min-h-screen">
      <div className="flex items-center justify-center w-1/3 px-16 bg-bgBlue">
        <Forms />
      </div>
      <div className="flex flex-col px-12 py-16 gap-8">
        <h1 className="flex text-txtBlackColor font-semibold text-2xl">Minhas Tarefas</h1>
        <Card />
      </div>
    </div>
  )
}
