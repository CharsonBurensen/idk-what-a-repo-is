elements.tocopherol = {
    color: "#094237",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 10000,
    state: "solid",
    density: 100,
        reactions: {
        "sodium_acetate": { elem1:"tocopheryl_acetate", elem2:"sodium" },
    }
};

elements.freakium = {
    color: "#ff4fed",
    behavior: behaviors.DGAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 30,
};

elements.tocopheryl_gas = {
    color: "#96e3d4",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 0,
    stateLow: ["tocopherol"],
};

elements.tocopheryl_acetate = {
    color: "#cffdff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 999999,
    state: "liquid",
    density: 720,
    temp: 30,
    tempHigh: 96,
    stateHigh: ["tocopheryl_gas"],
        reactions: {
        "oil": { elem1:"baby_oil", elem2:"baby_oil" },
    }
};

