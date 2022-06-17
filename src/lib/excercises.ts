export type Excercise = {
  name: string;
  progression: ExcerciseProgression[];
};

export type ExcerciseProgression = {
  name: string;
  sets: number;
  reps: number;
  note?: string;
  videoUrl?: string;
};

export type Day = {
  name: string;
  workouts: string[];
}

export type TodaysRoutine = {
  workoutName: string;
  progression: ExcerciseProgression;
  progressionNumber: number;
  progressionMax: number;
}

export type ProgressionState = {
  [key: string]: number;
};

export const DAYS: Day[] = [
  {
    name: "Su",
    workouts: []
  },
  {
    name: "M",
    workouts: ["Pushups", "Leg Raises"]
  },
  {
    name: "T",
    workouts: ["Pullups", "Squats"]
  },
  {
    name: "W",
    workouts: ["Bridges", "Twists"]
  },
  {
    name: "Th",
    workouts: ["Pushups", "Leg Raises"]
  },
  {
    name: "F",
    workouts: ["Pullups", "Squats"]
  },
  {
    name: "Sa",
    workouts: ["Bridges", "Twists"]
  }
];

export const excercises: Excercise[] = [
  {
    name: "Pushups",
    progression: [
      {
        name: "Wall Pushups",
        sets: 3,
        reps: 50,
        videoUrl: "https://vimeo.com/703443607",
      },
      {
        name: "Incline Pushups",
        sets: 3,
        reps: 40,
        videoUrl: "https://vimeo.com/703872895",
      },
      {
        name: "Advanced Incline Pushups",
        sets: 3,
        reps: 35,
        videoUrl: "https://vimeo.com/703873662",
      },
      {
        name: "Knee Pushups",
        sets: 3,
        reps: 30,
        videoUrl: "https://vimeo.com/703873725",
      },
      {
        name: "Full Pushups",
        sets: 3,
        reps: 25,
        videoUrl: "https://vimeo.com/703873802",
      },
      {
        name: "Narrow Pushups",
        sets: 3,
        reps: 20,
        videoUrl: "https://vimeo.com/703873854",
      },
      {
        name: "Side-Staggered Pushups",
        sets: 2,
        reps: 20,
        videoUrl: 'https://vimeo.com/703885723',
      },
      {
        name: "Archer Pushups",
        sets: 2,
        reps: 12,
        videoUrl: "https://vimeo.com/703874168",
      },
      {
        name: "Sliding One-Arm Pushups",
        sets: 2,
        reps: 12,
        videoUrl: "https://vimeo.com/703874080",
      },
      {
        name: "One-Arm Pushups",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/703874344",
      },
      {
        name: "One-Arm Pushups (Feet Together)",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/703874449",
      }
    ]
  },
  {
    name: "Leg Raises",
    progression: [
      {
        name: "Knee Raises",
        sets: 3,
        reps: 30,
        videoUrl: 'https://vimeo.com/703930525',
      },
      {
        name: "Advanced Knee Raises",
        sets: 3,
        reps: 30,
        videoUrl: 'https://vimeo.com/703930375',
      },
      {
        name: "Alternating Leg Raises",
        sets: 3,
        reps: 25,
        videoUrl: 'https://vimeo.com/703930413',
      },
      {
        name: "Leg Raises",
        sets: 3,
        reps: 25,
        videoUrl: 'https://vimeo.com/703930463',
      },
      {
        name: "Tuck Plow Raises",
        sets: 3,
        reps: 20,
        videoUrl: 'https://vimeo.com/703930394',
      },
      {
        name: "Plow Raises",
        sets: 3,
        reps: 20,
        videoUrl: 'https://vimeo.com/703930692',
      },
      {
        name: "Hanging Knee Raises",
        sets: 3,
        reps: 15,
        videoUrl: 'https://vimeo.com/703930492',
      },
      {
        name: "Advanced Hanging Knee Raises",
        sets: 3,
        reps: 15,
        videoUrl: 'https://vimeo.com/703930353',
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        reps: 25,
        videoUrl: 'https://vimeo.com/703930509',
      },
      {
        name: "Toe to Bars",
        sets: 3,
        reps: 25,
        videoUrl: 'https://vimeo.com/703930439',
      }
    ]
  },
  {
    name: "Pullups",
    progression: [
      {
        name: "Wall Pullups",
        sets: 3,
        reps: 50,
        videoUrl: "https://vimeo.com/703940781",
      },
      {
        name: "Horizontal Pullups (Chest Height)",
        sets: 3,
        reps: 30,
        videoUrl: "https://vimeo.com/703940446",
      },
      {
        name: "Horizontal Pullups (Hip Height)",
        sets: 3,
        reps: 25,
        videoUrl: "https://vimeo.com/703940078",
      },
      {
        name: "Jackknife Pullups",
        sets: 3,
        reps: 25,
        videoUrl: "https://vimeo.com/703940531",
      },
      {
        name: "Full Pullups/Chinups",
        sets: 2,
        reps: 12,
        videoUrl: "https://vimeo.com/703940350",
      },
      {
        name: "Narrow Pullups",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/703940606",
      },
      {
        name: "One-Hand Pullups",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/703940709",
      },
      {
        name: "Advanced One-Hand Pullups",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/703940123",
      },
      {
        name: "Archer Pullups",
        sets: 2,
        reps: 7,
        videoUrl: "https://vimeo.com/703940175",
      },
      {
        name: "One-Arm Pullups",
        sets: 2,
        reps: 20,
        videoUrl: "https://vimeo.com/703940682",
      }
    ]
  },
  {
    name: "Bridges",
    progression: [
      {
        name: "Glute Bridges",
        sets: 3,
        reps: 50,
        videoUrl: 'https://vimeo.com/704332572',
      },
      {
        name: "Straight Bridges",
        sets: 3,
        reps: 40,
        videoUrl: 'https://vimeo.com/704332876',
      },
      {
        name: "Wall Bridges",
        sets: 2,
        reps: 30,
        videoUrl: 'https://vimeo.com/704332997',
      },
      {
        name: "Incline Bridges",
        sets: 2,
        reps: 25,
        videoUrl: 'https://vimeo.com/704332351',
      },
      {
        name: "Head Bridges",
        sets: 2,
        reps: 25,
        videoUrl: 'https://vimeo.com/704332661',
      },
      {
        name: "Full Bridges",
        sets: 2,
        reps: 15,
        videoUrl: 'https://vimeo.com/704332457',
      },
      {
        name: "Wheel Bridges",
        sets: 2,
        reps: 15,
        videoUrl: 'https://vimeo.com/704333169',
      },
      {
        name: "Tap Bridges",
        sets: 2,
        reps: 15,
        videoUrl: 'https://vimeo.com/704332951',
      },
      {
        name: "Wall-Walking Bridges",
        sets: 2,
        reps: 10,
        videoUrl: 'https://vimeo.com/704333086',
      },
      {
        name: "Stand-to-Stand Bridges",
        note:
          "Work the eccentric (negative) portion of this first. Descend into a bridge and stand up normally. After you can do this well, lean back onto objects of decreasing height (stairs work well) until you can finally lean back into this exercise and stand back up with the power of your core and legs.",
        sets: 2,
        reps: 5,
        videoUrl: 'https://vimeo.com/704332802',
      }
    ]
  },
  {
    name: "Squats",
    progression: [
      {
        name: "Jackknife Squats",
        sets: 3,
        reps: 35,
        videoUrl: "https://vimeo.com/704331825"
      },
      {
        name: "Assisted Squats",
        sets: 3,
        reps: 30,
        videoUrl: "https://vimeo.com/704331633",
      },
      {
        name: "Half Squats",
        sets: 2,
        reps: 35,
        videoUrl: "https://vimeo.com/704331785",
      },
      {
        name: "Full Squats",
        sets: 2,
        reps: 50,
        videoUrl: "https://vimeo.com/704331750",
      },
      {
        name: "Narrow Squats",
        sets: 2,
        reps: 25,
        videoUrl: "https://vimeo.com/704331878",
      },
      {
        name: "Side-Staggered Squats",
        sets: 2,
        reps: 20,
        videoUrl: "https://vimeo.com/704332096",
      },
      {
        name: "Staggered Squats",
        sets: 2,
        reps: 20,
        videoUrl: "https://vimeo.com/704331698",
      },
      {
        name: "Assisted One-Leg Squats",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/704331510",
      },
      {
        name: "One-Leg Chair Squats",
        sets: 2,
        reps: 9,
        videoUrl: "https://vimeo.com/704331914",
      },
      {
        name: "One-Leg Squats",
        sets: 2,
        reps: 20,
        videoUrl: "https://vimeo.com/704331977",
      }
    ]
  },
  {
    name: "Twists",
    progression: [
      {
        name: "Straight Leg Twists",
        sets: 2,
        reps: 60,
        videoUrl: 'https://vimeo.com/704333580',
      },
      {
        name: "Bent Leg Twists",
        sets: 2,
        reps: 60,
        videoUrl: 'https://vimeo.com/704333281',
      },
      {
        name: "Full Twists",
        sets: 2,
        reps: 60,
        videoUrl: 'https://vimeo.com/704333434',
      },
    ]
  },
];
