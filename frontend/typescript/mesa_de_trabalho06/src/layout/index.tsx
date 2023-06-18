
import { Card } from "../components/cards";
import { Forms } from "../components/form";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { DateTask } from "../components/form/types";
import { Dispatch } from "redux"
import {useDispatch} from 'react-redux'
import { Action } from "../redux/reducer/types";

export function MainLayout(){
  const dispatch: Dispatch<Action> = useDispatch()
  const infoTask = useSelector((state: RootState) => state.task.dateTask)

  return(
    <div className="flex w-full min-h-screen">
      <div className="flex items-center justify-center w-1/3 px-16 bg-bgBlue">
        <Forms />
      </div>
      <div className="flex w-full flex-col px-12 py-16 gap-8">
        <div className="flex justify-between items-end">
          <h1 className="flex text-txtBlackColor font-semibold text-2xl">Minhas Tarefas</h1>
          <span className="text-txtBlackColor font-light text-base">Total 2 tarefas</span>
        </div>
        {
          infoTask.map((task: DateTask, index) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              category={task.category}
              date={task.date}
              description={task.description}
              onRemove={() => dispatch({type: "DELETE", payload: task.id})}
            />
          ))
        }
      </div>
    </div>
  )
}
