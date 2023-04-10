import React, { createContext } from "react";
import Child1 from "./Child1";

export const StudentContext = createContext();
export const EmailContext = createContext();
export const InfoContext = createContext()

const Parent = () => {
  const student = [
    { name: "Ankita", age: 21 },
    { name: "Shahzad", age: 21 },
    { name: "Awais", age: 21 },
    { name: "Abdullah", age: 21 },
  ];
  const emailId = "xyx@test.com";
  const info = "This data will be used in forth component"

  return (
    <div>
      Parent
      <StudentContext.Provider value={student}>
        <EmailContext.Provider value={emailId}>
          <InfoContext.Provider value={info}>
          <Child1 />
          </InfoContext.Provider>
        </EmailContext.Provider>
      </StudentContext.Provider>
    </div>
  );
};

export default Parent;
