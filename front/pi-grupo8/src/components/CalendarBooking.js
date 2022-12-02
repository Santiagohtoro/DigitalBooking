import React  from "react";
import  { Calendar, DateObject } from "react-multi-date-picker";
import calendar from "../Styles/calendar.module.scss";
import  { useState} from "react";
import "react-multi-date-picker/styles/colors/teal.css";



export default function CalendarBooking(props){
    
    const [values, setValues] = useState(new DateObject());
    
    
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    
    
    return (
      
        
        <Calendar
              className= {`teal ${calendar.container}` }
              
                value={values}
                onChange={setValues}
                containerStyle="days"
                  range
                  numberOfMonths={2}
                  weekDays={weekDays}
                  months={months}
                  
                  styles={{}}
                
                  
                  disableMonthPicker
                  disableYearPicker
                
                />
                

        
    );
}