/* Original AI-assisted teaching bank. Build words, apply familiar roots to
 * other words, and distinguish real word families from spelling traps.
 * Tiers are editorial difficulty bands, not grade-level or efficacy claims.
 * Some borrowed endings need word-specific explanations. See docs/content.md.
 */

export const PREFIXES = {
  "re": "again, or back",
  "con": "with, together",
  "com": "with, together",
  "in": "not, or sometimes into",
  "im": "not, or sometimes into",
  "sub": "under",
  "trans": "across",
  "tran": "across (a form of trans-)",
  "pre": "before",
  "ex": "out",
  "de": "down, away, or the opposite",
  "dis": "apart, or not",
  "pro": "forward",
  "inter": "between",
  "super": "above, beyond",
  "micro": "very small",
  "mega": "very large",
  "auto": "self",
  "tele": "far off",
  "anti": "against",
  "un": "not, or reversing an action",
  "mis": "wrongly",
  "peri": "around",
  "photo": "light",
  "bio": "life",
  "sym": "together",
  "thermo": "heat",
  "e": "out",
  "at": "toward",
  "contra": "against",
  "ver": "true",
  "para": "beside",
  "dia": "across",
  "circum": "around",
  "bene": "good, well",
  "ob": "against, or in the way",
  "geo": "earth",
  "cor": "with, together",
  "manu": "hand"
};

export const WORD_PARTS = {
  "happy": "feeling pleased or glad",
  "teach": "help someone learn",
  "build": "put parts together to make something",
  "speed": "a word that can stand on its own"
};

export const BASE_VARIANTS = {
  "phone": "phon",
  "vise": "vis",
  "scrib": "script",
  "therm": "thermo"
};

export const SUFFIXES = {
  "ion": "the act or result of",
  "tion": "the act or result of",
  "able": "able to be",
  "ible": "able to be",
  "or": "one who, or the thing that",
  "er": "one who, or the thing that",
  "ive": "tending to",
  "ment": "the result of",
  "ure": "the act or result of",
  "ist": "a person who",
  "ology": "the study of",
  "ic": "relating to",
  "al": "relating to",
  "y": "an ending with different jobs: it can form a noun, or mean full of or like",
  "ly": "in that way",
  "ator": "one who does it",
  "ience": "an ending in a borrowed word; its job depends on the word",
  "ary": "a place or thing for",
  "o": "a joining letter, there only to make the word sayable",
  "i": "a joining letter, there only to make the word sayable"
};

