import React from "react";
import TodoApp from "../pages/TodoApp";
import "../styles/ProjSection.css";
import CardItem from "./CardItem";
import ImgTodo from "../images/todoapp.png";
import ImgPocket from "../images/4dpocket.png";

export default function ProjSection() {
  return (
    <div className="proj-container" id="proj-section">
      <h1>Projects</h1>
      <div className="cards-wrapper">
        <CardItem
          path={<TodoApp />}
          src={ImgTodo}
          title="A Todo App"
          text="A simple todo list that keeps you on track."
          label="Personal Project"
        />
        <CardItem
          path={<TodoApp />}
          src={ImgPocket}
          title="First Website"
          text="A website introduce history of web development and some code snippets."
          label="Personal Project"
        />
      </div>
    </div>
  );
}
