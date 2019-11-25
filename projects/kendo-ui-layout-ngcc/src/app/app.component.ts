import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent, PanelBarExpandMode } from '@progress/kendo-angular-layout';

@Component({
    selector: 'app-root',
    template: `
      <!-- Overlay mini, not expanded drawer with items and selection -->
      <button class="drawer-btn" kendoButton icon="menu" look="flat" (click)="overlayDrawer.toggle()">Overlay Mini Drawer
      </button>

      <kendo-drawer-container>
          <kendo-drawer #overlayDrawer
              [items]="items"
              [mini]="true"
              [expanded]="false"
              (select)="onSelect($event)"
              [mode]="'overlay'">
          </kendo-drawer>

          <kendo-drawer-content>
            <my-content [selectedItem]="selected"></my-content>
          </kendo-drawer-content>
      </kendo-drawer-container>

      <!-- Push expanded drawer in mini mode -->
      <kendo-drawer-container>
        <kendo-drawer #pushDrawer
            [mode]="'push'"
            [(expanded)]="expanded">
            <ng-template kendoDrawerTemplate>
                <form class="k-form" *ngIf="expanded">
                    <label class="k-form-field">
                        <span>First Name</span>
                        <input class="k-textbox" placeholder="Your Name" />
                    </label>
                    <label class="k-form-field">
                        <button type="button" class="k-button" (click)="pushDrawer.toggle()">Submit</button>
                    </label>
                </form>
            </ng-template>
        </kendo-drawer>
          <kendo-drawer-content>
              <button class="k-button" (click)="pushDrawer.toggle()">Toggle the Drawer</button>
          </kendo-drawer-content>
      </kendo-drawer-container>

      <!-- PanelBar with items -->
      <kendo-panelbar [items]="panelBarItems">
        <ng-template kendoPanelBarItemTemplate let-dataItem>
            <p>Custom template</p>
            <p>{{dataItem.content}}</p>
        </ng-template>
      </kendo-panelbar>

      <!-- PanelBar with full expanded mode of items -->
      <kendo-panelbar
        [expandMode]="expandMode"
        [height]="height + 'px'"
        (stateChange)="onPanelChange($event)">
        <kendo-panelbar-item [title]="'Invasion Games'" [expanded]="true">
          <kendo-panelbar-item [title]="'Hockey'"></kendo-panelbar-item>
          <kendo-panelbar-item [title]="'Netball'"></kendo-panelbar-item>
      </kendo-panelbar-item>
      <kendo-panelbar-item [title]="'Invasion Games'">
        <kendo-panelbar-item [title]="'Rugby'"></kendo-panelbar-item>
        <kendo-panelbar-item [title]="'Basketball'"></kendo-panelbar-item>
      </kendo-panelbar-item>
      </kendo-panelbar>

      <!-- Splitter with different orientations -->
      <kendo-splitter orientation="horizontal" style="height: 200px;">
        <kendo-splitter-pane size="20%"> <h3>Left pane</h3> </kendo-splitter-pane>
        <kendo-splitter-pane> <h3>Middle pane</h3> </kendo-splitter-pane>
        <kendo-splitter-pane size="20%"> <h3>Right pane</h3> </kendo-splitter-pane>
      </kendo-splitter>

      <kendo-splitter orientation="vertical" style="height: 200px;">
        <kendo-splitter-pane> <h3>Top pane</h3> </kendo-splitter-pane>
        <kendo-splitter-pane> <h3>Bottom pane</h3> </kendo-splitter-pane>
      </kendo-splitter>

      <!-- Splitter with perisiting pane sizes -->
      <kendo-splitter style="height: 200px;">
        <kendo-splitter-pane [(size)]="sidebarSize" min="5%">
            <h3>Sidebar</h3>
        </kendo-splitter-pane>

        <kendo-splitter-pane>
            <h3>Main pane</h3>
        </kendo-splitter-pane>
      </kendo-splitter>

      <!-- Tabstrib with selected tab initially -->
      <kendo-tabstrip>
        <kendo-tabstrip-tab [title]="'Tab 1'">
          <ng-template kendoTabContent>
            <p>Tab 1 Content</p>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab [title]="'Tab 2'" [selected]="true">
          <ng-template kendoTabContent>
            <p>Tab 2 Content</p>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab [title]="'Tab 3'">
          <ng-template kendoTabContent>
            <p>Tab 3 Content</p>
          </ng-template>
        </kendo-tabstrip-tab>
      </kendo-tabstrip>

      <!-- Tabstrib with ngFor rendered tabs -->
      <kendo-tabstrip [ngStyle]="{'width': '400px'}">
        <kendo-tabstrip-tab
          *ngFor="let item of tabstribItems let i=index"
          [title]="item.city"
          [selected]="i == selectedTab"
          [disabled]="item.disabled"
        >
            <ng-template kendoTabContent>
              <div class="weather">
                <h4>{{item.temp}}<span>&ordm;C</span></h4>
                <p>Weather in {{item.city}} is {{item.weather}}.</p>
              </div>
            </ng-template>
        </kendo-tabstrip-tab>
      </kendo-tabstrip>
      `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        my-app { padding: 0; }
        .k-button.k-flat.drawer-btn { border: 2px solid; border-color: red !important; }
        kendo-tabstrip p {
            margin: 0;
            padding: 8px;
        }

        kendo-splitter-pane {
            padding: 16px;
        }
      `]
})
export class AppComponent {
    public expanded = true;
    public selected = 'Inbox';
    public baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
    public expandMode: number = PanelBarExpandMode.Full;
    public kendoPanelBarExpandMode: any = PanelBarExpandMode;
    public height = 320;

    public selectedTab = 1;
    public tabstribItems: any = [{
        disabled: true,
        city: 'Paris',
        temp: 17,
        weather: 'rainy'
    }, {
        disabled: false,
        city: 'New York',
        temp: 29,
        weather: 'sunny'
    }, {
        disabled: false,
        city: 'Sofia',
        temp: 23,
        weather: 'cloudy'
    }, {
        disabled: false,
        city: 'London',
        temp: 19,
        weather: 'cloudy'
    }]

    public panelBarItems: Array<any> = [
        { title: 'First item', content: 'First item content', expanded: true },
        {
            title: 'Second item', children: [
                { title: 'Child item' }
            ]
        }
    ];

    private sidebarSizing: string = localStorage.getItem('sidebarSize') || '20%';
    public get sidebarSize(): string {
        return this.sidebarSizing;
    }
    public set sidebarSize(newSize: string) {
        this.sidebarSizing = newSize;
        localStorage.setItem('sidebarSize', newSize);
    }

    public items: Array<DrawerItem> = [
        { text: 'Inbox', icon: 'k-i-inbox', selected: true },
        { separator: true },
        { text: 'Notifications', icon: 'k-i-bell' },
        { text: 'Calendar', icon: 'k-i-calendar' },
        { separator: true },
        { text: 'Attachments', icon: 'k-i-hyperlink-email' },
        { text: 'Favourites', icon: 'k-i-star-outline' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }


    public onChange(event: any): void {
        this.expandMode = parseInt(event.target.value, 10);
    }

    public onHeightChange(event: any): void {
        this.height = parseInt(event.target.value, 10);
    }

    public onPanelChange(event: any): void { console.log('stateChange: ', event); }
}