export const BASES = [
  {
    "id": "struct",
    "form": "struct",
    "meaning": "build",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "construction",
        "putting a building up"
      ],
      [
        "instructions",
        "they build knowledge into you"
      ],
      [
        "destruction",
        "un-building something"
      ]
    ],
    "words": [
      {
        "word": "construct",
        "parts": [
          "con",
          "struct"
        ],
        "clue": "to build something by putting parts together"
      },
      {
        "word": "instruct",
        "parts": [
          "in",
          "struct"
        ],
        "clue": "to build knowledge into someone; to teach"
      },
      {
        "word": "destruction",
        "parts": [
          "de",
          "struct",
          "ion"
        ],
        "clue": "the act of un-building something"
      },
      {
        "word": "reconstruct",
        "parts": [
          "re",
          "con",
          "struct"
        ],
        "clue": "to build something back again after it fell apart"
      },
      {
        "word": "structure",
        "parts": [
          "struct",
          "ure"
        ],
        "clue": "the result of building; how a thing is put together"
      }
    ]
  },
  {
    "id": "tract",
    "form": "tract",
    "meaning": "pull or drag",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "tractor",
        "the thing that pulls on a farm"
      ],
      [
        "attract",
        "pull something toward you"
      ],
      [
        "subtract",
        "pull a number out of another"
      ]
    ],
    "words": [
      {
        "word": "tractor",
        "parts": [
          "tract",
          "or"
        ],
        "clue": "the machine that does the pulling on a farm"
      },
      {
        "word": "attract",
        "parts": [
          "at",
          "tract"
        ],
        "clue": "to pull something toward you"
      },
      {
        "word": "subtract",
        "parts": [
          "sub",
          "tract"
        ],
        "clue": "to pull a number out from under another"
      },
      {
        "word": "extract",
        "parts": [
          "ex",
          "tract"
        ],
        "clue": "to pull something out"
      },
      {
        "word": "retract",
        "parts": [
          "re",
          "tract"
        ],
        "clue": "to pull something back in, like a cat’s claws"
      },
      {
        "word": "distraction",
        "parts": [
          "dis",
          "tract",
          "ion"
        ],
        "clue": "the result of your attention being pulled apart"
      }
    ]
  },
  {
    "id": "port",
    "form": "port",
    "meaning": "carry",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "porter",
        "a person whose job includes carrying luggage"
      ],
      [
        "transport",
        "carrying something across"
      ],
      [
        "portable",
        "light enough to be carried"
      ]
    ],
    "words": [
      {
        "word": "transport",
        "parts": [
          "trans",
          "port"
        ],
        "clue": "to carry something across a distance"
      },
      {
        "word": "import",
        "parts": [
          "im",
          "port"
        ],
        "clue": "to carry goods into a country"
      },
      {
        "word": "export",
        "parts": [
          "ex",
          "port"
        ],
        "clue": "to carry goods out of a country"
      },
      {
        "word": "portable",
        "parts": [
          "port",
          "able"
        ],
        "clue": "light enough to be carried"
      },
      {
        "word": "reporter",
        "parts": [
          "re",
          "port",
          "er"
        ],
        "clue": "a person who carries the news back to you"
      }
    ]
  },
  {
    "id": "dict",
    "form": "dict",
    "meaning": "say or speak",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "dictionary",
        "tells you what words say"
      ],
      [
        "predict",
        "say it before it happens"
      ],
      [
        "dictate",
        "say it out loud for someone to write down"
      ]
    ],
    "words": [
      {
        "word": "predict",
        "parts": [
          "pre",
          "dict"
        ],
        "clue": "to say what will happen before it does"
      },
      {
        "word": "contradict",
        "parts": [
          "contra",
          "dict"
        ],
        "clue": "to say the opposite of what someone just said"
      },
      {
        "word": "dictionary",
        "parts": [
          "dict",
          "ion",
          "ary"
        ],
        "clue": "the book that tells you how words are said and what they mean"
      },
      {
        "word": "verdict",
        "parts": [
          "ver",
          "dict"
        ],
        "clue": "the true thing a jury says at the end of a trial"
      }
    ]
  },
  {
    "id": "spect",
    "form": "spect",
    "meaning": "look or watch",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "spectacles",
        "the glasses you look through"
      ],
      [
        "inspect",
        "look into something closely"
      ],
      [
        "spectator",
        "a person who watches"
      ]
    ],
    "words": [
      {
        "word": "inspect",
        "parts": [
          "in",
          "spect"
        ],
        "clue": "to look into something carefully"
      },
      {
        "word": "spectator",
        "parts": [
          "spect",
          "ator"
        ],
        "clue": "a person who watches a game"
      },
      {
        "word": "prospect",
        "parts": [
          "pro",
          "spect"
        ],
        "clue": "looking forward to what might come"
      },
      {
        "word": "inspector",
        "parts": [
          "in",
          "spect",
          "or"
        ],
        "clue": "the person whose job is to look closely at things"
      }
    ]
  },
  {
    "id": "rupt",
    "form": "rupt",
    "meaning": "break or burst",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "erupt",
        "a volcano bursting out"
      ],
      [
        "interrupt",
        "breaking in while someone talks"
      ],
      [
        "rupture",
        "a break, or a burst"
      ]
    ],
    "words": [
      {
        "word": "erupt",
        "parts": [
          "e",
          "rupt"
        ],
        "clue": "to burst out, like a volcano"
      },
      {
        "word": "interrupt",
        "parts": [
          "inter",
          "rupt"
        ],
        "clue": "to break in between someone’s words"
      },
      {
        "word": "disrupt",
        "parts": [
          "dis",
          "rupt"
        ],
        "clue": "to break something apart so it cannot carry on"
      },
      {
        "word": "rupture",
        "parts": [
          "rupt",
          "ure"
        ],
        "clue": "the result of something breaking open"
      }
    ]
  },
  {
    "id": "vis",
    "form": "vis",
    "meaning": "see",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "visible",
        "able to be seen"
      ],
      [
        "television",
        "seeing something far away"
      ],
      [
        "visit",
        "go somewhere to see it"
      ]
    ],
    "words": [
      {
        "word": "visible",
        "parts": [
          "vis",
          "ible"
        ],
        "clue": "able to be seen"
      },
      {
        "word": "invisible",
        "parts": [
          "in",
          "vis",
          "ible"
        ],
        "clue": "NOT able to be seen"
      },
      {
        "word": "vision",
        "parts": [
          "vis",
          "ion"
        ],
        "clue": "the act of seeing"
      },
      {
        "word": "supervise",
        "parts": [
          "super",
          "vise"
        ],
        "clue": "to watch over someone from above"
      },
      {
        "word": "television",
        "parts": [
          "tele",
          "vis",
          "ion"
        ],
        "clue": "seeing something happening far away"
      }
    ]
  },
  {
    "id": "aud",
    "form": "aud",
    "meaning": "hear",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "audience",
        "the people who came to hear it"
      ],
      [
        "audible",
        "loud enough to hear"
      ],
      [
        "audio",
        "the part you hear"
      ]
    ],
    "words": [
      {
        "word": "audible",
        "parts": [
          "aud",
          "ible"
        ],
        "clue": "loud enough to be heard"
      },
      {
        "word": "inaudible",
        "parts": [
          "in",
          "aud",
          "ible"
        ],
        "clue": "too quiet to be heard at all"
      },
      {
        "word": "audience",
        "parts": [
          "aud",
          "ience"
        ],
        "clue": "the people who came to hear it",
        "partMeanings": {
          "ience": "an ending in this borrowed word, not a general word-building rule"
        }
      },
      {
        "word": "audiology",
        "parts": [
          "aud",
          "i",
          "ology"
        ],
        "clue": "the study of how ears work"
      }
    ]
  },
  {
    "id": "graph",
    "form": "graph",
    "meaning": "write or draw",
    "origin": "Greek",
    "tier": 2,
    "family": [
      [
        "autograph",
        "writing your own name"
      ],
      [
        "photograph",
        "a drawing made by light"
      ],
      [
        "graph",
        "a drawing of numbers"
      ]
    ],
    "words": [
      {
        "word": "autograph",
        "parts": [
          "auto",
          "graph"
        ],
        "clue": "writing your own name for a fan"
      },
      {
        "word": "photograph",
        "parts": [
          "photo",
          "graph"
        ],
        "clue": "a drawing made by light"
      },
      {
        "word": "paragraph",
        "parts": [
          "para",
          "graph"
        ],
        "clue": "a chunk of writing beside the others"
      },
      {
        "word": "telegraph",
        "parts": [
          "tele",
          "graph"
        ],
        "clue": "writing sent far away down a wire"
      },
      {
        "word": "biography",
        "parts": [
          "bio",
          "graph",
          "y"
        ],
        "clue": "the writing of someone’s life",
        "partMeanings": {
          "y": "a noun ending here, not the adjective ending meaning full of"
        }
      }
    ]
  },
  {
    "id": "phon",
    "form": "phon",
    "meaning": "sound or voice",
    "origin": "Greek",
    "tier": 2,
    "family": [
      [
        "telephone",
        "a voice carried far off"
      ],
      [
        "microphone",
        "catches a very small sound"
      ],
      [
        "symphony",
        "many sounds together"
      ]
    ],
    "words": [
      {
        "word": "telephone",
        "parts": [
          "tele",
          "phone"
        ],
        "clue": "a voice carried far away"
      },
      {
        "word": "microphone",
        "parts": [
          "micro",
          "phone"
        ],
        "clue": "the thing that catches a very small sound"
      },
      {
        "word": "megaphone",
        "parts": [
          "mega",
          "phone"
        ],
        "clue": "the cone that makes a voice very large"
      },
      {
        "word": "symphony",
        "parts": [
          "sym",
          "phon",
          "y"
        ],
        "clue": "many sounds played together",
        "partMeanings": {
          "y": "a noun ending here, not the adjective ending meaning full of"
        }
      }
    ]
  },
  {
    "id": "meter",
    "form": "meter",
    "meaning": "measure",
    "origin": "Greek",
    "tier": 2,
    "family": [
      [
        "thermometer",
        "measures how hot it is"
      ],
      [
        "speedometer",
        "measures how fast you are going"
      ],
      [
        "perimeter",
        "the measurement all the way around"
      ]
    ],
    "words": [
      {
        "word": "thermometer",
        "parts": [
          "thermo",
          "meter"
        ],
        "clue": "measures how hot something is"
      },
      {
        "word": "speedometer",
        "parts": [
          "speed",
          "o",
          "meter"
        ],
        "clue": "measures how fast the car is going"
      },
      {
        "word": "perimeter",
        "parts": [
          "peri",
          "meter"
        ],
        "clue": "the measurement all the way around a shape"
      },
      {
        "word": "diameter",
        "parts": [
          "dia",
          "meter"
        ],
        "clue": "the measurement straight across a circle"
      }
    ]
  },
  {
    "id": "ject",
    "form": "ject",
    "meaning": "throw",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "eject",
        "throw it out"
      ],
      [
        "inject",
        "throw medicine in with a needle"
      ],
      [
        "projector",
        "throws a picture forward"
      ]
    ],
    "words": [
      {
        "word": "eject",
        "parts": [
          "e",
          "ject"
        ],
        "clue": "to throw something out"
      },
      {
        "word": "inject",
        "parts": [
          "in",
          "ject"
        ],
        "clue": "to throw medicine INTO you with a needle"
      },
      {
        "word": "reject",
        "parts": [
          "re",
          "ject"
        ],
        "clue": "to throw something back because you do not want it"
      },
      {
        "word": "projector",
        "parts": [
          "pro",
          "ject",
          "or"
        ],
        "clue": "the machine that throws a picture forward onto a wall"
      }
    ]
  },
  {
    "id": "script",
    "form": "script",
    "meaning": "write",
    "origin": "Latin",
    "tier": 2,
    "family": [
      [
        "scribble",
        "writing in a hurry"
      ],
      [
        "prescription",
        "what the doctor writes for you"
      ],
      [
        "describe",
        "write or say what a thing is like"
      ]
    ],
    "words": [
      {
        "word": "description",
        "parts": [
          "de",
          "script",
          "ion"
        ],
        "clue": "the act of writing down what something is like"
      },
      {
        "word": "prescription",
        "parts": [
          "pre",
          "script",
          "ion"
        ],
        "clue": "what a doctor has to write before you can get the medicine"
      },
      {
        "word": "manuscript",
        "parts": [
          "manu",
          "script"
        ],
        "clue": "a book written out by hand, before there were printers"
      },
      {
        "word": "transcript",
        "parts": [
          "tran",
          "script"
        ],
        "clue": "speech carried across onto paper, word for word",
        "spellingNote": "The prefix trans- sometimes appears as tran- before s. Here tran + script spells transcript, with one s."
      }
    ]
  },
  {
    "id": "build",
    "form": "build",
    "meaning": "put parts together to make something",
    "origin": "English",
    "tier": 1,
    "family": [
      [
        "building",
        "something built"
      ],
      [
        "rebuild",
        "build again"
      ],
      [
        "rebuilt",
        "built again"
      ]
    ],
    "words": [
      {
        "word": "rebuild",
        "parts": [
          "re",
          "build"
        ],
        "clue": "to build it again"
      }
    ]
  },
  {
    "id": "happy",
    "form": "happy",
    "meaning": "feeling pleased or glad",
    "origin": "English",
    "tier": 1,
    "family": [
      [
        "happy",
        "feeling glad"
      ],
      [
        "unhappy",
        "not happy"
      ],
      [
        "happiness",
        "the feeling of being happy"
      ]
    ],
    "words": [
      {
        "word": "unhappy",
        "parts": [
          "un",
          "happy"
        ],
        "clue": "not happy"
      }
    ]
  },
  {
    "id": "teach",
    "form": "teach",
    "meaning": "help someone learn",
    "origin": "English",
    "tier": 1,
    "family": [
      [
        "teach",
        "help someone learn"
      ],
      [
        "teacher",
        "someone who teaches"
      ],
      [
        "teaching",
        "helping others learn"
      ]
    ],
    "words": [
      {
        "word": "teacher",
        "parts": [
          "teach",
          "er"
        ],
        "clue": "a person who teaches"
      }
    ]
  },
  {
    "id": "thermo",
    "form": "thermo",
    "meaning": "heat",
    "origin": "Greek",
    "tier": 2,
    "family": [
      [
        "thermometer",
        "an instrument that measures temperature"
      ],
      [
        "thermal",
        "relating to heat"
      ],
      [
        "thermostat",
        "a control for a heating or cooling system"
      ]
    ],
    "words": [
      {
        "word": "thermal",
        "parts": [
          "therm",
          "al"
        ],
        "clue": "relating to heat"
      }
    ]
  }
];

