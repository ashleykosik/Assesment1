/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = `Git is the industry standard for file version control that works well for all types of files. Version control is tracking and saving changes to files as they undergo changes. Git better than other version control software because it is fast, works well on local files and through a process of branches makes it possible for multiple people to work off of the same file and safely merge those files `

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = `GitHub is a place online where you can store files tracked by git. It is the easiest place to upload your code as well as download the code of others and even colloborate by uploading your code to the project of another. The most helpful thing DJ said about the difference between git and github is that git is industry standard and github is not. That led to my comparison of git being like a resume and github being like LinkedIn`

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = `Initializes a new git repository on your local files. Aka start tracking the all files in this folder`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = `Makes a copy of a folder/repository into a newly created directory. This new repository is being tracked by git that same way it tracks the orignal repository unless a new url is used at the time of the git clone command`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = `git status shows files that have had changes made to them but have not been committed and files that have been added to a queue and are ready to be commited`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = `git add is the command that adds files to a holding area so multiple files can be committed together`
const gitAddCode = `git add .`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = `git commit takes a screenshot of the files you tell it to and adds it as the most recent version of a project`
const gitCommitCode = `git commit -m "initial commit"`


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = `git push is the command you use to upload committed local files to github. On macs it should be done inside vscode. and git push by itself is assuming you have already set the destination repository url for this file`