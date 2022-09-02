const Card = (props) =>{
 

    return (
        <div className={props.isScrolled?"Card active" :"Card"}>
            <div className="Card-Header">
                <h1 className="Card-Title">
                    {props.Header}
                </h1>
            </div>

            <div className="Card-Body">
                <p>{props.Content}</p>
            </div>
        </div>
    )
}

export default Card