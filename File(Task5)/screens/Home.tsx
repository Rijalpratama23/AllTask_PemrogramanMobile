import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../stackTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.name}>Rijal</Text>
          </View>
          <Icon name="heart" size={28} color="#FF7043" />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Plan Your{'\n'}Summer!</Text>
          </View>
          <TouchableOpacity style={styles.bannerCta}>
            <Icon name="arrow-forward" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.search}>
            <Icon name="search" size={18} color="#333" />
            <TextInput placeholder="Search destination..." style={styles.input} />
          </View>
          <View style={styles.filterBtn}>
            <Icon name="options" size={20} color="#fff" />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularHead}>
          <Text style={styles.popularTitle}>Popular Destination</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.cardList}>
          {destinations.map((d) => (
            <DestinationCard
              key={d.id}
              item={d}
              onPress={() =>
                navigation.navigate('Detail', {
                  id: d.id,
                  title: d.title,
                  country: d.country,
                  imageLocal: d.imageLocal,
                  rating: d.rating,
                  price: d.price,
                  description: d.description,
                  coords: d.coords,
                })
              }
            />
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* bottom nav UI copy (visual only) */}
      {/* actual bottom tabs handled by navigator; keep here only if you want custom */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F2E7' },
  header: {
    marginTop: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: { fontSize: 17, color: '#666' },
  name: { fontSize: 25, fontWeight: '600', marginTop: 4 },
  banner: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#FF7043',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  bannerText: { flex: 1, padding: 20 },
  bannerTitle: { color: '#fff', fontSize: 29, fontWeight: '600', lineHeight: 34 },
  bannerCta: {
    backgroundColor: '#FF9B7A',
    padding: 14,
    borderRadius: 12,
    marginLeft: 12,
  },
  searchRow: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 18, alignItems: 'center' },
  search: {
    flex: 1,
    backgroundColor: '#EAE9D2',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: { marginLeft: 10, fontSize: 14, flex: 1 },
  filterBtn: {
    marginLeft: 12,
    backgroundColor: '#131E2E',
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularHead: {
    marginTop: 18,
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularTitle: { fontSize: 16, fontWeight: '600' },
  viewAll: { fontSize: 14, color: '#777' },
  cardList: { marginTop: 12, paddingLeft: 20 },
});
