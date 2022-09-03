const Card = (props) =>{
 

    return (
        <div className={props.isScrolled?"Card " + props.className + " active" :"Card " + props.className }>
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