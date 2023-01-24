import React from "react";
import Select from 'react-select'
import './InputSelect.css'
const InputSelect = (props) =>{
    const customStyles = {
      option: (provided, state) => {
        
        return({
          ...provided,
          padding: 10,
          background: state.isSelected ? '#A7E3EF': 'white',
          fontFamily: 'Source Sans Pro',
          fontSize: 18,
          minHeight:44,
          height: 44,
          paddingLeft: 30,
          color: '#4D4D4F',
            "&:hover":{
              
              cursor: 'pointer',
              background: "#A7E3EF",
              fontFamily: 'Source Sans Pro',
              fontSize: 18,
              color: '#4D4D4F'
            }               
        }
      )},
      indicatorSeparator: (provided, state)=>{
        return({
          ...provided,
          width: 0,
        })
      },
      indicatorsContainer: (provided, state)=>{
        return({
          ...provided,
          transition: "all .2s linear",
          transform: state.selectProps.menuIsOpen? "rotate(180deg)": "",
          marginRight: 20, 
        })
      },
      dropdownIndicator: (provided, state)=>{
        return({
          ...provided,
          margin: 0,
          padding: 0,
          'svg':{
            width:'35px',
            height:'35px',
            
          }
        })
      },
      menu:(provided, state)=>{

        return({
          ...provided,
          padding: 0,
          margin: 0, borderRadius: 2
        })
      },
      control: (provided, state) =>{
        return(
        {
          ...provided,
          borderRadius: '0 4px 4px 0',
          background: "#A7E3EF",
          paddingLeft: 20, 
          margin: 0,
          fontFamily: 'Source Sans Pro',
          fontSize: 18,
          color: "#C0C0C0",
          cursor: 'pointer',
          borderColor: state.menuIsOpen?'#4FC6E0':'transparent',
          boxShadow: 0,
          minHeight: 44,
            "&:hover": {
              borderColor: "#4FC6E0",
            },
            
      })}
    };
    
    return (
        <div className="InputSelect">
            <input 
                name={props.name} 
                id ={props.name} 
                value={props.inputValue} 
                onChange={props.inputOnChangeHandler} 
                className = "InputSelect__input" 
                type={props.type? props.type: 'text'} 
                placeholder={props.placeholder? props.inputPlaceholder : " "}>

            </input>
            {props.label? <label htmlFor={props.name} className="InputSelect__input_label">{props.label}</label>: null}
            <Select
                className="InputSelect__select"
                styles={customStyles}
                placeholder={props.selectPlaceholder} 
                options={props.options} 
                defaultValue={props.selectValue}
                onChange={props.selectOnChangeHandler}
              />
        </div>
    )
}

export default InputSelect;