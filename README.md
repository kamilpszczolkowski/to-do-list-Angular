# to-do-list-Angular
Application allowing users to manage their tasks with few extra features, created for practicing skills purpouse.

# General description

Application has authentication system: in order to use it user has to register/log in.
After that specific user tasks are displayed. User can:
- add new tasks - even more than one at once - user has to type the task name in form and if he wants to 
add more - simply use button add more.
- delete tasks already in the system,
- mark existing tasks as done,
- browse tasks done list.
- log out from the application. 

# Purpouse and technology

## Angular, Angular-cli, RxJS

My purpouse of this task was to create functional app in angular - enchance my skills and create
sort of 'template' which I can reference later. That's why I tried to push few functions to this application
which doesn't seem to be necessary. I used angular components, services, created basic routing configuration. I've
got space to implement reactive form and use http.service for pulling data from external API's.

My new project was created with Angular-cli. I've got knowledge about basic functions to create new app, components, 
services etc.

I used RxJS - library probably always used in par with Angular. It allowed me for easy data access through observables.
# MongoDB

MongoDB API was used to store tasks data on persistent server.

# Firebase

Firebase was used for secure and easy user authentication and for hosting final project build. 


# Installation

If you want to start app localy or develop it, all you have to do is use 'npm install' command and 'ng-serve' to start
sever locally.

# Application preview

Screens below represents application general look.

## Login screen

Login screen look changes depending on form validation.


![Login screen - invalid form](img/1.jpg)
![Login screen - valid form](img/2.jpg)

## Tasks list screen

Tasks list changes depending on form validation and added tasks.


![Tasks list](img/3.jpg)
![Tasks list - mouseover](img/4.jpg)

## Tasks done list

Very simple component listing tasks marked as done.


![Tasks done list](img/5.jpg)
