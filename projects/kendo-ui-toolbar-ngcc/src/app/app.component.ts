import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public lastAction = '';

    public splitButtonData: Array<any> = [
        {
            text: 'Keep Text Only',
            icon: 'paste-plain-text',
            click: (ev: any) => {
                console.log('Keep Text Only', ev);
                this.onClick('Splitbutton option');
            }
        },
        {
            text: 'Paste as HTML',
            icon: 'paste-as-html',
            click: ev => {
                console.log('Paste as HTML', ev);
                this.onClick('Splitbutton option');
            }
        },
        {
            text: 'Paste Markdown',
            icon: 'paste-markdown',
            click: ev => {
                console.log('Paste Markdown', ev);
                this.onClick('Splitbutton option');
            }
        },
        {
            text: 'Set Default Paste',
            click: ev => {
                console.log('Set Default Paste', ev);
                this.onClick('Splitbutton option');
            }
        }
    ];

    public dropdownButtonData: Array<any> = [
        {
            text: 'Paste',
            icon: 'paste',
            click: () => {
                console.log('Paste');
                this.onClick('Dropdownbutton option');
            }
        },
        {
            text: 'Keep Text Only',
            icon: 'paste-plain-text',
            click: () => {
                console.log('Keep Text Only');
                this.onClick('Dropdownbutton option');
            }
        },
        {
            text: 'Paste as HTML',
            icon: 'paste-as-html',
            click: () => {
                console.log('Paste as HTML');
                this.onClick('Dropdownbutton option');
            }
        },
        {
            text: 'Paste Markdown',
            icon: 'paste-markdown',
            click: () => {
                console.log('Paste Markdown');
                this.onClick('Dropdownbutton option');
            }
        },
        {
            text: 'Set Default Paste',
            click: () => {
                console.log('Set Default Paste');
                this.onClick('Dropdownbutton option');
            }
        }
    ];

    public onClick(msg: string): void {
        console.log('Clicked: ', msg);
        this.lastAction = msg;
    }
}
