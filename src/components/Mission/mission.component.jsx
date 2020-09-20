import React from "react";
import "./mission.style.css";

function Mission({
  flight_number,
  mission_name,
  launch_year,
  success,
  imagePath,
  mission_id,
  landing
}) {
  return (
    <div className="card">
      <div className="imageSection">
        <img src={imagePath} height="150px" width="150px" alt="launch_image" />
      </div>
      <h3>{`${mission_name} # ${flight_number}`}</h3>
      {mission_id.length > 0 && (
        <div>
          <strong>Mission Ids: </strong>
          {
            <ul>
              {mission_id.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          }
        </div>
      )}
      <div className="missionDetails">
        <strong>Launch Year: </strong>
        {launch_year}
      </div>
      <div className="missionDetails">
        <strong>Successful Launch: </strong>
        {success !== null && success.toString()}
      </div>
      <div className="missionDetails">
        <strong>Successful Land: </strong>
        {landing !== null && landing.toString()}
      </div>
    </div>
  );
}

export default Mission;
