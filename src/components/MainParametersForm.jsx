import React, { useState, useEffect } from "react";

export default function MainParametersForm(props) {
    const [formData, setFormData] = useState(
        {
            ownDiameter: '', 
            ownHeight: '', 
            receiptDiameter: '',
            receiptHeight: ''
        }
    )

    useEffect(() => {
        const ownDiameterNumber = Number(formData.ownDiameter);
        const ownHeightNumber = Number(formData.ownHeight)
        const receiptDiameterNumber = Number(formData.receiptDiameter)
        const receiptHeightNumber = Number(formData.receiptHeight)

        if (ownDiameterNumber && ownHeightNumber && receiptDiameterNumber && receiptHeightNumber) {
            const ownVolume = (ownDiameterNumber * ownDiameterNumber * Math.PI * ownHeightNumber) / 4
            const receiptVolume = (receiptDiameterNumber * receiptDiameterNumber * Math.PI * receiptHeightNumber) / 4
            const coefficient = ownVolume / receiptVolume
            props.handleCoefficient(coefficient)
        } else {
            props.handleCoefficient(0)
        }
    }, [formData])

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form className="main-parameters-form">
            <div className='main-parameters'>
                <div className='parameters-pair'>
                    <input 
                        type="number" 
                        placeholder='Діаметр Вашої форми' 
                        name='ownDiameter' 
                        onChange={handleChange}
                        value={formData.ownDiameter} 
                    />
                    <input 
                        type="number" 
                        placeholder='Висота Вашої форми' 
                        name='ownHeight' 
                        onChange={handleChange}
                        value={formData.ownHeight}
                    />
                </div>
                <div className='parameters-pair'>
                    <input 
                        type="number" 
                        placeholder='Діаметр рецептної форми' 
                        name='receiptDiameter' 
                        onChange={handleChange}
                        value={formData.receiptDiameter}
                    />
                    <input 
                        type="number" 
                        placeholder='Висота рецептної форми' 
                        name='receiptHeight' 
                        onChange={handleChange}
                        value={formData.receiptHeight}
                    />
                </div>
            </div>
        </form>
    )
}