create table registrations (
id uuid primary key default gen_random_uuid(),
race text,
first_name text,
last_name text,
email text,
kart_number text,
team_name text,
kart_class text,
created_at timestamptz default now()
);

create unique index unique_kart_race
on registrations (race, lower(kart_number));