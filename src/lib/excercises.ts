export type Excercise = {
  name: string;
  video?: string;
  progression: ExcerciseProgression[];
};

export type ExcerciseProgression = {
  name: string;
  sets: number;
  reps: number;
  note?: string;
  images: string[];
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
    workouts: ["Pushups", "Leg Raises", "Pullups"]
  },
  {
    name: "T",
    workouts: ["Bridges", "Plank"]
  },
  {
    name: "W",
    workouts: ["Pushups", "Squats", "Pullups"]
  },
  {
    name: "Th",
    workouts: ["Leg Raises", "Sit Thru Knee"]
  },
  {
    name: "F",
    workouts: ["Bridges", "Squats"]
  },
  {
    name: "Sa",
    workouts: []
  }
];

export const excercises: Excercise[] = [
  {
    name: "Pushups",
    video: "https://www.youtube.com/watch?v=ze4qofHM20k",
    progression: [
      {
        name: "Wall Pushups",
        sets: 3,
        reps: 50,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476785905-Y59AFLN4R1ZB3WSOHYZJ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Wall+Pushup+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476827530-KHFTL4F1X8XHK9N6FMVU/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Wall+Pushup+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Incline Pushups",
        sets: 3,
        reps: 40,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476919111-CXJBHVCZ5CD3K1UOA5TV/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476930849-ZIT98EKTE7EVQUWXSZ6D/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Knee Pushups",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476945299-5BKRRIKDMRG9WKXTDFDS/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Kneeling+Pushup+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597476956259-116AEJWJUULTNAPMEIRR/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Kneeling+Pushup+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Full Pushups",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477294530-J45JYRHGKCXZA8U5AI9S/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477310177-U21X2ADZDJ0TO427XXWW/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Narrow Pushups",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477085293-08FDMEN4BU8LOE9ZE0RU/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477097756-BX0XU5OIF78OJ5U3U7OK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Narrow+Pushup+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Side-Staggered Pushups",
        sets: 2,
        reps: 15,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477402888-TH74CHZFV8DDJ72YDTJI/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477412493-OVCUYHG83F1Q9P9O6KV4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477426605-01QHRINA6RHRJELWL4NG/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477436971-3CBRO82O517Z9U6RW8FB/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Archer Pushups",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477530143-6NHHYHQALX347V9QUFIK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477538108-9CGGL0MZYSN6RMP9S83J/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477544967-OLKLA8VZMBOIS8EODDBT/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Archer+Pushup+Right+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477551588-4SM27TO76KNBJQ2YV0L3/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Sliding One-Arm Pushups",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477699371-4VI9G6GL3M3G4LEWPPAW/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Sliding+Pushup+Left+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477635027-YEY83XR5WUX91PZRU36D/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477646266-FH4XX75GSBLM64BRNV8E/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477654109-BRE2U6GXUKN0BMV8OETM/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "One-Arm Pushups",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477822094-526R84O73WD5LH165SS5/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477828850-BL9FA58921LDOXEIXMK6/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477836518-T6MO8TFJBG7O9WCY2TWG/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477845085-C6SZ5Y6G45WRW6QNW14N/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "One-Arm Pushups (Feet Together)",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477792295-X28Y9SBBFG4ANZ9S5P1X/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/One+Arm+Feet+Together+Pushup+Left+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477799316-YQWF325FVY57417VJL72/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477807400-4FYQMWKUMTGIRX2HFLUH/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/One+Arm+Feet+Together+Pushup+Right+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597477814707-9BM29HQ2RR5I8SPW0XK4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      }
    ]
  },
  {
    name: "Leg Raises",
    video: "https://www.youtube.com/watch?v=f_O-CzKSSY8",
    progression: [
      {
        name: "Knee Tucks",
        sets: 3,
        reps: 40,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524104430-UEGHZ28I2QT64F4GSY1N/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Knee+Tucks+Start-1.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524115736-XETOILJ2HJ4ETTW748A6/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Knee Raises",
        sets: 3,
        reps: 40,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524126218-I5FQYUMI7BLWIGEMIYYJ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524136490-B6NUY616JMC3QMSUDMDQ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Bent Leg Raises",
        sets: 3,
        reps: 35,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524152865-FHM1H9K1JXBMN8XEU3NM/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524161673-V40ZMQVN7A939AK9WW3W/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Leg Raises",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524176268-N10918DD1ZAV4RM9R17S/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524186317-O2HDEWQ3WR2T3U2VE50E/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Leg+Raises+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Hanging Knee Raises",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524203469-C003QP8XDDP436DDILZA/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524217761-WUU96XYKH33RMPWUXA1Y/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Hanging+Knee+Raises+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Hanging Bent Leg Raises",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524230520-E5RVBU6SEWB6Z81XC257/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524239608-62ZQSOOMU2EGPTUPG4SK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Hanging Leg Raises",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524250397-MCBQZWSGU4RKHJ1W8YRK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524265989-BS76TKDSTIH0YJB3BIDQ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "L-Hold",
        note:
          "Do hanging leg raises after to maintain a dynamic element to your core training.",
        sets: 1,
        reps: 30,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524334816-Y2RXZVHOPWH1A53FI8T7/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "V-Hold",
        note:
          "Do hanging leg raises after to maintain a dynamic element to your core training.",
        sets: 1,
        reps: 30,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524346356-8PEBG8G8DO3CGM9GKSO6/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Hanging V-Hold",
        note:
          "Do hanging leg raises after to maintain a dynamic element to your core training.",
        sets: 1,
        reps: 60,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597524425563-O9LPEZ8LTPQLP2LZSNM2/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
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
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527335211-0PBGYJOUQDXJ35CRFXCX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527346827-YM3RVO9QBS628VEV7UQE/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Horizontal Pullups (Chest Height)",
        sets: 3,
        reps: 30,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527370683-IHIC4EFDSN1MHG5CJDEU/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527382956-30UX4IQQCUZGR9N2HJ0S/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Horizontal Pullups (Hip Height)",
        sets: 3,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527404441-VTQQZ0AQBMSZO62S450U/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527393773-7MC6LGEDSVU51UJHEOQR/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Jackknife Pullups",
        sets: 3,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527416345-4RT9TW430UOPHRA5ERXJ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527428255-6639SDEKGC871UEVSGBU/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Full Pullups/Chinups",
        sets: 2,
        reps: 12,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527456276-C1F94QWYLTH75XIZ5RVK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527467840-GCIVQ101LUG323N46GUA/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Narrow Pullups",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527483731-WSQ5VFHB3VRD1VY7TNNU/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527493386-E18K3KJ70DV0B30Q37LV/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Narrow+Pullup+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "One-Hand Pullups",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527515716-6V37WKZK39J2GUT1U6HY/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527524590-GUJT8RZDPXE3HP14JPBR/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/One+Hand+Pullup+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Archer Pullups",
        sets: 2,
        reps: 7,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527545661-KKKQXF9IXI81H2V652UB/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527555486-82AWKGS8XDTI2VO1SI4P/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Archer+Pullup+Left+Stop.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527564408-ZVJPQ59V342FL02S3HRE/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527601957-S2AE50X91KFF45J7MZVH/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "One-Arm Pullups",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527612870-2Q96LTIVHC14QTASI8BN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/One+Arm+Pullup+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597527637513-2I155PKUAE7H9PCFG0W9/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/One+Arm+Pullup+Stop.jpg?format=1000w"
        ]
      }
    ]
  },
  {
    name: "Bridges",
    progression: [
      {
        name: "Short Bridges",
        sets: 3,
        reps: 50,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597528980244-PIXUAJIIDLY46QQOG0A1/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/20200814_175935_3.gif?format=1000w"
        ]
      },
      {
        name: "Straight Bridges",
        sets: 3,
        reps: 40,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597529349733-Q3SYO1LLY8HYYVU1E8TG/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Straight+Bridge.gif?format=1000w"
        ]
      },
      {
        name: "Raised Straight Bridges",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597529651525-L3LGH8KSFEKHALZ7I4FW/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Raised+Straight+Bridge.gif?format=1000w"
        ]
      },
      {
        name: "Head Bridges",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597529832954-F71XDYVJNMM2GPKEWSV4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Head+Bridges.gif?format=1000w"
        ]
      },
      {
        name: "Full Bridges",
        sets: 2,
        reps: 15,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597529979448-JVQYHTLYMW95UP91WE33/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Full+Bridge.gif?format=1000w"
        ]
      },
      {
        name: "One-Leg Gecko Bridges",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597530181219-C4ZURSK5ICA2RR18GLNB/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/One+Leg+Gecko+Bridge.gif?format=1000w"
        ]
      },
      {
        name: "Walking Bridges",
        sets: 1,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597530728444-HK5P57DVDT9843UXG084/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Walking+Bridges.gif?format=1000w"
        ]
      },
      {
        name: "Wall-Walking Bridges",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597531267485-CY1ASHFT5ZOP0YMXEW4F/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Wall+Walking+Bridges+%282%29.gif?format=1000w"
        ]
      },
      {
        name: "Stand-to-Stand Bridges",
        note:
          "Work the eccentric (negative) portion of this first. Descend into a bridge and stand up normally. After you can do this well, lean back onto objects of decreasing height (stairs work well) until you can finally lean back into this exercise and stand back up with the power of your core and legs.",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597531534831-657TZZAIGTYOJ3MZC8DY/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/Stand+to+Stand+Bridges.gif?format=1000w"
        ]
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
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521361870-EXO60W9F55YOW9XO1SR2/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521371038-HTTKNW0F884PXK9NP38A/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Assisted Squats",
        sets: 3,
        reps: 30,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521383670-IX9C7LHL0Q0QDNCHXZP7/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521395126-6UWPWLPBLLXW7R8E3RWW/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Assisted+Squat+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Half Squats",
        sets: 2,
        reps: 35,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521449158-9WNKKFQD8Q832KHNP8GS/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Half+Squat+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521458935-FPBM2EJ6YPNR00DYDYZK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Full Squats",
        sets: 2,
        reps: 50,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521472016-V8QC1FPCXAD0SLMO686V/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521480562-0BV3VKTP57EYXMIA2W86/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Narrow Squats",
        sets: 2,
        reps: 25,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521500567-9FWCRKBWFHUBU4ARQWZK/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521520835-8HV7XVCXDVMM1X6S967U/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Narrow+Squat+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Side-Staggered Squats",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521549016-ATL3MPM9GO20D8KCRARM/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521585318-K5TIA5AFIXA1CTV0DXBW/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "Staggered Squats",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521964384-FBBO3TOYD0Q6VV1PSN87/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597522008941-G4G3Q4VYHJGBFDKWGBUB/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/Front+Staggered+Squats+Stop.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521995922-TEIA8MVXMMVZSPDBSQHB/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521979449-KBU6MC8UWFRETC0W49LX/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/Front+Staggered+Squats+Left+Stop.jpg?format=1000w"
        ]
      },
      {
        name: "Assisted One-Leg Squats",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521601741-8QKRLZG50DTQ6AGLH8TQ/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521620600-6TSD3AC50AB21IL3TSHQ/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "One-Leg Chair Squats",
        sets: 2,
        reps: 9,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521656198-Q71ZPUFH1JGJA6NBJP6Z/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/One+Leg+Chair+Squat+Start.jpg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521664047-WWCLYZXBKN42QNZ9123Y/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w"
        ]
      },
      {
        name: "One-Leg Squats",
        sets: 2,
        reps: 20,
        images: [
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521676571-OC2XR34VLTL1GDXU5UTL/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/image-asset.jpeg?format=1000w",
          "https://images.squarespace-cdn.com/content/v1/5deaeb267bc46246f5378ee8/1597521687767-JE581N40GOVOV7S0OX9V/ke17ZwdGBToddI8pDm48kNu--eMln2zIn7qUj0L4pXBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF9gRHXsL5RZeCGTm-B6UZn5rd-x0Dm8GIL1QBRw4foy-GIi0ZlEJ2Dp0_GhZ2fjGA/One+Leg+Squat+Stop.jpg?format=1000w"
        ]
      }
    ]
  },
  {
    name: "Sit Thru Knee",
    progression: [
      {
        name: "Sit Thru Knee",
        sets: 3,
        reps: 20,
        images: [
          "https://i.ibb.co/Wkjfr5d/Screen-Shot-2021-02-18-at-1-31-43-PM.png",
          "https://i.ibb.co/8b7n4L0/Screen-Shot-2021-02-18-at-1-32-05-PM.png",
          "https://i.ibb.co/HrQXvDj/Screen-Shot-2021-02-18-at-1-32-32-PM.png",
          "https://i.ibb.co/KDSWSzG/Screen-Shot-2021-02-18-at-1-32-43-PM.png"
        ]
      }
    ]
  },
  {
    name: "Plank",
    progression: [
      {
        name: "Plank walk downs",
        sets: 3,
        reps: 20,
        images: [
          "https://i.ibb.co/y8xpSRn/Screen-Shot-2021-02-18-at-1-37-55-PM.png",
          "https://i.ibb.co/LC19Hqf/Screen-Shot-2021-02-18-at-1-37-40-PM.png",
          "https://i.ibb.co/sKs4Z2V/Screen-Shot-2021-02-18-at-1-37-32-PM.png"
        ]
      }
    ]
  }
];
