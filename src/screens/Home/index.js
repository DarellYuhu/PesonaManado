import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BgBubble1, BgBubble2, BgBubble3} from '../../../assets/icons';

const Home = () => {
  const navigation = useNavigation();
  const handleCategoryPress = category => {
    navigation.navigate('TourList', {category});
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={{display: 'flex', flexDirection: 'row', columnGap: 15}}>
        <Image source={require('../../../assets/images/avatar.png')} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Zein
          </Text>
          <Text style={{color: '#A8A5A5', fontWeight: '300'}}>Profile</Text>
        </View>
      </View>

      {/* Banner and Category */}
      <View style={{gap: 35}}>
        <Image source={require('../../../assets/images/banner.png')} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignItems: 'center'}}
            onPress={() => handleCategoryPress('Pantai')}>
            <Image source={require('../../../assets/images/beach.png')} />
            <Text style={styles.text}>Pantai</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignItems: 'center'}}
            onPress={() => handleCategoryPress('Gunung')}>
            <Image source={require('../../../assets/images/mountain.png')} />
            <Text style={styles.text}>Gunung</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignItems: 'center'}}
            onPress={() => handleCategoryPress('Kolam')}>
            <Image source={require('../../../assets/images/pool.png')} />
            <Text style={styles.text}>Kolam</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Item */}
      <View style={{gap: 35}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
          Most Popular
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../../../assets/images/beach-card-1.png')}
            style={styles.list}
          />
          <Image
            source={require('../../../assets/images/beach-card-2.png')}
            style={styles.list}
          />
          <Image
            source={require('../../../assets/images/beach-card-3.png')}
            style={styles.list}
          />
        </View>
      </View>

      <BgBubble1 style={{position: 'absolute', top: 0, right: 0, zIndex: -1}} />
      <BgBubble2 style={{position: 'absolute', top: '20%', zIndex: -1}} />
      <BgBubble3
        style={{position: 'absolute', top: '60%', right: 0, zIndex: -1}}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 30,
    rowGap: 50,
  },
  text: {
    color: 'black',
  },
  list: {
    width: 80,
    height: 128,
    objectFit: 'cover',
    borderRadius: 10,
  },
});
