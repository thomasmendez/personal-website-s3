import React from 'react';
import PropTypes from 'prop-types';
import { Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProjectMedia = (props) => {
  const { media, mediaAlt, mediaTitle, mediaDescription, website, repository } = props;
  const extension = media.split('.').pop();
  return(
    <Grid container item>
      <CardActionArea>
        <CardMedia
          component={extension === 'mp4' ? 'video' : 'img'}
          image={media}
          alt={mediaAlt}
          autoPlay={extension === 'mp4'}
          controls={extension === 'mp4'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mediaTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mediaDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {website && (
          <Button size="small" color="primary" href={website} target="_blank">
            Website
          </Button>
        )}
        {repository && (
          <Button size="small" color="primary" href={repository} target="_blank">
            Repository
          </Button>
        )}
      </CardActions>
    </Grid>
  );
};

ProjectMedia.propTypes = {
  media: PropTypes.string.isRequired,
  mediaAlt: PropTypes.string,
  mediaTitle: PropTypes.string,
  mediaDescription: PropTypes.string,
  website: PropTypes.string,
  repository: PropTypes.string,
};

export default ProjectMedia;