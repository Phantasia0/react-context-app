import React from "react";

const Options = ({ name, updateItemCount }) => {
  const handleChange = (event) => updateItemCount(name, event.target.checked ? 1 : 0);
  //prettier-ignore
  return (
    <form>
      <input
       type="checkbox" 
       id={`${name} option`} 
       onChange = {handleChange}
      />
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
