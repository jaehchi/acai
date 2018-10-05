# Contributing

## Individual Setup ( First Time Only)

Using the github's interface, 
  1) Fork the repo
  2) Clone your forked repo
  3) Add upstream

```
git remote add upstream https://github.com/jaehchi/acai-api.git
```
---
## Detailed Workflow

### 1. Create a feature branch from master.
Your branch should follow this naming convention:
- auth/...
- friends/...
- bug/...
- test/...

These commands will help you do this:

``` bash
# Creates a branch and takes you there
git checkout -b <branch name>
```
---
### 2. Make commmits on your feature branch.
Prefix each commit like so:
- [bug] - fixing error handling for whatever...
- [add] - adding onClick function....
- [refactor] - ....
- etc...

**Make sure you are making commits to your feature branch**

```
# Shows branch you're currently on
git branch -v
```
---
### 3. Minimizing Rebase Hell

Once you are done making changes, you can begin the process of getting your code merged into the main repo. 

---
#### Step 1: Commit all changes, then pull upstream changes from the main repo into your feature branch by running this command:

**Make sure you're on your feature branch**

```bash
# Check to see if you're on your feature branch
git branch -v

# If you're not on your branch
git checkout <branch name>

# This command rebase your feature branch
git pull upstream master
```
---
#### Step 2: Handle merge conflicts if there are any and re commit your changes.

If there are no conflicts, this should just roll all of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

Be mindful of the conflicts and adjust around them as much as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

---
#### Step 3: Push your code onto your feature branch.

```bash
git push origin <branch name>
```
---
### 4. Making a Pull Request

Make a clear pull request from your fork and branch to the upstream master branch, detailing exactly what changes you made and what feature this should add. 

---
### 5. Making sure your master branch ( on your forked repo ) is updated.

Once the pull request is accepted:

```bash
# Takes you to master branch on your forked repo
git checkout master

# Since you have no changes on your master branch, there should be no merge conflicts
git pull origin master

# Deleting non merged feature branch
git branch -D <branch name>
```


