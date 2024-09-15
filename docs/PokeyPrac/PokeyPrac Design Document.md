# Introduction
Speedrunning is a challenge which involves completing any video game or task in a video game as quick as possible. This has grown to a large community with various different games have their own sub communities. We will primarly focus on 'Super Mario 64' with this document.
Super Mario 64 Speedrunners have many various ways to practice. This practice usually is split into the games Stars, although some runners practice stages or sections of their run. Some of these methods include 
1. Practicing with the speed of the star in mind (I.E going as fast as possible)
2. Consistency of a star without speed in mind (I.E Star completion 7/10 times)
3. Consistency of a star with speed and "Streaks" in mind (I.E star completion 5 times in a row under x time)
Streaks have recently been a very popular way to practice in the speedrunning community and has proven to be an effective and quick method. 

## Problem
The issue is speedrunners have no way to track their progress practicing with any of these methods (Except for a community google spreadsheet for the 1st method). Most speedrunners either use a Notepad, a Discord Server, or memorization. None of these ways provide reliable or visual statistics and are confined to a local or community file. Likewise, there is no official centralized location to share times.

## Goals
1. Provide a way for speedrunners to easily track their progress with any star, stage, or section of their choosing
2. Create visualizations that provide insights to their practice and reveal gaps
3. Make it easy for runners to compare their times and graphs with each other.

# User Research
## Target Audience
Speedrunners are the main target with this application. While speedrunners span across many different games and genres, the main game we will focus on is Super Mario 64. This is because Super Mario 64 is one of the biggest speedrunning games, and as a speedrunner of this game myself, I can beta test this myself along with some people I know.

## User Needs
Speedrunners love simplicity. Even in their name, Speedrunners like an application to be fast and easy to use. Reusability, speed, and friction are all things speedrunners keep in mind when using a site. 

## Similiar Websites
There are two main websites that are commonly used by speedrunners (three if we narrow our focus to Super Mario 64).
- **Speedrun.com**
	- A leaderboards website for all speedrunning games managed by the game's community
	- This indicates a want to share times to other users.
- **Therun.gg**
	- A livesplit/timer tracking website which provides real time updates and statistics to runners
	- This indicates the want of graphs and tracking of metrics
- **Ukikipedia**
	- A Super Mario 64 wikipedia site which has the traditional wikipedia feel
	- This indicates the speedrunner simplicity mindset. Don't reinvent the wheel mentality
# Requirements
These are the requirements of this project. What I am setting out to complete as a fully completed project
## Functional Requirements

1. **User Login**: User should be able to login with another platform's account (Twitch, Google)
2. **Progress Tracking**: Users can log their practice times and streaks for each star, stage, or section.
3. **Data Visualization**: Provide charts and graphs to visualize practice data.
4. **Comparison Feature**: Allow users to compare their times and graphs with others.
5. **Data Export/Import**: Users can export their data to a file and import it back.

## Non-Functional Requirements

1. **Performance**: The application should load quickly and handle large amounts of data efficiently.
2. **Usability**: The interface should be intuitive and easy to navigate. Focus on the ease of doing repetitive tasks (Adding times/viewing times)
3. **Scalability**: The system should be able to handle an increasing number of users and data entries.
4. **Security**: User data should be securely stored and protected.

## Minimum Viable Product (MVP)

1. **Core Features**: 
	- User login (Login with Twitch)
	- Progress tracking
		- Streaks of stars
		- Labels to categorize the stars (I.E Stages, Sections)
	- basic data visualization 
		- Basic bar graph with X as time and Y as logs per day
1. **Scope and Limitations**: Focus on Super Mario 64 initially, with the possibility to expand to other games later.

# Technical Specifications

## Tech Stack
- **Frontend**: Svelte, Tailwindcss, Shadcn (UI Library)
- **Backend**: Sveltekit + Node.js
- **Database**: Supabase (Postgres)
- **Authentication**: Supabase 
- **Deployment**: Vercel
### Alternatives
- **Frontend**: DaisyUI
- **Database/Authentication**: Firebase (paid)
- **Deployment**: AWS, Azure devops, Home server

## Architecture
- **Client-Server Model**: The frontend will community with the backend through API calls
- **Data Flow**: User data will be stored in Postgres and only retrieved when a related page is opened (through API calls)

# Ideas for UI/UX
## User Journey Map
- **Login**: User logs in with their twitch account. No email accounts should be created.  
- **Dashboard**: User can see an overview of their practice data
- **Data Entry**: Simple forms for logging their practice and streaks
- **Visualization**: Different interactive charts which display the data they provided

## Wireframes
- **Login Page**: It make not be useful to have a specific page for login as they will not enter anything on our website. Maybe place a button somewhere on the home screen. In the toolbar or in the hero
- **Dashboard**: Different default charts and ability to navigate to other views
- **Data Entry**: Data entry may not need its own page due to its simplicity or we can provide a page with real time updated graphs?
- **Visualization**: A place where user can pick and choose graphs to see. This could also change the graph on the dashboard?


# Example Data

## Streaks & Speed

| Stage            | Star                 | Streak | Time  | Date            | Note       |
| ---------------- | -------------------- | ------ | ----- | --------------- | ---------- |
| Whomps Fortress  | Cannonless           | 5x     | 8.96  | 09/06/24 6:47PM | Salt Cless |
| Tiny Huge Island | 5 Itty bitty secrets | 3x     | 24.46 | 08/22/24 1:22PM |            |
## Speed

| Stage                | Star                 | Time  | Date             | Note               |
| -------------------- | -------------------- | ----- | ---------------- | ------------------ |
| Bomb Omb Battlefield | Bomb clip            | 12.46 | 09/09/24 12:33AM | Backflip bomb clip |
| Tiny Huge Island     | 5 Itty bitty secrets | 24.46 | 08/22/24 1:22PM  |                    |
## Consistency
| Stage            | Star                 | Consistency | Time  | Date            | Note       |
| ---------------- | -------------------- | ----------- | ----- | --------------- | ---------- |
| Whomps Fortress  | Cannonless           | 5 of 10     | 8.96  | 09/06/24 6:47PM | Salt Cless |
| Tiny Huge Island | 5 Itty bitty secrets | 2 of 5      | 24.46 | 08/22/24 1:22PM |            |
