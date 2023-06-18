import { DateTask } from "../../components/form/types";

export type InitialState = {
  dateTask: DateTask[];
};

type ActionSaveTask = {
  type: "SAVE";
  payload: DateTask;
}

type ActionRemoveTask = {
  type: "DELETE",
  payload: number;
}


export type Action = ActionSaveTask | ActionRemoveTask;
