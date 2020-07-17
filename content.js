const data = {
  "userClass": {
    "primary": "primaryClass",
    "secondary": "secondaryClass"
  },
  "buttonText": {
    "buttonText1": "Product Question",
    "buttonText2": "Video Consultant"
  },
  homePageIcons: [
    "assist",
    "lipstick",
    "perfume",
    "powder",
    "blush",
    "eyeLashes"
  ],
  homePageCollections: [
    "Skin",
    "Cheeks",
    "Eyes",
    "Lips"
  ],
  assistData: [
    {
      "id": 1,
      "ques": `Hi! To help you connect with the right team to assist,
              please select one of the options below.`,
      "options": ["VR Beauty Try-On", "Video Consultant"],
      "userResponse": "",
    },
    {
      "id": 2,
      "renderQuestion": "Video Consultant",
      "ques": `Thanks,! Please select how would you like to consult.`,
      "options": [
        "Available consultant",
        "Fix appointment"
      ],
      "userResponse": "",
    },
    {
      "id": 3,
      "renderQuestion": "Fix appointment",
      "ques": `Please select the date.`,
      "options": [],
      "display": "calendar",
      "userResponse": "",
    },
    {
      "id": 4,
      "renderQuestion": "VR Beauty Try-On",
      "ques": `Redirecting to VIRTUAL TRY-ON....`,
      "options": [],
      "userResponse": "",
    },
    {
      "id": 5,
      "renderQuestion": "Available consultant",
      "ques": `Finding available consultant....`,
      "options": [],
      "userResponse": "",
    }
  ],
}

export default data;
