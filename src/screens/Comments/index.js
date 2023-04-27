import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {Button} from '@aws-amplify/ui-react-native/dist/primitives';
import CrimeComment from '../../components/Comment';
import {formatName} from '../../utils/stringFormatter';

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

  const variables = {
    filter: {
      crime_id: {
        contains: crime.id,
      },
    },
  };

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const commentsData = await API.graphql({
        query: queries.listComments,
        variables: variables,
      });
      const commentsList = commentsData.data.listComments.items;
      setComments(commentsList);
    } catch (err) {
      console.log(err);
    }
  }

  async function addComment() {
    try {
      commentInputRef.current.blur();
      const comment = {...formState};
      setComments([...comments, comment]);
      setInput('description', '');
      await API.graphql({
        query: mutations.createComment,
        variables: {input: comment},
      });
    } catch (err) {
      console.log('error creating comment:', err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.crimeContainer}>
        <Text style={styles.category}>{formatName(crime.category)}</Text>
        <Text style={styles.location}>{crime.location.street.name}</Text>
        <Text style={styles.date}>{crime.month}</Text>
      </View>
      {crime.outcome_status?.category && (
        <View style={styles.outcomeContainer}>
          <Text style={styles.category}>{crime.outcome_status.category}</Text>
          <Text style={styles.date}>{crime.outcome_status.date}</Text>
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
        data={comments}
        renderItem={({item}) => <CrimeComment comment={item} />}
      />
    </View>
  );
};

export default CommentsScreen;
