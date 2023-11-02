/* eslint-disable react/prop-types */


function Input1({onChange, type, name, placeholder, value, label, id}){
    return(
        <div className=" w-full pt-2">
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-600">{label}</label>
            <input onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} id={id} className=" w-full outline-none rounded-md border-2 focus:border-2 focus:border-cyan-900 pl-2 py-1 text-gray-600 required:border-red-500" />
        </div>
    )
}

function Select({onChange, value, name, label, id, children, disable}){

    return(
        <div className=" w-full">
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-600">{label}</label>

            <select onChange={onChange} name={name} value={value} id={id} disabled={disable} className=" w-full outline-none focus:bg-cyan-100 pl-2 py-1 rounded-sm text-gray-600 required:border-red-500">
                    {children}         
            </select>

        </div>
    )
}


function Option({value, children}){
    return(
        <option value={value}>{children}</option>
    )
}

function Textarea({onChange, name, value, placeholder, label, id}){

    return(
        <>
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-300 ">{label}</label>
            <textarea className=" w-full outline-none focus:bg-cyan-100 pl-2 rounded-sm text-gray-600 required:border-red-500" onChange={onChange} id={id} name={name} value={value} placeholder={placeholder} cols="20" rows="6"></textarea>
        </>
    )
}

export {Input1, Select, Option, Textarea}