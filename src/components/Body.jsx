import { useEffect } from "react";
import data from "/src/data.json";

const Body = () => {
  useEffect(() => {
    const date = new Date()
      .toLocaleDateString("en-us", { weekday: "short" })
      .toLowerCase();
    if (typeof window !== "undefined") {
      document.querySelector(`.${date}-graph`).style.background = "var(--cyan)";
    }
  }, []);

  return (
    <section className="wrapper">
      <h1>Spending - Last 7 days</h1>
      <div className="graph-holder">
        <div className="mon common">
          <p>${data[0].amount}</p>
          <div className="mon-graph common-graph"></div>
          <p>{data[0].day}</p>
        </div>
        <div className="tue common">
          <p>${data[1].amount}</p>
          <div className="tue-graph common-graph"></div>
          <p>{data[1].day}</p>
        </div>
        <div className="wed common">
          <p>${data[2].amount}</p>
          <div className="wed-graph common-graph"></div>
          <p>{data[2].day}</p>
        </div>
        <div className="thu common">
          <p>${data[3].amount}</p>
          <div className="thu-graph common-graph"></div>
          <p>{data[3].day}</p>
        </div>
        <div className="fri common">
          <p>${data[4].amount}</p>
          <div className="fri-graph common-graph"></div>
          <p>{data[4].day}</p>
        </div>
        <div className="sat common">
          <p>${data[5].amount}</p>
          <div className="sat-graph common-graph"></div>
          <p>{data[5].day}</p>
        </div>
        <div className="sun common">
          <p>${data[6].amount}</p>
          <div className="sun-graph common-graph"></div>
          <p>{data[6].day}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-left">
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>
      <div className="footer-right">
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </section>
  );
};

export default Body;
