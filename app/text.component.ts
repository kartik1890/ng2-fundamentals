import { Component } from '@angular/core'

@Component({
selector: 'text-box',
template: 
`<label>{{nameLabel}}</label> 
<input type="text" name="name" value={{popvalue}}> 
<br>
<input type="submit" value="Submit">
`,
})
export class TextComponent{
    nameLabel: string ='First Name';
    popvalue: string= 'Enter name here';
} 