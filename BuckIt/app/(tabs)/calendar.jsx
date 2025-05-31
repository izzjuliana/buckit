import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    AgendaList,
    CalendarProvider,
    ExpandableCalendar,
} from 'react-native-calendars';

const ITEMS = [
  {
    title: '2025-06-10',
    data: [
      { name: 'Skydiving at 10 AM' },
      { name: 'Running Group at 12 PM' },
    ],
  },
  {
    title: '2025-06-11',
    data: [{ name: 'Rest day' }],
  },
];

const AgendaItem = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{item.name}</Text>
  </View>
));

export default function CalendarPage() {
  const calendarRef = useRef();

  const marked = useRef({
    '2025-06-10': { marked: true },
    '2025-06-11': { marked: true },
  });

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <CalendarProvider
        date={ITEMS[0]?.title}
        showTodayButton
        theme={{ todayButtonTextColor: 'blue' }}
      >
        <ExpandableCalendar
          ref={calendarRef}
          firstDay={1}
          markedDates={marked.current}
          // No onCalendarToggled — let it expand/collapse on its own
        />

        <AgendaList
          sections={ITEMS}
          renderItem={renderItem}
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 16,
  },
  section: {
    backgroundColor: '#f1f1f1',
    padding: 8,
    paddingLeft: 16,
    fontWeight: 'bold',
  },
});
