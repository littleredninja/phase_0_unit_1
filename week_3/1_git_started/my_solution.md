## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
adds a file to the staging area

#### branch
creates a branch to list, create and manage working contexts; lists branches when used without an argument

#### checkout
switches branches when a branch is named

#### clone
copies a git repostitory 

#### commit
records the contents (a snapshot) of files in your staging area

#### fetch
downloads new branches and data from a remote repository

#### log
shows the commit history of a branch

#### merge
merge a branch into a master branch

#### pull
fetches from a remote repository and merges it into the current branch

#### push
pushes new branches and data to a remote repository

#### reset
undoes changes and commits

#### rm
removes files from working directory, in effect deleting them.  

#### status
shows the status of your files in your working directory and staging area


## Release 4: Git Workflow

- Push files to a remote repository
	1.  Navigate to your desired directory with cd.  
	2.  It's helpful to first check what files are staged with git status.  
	3.  Git will list staged files, unstaged files and untracked files.  If you need to stage a file that is unstaged, use git add.  If you need to track a file that is untracked, use git add.  
	4.  Once the file is staged, use git commit -m "message here" to commit the changes.  
	5.  Once files are committed, you can use git push to upload them to a remote directory using git push.

- Fetch changes
	1.  Use git fetch to fetch changes from a remote repostitory.  If you'd like to merge the changes, use git merge.
	2.  Using git pull will fetch and merge changes in one step.  

- Commit locally
	1.  Check the status of your files using git status.  
	2.  Git will list staged files, unstaged files and untracked files.  If you need to stage a file that is unstaged, use git add.  If you need to track a file that is untracked, use git add.  
	3.  Once the file is staged, use git commit -m "message here" to commit the changes.  

## Release 5: Errors you encountered
1. Error

warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Everything up-to-date

2. Solution

git config --global push.default simple.  This took away the error.  

3. Cause (explain the error)

I googled this problem and came up with this answer:  http://stackoverflow.com/questions/13148066/warning-push-default-is-unset-its-implicit-value-is-changing-in-git-2-0

It basically limits the push to the branch your currently working on as opposed to pushing all local branches.  Many comments said that this was a more conservative and intuitive option, so I decided to set that as the default by following the directions in the error message.  

1. Error 

fatal: No commit specified and merge.defaultToUpstream not set.

2. Solution/3. Cause (explain the error)

I haven't found one yet;  I think it is because I didn't have any changes to merge.  I want to try it again when I actually have some changes to pull.  


## Release 6: Reflection

I understand the necessity for a tool like Git, and I'm excited to be more proficient in it because I see how powerful it can be.  But I find some of the commands confusing, and I'm still not sure how to revert files to previous changes, or how to judge conflicts.  I am glad that it provides very detailed error messages;  So far, even if I don't understand why something happened, it does manage to explain how to fix things rather well in the messages it returns.  

As a side, Markdown is slightly confusing!  Why did it change some of my document?  For example, it shows Roman numerals instead of Arabic numbers, and changed some of my numbers.
