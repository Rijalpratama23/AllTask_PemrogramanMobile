import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { getSongById, Song } from '../api/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'SongDetail'>;

export default function SongDetailScreen({ route }: Props) {
  const { id } = route.params;
  const [song, setSong] = useState<Song | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getSongById(id);
      setSong(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>Loading detail…</Text>
      </View>
    );
  }

  if (!song) {
    return (
      <View style={styles.center}>
        <Text>Song not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: song.cover }} style={styles.cover} />
      <View style={styles.section}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>
          {song.artist} • {song.album}
        </Text>
        <Text style={styles.meta}>Genre: {song.genre}</Text>
        <Text style={styles.score}>Score: {song.score}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.desc}>{song.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { paddingBottom: 24 },
  cover: { width: '100%', height: 250, backgroundColor: '#E5E7EB' },
  section: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700' },
  meta: { color: '#6B7280', marginTop: 4 },
  score: { color: '#10B981', fontWeight: '600', marginTop: 4 },
  heading: { fontSize: 18, fontWeight: '700', marginTop: 12, marginBottom: 6 },
  desc: { color: '#111827', lineHeight: 20 },
});
