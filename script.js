const STORAGE_KEY = "dailyChallengeGeneratorState";
const DEFAULT_MESSAGE = "Pick a category and get your challenge for today.";
const DAILY_CHALLENGE_LIMIT = 3;
const categoryPoints = {
  Fitness: 15,
  Social: 12,
  Productivity: 18
};

// Challenge lists for each category.
const challenges = {
  Productivity: [
    "Work for 10 minutes on your most important task without checking your phone.",
    "Clear out 10 unused files from your desktop or downloads folder.",
    "Write down your top three priorities for tomorrow.",
    "Unsubscribe from two emails you never read.",
    "Spend 5 minutes organizing your workspace.",
    "Finish one small task you've been postponing.",
    "Create a simple to-do list and complete the first item immediately.",
    "Reply to three pending messages in one sitting.",
    "Set a timer for 10 minutes and tidy one digital folder.",
    "Review your calendar for the next day.",
    "Rename five messy files so they are easier to find.",
    "Delete duplicate photos or screenshots from your phone for 5 minutes.",
    "Put your phone on silent while you finish one quick task.",
    "Sort one small pile of papers or notes.",
    "Clean up your browser tabs and keep only the important ones open.",
    "Write a 3-step plan for one goal you want to finish this week.",
    "Spend 5 minutes clearing old notes from your desk.",
    "Set one reminder for something important you keep forgetting.",
    "Organize one folder in your email inbox.",
    "Put away three items that are out of place.",
    "Complete a task that takes less than 5 minutes right now.",
    "Write one sentence describing your main goal for today.",
    "Prepare your bag, clothes, or desk setup for tomorrow.",
    "Cross one unfinished task off your list by actually doing it.",
    "Archive or delete 10 old emails.",
    "Clean your computer desktop so only useful items remain.",
    "Make a short shopping or errand list.",
    "Spend 5 minutes reviewing class or work notes.",
    "Set a timer and focus on one thing for 15 minutes.",
    "Move one unfinished task from your mind into a written list.",
    "Organize your bookmarks or saved links for 5 minutes.",
    "Choose one task and break it into two easy steps.",
    "Wipe down your desk or study area.",
    "Throw away or recycle five pieces of clutter.",
    "Open your notes app and write tomorrow's first task.",
    "Sort one drawer or shelf for 10 minutes.",
    "Check your upcoming deadlines and note the closest one.",
    "Spend 5 minutes planning how to start a project.",
    "Delete five apps or files you no longer use.",
    "Clear one section of your backpack or work bag.",
    "Answer one email or message you've been delaying.",
    "Take 5 minutes to organize your cables or chargers.",
    "Write down one habit you want to improve this week.",
    "Update one checklist or planner page.",
    "Put all loose papers into one neat stack or folder.",
    "Create a short list of things you need to remember today.",
    "Finish one task before opening social media.",
    "Spend 10 minutes making your room or work corner feel tidier.",
    "Check one bill, payment, or account that needs attention.",
    "Write a quick end-of-day note about what you got done."
  ],
  Fitness: [
    "Take a brisk 15-minute walk.",
    "Do 20 jumping jacks and 10 squats.",
    "Stretch your full body for 8 minutes.",
    "Hold a plank for 20 seconds three times.",
    "Do a quick 10-minute home workout.",
    "Climb stairs for 5 minutes instead of using the elevator.",
    "Drink a full glass of water right now.",
    "Do 10 lunges and 10 push-ups at your own pace.",
    "Try a short yoga routine for 10 minutes.",
    "Take a movement break every hour for 2 minutes today.",
    "Walk around your home or outside for 10 minutes.",
    "Do 15 calf raises while standing.",
    "Stretch your neck, shoulders, and back for 5 minutes.",
    "Do 15 bodyweight squats.",
    "Stand up and march in place for 3 minutes.",
    "Take the stairs once today if you can.",
    "Do 20 seconds of high knees three times.",
    "Roll your shoulders and stretch your arms for 5 minutes.",
    "Go for a short walk after your next meal.",
    "Do 10 wall push-ups.",
    "Balance on one foot for 20 seconds each side.",
    "Take a short walk while listening to a song you like.",
    "Do 12 glute bridges.",
    "Touch your toes or reach toward your feet for 1 minute total.",
    "Do a 5-minute warm-up with easy movement.",
    "Stand and stretch after sitting for too long.",
    "Walk while talking on the phone today.",
    "Do 10 gentle side lunges.",
    "Try 1 minute of deep breathing while standing tall.",
    "Do 15 arm circles forward and backward.",
    "Take a quick lap around your building or street.",
    "Spend 5 minutes improving your posture.",
    "Do 10 sit-to-stands from a chair.",
    "Stretch your legs before bed for 5 minutes.",
    "Do 20 seconds of jumping in place three times.",
    "Carry groceries or a light bag with good posture.",
    "Take a break and walk 500 extra steps today.",
    "Do 10 standing knee lifts on each side.",
    "Reach overhead and stretch your sides for 2 minutes.",
    "Do a slow 5-minute cool-down walk.",
    "Stand instead of sitting for the next 10 minutes.",
    "Try 10 gentle toe touches.",
    "Do 8 push-ups using a wall, table, or floor.",
    "Take a short outdoor walk and notice your breathing.",
    "Stretch your wrists and hands for 2 minutes.",
    "Do 15 seated leg lifts.",
    "Walk to get water instead of waiting until later.",
    "Do a quick dance break for one song.",
    "Stretch your hips for 3 minutes.",
    "Take 5 minutes to move instead of scrolling your phone."
  ],
  Social: [
    "Send a thoughtful message to someone you have not talked to in a while.",
    "Give one genuine compliment today.",
    "Call a family member or friend just to check in.",
    "Invite someone to grab coffee or chat later this week.",
    "Thank someone for something specific they did recently.",
    "Start a short conversation with a classmate, coworker, or neighbor.",
    "Reply warmly to three messages you have been leaving unopened.",
    "Share a helpful article, song, or idea with a friend.",
    "Ask someone how they are doing and really listen.",
    "Reconnect with an old friend using a simple hello message.",
    "Smile and say hello to someone you usually pass by quietly.",
    "Send a good morning or good evening message to someone you care about.",
    "Reply kindly to one person you have been meaning to answer.",
    "Thank a teacher, coworker, or friend for their help.",
    "Ask someone a simple question about their day.",
    "Share a funny meme or joke with a friend.",
    "Leave a positive comment on someone's post.",
    "Text someone to wish them a good day.",
    "Start a chat with someone you normally only greet briefly.",
    "Ask a friend for a song, movie, or book recommendation.",
    "Introduce yourself to someone new if the chance comes up.",
    "Check in on someone who seemed tired or stressed lately.",
    "Say thank you clearly and warmly to someone today.",
    "Send a voice note instead of a text to make it more personal.",
    "Ask someone about something they enjoy doing.",
    "Tell a friend or family member that you appreciate them.",
    "Make eye contact and greet a cashier or worker politely.",
    "Reply to an old chat instead of leaving it hanging.",
    "Ask someone how their week has been going.",
    "Share a useful tip with a classmate, teammate, or friend.",
    "Message someone first instead of waiting for them to text you.",
    "Give encouragement to someone working hard.",
    "Ask a family member about a memory they like.",
    "Tell someone they did a good job today.",
    "Spend 5 minutes chatting without looking at your phone.",
    "Send a quick message to make plans for later this week.",
    "Thank someone for always being supportive.",
    "Ask a quiet person how they are doing today.",
    "Reply with more than one word in your next conversation.",
    "Say something kind to a sibling, cousin, or roommate.",
    "Share a photo or memory with someone close to you.",
    "Ask a friend what they are currently excited about.",
    "Make one conversation a little longer than usual today.",
    "Encourage someone who is learning something new.",
    "Send a message just to say you were thinking of them.",
    "Ask someone if they need help with anything small.",
    "Start a light conversation while waiting in line or sitting nearby.",
    "Tell someone one thing you admire about them.",
    "Respond kindly and fully to a message you might usually ignore.",
    "Reach out to someone and ask how their day is going."
  ]
};

