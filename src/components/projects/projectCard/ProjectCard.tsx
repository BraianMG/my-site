import LinkIcon from '@mui/icons-material/Link'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { FC } from 'react'

interface Props {
  image: string
  title: string
  description: string
  appLink: string
  repoLink: string
  videoLink: string
}

export const ProjectCard: FC<Props> = ({
  image,
  title,
  description,
  appLink,
  repoLink,
  videoLink,
}) => {
  return (
    <Card sx={{ width: "300px" }}>
      {image ? (
        <CardMedia
          component='img'
          alt='green iguana'
          height='140'
          image={image}
        />
      ) : (
        <></>
      )}
      <CardContent>
        <Typography gutterBottom variant='body1' sx={{fontWeight: 700, textAlign: 'center'}}>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {appLink ? (
          <IconButton color='primary' href={appLink} target='_blank'>
            <LinkIcon />
          </IconButton>
        ) : (
          <></>
        )}
        {repoLink ? (
          <IconButton color='primary' href={repoLink} target='_blank'>
            <GitHubIcon />
          </IconButton>
        ) : (
          <></>
        )}
        {videoLink ? (
          <IconButton color='primary' href={videoLink} target='_blank'>
            <YouTubeIcon />
          </IconButton>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  )
}
