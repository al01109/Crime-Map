import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import {View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {Button} from '@aws-amplify/ui-react-native/dist/primitives';
import CrimeComment from '../../components/Comment';
import {formatName, formatDate} from '../../utils/stringFormatter';
import styles from './styles';

const CommentsScreen = () => {
  const {
    params: {crime},
  } = useRoute();
  const commentInputRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [formState, setFormState] = useState({
    crime_id: crime.id,
    description: '',
  });

  const variables = useMemo(
    () => ({
      filter: {
        crime_id: {
          contains: crime.id,
        },
      },
    }),
    [crime.id],
  );

  const setInput = useCallback((key, value) => {
    setFormState(prevFormState => ({...prevFormState, [key]: value}));
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = useCallback(async () => {
    try {
      const commentsData = await API.graphql({
        query: queries.listComments,
        variables: variables,
      });
      const commentsList = commentsData.data.listComments.items;
      setComments(commentsList);
    } catch (err) {
      console.error(err);
    }
  }, [variables]);

  const addComment = useCallback(async () => {
    try {
      commentInputRef.current.blur();
      const comment = {...formState};
      setComments(prevComments => [...prevComments, comment]);
      setInput('description', '');
      await API.graphql({
        query: mutations.createComment,
        variables: {input: comment},
      });
    } catch (err) {
      console.error('error creating comment:', err);
    }
  }, [formState, setInput]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.crimeContainer}>
        <Text style={styles.category}>{formatName(crime.category)}</Text>
        <Text style={styles.location}>{crime.location.street.name}</Text>
        <Text style={styles.date}>{formatDate(crime.month)}</Text>
      </View>
      {crime.outcome_status?.category && (
        <View style={styles.outcomeContainer}>
          <Text style={styles.category}>{crime.outcome_status.category}</Text>
          <Text style={styles.date}>
            {formatDate(crime.outcome_status.date)}
          </Text>
        </View>
      )}
      <Text style={styles.comment}>Comments</Text>
      <View style={styles.commentInputContainer}>
        <TextInput
          ref={commentInputRef}
          style={styles.commentInput}
          placeholder="Add Comment..."
          onChangeText={val => setInput('description', val)}
          value={formState.description}
        />
      </View>
      <Button style={styles.addComment} onPress={addComment}>
        Add Comment
      </Button>
      <FlatList
        scrollEnabled={false}
        style={{marginBottom: 30}}
        data={comments}
        renderItem={({item}) => <CrimeComment comment={item} />}
      />
    </ScrollView>
  );
};

export default CommentsScreen;
