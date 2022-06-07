import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Calendar.scss";

export default function Calendar() {
  return (
    <div className="calendar-main">
      <MetaData title={"Calendrier de réservation | NFPort"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Calendar</h2>
          <a href="#" className="button page w-button">
            Ajouter un nouvel évènement
          </a>
        </div>
        <div className="container">
          <div className="module">
            <div className="calender">
              <div className="calender-month">
                <div className="module-header">
                  <h3 className="calender-title">Juin 2022</h3>
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
                    <div className="calender-square grey">
                      <div className="calender-number">31</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">1</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number blue">2</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">3</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">4</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">5</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">6</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">7</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">8</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">9</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">10</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">11</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">12</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">13</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">14</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">15</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">16</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number blue">17</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">18</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">19</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">20</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">21</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number blue">22</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">23</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">24</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number light">25</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">26</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number blue">27</div>
                    </div>
                    <div className="calender-square">
                      <div className="calender-number">28</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">1</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">2</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">3</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">4</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">5</div>
                    </div>
                    <div className="calender-square grey">
                      <div className="calender-number">6</div>
                    </div>
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
