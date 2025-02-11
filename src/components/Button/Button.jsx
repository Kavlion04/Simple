import "./Button.css"
function Button(props) {
    return (
        <div className="cardsi">
            <img src={props.svg} alt="img" />
            <b>{props.title}</b>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Button