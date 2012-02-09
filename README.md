# Never Email Passwords

NEP is a WordPress plugin that does three things:

1. Hides the "Send this password to the new user by email" checkbox on the dashboard's "Add New User" page.
2. Autofills the password fields with a 64-character string from `wp_generate_password`.
3. Emails a password reset link to the new user.

With NEP, new user passwords are never emailed. No one knows the generated password, and only the customer will know her password once she uses the reset link.

## Issues

- #3 NEP should check the submitted form and force the `send_password` field to '0'.
- #5 NEP should add a notice that the user was emailed.
- #7 No idea whether this works with multisite, needs testing.
