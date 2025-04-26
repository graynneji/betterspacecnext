import * as React from "react";
const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#022C22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M5.875 2.5v1.875m8.75-1.875v1.875M2.75 15.625V6.25c0-1.036.84-1.875 1.875-1.875h11.25c1.035 0 1.875.84 1.875 1.875v9.375m-15 0c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875m-15 0v-6.25c0-1.036.84-1.875 1.875-1.875h11.25c1.035 0 1.875.84 1.875 1.875v6.25m-7.5-5h.006v.006h-.006v-.006Zm0 1.875h.006v.006h-.006V12.5Zm0 1.875h.006v.006h-.006v-.006ZM8.375 12.5h.006v.006h-.006V12.5Zm0 1.875h.006v.006h-.006v-.006ZM6.5 12.5h.006v.006H6.5V12.5Zm0 1.875h.006v.006H6.5v-.006Zm5.625-3.75h.006v.006h-.006v-.006Zm0 1.875h.006v.006h-.006V12.5Zm0 1.875h.006v.006h-.006v-.006ZM14 10.625h.006v.006H14v-.006Zm0 1.875h.006v.006H14V12.5Z"
    />
  </svg>
);
export default Calendar;
