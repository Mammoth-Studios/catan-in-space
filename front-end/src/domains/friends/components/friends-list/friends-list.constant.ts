export interface Friend {
  username: string;
  status: boolean;
  lastOn: number;
  gamesPlayed: number;
}

export const friendsList: Friend[] = [
  {
    username: "user1",
    status: true,
    lastOn: Date.now(),
    gamesPlayed: 10,
  },
  {
    username: "user2",
    status: false,
    lastOn: Date.now(),
    gamesPlayed: 11,
  },
  {
    username: "user3",
    status: false,
    lastOn: Date.now(),
    gamesPlayed: 4,
  },
  {
    username: "user4",
    status: true,
    lastOn: Date.now(),
    gamesPlayed: 7,
  },
];
