/* eslint-disable prefer-const */
import {Layer} from "konva/lib/Layer";
import {Stage} from "konva/lib/Stage";
import Konva from 'konva';
import {shouldAdd} from '../utils/lazy';

export class Bucket 
{

Base: HTMLDivElement;
ButtonContainer: HTMLDivElement;
BottomContainer: HTMLDivElement;
Stage: Stage;
Layer: Layer;
constructor(baseId: string, stageContainer: string, buttonContainer: string, bottomContainer: string) 
    {
    this.Base = document.getElementById(baseId) as HTMLDivElement; 
    let containerElement =  document.getElementById(stageContainer);
    if(shouldAdd(containerElement) )
    {
    this.Stage =new Konva.Stage({
        container: stageContainer
        , width: 650 ,height:450
        
        
      });
      this.Layer = new Konva.Layer();
      this.Stage.add(this.Layer);
    }
    else
    {
      throw console.error(("No container element. BLARGH"));
      
    }

    let  buttonContainerElement =  document.getElementById(buttonContainer) ;
    if(shouldAdd(buttonContainerElement))
    {
      buttonContainerElement.classList.add("formGroup");
      this.ButtonContainer= buttonContainerElement as HTMLDivElement;
    }
    else
    {
      throw console.error(("No button container element. BLARGH"));      
    }
    let  bottomContainerElement =  document.getElementById(bottomContainer) ;
    if(shouldAdd(bottomContainerElement))
    {
      bottomContainerElement.classList.add("buttongroup");
      this.BottomContainer = bottomContainerElement as HTMLDivElement;
    }
    else
    {
      throw console.error(("No bottom container element. BLARGH"));
      
    }
    
    
}

}
export default Bucket;


