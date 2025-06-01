import React, { useState } from "react";
import { list } from "./list";
import Document from "./components/Document";

function App() {

  return (
    <div className="h-screen p-4 background-gradient bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center">
      <div className="flex flex-col rounded-xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden">
        <Document />
      </div>
    </div>
  )
}

export default App
