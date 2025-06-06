import { supabase } from '@/lib/supabase';
import { Text, View } from 'react-native';

export default function Profile() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-2xl font-bold text-white' onPress={() => supabase.auth.signOut()}>
                Sign Out
            </Text>
        </View>
    );
}