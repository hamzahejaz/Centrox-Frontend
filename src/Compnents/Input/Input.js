import React from 'react'
import "antd/dist/antd.css";
import { InputNumber } from 'antd';
const  Input =(props)=> {
    console.log("Input  props are",props)
    return (
        <div className="site-input-number-wrapper">
            {
                props.data.map((item) =>(

                    <InputNumber size="large"  defaultValue={item.default} onBlur={item.onChange} />
                ))
            }
      
      </div>
    )
}

export default Input
