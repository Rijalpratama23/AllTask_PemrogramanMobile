import React, { useState } from 'react'; // Tambahkan useState
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const color = {
  primary: '#F3F2E7',
  secondary: '#FFFFFF',
  bgCta: '#869298',
  bgView: '#EAE9D2',
  btnBg: '#131E2E',
  bgHook: '#FF7043',
  bgTrnsparent: '#1E1E1E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  headerImage: {
    height: 358,
    padding: 20,
    justifyContent: 'flex-end',
  },
  headerTop: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoKembali: {
    fontSize: 22,
    fontWeight: '900',
    color: color.secondary,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: color.bgCta,
    borderRadius: 25,
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather: {
    backgroundColor: color.bgCta,
    borderRadius: 50,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  weatherText: {
    color: color.secondary,
    marginLeft: 5,
    fontWeight: '900',
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.bgCta,
    alignSelf: 'flex-start',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  matahari: {
    fontSize: 20,
    color: color.secondary,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: color.secondary,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#eee',
    marginTop: 4,
    lineHeight: 18,
  },
  content: {
    backgroundColor: '#FFFBEA',
    marginTop: -20,
    padding: 20,
    paddingBottom: 200,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 22,
    height: 22,
    marginRight: 6,
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 2,
    marginTop: 13,
  },
  countryText: {
    fontWeight: '100',
    marginTop: 13,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '900',
    marginVertical: 10,
    marginBottom: 20,
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  commentAuthor: {
    fontWeight: '600',
  },
  commentText: {
    marginTop: 8,
    color: '#555',
    fontSize: 13,
    lineHeight: 18,
  },
  viewAllButton: {
    backgroundColor: color.bgView,
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 10,
    marginTop: 18,
  },
  viewAllText: {
    fontWeight: '900',
  },
  recommendCard: {
    backgroundColor: color.btnBg,
    padding: 12,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  recommendImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  recommendInfo: {
    flex: 1,
    paddingLeft: 10,
    color: color.secondary,
  },
  recommendTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: color.secondary,
  },
  recommendSubtitle: {
    color: '#aaa',
    fontSize: 12,
  },

  footer: {
    backgroundColor: color.bgTrnsparent,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 25,
    paddingTop: 15,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 130,
    justifyContent: 'space-between',
  },
  circleButtonPlus: {
    backgroundColor: color.bgHook,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonMinus: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  circleTextMinus: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  counterText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    color: '#ccc',
    fontSize: 14,
  },
  priceValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  bookButton: {
    width: '90%',
    backgroundColor: color.bgHook,
    borderRadius: 15,
    paddingVertical: 15,
    // Hapus width: 300 yang lama
  },
  bookText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});

const DestinationDetail = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('./asset/labuanBajo.jpg')}
          style={styles.headerImage}
        >
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.backButton}>
              <Text>←</Text>
            </TouchableOpacity>
            <View style={styles.weather}>
              <Text>☀️</Text>
              <Text style={styles.weatherText}>24°C</Text>
            </View>
          </View>

          <View style={styles.rating}>
            <Text>⭐</Text>
            <Text style={styles.ratingText}>5.0</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Labuan Bajo</Text>
            <Text style={styles.subtitle}>
              From scystal-clear waters to breathtaking sunsets, Labuan Bajo is
              calling! Explore hidden islands, swim with manta rays, and create
              memories that last a lifetime
            </Text>
          </View>
        </ImageBackground>

        {/* Content Section */}
        <View style={styles.content}>
          <View style={styles.country}>
            <Image
              source={{ uri: 'https://flagcdn.com/w40/id.png' }}
              style={styles.flag}
            />
            <Text style={styles.countryText}>Indonesia</Text>
          </View>

          <Text style={styles.sectionTitle}>
            Discover the Beauty of Labuan Bajo
          </Text>

          {/* Comment Card (Dipertahankan) */}
          <View style={styles.commentCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/50?img=5' }}
                style={styles.avatar}
              />
              <Text style={styles.commentAuthor}>By Rifqi starboy</Text>
            </View>
            <Text style={styles.commentText}>
              Wow amazing yahh, best experience in my life very very worth it i
              like it! Very good very well
            </Text>
          </View>

          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Recomendation in Bajo</Text>

          <View style={styles.recommendCard}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=400&q=60',
              }}
              style={styles.recommendImage}
            />
            <View style={styles.recommendInfo}>
              <Text style={styles.recommendTitle}>
                Phinisi Luxury Private Trip
              </Text>
              <Text style={styles.recommendSubtitle}>
                Complimentary pick-up from your hotel.
              </Text>
              {/* Tambahkan View kosong di sini agar teks rekomendasi tertutup footer */}
              <View style={{ height: 10 }} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Section - Bottom Sheet/Overlay */}
      <View style={styles.footer}>
        {/* Kontainer untuk Counter dan Total Amount (baris pertama) */}
        <View style={styles.containerFooter}>
          {/* Counter (Tombol Plus, Angka, Tombol Minus) */}
          <View style={styles.counterContainer}>
            {/* Tombol Plus (Orange - Kiri) */}
            <TouchableOpacity
              style={styles.circleButtonPlus}
              onPress={increaseCount}
            >
              <Text style={styles.circleText}>+</Text>
            </TouchableOpacity>

            {/* Menampilkan nilai counter dari state */}
            <Text style={styles.counterText}>{count}</Text>

            {/* Tombol Minus (Putih - Kanan) */}
            <TouchableOpacity
              style={styles.circleButtonMinus}
              onPress={decreaseCount}
            >
              <Text style={styles.circleTextMinus}>-</Text>
            </TouchableOpacity>
          </View>

          {/* Total Amount */}
          <View style={styles.price}>
            <Text style={styles.priceLabel}>Total Amount</Text>
            <Text style={styles.priceValue}>$10.000</Text>
          </View>
        </View>

        {/* Tombol Book Now (baris kedua) */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationDetail;
