# Threads Clone

This project is a Threads clone, developed by following the notJust.dev 'Threads Clone' YouTube tutorial.

## Getting Started

To run this project locally, follow these steps:

1.  **Install Dependencies:** Navigate to the `Threads` folder and run `npm install`.
2.  **Set Up Supabase Database:** Create a new Supabase database. You can find the database schema in the `/supabase/migrations` directory.
3.  **Configure Environment Variables:** Create a `.env` file in the root of your project and add the following variables:
    * `EXPO_PUBLIC_SUPABASE_URL=yourkey`
    * `EXPO_PUBLIC_SUPABASE_ANON_KEY=yourkey`
    * `SUPABASE_ACCESS_TOKEN=yourkey`
4.  **Start the Project:** Run `npx expo start -c`
