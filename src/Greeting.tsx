import React, { useState, useEffect } from "react";

interface GreetingProps {
  name?: string;
}

const Greeting = ({ name }: GreetingProps) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name]);
  if (!name) {
    return <div>no name given</div>;
  }
  return <div>{message}</div>;
};
export default Greeting;
