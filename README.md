### the localportal widget task
- create via ```create-react-app widget-task --scripts-version=react-scripts-ts```
- run via ```npm run start```
- run tests ```npm run test```

#### a brief description of the task itself
- Please use React-Redux (store)
- API: get a string, show it as notification (The API can be called from the console, no need for UI magic).
- Should show itself in any corner of the screen, depends on the parameter provided (topleft (tl), bottomright (br)...)
- Should disappear after x seconds
- If more than 1 is being presented in the same time - just show them on on top / below the other.
- We should have 3 types of notifications: alert, info and warning. Each should have a different color.
- Allow a special mode when a notification is a modal (no buttons, just a floating layer) that covers the center of the screen, (bigger than the size of the notification). Allow to close it with an x button.
- Support Chrome, Firefox and Edge only. (we are doing it in brave)


#### things i did
- made something testable in boilerplate (trying to follow the tdd approach at least in the react part)
- after the meeting, i overthrow bdd and just made it simply work
- i also removed the point that this code should work on every page, because we are in the react context
##### workflow
- boilerplating
- minimum app and tests
- minimum selection component
- type widget
- minimum widget component
- actions / reducer
- provider / store
- more detail on lifecycle method to fullfil fade requirement
- this took loke 5 hours (honestly the eslinter of create-react-app) is really messy and took me qquite some time
- applied remove fadeout effect (i decided to write it poorly by myself instead of using 
`"react-addons-css-transition-group": "^15.6.2",`)
- rewrote widget to hide it`s prominent state on click
##### TODO
- queue for more then 1one widget
- the queue should be like a wrapper for all widget components, that _.map()s over all existing elements and displays them below each other (i would herefore decide to pass a ONE fixed timout value, otherwise it would be a bit flickery)



