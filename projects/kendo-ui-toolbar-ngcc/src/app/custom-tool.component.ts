import { Component, Input, TemplateRef, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ToolBarToolComponent } from '@progress/kendo-angular-toolbar';

export function outerWidth(element: any): number {
    let width = element.offsetWidth;
    const style = getComputedStyle(element);

    width += parseFloat(style.marginLeft) || 0 + parseFloat(style.marginRight) || 0;
    return width;
}

@Component({
    providers: [{ provide: ToolBarToolComponent, useExisting: forwardRef(() => CustomToolComponent) }],
    selector: 'app-toolbar-dropdownlist',
    template: `
        <ng-template #toolbarTemplate>
            <span #toolbarElement>
                {{ text }}
                <kendo-dropdownlist [(value)]="value" [data]="items" [defaultItem]="'Select sport...'"> </kendo-dropdownlist>
            </span>
        </ng-template>
        <ng-template #popupTemplate>
            <span #popupElement>
                <button kendoButton [icon]="'heart'" (click)="opened = true">Fav Sport</button>
            </span>

            <kendo-dialog title="Select a favourite sport" *ngIf="opened" (close)="opened = false">
                <kendo-dropdownlist [(value)]="value" [data]="items" [defaultItem]="'Select sport...'"> </kendo-dropdownlist>
                <kendo-dialog-actions>
                    <button kendoButton (click)="opened = false">Ok</button>
                </kendo-dialog-actions>
            </kendo-dialog>
        </ng-template>
    `
})
export class CustomToolComponent extends ToolBarToolComponent {
    @Input() public text: string;

    @ViewChild('toolbarTemplate', { static: true }) public toolbarTemplate: TemplateRef<any>;
    @ViewChild('toolbarElement', { static: true }) public toolbarElement: ElementRef;

    @ViewChild('popupTemplate', { static: true }) public popupTemplate: TemplateRef<any>;
    @ViewChild('popupElement', { static: true }) public popupElement: ElementRef;

    public get outerWidth(): number {
        if (this.toolbarElement) {
            return outerWidth(this.toolbarElement.nativeElement);
        }
    }

    public value: string;
    public items: Array<string> = ['Badminton', 'Tennis', 'Squash'];
    public opened = false;
}