export const INFERENCES = [
  {
    "word": "retractable",
    "root": "tract",
    "rootMeaning": "pull",
    "tier": 2,
    "options": [
      "Able to be pulled back in",
      "Painted a bright colour",
      "Very heavy to lift"
    ],
    "answer": 0,
    "hint": {
      "text": "Look at the ending. <b>-able</b> always means the same thing.",
      "family": [
        [
          "breakable",
          "able to be broken"
        ],
        [
          "washable",
          "able to be washed"
        ],
        [
          "foldable",
          "able to be folded"
        ]
      ]
    },
    "why": "<b>re</b> = back, <b>tract</b> = pull, <b>able</b> = able to be. Able to be pulled back, like a cat’s claws, or a roof that slides away."
  },
  {
    "word": "audiology",
    "root": "aud",
    "rootMeaning": "hear",
    "tier": 2,
    "options": [
      "The study of hearing",
      "A very loud song",
      "A room with no windows"
    ],
    "answer": 0,
    "hint": {
      "text": "The ending <b>-ology</b> turns anything into a school subject.",
      "family": [
        [
          "biology",
          "the study of life"
        ],
        [
          "zoology",
          "the study of animals"
        ],
        [
          "geology",
          "the study of rocks"
        ]
      ]
    },
    "why": "<b>aud</b> = hear, <b>ology</b> = the study of. Put them together and it is the study of hearing."
  },
  {
    "word": "inaudible",
    "root": "aud",
    "rootMeaning": "hear",
    "tier": 2,
    "options": [
      "Impossible to hear",
      "Easy to hear",
      "Heard twice"
    ],
    "answer": 0,
    "hint": {
      "text": "The <b>in-</b> on the front is doing the same job as <b>un-</b>.",
      "family": [
        [
          "invisible",
          "not able to be seen"
        ],
        [
          "incomplete",
          "not finished"
        ],
        [
          "impossible",
          "not possible"
        ]
      ]
    },
    "why": "<b>in</b> = not, <b>aud</b> = hear, <b>ible</b> = able to be. Not able to be heard."
  },
  {
    "word": "circumspect",
    "root": "spect",
    "rootMeaning": "look",
    "tier": 3,
    "options": [
      "Looking carefully all around before acting",
      "Looking straight ahead only",
      "Refusing to look"
    ],
    "answer": 0,
    "hint": {
      "text": "The front piece is <b>circum-</b>. You have met it before without noticing.",
      "family": [
        [
          "circumference",
          "the distance around a circle"
        ],
        [
          "circumnavigate",
          "travel all the way around"
        ],
        [
          "circumstances",
          "the conditions surrounding a situation"
        ]
      ]
    },
    "why": "<b>circum</b> = around, <b>spect</b> = look. Looking all the way around before you move, which is being careful. Looking straight ahead is the opposite of going around, and refusing to look is not looking at all."
  },
  {
    "word": "transcribe",
    "root": "scrib",
    "rootMeaning": "write",
    "tier": 2,
    "options": [
      "To write something across into another form",
      "To read very fast",
      "To tear up a letter"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>trans-</b> means across. It is the same piece every time.",
      "family": [
        [
          "transport",
          "carry across"
        ],
        [
          "translate",
          "carry meaning across into another language"
        ],
        [
          "transatlantic",
          "across the Atlantic"
        ]
      ]
    },
    "why": "<b>trans</b> = across, <b>scrib</b> = write. To write it across: to take what someone said and move it onto paper."
  },
  {
    "word": "interject",
    "root": "ject",
    "rootMeaning": "throw",
    "tier": 3,
    "options": [
      "To throw a remark in between others",
      "To throw a ball very far",
      "To refuse to speak"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>inter-</b> means between. Not in, not out. Between.",
      "family": [
        [
          "interrupt",
          "break in between"
        ],
        [
          "intersection",
          "where two roads cross between"
        ],
        [
          "internet",
          "the net between all the computers"
        ]
      ]
    },
    "why": "<b>inter</b> = between, <b>ject</b> = throw. Throwing a remark in between other people’s words."
  },
  {
    "word": "deport",
    "root": "port",
    "rootMeaning": "carry",
    "tier": 3,
    "options": [
      "To carry someone away out of a country",
      "To carry something in",
      "To drop something"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>de-</b> takes something away, or sends it down.",
      "family": [
        [
          "deflate",
          "let the air out"
        ],
        [
          "descend",
          "go down"
        ],
        [
          "defrost",
          "take the frost away"
        ]
      ]
    },
    "why": "<b>de</b> = away, <b>port</b> = carry. To carry someone away, out of the country they are in."
  },
  {
    "word": "incorruptible",
    "root": "rupt",
    "rootMeaning": "break",
    "tier": 3,
    "options": [
      "Impossible to break down or spoil",
      "Easily broken",
      "Broken into three parts"
    ],
    "answer": 0,
    "hint": {
      "text": "This one has pieces on BOTH sides of the root. Read the front one first.",
      "family": [
        [
          "invisible",
          "not able to be seen"
        ],
        [
          "unbreakable",
          "not able to be broken"
        ],
        [
          "impossible",
          "not able to happen"
        ]
      ]
    },
    "why": "<b>in</b> = not, <b>cor</b> = together, <b>rupt</b> = break, <b>ible</b> = able to be. Not able to be broken down. It is used about people too: someone incorruptible cannot be talked into doing wrong."
  },
  {
    "word": "phonograph",
    "root": "phon",
    "rootMeaning": "sound",
    "tier": 2,
    "options": [
      "A machine that writes down sound",
      "A very quiet room",
      "A kind of telescope"
    ],
    "answer": 0,
    "hint": {
      "text": "Both halves are roots you know. <b>-graph</b> is the second one.",
      "family": [
        [
          "autograph",
          "writing your own name"
        ],
        [
          "photograph",
          "a drawing made by light"
        ],
        [
          "paragraph",
          "a chunk of writing"
        ]
      ]
    },
    "why": "<b>phon</b> = sound, <b>graph</b> = write. A machine that writes sound down. The very first record player did exactly that, by scratching a groove."
  },
  {
    "word": "benediction",
    "root": "dict",
    "rootMeaning": "say",
    "tier": 3,
    "options": [
      "Saying good things over someone",
      "A long argument",
      "A written contract"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>bene-</b> means good or well. Look for that meaning in the family words.",
      "family": [
        [
          "benefit",
          "a good thing you get"
        ],
        [
          "beneficial",
          "good for you"
        ],
        [
          "benevolent",
          "wanting good for people"
        ]
      ]
    },
    "why": "<b>bene</b> = good, <b>dict</b> = say, <b>ion</b> = the act of. The act of saying good things over someone. Its opposite is a <i>malediction</i>, because <b>mal-</b> means bad."
  },
  {
    "word": "obstruct",
    "root": "struct",
    "rootMeaning": "build",
    "tier": 3,
    "options": [
      "To build something in the way so nothing can pass",
      "To build very quickly",
      "To knock a wall down"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>ob-</b> means against, or in the way of.",
      "family": [
        [
          "obstacle",
          "a thing standing in your way"
        ],
        [
          "object",
          "to throw yourself against an idea"
        ],
        [
          "oppose",
          "to stand against"
        ]
      ]
    },
    "why": "<b>ob</b> = in the way, <b>struct</b> = build. To build something in the way. Knocking a wall down is the opposite: that is <i>destruction</i>."
  },
  {
    "word": "geothermal",
    "root": "thermo",
    "rootMeaning": "heat",
    "tier": 3,
    "options": [
      "To do with heat from inside the earth",
      "A very cold winter",
      "A kind of map"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>geo-</b> means earth. It is the front of a lot of school subjects.",
      "family": [
        [
          "geography",
          "writing about the earth"
        ],
        [
          "geology",
          "the study of the earth’s rocks"
        ],
        [
          "geometry",
          "measuring the earth"
        ]
      ]
    },
    "why": "<b>geo</b> = earth, <b>therm</b> = heat, and <b>al</b> = relating to. Geothermal means relating to heat inside the earth. The heat root appears as <b>therm</b> here and as <b>thermo</b> in thermometer."
  },
  {
    "word": "revise",
    "root": "vis",
    "rootMeaning": "see",
    "tier": 2,
    "options": [
      "To hide something from view",
      "To look over something again and improve it",
      "To predict what will happen"
    ],
    "answer": 1,
    "hint": {
      "text": "<b>re-</b> can mean again. The root can appear as <b>vis</b> or <b>vise</b>.",
      "family": [
        [
          "reread",
          "read again"
        ],
        [
          "replay",
          "play again"
        ],
        [
          "redo",
          "do again"
        ]
      ]
    },
    "why": "<b>re</b> = again and <b>vise</b> belongs to the seeing family. To revise a piece of writing is to look it over again and make changes that improve it."
  },
  {
    "word": "autobiography",
    "root": "graph",
    "rootMeaning": "write",
    "tier": 2,
    "options": [
      "An account someone writes about their own life",
      "An account someone writes about another person’s life",
      "An instrument that measures light"
    ],
    "answer": 0,
    "hint": {
      "text": "<b>auto-</b> means self. Think about who is doing the writing.",
      "family": [
        [
          "autograph",
          "your own handwritten name"
        ],
        [
          "automatic",
          "working by itself"
        ],
        [
          "autopilot",
          "a system that guides a vehicle automatically"
        ]
      ]
    },
    "why": "<b>auto</b> = self, <b>bio</b> = life, and <b>graphy</b> refers to writing or an account. An autobiography tells the writer’s own life story."
  },
  {
    "word": "photometer",
    "root": "meter",
    "rootMeaning": "measure",
    "tier": 2,
    "options": [
      "An instrument that measures temperature",
      "An instrument that measures speed",
      "An instrument that measures light"
    ],
    "answer": 2,
    "hint": {
      "text": "<b>photo-</b> means light. What would this instrument measure?",
      "family": [
        [
          "photograph",
          "an image made using light"
        ],
        [
          "photosynthesis",
          "plants using light to make food"
        ],
        [
          "photocell",
          "a device that responds to light"
        ]
      ]
    },
    "why": "<b>photo</b> = light and <b>meter</b> = measure. A photometer measures light, such as how bright it is."
  },
  {
    "word": "builder",
    "root": "build",
    "rootMeaning": "put parts together to make something",
    "tier": 1,
    "options": [
      "Something that has fallen apart",
      "A person who builds",
      "A place where tools are kept"
    ],
    "answer": 1,
    "hint": {
      "text": "The ending <b>-er</b> can name someone who does an action.",
      "family": [
        [
          "painter",
          "someone who paints"
        ],
        [
          "reader",
          "someone who reads"
        ],
        [
          "farmer",
          "someone who farms"
        ]
      ]
    },
    "why": "<b>build</b> names the action. Here, <b>-er</b> names the person doing it. A builder builds things."
  },
  {
    "word": "happily",
    "root": "happy",
    "rootMeaning": "feeling pleased or glad",
    "tier": 1,
    "options": [
      "In an angry way",
      "In a happy way",
      "Without making a sound"
    ],
    "answer": 1,
    "hint": {
      "text": "<b>-ly</b> often tells how an action happens.",
      "family": [
        [
          "quietly",
          "in a quiet way"
        ],
        [
          "slowly",
          "in a slow way"
        ],
        [
          "kindly",
          "in a kind way"
        ]
      ]
    },
    "why": "<b>happy + ly</b> gives <b>happily</b>: in a happy way. The final <b>y</b> of happy changes to <b>i</b> in this spelling."
  },
  {
    "word": "reteach",
    "root": "teach",
    "rootMeaning": "help someone learn",
    "tier": 1,
    "options": [
      "To forget a lesson",
      "To teach before breakfast",
      "To teach something again"
    ],
    "answer": 2,
    "hint": {
      "text": "Look at <b>re-</b>. What does it add to these familiar actions?",
      "family": [
        [
          "reread",
          "read again"
        ],
        [
          "replay",
          "play again"
        ],
        [
          "rebuild",
          "build again"
        ]
      ]
    },
    "why": "<b>re</b> = again and <b>teach</b> = help someone learn. To reteach a lesson is to teach it again."
  }
];

