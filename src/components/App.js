import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  useEffect(() => {
    fetch("http://localhost:4000/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:
    {
      "prompt": string,
      "answers": array of string,
      "correctIndex": integer
    }
  })
    .then((r) => r.json())
    .then((newItem) => console.log(newItem));
})

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
