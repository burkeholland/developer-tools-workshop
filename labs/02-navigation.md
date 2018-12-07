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
13. Open the settings: `CTRL/CMD + ,`
14. Close the settings: `CTRL/CMD + W`
15. Press `CTRL/CMD + P`
16. Type "simple index" and select the `index.js` file from the "simple-node-server" directory
17. Open a second editor group: `CTRL/CMD + 2`
18. Press `CTRL/CMD + P`
19. Type "simple package" and select the `package.json` file from the "simple-node-server" directory
    - Notice you now have two files open side by side
20. Press `CTRL/CMD + 1` to bring the focus back to the first editor group
    - This should bring the focus back into the `index.js` file
21. Go back to the `package.json` file: `CTRL/CMD + 2`
22. Press `CTRL/CMD + P`

## File Content Navigation

The following steps walk you through keyboard shortcuts to move around with an open file

1. Press `CTRL/CMD + P`
2. Scroll up or down: `CTRL/CMD + up arrow/down arrow`
3. Toggle line comment: `CTRL + /`
4. Toggle block comment: `ALT + SHIFT + A`
5. Open the symbol search prompt: `CTRL/CMD + SHIFT + O`
6. Arrow down through symbols
   - Notice the file scrolls to the symbols without even having to select
7. Press `Enter` to select a symbol and notice that the cursor is active at that symbol's location
8. Create multiple Cursors: `CTRL/CMD + ALT + SHIFT + Arrow Up/Arrow Down`
9. Move the cursors with your arrow keys: `up, down, left, right`
10. Select text with either your mouse or `SHIFT + arrow left/right`
11. Fold all code: `CTRL/CMD + K, CTRL/CMD + 0` (number zero)
12. Unfold all code: `CTRL/CMD + K, CTRL/CMD + J`

## Command Pallette

1. Open the command pallette using the keyboard shortcut `CTRL/CMD + SHIFT + P`
2. Type in "View explore" and select the option "View: Show Explorer"
   - notice how the focus has changed to the explorer view
3. Use the arrow keys up/down to change the selection between different files/folders
4. Open the command pallette again
5. Type in "view active" and select the option "View: Focus Active Editor Group"
   - notice how the focus has jumped to your currently open file
6. Open the command pallette
7. Type in "view debug" to show the debug viewer
8. Open the command pallette
9. Type in "view extensions" to show the extensions view

## Custom Keybindings

1. Open the keyboard shortcuts: `CTRL/CMD + K, CTRL/CMD + S`
2. Type in "reload window" in the search bar
3. Find the "Reload Window" text under the "Command" column
4. Click on the "+" symbol and you'll see a prompt show up
5. Press `CTRL/CMD + R`
6. Close the keyboard shortcuts: `CTRL/CMD + W`
7. Press `CTRL/CMD + R` and you should see VS Code reload the entire window
