import { useState } from "react"
import { DateTask } from "./types"
import { Dispatch } from "redux"
import { Action } from "../../redux/reducer/types"
import {useDispatch} from 'react-redux'
// import { RootState } from "../../redux/store"


export function Forms(){
  const dispatch: Dispatch<Action> = useDispatch()
  const [valid, setValid] = useState(false)
  const [formData, setFormData] = useState<DateTask>({
    id: 0,
    title: '',
    category: '',
    date: new Date(),
    description: ''
  })

  function submitForm(){
    if(formData.title !== '' && formData.category !== "" && formData.description !== ""){
      dispatch({type: "SAVE", payload: formData})
      setFormData({title: "", category: "", date: '', description: ""})
      setValid(false)
    }else{
      setValid(true)
    }
  }


  return(
    <div className="flex flex-col w-full items-center bg-white py-12 px-8 rounded-xl">
      <h1 className="text-base text-txtBlackColor font-semibold mb-8">Cadatrar Tarefa</h1>
      <div className="flex flex-col gap-12 w-full">
        <input
          className={`flex w-full py-2 px-2 border-solid border-b-2 ${valid ? 'border-red-500 placeholder:text-red-400' : 'border-txtBlackColor'}`}
          type="text"
          value={formData.title}
          onChange={(event) => setFormData({...formData, title: event.target.value})}
          placeholder="Titulo"
        />
        <select
          className={`flex w-full py-2 px-2 border-solid border-b-2 ${valid ? 'border-red-500 placeholder:text-red-400' : 'border-txtBlackColor'}`}
          value={formData.category}
          onChange={(event) => setFormData({...formData, category: event.target.value})}
            >
              <option value="">Categoria</option>
              <option value="trabalho">Trabalho</option>
              <option value="estudos">Estudos</option>
              <option value="lazer">Lazer</option>
        </select >
        <input
          className={`flex w-full py-2 px-2 border-solid border-b-2 ${valid ? 'border-red-500 placeholder:text-red-400' : 'border-txtBlackColor'}`}
          type="date"
          value={formData.date instanceof Date ? formData.date.toISOString().split('T')[0] : ''}
          onChange={(event) => setFormData({...formData, date: new Date(event.target.value)})}
          placeholder="Data"
        />
        <input
          className={`flex w-full py-2 px-2 border-solid border-b-2 ${valid ? 'border-red-500 placeholder:text-red-400' : 'border-txtBlackColor'}`}
          type=""
          value={formData.description}
          onChange={(event) => setFormData({...formData, description: event.target.value})}
          placeholder="Descrição"
        />
        <button
          className="w-full py-4 bg-bgBtn rounded-xl text-white"
          onClick={submitForm}
          // onClick={() => {
          //   if(formData.title !== '' && formData.category !== "" && formData.description !== ""){
          //     dispatch({type: "SAVE", payload: formData})
          //     setFormData({title: "", category: "", date: '', description: ""})
          //   }
          // }}
          >
            Salvar
        </button>
      </div>
    </div>
  )
}
