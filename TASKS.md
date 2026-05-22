## CONTEXT

You're building a small "User Explorer" feature for an
internal dashboard. The API is already wired up for you.
Your job is to implement the UI and logic described below.

## TASKS (work through them in order)

TASK 1 — Fetch & display users
Fetch the list of users from `fetchUsers()` and render
them in a list.

TASK 2 — Search / filter
Add a search input that filters users by username in real
time. The filter should be case-insensitive.

TASK 3 — Select a user & fetch their posts
When a user is clicked, fetch their posts using
`fetchPostsByUser(userId)` and display them below (or
alongside) the user list. Show loading/error states here
too. Only one user can be selected at a time.

TASK 4 — Refactor
Propose a refactor for existing code.

## NOTES

- Use whatever patterns / libraries you're comfortable
  with, but be ready to explain your choices.
- Don't worry about styling — functional
  and readable is more important.
- Ask questions if anything is unclear. That's expected.
