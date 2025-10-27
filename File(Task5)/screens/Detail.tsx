import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../stackTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function Detail({ navigation, route }: Props) {
  const params = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ImageBackground source={params.imageLocal} style={styles.headerImage} imageStyle={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={20} color="#333" />
          </TouchableOpacity>
          <View style={styles.ratingBox}>
            <Icon name="star" size={14} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 6 }}>{params.rating.toFixed(1)}</Text>
          </View>

          <View style={styles.headerTitle}>
            <Text style={styles.titleLarge}>{params.title}</Text>
            <Text style={styles.subtitle}>
              {params.description ?? 'No description provided.'}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <View style={styles.countryRow}>
            <Icon name="ellipse" size={14} color="#FF7043" />
            <Text style={styles.countryText}>{params.country}</Text>
          </View>

          <Text style={styles.sectionTitle}>Discover the Beauty of {params.title}</Text>

          <View style={styles.commentCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.avatar} />
              <Text style={styles.commentAuthor}>By Rifqi starboy</Text>
            </View>
            <Text style={styles.commentText}>Wow amazing yahh, best experience in my life very very worth it i like it!</Text>
          </View>

          <Text style={styles.sectionTitle}>Recommendation in {params.title}</Text>

          <View style={styles.recommendCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.recommendTitle}>Phinisi Luxury Private Trip</Text>
              <Text style={styles.recommendSubtitle}>Complimentary pick-up from your hotel.</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={{ color: '#fff', fontWeight: '700' }}>${params.price.toLocaleString()}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.counterRow}>
          <TouchableOpacity style={styles.circle}>+</TouchableOpacity>
          <Text style={styles.count}>1</Text>
          <TouchableOpacity style={[styles.circle, { backgroundColor: '#fff' }]}>-</TouchableOpacity>

          <View style={{ flex: 1 }} />
          <View>
            <Text style={{ color: '#ccc', fontSize: 12 }}>Total Amount</Text>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>${params.price.toLocaleString()}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F2E7' },
  headerImage: { height: 300, justifyContent: 'flex-end' },
  backBtn: { position: 'absolute', top: 20, left: 16, backgroundColor: '#fff', padding: 8, borderRadius: 12 },
  ratingBox: { position: 'absolute', top: 20, right: 16, backgroundColor: 'rgba(0,0,0,0.45)', padding: 8, borderRadius: 18, flexDirection: 'row', alignItems: 'center' },
  headerTitle: { padding: 18 },
  titleLarge: { color: '#fff', fontSize: 30, fontWeight: '700' },
  subtitle: { color: 'rgba(255,255,255,0.9)', marginTop: 8, fontSize: 13, lineHeight: 18 },
  content: { padding: 18, paddingBottom: 120 },
  countryRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  countryText: { marginLeft: 8, color: '#222' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginTop: 12 },
  commentCard: { backgroundColor: '#fff', padding: 12, borderRadius: 12, marginTop: 12, elevation: 2 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#ddd', marginRight: 8 },
  commentAuthor: { fontWeight: '600' },
  commentText: { color: '#666', marginTop: 8 },
  recommendCard: { flexDirection: 'row', backgroundColor: '#131E2E', borderRadius: 12, padding: 12, marginTop: 12, alignItems: 'center' },
  recommendTitle: { color: '#fff', fontWeight: '700' },
  recommendSubtitle: { color: '#ccc', marginTop: 6, fontSize: 12 },
  priceBox: { backgroundColor: '#FF7043', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, marginLeft: 12 },
  footer: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    backgroundColor: 'rgba(19,30,46,0.9)',
    borderRadius: 14,
    padding: 12,
  },
  counterRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  circle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FF7043', justifyContent: 'center', alignItems: 'center', color: '#fff' },
  count: { color: '#fff', marginHorizontal: 12, fontSize: 16, fontWeight: '700' },
  bookBtn: { backgroundColor: '#FF7043', alignItems: 'center', padding: 12, borderRadius: 10 },
});
