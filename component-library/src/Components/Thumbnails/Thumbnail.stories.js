import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import "./Thumbnail.css";
storiesOf("Thumbnails", module)
  .add("Test", () => (
    <Thumbnail />
  ))