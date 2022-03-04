import { ScrollView, Text } from 'react-native';
import Post from '../components/Post';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Post />
    </ScrollView>
  );
};

export default HomeScreen;
