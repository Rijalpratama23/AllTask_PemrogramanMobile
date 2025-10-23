import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const color = {
  bg: '#F3F2E7',
  active: '#FF7043',
  cardBg: '#FFFFFF',
  darkText: '#1E1E1E',
  softText: '#737373',
  navbarBg: '#131E2E',
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg,
    paddingHorizontal: 22,
    paddingTop: 55,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  location: {
    marginTop: 25,
  },
  locationLabel: {
    color: color.softText,
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 22,
    fontWeight: '700',
    color: color.darkText,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  categoryBtn: {
    backgroundColor: '#EAE9D2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeCategory: {
    backgroundColor: color.active,
  },
  categoryText: {
    color: color.darkText,
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#fff',
  },
  dateSection: {
    marginTop: 25,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontWeight: '600',
    fontSize: 16,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  dateBox: {
    width: 40,
    height: 60,
    backgroundColor: '#EAE9D2',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDateBox: {
    backgroundColor: color.active,
  },
  dateDay: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1E1E1E',
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  activeDateText: {
    color: '#fff',
  },
  foundText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 25,
  },
  ticketCard: {
    flexDirection: 'row',
    backgroundColor: color.cardBg,
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 15,
    elevation: 4,
  },
  ticketLeft: {
    backgroundColor: '#FF7043',
    paddingVertical: 30,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  airlineText: {
    transform: [{ rotate: '-90deg' }],
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 40,
  },
  airlineIcon: {
    backgroundColor: '#131E2E',
    borderRadius: 50,
    padding: 8,
    marginBottom: 15,
    fontSize: 30
  },
  ticketRight: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  ticketRoute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeCode: {
    fontSize: 28,
    fontWeight: '700',
  },
  routeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  city: {
    fontSize: 13,
    color: color.softText,
  },
  time: {
    fontSize: 15,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: color.softText,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: color.navbarBg,
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
});

const TicketPage = () => {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={style.header}>
         <Icon name="arrow-back" size={20} color={color.darkText} />
          <Text style={style.headerTitle}>Tickets</Text>
          <Icon name="ellipsis-vertical" size={20} color={color.darkText} />
        </View>

        {/* LOCATION */}
        <View style={style.location}>
          <Text style={style.locationLabel}>Current locations</Text>
          <View style={style.locationRow}>
            <Text style={style.locationText}>Netherlands</Text>
            <Icon name="chevron-down" size={20} color={color.darkText} />
          </View>
        </View>

        {/* CATEGORY */}
        <View style={style.categoryRow}>
          <TouchableOpacity style={style.categoryBtn}>
            <Text style={style.categoryText}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.categoryBtn, style.activeCategory]}>
            <Text style={[style.categoryText, style.activeCategoryText]}>
              Aircraft
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoryBtn}>
            <Text style={style.categoryText}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoryBtn}>
            <Text style={style.categoryText}>Attraction</Text>
          </TouchableOpacity>
        </View>

        {/* DATE SELECTOR */}
        <View style={style.dateSection}>
          <View style={style.dateHeader}>
            <Text style={style.dateText}>June, 2025</Text>
            <Icon name="chevron-down" size={18} color={color.darkText} />
          </View>

          <View style={style.dateRow}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <TouchableOpacity
                key={i}
                style={[style.dateBox, d === 'M' ? style.activeDateBox : null]}
              >
                <Text
                  style={[
                    style.dateDay,
                    d === 'M' ? style.activeDateText : null,
                  ]}
                >
                  {d}
                </Text>
                <Text
                  style={[
                    style.dateNumber,
                    d === 'M' ? style.activeDateText : null,
                  ]}
                >
                  {22 + i}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* TICKET LIST */}
        <Text style={style.foundText}>4 Tickets Found</Text>

        {Array(2)
          .fill(0)
          .map((_, i) => (
            <View style={style.ticketCard} key={i}>
              <View style={style.ticketLeft}>
                <Text style={style.airlineText}>AIRLINES</Text>
                <View style={style.airlineIcon}>
                  <Icon name="airplane" size={16} color="#fff" />
                </View>
              </View>

              <View style={style.ticketRight}>
                <View style={style.ticketRoute}>
                  <Text style={style.routeCode}>NL</Text>
                  <Icon name="airplane" size={24} color="#1E1E1E" />
                  <Text style={style.routeCode}>IDN</Text>
                </View>
                <View style={style.routeInfo}>
                  <View>
                    <Text style={style.city}>Rotterdam</Text>
                    <Text style={style.time}>5:30pm</Text>
                    <Text style={style.date}>Mon, 23 Jun</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={style.city}>Labuan Bajo</Text>
                    <Text style={style.time}>3:30am</Text>
                    <Text style={style.date}>Tue, 24 Jun</Text>
                  </View>
                </View>
                <Text style={style.price}>$1.700</Text>
              </View>
            </View>
          ))}
      </ScrollView>

      {/* ===== Bottom Navbar ===== */}
      <View style={style.navbar}>
        <TouchableOpacity style={style.navItem}>
          <Icon name="home" size={26} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={style.navItem}>
          <Icon name="grid" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={style.navItem}>
          <Icon name="person" size={26} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketPage;
