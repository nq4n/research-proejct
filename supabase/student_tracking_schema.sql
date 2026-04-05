-- Supabase setup for the fixed 35-student teacher tracking system.
-- Run this file in the Supabase SQL Editor.

create table if not exists public.student_tracking (
  indicator_number smallint primary key
    check (indicator_number between 1 and 35),
  student_name text not null,
  current_lesson text not null default 'intro',
  progress integer not null default 0
    check (progress between 0 and 100),
  status text not null default 'idle'
    check (status in ('idle', 'active', 'warning', 'complete', 'offline')),
  score integer not null default 0,
  updated_at timestamptz not null default now()
);

comment on table public.student_tracking is
'Fixed tracking table for 35 students. Each indicator number from 1 to 35 represents one student.';

comment on column public.student_tracking.indicator_number is
'Static student number from 1 to 35.';

comment on column public.student_tracking.student_name is
'Display name for the student shown in the teacher dashboard.';

comment on column public.student_tracking.current_lesson is
'Current lesson or page id such as intro, hardware, software, or data-protection.';

comment on column public.student_tracking.progress is
'Lesson progress percentage from 0 to 100.';

comment on column public.student_tracking.status is
'Current student state: idle, active, warning, complete, or offline.';

comment on column public.student_tracking.score is
'Optional score value for the current lesson or activity.';

comment on column public.student_tracking.updated_at is
'Last time the student row was updated.';

create or replace function public.set_student_tracking_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_student_tracking_updated_at on public.student_tracking;

create trigger trg_student_tracking_updated_at
before update on public.student_tracking
for each row
execute function public.set_student_tracking_updated_at();

insert into public.student_tracking (
  indicator_number,
  student_name,
  current_lesson,
  progress,
  status,
  score
)
select
  gs,
  'الطالب ' || lpad(gs::text, 2, '0'),
  'intro',
  0,
  'idle',
  0
from generate_series(1, 35) as gs
on conflict (indicator_number) do nothing;

alter table public.student_tracking enable row level security;

drop policy if exists "Prototype read for teacher page" on public.student_tracking;
create policy "Prototype read for teacher page"
on public.student_tracking
for select
to anon
using (true);

drop policy if exists "Prototype update for student page" on public.student_tracking;
create policy "Prototype update for student page"
on public.student_tracking
for update
to anon
using (true)
with check (true);

drop policy if exists "Prototype insert for student page" on public.student_tracking;
create policy "Prototype insert for student page"
on public.student_tracking
for insert
to anon
with check (true);

alter publication supabase_realtime add table public.student_tracking;
