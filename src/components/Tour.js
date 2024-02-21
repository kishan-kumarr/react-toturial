import React from "react";

const Tour = (props) => {
  console.log(props);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a
              href={props.data.googleMapsUrl}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <center>
                <h4>{props.data.title}</h4>
              </center>
              {props.data.imageUrl && (
                <img
                  src={props.data.imageUrl}
                  alt="img"
                  style={{ width: "100%" }}
                />
              )}

              <b>{props.data.location}</b>

              <div className="caption">
                <p className="text-primary">
                  {props.data.startDate} - {props.data.endDate}
                </p>
                <p>{props.data.description}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
