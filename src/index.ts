/* eslint-disable prefer-const */
import Konva from 'konva';
import { stringToArray } from 'konva/lib/shapes/Text';
import {Stage} from "konva/lib/Stage";
import {Bucket} from  "./classes/bucket";
import {DoStuff} from "./utils/doStuff"
import {createSquare, shouldAdd} from "./utils/lazy"
import * as json from "./assets/sample.json"
//import {dbCon} from "./classes/dbStuff"




// const db = new dbCon();
// db.TestConnection(db.con);
const bucket = new Bucket("root","stageContainer", "buttonContainer", "bottomContainer");
const doStuff = new DoStuff(bucket);

//bucket.Stage = Konva.Node.create(json,"stageContainer");
doStuff.createSectionButton();
bucket.ButtonContainer.appendChild(doStuff.createButton);

doStuff.createLineButton();
bucket.ButtonContainer.appendChild(doStuff.lineButton);

doStuff.createTextButton();
bucket.ButtonContainer.appendChild(doStuff.textButton);

doStuff.createTextButton();
bucket.ButtonContainer.appendChild(doStuff.textButton);

doStuff.createExportButton();
bucket.ButtonContainer.appendChild(doStuff.exportButton);






  // adapt the stage on any window resize
