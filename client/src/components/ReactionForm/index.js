import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';
import { QUERY_REACTIONS } from '../../utils/queries';


const ThoughtForm = () => {

    const [addReaction, { error }] = useMutation(ADD_REACTION, {
        update(cache, { data: { addThought } }) {
          // read what's currently in the cache
          const { reactions } = cache.readQuery({ query: QUERY_REACTIONS });
      
          // prepend the newest reaction to the front of the array
          cache.writeQuery({
            query: QUERY_REACTIONS,
            data: { reactions: [addReaction, ...reactions] }
          });
        }
      });


    const [reactionText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
          // add reaction to database
          await addReaction({
            variables: { reactionText }
          });
      
          // clear form value
          setText('');
          setCharacterCount(0);
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >            
            <textarea
                placeholder="Here's a new reaction..."
                value={reactionText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
            ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ThoughtForm;