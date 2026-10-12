CREATE TABLE "links" (
	"code" varchar(16) PRIMARY KEY,
	"target_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
