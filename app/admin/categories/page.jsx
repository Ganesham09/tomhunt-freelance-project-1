"use client";

import Form from "./components/Form";
import ListView from "./components/ListView";

export default function page() {
  return (
    <main className=" p-5 flex gap-5 ">
      <Form />
      <ListView />
    </main>
  );
}
