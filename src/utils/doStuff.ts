/* eslint-disable prefer-const */
import React from 'react';
import {Rect} from "konva/lib/shapes/Rect";
import {Circle} from "konva/lib/shapes/Circle";
import {Group} from "konva/lib/Group";
import {Text} from "konva/lib/shapes/Text";
import {Line} from "konva/lib/shapes/Line";
import {Transformer} from "konva/lib/shapes/Transformer";
import {shouldAdd, createSquare, createSectionInfo, inputWithLabel, containerElement} from './lazy';
import {Bucket} from  "../classes/bucket";
import { v4 as uuid } from 'uuid';
import { createSectionItem } from '../classes/createButtonElement';
import Konva from 'konva';


export class DoStuff  {
private bucket: Bucket;
private counter: number;
createButton: HTMLElement;
removeButton: HTMLButtonElement;
lineButton: HTMLButtonElement;
textButton: HTMLElement;
exportButton: HTMLButtonElement;
sampleButton: HTMLButtonElement;
constructor(theBucket: Bucket) 
{
this.bucket = theBucket;
this.counter = 1;
}
createExportButton = () => 
{
let toLoad= createSquare("export Json" );
toLoad.onclick = this.exportJson.bind(this.bucket);
this.exportButton = toLoad;
}

exportJson = (e) =>
{
  console.log(this.bucket.Layer.toJSON());
}
createLoadSample = () => 
{
let toLoad= createSquare("loadSample" );
toLoad.onclick = this.loadSample.bind(this.bucket);
this.exportButton = toLoad;
}

loadSample = (e) =>
{

  console.log(this.bucket.Stage.toJSON());
}
createRemoveButton = (identifier: string) => 
{
let toLoad= createSquare("Remove Section " + identifier);
toLoad.id =identifier;
toLoad.onclick = this.removeSection.bind(this.bucket);
this.removeButton = toLoad;
}
removeSection = (e) =>
{
  let id = e.target.id;
  console.log(id);
  this.bucket.Layer.children.forEach((child) =>{
    console.log(child);

if (shouldAdd(child.attrs["identifier"]))
  {
    if (child.attrs["identifier"] == id)
    {
      child.remove();
    }
  }
}
);

e.target.remove();
}
createSectionButton = () => 
{
 let toLoad= createSquare("Add Section");
 toLoad.onclick = this.addSection.bind(this.bucket);
 let sectionArea = new createSectionItem(toLoad);
 this.createButton = sectionArea.Container;
}
addSection = () =>
{
  console.log("boop")
  let values = new createSectionInfo();
  console.log(values);
  if (values.shouldProcess)
  {
  let id =  uuid();
  console.log("bucket: ");
  console.log(this.bucket);
  const initialX =100; const initialY=100;
  let rectW = 20 * values.seats; let rectH = 20 * values.rows;
  const transformer =   new Transformer(
    {
    resizeEnabled: false, 
    anchorSize: 10,     
    anchorFill: 'yellow',
    id: id + "_transformer",
   
});
  const group = new Group({
    draggable: true,
    id: id + "_group"
  });
  const rect = new Rect  ({
    x: initialX,
    y: initialY,
    width:rectW,
    height: rectH,
});
const parentGroup = new Group({
  draggable: true,
  identifier: id ,
  // onMouseEnter:this.addHoverEvent.bind(this),
  // onMouseLeave: this.removeHoverEvent.bind(this)
});
group.on('mouseenter', function (e) {
  document.body.style.cursor = "pointer";
});
group.on('mouseleave', function (e) {
  document.body.style.cursor = "default";
});
group.add(rect);
let circleStartX =100; let circleStartY=100;
for (let i = 0; i < values.rows; i++) 
{
  for (let a = 0; a < values.seats; a++) 
{
  let seatID =  uuid();
  const circ = new Circle({    
    x: circleStartX,
    y:circleStartY,
    width:15,
    height:15,
    fill:"red",
    id:seatID,
    seatRow: i,
    seat: a,
    seatName: i.toString()+ a.toString(),
    priority: values.priority,
    isBooked: false,
});
group.add(circ);
circleStartX = circleStartX + 20;
}
circleStartY = circleStartY + 20;
circleStartX=100;
}
//

transformer.nodes([group]);
parentGroup.add(group);
parentGroup.add(transformer)
this.bucket.Layer.add(parentGroup);


this.createRemoveButton(id);
this.bucket.BottomContainer.appendChild(this.removeButton);

}}
createTextButton=()=>
{
  const container = containerElement("textButtonContainer");
  const input =  inputWithLabel("textInput","Add Text","");
  let toLoad= createSquare("Add Text");

  toLoad.onclick = this.addText.bind(this.bucket);
  container.appendChild(input);
  container.appendChild(toLoad);
  this.textButton = container;
}
addText=()=>{
 
  if (
    shouldAdd(document.getElementById("textButtonContainer").getElementsByTagName("input"))
    &&  shouldAdd(document.getElementById("textButtonContainer").getElementsByTagName("input")[0]
  ))
  {

    const id =  uuid();
    const text = new Text({
      x: 100,
      y: 200,
      text: document.getElementById("textButtonContainer").getElementsByTagName("input")[0].value,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black',
      draggable: true
    });

  const group = new Group({
    draggable: true,
    id: id+"_group",
    identifier: id

  });

  const transformer =   new Transformer(
    {

    resizeEnabled: true, 
      
    anchorSize: 10,     
    anchorFill: 'yellow',
    id: id + "_transformer",
    nodes:[text],

  
  

});
group.on('mouseenter', function (e) {
  document.body.style.cursor = "pointer";

});
group.on('mouseleave', function (e) {
  document.body.style.cursor = "default";
});

group.add(text);
group.add(transformer);
console.log(text);
this.bucket.Layer.add(group);
this.createRemoveButton(id);
this.bucket.BottomContainer.appendChild(this.removeButton);
}}
createLineButton = () => 
{
 let toLoad= createSquare("Add Line");
 toLoad.onclick = this.addLine.bind(this.bucket);
 this.lineButton = toLoad;
}
addLine=()=>{
  const id =  uuid();
  const redLine = new Line({
    stroke: 'black',
    strokeWidth: 6,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true,
    width: 100,
    height:25,
    fill: 'black', 
    x: 100,
    y: 200,
    points: [100, 200, 300, 200],


  });
  const group = new Group({
    draggable: true,
    id: id+"_group",
    identifier: id
  });

  const transformer =   new Transformer(
    {
    resizeEnabled: true, 
    anchorSize: 10,     
    anchorFill: 'yellow',
    id: id + "_transformer",
    nodes:[redLine],
});
group.on('mouseenter', function (e) {
  document.body.style.cursor = "pointer";
});
group.on('mouseleave', function (e) {
  document.body.style.cursor = "default";
});
group.add(redLine);
group.add(transformer);
console.log(redLine);
this.bucket.Layer.add(group);
this.createRemoveButton(id);
this.bucket.BottomContainer.appendChild(this.removeButton);
}
}