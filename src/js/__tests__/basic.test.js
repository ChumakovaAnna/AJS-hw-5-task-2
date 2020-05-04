import getSpecialAttacks from "../basic";

const character = {
  name: "Archer",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Double shot",
      icon: "http://...",
      description: "Double shot deals double damage",
    },
    {
      id: 9,
      name: "Knockout punch",
      icon: "http://...",
    },
  ],
};

describe("getSpecialAttacks", () => {
  test("name, level", () => {
    const result = getSpecialAttacks(character);
    const expected = [{
      id: 8,
      name: "Double shot",
      icon: "http://...",
      description: "Double shot deals double damage",
    },
    {
      id: 9,
      name: "Knockout punch",
      icon: "http://...",
      description: "Описание недоступно",
    },
    ];
    expect(result).toEqual(expected);
  });
});
