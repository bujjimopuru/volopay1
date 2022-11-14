import "./index.css"

const ButtonFilter = (props)=>{
    const {buttondetails ,onbuttonreply} = props
    const { text , status} = buttondetails
    const onButtonStatus = () =>{
        onbuttonreply(status)
    }
    return(
        <button className="button" onClick={onButtonStatus}>
            {text}
        </button>   
    )
}

export default ButtonFilter