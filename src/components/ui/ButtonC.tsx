interface buttonProps {
  label: string
  disabled: boolean
}

const ButtonC: React.FC<buttonProps> = ({ label, disabled }) => {
  return (
    <button className={`py-3 uppercase ${disabled ? 'bg-slate-800 hover:slate-800 text-slate-200' : 'bg-black hover:bg-slate-800 text-white'} font-bold flex justify-center items-center`} disabled={disabled}>{label}
      {disabled && (
        <div className="spinner ml-2" />
      )}
    </button>
  )
}

export default ButtonC