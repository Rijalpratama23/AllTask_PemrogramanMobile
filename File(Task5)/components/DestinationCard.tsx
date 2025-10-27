import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Destination } from '../types';

type Props = {
  item: Destination;
  onPress?: (e: GestureResponderEvent) => void;
  style?: any;
};

export default function DestinationCard({ item, onPress, style }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.card, style]}>
      <ImageBackground source={item.imageLocal} style={styles.image} imageStyle={styles.imageStyle}>
        <TouchableOpacity style={styles.favoriteBtn}>
          <Icon name="heart-outline" size={18} color="#fff" />
        </TouchableOpacity>

        <View style={styles.overlay} />

        <View style={styles.infoContainer}>
          <View>
            <View style={styles.row}>
              <Icon name="location" size={12} color="#fff" />
              <Text style={styles.countryText}>{item.country}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.row}>
              <Icon name="star" size={12} color="#fff" />
              <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.price}>${item.price.toLocaleString()}<Text style={styles.per}>/pax</Text></Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 370,
    height: 190,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 4,
    backgroundColor: '#ddd',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 14,
  },
  favoriteBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 8,
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
  rating: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 12,
  },
  price: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'right',
  },
  per: {
    fontSize: 11,
    fontWeight: '400',
  },
  bottomRow: {
    alignItems: 'flex-end',
  },
});
