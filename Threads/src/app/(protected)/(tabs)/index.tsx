import { ActivityIndicator, FlatList, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .throwOnError();

  return data;
}

export default function App() {
  const {data: posts, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text className='text-red-500'>{error.message}</Text>
  }

  return (
    <FlatList 
      data={posts} 
      renderItem={({ item }) => <PostListItem post={item} />}
    >
    </FlatList>
  );
}