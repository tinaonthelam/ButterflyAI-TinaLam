Butterfly.ai Demo

TO START
- npm install
- npm start and go to localhost:3000

OVERALL TIME
- spent about 6 hours creating this from backend to frontend
- got VERY stuck on the SVG icons for a while and then decided to move on -> importing them, styling etc.
- didn't get to integrate the redux store which would have allowed for randomized statement generation, currently it will render in the same order every time

SVG ICONS
- Found path for SVG file but had issue with viewBox not being able to scale correctly - could only remain a smaller size otherwise it would become cut off
- Had a few issues implementing the SVG icons as it was my first time using this format so I got stuck in a rabbit hole and ultimately ended up moving on
- the functionality works correctly and you are able to obtain the correct SVG file for the query parameter
- did not get to implement editing of smiley
- Note ** the butterfly ai demo does allow you to edit the smiley, but the params do not change - when you press submit, it will still submit as the original emoji rather than the one you changed it too

BACKEND SERVER
- Simple express backend with to serve up public files.
- Would be easy to expand routes and other pages in the future.
- Has setup for RESTFUL API with /api/statements scaffolding in place.
- This would be simple to integrate with the submit button - could trigger an axios post request to api/statements/:statementID
- Used webpack & bable to compile react es6 into es5 - created webpack config file with app/main.jsx as entry point and public as output place for bundle.jsx

FRONTEND
- React and Material UI
- Has setup for a redux store and reducers for future use but is currently not being used
- Optimally, redux store will hold all the statement ratings and feedback as the single source of truth and then dispatch an action that will post to the backend when the submit button is pressed
- The redux store could also dispatch an action when the page is first loaded to randomize the statements with different IDs - this could be easily accomplished by moving the statements into the redux store
- Tried to make components as reuseable as possible -> Statements component has props passed down from its parent component instead of having to make 5 separate Statements components

ADDITIONAL BUGS
- The submit button will undisable itself when the statement that the user has rated is the 5th one, this is a little hacky because they could start at the bottom but for now I think this approach would make sense because they will likely go in order
- Another implementation could be to map through the state and when all 5 statements have a rating greater than 0, to turn off disable.
- feedback implementation is limited to the additional feedback form
