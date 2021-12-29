import React from "react";

export default function Icon({ name, size = 20, color = "white" }) {
  const IconName = name;
  return <IconName size={size} color={color} />;
}
