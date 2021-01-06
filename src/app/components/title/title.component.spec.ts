import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  Testing the @Output of a Component
  it('should correctly @Output value of text input in component', () => {
    spyOn(component.changeTitleEvent, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    const inputText = (fixture.nativeElement.querySelector('input').value =
      'A new title');

    button.click();
    fixture.detectChanges();

    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText);
  });
});
