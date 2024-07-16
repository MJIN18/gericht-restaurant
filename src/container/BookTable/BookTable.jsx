import React from "react";
import { SubHeading } from "../../components";
import "./BookTable.css";

const BookTable = () => (
  <div className="app__bookTable app__bg section__padding" id="bookTable">
    <div className="app__bookTable_heading ">
      <SubHeading title="Reservations" />
      <h1 className="headtext__cormorant">Book A Table</h1>
      <div className="app__bookTable-input">
        <select>
          <option>1 person</option>
          <option>2 person</option>
          <option>3 person</option>
          <option>4 person</option>
        </select>
        <input type="date" />
        <select>
          <option>10 AM</option>
          <option>11 AM</option>
          <option>9 PM</option>
          <option>10 PM</option>
        </select>
      </div>
      <div className="app__bookTable-button">
        <button type="button" className="custom__button">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

export default BookTable;
