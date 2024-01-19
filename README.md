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

#### /UserController/UpdateUser (TODO)

## Group

### [Get]

#### /GroupController/GetGroupById/{groupId}

#### /GroupController/GetAllGroups

### [Post]

#### /GroupController/CreateGroup

### [Put]

#### /GroupController/UpdateGroup (TODO)

#### /GroupController/AssignUserToGroup/{groupId}/{userId} (TODO)

## Mail

### [Get]

### [Post]

#### /MailController/SendEmail

#### /MailController/SendBroadcastEmail

#### /MailController/SendGroupBroadcastEmail/{groupId} (TODO)

### [Put]