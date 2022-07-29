
export function shouldAdd(thing : any )
{
    if (thing != null && thing != undefined && thing.toString().length > 0)
    {
        return true;
    }
    return false;
}

export function okAsNumber(thing : any )
{
    if (thing != null && thing != undefined && thing.toString().length > 0 && !isNaN(parseInt(thing.toString())))
    {
        return true;
    }
    return false;
}
export function containerElement (id: string) 
{
    const Container =<HTMLDivElement>(document.createElement('div'));
    Container.id = id;
    Container.className = "buttonSection";
    console.log(Container)
    return Container

}
export class createSectionInfo
{
    shouldProcess: boolean;
    rows: number;
    seats: number;
    priority: string;
    constructor()
    {
        this.shouldProcess = true;
        const cont = document.getElementById("createButtonContainer");
        console.log(cont);
        if (shouldAdd(cont) &&         cont.getElementsByTagName("input").length == 3
        &&  okAsNumber( cont.getElementsByTagName("input")[0].value) &&
         okAsNumber( cont.getElementsByTagName("input")[1].value) 
        )
        {
            this.seats= parseInt( cont.getElementsByTagName("input")[0].value);
            this.rows= parseInt( cont.getElementsByTagName("input")[1].value);
            if (shouldAdd( cont.getElementsByTagName("input")[2].value))
            {
                    this.priority = cont.getElementsByTagName("input")[2].value;
            }
        }       
        else
        {
            this.shouldProcess = false;
        }
    }
   

}

export function inputWithLabel(id: string  , labelName: string, value: string ) : HTMLElement
{
  const input =   <HTMLInputElement>(document.createElement('input'));
  input.value = value;
  input.id = id;

  const label = <HTMLLabelElement>(document.createElement('label'));
   label.htmlFor = id;
   label.innerHTML = labelName;
  const container = <HTMLDivElement>(document.createElement('div'));
  container.classList.add("formgroup");
  container.appendChild(label);
  container.appendChild(input);
  return container;
}
export function createSquare(name: string) : HTMLButtonElement {
    const square =  <HTMLButtonElement>(document.createElement('button'));
    square.innerHTML = name;

return square;
}
