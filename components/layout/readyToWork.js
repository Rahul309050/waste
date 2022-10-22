import classes from "@/styles/layout/readyToWork.module.scss";

const ReadyToWork = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        borderBottom: `2px solid ${props.iconBg}`,
      }}
      className={classes.readyToWork}
    >
      <div className={`container ${classes.readyToWork__content}`}>
        <p className={classes.firstLine}>Ready to work together?</p>
        <p
          // style={{
          //   fontSize:
          //     props.title === "Start Your Cybersecurity Transformation" &&
          //     "70px",
          // }}
          className={classes.secondLine}
          onClick={props.handleShowForm}
        >
          {props.title}
          <span style={{ backgroundColor: props.iconBg }}>
            <svg
              className={classes.activeArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="15.521"
              height="15.687"
              viewBox="0 0 15.521 15.687"
            >
              <g
                id="Group_10930"
                data-name="Group 10930"
                transform="translate(0.286 1)"
              >
                <path
                  id="Path_9311"
                  data-name="Path 9311"
                  d="M10190.062,8589.691h14.234v14.586"
                  transform="translate(-10190.062 -8589.691)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path
                  id="Path_9312"
                  data-name="Path 9312"
                  d="M10204.231,8589.691l-13.809,13.984"
                  transform="translate(-10189.997 -8589.691)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </g>
            </svg>
            <svg
              className={classes.hoveredArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="15.521"
              height="15.687"
              viewBox="0 0 15.521 15.687"
            >
              <g
                id="Group_10930"
                data-name="Group 10930"
                transform="translate(0.286 1)"
              >
                <path
                  id="Path_9311"
                  data-name="Path 9311"
                  d="M10190.062,8589.691h14.234v14.586"
                  transform="translate(-10190.062 -8589.691)"
                  fill="none"
                  stroke={props.iconBg}
                  strokeWidth="2"
                />
                <path
                  id="Path_9312"
                  data-name="Path 9312"
                  d="M10204.231,8589.691l-13.809,13.984"
                  transform="translate(-10189.997 -8589.691)"
                  fill="none"
                  stroke={props.iconBg}
                  strokeWidth="2"
                />
              </g>
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReadyToWork;
