import { User, Post } from "./types";

export const users: User[] = [
  {
    id: "u1",
    username: "alice",
    name: "Alice Smith",
    bio: "Coffee lover. Cat person.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "u2",
    username: "bob",
    name: "Bob Johnson",
    bio: "Tech enthusiast. Runner.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "u3",
    username: "carol",
    name: "Carol Lee",
    bio: "Designer. Dreamer.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "u4",
    username: "dave",
    name: "Dave Kim",
    bio: "Music addict. Gamer.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "u5",
    username: "eve",
    name: "Eve Martinez",
    bio: "Traveler. Foodie.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

// Helper to get user by id
const getUser = (id: string) => users.find((u) => u.id === id)!;

export const posts: Post[] = [
  {
    id: "p1",
    createdAt: "2025-05-28T08:00:00Z",
    content: "Hello Threads! Excited to join the conversation.",
    user_id: "u1",
    user: getUser("u1"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p2",
    createdAt: "2025-05-28T08:05:00Z",
    content: "Welcome, Alice! Glad to see you here.",
    user_id: "u2",
    user: getUser("u2"),
    parent_id: "p1",
    parent: null, // Will be linked later
    replies: [],
  },
  {
    id: "p3",
    createdAt: "2025-05-28T08:10:00Z",
    content: "Anyone else love coffee as much as I do?",
    user_id: "u1",
    user: getUser("u1"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p4",
    createdAt: "2025-05-28T08:12:00Z",
    content: "Absolutely! Can't start my day without it.",
    user_id: "u3",
    user: getUser("u3"),
    parent_id: "p3",
    parent: null,
    replies: [],
  },
  {
    id: "p5",
    createdAt: "2025-05-28T08:15:00Z",
    content: "What's everyone's favorite programming language?",
    user_id: "u2",
    user: getUser("u2"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p6",
    createdAt: "2025-05-28T08:16:00Z",
    content: "TypeScript for sure!",
    user_id: "u4",
    user: getUser("u4"),
    parent_id: "p5",
    parent: null,
    replies: [],
  },
  {
    id: "p7",
    createdAt: "2025-05-28T08:17:00Z",
    content: "Python all the way.",
    user_id: "u5",
    user: getUser("u5"),
    parent_id: "p5",
    parent: null,
    replies: [],
  },
  {
    id: "p8",
    createdAt: "2025-05-28T08:20:00Z",
    content: "Just finished a 5k run this morning!",
    user_id: "u2",
    user: getUser("u2"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p9",
    createdAt: "2025-05-28T08:22:00Z",
    content: "Nice job, Bob! 🏃‍♂️",
    user_id: "u3",
    user: getUser("u3"),
    parent_id: "p8",
    parent: null,
    replies: [],
  },
  {
    id: "p10",
    createdAt: "2025-05-28T08:25:00Z",
    content: "Anyone going to the concert tonight?",
    user_id: "u4",
    user: getUser("u4"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p11",
    createdAt: "2025-05-28T08:26:00Z",
    content: "I wish! Tickets sold out fast.",
    user_id: "u1",
    user: getUser("u1"),
    parent_id: "p10",
    parent: null,
    replies: [],
  },
  {
    id: "p12",
    createdAt: "2025-05-28T08:30:00Z",
    content: "Just posted a new design on Dribbble!",
    user_id: "u3",
    user: getUser("u3"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p13",
    createdAt: "2025-05-28T08:32:00Z",
    content: "Looks awesome, Carol!",
    user_id: "u5",
    user: getUser("u5"),
    parent_id: "p12",
    parent: null,
    replies: [],
  },
  {
    id: "p14",
    createdAt: "2025-05-28T08:35:00Z",
    content: "Trying a new recipe tonight. Wish me luck!",
    user_id: "u5",
    user: getUser("u5"),
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p15",
    createdAt: "2025-05-28T08:40:00Z",
    content: "Good luck, Eve! Let us know how it goes.",
    user_id: "u2",
    user: getUser("u2"),
    parent_id: "p14",
    parent: null,
    replies: [],
  },
];

// Link parent and replies
posts.forEach((post) => {
  if (post.parent_id) {
    post.parent = posts.find((p) => p.id === post.parent_id) || null;
    if (post.parent) {
      post.parent.replies.push(post);
    }
  }
});