const defaultState = {
  points: 0,
  currentChallenge: null,
  selectedCategory: "Productivity",
  completedChallenges: [],
  completedToday: {
    date: null,
    count: 0
  },
  shownToday: {
    date: null,
    categories: {
      Productivity: [],
      Fitness: [],
      Social: []
    }
  },
  usedChallenges: {
    Productivity: [],
    Fitness: [],
    Social: []
  }
};

const mainContent = document.getElementById("main-content");
const generateButton = document.getElementById("generate-btn");
const completeButton = document.getElementById("complete-btn");
const challengeBox = document.getElementById("challenge-box");
const pointsDisplay = document.getElementById("points");
const categoryButtons = document.querySelectorAll(".category-btn");
const appCard = document.querySelector(".app-card");

let state = loadState();

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!savedState) {
    return cloneDefaultState();
  }

  const parsedState = JSON.parse(savedState);

  return {
    ...cloneDefaultState(),
    ...parsedState,
    shownToday: {
      ...cloneDefaultState().shownToday,
      ...parsedState.shownToday,
      categories: {
        ...cloneDefaultState().shownToday.categories,
        ...parsedState.shownToday?.categories
      }
    },
    usedChallenges: {
      ...cloneDefaultState().usedChallenges,
      ...parsedState.usedChallenges
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function syncDailyProgress() {
  const today = getToday();

  if (state.completedToday.date !== today) {
    state.completedToday = {
      date: today,
      count: 0
    };

    if (state.currentChallenge && state.currentChallenge.date !== today) {
      state.currentChallenge = null;
    }
  }

  if (state.shownToday.date !== today) {
    state.shownToday = {
      date: today,
      categories: {
        Productivity: [],
        Fitness: [],
        Social: []
      }
    };
  }
}

function updatePoints() {
  pointsDisplay.textContent = state.points;
}

function updateCategorySelection() {
  categoryButtons.forEach((button) => {
    const isActive = button.dataset.category === state.selectedCategory;
    button.classList.toggle("active", isActive);
    button.disabled = false;
  });
}

function setCategoryButtonsDisabled(isDisabled) {
  categoryButtons.forEach((button) => {
    button.disabled = isDisabled;
  });
}

function showFinishedForToday() {
  mainContent.classList.add("finished-day");
  appCard.classList.add("day-complete");
  challengeBox.classList.add("completion-message");
  challengeBox.textContent = "🎉🏆 You finished all 3 Daily challenges! Amazing work today. Come back tomorrow for a fresh set of wins! 🚀✨";
  generateButton.classList.add("hidden");
  completeButton.classList.add("hidden");
  setCategoryButtonsDisabled(true);
  saveState();
}

function showStandardLayout() {
  mainContent.classList.remove("finished-day");
  appCard.classList.remove("day-complete");
  challengeBox.classList.remove("completion-message");
}

function showCurrentChallenge() {
  syncDailyProgress();
  updateCategorySelection();

  if (state.currentChallenge && state.currentChallenge.date === getToday()) {
    showStandardLayout();
    challengeBox.textContent = `${state.currentChallenge.category}: ${state.currentChallenge.text}`;

    if (!state.currentChallenge.completed) {
      generateButton.classList.add("hidden");
      completeButton.classList.remove("hidden");
      setCategoryButtonsDisabled(true);
      return;
    }

    if (state.completedToday.count >= DAILY_CHALLENGE_LIMIT) {
      showFinishedForToday();
      return;
    }

    generateButton.classList.remove("hidden");
    completeButton.classList.add("hidden");
    setCategoryButtonsDisabled(false);
    challengeBox.textContent = `Last completed challenge: ${state.currentChallenge.text}`;
    return;
  }

  if (state.completedToday.count >= DAILY_CHALLENGE_LIMIT) {
    showFinishedForToday();
    return;
  }

  showStandardLayout();
  generateButton.classList.remove("hidden");
  completeButton.classList.add("hidden");
  setCategoryButtonsDisabled(false);
  challengeBox.textContent = DEFAULT_MESSAGE;
}

function getRandomChallenge(category) {
  const allChallenges = challenges[category];
  let availableChallenges = allChallenges.filter(
    (challenge) => !state.shownToday.categories[category].includes(challenge)
  );

  // If all challenges in a category were somehow shown in one day, allow the pool again.
  if (availableChallenges.length === 0) {
    state.shownToday.categories[category] = [];
    availableChallenges = [...allChallenges];
  }

  const randomIndex = Math.floor(Math.random() * availableChallenges.length);
  return availableChallenges[randomIndex];
}

function generateChallenge() {
  syncDailyProgress();
  const today = getToday();

  // Only one active challenge can be shown at a time.
  if (state.currentChallenge && state.currentChallenge.date === today && !state.currentChallenge.completed) {
    challengeBox.textContent = `Finish your current challenge first: ${state.currentChallenge.text}`;
    generateButton.classList.add("hidden");
    completeButton.classList.remove("hidden");
    setCategoryButtonsDisabled(true);
    return;
  }

  if (state.completedToday.count >= DAILY_CHALLENGE_LIMIT) {
    showFinishedForToday();
    return;
  }

  const selectedCategory = state.selectedCategory;
  const selectedChallenge = getRandomChallenge(selectedCategory);

  state.currentChallenge = {
    date: today,
    category: selectedCategory,
    text: selectedChallenge,
    completed: false
  };
  state.shownToday.categories[selectedCategory].push(selectedChallenge);

  saveState();

  challengeBox.textContent = `${selectedCategory}: ${selectedChallenge}`;
  generateButton.classList.add("hidden");
  completeButton.classList.remove("hidden");
  setCategoryButtonsDisabled(true);
}

function completeChallenge() {
  if (!state.currentChallenge || state.currentChallenge.completed) {
    return;
  }

  syncDailyProgress();

  const challengeId = `${state.currentChallenge.date}-${state.currentChallenge.category}-${state.currentChallenge.text}`;

  // This avoids earning points twice for the same challenge.
  if (state.completedChallenges.includes(challengeId)) {
    challengeBox.textContent = "This challenge was already completed and scored.";
    completeButton.classList.add("hidden");
    return;
  }

  const earnedPoints = categoryPoints[state.currentChallenge.category];

  state.points += earnedPoints;
  state.currentChallenge.completed = true;
  state.completedChallenges.push(challengeId);
  state.completedToday.count += 1;

  saveState();
  updatePoints();

  if (state.completedToday.count >= DAILY_CHALLENGE_LIMIT) {
    showFinishedForToday();
  } else {
    challengeBox.textContent = `${state.currentChallenge.text} Nice work. You earned ${earnedPoints} points. You can take on ${DAILY_CHALLENGE_LIMIT - state.completedToday.count} more challenge(s) today.`;
    generateButton.classList.remove("hidden");
    setCategoryButtonsDisabled(false);
  }

  completeButton.classList.add("hidden");
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.disabled) {
      return;
    }

    state.selectedCategory = button.dataset.category;
    updateCategorySelection();
    saveState();
  });
});

generateButton.addEventListener("click", generateChallenge);
completeButton.addEventListener("click", completeChallenge);

updatePoints();
showCurrentChallenge();
