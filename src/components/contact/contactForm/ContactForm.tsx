import styles from './contactForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Grid, Box, TextField, Button } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

interface Form {
  name: string
  email: string
  project?: string
  message: string
}

export const ContactForm = () => {
  const { t, lang } = useTranslation('common')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit: SubmitHandler<Form> = (data: Form) => {
    console.log(data)
  }

  return (
    <form
      // component='form'
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register('name', { required: true })}
            label={t('name')}
            fullWidth
            error={!!errors.name}
            helperText={errors.name && 'Este campo es obligatorio'}
            InputProps={{ sx: { borderRadius: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('email', {
              required: true,
              pattern: /^[\w\.+-]+@[\w\.-]+\.\w+$/,
            })}
            label={t('email')}
            fullWidth
            error={!!errors.email}
            helperText={errors.email && 'Ingrese un email válido'}
            InputProps={{ sx: { borderRadius: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('project')}
            label={t('project')}
            fullWidth
            InputProps={{ sx: { borderRadius: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register('message', { required: true })}
            label={t('message')}
            fullWidth
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message && 'Este campo es obligatorio'}
            InputProps={{ sx: { borderRadius: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type='submit'
            variant='contained'
            endIcon={<SendOutlinedIcon />}
            className={styles.downloadButton}
          >
            {t('sendMessage')}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
