import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const links = pgTable('links', {
  code: varchar('code', { length: 16 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  targetUrl: text('target_url').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});
