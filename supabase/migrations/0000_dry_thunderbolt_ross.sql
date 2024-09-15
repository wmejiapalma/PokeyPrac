CREATE TABLE IF NOT EXISTS "game_levels" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_id" serial NOT NULL,
	"level_name" varchar(255) NOT NULL,
	"level_description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "game_objectives" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_id" serial NOT NULL,
	"objective_name" varchar(255) NOT NULL,
	"objective_description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_name" varchar(255),
	"game_description" text,
	"enabled" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_objectives" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"objective_id" serial NOT NULL,
	"streak_length" integer,
	"time" integer,
	"date_created" timestamp DEFAULT now() NOT NULL,
	"is_enabled" text DEFAULT 'true' NOT NULL,
	"user_notes" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"user_avatar_url" varchar(255),
	"user_bio" text,
	"date_created" timestamp DEFAULT now() NOT NULL,
	"is_enabled" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "game_levels" ADD CONSTRAINT "game_levels_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "game_objectives" ADD CONSTRAINT "game_objectives_level_id_game_levels_id_fk" FOREIGN KEY ("level_id") REFERENCES "public"."game_levels"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_objectives" ADD CONSTRAINT "user_objectives_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_objectives" ADD CONSTRAINT "user_objectives_objective_id_game_objectives_id_fk" FOREIGN KEY ("objective_id") REFERENCES "public"."game_objectives"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
