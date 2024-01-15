import React from "react";
import heads from "./quarter-heads.png";
import tails from "./quarter-tails.png";

/** A coin display. Can be heads or tails.
 *
 * Props: face (string)
 *
 * State: none
 */

function Coin({ face }) {
  return ( <img
    src={face === "heads" ? heads : tails}
    />)
}

export default Coin;