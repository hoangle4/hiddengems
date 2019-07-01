import React, { Fragment, useEffect } from "react";
import spinner from "./spinner.gif";

const Spinner = ({ onLoad }) => {
  return (
    <Fragment>
      <img src={spinner} onLoad={onLoad} style={{ display: "none" }} />
      <div
        style={{ width: "75px", margin: "auto", display: "block", zIndex: 99 }}
        className="lds-svg ng-scope"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lds-blank"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        >
          <circle
            fill="none"
            stroke="#bd4030"
            strokeWidth="5"
            cx="50"
            cy="50"
            r="46"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-stroke="{{config.c3}}"
            ng-attr-r="{{config.r3}}"
          >
            <animate
              repeatCount="indefinite"
              begin="-1s"
              dur="1"
              keyTimes="0;0.2;0.4;0.6;1"
              values="0 0 0 144.51326206513048 0 144.51326206513048;0 0 144.51326206513048 0 0 144.51326206513048;0 0 144.51326206513048 0 0 144.51326206513048;0 144.51326206513048 0 144.51326206513048 0 144.51326206513048;0 144.51326206513048 0 144.51326206513048 0 144.51326206513048"
              calcMode="linear"
              attributeName="stroke-dasharray"
            />
          </circle>
          <circle
            fill="none"
            stroke="#e0b83e"
            strokeWidth="5"
            cx="50"
            cy="50"
            r="40"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-stroke="{{config.c2}}"
            ng-attr-r="{{config.r2}}"
          >
            <animate
              repeatCount="indefinite"
              begin="-0.92s"
              dur="1"
              keyTimes="0;0.2;0.4;0.6;1"
              values="0 0 0 125.66370614359172 0 125.66370614359172;0 0 125.66370614359172 0 0 125.66370614359172;0 0 125.66370614359172 0 0 125.66370614359172;0 125.66370614359172 0 125.66370614359172 0 125.66370614359172;0 125.66370614359172 0 125.66370614359172 0 125.66370614359172"
              calcMode="linear"
              attributeName="stroke-dasharray"
            />
          </circle>
          <circle
            fill="none"
            stroke="#7f9626"
            strokeWidth="5"
            cx="50"
            cy="50"
            r="34"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-stroke="{{config.c1}}"
            ng-attr-r="{{config.r1}}"
          >
            <animate
              repeatCount="indefinite"
              begin="-0.84s"
              dur="1"
              keyTimes="0;0.2;0.4;0.6;1"
              values="0 0 0 106.81415022205297 0 106.81415022205297;0 0 106.81415022205297 0 0 106.81415022205297;0 0 106.81415022205297 0 0 106.81415022205297;0 106.81415022205297 0 106.81415022205297 0 106.81415022205297;0 106.81415022205297 0 106.81415022205297 0 106.81415022205297"
              calcMode="linear"
              attributeName="stroke-dasharray"
            />
          </circle>
          <g transform="rotate(180 50 50)">
            <circle
              fill="none"
              stroke="#bd4030"
              strokeWidth="5"
              cx="50"
              cy="50"
              r="46"
              ng-attr-stroke-width="{{config.width}}"
              ng-attr-stroke="{{config.c3}}"
              ng-attr-r="{{config.r3}}"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.43999999999999995s"
                dur="1"
                keyTimes="0;0.2;0.4;0.6;1"
                values="0 0 0 144.51326206513048 0 144.51326206513048;0 0 144.51326206513048 0 0 144.51326206513048;0 0 144.51326206513048 0 0 144.51326206513048;0 144.51326206513048 0 144.51326206513048 0 144.51326206513048;0 144.51326206513048 0 144.51326206513048 0 144.51326206513048"
                calcMode="linear"
                attributeName="stroke-dasharray"
              />
            </circle>
            <circle
              fill="none"
              stroke="#e0b83e"
              strokeWidth="5"
              cx="50"
              cy="50"
              r="40"
              ng-attr-stroke-width="{{config.width}}"
              ng-attr-stroke="{{config.c2}}"
              ng-attr-r="{{config.r2}}"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.52s"
                dur="1"
                keyTimes="0;0.2;0.4;0.6;1"
                values="0 0 0 125.66370614359172 0 125.66370614359172;0 0 125.66370614359172 0 0 125.66370614359172;0 0 125.66370614359172 0 0 125.66370614359172;0 125.66370614359172 0 125.66370614359172 0 125.66370614359172;0 125.66370614359172 0 125.66370614359172 0 125.66370614359172"
                calcMode="linear"
                attributeName="stroke-dasharray"
              />
            </circle>
            <circle
              fill="none"
              stroke="#7f9626"
              strokeWidth="5"
              cx="50"
              cy="50"
              r="34"
              ng-attr-stroke-width="{{config.width}}"
              ng-attr-stroke="{{config.c1}}"
              ng-attr-r="{{config.r1}}"
            >
              <animate
                repeatCount="indefinite"
                begin="-0.64s"
                dur="1"
                keyTimes="0;0.2;0.4;0.6;1"
                values="0 0 0 106.81415022205297 0 106.81415022205297;0 0 106.81415022205297 0 0 106.81415022205297;0 0 106.81415022205297 0 0 106.81415022205297;0 106.81415022205297 0 106.81415022205297 0 106.81415022205297;0 106.81415022205297 0 106.81415022205297 0 106.81415022205297"
                calcMode="linear"
                attributeName="stroke-dasharray"
              />
            </circle>
          </g>
        </svg>
      </div>
    </Fragment>
  );
};
export default Spinner;
