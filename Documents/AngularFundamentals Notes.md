Cource Overview
=======================
Archiecture
Angular Components
Reusable services
Forms and validation
API Calls
Unit test
Package everything together


Getting Started With Angular
=====================================

Introduction 
------------------

Helpful Prerequesites
 - Basic Node and NPM
 - ES2015
 - Typescript
 
 Practice Exercise
 ---------------------
 https://jcoop.io/angular-practice-exercises/
 
 plunker -> online editor, server and browser
 
 Introduction to Typescrpt
 ---------------------------------
 superset of JS
 Features 
 - static typing 
	in javascript 
	let name 
	let age
	let birthDate
	
	in Typescript
	let name: string
	let age: number
	let birthDate: date
	
- Typescript Interfaces
	interface ICat{
		name: string
		age?: number
	}
	let fluffy: ICat
	
	fluffy = {
		name: 'Fluffy'
	}
	
- Typescript Class Properties
	class Cat{
	   name
	   color
		constructor( name ){
			this.name = name;
		}
	}
	
- Public and Private Accessibility
class Cat{
	  
		constructor( private name, private color ){
			
		}
		speak(){console.log('my name is :'+ this.name)}
	}
	
	
Comparing Angular to AngularJS
-----------------------------------------

A conceptual overview of Angular
---------------------------------
root is loded
router matches the component
component is loaded 
might have multiple component

compoment, service, directive or pipe you register within the module 


what we'll be building in this cource
---------------------------------------------
Event logger 

Installing Git and node
-----------------------------


Getting Started with the angular
--------------------------------
https://github.com/jmcooper/angular-fundamentals-files
ng new ng-fundamentals

A brief look at the app Module
-----------------------------------
declarations -> whe we want to add new components

Imports -> Import other modules


providers -> services go here

Accessing Static Files
----------------------------------

any file will go to asset folder and can be used as <img src="/assets/images/basic-shield.png"/>
this is relative to index.html

installed this package to go along with the course, seems like hibrid of bootstrap 
npm install ngf-bootstrap --save

added this in angular.json
   "styles": [
              "node_modules/ngf-bootstrap/dist/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.js"
            ]
			
			
Creating and Communicating Between Angular Components
===================================================================

Introduction 
---------------------
Agenda 
 Inline Templates and Data-Binding
 Using External Templates
 Inter-Component Communication
 Styling Components
 Style Encapsulation
 
 
 Using External Templates
 --------------------------
 Basically how to create a new component 
 
 
 Communicating with child component
 --------------------------------------
 this is the way to pass data 
 passing from hmtl 
 event1 -> this is the object we are passing
 event inside [] -> this is the variable name that it will be available in 
 <event-thumbnail [event] ="event1"></event-thumbnail>
 
 passing to event-thumbnail
  @Input() event: any;
  
 Communicating with parent component
 -------------------------------------------
from child 

<button class="btn btn-primary" (click)="handleClickMe()" >Click me!</button>
  @Output() eventClick = new EventEmitter();

handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
  
