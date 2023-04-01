import React from "react";

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러입니다.";

  //prettier-ignore
  return (
    <div
      style={{backgroundColor:"red",color:"white"}}
    >{errorMessage}
    </div>
  )
};

export default ErrorBanner;
