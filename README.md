### the localportal widget task
create via ```create-react-app widget-task --scripts-version=react-scripts-ts```

#### a brief description of the task itself
- Please use React-Redux (store)
- The widget should work automatically when inserting the code in any page
- API: get a string, show it as notification (The API can be called from the console, no need for UI magic).
- Should show itself in any corner of the screen, depends on the parameter provided (topleft (tl), bottomright (br)...)
- Should disappear after x seconds
- If more than 1 is being presented in the same time - just show them on on top / below the other.
- We should have 3 types of notifications: alert, info and warning. Each should have a different color.
- Allow a special mode when a notification is a modal (no buttons, just a floating layer) that covers the center of the screen, (bigger than the size of the notification). Allow to close it with an x button.
- Support Chrome, Firefox and Edge only. (we are doing it in brave)

