# Games Tables
## games

| id  | name | enabled |
| --- | ---- | ------- |
|     |      |         |

## game_levels

| id  | game_id (foreign) | name | related_level_ids [] (nullable) |
| --- | ----------------- | ---- | ------------------------------- |
|     |                   |      |                                 |

## game_objectives

| id  | level_id | name         | description (nullable) |
| --- | -------- | ------------ | ---------------------- |
| int | int      | varchar(255) | varchar(255)           |

# Users Tables

#### users *(supabase managed)*

## user_objectives

| id  | user_id | objective_id | streak_length (nullable) | time (nullable) | date_created | is_enabled | user_notes   |
| --- | ------- | ------------ | ------------------------ | --------------- | ------------ | ---------- | ------------ |
| int | int     | int          | int                      | interval        | timestamp    | boolean    | var(char255) |
- **user_id**: the id of the user from the ***users*** table
- **objective_id**: the id of the objective from the ***game_objectives*** table
- **streak_length** (optional): the length of the streak of the objective
	- Optional because he user may not be practicing with streaks
- **time** (optional): The duration of the objective
	- Optional because the user many only be practicing with streaks
- **date_created**: the date the user_objective was created
- **is_enabled**: is the objective supposed to be displayed
- **user_notes**: any notes the user may want to attach with the specific objective
## user_profile
Used to make the wireframe of the users profile screen

| id  | user_id | user_avatar_url | user_bio | date_created | is_enabled |
| --- | ------- | --------------- | -------- | ------------ | ---------- |
| int | int     | varchar(255)    | text     | timestamp    | boolean    |
- **user_id**: the id of the user from the users table
- **user_avatar_url**: the url of the user avatar (obtained through supabase storage)
- **user_bio**: a bio created by the user to display on their profile
- **date_created**: the date the profile was created
- **is_enabled**: defaulted to true, if the user is active ()