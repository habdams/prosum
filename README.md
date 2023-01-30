# Prosum

## What is it?

A simple task update app that seeks to act as a build in public and a blogging/log tool.

## How does this work?

A user starts a new project, sets a deadline and begins to add tasks individually performed or daily to the task list.
A user will have an embed link: that will show a summary of all projects on the prosum.
A project will have a terminate feature(either “no reason” or “reason given” note)
A project delete button will completely remove a project from a user’s account
A project will have an embed link: this will show a summary of all the tasks in the project from start to completion/termination/ongoing.

A task list consists of tasks as in, a simple daily or just check-in note with simple questions that seek to help the user articulate what is to be done or what has been done; these questions should be customisable to suit how the user might prefer them.

### Features

- Projects
- Tasks/(Daily) Check-ins
- Deadlines
- Task list
- Summary
- Embed Links (User and Projects)

### First Phase

- User can:
  - [x] See a list of projects
  - [ ] Create project
  - [ ] Set deadline
  - [ ] Delete project
  - [ ] Set Project status
  - [ ] Add Tasks to the project
  - [ ] Get an embed link for a project [This will only expose a summary for each task on a project and show a project status]

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
