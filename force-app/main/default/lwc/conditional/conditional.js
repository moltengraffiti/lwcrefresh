import { LightningElement, track } from 'lwc';

export default class Conditional extends LightningElement {
    @track displayDiv = false;

    showDivHandler(e) {
        this.displayDiv = e.target.checked;

    }
}