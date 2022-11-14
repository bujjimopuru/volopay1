import {GoPrimitiveDot} from "react-icons/go"
import "./index.css"

const CardItems = (props)=>{
    const {details} = props
    const {name,user_name,budget_name,spent,available_to_spend,card_type,expiry,limit} = details
    return(
        <div className="card_box_cointainer">
            <div className="arrange-flex-direction">
                <div>
                    <p style={{fontWeight:"bold" , fontSize:"25px"}}>{name}</p>
                    <p className="user_name">{user_name} <GoPrimitiveDot /> {budget_name}</p>
                    <p className="user_name"><span className="continer_card">{card_type}</span></p>
                </div>    
                <div className="img_block">
                    <div className="arrange_color">
                        <img   className="img1" style={{height:"30px" , width:"30px"}}  src={spent.imgUrl} alt={card_type} />
                    </div>
                <div>
                    {(() => { 
                        if (card_type === "BURNER"){
                            return(
                                <p className="user_name margin" style={{margin:"5px"}}>{expiry}</p>
                            )
                        }else if (card_type === "SUBSCRIPTION"){
                            return(
                                <p className="user_name margin" style={{margin:"5px"}}>{expiry} Limit : {limit} {available_to_spend.currency}</p>
                            )  
                        }
                    })()}

                </div>
                </div>
            </div>
            <div className="back_color"></div>
            <div className="arrange-flex-direction">
                <div>
                    <p style={{color:"red"}}> <GoPrimitiveDot  size="15" /> <span className="font_size">Spent</span></p>
                    <p style={{color:"green" }} > < GoPrimitiveDot size="15" /> <span className="font_size">Available to spend</span></p>
                </div>
                <div className="flex-container">
                    <p className="font_size" style={{marginRight:"5px" , alignSelf:"flex-end"}}>{spent.value} {spent.currency}</p>
                    <p className="font_size" style={{marginRight:"5px"}}>{available_to_spend.value} {available_to_spend.currency}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItems