import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'rc-home',
    host: {
        class: 'flex flex-col gap-8 justify-center items-center h-screen',
    },
    template: `
    <h1 class="text-3xl">Bienvenue dans le programme EasyAngular</h1>
    <img ngSrc="./big-logo.png" alt="Logo de EasyAngular" width="521" height="536" priority="" />
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage]
})
export class HomeComponent {}
