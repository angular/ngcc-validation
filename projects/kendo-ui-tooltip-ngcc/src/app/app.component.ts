import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Basic config -->
    <div class="tooltip" kendoTooltip filter="span">
      <span href="#" title="Canton - 26,300,000" id="canton">Canton</span>
    </div>

    <!-- Closable tooltip -->
    <div kendoTooltip position="right" closable="true" showOn="click">
      <button class="k-button" title="Closable tooltip content">Show tooltip</button>
    </div>

    <!-- Positioning of the tooltip -->
    <div class="wrapper">
      <div kendoTooltip class="right" position="right">
        <button class="k-button" title="This tooltip is on the right">
          Right
        </button>
      </div>
      <div kendoTooltip class="left" position="left">
        <button class="k-button" title="This tooltip is on the left">
          Left
        </button>
      </div>
      <div kendoTooltip class="top" position="top">
        <button class="k-button" title="This tooltip is on the top">
          Top
        </button>
      </div>
      <div kendoTooltip class="bottom" position="bottom">
        <button class="k-button" title="This tooltip is on the bottom">
          Bottom
        </button>
      </div>
    </div>

    <!-- Template given to a tooltip -->
    <div kendoTooltip
      filter=".dance"
      [titleTemplate]="titleTemplate"
      [tooltipTemplate]="template"
      position="top"
      tooltipWidth="400">

      <ng-template #titleTemplate let-anchor>
          {{ anchor.nativeElement.getAttribute("data-name") }}
      </ng-template>
      <ng-template #template let-anchor>
          {{ anchor.nativeElement.getAttribute("data-description") }}
      </ng-template>

      <h2>List of dances</h2>
      <ul *ngFor="let dance of dances">
        <li class="dance"
          [attr.data-name]="dance.danceName"
          [attr.data-description]="dance.description">
          {{ dance.danceName }}
        </li>
      </ul>
    </div>
    <!-- Open, toggle and hide a tooltip programatically -->
    <div kendoTooltip #tooltip="kendoTooltip" [tooltipTemplate]="anchorTemplate" showOn="none" position="left" filter='a'>
      <div>
        Click the button to show the tooltip with
        <a #first href="http://example.com/first">first link</a>
        as an anchor.
        <button class="k-button" (click)="tooltip.show(first)">Show tooltip</button>
      </div>
      <div>
        Click the button to toggle the tooltip with
        <a #second href="http://example.com/second">second link</a>
        as an anchor.
        <button class="k-button" (click)="tooltip.toggle(second)">Toggle tooltip</button>
      </div>
      <div>
        Hide tooltip
        <button class="k-button" (click)="tooltip.hide()">Hide tooltip</button>
      </div>
    </div>

    <ng-template #anchorTemplate let-anchor>
        <span>{{ anchor.nativeElement.getAttribute("href") }}</span>
    </ng-template>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .wrapper div {
        flex-basis: 50%;
        text-align: center;
        margin-bottom: 50px;
    }
    button {
        padding: 10px 50px;
    }
    .wrapper .top,
    .wrapper .bottom {
        margin-bottom: 0;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }

    li {
      padding: 5px;
      border: 1px solid #ff6757;
      color: #ff6757;
      width: 100px;
      text-align: center;
      border-radius: 5px;
    }
    `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public dances = [
    {
        danceName: 'Tango',
        description: 'Tango is a partner dance which originated in the 1880s along the River Plate, the natural border between Argentina and Uruguay.' },
    {
        danceName: 'Flamenco',
        description: 'Flamenco is a Spanish art form made up of three parts: guitar playing ("guitarra"), song ("cante"), and dance ("baile").'
    },
    {
        danceName: 'Pasodoble',
        description: 'Pasodoble (Spanish: double step) is Spanish a dance that emulates the movements of a bullfight.'
    }
];
}
