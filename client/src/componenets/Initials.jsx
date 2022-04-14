import React from "react";

const InitialIcon = ({ initials }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        width: 50,
        height: 50,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {initials}
      </div>
    </div>
  );
};
export default InitialIcon;
