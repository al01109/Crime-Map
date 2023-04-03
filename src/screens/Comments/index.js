import { View, Text, TextInput, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import { Button } from '@aws-amplify/ui-react-native/dist/primitives';
import CrimeComment from '../../components/Comment'

const CommentsScreen = (props) => {
  const route = useRoute();
  const { crime }  = route.params;
  const [comments, setComments] = useState([]);
  const [formState, setFormState] = useState({persistent_id: crime.persistent_id, description: ''});

  const variables = {
    filter: {
      persistent_id: {
        contains: crime.persistent_id
      }
    }
  };

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    
    console.log(variables.filter.persistent_id.contains)
    try{
      const commentsData = await API.graphql({
        query: queries.listComments,
        variables: variables  
      });
      const commentsList = commentsData.data.listComments.items;
      setComments(commentsList);
    } catch (err) {
      console.log(err);
    }
  }

  async function addComment() {
    try {
      const comment = { ...formState };
      setComments([...comments, comment]);
      setInput('description', '');
      const newComment = await API.graphql({ 
        query: mutations.createComment, 
        variables: { input: comment }
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.category}>{crime.category}</Text>
        <Text style={styles.location}>{crime.location.street.name}</Text>
      </View>
      <Text style={styles.comment}>Comments</Text>
      <View style={styles.commentInputContainer}>
        <TextInput style={styles.commentInput} placeholder='Add Comment...' onChangeText={(val) => setInput('description', val)} value={formState.description}/>
      </View>
      <Button style={styles.addComment} onPress={addComment}>Add Comment</Button>
      <FlatList style={styles.commentList}
        data={comments} 
        renderItem={({item}) => <CrimeComment comment={item} />}/>
    </View>
  )
}

export default CommentsScreen