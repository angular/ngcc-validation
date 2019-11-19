import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    styles: [`
        my-content ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        my-content li {
            font-size: 1.2em;
            background: 0 0;
            border-radius: 0;
            border-width: 0 0 1px;
            border-color: rgba(33, 37, 41, 0.125);
            border-style: solid;
            line-height: 1.5em;
            padding: 1.09em .84em 1.23em .84em;
        }

        my-content li:last-child {
            border: 0;
        }
    `],
    selector: 'my-content',
    template: `
        <div id="Inbox" *ngIf="selectedItem === 'Inbox'">
            <ul class="inboxList">
                <li>
                    <h6>Monday meeting</h6>
                    <p>Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.</p>
                </li>
                <li>
                    <h6>I'm sorry, Tom</h6>
                    <p>Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...</p>
                </li>
            </ul>
        </div>
        <div id="Notifications" *ngIf="selectedItem === 'Notifications'">
            <ul>
                <li>Monday meeting</li>
                <li>Regarding org chart changes</li>
                <li>Meeting with Cliff</li>
                <li>Global Marketing Meeting</li>
                <li>Out tonight with collegues?</li>
            </ul>
        </div>
        <div id="Calendar" *ngIf="selectedItem === 'Calendar'">
            <ul>
                <li>
                    <h6>11/5 Monday</h6>
                    <p>Martha Birthday</p>
                </li>
                <li>
                    <h6>15/6 Sunday</h6>
                    <p>Job interview for internal position</p>
                </li>
            </ul>
        </div>
        <div id="Attachments" *ngIf="selectedItem === 'Attachments'">
            <ul>
                <li>Build enterprise apps</li>
                <li>Fw: Regarding Multiline textbox</li>
                <li>Away next week</li>
                <li>Fw: Your Costume is ready</li>
                <li>Update completed</li>
            </ul>
        </div>
        <div id="Favourites" *ngIf="selectedItem === 'Favourites'">
            <ul>
                <li>70% Discount!</li>
                <li>90% Discount!</li>
                <li>One time offer!</li>
            </ul>
        </div>
    `
})
export class ContentComponent {
    @Input() selectedItem: string;
}
