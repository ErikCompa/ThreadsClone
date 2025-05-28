import { Text, View, FlatList } from 'react-native';
import { posts } from '@/dummyData';
import PostListItem from '@/components/PostListItem';

export default function App() {
  return (
    <FlatList 
      data={posts} 
      renderItem={({ item }) => <PostListItem post={item} />}
    >

    </FlatList>
  );
}