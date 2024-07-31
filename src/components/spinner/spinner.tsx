import { h, Component, Host } from "@stencil/core/internal";

@Component({
    tag: 'uc-spinner',
    styleUrl: './sinner.css', 
    shadow: true
})
export class Spinner{

    render() {
        return (
          <Host>
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Host>
        );
    }

}