import React from 'react';

const Select = ({ register, errors, id, title, placeholder, options, defaultValue }) => {
    
    return (
        <div className='inputs'>
            <p className='inputs-title'>{title}</p>
            <select className={`inputs-input ${errors[id] ? "error" : ""}`} {...register(id)} defaultValue={defaultValue}>

                <option value="" disabled>{placeholder} </option>

                {options.map(option => (
                    <option key={option._id} value={option._id}>{option.category}</option>
                ))}        

            </select>

        </div>
    )
}

export default Select;