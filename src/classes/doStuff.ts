/* eslint-disable prefer-const */
import React from 'react';
import {Rect} from "konva/lib/shapes/Rect";
import {Circle} from "konva/lib/shapes/Circle";
import {Group} from "konva/lib/Group";
import {Text} from "konva/lib/shapes/Text";
import {Transformer} from "konva/lib/shapes/Transformer";
import {shouldAdd, createSquare, createSectionInfo} from '../utils/lazy';
import {Bucket} from  "./bucket";
import { v4 as uuid } from 'uuid';
import { createSectionItem } from './createButtonElement';
export class DoStuff  {
private bucket: Bucket;
private counter: number;
createButton: HTMLElement;
removeButton: HTMLButtonElement;
constructor(theBucket: Bucket) 
{
this.bucket = theBucket;
this.counter = 1;
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

  this.bucket.Layer.children.forEach((child) =>{
  if (shouldAdd(child.attrs["identifier"]))
  {
    if (child.attrs["identifier"] == id)
    {
    
      child.destroy();
    }
    child.clearCache();
    console.log(child);
  }
  else
  {

    child.destroy();
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
    identifier: id,
    anchorSize: 20,     
    anchorStroke: 'red',
  anchorFill: 'yellow',
  borderStroke: 'green',
  borderDash: [3, 3],});
  const group = new Group({
    draggable: true,
    identifier: id
  });
  const rect = new Rect  ({
    x: initialX,
    y: initialY,
    width:rectW,
    height: rectH,
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

this.bucket.Layer.add(group);
this.bucket.Layer.add(transformer);

this.createRemoveButton(id);
this.bucket.BottomContainer.appendChild(this.removeButton);

}}
}