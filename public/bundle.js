(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // public/data.js
  var PREFIXES = {
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
  var WORD_PARTS = {
    "happy": "feeling pleased or glad",
    "teach": "help someone learn",
    "build": "put parts together to make something",
    "speed": "a word that can stand on its own"
  };
  var BASE_VARIANTS = {
    "phone": "phon",
    "vise": "vis",
    "scrib": "script",
    "therm": "thermo"
  };
  var SUFFIXES = {
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
  var BASES = [
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
          "clue": "to pull something back in, like a cat\u2019s claws"
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
          "clue": "to break in between someone\u2019s words"
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
          "clue": "the writing of someone\u2019s life",
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
  var INFERENCES = [
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
      "why": "<b>re</b> = back, <b>tract</b> = pull, <b>able</b> = able to be. Able to be pulled back, like a cat\u2019s claws, or a roof that slides away."
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
      "why": "<b>inter</b> = between, <b>ject</b> = throw. Throwing a remark in between other people\u2019s words."
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
            "the study of the earth\u2019s rocks"
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
        "An account someone writes about another person\u2019s life",
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
      "why": "<b>auto</b> = self, <b>bio</b> = life, and <b>graphy</b> refers to writing or an account. An autobiography tells the writer\u2019s own life story."
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
  var RELATIONS = [
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
      "note": "Nice trap. <b>un-</b> really does mean not, but there is no word <b>cle</b>. Uncle came whole from Latin <b>avunculus</b>, a mother\u2019s brother."
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

  // public/engine.js
  var BASE_IDS = new Set(BASES.map((b) => b.id));
  var ITEM_IDS = /* @__PURE__ */ new Set([
    ...BASES.flatMap((b) => b.words.map((w) => `build:${w.word}`)),
    ...INFERENCES.map((i) => `infer:${i.word}`),
    ...RELATIONS.map((r) => `relate:${r.a}`)
  ]);
  var object = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  var counter = (v) => Number.isSafeInteger(v) && v >= 0 && v <= 1e6 ? v : 0;
  var WINDOW = 6;
  var PROBE_TIERS = [1, 2, 3];
  function createState(saved = {}) {
    const raw = object(saved) ? saved : {};
    const probeScore = (Array.isArray(raw.probeScore) ? raw.probeScore : []).filter((p) => object(p) && [1, 2, 3].includes(p.tier) && typeof p.correct === "boolean").slice(0, 3).map((p) => ({ tier: p.tier, correct: p.correct, hinted: p.hinted === true }));
    const demonstrated = /* @__PURE__ */ new Map();
    for (const id of Object.keys(object(raw.demonstrated) ? raw.demonstrated : {}).sort()) {
      const kinds = raw.demonstrated[id];
      if (BASE_IDS.has(id) && Array.isArray(kinds)) demonstrated.set(id, new Set(kinds.filter((k) => k === "build" || k === "infer")));
    }
    const answered = counter(raw.answered);
    return {
      tier: [1, 2, 3].includes(raw.tier) ? raw.tier : 1,
      placed: raw.placed === true || probeScore.length === 3,
      probeIndex: probeScore.length,
      probeScore,
      relief: raw.relief === true,
      recent: (Array.isArray(raw.recent) ? raw.recent : []).filter((v) => typeof v === "boolean").slice(-WINDOW),
      demonstrated,
      usedItems: new Set((Array.isArray(raw.usedItems) ? raw.usedItems : []).filter((id) => ITEM_IDS.has(id))),
      answered,
      correct: Math.min(counter(raw.correct), answered)
    };
  }
  function serialize(state) {
    return {
      tier: state.tier,
      placed: state.placed,
      probeIndex: state.probeIndex,
      probeScore: state.probeScore,
      relief: state.relief,
      recent: [...state.recent],
      demonstrated: Object.fromEntries(
        [...state.demonstrated].map(([k, v]) => [k, [...v]])
      ),
      usedItems: [...state.usedItems],
      answered: state.answered,
      correct: state.correct
    };
  }
  function isMastered(state, baseId) {
    const kinds = state.demonstrated.get(baseId);
    return !!kinds?.has("build") && kinds.has("infer");
  }
  function masteredCount(state) {
    let n = 0;
    for (const id of state.demonstrated.keys()) if (isMastered(state, id)) n += 1;
    return n;
  }
  function accuracy(state) {
    if (!state.recent.length) return 1;
    return state.recent.filter(Boolean).length / state.recent.length;
  }
  function highestCleared(state) {
    return state.probeScore.reduce((hi, p) => p.correct && !p.hinted && p.tier > hi ? p.tier : hi, 0);
  }
  function nextTier(state) {
    if (!state.placed) {
      const wanted = PROBE_TIERS[Math.min(state.probeIndex, PROBE_TIERS.length - 1)];
      return Math.min(wanted, highestCleared(state) + 1);
    }
    if (state.relief) return Math.max(1, state.tier - 1);
    return state.tier;
  }
  function recordProbe(state, correct, tier, hinted = false) {
    state.probeScore.push({ tier, correct, hinted });
    state.probeIndex += 1;
    if (state.probeIndex < PROBE_TIERS.length) return;
    state.tier = Math.max(1, highestCleared(state));
    state.placed = true;
  }
  function recordAnswer(state, { correct, baseId, kind, hinted = false }) {
    const servedTier = nextTier(state);
    correct = correct === true;
    hinted = hinted === true;
    state.answered = Math.min(1e6, state.answered + 1);
    if (correct) state.correct = Math.min(state.answered, state.correct + 1);
    if (correct && !hinted && BASE_IDS.has(baseId) && ["build", "infer"].includes(kind)) {
      if (!state.demonstrated.has(baseId)) state.demonstrated.set(baseId, /* @__PURE__ */ new Set());
      state.demonstrated.get(baseId).add(kind);
    }
    state.relief = !correct;
    if (!state.placed) {
      recordProbe(state, correct, servedTier, hinted);
      return;
    }
    if (hinted) return;
    state.recent.push(correct);
    if (state.recent.length > WINDOW) state.recent.shift();
    if (state.recent.length < WINDOW) return;
    const acc = accuracy(state);
    if (acc > 0.9 && state.tier < 3) {
      state.tier += 1;
      state.recent = [];
    } else if (acc < 0.6 && state.tier > 1) {
      state.tier -= 1;
      state.recent = [];
    }
  }
  function pickRound(state, { bases, inferences, relations }, rng = Math.random) {
    const tier = nextTier(state);
    const fresh = (id) => !state.usedItems.has(id);
    const match = state.placed ? (t) => t <= tier : (t) => t === tier;
    function available() {
      const buildPool = bases.filter((b) => match(b.tier) && !isMastered(state, b.id)).flatMap((b) => b.words.map((w) => ({ kind: "build", base: b, word: w, id: `build:${w.word}` }))).filter((r) => fresh(r.id));
      const inferPool = inferences.filter((i) => match(i.tier)).map((i) => ({ kind: "infer", item: i, id: `infer:${i.word}` })).filter((r) => fresh(r.id));
      const relatePool = relations.filter((r) => match(r.tier)).map((r) => ({ kind: "relate", item: r, id: `relate:${r.a}` })).filter((r) => fresh(r.id));
      let pools2 = [buildPool, inferPool, relatePool].filter((p) => p.length);
      if (!state.placed && buildPool.length) pools2 = [buildPool];
      return pools2;
    }
    let pools = available();
    if (!pools.length) {
      state.usedItems.clear();
      pools = available();
    }
    if (!pools.length) throw new Error("No playable rounds are available at this level. Check the curriculum.");
    const pool = pools[Math.floor(rng() * pools.length)];
    const round = pool[Math.floor(rng() * pool.length)];
    state.usedItems.add(round.id);
    state.relief = false;
    return round;
  }
  function shuffled(values, rng = Math.random) {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const value = rng();
      const j = Math.floor((Number.isFinite(value) ? Math.min(0.999999999999, Math.max(0, value)) : 0) * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function shuffleChoices(item, rng = Math.random) {
    return shuffled(item.options.map((text, index) => ({ text, index })), rng);
  }
  function trayFor(word, bases, rng = Math.random) {
    const real = word.parts;
    const others = bases.flatMap((b) => b.words.flatMap((w) => w.parts)).filter((p) => !real.includes(p));
    const decoys = shuffled([...new Set(others)], rng).slice(0, Math.min(4, Math.max(2, real.length)));
    return shuffled([...real, ...decoys], rng);
  }

  // public/shared/progress-store.js
  var MAX_PROFILES = 8;
  var MAX_SNAPSHOT_BYTES = 1048576;
  var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var clone = (value) => structuredClone(value);
  var sameBinding = (a, b) => !!a && !!b && a.backend === b.backend && a.ownerId === b.ownerId && a.profileId === b.profileId;
  function validateBinding(value) {
    if (!value || !UUID.test(value.ownerId) || !UUID.test(value.profileId)) throw new TypeError("Invalid cloud profile.");
    const url = new URL(value.backend);
    if (url.protocol !== "https:" || url.origin !== value.backend || url.username || url.password) throw new TypeError("Invalid cloud destination.");
    return { backend: url.origin, ownerId: value.ownerId, profileId: value.profileId };
  }
  async function openProgressStore({ indexedDB = globalThis.indexedDB, dbName = "color-learning-v1", gameId, curriculumId, normalize }) {
    if (!indexedDB) throw new Error("This browser cannot save progress on this device.");
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const next = request.result;
        next.createObjectStore("profiles", { keyPath: "id" });
        next.createObjectStore("records", { keyPath: "key" });
        const recovery = next.createObjectStore("recovery", { keyPath: "id" });
        recovery.createIndex("profileId", "profileId");
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Close older tabs before updating saved progress."));
      request.onsuccess = () => resolve(request.result);
    });
    db.onversionchange = () => db.close();
    const keyFor = (id) => JSON.stringify([id, gameId, curriculumId]);
    const clean = (value) => {
      const next = normalize(clone(value));
      if (new TextEncoder().encode(JSON.stringify(next)).length > MAX_SNAPSHOT_BYTES) throw new Error("Progress is too large to save.");
      return next;
    };
    const remoteValue = (remote) => {
      if (remote === null) return null;
      if (!remote || !remote.snapshot || typeof remote.snapshot !== "object" || Array.isArray(remote.snapshot) || !Number.isSafeInteger(remote.revision) || remote.revision < 1 || !UUID.test(remote.writeId)) throw new TypeError("Invalid cloud progress.");
      return { snapshot: clean(remote.snapshot), revision: remote.revision, writeId: remote.writeId };
    };
    function transaction(names, mode, run) {
      return new Promise((resolve, reject) => {
        let tx, result, failure;
        try {
          tx = db.transaction(names, mode);
        } catch (error) {
          reject(error);
          return;
        }
        const fail = (error) => {
          failure = error;
          try {
            tx.abort();
          } catch {
          }
        };
        const guard = (fn) => (...args) => {
          try {
            fn(...args);
          } catch (error) {
            fail(error);
          }
        };
        const get = (name, id, then) => {
          const req = id === void 0 ? tx.objectStore(name).getAll() : tx.objectStore(name).get(id);
          req.onsuccess = guard(() => then(req.result));
        };
        tx.oncomplete = () => resolve(result);
        tx.onabort = () => reject(failure ?? tx.error ?? new Error("Progress was not saved."));
        tx.onerror = () => {
        };
        guard(run)({ tx, get, done: (value) => {
          result = value;
        }, guard });
      });
    }
    function preserve(tx, record2, snapshot, reason) {
      tx.objectStore("recovery").put({
        id: crypto.randomUUID(),
        profileId: record2.profileId,
        gameId,
        curriculumId,
        snapshot: clone(snapshot),
        reason,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function change(profileId, run) {
      return transaction(["records", "recovery"], "readwrite", ({ tx, get, done }) => {
        get("records", keyFor(profileId), (record2) => run(record2 ?? null, tx, done));
      });
    }
    const write = (tx, record2, done, status2 = "saved") => {
      tx.objectStore("records").put(record2);
      done({ status: status2, record: clone(record2) });
    };
    const requireRecord = (record2) => {
      if (!record2) throw new Error("This local profile no longer exists.");
    };
    function choose(record2, tx, remote, choice) {
      if (!["cloud", "device"].includes(choice)) throw new Error("Choose this device or cloud progress.");
      if (choice === "cloud") {
        if (!remote) throw new Error("There is no cloud progress to restore.");
        preserve(tx, record2, record2.snapshot, "Before restoring cloud progress");
        record2.snapshot = remote.snapshot;
      } else if (remote) preserve(tx, record2, remote.snapshot, "Cloud progress before keeping this device");
      record2.localRevision++;
      record2.remoteRevision = remote?.revision ?? 0;
      record2.inflight = null;
      record2.conflict = null;
      record2.needsUpload = choice === "device";
    }
    const api = {
      close: () => db.close(),
      listProfiles: () => transaction(["profiles"], "readonly", ({ get, done }) => get("profiles", void 0, (rows) => done(rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt))))),
      async createProfile(label, initialSnapshot) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new TypeError("Use a nickname of 1 to 60 characters.");
        const snapshot = clean(initialSnapshot);
        return transaction(["profiles", "records"], "readwrite", ({ tx, get, done }) => {
          get("profiles", void 0, (profiles) => {
            if (profiles.length >= MAX_PROFILES) throw new Error("This device has eight profiles. Export and remove one before adding another.");
            const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
            tx.objectStore("profiles").put(profile2);
            tx.objectStore("records").put({ key: keyFor(profile2.id), profileId: profile2.id, gameId, curriculumId, snapshot, localRevision: 1, binding: null, remoteRevision: 0, inflight: null, conflict: null, needsUpload: false });
            done(profile2);
          });
        });
      },
      load: (profileId) => transaction(["records"], "readonly", ({ get, done }) => get("records", keyFor(profileId), (record2) => done(record2 ?? null))),
      save(profileId, snapshot, expectedRevision) {
        const value = clean(snapshot);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            preserve(tx, record2, value, "Another tab saved first");
            done({ status: "local-conflict", record: record2 });
            return;
          }
          record2.snapshot = value;
          record2.localRevision++;
          record2.needsUpload = !!record2.binding;
          write(tx, record2, done);
        });
      },
      attach(profileId, binding, expectedRevision, remote, choice) {
        const safeBinding = validateBinding(binding);
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          choose(record2, tx, safeRemote, choice);
          record2.binding = safeBinding;
          write(tx, record2, done);
        });
      },
      beginFlush(profileId, binding) {
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.conflict || !record2.inflight && !record2.needsUpload) {
            done(null);
            return;
          }
          if (!record2.inflight) record2.inflight = {
            writeId: crypto.randomUUID(),
            localRevision: record2.localRevision,
            expectedRemoteRevision: record2.remoteRevision,
            snapshot: clone(record2.snapshot)
          };
          tx.objectStore("records").put(record2);
          done(clone(record2));
        });
      },
      acknowledge(profileId, binding, writeId, remoteRevision) {
        if (!Number.isSafeInteger(remoteRevision) || remoteRevision < 1) throw new TypeError("Invalid saved revision.");
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (remoteRevision !== record2.inflight.expectedRemoteRevision + 1) throw new Error("Unexpected cloud revision. Progress remains queued.");
          record2.remoteRevision = remoteRevision;
          record2.needsUpload = record2.localRevision !== record2.inflight.localRevision;
          record2.inflight = null;
          record2.conflict = null;
          write(tx, record2, done);
        });
      },
      markConflict(profileId, binding, writeId, remote) {
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (safeRemote && record2.conflict?.remote && safeRemote.revision < record2.conflict.remote.revision) {
            done({ status: "stale" });
            return;
          }
          if (JSON.stringify(record2.conflict?.remote) === JSON.stringify(safeRemote)) {
            done({ status: "cloud-conflict", record: record2 });
            return;
          }
          record2.conflict = { id: crypto.randomUUID(), remote: safeRemote };
          write(tx, record2, done, "cloud-conflict");
        });
      },
      resolveConflict(profileId, binding, expectedRevision, choice, expectedConflictId) {
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (!sameBinding(record2.binding, binding) || !record2.conflict) {
            done({ status: "stale" });
            return;
          }
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          if (!expectedConflictId || record2.conflict.id !== expectedConflictId) {
            done({ status: "stale", record: record2 });
            return;
          }
          choose(record2, tx, record2.conflict.remote, choice);
          write(tx, record2, done);
        });
      },
      listRecovery: (profileId) => transaction(["recovery"], "readonly", ({ tx, done, guard }) => {
        const request = tx.objectStore("recovery").index("profileId").getAll(profileId);
        request.onsuccess = guard(() => done(request.result.filter((row) => row.gameId === gameId && row.curriculumId === curriculumId).sort((a, b) => b.createdAt.localeCompare(a.createdAt))));
      }),
      removeProfile: (profileId) => transaction(["profiles", "records", "recovery"], "readwrite", ({ tx, get, done }) => {
        tx.objectStore("profiles").delete(profileId);
        get("records", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("records").delete(row.key);
        });
        get("recovery", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("recovery").delete(row.id);
        });
        done(void 0);
      })
    };
    return api;
  }

  // public/shared/memory-store.js
  function createMemoryStore(normalize) {
    const profiles = /* @__PURE__ */ new Map(), records = /* @__PURE__ */ new Map();
    return {
      close() {
      },
      async listProfiles() {
        return [...profiles.values()].map((value) => structuredClone(value));
      },
      async createProfile(label, snapshot) {
        if (profiles.size >= 8) throw new Error("There are already eight profiles in this session.");
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new Error("Use a nickname of 1 to 60 characters.");
        const value = normalize(snapshot);
        const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        profiles.set(profile2.id, profile2);
        records.set(profile2.id, { profileId: profile2.id, snapshot: value, localRevision: 1, binding: null, needsUpload: false, conflict: null });
        return structuredClone(profile2);
      },
      async load(id) {
        return structuredClone(records.get(id) ?? null);
      },
      async save(id, snapshot, expectedRevision) {
        const record2 = records.get(id);
        if (!record2) throw new Error("This local profile no longer exists.");
        if (record2.localRevision !== expectedRevision) return { status: "local-conflict", record: structuredClone(record2) };
        record2.snapshot = normalize(snapshot);
        record2.localRevision++;
        return { status: "saved", record: structuredClone(record2) };
      },
      async listRecovery() {
        return [];
      },
      async removeProfile(id) {
        profiles.delete(id);
        records.delete(id);
      }
    };
  }

  // public/shared/cloud-config.js
  var CloudError = class extends Error {
    constructor(code, message2) {
      super(message2);
      this.name = "CloudError";
      this.code = code;
    }
  };
  function parseCloudConfig(raw) {
    if (!raw || raw.enabled !== true) return null;
    let url;
    try {
      url = new URL(raw.url);
    } catch {
      throw new CloudError("configuration", "Cloud saves need a valid HTTPS address in the host configuration.");
    }
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
      throw new CloudError("configuration", "Cloud saves need an HTTPS origin without a path, password or query.");
    }
    if (typeof raw.publishableKey !== "string" || !/^sb_publishable_[A-Za-z0-9_-]{20,}$/.test(raw.publishableKey)) {
      throw new CloudError("configuration", "Cloud saves need a Supabase publishable key. Secret keys and legacy keys are not accepted.");
    }
    const label = typeof raw.label === "string" && raw.label.trim() ? raw.label.trim().slice(0, 60) : "This host\u2019s cloud saves";
    return Object.freeze({ backend: url.origin, publishableKey: raw.publishableKey, label });
  }

  // public/shared/cloud-transport.js
  var UUID2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var PROFILE_FIELDS = "owner_id,id,label";
  var SAVE_FIELDS = "owner_id,profile_id,game_id,curriculum_id,format_version,snapshot,revision,write_id";
  var stale = () => new CloudError("disconnected", "Cloud saves are disconnected. Your device progress stays here.");
  function safeError(error) {
    if (error instanceof CloudError) return error;
    if (error?.code === "otp_expired") return new CloudError("invalid-code", "That code is incorrect or expired. Check it or request a new code.");
    if (Number(error?.status) === 429) return new CloudError("rate-limit", "Too many sign-in attempts. Wait a little before trying again.");
    if ([401, 403].includes(Number(error?.status))) return new CloudError("auth-required", "Sign in again to finish saving. Your device progress is safe.");
    return new CloudError("unavailable", "Cloud saves are unavailable. Your device progress is still saved here; try again later.");
  }
  function createCloudConnection(config, {
    gameId,
    curriculumId,
    normalize,
    loadSDK = () => import("./vendor/supabase.js"),
    nativeFetch = globalThis.fetch.bind(globalThis),
    onStatus = () => {
    }
  } = {}) {
    config = parseCloudConfig({ enabled: true, url: config?.backend, publishableKey: config?.publishableKey, label: config?.label });
    let active = true, client = null, subscription = null, ownerId = null, email = null;
    let loginBusy = false, resendAfter = 0, authLost = false;
    const lifetime = new AbortController();
    const assertActive = () => {
      if (!active) throw stale();
    };
    const publishStatus = (status2) => {
      if (active) {
        try {
          onStatus(status2);
        } catch {
        }
      }
    };
    const dispose = () => {
      subscription?.unsubscribe();
      client?.auth.dispose();
    };
    const disconnect = () => {
      if (!active) return;
      active = false;
      lifetime.abort();
      ownerId = null;
      email = null;
      dispose();
    };
    const guardedFetch = async (input, init = {}) => {
      assertActive();
      const target = new URL(typeof input === "string" || input instanceof URL ? input : input.url);
      if (target.origin !== config.backend || !/^\/(auth|rest)\/v1\//.test(target.pathname)) {
        throw new CloudError("configuration", "Cloud request destination was rejected.");
      }
      const signals = [lifetime.signal, init.signal, typeof input === "object" ? input.signal : null].filter(Boolean);
      const response = await nativeFetch(input, { ...init, signal: AbortSignal.any(signals), credentials: "omit", redirect: "error" });
      assertActive();
      return response;
    };
    const ready = (async () => {
      try {
        const { createClient } = await loadSDK();
        assertActive();
        client = createClient(config.backend, config.publishableKey, {
          auth: { persistSession: false, detectSessionInUrl: false, autoRefreshToken: false, debug: false, storageKey: `learning-cloud-${crypto.randomUUID()}` },
          db: { retry: false },
          global: { fetch: guardedFetch }
        });
        const result = await client.auth.initialize();
        assertActive();
        if (result.error) throw result.error;
        await client.auth.stopAutoRefresh();
        assertActive();
        subscription = client.auth.onAuthStateChange((_event, session) => {
          if (!active || !ownerId) return;
          if (session && session.user.id !== ownerId) {
            disconnect();
            return;
          }
          if (!session) {
            authLost = true;
            publishStatus("auth-required");
          }
        }).data.subscription;
      } catch (error) {
        if (!active) {
          dispose();
          throw stale();
        }
        disconnect();
        throw safeError(error);
      }
    })();
    ready.catch(() => {
    });
    async function call(operation, requiresOwner = true) {
      try {
        await ready;
        assertActive();
        if (requiresOwner && (!ownerId || authLost)) throw new CloudError("auth-required", "Sign in to use cloud saves.");
        const result = await operation(client);
        assertActive();
        if (result?.error) throw result.error;
        return result?.data;
      } catch (error) {
        if (!active) throw stale();
        throw safeError(error);
      }
    }
    const owned = (binding) => {
      const value = validateBinding(binding);
      assertActive();
      if (value.backend !== config.backend || value.ownerId !== ownerId || authLost) throw new CloudError("auth-required", "Sign in to the original account and cloud destination for this profile.");
      return value;
    };
    const profileValue = (row) => {
      if (!row || row.owner_id !== ownerId || !UUID2.test(row.id) || typeof row.label !== "string" || !row.label.trim() || row.label.length > 60) throw new CloudError("invalid", "The cloud returned an invalid learner profile.");
      return { id: row.id, label: row.label };
    };
    const cleanSnapshot = (snapshot) => {
      let clean;
      try {
        clean = normalize(structuredClone(snapshot));
      } catch {
        throw new CloudError("invalid", "This cloud progress needs a different app version or a recovery export.");
      }
      if (new TextEncoder().encode(JSON.stringify(clean)).length > 1048576) throw new CloudError("invalid", "Cloud progress is too large to load safely.");
      return clean;
    };
    function remoteValue(row, binding) {
      if (row === null) return null;
      if (!row || !row.snapshot || typeof row.snapshot !== "object" || Array.isArray(row.snapshot) || !Number.isInteger(row.format_version) || row.owner_id !== binding.ownerId || row.profile_id !== binding.profileId || row.game_id !== gameId || row.curriculum_id !== curriculumId || !Number.isSafeInteger(row.revision) || row.revision < 1 || !UUID2.test(row.write_id) || row.format_version !== row.snapshot.formatVersion) throw new CloudError("invalid", "The cloud returned an unexpected learning record.");
      return { snapshot: cleanSnapshot(row.snapshot), revision: row.revision, writeId: row.write_id };
    }
    const filtered = (query, binding) => query.eq("owner_id", binding.ownerId).eq("profile_id", binding.profileId).eq("game_id", gameId).eq("curriculum_id", curriculumId);
    async function read(binding) {
      owned(binding);
      const data = await call((sdk) => filtered(sdk.from("learning_saves").select(SAVE_FIELDS), binding).maybeSingle());
      owned(binding);
      return remoteValue(data, binding);
    }
    function reconcile(remote, inflight) {
      if (remote?.writeId === inflight.writeId) {
        if (remote.revision !== inflight.expectedRemoteRevision + 1 || JSON.stringify(remote.snapshot) !== JSON.stringify(inflight.snapshot)) throw new CloudError("invalid", "The cloud acknowledgement does not match this saved attempt.");
        return { status: "saved", remote };
      }
      if ((remote?.revision ?? 0) !== inflight.expectedRemoteRevision) return { status: "conflict", remote };
      return null;
    }
    return {
      ready,
      disconnect,
      get active() {
        return active;
      },
      get ownerId() {
        return ownerId;
      },
      get backend() {
        return config.backend;
      },
      owns: (binding) => active && !authLost && !!ownerId && binding?.backend === config.backend && binding.ownerId === ownerId,
      async sendCode(address) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (typeof address !== "string" || address.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.trim())) throw new CloudError("invalid", "Enter an adult email address.");
        const next = address.trim();
        if (email && email !== next) throw new CloudError("new-connection", "Cancel this sign-in before changing the email address.");
        if (ownerId) throw new CloudError("new-connection", "Disconnect before signing in to another account.");
        if (Date.now() < resendAfter) throw new CloudError("cooldown", "Wait one minute before requesting another code.");
        loginBusy = true;
        email = next;
        try {
          await call((sdk) => sdk.auth.signInWithOtp({ email: next, options: { shouldCreateUser: true } }), false);
          resendAfter = Date.now() + 6e4;
        } finally {
          loginBusy = false;
        }
      },
      async verifyCode(code) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (!email || !/^\d{6,10}$/.test(code)) throw new CloudError("invalid", "Enter the code from your email.");
        loginBusy = true;
        const sentTo = email;
        try {
          const data = await call((sdk) => sdk.auth.verifyOtp({ email: sentTo, token: code, type: "email" }), false);
          if (!data?.session || !UUID2.test(data.user?.id) || data.session.user?.id !== data.user.id) throw new CloudError("invalid", "Sign-in did not return a valid account.");
          ownerId = data.user.id;
          authLost = false;
          email = null;
          return ownerId;
        } finally {
          loginBusy = false;
        }
      },
      async listProfiles() {
        const data = await call((sdk) => sdk.from("learning_profiles").select(PROFILE_FIELDS).eq("owner_id", ownerId).order("created_at"));
        if (!Array.isArray(data)) throw new CloudError("invalid", "The cloud returned an invalid learner list.");
        return data.map(profileValue);
      },
      async createProfile(label) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new CloudError("invalid", "Use a nickname of 1 to 60 characters.");
        const data = await call((sdk) => sdk.from("learning_profiles").insert({ owner_id: ownerId, label: label.trim() }).select(PROFILE_FIELDS).single());
        return profileValue(data);
      },
      read,
      async write(binding, inflight) {
        owned(binding);
        if (!inflight || !UUID2.test(inflight.writeId) || !Number.isSafeInteger(inflight.expectedRemoteRevision) || inflight.expectedRemoteRevision < 0) throw new CloudError("invalid", "Invalid pending cloud save.");
        const snapshot = cleanSnapshot(inflight.snapshot);
        const attempt = { ...inflight, snapshot };
        const existing = await read(binding);
        const recovered = reconcile(existing, attempt);
        if (recovered) return recovered;
        const payload = { snapshot, format_version: snapshot.formatVersion, write_id: attempt.writeId };
        const outcome = await call(async (sdk) => {
          const result2 = attempt.expectedRemoteRevision === 0 ? await sdk.from("learning_saves").insert({ ...payload, owner_id: binding.ownerId, profile_id: binding.profileId, game_id: gameId, curriculum_id: curriculumId }).select(SAVE_FIELDS) : await filtered(sdk.from("learning_saves").update(payload), binding).eq("revision", attempt.expectedRemoteRevision).select(SAVE_FIELDS);
          if (result2.error?.code === "23505") return { data: [] };
          return result2;
        });
        owned(binding);
        if (!Array.isArray(outcome) || outcome.length > 1) throw new CloudError("invalid", "The cloud returned an unexpected save response.");
        const remote = outcome.length === 1 ? remoteValue(outcome[0], binding) : await read(binding);
        const result = reconcile(remote, attempt);
        if (result) return result;
        throw new CloudError("unavailable", "This save was not acknowledged. It stays queued on this device.");
      }
    };
  }
  async function flushOne(store2, profileId, connection) {
    const record2 = await store2.load(profileId);
    if (!record2 || !connection.owns(record2.binding)) return { status: "disconnected" };
    const pending2 = await store2.beginFlush(profileId, record2.binding);
    if (!pending2) return { status: record2.conflict ? "cloud-conflict" : "idle" };
    if (!connection.owns(pending2.binding)) return { status: "disconnected" };
    const result = await connection.write(pending2.binding, pending2.inflight);
    if (!connection.owns(pending2.binding)) return { status: "disconnected" };
    if (result.status === "saved") return store2.acknowledge(profileId, pending2.binding, pending2.inflight.writeId, result.remote.revision);
    return store2.markConflict(profileId, pending2.binding, pending2.inflight.writeId, result.remote);
  }

  // public/shared/cloud-panel.js
  function createCloudPanel(root, options) {
    const { store: store2, durable: durable2, normalize, curriculumId, gameId, configURL, helpURL, getProfile, isBusy, onChange, onRestore, onProfilesCleared, onMessage, describe } = options;
    let config = null, connection = null, generation = 0, view = 0, timer = null, failures = 0, running = null;
    const status2 = document.createElement("p");
    status2.setAttribute("role", "status");
    status2.className = "cloud-status";
    const content = document.createElement("div");
    root.append(content, status2);
    const say2 = (text) => {
      status2.textContent = text;
    };
    const paragraph = (text) => {
      const p = document.createElement("p");
      p.textContent = text;
      content.append(p);
      return p;
    };
    function button2(label, action, parent = content) {
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.textContent = label;
      button3.addEventListener("click", async () => {
        if (button3.disabled) return;
        button3.disabled = true;
        try {
          await action();
        } catch (error) {
          if (error.code !== "disconnected") say2(error.message || "That action could not be completed. Your progress is still here.");
        } finally {
          button3.disabled = false;
        }
      });
      parent.append(button3);
      return button3;
    }
    function retire2() {
      generation++;
      view++;
      clearTimeout(timer);
      timer = null;
      failures = 0;
      running = null;
      connection?.disconnect();
      connection = null;
    }
    const alive = (original, token) => connection === original && generation === token && original.active;
    function localActionsAllowed() {
      if (isBusy()) {
        say2("Finish the current answer or export unsaved progress before changing cloud profiles.");
        return false;
      }
      return true;
    }
    async function flush() {
      const selected = getProfile(), original = connection, token = generation;
      if (!selected || !original?.ownerId) return;
      if (running?.token === token) {
        running.again = true;
        return;
      }
      const work = { token };
      running = work;
      try {
        for (let i = 0; i < 8 && alive(original, token); i++) {
          const result = await flushOne(store2, selected.id, original);
          if (!alive(original, token)) return;
          if (result.status !== "saved") break;
        }
        if (!alive(original, token)) return;
        failures = 0;
        await onChange();
        const record2 = await store2.load(selected.id);
        if (!alive(original, token)) return;
        if (record2?.conflict) say2("Another device changed this learner. Choose which progress to keep below.");
        else if (record2 && original.owns(record2.binding) && !record2.needsUpload) say2("Cloud saved. Your copy also stays on this device.");
        if (root.closest("dialog")?.open) await renderConnected();
        if (record2?.needsUpload && !record2.conflict && original.owns(record2.binding)) queue(1e3);
      } catch (error) {
        if (!alive(original, token)) return;
        say2(error.message);
        await onChange();
        if (error.code === "unavailable" && failures < 5) {
          failures++;
          queue(Math.min(6e4, 2e3 * 2 ** failures) + Math.floor(Math.random() * 500));
        }
      } finally {
        if (running === work) {
          running = null;
          if (work.again && alive(original, token)) queue();
        }
      }
    }
    function queue(delay = 0) {
      if (!connection?.ownerId) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        void flush();
      }, delay);
    }
    function initial() {
      content.replaceChildren();
      paragraph("Cloud saves are optional. Play and save on this device without an account.");
      if (!durable2) {
        paragraph("Cloud saves need working browser storage. This session can be exported instead.");
        return;
      }
      if (location.protocol === "file:") {
        paragraph("This downloaded copy works offline. To save across devices, use a hosted copy whose owner has set up cloud saves. You can also move progress with Export and Import.");
        return;
      }
      button2("Explore cloud saves", async () => {
        const token = ++view;
        say2("Checking this host\u2019s cloud configuration\u2026");
        try {
          const response = await fetch(configURL, { credentials: "omit", redirect: "error", cache: "no-store" });
          if (token !== view) return;
          if (!response.ok) {
            say2("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          const text = await response.text();
          if (text.length > 16384) throw new Error("This host\u2019s cloud configuration is too large.");
          config = parseCloudConfig(JSON.parse(text));
          if (token !== view) return;
          if (!config) {
            say2("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          renderLogin();
        } catch (error) {
          say2(error.code === "configuration" ? error.message : "This host\u2019s cloud configuration could not be loaded. Device saves still work.");
        }
      });
      const help = document.createElement("a");
      help.href = helpURL;
      help.textContent = "Cloud setup instructions for the host";
      content.append(help);
    }
    function renderLogin() {
      content.replaceChildren();
      view++;
      paragraph(`${config.label}: ${config.backend}`);
      paragraph("An adult can sign in by email code. Continuing creates an account if needed. Only learner nicknames and learning progress you choose are uploaded. Your email goes to this cloud provider for sign-in.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Adult email";
      label.htmlFor = "cloud-email";
      const input = document.createElement("input");
      input.id = "cloud-email";
      input.type = "email";
      input.required = true;
      input.maxLength = 254;
      input.autocomplete = "email";
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Email me a code";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled) return;
        submit.disabled = true;
        retire2();
        const token = generation;
        const original = createCloudConnection(config, { gameId, curriculumId, normalize, onStatus: (value) => {
          if (value === "auth-required") say2("Sign in again to finish saving.");
        } });
        connection = original;
        const address = input.value.trim();
        try {
          await original.sendCode(address);
          if (alive(original, token)) renderCode(original, token, address);
        } catch (error) {
          if (alive(original, token)) say2(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button2("Cancel cloud sign-in", () => {
        retire2();
        config = null;
        initial();
        say2("Cloud sign-in cancelled. Local progress stays on this device.");
      });
      say2("No cloud account is needed to play locally.");
    }
    function renderCode(original, token, address) {
      content.replaceChildren();
      view++;
      paragraph("Check the adult email inbox for a sign-in code. Leave this page open while you check.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Email code";
      label.htmlFor = "cloud-code";
      const input = document.createElement("input");
      input.id = "cloud-code";
      input.required = true;
      input.inputMode = "numeric";
      input.autocomplete = "one-time-code";
      input.pattern = "[0-9]{6,10}";
      input.maxLength = 10;
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Sign in";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled || !alive(original, token)) return;
        submit.disabled = true;
        try {
          await original.verifyCode(input.value.trim());
          if (alive(original, token)) {
            input.value = "";
            await renderConnected();
            queue();
          }
        } catch (error) {
          if (alive(original, token)) say2(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button2("Send a new code", async () => {
        await original.sendCode(address);
        if (alive(original, token)) say2("A new code was requested. Check your email.");
      });
      button2("Cancel or change email", () => {
        retire2();
        renderLogin();
      });
      say2("Codes may take a moment to arrive. You can request another after one minute.");
      input.focus();
    }
    async function renderConnected() {
      if (!connection?.ownerId) return;
      const original = connection, token = generation, rendering = ++view;
      content.replaceChildren();
      paragraph(`Connected to ${config.label} (${config.backend}).`);
      paragraph("Disconnect ends this browser connection. Downloaded progress stays on this device until you remove it. Sign in again when you want to resume cloud saving.");
      button2("Disconnect cloud saves", () => {
        retire2();
        initial();
        say2("Disconnected. Downloaded progress and waiting saves remain on this device.");
      });
      button2("Retry cloud saving", async () => {
        failures = 0;
        queue();
      });
      button2("Remove this account\u2019s downloaded learners", async () => {
        if (!localActionsAllowed() || !confirm("Remove this account\u2019s downloaded learners and recovery copies from this device? Cloud copies will remain. Export any backups first.")) return;
        const profiles = await store2.listProfiles();
        for (const profile2 of profiles) {
          const record2 = await store2.load(profile2.id);
          if (!alive(original, token)) return;
          if (original.owns(record2?.binding)) await store2.removeProfile(profile2.id);
        }
        if (!alive(original, token)) return;
        await onProfilesCleared();
        await renderConnected();
        say2("Downloaded learners for this account were removed from this device. Cloud copies remain.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token) || rendering !== view) return;
        paragraph(`Current local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        if (local.conflict && original.owns(local.binding)) {
          const remote = local.conflict.remote;
          paragraph(remote ? `Another device saved: ${describe(remote.snapshot)}. No versions have been merged.` : "The cloud copy is missing. Your device copy remains available.");
          for (const choice of remote ? ["device", "cloud"] : ["device"]) {
            button2(choice === "device" ? "Keep this device\u2019s progress" : "Use the cloud progress shown above", async () => {
              if (!localActionsAllowed()) return;
              const result = await store2.resolveConflict(selected.id, local.binding, local.localRevision, choice, local.conflict.id);
              if (!alive(original, token)) return;
              await onChange({ source: "cloud-action" });
              await renderConnected();
              if (result.status === "saved") {
                say2("Your choice was saved. A recovery copy keeps the other version.");
                queue();
              } else say2("Progress changed while this choice was open. Review the latest versions before choosing again.");
            });
          }
        }
        button2(`Save ${selected.label} as a new cloud learner`, async () => {
          if (!localActionsAllowed()) return;
          const current = await store2.load(selected.id);
          if (!alive(original, token)) return;
          const remoteProfile = await original.createProfile(selected.label);
          if (!alive(original, token)) return;
          const result = await store2.attach(selected.id, { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id }, current.localRevision, null, "device");
          if (!alive(original, token)) return;
          await onChange({ source: "cloud-action" });
          await renderConnected();
          if (result.status === "saved") queue();
          else say2("The local learner changed during setup. Select the new cloud learner below to review and attach it.");
        });
      }
      try {
        const profiles = await original.listProfiles();
        if (!alive(original, token) || rendering !== view) return;
        paragraph(profiles.length ? "Choose an existing cloud learner to preview or restore. Matching nicknames do not merge learners." : "This account has no cloud learners yet. Choose a local learner, then save it to cloud.");
        for (const remoteProfile of profiles) button2(`Preview ${remoteProfile.label}`, () => preview(original, token, remoteProfile));
      } catch (error) {
        if (alive(original, token)) say2(error.message);
      }
    }
    async function preview(original, token, remoteProfile) {
      const rendering = ++view;
      const binding = { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id };
      const remote = await original.read(binding);
      if (!alive(original, token) || rendering !== view) return;
      content.replaceChildren();
      paragraph(`Cloud learner: ${remoteProfile.label}.`);
      paragraph(remote ? `${describe(remote.snapshot)}. Local progress is replaced only if you choose that below.` : "This cloud learner has no saved progress yet.");
      if (remote) button2("Restore as a new local learner", async () => {
        if (!localActionsAllowed()) return;
        const learner = await store2.createProfile(remoteProfile.label, remote.snapshot);
        if (!alive(original, token)) {
          await store2.removeProfile(learner.id);
          return;
        }
        await store2.attach(learner.id, binding, 1, remote, "cloud");
        if (!alive(original, token)) return;
        await onRestore(learner);
        say2("Cloud progress restored. A copy now lives on this device too.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token) || rendering !== view) return;
        paragraph(`Local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        for (const choice of remote ? ["cloud", "device"] : ["device"]) {
          button2(choice === "cloud" ? `Use cloud progress for ${selected.label}` : `Use ${selected.label}\u2019s progress for this cloud learner`, async () => {
            if (!localActionsAllowed()) return;
            const result = await store2.attach(selected.id, binding, local.localRevision, remote, choice);
            if (!alive(original, token)) return;
            await onChange({ source: "cloud-action" });
            await renderConnected();
            if (result.status === "saved") {
              say2("Your choice was saved. The other version is available in a recovery export.");
              queue();
            } else say2("The local learner changed. Preview again before choosing a version.");
          });
        }
      }
      button2("Back to cloud learners", renderConnected);
      button2("Disconnect cloud saves", () => {
        retire2();
        initial();
        say2("Disconnected. Local copies remain on this device.");
      });
    }
    initial();
    window.addEventListener("online", () => {
      failures = 0;
      queue();
    });
    return { queue, renderConnected, disconnect: () => {
      retire2();
      initial();
    } };
  }

  // public/shared/snapshot.js
  var CURRICULA = Object.freeze({ morphology: "roots-17-v1" });
  var object2 = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
  function cleanProgress(game2, value) {
    if (!CURRICULA[game2]) throw new TypeError("Unknown game.");
    const raw = object2(value) ? value : {};
    return { formatVersion: 1, ...serialize(createState(raw)), autoAdvance: raw.autoAdvance !== false };
  }
  function normalizeSnapshot(game2, value) {
    if (!object2(value) || value.formatVersion !== 1) throw new TypeError("This saved progress needs a different app version. Keep a recovery export.");
    return cleanProgress(game2, value);
  }
  function exportSnapshot(game2, label, snapshot) {
    return { app: "morphology-forge", game: game2, curriculum: CURRICULA[game2], version: 1, label, snapshot: normalizeSnapshot(game2, snapshot) };
  }
  function importSnapshot(game2, value) {
    if (!object2(value) || value.app !== "morphology-forge" || value.game !== game2 || value.curriculum !== CURRICULA[game2] || value.version !== 1) throw new TypeError("That backup belongs to another game or app version.");
    if (typeof value.label !== "string" || !value.label.trim() || value.label.trim().length > 60) throw new TypeError("A backup needs a nickname of 1 to 60 characters.");
    return { label: value.label.trim(), snapshot: normalizeSnapshot(game2, value.snapshot) };
  }

  // public/shared/progress.js
  var game;
  var store;
  var profile;
  var record;
  var live;
  var cloud;
  var durable = true;
  var pending = 0;
  var retired = false;
  var saveTail = Promise.resolve();
  var message;
  var dialog;
  var profileList;
  var loading = false;
  var selectionEpoch = 0;
  var importEpoch = 0;
  var recoveryMode = false;
  var recoveryRaw = null;
  var exportButton;
  var modalMessage;
  var lastMessage = "";
  var title = { morphology: "Morphology Forge" };
  var el = (tag, text) => {
    const n = document.createElement(tag);
    if (text) n.textContent = text;
    return n;
  };
  function download(value, name) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
    const a = el("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function retire(text) {
    retired = true;
    cloud?.disconnect();
    document.querySelector("#gameplay").inert = true;
    document.dispatchEvent(new Event("progress-retired"));
    say(text);
  }
  function remember(id) {
    try {
      sessionStorage.setItem(`morphology-forge-${game}-profile`, id);
    } catch {
    }
  }
  function remembered() {
    try {
      return sessionStorage.getItem(`morphology-forge-${game}-profile`);
    } catch {
      return null;
    }
  }
  function say(text) {
    lastMessage = text;
    if (dialog?.open) {
      message.textContent = "";
      modalMessage.textContent = text;
    } else {
      message.textContent = text;
      if (modalMessage) modalMessage.textContent = "";
    }
  }
  function status() {
    if (recoveryMode) {
      say("This learner\u2019s saved version cannot be opened here. Export the unreadable data or choose another learner; the original save is unchanged.");
      return;
    }
    if (!retired) say(pending ? "Saving on this device\u2026" : durable ? `${title[game]} learner: ${profile.label}. Saved on this device.` : "Temporary session: browser storage is unavailable. Export progress before leaving.");
  }
  function button(parent, text, action, { needsIdle = true } = {}) {
    const b = el("button", text);
    b.type = "button";
    b.className = "ghost";
    b.addEventListener("click", async () => {
      if (b.disabled) return;
      if (needsIdle && (pending || loading || retired)) {
        say("Export unsaved progress or reload before changing learners.");
        return;
      }
      b.disabled = true;
      try {
        await action();
      } catch (error) {
        say(error.message || "That action could not be completed.");
      } finally {
        b.disabled = false;
      }
    });
    parent.append(b);
    return b;
  }
  async function showProfiles() {
    profileList.replaceChildren();
    for (const p of await store.listProfiles()) button(profileList, `Play as ${p.label}`, () => selectProfile(p));
  }
  async function selectProfile(next) {
    if (pending || loading || retired) return;
    loading = true;
    importEpoch++;
    const epoch = ++selectionEpoch;
    document.dispatchEvent(new Event("progress-retired"));
    document.querySelector("#gameplay").inert = true;
    try {
      const loaded = await store.load(next.id);
      if (epoch !== selectionEpoch) return;
      if (!loaded) throw new Error("That learner was removed in another tab. Choose another one.");
      let snapshot;
      try {
        snapshot = normalizeSnapshot(game, loaded.snapshot);
        recoveryMode = false;
        recoveryRaw = null;
      } catch {
        snapshot = cleanProgress(game, {});
        recoveryMode = true;
        recoveryRaw = structuredClone(loaded.snapshot);
      }
      profile = next;
      record = loaded;
      live = snapshot;
      remember(profile.id);
      exportButton.textContent = recoveryMode ? "Export unreadable saved data" : "Export this learner\u2019s progress";
      document.querySelector("#gameplay").hidden = recoveryMode;
      document.dispatchEvent(new Event("progress-loaded"));
      document.querySelector("#gameplay").inert = false;
      await showProfiles();
      dialog.close();
      cloud?.queue();
      void cloud?.renderConnected().catch((error) => say(error.message));
      status();
    } catch (error) {
      retire(`${error.message} Export this tab\u2019s copy if needed, then reload.`);
    } finally {
      if (epoch === selectionEpoch) loading = false;
    }
  }
  async function refreshActive({ source } = {}) {
    if (pending || loading || retired || recoveryMode || !profile) return;
    const expected = record.localRevision, id = profile.id, epoch = selectionEpoch, loaded = await store.load(id);
    if (pending || loading || retired || profile.id !== id || selectionEpoch !== epoch || record.localRevision !== expected) return;
    if (!loaded) {
      retire("This learner was removed in another tab. Export this tab\u2019s older copy if needed, then reload.");
      return;
    }
    if (loaded.localRevision !== record.localRevision && source === "cloud-action") {
      const changed = JSON.stringify(loaded.snapshot) !== JSON.stringify(record.snapshot);
      record = loaded;
      live = normalizeSnapshot(game, loaded.snapshot);
      if (changed) {
        document.dispatchEvent(new Event("progress-retired"));
        document.dispatchEvent(new Event("progress-loaded"));
      }
      status();
      return;
    }
    if (loaded.localRevision !== record.localRevision) {
      retire("Saved progress changed in another tab or cloud action. Export this tab\u2019s copy if needed, then reload to use the current save.");
      return;
    }
    record = loaded;
  }
  async function initProgress(which) {
    game = which;
    const normalize = (value) => normalizeSnapshot(game, value);
    const controls = el("section");
    controls.className = "progress-controls";
    controls.setAttribute("aria-label", "Learners and saved progress");
    message = el("p", "Opening saved progress\u2026");
    message.setAttribute("role", "status");
    controls.append(message);
    document.querySelector(".wrap").append(controls);
    try {
      store = await openProgressStore({ dbName: `morphology-forge-${game}-v1`, gameId: game, curriculumId: CURRICULA[game], normalize });
    } catch {
      durable = false;
      store = createMemoryStore(normalize);
    }
    let profiles;
    try {
      profiles = await store.listProfiles();
    } catch {
      throw new Error("Saved learner records could not be opened. Keep this browser\u2019s data for recovery.");
    }
    if (!profiles.length) profiles = [await store.createProfile("Player 1", cleanProgress(game, {}))];
    profile = profiles.find((p) => p.id === remembered()) || profiles[0];
    record = await store.load(profile.id);
    if (!record) throw new Error("The selected learner was removed. Reload to choose another learner.");
    try {
      live = normalize(record.snapshot);
    } catch {
      recoveryMode = true;
      recoveryRaw = structuredClone(record.snapshot);
      live = cleanProgress(game, {});
    }
    document.querySelector("#gameplay").hidden = recoveryMode;
    remember(profile.id);
    dialog = el("dialog");
    dialog.className = "settings";
    dialog.setAttribute("aria-labelledby", "settings-title");
    const heading = el("h2", `${title[game]}: learners and backups`);
    heading.id = "settings-title";
    modalMessage = el("p");
    modalMessage.setAttribute("role", "status");
    dialog.append(heading, modalMessage);
    dialog.addEventListener("close", () => say(lastMessage));
    dialog.append(el("p", "Learners have their own progress. Nicknames are labels, not accounts. Anyone using this browser can see local learners and exports."));
    button(controls, "Learners and backups", async () => {
      dialog.showModal();
      say(lastMessage);
      await cloud.renderConnected();
    }, { needsIdle: false });
    button(dialog, "Close", () => dialog.close(), { needsIdle: false });
    profileList = el("div");
    profileList.className = "learner-list";
    dialog.append(profileList);
    await showProfiles();
    const form = el("form");
    const label = el("label", "New learner nickname");
    label.htmlFor = "new-learner";
    const input = el("input");
    input.id = "new-learner";
    input.required = true;
    input.maxLength = 60;
    const add = el("button", "Add learner");
    add.type = "submit";
    form.append(label, input, add);
    dialog.append(form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (pending || loading || retired || add.disabled) return;
      add.disabled = true;
      const epoch = selectionEpoch;
      try {
        const next = await store.createProfile(input.value, cleanProgress(game, {}));
        if (epoch === selectionEpoch) await selectProfile(next);
        else await showProfiles();
      } catch (error) {
        say(error.message);
      } finally {
        add.disabled = false;
      }
    });
    const backups = el("section");
    backups.append(el("h3", "Backups for this game"), el("p", "Export saves the current learner\u2019s progress and nickname in readable JSON. Keep it private. Import creates a new, separate learner and does not replace an existing one or connect a cloud account."));
    exportButton = button(backups, recoveryMode ? "Export unreadable saved data" : "Export this learner\u2019s progress", () => download(recoveryMode ? { app: "morphology-forge-raw-recovery", game, label: profile.label, snapshot: recoveryRaw } : exportSnapshot(game, profile.label, live), `morphology-forge-${game}-${recoveryMode ? "raw-recovery" : "backup"}.json`), { needsIdle: false });
    const importLabel = el("label", "Import a backup for this game");
    const upload = el("input");
    upload.type = "file";
    upload.accept = ".json,application/json";
    importLabel.append(upload);
    backups.append(importLabel);
    upload.addEventListener("change", async () => {
      const file = upload.files[0];
      const epoch = ++importEpoch;
      upload.value = "";
      if (!file) return;
      if (pending || loading || retired) {
        say("Export unsaved progress or reload before importing.");
        return;
      }
      try {
        if (file.size > 1048576) throw new Error("Choose a backup smaller than 1 MB.");
        const value = importSnapshot(game, JSON.parse(await file.text()));
        if (epoch !== importEpoch) return;
        if (pending || loading || retired) throw new Error("Progress changed while reading the file. Try again.");
        const p = await store.createProfile(value.label, value.snapshot);
        if (epoch === importEpoch) await selectProfile(p);
        else await showProfiles();
      } catch (error) {
        say(`Import failed: ${error.message}`);
      }
    });
    button(backups, "Export recovery copies", async () => {
      const copies = await store.listRecovery(profile.id);
      download({ app: "morphology-forge-recovery", game, curriculum: CURRICULA[game], version: 1, copies: copies.map((c) => ({ reason: c.reason, createdAt: c.createdAt, backup: exportSnapshot(game, profile.label, c.snapshot) })) }, `morphology-forge-${game}-recovery.json`);
    }, { needsIdle: false });
    button(backups, "Remove this learner from this game", async () => {
      if (!confirm("Remove this learner and recovery copies from this game on this device? Other games and cloud copies remain. Export a backup first if needed.")) return;
      await store.removeProfile(profile.id);
      cloud.disconnect();
      const remaining = await store.listProfiles();
      await selectProfile(remaining[0] || await store.createProfile("Player 1", cleanProgress(game, {})));
      cloud.renderConnected();
    });
    dialog.append(backups);
    const cloudRoot = el("section");
    cloudRoot.append(el("h3", "Optional cloud saves for this game"));
    dialog.append(cloudRoot);
    cloud = createCloudPanel(cloudRoot, {
      store,
      durable,
      normalize,
      gameId: game,
      curriculumId: CURRICULA[game],
      configURL: new URL("./cloud-config.local.json", document.baseURI),
      helpURL: "https://github.com/jessecmaddox3/morphology-forge/blob/main/docs/cloud-setup.md",
      getProfile: () => profile,
      isBusy: () => pending > 0 || loading || retired || recoveryMode,
      onChange: refreshActive,
      onRestore: selectProfile,
      onProfilesCleared: async () => {
        const remaining = await store.listProfiles();
        await selectProfile(remaining.find((p) => p.id === profile.id) || remaining[0] || await store.createProfile("Player 1", cleanProgress(game, {})));
      },
      onMessage: say,
      describe: (s) => `${s.answered} rounds; level ${s.tier}`
    });
    document.body.append(dialog);
    button(controls, "Reload saved progress", () => {
      if ((pending || retired) && !confirm("Reload the saved copy? Export this tab\u2019s unsaved progress first if you need it.")) return;
      location.reload();
    }, { needsIdle: false });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") void refreshActive().catch(() => retire("Saved progress could not be checked. Export a copy before reloading."));
    });
    window.addEventListener("beforeunload", (e) => {
      if (pending || retired) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    window.addEventListener("pagehide", () => cloud.disconnect());
    status();
  }
  var readLocal = () => structuredClone(live);
  function writeLocal(which, value) {
    if (which !== game) throw new TypeError("Wrong game save.");
    if (retired || recoveryMode) return;
    live = cleanProgress(game, { ...value, autoAdvance: live.autoAdvance });
    const snapshot = structuredClone(live), id = profile.id;
    pending++;
    status();
    saveTail = saveTail.then(async () => {
      if (retired || profile.id !== id) return;
      try {
        const result = await store.save(id, snapshot, record.localRevision);
        if (result.status !== "saved") {
          retire("Another tab saved first. Your attempted save is in recovery. Export this tab\u2019s latest progress if needed, then reload.");
          return;
        }
        record = result.record;
        cloud.queue();
      } catch {
        retire("This change could not be saved. Export this learner\u2019s progress before reloading.");
      }
    }).finally(() => {
      pending--;
      status();
    });
  }
  var getAutoAdvance = () => live.autoAdvance;
  var setAutoAdvance = (value) => {
    live.autoAdvance = !!value;
    writeLocal(game, live);
  };

  // public/app.js
  async function main() {
    await initProgress("morphology");
    const HINT_DELAY_MS = 45e3;
    const ADVANCE_MS = 2e3;
    const el2 = (id) => document.getElementById(id);
    let state = createState(readLocal());
    let round = null;
    let assembled = [];
    let hintTimer = null;
    let advanceTimer = null;
    let hintShown = false;
    let streak = 0;
    let roundFinished = false;
    let lastCorrect = false;
    function save() {
      writeLocal("morphology", serialize(state));
    }
    function meaningOf(part, base, word) {
      if (word?.partMeanings?.[part]) return word.partMeanings[part];
      if (PREFIXES[part]) return PREFIXES[part];
      if (SUFFIXES[part]) return SUFFIXES[part];
      if (WORD_PARTS[part]) return WORD_PARTS[part];
      if (base && part === base.form) return base.meaning;
      if (BASE_VARIANTS[part]) {
        const root = BASES.find((b) => b.form === BASE_VARIANTS[part]);
        if (root) return root.meaning;
      }
      return null;
    }
    function baseFor(form) {
      return BASES.find((b) => b.form === form) ?? BASES.find((b) => b.form === BASE_VARIANTS[form]);
    }
    function newRound() {
      clearTimeout(hintTimer);
      clearTimeout(advanceTimer);
      hintShown = false;
      roundFinished = false;
      lastCorrect = false;
      assembled = [];
      round = pickRound(state, { bases: BASES, inferences: INFERENCES, relations: RELATIONS });
      el2("feedback").hidden = true;
      el2("feedback").className = "feedback";
      delete el2("feedback").dataset.retried;
      el2("hint").hidden = true;
      el2("hint-btn").hidden = false;
      el2("hint-btn").disabled = false;
      el2("next").hidden = true;
      renderProgress();
      if (round.kind === "build") renderBuild();
      else if (round.kind === "infer") renderInfer();
      else renderRelate();
      hintTimer = setTimeout(showHint, HINT_DELAY_MS);
      el2("prompt").focus();
    }
    function setKind(chip, plain) {
      el2("prompt-kind").innerHTML = `<span class="kind-chip">${chip}</span><span class="kind-plain">${plain}</span>`;
    }
    function renderProgress() {
      const done = masteredCount(state);
      el2("mastered").textContent = done;
      el2("accuracy").textContent = state.answered ? `${Math.round(state.correct / state.answered * 100)}%` : "0%";
      el2("streak").textContent = streak;
      el2("streak").parentElement.classList.toggle("hot", streak >= 3);
    }
    function renderBuild() {
      const { base, word } = round;
      setKind("Build-up play", "Build the word");
      const rootHint = base.origin === "English" ? "Every piece here is either a whole word or an ending you know." : `<b>${base.form}</b> means <b>${base.meaning}</b> <span class="origin">(${base.origin})</span>`;
      el2("prompt").innerHTML = `<span class="clue">${word.clue}</span><span class="root-hint">${rootHint}</span>`;
      const tray = trayFor(word, BASES);
      el2("answer-area").innerHTML = `<div class="sum" id="sum"><span class="sum-empty">tap the pieces in order</span></div><div class="tray">${tray.map((p) => `<button class="chip" type="button" aria-pressed="false" data-part="${p}">${p}</button>`).join("")}</div><div class="row"><button class="ghost" type="button" id="clear">clear</button><button class="primary" type="button" id="check">check</button></div>`;
      el2("answer-area").querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          if (chip.classList.contains("used")) return;
          chip.classList.add("used");
          chip.setAttribute("aria-pressed", "true");
          assembled.push(chip.dataset.part);
          paintSum();
        });
      });
      el2("clear").addEventListener("click", resetSum);
      el2("check").addEventListener("click", checkBuild);
      paintSum();
    }
    function paintSum() {
      const sum = el2("sum");
      if (!assembled.length) {
        sum.innerHTML = '<span class="sum-empty">tap the pieces in order</span>';
        return;
      }
      sum.innerHTML = assembled.map((p) => `<span class="sum-part">${p}</span>`).join('<span class="plus">+</span>');
    }
    function resetSum() {
      assembled = [];
      el2("answer-area").querySelectorAll(".chip.used").forEach((c) => {
        c.classList.remove("used");
        c.setAttribute("aria-pressed", "false");
      });
      paintSum();
    }
    function checkBuild() {
      const { base, word } = round;
      const correct = assembled.join("") === word.parts.join("");
      if (!correct) {
        if (!el2("feedback").dataset.retried) {
          el2("feedback").dataset.retried = "1";
          el2("feedback").className = "feedback nudge";
          el2("feedback").innerHTML = "Not quite that order. Try again.";
          el2("feedback").hidden = false;
          resetSum();
          return;
        }
      }
      delete el2("feedback").dataset.retried;
      const gloss = word.parts.map((p) => [p, meaningOf(p, base, word)]).filter(([, m]) => m).map(([p, m]) => `<i>${p}</i> = ${m}`).join(" \xB7 ");
      finish(
        correct,
        base.id,
        "build",
        `<b>${word.parts.join(" + ")} \u2192 ${word.word}</b>` + (gloss ? `<span class="gloss">${gloss}</span>` : "") + (word.spellingNote ? `<span class="why">${word.spellingNote}</span>` : ""),
        correct ? "" : buildWhy(word, base)
      );
    }
    function buildWhy(word, base) {
      const parts = word.parts.map((p) => [p, meaningOf(p, base, word)]).filter(([, m]) => m).map(([p, m]) => `<b>${p}</b> = ${m}`).join(", ");
      return parts ? `Read it in the order the meaning runs: ${parts}. Put together in that order they say what the clue said.` : "";
    }
    function renderInfer() {
      const it = round.item;
      setKind("Through ball", "What does it mean?");
      el2("prompt").innerHTML = `<span class="clue">Use the word parts to work out <b>${it.word}</b>.</span><span class="root-hint"><b>${it.root}</b> means <b>${it.rootMeaning}</b>. Work it out.</span>`;
      el2("answer-area").innerHTML = `<div class="choices">${shuffleChoices(it).map(({ text, index }) => `<button class="choice" type="button" data-i="${index}">${text}</button>`).join("")}</div>`;
      el2("answer-area").querySelectorAll(".choice").forEach((b) => {
        b.addEventListener("click", () => {
          const baseId = baseFor(it.root)?.id ?? it.root;
          const correct = Number(b.dataset.i) === it.answer;
          if (!correct) b.classList.add("chosen-wrong");
          finish(
            correct,
            baseId,
            "infer",
            `<b>${it.word}</b>: ${it.options[it.answer].toLowerCase()}`,
            correct ? "" : it.why
          );
        });
      });
    }
    function renderRelate() {
      const it = round.item;
      const family = it.mode === "family";
      setKind("Offside call", family ? "Real word family, or a trap?" : "Real word sum, or a trap?");
      el2("prompt").innerHTML = family ? `<span class="clue">Is <b>${it.a}</b> in the same word family as <b>${it.guess}</b>?</span><span class="root-hint">A historical relationship is different from a literal word sum.</span>` : `<span class="clue">Is <b>${it.a}</b> really built from <b>${it.guess}</b>?</span><span class="root-hint">Some of these look like word sums and are not.</span>`;
      el2("answer-area").innerHTML = `<div class="choices two"><button class="choice" type="button" data-v="1">${family ? "Yes, they are in the same word family" : "Yes, that is its word sum"}</button><button class="choice" type="button" data-v="0">${family ? "No, they only look related" : "No, it just looks that way"}</button></div>`;
      el2("answer-area").querySelectorAll(".choice").forEach((b) => {
        b.addEventListener("click", () => {
          const correct = b.dataset.v === "1" === it.related;
          if (!correct) b.classList.add("chosen-wrong");
          finish(correct, null, "relate", "", it.note);
        });
      });
    }
    function hintFor(r) {
      if (r.kind === "build") {
        const first = r.word.parts[0];
        const m = meaningOf(first, r.base, r.word);
        return {
          text: m ? `Start with the piece that means \u201C${m}\u201D.` : `Start with <b>${r.base.form}</b> itself, then decide what goes around it.`,
          family: r.base.family ?? [],
          exclude: r.word.word
        };
      }
      const it = r.item;
      const fallback = r.kind === "infer" ? { text: `Take it apart first. Find <b>${it.root}</b> inside it, then read what is stuck to the front.`, family: [] } : { text: "Ask yourself: is the leftover piece a real word or a real root? If it is neither, it is a trap.", family: [] };
      const h = it.hint ?? fallback;
      return { text: h.text, family: h.family ?? [], exclude: it.word ?? it.a };
    }
    function showHint() {
      if (hintShown || !round || roundFinished) return;
      hintShown = true;
      clearTimeout(hintTimer);
      const { text, family, exclude } = hintFor(round);
      const words = family.filter(([w]) => w.toLowerCase() !== String(exclude).toLowerCase());
      el2("hint").innerHTML = `<p class="hint-text">${text}</p>` + (words.length ? `<ul class="hint-family">${words.map(([w, g]) => `<li><b>${w}</b><span>${g}</span></li>`).join("")}</ul>` : "");
      el2("hint").hidden = false;
      el2("hint-btn").disabled = true;
    }
    function finish(correct, baseId, kind, explanation, why) {
      if (roundFinished || !round) return;
      roundFinished = true;
      lastCorrect = correct;
      clearTimeout(hintTimer);
      recordAnswer(state, { correct, baseId, kind, hinted: hintShown });
      streak = correct ? streak + 1 : 0;
      save();
      const fb = el2("feedback");
      fb.className = `feedback ${correct ? "good" : "bad"}`;
      fb.innerHTML = `<span class="verdict">${correct ? scored() : missed()}</span> ${explanation}` + (why ? `<span class="why">${why}</span>` : "");
      fb.hidden = false;
      el2("hint-btn").hidden = true;
      el2("answer-area").querySelectorAll("button").forEach((b) => {
        b.disabled = true;
      });
      renderProgress();
      el2("next").hidden = false;
      el2("next").focus();
      queueAdvance();
    }
    const SCORED = ["Goal.", "Back of the net.", "Top corner.", "Buried it.", "That is in."];
    const MISSED = ["Off the post.", "Saved.", "Just wide.", "Off the bar."];
    function scored() {
      if (streak >= 5) return "Five straight.";
      if (streak === 3) return "Hat-trick.";
      return SCORED[(state.correct - 1) % SCORED.length] ?? "Goal.";
    }
    function missed() {
      return MISSED[state.answered % MISSED.length];
    }
    function queueAdvance() {
      clearTimeout(advanceTimer);
      el2("feedback").classList.remove("advancing");
      if (roundFinished && lastCorrect && getAutoAdvance()) {
        el2("feedback").classList.add("advancing");
        advanceTimer = setTimeout(newRound, ADVANCE_MS);
      }
    }
    const autoAdvance = el2("auto-advance");
    autoAdvance.checked = getAutoAdvance();
    autoAdvance.addEventListener("change", () => {
      setAutoAdvance(autoAdvance.checked);
      queueAdvance();
    });
    el2("next").addEventListener("click", newRound);
    el2("hint-btn").addEventListener("click", showHint);
    const cancel = () => {
      clearTimeout(hintTimer);
      clearTimeout(advanceTimer);
    };
    document.addEventListener("progress-retired", cancel);
    document.addEventListener("progress-loaded", () => {
      cancel();
      state = createState(readLocal());
      streak = 0;
      autoAdvance.checked = getAutoAdvance();
      newRound();
    });
    window.addEventListener("pagehide", cancel);
    newRound();
  }
  main().catch((error) => {
    const p = document.createElement("p");
    p.setAttribute("role", "alert");
    p.textContent = error.message;
    document.querySelector(".wrap").prepend(p);
  });
})();
