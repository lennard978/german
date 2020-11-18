import React, { createContext, useState } from "react";
import {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
  Lesson10,
  Lesson11,
  Lesson12,
  Lesson13,
  Lesson14,
  Lesson15,
  listBtn,
} from "../data/data";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const data = [
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4,
    Lesson5,
    Lesson6,
    Lesson7,
    Lesson8,
    Lesson9,
    Lesson10,
    Lesson11,
    Lesson12,
    Lesson13,
    Lesson14,
    Lesson15,
  ];
  const [btn, setBtn] = useState(listBtn);

  return (
    <MainContext.Provider value={{ data, btnValue: [btn, setBtn] }}>
      {children}
    </MainContext.Provider>
  );
};
