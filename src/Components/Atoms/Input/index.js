import React from 'react'
import ReactDatePicker from 'react-datepicker'

function Input({ judul, placeholder, type, data, size, ...rest }) {
    return (
        <div className="mb-3"
            style={{
                fontSize: (size !== undefined) ? size : '16px'
            }}
        >
            <label className="form-label">{judul}</label>
            {
                (type === 'textarea') ?
                    <textarea className="form-control" placeholder={placeholder}
                        {...rest}
                    />
                    :
                    (type === 'aktif') ?
                        <div className="form-check form-switch py-2 d-flex justify-content-center">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                {...rest}
                            />
                        </div>
                        :
                        (type === 'select') ?
                            <select className='form-select' {...rest}>
                                {
                                    (data.length > 0) ?
                                        data.map(val => {
                                            return (
                                                <option key={val.id} value={val.id}>{val.name}</option>
                                            )
                                        })
                                        :
                                        <option></option>
                                }
                            </select>
                            :
                            (type === 'reactdatetime') ?
                                <ReactDatePicker
                                    minDate={new Date().setDate(new Date().getDate() -1)}
                                    showDisabledMonthNavigation
                                    showTimeInput
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    className='form-control'
                                    {...rest}
                                />
                                :
                                <input type={type} className="form-control" placeholder={placeholder}
                                    {...rest}
                                />

            }
        </div>
    )
}

export default Input