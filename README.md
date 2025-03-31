<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      border: 4px solid #9b59b6; /* Purple border */
      border-radius: 15px;
      padding: 20px;
      max-width: 600px;
      margin: 20px auto;
      text-align: center;
      background: #f9ecff; /* Light purple background */
      box-shadow: 0 0 10px rgba(155, 89, 182, 0.5); /* Glow effect */
    }
    h1 {
      color: #8e44ad; /* Darker purple */
      font-family: 'Comic Sans MS', cursive; /* Cute font */
    }
    .bounce {
      animation: bounce 2s infinite; /* Bouncing animation */
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-20px); }
      60% { transform: translateY(-10px); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hi 👋, I'm a <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28"> Developer</h1>
    <img src="https://media.giphy.com/media/KAq5w47R9rmTuvWOWa/giphy.gif" width="100" class="bounce">
    <h2>🌸 About Me</h2>
    <p>🎓 Student Applied Computer Science - Application Development at KdG</p>
    <p>📫 How to reach me: <strong>a@protonmail.com</strong></p>
    <p><img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="50"> Adding some sparkle! <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="50"></p>
  </div>
</body>
</html>
