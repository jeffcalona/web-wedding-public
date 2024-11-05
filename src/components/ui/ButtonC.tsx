interface buttonProps {
  label: string
  disabled: boolean
}

const ButtonC: React.FC<buttonProps> = ({ label, disabled }) => {
  return (
    <button className="bg-black text-white p-3 uppercase hover:bg-slate-800 font-bold" disabled={disabled}>{label}</button>
  )
}

export default ButtonC