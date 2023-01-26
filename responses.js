function getBotResponse(input) {

  // Simple responses
  if (input == "Hello") {
    return "Hey";
  } else if (input == "Bye") {
    return "bye";
  } else if (input == "How are you?") {
    return "I am fine, thank you.";
  } else if (input == "Goodbye") {
    return "Talk to you later!";
  } else if (input == "What is this website about?") {
    return "This website contains videogames created by 10th grade Latitude students for 5th graders."
  } else if (input == "Are these games free?") {
    return "These games are free. You can click the link under the names to play the games."
  } else  if (input == "Are these games free?") {
    return "These games are free. You can click the link under the names to play the games."
  } else {
    return "Try asking something else related to the website or the game.";
  }
}