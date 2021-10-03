import React from "react";

import gamesShocIcon from "./../../../assets/icons/gamesShocIcon.svg";
import gamesStarIcon from "./../../../assets/icons/gamesStarIcon.svg";
import gamesTrophyIcon from "./../../../assets/icons/gamesTrophyIcon.svg";
import SearchIcon from "./../../../assets/icons/SearchIcon.svg";
import Button from "../../UI/Button";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["input-container"]}>
        <img src={SearchIcon} alt="search" />
        <input type="text" placeholder="What’s your game?" />
      </div>
      <div className={styles["btn-container"]}>
        <Button
          value="featured"
          icon={gamesStarIcon}
          iconLeft={true}
          className={styles["icon-fix"]}
        />
        <Button
          value="instant"
          icon={gamesShocIcon}
          iconLeft={true}
          className={styles["icon-fix"]}
        />
        <Button
          value="tournaments"
          icon={gamesTrophyIcon}
          iconLeft={true}
          className={styles["icon-fix"]}
        />
      </div>
    </div>
  );
}

export default SearchBar;
