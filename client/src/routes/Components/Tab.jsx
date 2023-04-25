const Tab =(props)=>{

    const s="px-4 py-2 bg-slate-300 w-fit rounded-md hover:cursor-pointer";
    const st="text-2xl font-medium";
    const u="px-4 py-2 w-fit rounded-md hover:cursor-pointer";
    const ut="text-2xl";

    const clickHandler= (e)=>{
        if(e.target.className === 'text-2xl')
        {
            props.onClick();
        }
    }

    return(
        <div className={props.selected?s:u} onClick={clickHandler}>
            <h1 className={props.selected?st:ut} >{props.text}</h1>
        </div>
    );
}

export default Tab;