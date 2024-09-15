# /users
## /\[username\]/profile
1. GET: returns all the profile info
2. POST: Creates or overrides existing profile info
3. PUT: Updates Profile info
## /\[username]/avatar
1. GET: returns the url of the user avatar
2. POST: Uploads avatar
## /\[username]/objectives
1. GET: returns all objectives related to the user
	- JSON (Optional)
		1. from_date: datetime
		2. to_date: datetime
		3. streak_length: int
1. POST: creates a new objective for the user

## /\[username]/objectives/\[objective_id]
1. GET: returns the info related to the objective
2. PUT: updates the info related to the objective
3. DELETE: deletes the objective


# /games

## /
1. GET: Returns a list of all games
## /\[game_id]/levels
1. **GET**: returns a list of all levels associated with the game
2. **POST**: Adds a level to the game

## /[game_id]/objectives
1. **GET**: returns all objectives related to the game

## /levels/\[level_id]
returns all objectives related to a level_id (indirectly related to the game_id)