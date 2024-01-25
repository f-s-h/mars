# mars

- Home
  - Upcoming Birthdays
  - Upcoming Events

- Card Index
  - Find User
  - Edit User
  - View User
  - Create User
  - Find all Users
  - Delete User

- Event
  - Create Event
  - Edit Event
  - Timeline with upcoming Events
  (- Recent Events
      - Add Images to Events, add Recap )

- Roles
  - Create Role
  - Edit Role
  - View Role
  - Delete Role

- Statistics
 
- Finances

- Email

- Website
  - Upload Events
  - Chargen aktualisieren
    - Bild in kartei speichern
      -> WordPress Klasse oder so

## Notes

- Mails with Mailkit
- Error / Success with Toastify

# API

## User

### [Get]

#### /UserController/GetUserById/{userId}

#### /UserController/GetUserDetailById/{userId}

#### /UserController/GetAllUsers

#### /UserController/GetAllUsersDetail

### [Post]

#### /UserController/CreateUser

### [Put]

#### /UserController/UpdateUser

## Group

### [Get]

#### /GroupController/GetGroupById/{groupId}

#### /GroupController/GetAllGroups

#### /GroupController/GetAllGroupsDetails


### [Post]

#### /GroupController/CreateGroup

### [Put]

#### /GroupController/UpdateGroup

#### /GroupController/AssignUserToGroup/{groupId}/{userId}

## Mail

### [Get]

### [Post]

#### /MailController/SendEmail

#### /MailController/SendBroadcastEmail

#### /MailController/SendGroupBroadcastEmail/{groupId} 

### [Put]

## Events

### [Get]

#### /EventController/GetAllEvents

#### /EventController/GetEventById/{eventId}

#### /EventController/GetAllEventsFromMonth/{year}/{month}

#### /EventController/GetAllEventsFromYear/{year}

#### /EventController/GetAllEventsFromRange/
Body: 
- DateOnly from
- DateOnly to 

### [Post]

#### /EventController/CreateEvent
Body:
- EventDTO eventDTO

### [Put]

#### /EventController/UpdateEvent
Body: 
- EventDTO eventDTO
