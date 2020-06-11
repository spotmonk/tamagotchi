const stats = [
  {
    eat: 100,
    fun: 50,
    strength: 100,
    energy: 50,
  },

];

const buttons = ['🥗', '🍦', '⚽️', ' 🎱', '🏃💨', '⚔️', '😴', '🛌'];

const getStats = () => stats;

const getButtons = () => buttons;

const updateStat = (stat, number) => {
  if (stats[0][stat] + number > 100) {
    stats[0][stat] = 100;
  } else if (stats[0][stat] + number < 0) {
    stats[0][stat] = 0;
  } else { stats[0][stat] += number; }
};

export default { getStats, getButtons, updateStat };
