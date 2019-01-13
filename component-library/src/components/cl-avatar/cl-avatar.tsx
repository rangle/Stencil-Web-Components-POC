import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cl-avatar',
  styleUrl: 'cl-avatar.css',
  shadow: true
})
export class ClAvatar {

  @Prop() src: string;

  render() {
    return (
      <div class="container">
        <div class="wrapper">
          <div class="aspect-ratio">
            <div class="media" style={{background: `url(${this.src})`}}></div>
          </div>
        </div>
      </div>
    );
  }
}
