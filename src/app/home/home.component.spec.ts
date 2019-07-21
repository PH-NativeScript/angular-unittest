import { HomeComponent } from './home.component';
import { DiceService } from '../services/dice.service';

describe('HomeComponent', () => {
  it('should return 7 when addition method is called with numbers 3 and 4', () => {
    // Arrange
    const diceService = new DiceService();
    const component = new HomeComponent(diceService);
    const number1 = 3;
    const number2 = 4;
    const expected = 7;
    let actual: number;

    // act
    actual = component.addition(number1, number2);

    // Assert
    expect(actual).toBe(expected);
  });
});

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
