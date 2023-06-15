import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;
  // Here We USe loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  

  const navigate=useNavigate();

  
  const dispatch=useDispatch();

  
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    
  }

  
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-work"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} Days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Weekly View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;