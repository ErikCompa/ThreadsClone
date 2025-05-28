export type User = {
    id: string;
    username: string;
    name: string;
    bio: string;
    image: string;
}

export type Post = {
    id: string;
    createdAt: string;
    content: string;

    user_id: string;
    user: User;

    parent_id: string | null;
    parent: Post | null;
    
    replies: Post[];
}