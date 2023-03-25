// --- CUSTOM Random Thoughts Storage/Retrieval Utilities ---

const defaultRandomThought = {
  thought: 'thought', mood: 'mood', name: 'name', id: 0,
};

const randomThoughts = [];

const pushRandomThought = function pushRandomThought(randomThought) {
  randomThoughts.push(randomThought);
};

const popRandomThought = function popRandomThought() {
  const randomThought = randomThoughts.pop();
  return randomThought || defaultRandomThought;
};

module.exports = { pushRandomThought, popRandomThought };
