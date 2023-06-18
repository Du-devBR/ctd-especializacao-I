import {combineReducers, createStore} from 'redux'
import TasksReducer from './reducer/task-reducer'


const reducers = combineReducers({
  task: TasksReducer
})


export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers)
