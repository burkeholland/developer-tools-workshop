# 03 - VS Code - Debugging

One of the biggest pieces to our development workflow is debugging. Having the right tool for the job and knowing how to use it will make sure we can resolve that bug or issue as quickly as possible. The following lab will show you how you can debug efficiently in VS Code.

In this lab, you will learn...

- Launching
- Metrics
- Navigation

### Run and Debug Locally

1. Go to the debug viewlet with the keyboard shortcut `CTRL/CMD + SHIFT + D`

   ![image](https://user-images.githubusercontent.com/6265396/48204179-35325e80-e337-11e8-8634-d8c2541ae87c.png)

2. In the Debug view click the green "play" button (Start debugging)

   ![image](https://user-images.githubusercontent.com/6265396/48204348-978b5f00-e337-11e8-93a8-dbdd648311a0.png)

3. You'll be prompted to choose your environment. Selected the one that best fits your project type.

   ![image](https://user-images.githubusercontent.com/6265396/48204412-c0abef80-e337-11e8-8b62-cc56d9c56aef.png)

4. Once started, you should see the debug toolbar and output from your application in the Debug Console

   ![image](https://user-images.githubusercontent.com/6265396/48204486-eb964380-e337-11e8-8dab-d1d3461b19a7.png)

5. Open the File Explorer, open a file in your project that will be part of the execution and add a breakpoint in the well of the file by a line of code that will be hit.

   ![image](https://user-images.githubusercontent.com/6265396/48204797-b1797180-e338-11e8-96d6-3fbf8999d0aa.png)

6. Trigger your application to hit that breakpoint and you should see the line you added the breakpoint to highlighted such as what you can see in the following image

   ![image](https://user-images.githubusercontent.com/6265396/48204934-1634cc00-e339-11e8-8c53-3ec8694c6ef1.png)

7. Go back to the debug view and show that you can see variables, watches, call stack, and breakpoints for the current point in the execution of your application.

   ![image](https://user-images.githubusercontent.com/6265396/48205002-4e3c0f00-e339-11e8-829c-a1b76da70230.png)

8. Show how you can control the flow of execution via the debug toolbar by selecting to "step over", "step into" or "step out of" the current point in the application

   ![image](https://user-images.githubusercontent.com/6265396/48205064-79266300-e339-11e8-988d-a0fad1c4a265.png)

9. Finally click play in the debug toolbar to let the exection of that operation in your app run to completion

### Edit the Application

1. Open a file in your application to begin editing
2. Show how IntelliSense will provide smart options based on your language type and context of the code. As an example you can attempt to write code that calls a particular method/function thats found within another part of the file. As you are typing that function/method name IntelliSense will prompt you with it as an option saving you some keystrokes.

   ![image](https://user-images.githubusercontent.com/6265396/48206026-6d3ba080-e33b-11e8-91b1-0575212475fb.png)

3. In addition to prompting you with intelligent suggestions you can show how IntelliSense will infer what you mean even when you make typos. A good example of this is when you're writing a `console.log` statement and if you accidentally start typing `cnsl` it will suggest `console` for you.

   ![image](https://user-images.githubusercontent.com/6265396/48206057-86dce800-e33b-11e8-9313-46c2f9c6c58d.png)

### Commit Edits with Source Control

1. After you have made some changes to your code, click on the source control icon to open that viewlet.

   ![image](https://user-images.githubusercontent.com/6265396/48228290-ce329b00-e372-11e8-8cee-c53c6bd265af.png)

2. Click on one of the file(s) that has pending changes to commit and show the diff view that provides what has been added, modified or removed.

   ![image](https://user-images.githubusercontent.com/6265396/48228452-371a1300-e373-11e8-82c9-b249802bb072.png)

3. Show that you can undo the change via the "undo arrow" but don't execute that action. Click the "plus" icon next to the files you wish to stage for the commit.

   ![image](https://user-images.githubusercontent.com/6265396/48228562-8ceebb00-e373-11e8-931e-ad7d0fa86c0c.png)

4. Enter a commit message in the text box and click the "check" icon to commit the change.

   ![image](https://user-images.githubusercontent.com/6265396/48228729-05557c00-e374-11e8-898e-5b90d5107108.png)

5. Show that you have other source control options via the "three dots" icon by clicking on it and showing the pop up menu.

   ![image](https://user-images.githubusercontent.com/6265396/48228770-1f8f5a00-e374-11e8-929b-14b31c0f95c3.png)
