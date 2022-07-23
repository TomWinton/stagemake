/* eslint-disable prefer-const */
import Konva from 'konva';
import { stringToArray } from 'konva/lib/shapes/Text';
import {Stage} from "konva/lib/Stage";
import {Bucket} from  "./classes/bucket";
import {DoStuff} from "./classes/doStuff"
import {createSquare} from "./utils/lazy"

console.log("boop");
const bucket = new Bucket("root","stageContainer", "buttonContainer", "bottomContainer");
const doStuff = new DoStuff(bucket);
doStuff.createSectionButton();
console.log(doStuff.createButton);
bucket.ButtonContainer.appendChild(doStuff.createButton);
  // adapt the stage on any window resize
