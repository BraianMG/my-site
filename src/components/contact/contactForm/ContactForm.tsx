import styles from './contactForm.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  Slide,
  SlideProps,
  SnackbarCloseReason,
} from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { useState } from 'react'
import bmgApi from '@/api/bmgApi'
import { isAxiosError } from 'axios'
import { IContactMessage } from '@/interfaces'
import { LoadingButton } from '@mui/lab'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction='left' />
}

interface Feedback {
  open: boolean
  message: string
  severity: 'success' | 'error'
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<Feedback>({
    open: false,
    message: '',
    severity: 'success',
  })
  const { t, lang } = useTranslation('common')

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactMessage>()

  const onSubmit: SubmitHandler<IContactMessage> = async (
    data: IContactMessage
  ) => {
    try {
      setLoading(true)
      setFeedback({ ...feedback, open: false })

      await bmgApi.post('/message', { ...data })

      reset()
      setFeedback({
        open: true,
        message: t('messageSent'),
        severity: 'success',
      })
    } catch (error) {
      if (isAxiosError(error)) console.error(error.message)

      setFeedback({
        open: true,
        message: t('errorSendingMessage'),
        severity: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setFeedback({ ...feedback, open: false })
  }

  return (
    <form
      // component='form'
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name='name'
            control={control}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('name')}
                fullWidth
                error={!!errors.name}
                helperText={errors.name && 'Este campo es obligatorio'}
                InputProps={{ sx: { borderRadius: '1rem' } }}
              />
            )}
          ></Controller>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='email'
            control={control}
            defaultValue={''}
            rules={{ required: true, pattern: /^[\w\.+-]+@[\w\.-]+\.\w+$/ }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('email')}
                fullWidth
                error={!!errors.email}
                helperText={errors.email && 'Ingrese un email válido'}
                InputProps={{ sx: { borderRadius: '1rem' } }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='projectName'
            control={control}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('project')}
                fullWidth
                InputProps={{ sx: { borderRadius: '1rem' } }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='message'
            control={control}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label={t('message')}
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message && 'Este campo es obligatorio'}
                InputProps={{ sx: { borderRadius: '1rem' } }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            type='submit'
            variant='contained'
            endIcon={<SendOutlinedIcon />}
            className={styles.downloadButton}
            loading={loading}
            loadingPosition='end'
          >
            {t('sendMessage')}
          </LoadingButton>
        </Grid>
      </Grid>
      <Snackbar
        open={feedback.open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={feedback.severity}
          elevation={6}
          variant='filled'
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </form>
  )
}
