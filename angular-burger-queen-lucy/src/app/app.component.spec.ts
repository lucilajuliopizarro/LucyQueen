import { TestBed, async } from '@angular/core/testing';//es la primera y más importante de las utilidades para poder hacer pruebas en Angular
import { RouterTestingModule } from '@angular/router/testing';  //configura con el método configureTestingModule para producir el entorno del módulo para la clase que desea probar
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
//en la primera chequea que pueda crear el componente con toBeTruthy
  it('should create the app', async(() => {//linea 17 veremos que utiliza una función “it”, que casualmente en su primer parámetro recibe el texto que imprimo nuestro test, y luego recibe una función que genera un “async” con el contenido que testea una “funcionalidad” de nuestro componente
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
// la segunda prueba, se checkea que exista una variable llamada title y que el texto sea ‘app works!’ 
  it(`should have as title 'angular-burger-queen-lucy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-burger-queen-lucy!');
  });
//por ultimo el tecero a diferencia, obtiene el html a travez de nativeElement, buscando un h1 y que contenga un texto que sea ‘app works!’
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('angular-burger-queen-lucy!');
  });
});
