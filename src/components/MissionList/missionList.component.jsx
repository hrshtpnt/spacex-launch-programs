import React from "react";
import Mission from "../Mission/mission.component";
import "./missionList.style.css";

function MissionList({ missionList }) {
  return (
    <div className="missionList column right">
      {missionList.map((launch) => (
        <Mission
          flight_number={launch.flight_number}
          mission_name={launch.mission_name}
          launch_year={launch.launch_year}
          success={launch.launch_success}
          key={launch.flight_number}
          imagePath={launch.links.mission_patch_small}
          mission_id={launch.mission_id}
          landing={launch.rocket.first_stage.cores[0].land_success}
        />
      ))}
    </div>
  );
}

export default MissionList;
