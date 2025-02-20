const express = require("express");
const app = express();
app.use(express.json());

// Dataset in json format
const HOK = {
  heroes: [
    {
      id: "h1",
      name: "Arthur",
      class: "Warrior",
      lane: "Solo",
      faction: "Avalon",
    },
    {
      id: "h2",
      name: "Diao Chan",
      class: "Mage",
      lane: "Mid",
      faction: "Frost Order",
    },
    {
      id: "h3",
      name: "Sun Ce",
      class: "Tank",
      lane: "Jungle",
      faction: "Eastern Seas",
    },
    {
      id: "h4",
      name: "Marco Polo",
      class: "Marksman",
      lane: "Bot",
      faction: "Western Lands",
    },
    {
      id: "h5",
      name: "Miyamoto Musashi",
      class: "Assassin",
      lane: "Jungle",
      faction: "Ronin Clan",
    },
    {
      id: "h6",
      name: "Angela",
      class: "Mage",
      lane: "Mid",
      faction: "Magic Council",
    },
    {
      id: "h7",
      name: "Lü Bu",
      class: "Fighter",
      lane: "Solo",
      faction: "Conquerors",
    },
    {
      id: "h8",
      name: "Gongsun Li",
      class: "Marksman",
      lane: "Bot",
      faction: "Shadow Sect",
    },
    {
      id: "h9",
      name: "Han Xin",
      class: "Assassin",
      lane: "Jungle",
      faction: "Rebel Forces",
    },
    {
      id: "h10",
      name: "Zhuge Liang",
      class: "Mage",
      lane: "Mid",
      faction: "Strategists",
    },
  ],
  lanes: [
    { id: "l1", name: "Solo Lane", description: "Strong 1v1 dueling lane" },
    {
      id: "l2",
      name: "Mid Lane",
      description: "Central lane for mages and roamers",
    },
    {
      id: "l3",
      name: "Jungle",
      description: "Neutral area for assassins and tanks",
    },
    {
      id: "l4",
      name: "Bot Lane",
      description: "Lane for marksmen and supports",
    },
  ],
  classes: [
    { id: "c1", name: "Warrior", role: "Balanced melee combatant" },
    { id: "c2", name: "Mage", role: "Ranged spellcaster" },
    { id: "c3", name: "Tank", role: "High durability frontline protector" },
    { id: "c4", name: "Marksman", role: "High damage ranged attacker" },
    { id: "c5", name: "Assassin", role: "Burst damage specialist" },
    { id: "c6", name: "Support", role: "Healer or crowd-control provider" },
    {
      id: "c7",
      name: "Fighter",
      role: "Hybrid between Warrior and Assassin",
    },
  ],
  factions: [
    {
      id: "f1",
      name: "Avalon",
      description: "Legendary kingdom of warriors",
    },
    {
      id: "f2",
      name: "Frost Order",
      description: "Ice magic users and sorcerers",
    },
    {
      id: "f3",
      name: "Eastern Seas",
      description: "Seafarers and maritime heroes",
    },
    {
      id: "f4",
      name: "Western Lands",
      description: "Gunslingers and merchants",
    },
    {
      id: "f5",
      name: "Ronin Clan",
      description: "Wandering samurai warriors",
    },
    {
      id: "f6",
      name: "Magic Council",
      description: "Supreme wizards and spellcasters",
    },
    {
      id: "f7",
      name: "Conquerors",
      description: "Warlords seeking domination",
    },
    {
      id: "f8",
      name: "Shadow Sect",
      description: "Assassins lurking in darkness",
    },
    {
      id: "f9",
      name: "Rebel Forces",
      description: "Fighters against oppression",
    },
    { id: "f10", name: "Strategists", description: "Tactical masterminds" },
  ],
};

// 1. Return all heroes
app.get("/honor-of-kings/heroes", (req, res) => {
  res.send(HOK.heroes);
});

// 2. Return specific hero
app.get("/honor-of-kings/heroes/:id", (req, res) => {
  const hero = HOK.heroes.find((hero) => hero.id === req.params.id);
  if (!hero) {
    return res.status(404).send("The hero with the given ID was not found.");
  }
  res.send(hero);
});

// 3. Return specific lane
app.get("/honor-of-kings/lanes/:lane", (req, res) => {
  const hero = HOK.heroes.filter(
    (hero) => hero.lane.toLowerCase() === req.params.lane.toLowerCase()
  );
  if (hero.length === 0) {
    return res.status(404).send("No heroes found in the given lane.");
  }
  res.send(hero);
});

// 4. Return specific faction
app.get("/honor-of-kings/factions/:faction", (req, res) => {
  const hero = HOK.heroes.filter(
    (hero) => hero.faction.toLowerCase() === req.params.faction.toLowerCase()
  );
  if (hero.length === 0) {
    return res.status(404).send("No heroes found in the given faction.");
  }
  res.send(hero);
});

// 4. Return specific class
app.get("/honor-of-kings/classes/:class", (req, res) => {
  const hero = HOK.heroes.filter(
    (hero) => hero.class.toLowerCase() === req.params.class.toLowerCase()
  );
  if (hero.length === 0) {
    return res.status(404).send("No heroes found in the given class.");
  }
  res.send(hero);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
