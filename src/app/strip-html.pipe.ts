import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const strippedString = value.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return this.sanitizer.bypassSecurityTrustHtml(strippedString);
  }

}