export const RELATIONS = [
  {
    "a": "uncle",
    "guess": "un + cle",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "Say the leftover piece out loud on its own: <b>cle</b>. Then look at what <b>un-</b> normally leaves behind.",
      "family": [
        [
          "unlock",
          "leaves <i>lock</i>"
        ],
        [
          "unfair",
          "leaves <i>fair</i>"
        ],
        [
          "untie",
          "leaves <i>tie</i>"
        ]
      ]
    },
    "note": "Nice trap. <b>un-</b> really does mean not, but there is no word <b>cle</b>. Uncle came whole from Latin <b>avunculus</b>, a mother’s brother."
  },
  {
    "a": "under",
    "guess": "un + der",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "Same test. Is <b>der</b> a word, or a root you have met?",
      "family": [
        [
          "unpack",
          "leaves <i>pack</i>"
        ],
        [
          "unwell",
          "leaves <i>well</i>"
        ],
        [
          "unkind",
          "leaves <i>kind</i>"
        ]
      ]
    },
    "note": "Same trap. <b>under</b> is one old English word, not a prefix stuck on <b>der</b>."
  },
  {
    "a": "unit",
    "guess": "un + it",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "Careful: this time the leftover IS a word. So ask the other question: does <i>not it</i> mean anything?",
      "family": [
        [
          "undo",
          "reverse what was done"
        ],
        [
          "unsafe",
          "not safe"
        ],
        [
          "unwrap",
          "remove the wrapping"
        ]
      ]
    },
    "note": "<b>Unit</b> comes from Latin <b>unus</b>, meaning one. Nothing to do with <b>un-</b> meaning not."
  },
  {
    "a": "corner",
    "guess": "corn + er",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "<b>-er</b> means one who does it. So ask yourself what the verb would have to be.",
      "family": [
        [
          "teacher",
          "one who teaches"
        ],
        [
          "farmer",
          "one who farms"
        ],
        [
          "painter",
          "one who paints"
        ]
      ]
    },
    "note": "A corner is not one who corns. It comes from Latin <b>cornu</b>, a horn , the pointy bit."
  },
  {
    "a": "misty",
    "guess": "mis + ty",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "There are two ways to cut this word. Try the other one before you answer.",
      "family": [
        [
          "rainy",
          "full of rain"
        ],
        [
          "dusty",
          "full of dust"
        ],
        [
          "foggy",
          "full of fog"
        ]
      ]
    },
    "note": "Careful: it splits as <b>mist + y</b>, full of mist. The <b>mis-</b> meaning wrongly is not in here at all."
  },
  {
    "a": "reason",
    "guess": "re + ason",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "What does <b>re-</b> leave behind in words where it really is <b>re-</b>?",
      "family": [
        [
          "rebuild",
          "leaves <i>build</i>"
        ],
        [
          "reheat",
          "leaves <i>heat</i>"
        ],
        [
          "redo",
          "leaves <i>do</i>"
        ]
      ]
    },
    "note": "There is no word <b>ason</b>. <b>Reason</b> arrived whole from Latin <b>ratio</b>."
  },
  {
    "a": "unhappy",
    "guess": "un + happy",
    "related": true,
    "tier": 1,
    "hint": {
      "text": "Cover the first two letters and read what is left.",
      "family": [
        [
          "unlock",
          "leaves <i>lock</i>"
        ],
        [
          "unfair",
          "leaves <i>fair</i>"
        ],
        [
          "unkind",
          "leaves <i>kind</i>"
        ]
      ]
    },
    "note": "Yes. <b>un-</b> meaning not, on the whole word <b>happy</b>."
  },
  {
    "a": "signature",
    "guess": "sign + ature",
    "related": true,
    "tier": 2,
    "hint": {
      "text": "The clue is the silent <b>g</b>. Listen for where it wakes up again.",
      "family": [
        [
          "sign",
          "the g goes quiet"
        ],
        [
          "signal",
          "the g comes back"
        ],
        [
          "design",
          "the same piece again"
        ]
      ]
    },
    "note": "Yes, and this is why there is a silent <b>g</b> in <b>sign</b>. You can hear it again in <b>signature</b> and <b>signal</b>."
  },
  {
    "a": "design",
    "guess": "de + sign",
    "related": true,
    "tier": 3,
    "hint": {
      "text": "Forget what design means today. Ask what <b>sign</b> means, and whether marking something out fits.",
      "family": [
        [
          "signature",
          "your own mark"
        ],
        [
          "signal",
          "a mark you send"
        ],
        [
          "signpost",
          "a mark that points"
        ]
      ]
    },
    "note": "Yes. To design is to mark something out. Same <b>sign</b> as in signature , the meaning shifted a long way but the family holds."
  },
  {
    "a": "resign",
    "guess": "re + sign",
    "related": true,
    "tier": 3,
    "hint": {
      "text": "<b>re-</b> can mean back as well as again. Try it with back.",
      "family": [
        [
          "return",
          "turn back"
        ],
        [
          "recall",
          "call back"
        ],
        [
          "reflect",
          "bend light back"
        ]
      ]
    },
    "note": "<b>Resign</b> belongs to the sign family, but its meaning has changed. Its Latin ancestor meant unseal or cancel. Today, resign can mean give up a position."
  },
  {
    "a": "knowledge",
    "guess": "know",
    "related": true,
    "tier": 3,
    "hint": {
      "text": "Ignore the ending for a moment. Look only at the first four letters.",
      "family": [
        [
          "know",
          "have it in your head"
        ],
        [
          "knew",
          "the past of know"
        ],
        [
          "unknown",
          "not known"
        ]
      ]
    },
    "note": "<b>Knowledge</b> belongs to the family of <b>know</b>. Its ending is historical: this is not a compound with the ordinary word <b>ledge</b>, and it does not make <b>-ledge</b> a reusable modern suffix.",
    "mode": "family"
  },
  {
    "a": "butterfly",
    "guess": "butter + fly",
    "related": true,
    "tier": 2,
    "hint": {
      "text": "Old English really did staple two plain words together to name animals.",
      "family": [
        [
          "grasshopper",
          "grass + hopper"
        ],
        [
          "dragonfly",
          "dragon + fly"
        ],
        [
          "woodpecker",
          "wood + pecker"
        ]
      ]
    },
    "note": "Genuinely yes, oddly enough. Old English <b>buttorfleoge</b>. Nobody is quite sure why butter."
  },
  {
    "a": "pineapple",
    "guess": "pine + apple",
    "related": true,
    "tier": 2,
    "hint": {
      "text": "Fruit names are often two words that describe what the thing looked like to whoever named it.",
      "family": [
        [
          "blackberry",
          "black + berry"
        ],
        [
          "strawberry",
          "straw + berry"
        ],
        [
          "pinecone",
          "pine + cone"
        ]
      ]
    },
    "note": "Yes. It was named for looking like a pine cone. English used to call pine cones pineapples."
  },
  {
    "a": "carpet",
    "guess": "car + pet",
    "related": false,
    "tier": 3,
    "hint": {
      "text": "Some <b>car</b> words really are cars. One of these three is not. Work out which, and why.",
      "family": [
        [
          "carpool",
          "car + pool, really is"
        ],
        [
          "carport",
          "car + port, really is"
        ],
        [
          "carpenter",
          "car + penter? there is no penter"
        ]
      ]
    },
    "note": "No car and no pet. From Latin <b>carpere</b>, to pluck , carpets were made from plucked cloth."
  }
];
