# note-taking-app-express-

test => https://note-taking-app-express.onrender.com
<br>
1. Create a Note

Request: POST http://localhost:3000/api/notes
Body:

{
  "title": "Learn Node.js",
  "content": "Study Express routers and middleware."
}



2. Get All Notes

Request: GET http://localhost:3000/api/notes

3. Update a Note

Request: PUT http://localhost:3000/api/notes/a1b2c3d4-uuid
Body:

{
  "title": "Learn Express",
  "content": "Also review routing and error handling."
}



4. Delete a Note

Request: DELETE http://localhost:3000/api/notes/a1b2c3d4-uuid

