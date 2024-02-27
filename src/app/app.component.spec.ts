import {
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  Router,
  provideRouter,
} from '@angular/router';
import { routes } from './app.routes';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [provideRouter(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'users' title`, () => {
    expect(app.title).toEqual('users');
  });
});
