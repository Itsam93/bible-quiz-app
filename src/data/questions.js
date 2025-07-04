const questions = [
  // === EASY LEVEL ===
  {
    question: "Who built the ark?",
    options: ["Moses", "Noah", "Abraham", "David"],
    answer: "Noah",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "Who was the mother of Jesus?",
    options: ["Elizabeth", "Sarah", "Mary", "Rachel"],
    answer: "Mary",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "What did Jesus turn water into?",
    options: ["Blood", "Wine", "Oil", "Milk"],
    answer: "Wine",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "What is the first book of the Bible?",
    options: ["Exodus", "Genesis", "Psalms", "Leviticus"],
    answer: "Genesis",
    category: "General",
    difficulty: "Easy",
  },
  {
    question: "What did David use to defeat Goliath?",
    options: ["Sword", "Stone", "Arrow", "Staff"],
    answer: "Stone",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "How many disciples did Jesus have?",
    options: ["10", "12", "14", "7"],
    answer: "12",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "Who was the first man created by God?",
    options: ["Noah", "Adam", "Enoch", "Seth"],
    answer: "Adam",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "What did God create on the first day?",
    options: ["Land", "Stars", "Light", "Animals"],
    answer: "Light",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "What was Jesus’ profession?",
    options: ["Carpenter", "Farmer", "Fisherman", "Scribe"],
    answer: "Carpenter",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "Who was swallowed by a great fish?",
    options: ["Elijah", "Jonah", "Peter", "Samuel"],
    answer: "Jonah",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "How many days did God take to create the world?",
    options: ["5", "6", "7", "8"],
    answer: "6",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "On what day did God rest after creation?",
    options: ["6th", "7th", "1st", "5th"],
    answer: "7th",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "Who received the Ten Commandments from God?",
    options: ["Abraham", "Noah", "Moses", "David"],
    answer: "Moses",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "Who was Jesus' earthly father?",
    options: ["Joseph", "John", "Zechariah", "Luke"],
    answer: "Joseph",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "Where was Jesus born?",
    options: ["Nazareth", "Bethlehem", "Jerusalem", "Cana"],
    answer: "Bethlehem",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "How many people were on Noah's Ark?",
    options: ["2", "4", "6", "8"],
    answer: "8",
    category: "Old Testament",
    difficulty: "Easy",
  },
  {
    question: "What kind of insect did John the Baptist eat?",
    options: ["Locusts", "Bees", "Flies", "Ants"],
    answer: "Locusts",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "What river was Jesus baptized in?",
    options: ["Red Sea", "Nile", "Jordan", "Euphrates"],
    answer: "Jordan",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "What did Jesus feed 5,000 people with?",
    options: [
      "3 loaves and 5 fish",
      "5 loaves and 2 fish",
      "4 loaves and 3 fish",
      "2 loaves and 5 fish",
    ],
    answer: "5 loaves and 2 fish",
    category: "New Testament",
    difficulty: "Easy",
  },
  {
    question: "What was the name of the sea Jesus calmed?",
    options: ["Sea of Galilee", "Dead Sea", "Red Sea", "Mediterranean Sea"],
    answer: "Sea of Galilee",
    category: "New Testament",
    difficulty: "Easy",
  },

  // === INTERMEDIATE LEVEL ===
  {
    question: "How many days and nights did it rain during the flood?",
    options: ["30", "7", "40", "70"],
    answer: "40",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Who led the Israelites into the Promised Land?",
    options: ["Moses", "Joshua", "Aaron", "Jacob"],
    answer: "Joshua",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Which apostle betrayed Jesus?",
    options: ["Peter", "Thomas", "Judas", "John"],
    answer: "Judas",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "How many disciples did Jesus choose?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What is the shortest verse in the Bible?",
    options: [
      "Jesus wept.",
      "Rejoice always.",
      "Pray continually.",
      "Love one another.",
    ],
    answer: "Jesus wept.",
    category: "General",
    difficulty: "Intermediate",
  },
  {
    question:
      "Which city fell after the Israelites marched around it for seven days?",
    options: ["Bethlehem", "Jericho", "Nazareth", "Capernaum"],
    answer: "Jericho",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What was the name of Abraham’s promised son?",
    options: ["Ishmael", "Isaac", "Jacob", "Joseph"],
    answer: "Isaac",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What did the Israelites eat in the desert?",
    options: ["Fish", "Bread", "Manna", "Corn"],
    answer: "Manna",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Which disciple walked on water with Jesus?",
    options: ["James", "Peter", "John", "Andrew"],
    answer: "Peter",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What was the occupation of Matthew before following Jesus?",
    options: ["Fisherman", "Shepherd", "Tax Collector", "Soldier"],
    answer: "Tax Collector",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What type of tree did Zacchaeus climb to see Jesus?",
    options: ["Sycamore", "Fig", "Olive", "Cedar"],
    answer: "Sycamore",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Who was raised from the dead after four days?",
    options: ["Tabitha", "Eutychus", "Lazarus", "Stephen"],
    answer: "Lazarus",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Which Old Testament character interpreted dreams in Egypt?",
    options: ["Moses", "Daniel", "Joseph", "Pharaoh"],
    answer: "Joseph",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What did God give the Israelites to drink from a rock?",
    options: ["Wine", "Water", "Milk", "Honey"],
    answer: "Water",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What mountain did Moses receive the Ten Commandments on?",
    options: ["Mount Carmel", "Mount Sinai", "Mount Ararat", "Mount Zion"],
    answer: "Mount Sinai",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Who denied Jesus three times before the rooster crowed?",
    options: ["Thomas", "Peter", "John", "Philip"],
    answer: "Peter",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question:
      "Which book immediately follows the Gospels in the New Testament?",
    options: ["Romans", "Acts", "Hebrews", "Revelation"],
    answer: "Acts",
    category: "New Testament",
    difficulty: "Intermediate",
  },
  {
    question: "What is the last book of the Old Testament?",
    options: ["Zechariah", "Malachi", "Micah", "Haggai"],
    answer: "Malachi",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Who dreamed of a ladder reaching to heaven?",
    options: ["Abraham", "Joseph", "Jacob", "Isaac"],
    answer: "Jacob",
    category: "Old Testament",
    difficulty: "Intermediate",
  },
  {
    question: "Which judge defeated the Midianites with only 300 men?",
    options: ["Samson", "Deborah", "Gideon", "Jephthah"],
    answer: "Gideon",
    category: "Old Testament",
    difficulty: "Intermediate",
  },

  // === DIFFICULT LEVEL ===
  {
    question: "What was Paul's name before his conversion?",
    options: ["Saul", "Simon", "Silas", "Stephen"],
    answer: "Saul",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which book has the most chapters in the Bible?",
    options: ["Genesis", "Psalms", "Isaiah", "Jeremiah"],
    answer: "Psalms",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which prophet saw a vision of a valley of dry bones?",
    options: ["Jeremiah", "Ezekiel", "Daniel", "Isaiah"],
    answer: "Ezekiel",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "On which island was John when he wrote Revelation?",
    options: ["Crete", "Patmos", "Malta", "Cyprus"],
    answer: "Patmos",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which prophet married a prostitute by God's command?",
    options: ["Ezekiel", "Jeremiah", "Hosea", "Amos"],
    answer: "Hosea",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "What is the longest verse in the Bible?",
    options: ["Psalm 119:1", "John 11:35", "Esther 8:9", "Genesis 1:1"],
    answer: "Esther 8:9",
    category: "General",
    difficulty: "Difficult",
  },
  {
    question: "How many books are in the Bible?",
    options: ["60", "62", "66", "70"],
    answer: "66",
    category: "General",
    difficulty: "Difficult",
  },
  {
    question: "What language was the Old Testament primarily written in?",
    options: ["Greek", "Aramaic", "Latin", "Hebrew"],
    answer: "Hebrew",
    category: "General",
    difficulty: "Difficult",
  },
  {
    question: "Who was the high priest when Jesus was crucified?",
    options: ["Annas", "Caiaphas", "Gamaliel", "Nicodemus"],
    answer: "Caiaphas",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which king had a dream interpreted by Daniel?",
    options: ["Darius", "Nebuchadnezzar", "Belshazzar", "Artaxerxes"],
    answer: "Nebuchadnezzar",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which Old Testament figure was taken to heaven in a whirlwind?",
    options: ["Elijah", "Moses", "Enoch", "Isaiah"],
    answer: "Elijah",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question:
      "How many people were present in the upper room after Jesus’ ascension?",
    options: ["100", "120", "72", "144"],
    answer: "120",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which book was written to a man named Theophilus?",
    options: ["Luke", "Acts", "Both Luke and Acts", "Matthew"],
    answer: "Both Luke and Acts",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "What is the last word in the Bible?",
    options: ["Amen", "Grace", "Lord", "Jesus"],
    answer: "Amen",
    category: "General",
    difficulty: "Difficult",
  },
  {
    question: "Who was the father of King David?",
    options: ["Saul", "Jesse", "Solomon", "Nathan"],
    answer: "Jesse",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "Who interpreted Pharaoh's dreams in Egypt?",
    options: ["Moses", "Daniel", "Joseph", "Aaron"],
    answer: "Joseph",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "How many times did Peter deny Jesus?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "What was the first miracle performed by Jesus?",
    options: [
      "Healing a leper",
      "Walking on water",
      "Turning water to wine",
      "Raising Lazarus",
    ],
    answer: "Turning water to wine",
    category: "New Testament",
    difficulty: "Difficult",
  },
  {
    question: "Which Old Testament book is a collection of love poems?",
    options: ["Proverbs", "Psalms", "Ecclesiastes", "Song of Solomon"],
    answer: "Song of Solomon",
    category: "Old Testament",
    difficulty: "Difficult",
  },
  {
    question: "Who was the only female judge of Israel?",
    options: ["Ruth", "Esther", "Deborah", "Miriam"],
    answer: "Deborah",
    category: "Old Testament",
    difficulty: "Difficult",
  },
];

export default questions;
