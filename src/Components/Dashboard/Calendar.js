import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Calendar.scss";

const fakeData = [
  {
    date: 31,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 1,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 2,
    class: "blue",
    title: "Nombre de réservations:10",
  },
  {
    date: 3,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 4,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 5,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 6,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 7,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 8,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 9,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 10,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 11,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 12,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 13,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 14,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 15,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 16,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 17,
    class: "blue",
    title: "Nombre de réservations:10",
  },
  {
    date: 18,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 19,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 20,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 21,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 22,
    class: "blue",
    title: "Nombre de réservations:10",
  },
  {
    date: 23,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 24,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 25,
    class: "light",
    title: "Nombre de réservations:10",
  },
  {
    date: 26,
    class: "",
    title: "Nombre de réservations:10",
  },
  {
    date: 27,
    class: "blue",
    title: "Nombre de réservations:10",
  },
  {
    date: 28,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 1,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 2,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 3,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 4,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 5,
    class: "grey",
    title: "Nombre de réservations:10",
  },
  {
    date: 6,
    class: "grey",
    title: "Nombre de réservations:10",
  },
];

export default function Calendar() {
  return (
    <div className="calendar-main">
      <MetaData title={"Calendrier de réservation | NFPort"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Calendar</h2>
        </div>
        <div className="container">
          <div className="module">
            <div className="calender">
              <div className="calender-month">
                <div className="module-header calender-header">
                  <span>&#10094;</span>
                  <h3 className="calender-title">Juin 2022</h3>
                  <span>&#10095;</span>
                </div>
                <div className="module-main">
                  <div className="calender-row head">
                    <h4 className="grid-header">Sun</h4>
                    <h4 className="grid-header">Mon</h4>
                    <h4 className="grid-header">Tue</h4>
                    <h4 className="grid-header">Wed</h4>
                    <h4 className="grid-header">Thu</h4>
                    <h4 className="grid-header">Fri</h4>
                    <h4 className="grid-header">Sat</h4>
                  </div>
                  <div className="calender-row">
                    {fakeData.map((item, index) => (
                      <div key={index} className={`calender-square `}>
                        <div
                          title={item.title}
                          className={`calender-number ${item.class}`}
                        >
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="calender-left-arrow w-slider-arrow-left">
                <div className="w-icon-slider-left"></div>
              </div>
              <div className="calender-right-arrow w-slider-arrow-right">
                <div className="w-icon-slider-right"></div>
              </div>
              <div className="slide-nav w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
