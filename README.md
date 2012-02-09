# Never Email Passwords

NEP is a WordPress plugin that does two things:

1. Hides the "Send this password to the new user by email" checkbox on the dashboard's "Add New User" page.
2. Emails a password reset link to the new user.

With NEP, new user passwords are never emailed. Once the new user resets their password using the emailed link, only the new user knows the password.

## Issues

- #1 NEP should also set the initial password for the new user so even the site admin never knows the user's password.
- #2 NEP should only run on the 'Add New User' page (it currently runs on all admin pages).
- #3 NEP should check the submitted form and force the `send_password` field to '0'.
