import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import "../assets/styles/filterButton.css";

export default function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="filter-button"
        onClick={() => setOpen(true)}
      >
        <FiFilter />
      </button>
      <div className={`bar-lateral ${open ? "open" : ""}`}>
        <button
          type="button"
          className="close-button"
          onClick={() => setOpen(false)}
        >
          <RxCross1 />
        </button>
      </div>
    </>
  );
}
