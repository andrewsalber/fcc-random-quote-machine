import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent id="text">
            <Typography>
                {props.selectedQuote ? '"' + props.selectedQuote.quote + '"' : ""}
            </Typography>
            <div id="author">
                {props.selectedQuote ? ' -' + props.selectedQuote.author : ""} 
            </div>
            <br />
        </CardContent>

        <CardActions>
            <Button size='small' onClick = {props.selectedQuoteIndex}>Next Quote</Button>
            Test
            <IconButton id="tweet-quote" href={encodeURI("twitter.com/intent/tweet")} target="_blank">
                <FontAwesomeIcon icon={faTwitter} size= "lg"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
        
    </Card>
)

export default QuoteMachine;