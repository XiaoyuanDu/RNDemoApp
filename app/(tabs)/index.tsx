import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock data for collections
const picksForYou = [
  {
    id: 1,
    title: 'Travel Vibes',
    clipCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
  },
  {
    id: 2,
    title: 'Get Ready With Me',
    clipCount: 27,
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
  },
];

const myCollections = [
  {
    id: 1,
    title: 'Recent',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400',
  },
  {
    id: 2,
    title: '2025 Trip',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400',
  },
  {
    id: 3,
    title: 'OOTDs',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
  },
  {
    id: 4,
    title: 'Foodie',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
  },
];

const mediaTypes = [
  { id: 1, icon: 'play.rectangle.fill', title: 'Videos' },
  { id: 2, icon: 'photo.fill', title: 'Photos' },
  { id: 3, icon: 'slowmo', title: 'Slow Motion' },
  { id: 4, icon: 'timer', title: 'Time-lapse' },
];

export default function AssetsHubScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Assets Hub</Text>
          <TouchableOpacity style={styles.downloadButton}>
            <IconSymbol name="arrow.down.circle" size={24} color="#5856D6" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <IconSymbol name="magnifyingglass" size={18} color="#8E8E93" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search 'golden hour beach walk'..."
            placeholderTextColor="#8E8E93"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Picks For You Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <IconSymbol name="sparkles" size={20} color="#8E8E93" />
              <Text style={styles.sectionTitle}>Picks For You</Text>
              <IconSymbol name="info.circle" size={16} color="#8E8E93" />
            </View>
            <View style={styles.needIdeasContainer}>
              <IconSymbol name="lightbulb.fill" size={14} color="#5856D6" />
              <Text style={styles.needIdeasText}>Need New ideas?</Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.picksScrollContent}
            style={styles.picksScroll}>
            {picksForYou.map((item) => (
              <View key={item.id} style={styles.pickCard}>
                <Image source={{ uri: item.imageUrl }} style={styles.pickImage} />
                <Text style={styles.pickTitle}>{item.title}</Text>
                <Text style={styles.pickClipCount}>{item.clipCount} clips</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* My Collections Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>My Collections</Text>
            <IconSymbol name="chevron.right" size={20} color="#8E8E93" />
          </View>

          <View style={styles.collectionsGrid}>
            {myCollections.map((item) => (
              <View key={item.id} style={styles.collectionCard}>
                <Image source={{ uri: item.imageUrl }} style={styles.collectionImage} />
                <Text style={styles.collectionTitle}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Media Type Section */}
        <View style={styles.section}>
          <View style={styles.mediaTypeSectionHeader}>
            <Text style={styles.sectionTitle}>Media Type</Text>
          </View>

          <View style={styles.mediaTypeList}>
            {mediaTypes.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.mediaTypeItem,
                  index === mediaTypes.length - 1 && styles.mediaTypeItemLast,
                ]}>
                <View style={styles.mediaTypeLeft}>
                  <View style={styles.mediaTypeIconContainer}>
                    <IconSymbol name={item.icon} size={20} color="#000" />
                  </View>
                  <Text style={styles.mediaTypeTitle}>{item.title}</Text>
                </View>
                <IconSymbol name="chevron.right" size={20} color="#C7C7CC" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  downloadButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  needIdeasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  needIdeasText: {
    fontSize: 13,
    color: '#5856D6',
  },
  picksScroll: {
    paddingHorizontal: 16,
  },
  picksScrollContent: {
    gap: 12,
  },
  pickCard: {
    width: 160,
  },
  pickImage: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    backgroundColor: '#E5E5EA',
  },
  pickTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
    textAlign: 'center',
  },
  pickClipCount: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
    textAlign: 'center',
  },
  collectionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  collectionCard: {
    width: '48%',
  },
  collectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#E5E5EA',
  },
  collectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
    textAlign: 'center',
  },
  mediaTypeSectionHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  mediaTypeList: {
    marginHorizontal: 16,
    overflow: 'hidden',
    gap: 6
  },
  mediaTypeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
    backgroundColor: '#dfdff4ff',
    borderRadius: 8,
  },
  mediaTypeItemLast: {
    borderBottomWidth: 0,
  },
  mediaTypeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mediaTypeIconContainer: {
    width: 28,
    alignItems: 'center',
  },
  mediaTypeTitle: {
    fontSize: 17,
    color: '#000',
  },
});
