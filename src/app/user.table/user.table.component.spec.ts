import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserTableComponent } from './user.table.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { User, UserService } from '../user.service';
import { of } from 'rxjs';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('UserTableComponent', () => {
const mockData: User[] = [{
    "id": 1,
    "name": "Sandhya",
    "email": "sandhya@gmail.com",
    "phone": "0899498428",
    "profileImage": ""
  },
  {
    "id": 2,
    "name": "Ram",
    "email": "ram@gmail.com",
    "phone": "0899498428",
    "profileImage": ""
  }];
  
  beforeEach(async () => {

    const userServiceSpy = jasmine.createSpyObj('UserService',['getUsers']);
    
    userServiceSpy.getUsers.and.returnValue(of(mockData));
    
    await TestBed.configureTestingModule({
      imports: [UserTableComponent, HttpClientTestingModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {provide: UserService, useValue: userServiceSpy}
    ]
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have the 'users' object`,  fakeAsync(() => {
    const fixture = TestBed.createComponent(UserTableComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    tick(150);
    expect(component.users.length).toBeGreaterThan(0);
  }));

  it('should render table', () => {
    const fixture = TestBed.createComponent(UserTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeDefined();
  });
});
