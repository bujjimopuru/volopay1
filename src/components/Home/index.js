import "./index.css"

const Home = ()=>{
    return(
        <>
        <div className="container-flex-arrange-1">
            <div className="bar_section">
                <h1>Virtual cards</h1>
                <img style={{height:"30px" , paddingTop:"25px" , marginLeft:"8px"}} src="https://i.ibb.co/sq3Q4qW/video-Icon.png" alt="video-icon" />
            </div>
            <button  className="card_box_cointainer button" style={{height:"40px", width:"110px", backgroundColor:"white" , borderRadius:"10px" ,border:"none"}}>+ Virtual card</button>
        </div>
        </>
    )
}

export default Home