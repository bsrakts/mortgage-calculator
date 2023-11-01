
interface InputFieldsType {
    label:string
    id:string
    value:string
    onChange: (value:string) => void
    error?:string
}

const InputFields:React.FC<InputFieldsType> = ({label,id,value,onChange,error}) => {
  return (
    <div className="mb-4 p-4">
    <label htmlFor={id} className="block text-md font-medium text-emerald-800">
    {label}
    </label>
    <input
    type="number"
    id={id}
    className={`mt-1 p-2 w-42 border rounded-md ${error ? 'border-red-500' : 'border-blue-500'}`}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    />
    {error && (
        <p className="mt-2 text-md text-red-600" id="email-error">
            {error}
        </p>
    )}
    </div>
  )
}

export default InputFields