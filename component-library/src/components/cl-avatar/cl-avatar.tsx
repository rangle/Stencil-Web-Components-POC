import { Component, Prop } from '@stencil/core';
import { SystemSpaces } from '../../utils/design-system';

@Component({
  tag: 'cl-avatar',
  styleUrl: 'cl-avatar.css',
  shadow: true
})
export class ClAvatar {

  /**
  * Path to image
  */
  @Prop() src: string;

  /**
  * Space style props
  */
  @Prop() spaces: SystemSpaces;

  render() {
    return (
      <cl-box spaces={this.spaces}>
        <div class="wrapper">
          <div class="aspect-ratio">
            <p>hi there!!</p>
            <div class="media" style={{background: `url(${this.src})`}}></div>
          </div>
        </div>
      </cl-box>
    );
  }
}
