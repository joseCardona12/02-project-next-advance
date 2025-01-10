interface IButtonProps {
    onClick: () => void;
    text:string
}
export default function Button({
    onClick,
    text
}:IButtonProps):React.ReactNode{
    return (
        <button className="bg-cyan-300 rounded-md p-1 w-100" 
            onClick={onClick}>{text}</button>
    )
}