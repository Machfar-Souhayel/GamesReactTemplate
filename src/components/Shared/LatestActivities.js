import React from "react";

import Icon from "./../../assets/icons/LatestActivitiesTablesIcons/Icon.svg";
import Button from "./../UI/Button";
import LatestActivitiesTable from "./LatestActivitiesTable";
import styles from "./LatestActivities.module.css";

const tableData = [
  {
    game: "Fishing Disco",
    player: "Bessie Cooper",
    betId: "30320267096",
    payout: "0.70X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },
  {
    game: "Ninjax",
    player: "Eleanor Pena",
    betId: "30320267095",
    payout: "2.21X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },
  {
    game: "Dragons Gate",
    player: "Cody Fisher",
    betId: "30320267094",
    payout: "3.01X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },

  {
    game: "King of Glory",
    player: "Arlene McCoy",
    betId: "30320267093",
    payout: "1.11X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },
  {
    game: "Dice",
    player: "Leslie Alexander",
    betId: "30320267092",
    payout: "0.00X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },
  {
    game: "League Of Legends",
    player: "Theresa Webb",
    betId: "30320267091",
    payout: "3.19X",
    profit: "+ 0.00312150",
    gameIcon: Icon,
    profitIcon: Icon,
  },
];
function LatestActivities(props) {
  return (
    <section className={`${styles["latest-activities"]} ${props.className}`}>
      <div className={styles["latest-activities-wrapper"]}>
        <div className={styles["latest-activities-content"]}>
          <div>
            <h2>Latest Activities</h2>
            <p>Each time you reach a new level you'll get a reward </p>
          </div>
          <div>
            <Button value="LATEST BET" />
            <Button value="CONTEST" />
          </div>
        </div>
      </div>
      <LatestActivitiesTable data={tableData} />
    </section>
  );
}

export default LatestActivities;
