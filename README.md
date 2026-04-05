# Daily challenges

Daily challenges is a simple front-end web app built with HTML, CSS, and JavaScript. It gives users small daily challenges across three categories and keeps track of their points using `localStorage`.

## Features

- Dark-themed, mobile-friendly interface
- Three categories
- Different point rewards for each category
- Up to 3 challenges per day
- 50 unique challenges in each category
- Protection against scoring the same challenge more than once
- Special end-of-day screen after all 3 daily tasks are completed
- Subtle smooth animations for a more polished feel

## Categories And Points

- Productivity: 18 points
- Fitness: 15 points
- Social: 12 points

## How It Works

1. The user selects a category using one of the category buttons.
2. Clicking `BRING IT ON!` generates a random challenge from that category.
3. The challenge is shown in the challenge box.
4. The `Challenge complete!` button appears after a challenge is generated.
5. When the user completes the challenge, points are awarded based on the selected category.
6. The user can complete up to 3 challenges per day.
7. The randomizer will not show the same challenge twice on the same day.
8. The same challenge can appear again on a different day.
9. After 3 completed challenges, the app hides the rest of the interface and shows only the points counter and celebration message.

## Local Storage

The app stores its data in the browser using `localStorage`. That includes:

- Total points
- Current challenge
- Selected category
- List of completed challenges
- Daily completion count
- Challenges already shown on the current day

This means the user's progress is still there after refreshing the page.

## File Structure

- `index.html`
  Main page structure
- `styles.css`
  App styling, layout, responsive behavior, animations, and finished-day visuals
- `script.js`
  Challenge data, scoring logic, daily limits, and local storage handling

## Bonus Logic Included

- The same completed challenge cannot give points twice
- Users can only finish 3 challenges per day
- A challenge will not repeat during the same day
- That same challenge can return on a later day

## Running The App

This is a plain static web app, so no installation is needed.

1. Open `index.html` in any modern browser.
2. Pick a category.
3. Start a challenge and earn points.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
