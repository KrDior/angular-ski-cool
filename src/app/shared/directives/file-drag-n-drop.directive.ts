import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
	selector: '[appFileDragDrop]',
})
export class FileDragNDropDirective {
	//@Input() private allowed_extensions : Array<string> = ['png', 'jpg', 'bmp'];
	@Output() private filesChangeEmitter: EventEmitter<FileList> = new EventEmitter();
	//@Output() private filesInvalidEmitter : EventEmitter<File[]> = new EventEmitter();
	@HostBinding('style.background') private background = '#eee';
	@HostBinding('style.border') private borderStyle = '2px dashed';
	@HostBinding('style.border-color') private borderColor = '#696D7D';
	@HostBinding('style.border-radius') private borderRadius = '5px';

	constructor() {}

	@HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.stopPropagation();
		this.background = 'lightgray';
		this.borderColor = 'cadetblue';
		this.borderStyle = '3px solid';
	}

	@HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
		evt.preventDefault();
		evt.stopPropagation();
		this.background = '#eee';
		this.borderColor = '#a7baed';
		this.borderStyle = '2px dashed';
	}

	@HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
		evt.preventDefault();
		evt.stopPropagation();
		this.background = '#eee';
		this.borderColor = '#2b385b';
		this.borderStyle = '2px dashed';
		const files = evt?.dataTransfer?.files as FileList;

		if (files) {
			this.filesChangeEmitter.emit(files);
		}
	}
}