In Parent 
//(eventClick)='handleEventClicked($event)'
<event-thumbnail (eventClick)='handleEventClicked($event)'
              [event] ="event1"></event-thumbnail>
              </div>`,
 handleEventClicked(data) {
    console.log(data);
  }

Using Temporary variable to interact with child component
-------------------------------------------------------------

there is a way parent component can access data and method from child component. We do this by adding #variable in html where child component is defined <event-thumbnail #thumbnail </event-thumbnail>

In child 
myString = 'MyString from child';

 logfoo() {
    console.log('foo from child');
  }
  
In parent 
<event-thumbnail #thumbnail </event-thumbnail>
<button class="btn btn-primary" (click) = "thumbnail.logfoo()"></button>
              <h2>{{thumbnail.myString}}</h2>

Styling Components
-------------------------------------


Exploring Angular's CSS Encapsulation
-------------------------------------------
css are very specific for modules

style.css will effect in global level

Adding a Site Header 
-----------------------



Exploring the Angular Template Syntax 
============================================================
Introduction
------------------
agends 
- Interpolation and Expression
- Event Bindings and Statements
- Repeating Data with *ngFor
- Removing Elements with *ngIf and *ng Switch 
-Hiding ElementsAdding class and styles

Exploring the Angular Template Syntax
-----------------------------------------
Interpolation Expression events and statement
eg. 
template": `
			<h2>{{user.name}}</h2>   --> this is interpolation ,here expression is in {{}}
			<img [src] = "user.imageURL">  --> property binding , here expression is in ""
			`
			
	user = {name: 'John Doe', imageUrl: 'doe.com/profile.jpg'}
	
	
	
Expression restriction 
 -> suse assignments
 -> new keyword
 -> expression chaining
->  Global namespace

Expression Recommendations
-> No Side-Effects
-> Fast
-> Simple
-> Idempotent  each time we call experssion it should have same result. 

EventBindings and Statements
--------------------------------------
<button <click> = "doSomething()"></button>  --> Here click is event that binds to statement "doSomething()"

doSomething(){

}

Repeating Data with ngFor
----------------------------------
*ngFor="let event of events"  -> * is structural, i.e. they change DOM

Handling Null Values with the safe-navigation Operator
---------------------------------------------------------
parent
<event-thumbnail

              [event] ="ourevent"></event-thumbnail>
child
 <h2>{{event.name}}</h2>
 
 if this event.name is null, then it will error out
 one way to resolve this is 
 <h2>{{event?.name}}</h2> ==> use this question mark 



Hiding and showing content with ngIf
-----------------------------------------
  <div *ngIf = "event?.onlineUrl">
  Online URL: {{event?.onlineUrl}}
  </div>
  
  This completely removes this html form the dom 


Hiding content with the [Hidden] binding
----------------------------------------------
 <div [hidden]="!event?.onlineUrl">
  Online URL: {{event?.onlineUrl}}
  </div>
  
  now, this html is only hidden


Hiding and showing content with ngswitch 
-----------------------------------------------



styling components with ngclass
-----------------------------------------



styling components with ngstyle
------------------------------------



Creating Reusable Angular Services
===========================================


Why we need Service and Dependency Injection 
-------------------------------------------

Creating your First Service 
---------------------------------
Basically we careated the service and injected in in the component 
For any service it needs to be registered   providers: [EventService],

Wrapping Third Party Services
-----------------------------------
we'll use a library called toster 
npm install toastr --save


Then we careated a toastrService and injected that in the component

Routing and Navigating Pages
============================================================
agenda
Why Routhing is NEcessary
Define Routing for PagesLink to RoutesNavigate from Code
Route Guards 
Resolve
Route-Based Link Stying

Adding Multiple Pages to your app
----------------------------------------



Adding your first Route
-------------------------------


Accessing Route Parameters
--------------------------------------

Linking to Routes
---------------------------
` typescript
import { ActivatedRoute } from '@angular/router';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent
      (+this.route.snapshot.params.id);
  }
  `
  
Basically wer are injecting ActivatedRoute, then passing the route in getEvent as number, The id should be the same as in routes.ts 


Navigating from Code
------------------------------
from thubnail.component.ts 
  <div [routerLink]="['/events',event.id]" class='well hoverwell thumbnail'> 
  
  This will link thubnail to the respective detail page

in navguar.html  
` html
 <a [routerLink]="['/events']">All Events</a>
 `
This will routhe All events to events page
Guarding Against Route Activation
------------------------------------

we created rout guard , EventRouteActivator service. It sees if the page exist. 
Then we add that in the route.ts 
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },


Garding Against Route De-activation
-----------------------------------
warns the user user before saving the page
basically we are adding  can deactive in rout
 {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  
  then we map canDeactivateCreateEvent to a method in app.module.ts
   providers: [
    EventService,
    ToastrSrvice,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }

  ],
  
  and we'll create a function checkDirtyState
  export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saed this event, do you really want to exit');
  }
  return true;
}

Pre-loading Data for Components
-------------------------------------
1st we make getting data async with observable, 
 getEvents() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(EVENTS); subject.complete();
    },
      2000);
    return subject;
  }
  
  ngOnInit() {
    this.eventService.getEvents().subscribe(events => { this.events = events; });
  }
  
  we created new file 
  @Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventService: EventService) { }
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}

then we map that in route
{ path: 'events', component: EventListComponents, resolve: { events: EventListResolver } },

then we replace the getEvents to routhe.snapshot.data.events.
 ngOnInit() {
    // this.eventService.getEvents().subscribe(events => { this.events = events; });
    this.events = this.route.snapshot.data.events; // this events match with events in the route
  }

Styling Active Links
-------------------------------------
we used 
 routerLinkActive="active"
             [routerLinkActiveOptions]="{exact:true}"
			 
for styling active links

Lazily Loading Feature Modules
-----------------------------------

Organizing your Exports with Barrels
---------------------------------------
Creating the barrols


Collection Data with Angular Forms and Validation 
========================================================

Agenda
Using Data Models for Type Safety
Template-based Forms
Model-driven Forms
Two-way Data Bindings
Custom Validators

Using Models for Type Safety
---------------------------------
Created a model with types and replace it everywhere witht he type of object

Creating your first Template-based Forms
-----------------------------------------------

Using the Data from your template-based Forms
-------------------------------------------------

Validating Template-based Forms
----------------------------------------

Creating yuour first Reactive Forms
------------------------------------

Validating Reactive Forms
--------------------------------

Using Multople Validators in Ractive Forms
-----------------------------------------------


Diving Deeper into Template-based Forms
----------------------------------------------

Editing Data with Two-way Bindings
---------------------------------------

Diving Deeper into Reactive Forms
--------------------------------------


Creating Custome Validators
-----------------------------------