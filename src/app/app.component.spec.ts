import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dummy2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dummy2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dummy2 app is running!');
  });

  const navbar = document.createElement('nav');

  const ul = document.createElement('ul');

  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '#';
  homeLink.text = 'الرئيسية';
  homeLi.appendChild(homeLink);
  ul.appendChild(homeLi);

  const productsLi = document.createElement('li');
  const productsLink = document.createElement('a');
  productsLink.href = '#';
  productsLink.text = 'المنتجات';
  productsLi.appendChild(productsLink);
  ul.appendChild(productsLi);

  const servicesLi = document.createElement('li');
  const servicesLink = document.createElement('a');
  servicesLink.href = '#';
  servicesLink.text = 'الخدمات';
  servicesLi.appendChild(servicesLink);
  ul.appendChild(servicesLi);

  const searchLi = document.createElement('li');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.name = 'search';
  searchInput.value = 'بحث...';
  searchForm.appendChild(searchInput);
  const searchButton = document.createElement('input');
  searchButton.type = 'submit';
  searchButton.value = 'ابحث';
  searchForm.appendChild(searchButton);
  searchLi.appendChild(searchForm);
  ul.appendChild(searchLi);


  navbar.appendChild(ul);





});
