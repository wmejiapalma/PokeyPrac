import { date } from "drizzle-orm/mysql-core";
import { boolean, integer, interval, pgSchema, pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
const authSchema = pgSchema('auth');
//Admin Tables
const users = authSchema.table('users', {
	id: uuid('id').primaryKey(),
});


export const games = pgTable('games', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    game_name: varchar('game_name', { length: 255}),
    game_description: text('game_description'),
    enabled: boolean('enabled').default(true).notNull()
})

export const game_levels = pgTable('game_levels', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    game_id: integer('game_id').references(() => games.id),
    level_name: varchar('level_name', { length: 255}).notNull(),
    level_description: text('level_description'),
    enabled: boolean('enabled').default(true).notNull()
})

export const game_objectives = pgTable('game_objectives', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    level_id: integer('level_id').references(() => game_levels.id).notNull(),
    objective_name: varchar('objective_name', { length: 255}).notNull(),
    objective_description: text('objective_description'),
    enabled: boolean('enabled').default(true).notNull()
})

//Users
export const user_objectives = pgTable('user_objectives', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    user_id: uuid('user_id').references(() => users.id),
    objective_id: integer('objective_id').references(() => game_objectives.id).notNull(),
    streak_length: integer('streak_length'),
    time: interval('time'),
    date_created: timestamp('date_created').defaultNow().notNull(),
    is_enabled: text('is_enabled').default('true').notNull(),
    user_notes: text('user_notes')
})

export const user_profiles = pgTable('user_profiles', {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    user_id: uuid('user_id').references(() => users.id),
    user_avatar_url: varchar('user_avatar_url', { length: 255}),
    user_bio: text('user_bio'),
    date_created: timestamp('date_created').defaultNow().notNull(),
    is_enabled: boolean('is_enabled').default(true).notNull()
})