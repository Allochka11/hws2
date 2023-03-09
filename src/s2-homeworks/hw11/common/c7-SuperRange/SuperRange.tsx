import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    // console.log(props)
    return (
        <Slider

            sx={{
                '& .MuiSlider-thumb': {
                    color: "#00CC22",
                    backgroundColor: "white",
                    border: "1px solid #00CC22",
                },
                '& .MuiSlider-track': {
                    color: "#00CC22"
                },
                '& .MuiSlider-rail': {
                    color: "#8B8B8B"
                },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
function getMuiTheme(arg0: { slider: { trackColor: string; selectionColor: string; }; }) {
    throw new Error('Function not implemented.');
}

