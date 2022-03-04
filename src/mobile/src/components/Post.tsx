import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const Post = () => {
  const [htmlContent, setHtmlContent] = useState({ html: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('https://api.telescope.cdot.systems/v1/posts/4e83fcbc31');
      const jsonRes = await res.json();
      setHtmlContent({ html: jsonRes.html });
    };
    fetchPost();
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View>{htmlContent ? <RenderHtml contentWidth={width} source={htmlContent} /> : null}</View>
  );
};

export default Post;
