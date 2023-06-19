
import { DateTask } from "../../components/form/types";
import { Action, InitialState } from "./types";

let taskIdCounter  = 1
const State: InitialState = {
  dateTask: []
}

export default function TasksReducer(state = State, action: Action){
  switch (action.type){
    case "SAVE":
      const newTask :  DateTask =  {...action.payload, id: taskIdCounter++}
      return {
        ...state,
        dateTask: [...state.dateTask, newTask ]
      }
    case "DELETE":
      return {
        ...state,
        dateTask: state.dateTask.filter((task: DateTask) => task.id !== action.payload)
      }
    default:
      return state
  }
}
