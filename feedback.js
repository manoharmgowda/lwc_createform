import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Feedback extends NavigationMixin(LightningElement) {
    navigatetonewHRFeedback(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "HR_FeedBack__c"
            }
        });
    }
    viewHRFeedback(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "HR_FeedBack__c"
            }
        });
    }
   
}