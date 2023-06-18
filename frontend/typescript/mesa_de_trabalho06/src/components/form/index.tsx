import { useState } from "react"
import { DateTask } from "./types"
import { Dispatch } from "redux"
import { Action } from "../../redux/reducer/types"
import {useDispatch} from 'react-redux'
// import { RootState } from "../../redux/store"


export function Forms(){
  const dispatch: Dispatch<Action> = useDispatch()
  const [formData, setFormData] = useState<DateTask>({
    title: '',
    category: '',
    date: new Date(),
    description: ''
  })

  return(
    <div className="flex flex-col w-full items-center bg-white py-12 px-8 rounded-xl">
      <h1 className="text-base text-txtBlackColor font-semibold mb-8">Cadatrar Tarefa</h1>
      <div className="flex flex-col gap-12 w-full">
        <input
          className="flex w-full py-2 px-2 border-solid border-b-2 border-txtBlackColor"
          type="text"
          onChange={(event) => setFormData({...formData, title: event.target.value})}
          placeholder="Titulo"
        />
        <select
          className="flex w-full py-2 px-2 border-solid border-b-2 border-txtBlackColor"
          value={formData.category}
          onChange={(event) => setFormData({...formData, category: event.target.value})}
            >
              <option value="">Categoria</option>
              <option value="trabalho">Trabalho</option>
              <option value="estudos">Estudos</option>
              <option value="lazer">Lazer</option>
        </select >
        <input
          className="flex w-full py-2 px-2 border-solid border-b-2 border-txtBlackColor"
          type="date"
          onChange={(event) => setFormData({...formData, date: new Date(event.target.value)})}
          placeholder="Data"
        />
        <input
          className="flex w-full py-2 px-2 border-solid border-b-2 border-txtBlackColor"
          type=""
          onChange={(event) => setFormData({...formData, description: event.target.value})}
          placeholder="Descrição"
        />
        <button
          className="w-full py-4 bg-bgBtn rounded-xl text-white"
          onClick={() => dispatch({type: "SAVE", payload: formData})}
          >
            Salvar
        </button>
      </div>
    </div>
  )
}
