import React from "react";
import Chellek from "./Chellek";
import Pivebottle from "./Pivebottle";
import Tequila from "./Tequila";
import Vodka from "./Vodka";
import Wine from "./Wine";
import Coctails from "./Coctails";
import Noalcohol from "./Noalcohol";
import Shots from "./Shots";
import Raki from "./Raki";
import Whisky from "./Whisky";

export default function Cask() {
  return (
    <div className="container">
      <Chellek />
      <Pivebottle />
      <Tequila />
      <Vodka />
      <Wine />
      <Coctails />
      <Noalcohol />
      <Shots />
      <Raki />
      <Whisky />
    </div>
  );
}
