import { DateTask } from "../form/types";

export function Card(props: DateTask){

  const {title, date, category, description, onRemove} = props;
  return(
    <div className="w-full flex justify-between py-5 px-4 rounded-xl shadow-xl">
      <div className="flex flex-col">
        <h2 className="text-txtBlackColor font-semibold text-xl">{title}</h2>
        <span className="text-txtBlackColor font-light text-sm mt-0 mb-2">{category}</span>
        <p className="text-txtBlackColor text-base font-semibold">{description}</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-txtBlackColor font-semibold text-xl">{date.toUTCString()}</span>
        <button
          onClick={onRemove}
          >
            X
        </button>
      </div>
    </div>
  )
}
