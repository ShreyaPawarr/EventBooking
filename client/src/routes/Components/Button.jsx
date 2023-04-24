const Button = (props) =>{

    let buttonStyle="btn rounded-full bg-black text-white px-4 py-2 text-md hover:bg-white hover:text-black transition-all hover:border-solid hover:border-1.5 hover:border-black";
    if(props.type === "outline")
    {
        buttonStyle="btn rounded-full bg-inherit border-solid border-2 border-black text-black px-4 py-2 text-md hover:bg-black hover:text-white transition-all";
    }
    buttonStyle=props.width + buttonStyle;
    return (
        <button className={buttonStyle}>{props.text}</button>
    )
}

export default Button;