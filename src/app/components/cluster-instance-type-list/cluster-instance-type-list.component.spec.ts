import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClusterInstanceTypeListComponent } from './cluster-instance-type-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ClusterInstanceTypeListComponent', () => {
  let component: ClusterInstanceTypeListComponent;
  let fixture: ComponentFixture<ClusterInstanceTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ClusterInstanceTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterInstanceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain component title', () => {
    const componentDoc: DebugElement = fixture.debugElement;
    const componentElem = componentDoc.nativeElement;
    const contentValue = componentElem.querySelector('h3');
    expect(contentValue.textContent).toContain('Cluster Instance Types');
  });
  it('should contain New Type item', () => {
    const componentDoc: DebugElement = fixture.debugElement;
    const componentElem = componentDoc.query(By.css('.fa-plus'))
    const contentValue = componentElem.nativeElement;
    expect(contentValue).toBeTruthy();
  });
});
