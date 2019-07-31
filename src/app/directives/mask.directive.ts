import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mask]',
})
export class MaskDirective {
    @Input('mask') mask: String;

    constructor(private element: ElementRef) {
    }

    @HostListener('input', ['$event']) onInputChange(event) {
        if (event.inputType == 'deleteContentBackward')
            return;
        const initialValue = this.element.nativeElement.value;
        initialValue.replace(/[^0-9]*/g, '');
        if (initialValue !== this.element.nativeElement.value) {
            event.storPropagation();
        }

        this.element.nativeElement.value = this.format(this.mask, initialValue);
    }

    format(mask: String, value: any): String {
        let text = '';
        let data = value;
        let c, m, i, x;

        for (i = 0, x = 1; x && i < mask.length; i++) {
            c = data.charAt(i);
            m = mask.charAt(i);

            switch (mask.charAt(i)) {
                case '#':
                    if (/\d/.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;
            }
        }
        return '';
    }
}