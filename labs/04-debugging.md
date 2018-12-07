# 03 - VS Code - Debugging

One of the biggest pieces to our development workflow is debugging. Having the right tool for the job and knowing how to use it will make sure we can resolve that bug or issue as quickly as possible. The following lab will show you how you can debug efficiently in VS Code.

In this lab, you will learn...

- How to Run and Debug a Node.js App Locally in VS Code
- Breakpoints, Logpoints and Conditional Breakpoints in VS Code

### Run and Debug Locally

1. Open a new instance of VS Code and open the folder "/projects/simple-node-server" from this repository
2. Go to the debug viewlet with the keyboard shortcut `CTRL/CMD + SHIFT + D`

   ![image](https://user-images.githubusercontent.com/6265396/48204179-35325e80-e337-11e8-8634-d8c2541ae87c.png)

3. In the Debug view click the green "play" button (Start debugging)

   ![image](https://user-images.githubusercontent.com/6265396/48204348-978b5f00-e337-11e8-93a8-dbdd648311a0.png)

4. You'll be prompted to choose your environment. Select "Node.js"

   ![image](https://user-images.githubusercontent.com/6265396/48204412-c0abef80-e337-11e8-8b62-cc56d9c56aef.png)

5. Once started, you should see the debug toolbar and output from your application in the Debug Console

   ![image](https://user-images.githubusercontent.com/6265396/48204486-eb964380-e337-11e8-8dab-d1d3461b19a7.png)

6. Open the File Explorer (`CTRL/CMD + SHIFT + E`), open the "index.js" file and add a breakpoint in the location shown in the image below.

   ![image](https://user-images.githubusercontent.com/6265396/49621561-cc142a00-f97a-11e8-8d23-f716d11867f3.png)

7. Open your browser and go to the following URL: [http://localhost:4000](http://localhost:4000)

8. This will trigger your application to hit the breakpoint and you should see the line you added the breakpoint to highlighted such as what you can see in the following image

   ![image](https://user-images.githubusercontent.com/6265396/48204934-1634cc00-e339-11e8-8c53-3ec8694c6ef1.png)

9. Go back to the debug view (`CTRL/CMD + SHIFT + D`) and view the variables, watches, call stack, and breakpoints for the current point in the execution of your application.

   ![image](https://user-images.githubusercontent.com/6265396/48205002-4e3c0f00-e339-11e8-829c-a1b76da70230.png)

10. Under "Variables" expand the "Closure" option.

11. Change the value of "runningMessage" by double clicking on the text and enter the value of "Hello World"

    ![image](https://user-images.githubusercontent.com/6265396/49620535-265ebc00-f976-11e8-92d7-b70a217bea80.png)

12. Allow the application to continue to run by clicking the blue "play" button (blue arrow)

    ![image](https://user-images.githubusercontent.com/6265396/49620676-d7655680-f976-11e8-9f00-32fe4cc8013d.png)

13. Go back to your browser and notice that the "Hello World" message was sent as the response.

14. Refresh the page in your browser to trigger the breakpoint again.

15. Click the "step into" button from the debug toolbar to step into the internal execution of the statement.

    ![image](https://user-images.githubusercontent.com/6265396/49620702-f532bb80-f976-11e8-8df2-8afa7f751c03.png)

16. Click the "step out of" button from the debug toolbar to step out of that current statement internal function and back to the scope of our application.

    ![image](https://user-images.githubusercontent.com/6265396/49620720-02e84100-f977-11e8-95e1-dc8df1ccbec4.png)

17. Allow the application to continue to run by clicking the blue "play" button (blue arrow)

    ![image](https://user-images.githubusercontent.com/6265396/49620676-d7655680-f976-11e8-9f00-32fe4cc8013d.png)

### Breakpoints, Logpoints and Conditional Breakpoints

1. With the Debug View open (`CTRL/CMD + SHIFT + D`), under the "Breakpoints" panel, uncheck the box next to your breakpoint to disable it.

   ![image](https://user-images.githubusercontent.com/6265396/49620834-830ea680-f977-11e8-9227-0917eae367a2.png)

2. Refresh the page in your browser to trigger the breakpoint again.

   - Notice that the breakpoint is no longer hit when you refresh the page to load the application.

3. Recheck the box next to your breakpoint in the "Breakpoints" panel

4. In the "index.js" file click the red circle to remove the breakpoint.

5. Copy the string text found in the console.log statement

   ![image](https://user-images.githubusercontent.com/6265396/49620934-eef10f00-f977-11e8-9c9b-3faf4e0531dc.png)

6. Delete the entire line of code where the `console.log` statement is located.

7. Right-click in the area where you would normally create a breakpoint for the line of code `res.send(runningMessage);` and choose "Add Logpoint"

   ![image](https://user-images.githubusercontent.com/6265396/49621007-3b3c4f00-f978-11e8-9ad8-9de8ff92bb3c.png)

8. Enter the string you copied from the `console.log` statement that was previously shown and press `Enter`. You should see a different indicator which is a red diamond to confirm you have submitted the logpoint.

   ![image](https://user-images.githubusercontent.com/6265396/49621037-6161ef00-f978-11e8-9d6f-221f3dfc2424.png)
   ![image](https://user-images.githubusercontent.com/6265396/49621106-aa19a800-f978-11e8-9e0c-efef7e9fe3f7.png)

9. Restart the application and debug session using the reload button found in the debug toolbar

   ![image](https://user-images.githubusercontent.com/6265396/49621162-dd5c3700-f978-11e8-953e-8ba85fad284f.png)

10. Open the Debug Console panel (`CTRL/CMD + SHIFT + Y`) so we can view the application logs.

11. Refresh the page in your browser and then go back to the Debug Console in VS Code. You should see the logpoint logged the string message "API was successfully requested"

    ![image](https://user-images.githubusercontent.com/6265396/49621241-3fb53780-f979-11e8-987d-ed449e7e925c.png)

12. Go to the "index.js" file and click the red diamond to remove the logpoint. You'll be prompted to disable, cancel or remove the logpoint. Choose the option "Remove Logpoint"

    ![image](https://user-images.githubusercontent.com/6265396/49621277-64111400-f979-11e8-955f-d5785a1a173e.png)

13. Right-click in the breakpoint well location again and choose "Add Conditional Breakpoint"

14. Click on "Expression" and there will be a dropdown menu with options. Select "Hit Count" and enter a value of 2 into the prompt.

    ![image](https://user-images.githubusercontent.com/6265396/49621361-c538e780-f979-11e8-98ae-46ad1f8188e8.png)

15. Restart the application and debug session using the reload button found in the debug toolbar

    ![image](https://user-images.githubusercontent.com/6265396/49621162-dd5c3700-f978-11e8-953e-8ba85fad284f.png)

16. Go back to your browser and refresh the page once. You'll notice everything runs to completion.

17. Refresh the page a second time and VS Code will take focus to show the application is stopped at the breakpoint.

18. Press the red "stop" button (red square) to stop the application and debug session.

    ![image](https://user-images.githubusercontent.com/6265396/49621759-b9e6bb80-f97b-11e8-9aa5-530566011925.png)
