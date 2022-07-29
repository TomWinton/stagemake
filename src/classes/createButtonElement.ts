import {inputWithLabel, containerElement} from "../utils/lazy"

export class createSectionItem
{
    rowInput: HTMLInputElement;
    seatLengthInput: HTMLInputElement;
    seatPriority: HTMLInputElement;
    createButton: HTMLButtonElement;
    Container: HTMLDivElement
    constructor(createButton: HTMLButtonElement)
    {
       const row =  inputWithLabel("rowCount","row Count","4");
       this.rowInput = row.getElementsByTagName("input")[0];
       this.Container =  containerElement("createButtonContainer");
       const seat =  inputWithLabel("seatCount","Seat Length","10");
       this.seatLengthInput = seat.getElementsByTagName("input")[0];
       const priority =  inputWithLabel("priorityCount","Priority","1");
       this.seatPriority = priority.getElementsByTagName("input")[0];
       const titleLegend  =<HTMLLegendElement>(document.createElement('legend'));
        titleLegend.innerHTML="Add Section:"
        this.Container.appendChild(titleLegend);
        const inputContainer =<HTMLDivElement>(document.createElement('div'));
        inputContainer.appendChild(seat);
        inputContainer.appendChild(row);
        inputContainer.appendChild(priority);
        const buttonContainer =<HTMLDivElement>(document.createElement('div'));
        buttonContainer.style.clear = "both";
        buttonContainer.appendChild(createButton)
        this.Container.appendChild(inputContainer);
        this.Container.appendChild(buttonContainer);
        this.Container.id = "createButtonContainer";
        this.Container.className = "buttonSection";
    }
}