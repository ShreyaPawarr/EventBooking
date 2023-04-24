const Button = (props) =>{

    let buttonStyle="btn bg-[#4DC4A4] text-white px-4 py-2 hover:bg-black";
    if(props.type === "outline")
    {
        buttonStyle="btn bg-inherit border-solid border-2 border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all";
    }

    if(props.rounded)
    {
        buttonStyle=buttonStyle + " " +props.rounded;
    }
    else
    {
        buttonStyle=buttonStyle + " rounded-full";
    }
    buttonStyle=buttonStyle + " " +props.size;
    return (
        <button className={buttonStyle}>{props.text}</button>
    )
}

export default Button;