import React, { useState } from "react";
import "../MainPage/main.css";
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Spinner from "../../Spinner";
import axios from "axios";

function Layout() {
  var progress1 = {
    width: "40%",
    height: "35px",
  };
  var progress2 = {
    width: "50%",
    height: "35px",
  };
  var progress3 = {
    width: "75%",
    height: "35px",
  };

  // if (isLoading) return <ReactBootStrap.Spinner animation="border" />;

  return (
    <div className="layout">
      <span>
        <i className="fa fa-compass iconSize" aria-hidden="true" />

        <span className="titleSize"> My Dashboard</span>
      </span>

      <div className="container">
        <div className="d-flex flex-wrap">
          {" "}
          {items.map((value, key) => (
            <ItemCon key={key} classname="p-2" value={value} />
          ))}
        </div>
      </div>

      <div class="d-flex pt-4 flex-wrap">
        <div class="p-2  mr-2 ">
          <div>Analytics</div>
          <img
            className="sized-image"
            src="https://www.w3schools.com/w3images/region.jpg"
          />
        </div>

        <div class="p-2 flex-fill">
          <div>Feeds</div>
          {data.map((value, index) => (
            <Feed index={index} data={value} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-5 font-general">General Stats</div>
      <div className="mt-4 mb-2">New Visitors</div>
      <div class="progress mb-2" style={{ height: "40px" }}>
        <div class="progress-bar" style={progress1}>
          40%
        </div>
      </div>
      <div className="mt-4 mb-2">New Users</div>
      <div class="progress mb-2" style={{ height: "40px" }}>
        <div class="progress-bar bg-warning" style={progress2}>
          50%
        </div>
      </div>
      <div className="mt-4 mb-2">Bounce Rate</div>
      <div class="progress mb-2" style={{ height: "40px" }}>
        <div class="progress-bar bg-danger" style={progress3}>
          75%
        </div>
      </div>
    </div>
  );
}

function Feed({ index, data }) {
  // #f1f1f1
  var bgcolor1 = {
    backgroundColor: "#f1f1f1",
  };
  var bgcolor2 = {
    backgroundColor: "white",
  };

  var iconColor = {
    color: `${data.color}`,
  };

  return (
    <div className="feed " style={isOdd(index) ? bgcolor1 : bgcolor2}>
      {" "}
      <i
        className={`   ${data.icon} iconSize  `}
        style={iconColor}
        aria-hidden="true"
      />{" "}
      <div> {data.subtitle}</div> <i>{data.time}</i>
    </div>
  );
}

function isOdd(num) {
  return num % 2 === 1;
}

function ItemCon({ classname, value }) {
  var bgcolor = {
    backgroundColor: `${value.color}`,
    "border-radius": 10,
  };

  return (
    <button
      className={`item-container p-2 `}
      onClick={() => {
        const app_id = document
          .querySelector("script[data-app-id]")
          .getAttribute("data-app-id");
        axios.post("https://nudgelab.jagnani73.com/api/v1/dummy", {
          rewards: 200,
          app_id,
        });
      }}
      style={bgcolor}
    >
      <div className="item-row">
        <i className={`${value.icon} iconSize`} aria-hidden="true" />
        <div>{value.value}</div>
      </div>
      <p>{value.subtitle}</p>
    </button>
  );
}

let data = [
  {
    icon: "fa fa-comment",

    subtitle: "New comments.",
    color: "red",
    time: "10 mins",
  },
  {
    icon: "fa fa-eye",

    subtitle: "Database error.",
    color: "#4a98e0",
    time: "19 mins",
  },
  {
    icon: "fa fa-share-alt",
    value: 67,
    subtitle: "Shares",
    color: "green",
    time: "22 mins",
  },
  {
    icon: "fa fa-users",

    subtitle: "New record, over 40 users.",
    color: "orange",
    time: "30 mins",
  },

  {
    icon: "fa fa-eye",

    subtitle: "CPU overload.",
    color: "#4a98e0",
    time: "45 mins",
  },
  {
    icon: "fa fa-comment",

    subtitle: "New shares.",
    color: "red",
    time: "66 mins",
  },
];

let items = [
  {
    icon: "fa fa-comment",
    value: 44,
    subtitle: "Balance: ₹20000",
    color: "red",
  },
  {
    icon: "fa fa-eye",
    value: 58,
    id: "loan",
    subtitle: "Loan: ₹10,000",
    color: "#4a98e0",
  },
  {
    icon: "fa fa-share-alt",
    value: 67,
    subtitle: "Private schemes: ₹50000",
    color: "green",
  },
  {
    icon: "fa fa-users",
    value: 94,
    subtitle: "Govt Schemes: ₹5000",
    color: "orange",
  },
];

export default Layout;
