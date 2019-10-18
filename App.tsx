import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150429.jpg', props: {}},
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150504.jpg', props: {}},
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150506.jpg', props: {}},
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150511.jpg', props: {}},
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150518.jpg', props: {}},
  {url: 'http://cdn.twokinds.keenspot.com/comics/20150527.jpg', props: {}},
];

export default function App() {
  return (
    <Modal visible={true} transparent={true}>
        <ImageViewer 
          imageUrls={images}
          loadingRender={ () => <ActivityIndicator size="large" color="#fff"></ActivityIndicator>}/>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
