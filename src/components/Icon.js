import React from "react";

const Icon = ({ name, size = 20, color = "white" }) => {
  const IconName = name;
  return <IconName size={size} color={color} />;
};

export default Icon;
