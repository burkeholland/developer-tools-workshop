# 02 - VS Code - Navigation

Getting around within your editor is _key_ to speeding up your productivity. One way of doing so is by moving from using your mouse for navigation to keyboard shortcuts. The following lab will help you learn and use techniques that will improve your efficiency in navigation with VS Code.

In this lab, you will learn...

- Editor Navigation
- File Content Navigation
- Command Pallette
- Custom Keybindings

## Editor Navigation

The following steps walk you through keyboard shortcuts to move around the editor panels/views

1. Show the explorer view: `CTRL/CMD + SHIFT + E`
2. Show the Source Control Management view: `CTRL + SHIFT + G`
3. Show the Debug view view: `CTRL/CMD + SHIFT + D`
4. Show the Extensions view: `CTRL/CMD + SHIFT + X`
5. Show the Search view: `CTRL/CMD + SHIFT + F`
6. Hide the side bar view: `CTRL/CMD + B`
7. Bring focus to editor group 1 (main editor group): `CTRL + 1`
8. Toggle show bottom panel: `CTRL/CMD + J`
   - If the view was already visible press the keyboard shortcut again to hide it
9. Toggle show Problems Panel: `CTRL/CMD + SHIFT + M`
10. Toggle show Debug Console: `CTRL/CMD + SHIFT + Y`
11. Toggle the Output View: `CTRL/CMD + SHIFT U`
12. Toggle show Terminal: `CTRL+`\`
13. Hide the bottom panel again: `CTRL/CMD + J`
14. Open the settings: `CTRL/CMD + ,`
15. Close the settings: `CTRL/CMD + W`
16. Press `CTRL/CMD + P`
17. Type "simple index" and select the `index.js` file from the "simple-node-server" directory
18. Open a second editor group: `CTRL/CMD + 2`
19. Press `CTRL/CMD + P`
20. Type "simple package" and select the `package.json` file from the "simple-node-server" directory
    - Notice you now have two files open side by side
21. Press `CTRL/CMD + 1` to bring the focus back to the first editor group
    - This should bring the focus back into the `index.js` file
22. Go back to the `package.json` file: `CTRL/CMD + 2`
23. Press `CTRL/CMD + P`
24. Type "scratchpad" and select the `scratchpad.js` file from the "sql-reader" directory
    - Notice it replaced the `package.json` file with the `scratchpad.js` file.
25. Close the `scratchpad.js` file with `CTRL/CMD + W`
    - Notice this closed the file and second editor group since no other files are present within it.
26. Press `CTRL/CMD + P` and type "scratchpad" to open the `scratchpad.js` file again but now in editor group 1
27. Press `CTRL/CMD + SHIFT + {` to cycle focus between open files (`index.js` and `scratchpad.js`)

## File Content Navigation

The following steps walk you through keyboard shortcuts to move around with an open file

1. Press `CTRL/CMD + P`, type "simple index" and select the `index.js` file
2. Scroll up or down in the file: `CTRL/CMD + up arrow/down arrow`
3. Move your cursor to a line with code: `up/down arrow`
4. Toggle line comment: `CTRL + /` (press again to remove it)
5. Toggle block comment: `ALT + SHIFT + A` (press again to remove it)
6. Open the symbol search prompt: `CTRL/CMD + SHIFT + O`
7. Arrow down through symbols
   - Notice the file scrolls to the symbols without even having to select
8. Press `Enter` to select a symbol and notice that the cursor is active at that symbol's location
9. Create multiple Cursors: `CTRL/CMD + ALT + SHIFT + Arrow Up/Arrow Down`
10. Move the cursors with your arrow keys: `up, down, left, right`
11. Type a comment `// this is a comment`
12. Press `CTRL/CMD + Z` to undo the changes
13. Press `Esc` to go back to a single cursor
14. Select text with either your mouse or `SHIFT + arrow left/right`
15. Press `Esc` to undo the selection
16. Fold all code: `CTRL/CMD + K, CTRL/CMD + 0` (number zero)
17. Unfold all code: `CTRL/CMD + K, CTRL/CMD + J`
18. Move a line of code up or down: `ALT + up/down arrow`
19. Copy a line of code up or down: `ALT + SHIFT + up/down arrow`
20. Find the following line of code: `res.send(runningMessage);`
21. Remove the leading spaces in that line
22. Reformat the code: `ALT + SHIFT + F`
    - Notice the spaces were added back to conform the the code style of the project

## Command Pallette

1. Open the command pallette using the keyboard shortcut `CTRL/CMD + SHIFT + P`
2. Type in "View explore" and select the option "View: Show Explorer"
   - notice how the focus has changed to the explorer view
3. Use the arrow keys up/down to change the selection between different files/folders
4. Open the command pallette again `CTRL/CMD + SHIFT + P`
5. Type in "view active" and select the option "View: Focus Active Editor Group"
   - notice how the focus has jumped to your currently open file
6. Open the command pallette `CTRL/CMD + SHIFT + P`
7. Type in "view debug" to show the debug viewer
8. Open the command pallette `CTRL/CMD + SHIFT + P`
9. Type in "view extensions" to show the extensions view
10. Open the command pallette (`CTRL/CMD + SHIFT + P`) and try out other commands by typing in an action you'd like to have it perform
    - Things to try
      - Split the editor
      - Split the editor orthogonal
      - Move caret left/right
      - Move last selection

## Custom Keybindings

1. Open the keyboard shortcuts: `CTRL/CMD + K, CTRL/CMD + S`
2. Type in "reload window" in the search bar
3. Find the "Reload Window" text under the "Command" column
4. Click on the "+" symbol and you'll see a prompt show up
5. Press `CTRL/CMD + R`
6. Close the keyboard shortcuts: `CTRL/CMD + W`
7. Press `CTRL/CMD + R` and you should see VS Code reload the entire window
